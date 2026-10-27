(() => {
  const bar = document.querySelector('.product-bar');
  const banner = document.querySelector('.app-banner');
  const ctas = document.querySelector('.listing-ctas');
  const bannerRevealOffset = 32;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = window.matchMedia('(min-width: 1100px)');

  function accessibility(element, visible) {
    element.inert = !visible;
    element.setAttribute('aria-hidden', String(!visible));
  }

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.matchMedia().add({ desktop: '(min-width: 1100px)', mobile: '(max-width: 1099px)', reduceMotion: '(prefers-reduced-motion: reduce)' }, context => {
      if (!context.conditions.desktop) {
        accessibility(bar, false);
        accessibility(banner, true);
        return;
      }
      const duration = context.conditions.reduceMotion ? 0 : .36;
      let barVisible;
      function reveal(element, visible, kind) {
        accessibility(element, visible);
        gsap.to(element, {
          autoAlpha: visible ? 1 : 0,
          ...(kind === 'bar' ? { yPercent: visible ? 0 : -100, y: 0 } : { y: visible ? 0 : 24 }),
          duration, ease: 'power2.out', overwrite: true
        });
      }
      gsap.set(bar, { y: 0, yPercent: -100, autoAlpha: 0 });
      gsap.set(banner, { y: 24, autoAlpha: 0 });
      // Trigger against the natural document, never against the sticky gallery.
      // The reserved banner slot prevents the gallery from jumping on reveal.
      ScrollTrigger.create({
        id: 'product-bar', trigger: ctas, start: `bottom top+=${bannerRevealOffset}`,
        end: 'max',
        onUpdate: syncBar, onRefresh: syncBar
      });
      function syncBar(self) {
        const visible = self.scroll() >= self.start;
        if (visible !== barVisible) {
          barVisible = visible;
          reveal(bar, visible, 'bar');
          reveal(banner, visible, 'banner');
        }
      }
      return () => { accessibility(bar, false); accessibility(banner, !desktop.matches); };
    });
    document.fonts.ready.then(() => ScrollTrigger.refresh());
    window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
  } else {
    // Native fallback: retain the interaction even if a vendor asset cannot load.
    function update() {
      const showBar = desktop.matches && ctas.getBoundingClientRect().bottom <= bannerRevealOffset;
      const showBanner = !desktop.matches || showBar;
      [[bar, showBar, 'translateY(-100%)'], [banner, showBanner, 'translateY(24px)']].forEach(([element, visible, hiddenTransform]) => {
        accessibility(element, visible);
        element.style.transition = reducedMotion.matches ? 'none' : 'opacity 360ms ease, transform 360ms ease, visibility 360ms';
        Object.assign(element.style, { opacity: visible ? 1 : 0, visibility: visible ? 'visible' : 'hidden', transform: visible ? 'translateY(0)' : hiddenTransform });
      });
    }
    let pending = false;
    function schedule() { if (!pending) { pending = true; requestAnimationFrame(() => { pending = false; update(); }); } }
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    reducedMotion.addEventListener('change', schedule);
    update();
  }

  document.querySelector('.back-to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'instant' : 'smooth' }));
  const dialog = document.querySelector('.placeholder-dialog');
  document.querySelectorAll('[data-dialog]').forEach(button => button.addEventListener('click', () => {
    dialog.querySelector('h2').textContent = button.dataset.dialog;
    dialog.showModal();
  }));
})();
