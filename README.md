# Parlance — Call Management ROI Calculator

A single-page, on-brand ROI calculator for **Parlance** (healthcare Voice AI).
Five live inputs project the annual capacity gain, cost savings, and reclaimed
revenue Parlance delivers to a patient access team — modeled on Parlance's
*Call Management ROI Projections* report.

## Live site

Static site, deployed on **Vercel** (auto-deploys on push). No build step —
`index.html` is served from the repo root.

## Inputs

1. Calls per year your team handles
2. Operators on your team
3. Current openings on your team
4. Average hourly rate per operator
5. Is this rate loaded? (Yes = includes benefits/overhead; No adds a 30% burden)

## Outputs

Capacity gain (current → potential volume), Reduce Staffing Costs, Reduce
Turnover, Identify Hidden Problems, Increase FCR, Reclaim Revenue, and total
projected annual impact — with live count-up animations.

## The model

The algorithm is reverse-engineered from the client's ROI report; the default
inputs reproduce that sample report exactly. Every assumption constant lives in
the documented `CONFIG` block at the top of the script in `index.html`, so the
rate card can be tuned without touching the calculation logic.

| Output | Formula | Default constant |
|---|---|---|
| Potential volume | `calls ÷ (1 − CAPACITY_DEFLECT)` | 0.40 |
| Reduce Staffing Costs | `operators × rate × 2080 × STAFF_DEFLECT` | 0.50 |
| Reduce Turnover | `openings × rate × 2080 × TURNOVER_RATIO` | 1.271 |
| Identify Hidden Problems | `calls × HIDDEN_PER_CALL` | $0.0725 |
| Increase FCR | `calls × FCR_PER_CALL` | $0.0336 |
| Reclaim Revenue | `calls × REVENUE_PER_CALL` | $1.00 |

## Project layout

```
index.html      — the calculator (self-contained HTML/CSS/JS)
assets/         — Parlance brand logos + sound-wave glyph
vercel.json     — static hosting config (clean URLs, asset caching)
.claude/skills/parlance-design/  — full Parlance design system (brand skill)
```

## Branding

Colors, type, and assets come from the bundled Parlance design system
(`.claude/skills/parlance-design/`): teal `#40A0B8` signature, gold `#F8C830`
spark, navy→royal gradient panels, Poppins + Open Sans.
