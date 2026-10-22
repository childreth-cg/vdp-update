# CarGurus Design System

A practical, branded toolkit for designing CarGurus interfaces, marketing, and
prototypes. It captures the brand foundations (color, type, logo, voice,
iconography, imagery), reusable UI components, and full-screen product
recreations — everything an agent or designer needs to produce on-brand work
fast.

> **What is CarGurus?** CarGurus is the #1 most-visited car-shopping site. It
> helps consumers find their next car by surfacing the most inventory and
> ranking listings with its signature **Deal Ratings** (Great Deal → Overpriced),
> vehicle history, and financing tools — so shoppers can make a confident
> decision. It also sells software and lead products to dealerships. The
> family of brands includes **Autolist** and **PistonHeads**, and an AI shopping
> companion branded **Guru**.

---

## Sources

This system was reconstructed from the **"CarGurus Brand kit"** Figma file
(attached as a virtual filesystem). Key pages referenced: `Logo`, `Color`,
`Typography`, `Iconography`, `Imagery`, `Voice`, `Patterns`, `Elements`,
`System`. Real SVG logo/icon geometry and product component specs were
materialized directly from that file; vehicle photography and the brand hero
billboard were copied from its Imagery page.

No public codebase was provided. If you have access to the CarGurus design
Figma or the production web/app repos, link them here for higher-fidelity
component work.

---

## Tagline & positioning

- **Tagline:** "Search less. Find more."
- **Brand promise:** the most inventory + trustworthy Deal Ratings → the best
  deal, without the hassle.

---

## CONTENT FUNDAMENTALS

**Brand voice: "Friendly, confident, and on your side."** CarGurus sounds like a
knowledgeable friend guiding you through a big decision — clear, helpful, and
easy to follow. The test the brand uses: *"If it sounds like something you'd
actually say out loud, we're doing it right."*

Three voice pillars:
- **Clear and trustworthy** — say what matters in plain language people can rely on.
- **Helpful and approachable** — be supportive and easy to follow. No lectures, no confusion.
- **Confident yet humble** — we know our stuff, but we let the value speak for itself.

**Person & address.** Speak to the reader as **"you."** Refer to the brand as
**"we"/"our."** Warm but not chummy; never hypey.

**Casing.** **Sentence case everywhere** — headlines, subheads, buttons. Do not
Title Case UI. Product names ("Deal Rating", "Great Deal", "Guru") are
capitalized.

**Punctuation.**
- **Periods:** use for complete sentences and subheads. Skip them in headlines and buttons unless clarity demands it.
- **Exclamation points:** avoid them. Our value speaks for itself.
- **Commas:** use the Oxford comma to avoid ambiguity.
- **Colons:** use sparingly — best to introduce a list or draw a clear connection.

**Numbers.** Spell out one through nine; use numerals for 10 and up. Always
numerals for prices, stats, model years, and data.

**Emoji.** Not used in the brand system. Don't add them.

**Tone by audience — say this, not that:**

| Audience | Do say | Don't say |
|---|---|---|
| **Consumers** | "Get the best deal, without the hassle" · "See what your car's worth" · "Compare cars with real pricing" | "Act now" · "Unbelievable deals" · "Let our experts show you the way" |
| **Dealers** | "Reach more serious shoppers" · "Move inventory faster with real data" · "Make more profitable decisions" | "Revolutionize your journey" · "Turbocharge your leads" · "Unlock omni-channel synergy" |

Gut checks: *Consumer* — "Would this help someone feel more sure about their
next step?" *Dealer* — "Would this make sense to a GM with 10 seconds on the
showroom floor?"

---

## VISUAL FOUNDATIONS

**Color.** Four primary brand colors anchor everything: **CG Red `#F5333F`**,
**CG Blue `#0499FD`**, **Navy `#05317B`**, and **Midnight `#000049`**. Navy and
Midnight carry trust and provide flexibility; Red and Blue are the energetic
foundation (and the wordmark's two colors). A vibrant secondary palette
(green / yellow / orange) is *derived from the Deal Rating colors*. Neutrals run
on a **cool, faintly-blue gray ramp** — surfaces lean to **Fog `#F4F6F9`** and
**Ice Blue `#E4F5FE`** rather than warm grays. Headlines and most brand body
copy are **Midnight**, not pure black.

**The Deal Rating scale is sacred.** The gauge metaphor (an arrow that rotates
from pointing up to pointing down) maps green → yellow → orange → red:
**Great Deal** (deep green) · **Good Deal** (green) · **Fair Deal** (yellow) ·
**High Priced** (orange) · **Overpriced** (red). Keep these colors and order.

**Gradients.** Used for depth and to pair with pathways — never as loud
decoration. Values are pulled from brand colors: a navy-blue pathway gradient,
a red pathway gradient, and a distinct **AI gradient (red → navy → blue)**
reserved for AI-focused product/marketing, always paired with the **sparkle**
mark.

**Type.** Display headlines (H1/H2) are set in **Rund Display**, a friendly
geometric sans, **semibold**, with *tight* tracking (~0.01em) and *tight* leading
(~0.95). Body, functional headlines (H3), captions, and UI are **Graphik**
regular/semibold, leading ~1.5, tracking 0.2px. (Outfit is the websafe fallback
for Google Docs/Slides.) Headlines are sentence case and avoid punctuation.

**Pathways — the signature motif.** A "pathway" is a rounded-rectangle with a
quarter-circle bend (think a road curving), inspired by the car-buying journey.
It appears as large background shapes, photo masks, and connective graphics,
usually in Fog, Ice Blue, or brand gradients. This is the most recognizable
non-logo brand element.

**Imagery.** **Vehicles** are core: shot on white (or brand-color backdrops)
with a **consistent soft drop shadow**, framed **side-profile, front-facing, or
overhead** to match the flat pathway language. Stick to on-brand vehicle colors
(navy, red, white, ice blue). Lifestyle photography is bright, modern, and
optimistic. Imagery skews **cool and clean**, never moody/grainy.

**Backgrounds.** Mostly white or Fog. Color blocks and pathway gradients add
energy. No noise, no heavy textures.

**Corners & cards.** Generous rounding: badges/tags `4px`, inputs `8px`, default
cards `12px`, hero/feature cards `16–20px`, buttons & eyebrows fully rounded
(pill, `60px+`). Cards sit on **soft, cool, low-contrast shadows**
(`rgba(0,0,73,…)`) with an optional hairline border `#D8DBDE` — not hard black
shadows.

**Buttons.** Pill-shaped, 44px tall (36px small). **Primary** = filled Royal
Blue `#0763D3`, white text. **Secondary** = transparent with a 1px Royal Blue
border. **Ghost** = text only. **AI** = the red→navy→blue gradient pill with a
leading sparkle. Label font is Graphik medium 16px.

**States & motion.** Hover darkens fills one step (Royal Blue → Blue-700) or
adds a subtle tint on ghost/secondary. Press nudges darker (→ Navy); avoid
scale-shrink gimmicks. Transitions are short and smooth (120–200ms,
`cubic-bezier(0.2,0.6,0.2,1)`) — gentle fades/slides, no bounces or infinite
loops. Focus uses a 3px Royal-Blue ring.

**Transparency & blur.** Used lightly — soft tints (e.g. ice-blue overlays) and
the occasional frosted header. Not a core motif.

---

## ICONOGRAPHY

CarGurus uses a **flat, line-and-fill icon set built in Navy and CG Blue.**
Icons can stand alone or sit inside a filled **circular** background of Navy or
Ice Blue. They read as friendly and geometric, matching the type.

- **Format:** SVG, single-color, painted with `currentColor` so they inherit
  text color. Default 24×24 viewBox. Copied into `assets/icons/`
  (`search`, `chevron-down`, `chevron-up`, `map-marker`, `check-circle`,
  `info-circle`, `close`, `plus`, `star`, `sparkle`).
- **The sparkle** (`assets/icons/sparkle.svg`) is the brand's **AI mark** — a
  two-star "twinkle." Pair it with the AI gradient; don't use it as a generic
  decorative star (use `star.svg` for ratings).
- **Two-tone treatment:** some icons use Navy + CG Blue together for emphasis.
- **No emoji**, and avoid Unicode glyphs as icons — use the SVG set.
- This kit is a curated subset of the full CarGurus icon library. For a missing
  glyph, match the flat, geometric, 1.5–2px-feel style (or substitute a
  like-styled open-source icon and flag it).

---

## Index / manifest

**Root**
- `styles.css` — global entry point (import manifest only).
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible entry for use in Claude Code.

**Tokens** (`tokens/`, all imported by `styles.css`)
- `fonts.css` — font families + Google Fonts substitutions.
- `colors.css` — brand ramps, neutrals, gradients, semantic aliases, deal ratings.
- `typography.css` — scale, weights, line-heights, composed roles.
- `spacing.css` — 4px spacing scale, radii, shadows, motion.

**Assets** (`assets/`)
- `logos/` — `cargurus-wordmark.svg`, `cargurus-white.svg`, `cg-bug.svg`,
  `guru-wordmark.svg`, `guru-white.svg`.
- `icons/` — flat UI icon set + `sparkle.svg`.
- `vehicles/` — on-white vehicle renders (front + side, navy/red/white).
- `imagery/` — `hero-billboard.png` (brand pathway hero).

**Components** (`components/<group>/`) — each ships `<Name>.jsx`, `<Name>.d.ts`,
`<Name>.prompt.md`, and a `@dsCard` HTML specimen. Bundle exposes them on
`window.CarGurusDesignSystem_a90bbd`.
- `buttons/` — Button (primary / secondary / ghost / AI gradient)
- `badges/` — Badge, Eyebrow
- `deal-rating/` — DealRating (the signature gauge)
- `layout/` — Card
- `forms/` — Input
- `brand/` — Logo, Pathway
- `listings/` — VehicleCard

**UI kits** (`ui_kits/`)
- `marketplace/` — consumer car-shopping recreation (home → results → detail).
  Also registered as a Starting Point.

**Guidelines** (`guidelines/`) — foundation specimen cards (Type, Colors,
Spacing, Brand) that populate the Design System tab.

---

## Caveats

- **Brand fonts not yet uploaded.** `--font-display` (Rund Display) and
  `--font-body` (Graphik) are licensed; until the `.woff2` files +
  `@font-face` rules are dropped in, both fall back to **Outfit** (the brand's
  free websafe face) and system fonts. The tokens already list the real family
  names first, so they upgrade automatically. See `tokens/fonts.css`.
- The icon set is a **subset**; the vehicle library is a small sample of the
  brand renders.
