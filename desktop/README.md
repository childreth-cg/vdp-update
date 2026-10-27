# Desktop listing scroll prototype

Open `desktop/index.html` directly, or serve the repository and visit `/desktop/`.

The listing summary recreates the supplied Toyota 4Runner panel. The gallery,
navigation, ad placements, and remaining content are wireframes sized around
`at top.png`, `scrolled.png`, and `full.png`.

## Interaction

- The document scrolls normally. The gallery moves up with the page and then
  stays at its CSS sticky offset while the right column continues scrolling.
- When the bottom of the original CTA group reaches 32px from the top edge,
  the product bar
  fades and slides down while the app banner fades and slides up into its
  reserved slot beneath the gallery. Scrolling back reverses both transitions.
- The gallery releases at the end of the right column; the product bar stays
  visible through the remaining sections, including the bottom of the page.
- Subscribe and Dealer blocks are centered with a maximum width of 1,200px.
- Below 1100px the page becomes a single column. Reduced motion uses immediate
  visibility changes. CTA destinations are placeholder dialogs.

`desktop.css` contains dimensions, spacing, and the sticky offset.
`desktop.js` contains the scroll thresholds and 360ms transitions. GSAP 3.13.0
and ScrollTrigger are vendored locally with their license headers preserved.
The existing shared font stylesheet loads Outfit from Google Fonts.

## Validation

With Playwright available in Node's module path and Chromium installed:

```sh
node --test desktop/scroll.test.cjs
```

Tests cover three desktop viewports, CTA boundary crossing in both directions,
gallery pinning and release, banner visibility, responsive resizing, reduced
motion, placeholder CTA actions, and a missing-library fallback. Remote font
requests are blocked in tests for deterministic geometry. Visual rendering and
animation quality require manual review; they have not been visually verified.
