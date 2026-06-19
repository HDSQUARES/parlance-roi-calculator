# Parlance — Website UI Kit

A high-fidelity, interactive recreation of the **Parlance marketing website**
(parlance.com). Parlance's product is voice (phone calls), so the marketing site
is the company's primary designed surface — this kit reproduces it.

## Run it
Open `index.html`. It's a single-page recreation of the homepage with working
interactions:
- **Nav** with hover dropdowns (Solutions / Industries / Resources / About Us)
- **Request / Schedule a Demo** opens a modal lead form with a success state
- **"Three zones"** dark section — click a row to make it the active (yellow) agent
- Animated **voice waveform** equalizer bars

## Files
| File | What it is |
|---|---|
| `index.html` | Page shell — loads React + Babel + Lucide + the JSX below |
| `kit.css` | All component styles (pairs with `../../colors_and_type.css` tokens) |
| `components.jsx` | Primitives: `Icon`, `Button`, `Eyebrow`, `Waveform`, `Bubble`, `StatBand`, `FeatureGrid`, `LogoWall` |
| `sections.jsx` | Sections: `Zones`, `Testimonial`, `TrustRow`, `CTABand`, `Footer` |
| `nav.jsx` | `Nav`, `DemoModal`, `Hero` |
| `app.jsx` | Assembles the homepage from the components above |

All components are exported on `window.Parlance` so the Babel scripts share scope.

## Component vocabulary
- **Buttons** — `primary` (teal), `yellow`, `outline` (white + grey border),
  `ondark` (outlined white). Gently rounded (9px), never pill.
- **Hero** — two-column: accent-colored headline + lead + CTAs on the left, a
  black-&-white photo composite (teal circle mask, floating navy/teal chat
  bubbles, yellow waveform pill) on the right. Composite art lives in
  `../../assets/hero-*.png`.
- **StatBand / CTABand / Zones** — full-bleed navy→royal gradient bands with white
  text; the signature dark surfaces.
- **FeatureGrid** — three columns, each with a yellow rounded-square icon tile.
- **Testimonial** — inverted navy card with framed headshot.
- **Footer** — near-black, white reversed logo, gold contact icons, link columns.

## Fidelity notes & substitutions
- **Fonts:** Poppins (display) + Open Sans (body) — nearest-match substitutes; the
  source ship no font files. Loaded via Google Fonts in `colors_and_type.css`.
- **Icons:** [Lucide](https://lucide.dev) via CDN as a clean stand-in for the
  site's solid/line icon set (no original icon assets were provided), paired with
  the brand's yellow-tile / teal-line treatment.
- **Testimonial headshot** uses a placeholder logo image — swap for a real photo.
- This is a cosmetic recreation, not production code: forms don't submit, links are
  inert (`href="#"`), and copy is representative of the live site rather than a
  verbatim mirror of every section.
