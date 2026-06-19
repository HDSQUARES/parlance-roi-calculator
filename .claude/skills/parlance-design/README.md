# Parlance — Design System

> Healthcare **Voice AI** for the busiest front door in healthcare.

This design system captures the brand, visual language, and UI of **Parlance**, a
conversational / generative Voice AI platform that automates high-volume inbound
phone calls for hospitals, health systems, and clinic networks (scheduling,
prescription refills, call routing, after-hours coverage, switchboard, etc.).

It exists so design agents can produce on-brand Parlance material — marketing
pages, one-pagers, decks, ads, landing pages — that look and read exactly like
the real product.

---

## 1. Company / product context

**Parlance** ("par·lance" — *a way of speaking*) sells AI-powered voice agents to
healthcare organizations. The pitch: patient access centers, hospital
switchboards, and clinics are overwhelmed by routine inbound calls. Parlance's
HIPAA-compliant conversational IVR and Intelligent Voice Assistants (IVAs) answer,
understand, and route those calls in real time, integrate with EHR/CRM systems,
and free human staff for complex, human-centered work.

**Positioning numbers** that recur across the site:
`1.9B+ calls handled` · `400+ health systems served` · `30+ years in healthcare voice`
· `85%+ routine self-service / calls automated` · `87%+ IVA caller engagement` ·
`40%+ agent time saved` · `30 days time-to-ROI` · `24/7 always available, no hold times`.

**One product, three "zones"** — the site is organized around where Parlance's AI
agents are deployed. These are the marketing surfaces / page archetypes:

| Surface | Headline theme |
|---|---|
| **Home** | "Voice AI for the busiest front door in healthcare" |
| **Switchboard** | "Every call answered and routed correctly" |
| **Contact Center** | "Reduce routine call volume — let agents handle what matters" |
| **Clinics** | "Make every interaction easier" |
| **Healthcare** (industry) | umbrella positioning |

It also markets sub-capabilities: Generative IVR, IVAs, HL7 integration,
EHR/CRM integration, Speech Attendant, Call Routing, two-way SMS / web chat.

**Company facts:** Parlance Corporation, 400 West Cummings Park, Suite 2000,
Woburn MA 01801. Phone 888-700-6263. Backed by **Constellation Software** (parent).
Tech partners: telephony platforms **Cisco, Avaya, Mitel**; EHR / scheduling
integrations **Cerner (Oracle Health), athenahealth, MEDITECH** (HL7-based, real-time).
Audience
is enterprise healthcare — hospitals, health systems, clinic groups from $30M
specialty practices to $75B+ national networks.

**Customers / logos provided** (in `assets/logos/`): AdventHealth (testimonial —
Kelly Hubka, Dir. of Population Health & Care Navigation, AdventHealth Shawnee
Mission), **Virtua Health** (*doubled call volume 200k→400k without adding staff*),
**HCA Healthcare** (*75+ hospitals, 70%+ calls automated*), **UW Medicine**
(*~4M calls/year*), Harvard Pilgrim Health Care, Luminis Health, Edward-Elmhurst,
Griffin Health, Carson Valley Health, Collaborative Health Partners, Queen of the
Valley, Santa Clara Regional, Shannon Health, Torrance Memorial, UCLA Health —
plus non-healthcare references: Amica, The New York Times, Skadden, Diagenix, and
universities (Colorado School of Mines, San Diego State, Sheridan College, U. of
Guelph, Western Ontario). EHR logos (Cerner, athenahealth, MEDITECH) and the
Kelly Hubka headshot were extracted from the source page screenshots. *(Several
references are legacy/cross-industry — the current site leads heavily with
healthcare.)*

---

## 2. Sources

This system was reverse-engineered from a brand asset drop (no live codebase or
Figma was provided — the product is a marketing website, not an app):

- **`Parlance-2.0/`** mounted folder containing:
  - `Home - Parlance - 4-24.pdf` — full homepage capture (image-based PDF)
  - Page screenshots: `Healthcare.png`, `Switchboard.png`, `Contact center.png`, `Clinics.png`
  - `Parlance Logo.png` — primary wordmark
  - Hero composite graphics: `Group 1321318012/14/15.png` (B&W photo + chat bubble scenes), `Frame 1984080182.png` (case-study card), `Group 1321317920.svg`
  - ~19 customer / reference logos (`amica.png`, `ucla-health.png`, …)
- Live site referenced for copy/structure: **parlance.com** (Solutions / Industries / Resources / About Us).

There is **no application UI** — Parlance's product is voice (phone calls), so the
only visual "product" is the marketing website. The UI kit therefore recreates the
**marketing website**, which is the company's primary designed surface.

---

## 3. Content fundamentals (voice & tone)

**Vibe:** confident, calm, enterprise-credible, outcomes-first. Healthcare-serious
but human and reassuring — never hypey or cutesy. It sells *relief* (less burnout,
shorter hold times, freed-up staff) backed by *proof* (decades, ROI, big numbers).

- **Person:** Addresses the buyer as **"you / your team / your health system"**;
  refers to the product as **"Parlance"** (proper noun, often as the subject of a
  sentence: *"Parlance understands the request and routes people to the right
  place."*). Patients are "patients / callers," staff are "operators / agents /
  front desk staff."
- **Casing:**
  - Hero headlines are frequently **ALL-CAPS** with one or two words emphasized
    (*"VOICE AI for the busiest front door in healthcare"*, *"EVERY CALL ANSWERED
    and routed correctly"*, *"REDUCE routine call volume"*, *"MAKE every
    interaction EASIER"*).
  - Section headlines are **sentence case** (*"Built for the way health systems
    operate"*, *"Patients say what they need & Parlance handles the rest"*).
  - **Eyebrows / kickers** above headlines are **UPPERCASE, letter-spaced**
    (*"CAPTURE NEW REVENUE"*, *"ONE CALL ENTRY POINT"*, *"BUILT FOR HEALTHCARE
    CONTACT CENTERS"*).
- **Sentence style:** short, declarative, benefit-led. Opens with the pain
  (*"Health system contact centers are overwhelmed."*) then the resolution.
  Plain language; jargon (IVR, IVA, HL7, EHR) used precisely but always explained.
- **Numbers** are a primary rhetorical device — big percentages and counts in stat
  bands (`85%+`, `40%+`, `30 days`, `1.9B+`).
- **CTAs** are direct, low-friction: *"Schedule a Demo"*, *"Schedule a Live Demo"*,
  *"Request a Demo"*, *"See It in Action"*, *"Talk to a Switchboard Expert"*,
  *"Learn More"*, *"Get the Case Study"*.
- **Emoji:** **not used in copy.** The *only* emoji appearance is inside illustrated
  chat/voice scenes as conversational reactions — gold ⭐ rating, 👍, ❤️ — to
  humanize a simulated patient interaction. Never in headings or body.
- **Compliance language** appears often and matter-of-factly: "HIPAA-compliant,"
  "HIPAA-compliant by design," "secure," "HL7 integration."

**Example copy blocks (verbatim from site):**
> *"Optimize operations and improve self-service with conversational AI."*
> *"With Parlance, you have a strong partner working with you to make really
> prudent and thoughtful decisions to optimize the process and the system."*
> — Kelly Hubka, Director of Population Health and Care Navigation, AdventHealth
> Shawnee Mission
> *"Patients don't stop needing answers at 5 PM."*
> *"Callers simply say what they need and calls are routed accurately to the right team."*

---

## 4. Visual foundations

**Overall feel:** clean enterprise-healthcare with energy. White and pale-mint
canvases broken up by deep navy→royal-blue gradient bands; teal as the signature
accent; gold/yellow as the spark. A recurring **concentric sound-wave arc** motif
(straight from the logo) signals "voice."

### Color
- **Teal `#40A0B8`** is the brand signature — used for the painterly swoosh arcs
  behind photos, photo circular masks, line icons, links, and (slightly deepened,
  `~#2E92AB`) for primary buttons.
- **Yellow/gold `#F8C830`** is the energetic accent — logo arcs, square feature-icon
  tiles, voice-waveform pills, eyebrow text on dark bands, stars, and the occasional
  CTA highlight. Used sparingly as a spark, never as a field.
- **Navy `#0E1A38` → royal blue `#2E6FD0`** gradient powers the full-bleed stat
  bands and dark feature sections (white text on top).
- **Pale mint `#E9F6F5`** is the alternate section background that keeps the page
  from being all-white; cool grey `#F5F8FB` for subtle panels.
- Body text is a dark slate `#15233D` / `#43536B`, not pure black.

### Typography
- **Display / headings:** geometric bold sans (Poppins as the system substitute).
  Big, tight, occasionally all-caps. The wordmark itself is a heavy geometric sans.
- **Body:** clean humanist sans (Open Sans as substitute), 16px, generous 1.6 line
  height, slate color.
- **Stat numbers** are the largest type on the page — display weight, tight
  tracking, often two-tone (number white, `+`/unit lighter).

### Backgrounds & imagery
- **Photography is black & white**, always of real people — patients on phones,
  smiling headset agents, front-desk staff. Photos are masked into **teal-tinted
  circles** and layered over **teal sound-wave swoosh arcs**.
- Floating **chat/voice bubbles** overlay the photos: navy and teal rounded
  rectangles with white text, a small icon, and soft drop shadow — simulating a
  live conversation. A **yellow "voice waveform" pill** (play triangle + audio bars)
  represents spoken audio.
- No photographic full-bleed hero backgrounds; backgrounds are flat color or
  gradient. No noise/grain. No stocky 3D or AI-art.
- Repeating motif: faint concentric **arc outlines** as decorative framing (e.g.
  around the case-study card).

### Cards
- White, **`14–20px` radius**, soft diffuse shadow (`0 6px 18px rgba(14,26,56,.08)`),
  usually borderless or a hairline `#E2E8F0`. Generous internal padding.
- Testimonial cards invert: **navy fill, white text**, with a small framed B&W
  headshot and the speaker's name/title.
- Feature cards: white card, a **yellow rounded-square icon tile** at top-left,
  bold title, grey body.

### Buttons
- **Primary:** teal fill (`#2E92AB`), white text, ~`8–10px` radius (gently rounded,
  not pill), medium weight. Hover → deepen to `#1F7E96`.
- **Secondary:** white fill, thin `#15233D`/grey border, dark text (outline button).
- On dark bands: a single **outlined white** button, or a teal solid.
- Press: slight darken + ~1px nudge; no heavy scale.

### Borders, radii, shadows
- Hairlines `#E2E8F0`. Radii scale: 6 / 10 / 14 / 20 / pill(999). Cards lean 14–20.
- Shadows are soft, navy-tinted, low-opacity — elevation by blur, not darkness.
  Chat bubbles use a slightly stronger shadow to "float."

### Motion (inferred / recommended)
- Subtle and professional: fade + small rise on scroll, gentle ease
  (`cubic-bezier(.22,.61,.36,1)`, ~200ms). Waveform bars can animate (equalizer).
  No bounce, no flashy parallax. Hover states are color/opacity shifts, not motion.

### Layout
- Centered max-width (~1200px) content column on white/mint, with **full-bleed**
  gradient bands that span edge to edge for stats and dark feature sections.
- Sticky top nav with a thin teal/gradient utility bar above it ("Meet Parlance at
  Upcoming Healthcare Events").
- Two-column feature rows alternate image-left / image-right; icon-grid rows for
  capability lists.

### Transparency / blur
- Minimal. Bubbles are solid. Occasional semi-transparent arc overlays. No heavy
  glassmorphism.

---

## 5. Iconography

- **Two icon registers** appear on the site:
  1. **Yellow rounded-square icon tiles** (~48–64px, `#F8C830` fill, white *solid*
     glyph inside) for headline feature triplets — e.g. microphone, stacked
     layers, shield. Bold and friendly.
  2. **Teal flat/solid line icons** (`#40A0B8`) for capability rows — phone,
     phone-forward (call routing), calendar, clock, prescription bottle/pill,
     map-pin (directions), headset, chat bubble, lock (security).
- **In chat composites:** small **black circular icon chips** (solid phone, solid
  user/avatar) sit beside bubbles; the Parlance sound-wave glyph appears as a small
  black circular badge.
- **Trust/award row** uses simple flat icons (trophy, building/finance, medical
  cross, line-chart ROI).
- **Emoji as icons:** only inside simulated conversations — ⭐ (gold star rating),
  👍, ❤️. Never elsewhere.
- The exact production icon set isn't shipped in the assets. The icons read as a
  **standard solid/line library** (Font-Awesome-solid-like weight). **SUBSTITUTION:**
  this system uses **[Lucide](https://lucide.dev)** (via CDN) as a clean, consistent
  stand-in, and pairs it with the brand's yellow-tile / teal-line treatment. Flag to
  the user if pixel-exact icons are required — supply the original SVG/icon font.

**Brand assets in `assets/`:**
- `logo-parlance.png` — primary wordmark (black text + yellow arcs)
- `logo-parlance-white.png` — reversed wordmark for dark backgrounds (generated)
- `glyph-soundwave.png` — the arcs alone (icon / favicon use, generated crop)
- `hero-man-phone.png`, `hero-agent-headset.png`, `hero-clinic-bubbles.png` — signature
  hero composites (B&W photo + bubbles + waveform)
- `case-study-card.png` — case-study thumbnail device
- `logos/` — customer & reference logos

---

## 6. Index / manifest

Root files:
- **`README.md`** — this file (context, voice, visual foundations, iconography).
- **`colors_and_type.css`** — CSS custom properties for color + type, plus semantic
  classes (`.p-display`, `.p-h1/2/3`, `.p-lead`, `.p-body`, `.p-eyebrow`, `.p-stat`,
  buttons via the kit). Import this in any Parlance artifact.
- **`SKILL.md`** — Agent-Skill manifest (for use in Claude Code / download).
- **`assets/`** — logos, glyph, hero composites, customer logos.
- **`preview/`** — small HTML cards that populate the Design System tab (colors,
  type, components, etc.). Reference specimens, not for production.
- **`ui_kits/website/`** — high-fidelity recreation of the Parlance marketing site:
  `index.html` (interactive page), `README.md`, and modular JSX components
  (nav, hero, stat band, feature grid, logo wall, testimonial, CTA band, footer,
  voice-bubble composite, buttons).

Demand-gen & content folders (added in the expansion build):
- **`guides/`** — interactive lead magnets: `roi-calculator.html` (call volume →
  annual savings, live count-ups), `self-assessment.html` (5-step patient-access
  quiz → scored result + gated report), `product-tour.html` (5-step walkthrough of
  a call being answered, understood, routed, resolved, confirmed).
- **`downloadables/`** — letter-size (8.5×11) print-ready PDFs: `solution-brief-switchboard.html`,
  `roi-fact-sheet.html`, `case-study-virtua.html`, `buyers-guide-checklist.html`.
  Print via the browser (each is one page, `@page size:letter`).
- **`lead-gen/`** — `gated-landing.html` (email-gate landing + success state),
  `email-template.html` (table-based HTML email), `social-ad-cards.html`
  (LinkedIn 1200×627 + square 1080×1080 ad units).
- **`slides/`** — `index.html` is a 7-slide branded deck (title, problem, stat band,
  feature columns, testimonial, old-IVR-vs-Parlance comparison, closing CTA) built
  on `deck-stage.js`. No source deck template was provided; this is an original
  template in the brand system. Arrow-key / click navigation; print to PDF built in.

The `preview/` component library now also covers: form fields, badges & pills, nav,
footer, CTA band, accordion/FAQ, testimonial, customer-result cards, integrations &
partners, plus the voice/call vocabulary (bubbles, bubble types, call indicators,
call routing, speech bubbles, iPhone live-call, voice-call transcript).

---

*Fonts (Poppins / Open Sans) and icons (Lucide) are nearest-match substitutes —
the source brand assets did not include font files or an icon set. Replace with the
official files when available.*
