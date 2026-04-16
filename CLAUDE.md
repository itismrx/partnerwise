# PartnerWise — Market Entry Planner

## Project Overview

A single-file HTML prototype for an AI-powered Market Entry Planner ("Internationalization" platform). No build step, no framework — open `market_planner_ui.html` directly in a browser.

**Stack**
- HTML5 single-page prototype (no JS framework)
- [Tailwind CSS](https://cdn.tailwindcss.com) via CDN
- [Flowbite 2.2](https://flowbite.com) component library via CDN
- [Figtree](https://fonts.google.com/specimen/Figtree) font (Google Fonts)
- [Iconify / Hugeicons](https://icon-sets.iconify.design/hugeicons/) icon set

**Key file:** `market_planner_ui.html`

---

## Design System

### Primary Color
```
--primary:       #11205D   (dark navy — buttons, active states, headings)
--primary-mid:   #2d4899   (hover state)
--primary-light: #e8edf7   (tinted backgrounds, badges)
```

### Supporting Palette
```
--border:  #e5e9f0   (card borders, dividers)
--bg:      #f6f8fb   (page background)
--text:    #0f172a   (body text)
--muted:   #64748b   (secondary text, labels)
--card:    #ffffff   (card backgrounds)
```

### Typography — Figtree
| Role              | Size      | Weight |
|-------------------|-----------|--------|
| Page heading      | 22px      | 800    |
| Card title        | 13px      | 700    |
| Section label     | 10.5px    | 700    |
| Body / table      | 12–13px   | 400–600|
| Muted / caption   | 11px      | 400    |
| Badge / tag       | 11px      | 700    |

### Component Conventions (Flowbite-aligned)

**Cards** — `.pw-card`
- `border-radius: 14px`
- `border: 1px solid var(--border)`
- `box-shadow: 0 1px 3px rgba(17,32,93,.06)`
- Header has bottom border; body has `padding: 15px 18px`

**Buttons** — `.btn-primary`
- Pill shape: `border-radius: 99px`
- Background `var(--primary)`, white text
- Hover: lift + darken (`--primary-mid`)

**Badges**
- `.badge-high` → red (`#fee2e2 / #b91c1c`)
- `.badge-med` → amber (`#fef3c7 / #92400e`)
- `.badge-low` → green (`#dcfce7 / #15803d`)
- `.badge-primary` → navy tint (`--primary-light / --primary`)
- `.badge-ready` → green
- `.badge-review` → amber
- `.badge-pending` → red

**Progress bars** — `.score-bar-wrap` / `.score-bar-fill`
- Height: `7px`, fully rounded (`border-radius: 99px`)
- Color follows badge semantics when representing risk/threat level

**PESTLE status colors**
- Positive → green (`#f0fdf4 / #15803d`)
- Mixed    → amber (`#fefce8 / #92400e`)
- Negative → red   (`#fff1f2 / #be123c`)

---

## UI Sections (Sidebar Navigation)

| Nav Key     | Page Title           | Content Summary                                              |
|-------------|----------------------|--------------------------------------------------------------|
| overview    | Plan Overview        | Decision snapshot banner + 6-card grid (SWOT, CJ, Competitors, VP, PESTLE, Porter's) |
| business    | Business Profile     | Company info, International Readiness score, BMC, Product Portfolio, Partnership Check |
| market      | Market Opportunity   | KPI tiles, Opportunity Scorecard, SWOT full, Porter's, Competitor map, Trends |
| entry       | Entry Strategy       | Uppsala 3-stage cards, Rationale, VP Canvas, CJ Map, Marketing, Partnership Canvas |
| financial   | Financial Model      | KPI dashboard, Revenue ramp chart, 3-yr projection, Cost structure, Resource allocation |
| risk        | Risk & Mitigation    | Risk register heatmap, top risks table, mitigation actions |
| roadmap     | Execution Roadmap    | Phase timeline, quarterly milestones, ownership matrix |
| compare     | Compare Scenarios    | Side-by-side entry mode comparison table |
| pestle      | PESTLE Detail        | Expanded P/E/S/T/L/E cards with Key Factors, Watch Points, Action Items |

---

## Design Rules

1. **Single file** — keep everything in `market_planner_ui.html`. No build, no separate CSS file.
2. **Flowbite-first** — prefer Flowbite patterns before writing custom CSS. Use Tailwind utility classes for one-off spacing; reserve custom CSS classes for repeated patterns.
3. **No inline `style` bloat** — if a style appears more than twice, extract it to a CSS class in the `<style>` block.
4. **Icon set** — always use Hugeicons via Iconify (`data-icon="hugeicons:..."`) for consistency.
5. **Pill buttons** — all primary action buttons must use `border-radius: 99px`.
6. **Card shadows** — all `.pw-card` and `.stat-tile` elements must carry the subtle shadow; never use flat borders alone.
7. **Color discipline** — do not introduce new colors. Use the token set above. Status colors (green/amber/red) exist only for risk/status indicators.
8. **Typography scale** — do not go below `10px` for any visible text; use the table above as reference.
9. **Responsive note** — this is a desktop-only prototype (min-width assumed ~1280px). No mobile breakpoints needed.
10. **JS** — all interactivity lives in the `<script>` at the bottom of the file. Keep it vanilla JS; no imports.
