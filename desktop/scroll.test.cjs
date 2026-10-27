const { test } = require('node:test');
const assert = require('node:assert/strict');
const { pathToFileURL } = require('node:url');
const path = require('node:path');
const { chromium } = require('playwright');

const url = pathToFileURL(path.join(__dirname, 'index.html')).href;

test('desktop scroll choreography, reverse, resize, reduced motion, and fallback', async t => {
  const browser = await chromium.launch({ headless: true });
  t.after(() => browser.close());
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  // Geometry checks are deterministic and do not depend on a remote font service.
  await page.route(/^https?:/, route => route.abort());
  await page.goto(url);
  await page.evaluate(() => document.fonts.ready);
  const scroll = async y => {
    await page.evaluate(y => window.scrollTo(0, y), y);
    await page.waitForTimeout(450);
  };
  const metrics = () => page.evaluate(() => {
    const rect = selector => {
      const { top, bottom, height, width } = document.querySelector(selector).getBoundingClientRect();
      return { top, bottom, height, width };
    };
    return {
      y: scrollY, gallery: rect('.gallery-sticky'), hero: rect('.gallery-image'), thumbnails: rect('.gallery-thumbnails'), summary: rect('.listing-summary'),
      ctas: rect('.listing-ctas'), layout: rect('.listing-layout'), ad: rect('.ad-area'),
      barVisible: !document.querySelector('.product-bar').inert,
      bannerVisible: !document.querySelector('.app-banner').inert,
      barTop: rect('.product-bar').top,
      barOpacity: Number(getComputedStyle(document.querySelector('.product-bar')).opacity),
      bannerOpacity: Number(getComputedStyle(document.querySelector('.app-banner')).opacity),
      overflow: document.documentElement.scrollWidth > innerWidth,
      stickyTop: parseFloat(getComputedStyle(document.querySelector('.gallery-sticky')).top)
    };
  });

  for (const viewport of [{ width: 1440, height: 1000 }, { width: 1982, height: 1248 }, { width: 1100, height: 768 }, { width: 1440, height: 680 }]) {
    await t.test(`${viewport.width}×${viewport.height}: initial movement and CTA handoff`, async () => {
      await page.setViewportSize(viewport);
      await scroll(0);
      await page.evaluate(() => ScrollTrigger.refresh());
      const initial = await metrics();
      assert.equal(initial.barVisible, false);
      assert.equal(initial.bannerVisible, false);
      assert.equal(initial.overflow, false);
      assert.ok(Math.abs(initial.hero.width - initial.thumbnails.width) < 1, 'hero fills the gallery width even when height is constrained');
      await scroll(40);
      const early = await metrics();
      assert.ok(Math.abs(initial.gallery.top - early.gallery.top - 40) < 2, 'gallery initially follows document');
      await scroll(initial.ad.bottom + 15);
      const pinned = await metrics();
      assert.ok(Math.abs(pinned.gallery.top - pinned.stickyTop) < 2, 'gallery settles at sticky offset');
      assert.equal(pinned.bannerVisible, false, 'app banner waits for the product bar');
      assert.ok(pinned.gallery.bottom <= viewport.height + 1, 'gallery and app banner fit in viewport');
      assert.equal(pinned.barVisible, false, 'product bar waits for CTA group');
      const revealAt = initial.ctas.bottom - 32;
      await scroll(revealAt - 5);
      assert.equal((await metrics()).barVisible, false, 'no premature CTA handoff');
      assert.equal((await metrics()).bannerVisible, false, 'no premature app banner');
      await scroll(revealAt + 5);
      const handoff = await metrics();
      assert.ok(handoff.barVisible && handoff.barOpacity > .99);
      assert.ok(handoff.bannerVisible && handoff.bannerOpacity > .99, 'app banner appears with the product bar');
      assert.ok(Math.abs(handoff.barTop) < 1);
      assert.ok(Math.abs(handoff.gallery.top - pinned.gallery.top) < 1, 'gallery remains pinned');
      assert.ok(handoff.summary.top < pinned.summary.top, 'right content continues scrolling');
      await scroll(revealAt - 20);
      assert.equal((await metrics()).barVisible, false, 'product bar reverses when CTA returns');
      assert.equal((await metrics()).bannerVisible, false, 'app banner reverses with the product bar');
      await scroll(0);
      assert.equal((await metrics()).bannerVisible, false, 'app banner reverses at top');
      await scroll(initial.layout.bottom - 20);
      const released = await metrics();
      assert.ok(released.gallery.top < pinned.gallery.top, 'gallery releases at end of right column');
      assert.equal(released.barVisible, true, 'bar persists beyond listing');
      await scroll(100000);
      assert.equal((await metrics()).barVisible, true, 'bar persists at the bottom of the page');
    });
  }

  await t.test('resize to mobile, then desktop, recalculates scroll state', async () => {
    await scroll(800);
    for (const width of [1099, 390]) {
      await page.setViewportSize({ width, height: 844 });
      await page.waitForTimeout(500);
      const mobile = await metrics();
      assert.equal(mobile.overflow, false);
      assert.equal(mobile.barVisible, false);
      assert.equal(mobile.bannerVisible, true);
      assert.equal(await page.locator('.gallery-sticky').evaluate(el => getComputedStyle(el).position), 'static');
    }
    await page.setViewportSize({ width: 1440, height: 1000 });
    await scroll(800);
    assert.equal((await metrics()).barVisible, true);
  });

  await t.test('reduced motion preserves the handoff without tweening', async () => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await scroll(0);
    await page.evaluate(() => window.scrollTo(0, 800));
    await page.waitForTimeout(100);
    const reduced = await metrics();
    assert.equal(reduced.barVisible, true);
    assert.equal(reduced.barOpacity, 1);
    assert.ok(Math.abs(reduced.barTop) < 1);
  });

  await t.test('sticky CTA is operable and returns to the summary', async () => {
    await page.locator('.bar-actions .primary').click();
    assert.equal(await page.locator('dialog').evaluate(el => el.open), true);
    assert.equal(await page.locator('dialog h2').textContent(), 'Check availability');
    await page.keyboard.press('Escape');
    await page.locator('.back-to-top').click();
    await page.waitForTimeout(100);
    assert.equal((await metrics()).y, 0);
  });

  await t.test('missing animation library retains native scroll behavior', async () => {
    await page.route('**/vendor/**', route => route.abort());
    await page.reload();
    assert.equal(await page.evaluate(() => typeof window.gsap), 'undefined', 'vendor requests are actually blocked');
    await scroll(800);
    assert.equal((await metrics()).barVisible, true);
    await scroll(100000);
    assert.equal((await metrics()).barVisible, true, 'fallback bar persists at page bottom');
    await scroll(0);
    assert.equal((await metrics()).barVisible, false);
    assert.equal((await metrics()).bannerVisible, false);
  });
  assert.deepEqual(errors, [], 'no JavaScript errors');
});
