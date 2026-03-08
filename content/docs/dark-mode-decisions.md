# Dark Mode Design Decisions

> **Category:** Governance · **Status:** Approved · **Last updated:** 2026-03-07

This document explains the design rationale behind Aurora's dark mode implementation — why specific token values were chosen, where the system differs from common conventions, and how to handle edge cases correctly.

---

## Contents

1. [Philosophy](#philosophy)
2. [Surface hierarchy](#surface-hierarchy)
3. [Colour decisions](#colour-decisions)
4. [Typography in dark mode](#typography-in-dark-mode)
5. [Shadows & elevation](#shadows--elevation)
6. [Brand & accent colours](#brand--accent-colours)
7. [Status colours](#status-colours)
8. [Images & media](#images--media)
9. [Common mistakes](#common-mistakes)
10. [Implementation reference](#implementation-reference)

---

## Philosophy

Aurora's dark mode is **not** a simple colour inversion. Inverting colours produces harsh results — backgrounds become blinding whites, shadows become glowing outlines, and brand colours shift into unrecognisable hues.

Instead, Aurora's dark mode follows three principles:

**1. Reduce luminance, preserve hierarchy**
Dark surfaces use graded dark blues/slates rather than pure black. This preserves the perception of depth — a raised surface reads as lighter than the base, just as in light mode.

**2. Desaturate, don't invert**
Colours in dark mode are desaturated and lightened relative to light mode, not inverted. This keeps them legible without the eye-strain caused by saturated colours against dark backgrounds.

**3. Reduce contrast for comfort**
Pure white (`#ffffff`) text on pure black (`#000000`) produces a 21:1 contrast ratio — technically maximum, but fatiguing for extended reading. Aurora targets 15–16:1 for primary text in dark mode (still well above the 4.5:1 minimum) using a warm off-white.

---

## Surface hierarchy

In light mode, surfaces get lighter as they rise. In dark mode, surfaces get **lighter** as they rise too — but relative to a very dark base. This is the "dark elevation" model.

### Light mode surfaces

| Token | Value | Level |
|---|---|---|
| `--color-surface-sunken` | `#f3f4f6` (neutral-100) | Below base |
| `--color-surface-base` | `#f9fafb` (neutral-50) | Page background |
| `--color-surface-raised` | `#ffffff` (neutral-0) | Cards, panels |

### Dark mode surfaces

| Token | Value | Level |
|---|---|---|
| `--color-surface-sunken` | `#0f172a` (slate-900) | Below base — matches page bg |
| `--color-surface-base` | `#0f172a` (slate-900) | Page background |
| `--color-surface-raised` | `#1e293b` (slate-800) | Cards, panels |

> **Why slate instead of neutral greys?**
> Pure grey backgrounds (`#1a1a1a`, `#222`) feel cold and industrial. The slight blue tint in slate reads as a considered dark theme rather than a developer tool. It also aligns with the Corporate theme's cooler palette.

### Surface contraction in dark mode

In dark mode, `--color-surface-sunken` and `--color-surface-base` share the same value (`#0f172a`). This is intentional — sunken elements in dark mode (input backgrounds, code blocks, sidebar backgrounds) are indistinguishable from the page background, which creates a natural sense of recession without needing a lighter treatment that would feel too prominent.

---

## Colour decisions

### Text

| Token | Light | Dark | Rationale |
|---|---|---|---|
| `--color-text-primary` | `#111827` (neutral-900) | `#f1f5f9` (slate-100) | Off-white rather than pure white — reduces eye strain |
| `--color-text-secondary` | `#6b7280` (neutral-500) | `#94a3b8` (slate-400) | Lightened to maintain relative hierarchy against dark bg |
| `--color-text-tertiary` | `#9ca3af` (neutral-400) | `#64748b` (slate-500) | Muted — for timestamps, labels, decorative text |

**Why `#f1f5f9` and not `#ffffff`?**
On a `#0f172a` background, `#f1f5f9` provides 15.1:1 contrast — well above AA and AAA minimums, while being perceptibly softer to read. User testing on fitness app contexts (where users read during and after workouts) confirmed meaningfully less fatigue compared to pure white.

### Borders

| Token | Light | Dark | Rationale |
|---|---|---|---|
| `--color-border-subtle` | `#e5e7eb` | `#334155` (slate-700) | Creates visual separation without competing with content |
| `--color-border-default` | `#d1d5db` | `#475569` (slate-600) | Slightly more prominent for interactive component edges |

Borders are the **most important** token to get right in dark mode. Too light and they dominate every card edge; too dark and surfaces lose definition. The slate-700/600 values were chosen by rendering the full component library and iterating until separation was clear without distraction.

---

## Typography in dark mode

Typography in dark mode should generally render at **slightly lighter weight** than light mode. This is because dark backgrounds cause thin strokes to appear thinner due to irradiation (the Helmholtz illusion — light objects on dark backgrounds appear larger/bolder than the reverse).

Aurora compensates by:
- Using `font-weight: 500` for body copy that uses `font-weight: 400` in light mode in some contexts (this is a component-level decision, not a global override)
- Relying on the off-white text colour (`#f1f5f9`) rather than reducing letter-spacing, which can reduce legibility

**Do not** use `-webkit-font-smoothing: antialiased` universally in dark mode. While it can make text appear crisper on some macOS displays, it reduces legibility on Windows and non-Retina displays.

---

## Shadows & elevation

Shadows do not work well in dark mode. A box-shadow using `rgb(0 0 0 / 0.1)` is nearly invisible against a dark surface.

### Aurora's approach

In dark mode, elevation is communicated by **surface colour difference**, not shadows. Cards (`--color-surface-raised`) are visually elevated because they are lighter than the page background — no shadow required.

Where shadows are retained in dark mode (command palette, modals, bottom sheet), their opacity is significantly increased:

| Component | Light shadow | Dark shadow |
|---|---|---|
| Card / panel | `0 1px 3px rgb(0 0 0/.08)` | `0 1px 3px rgb(0 0 0/.3)` |
| Dropdown / popover | `0 20px 25px rgb(0 0 0/.12)` | `0 20px 25px rgb(0 0 0/.5)` |
| Modal / Command palette | `0 25px 50px rgb(0 0 0/.25)` | `0 25px 50px rgb(0 0 0/.7)` |
| Bottom sheet | `0 -4px 32px rgb(0 0 0/.14)` | `0 -4px 32px rgb(0 0 0/.45)` |

> **Rule of thumb:** multiply the shadow opacity by 3–4× for dark mode.

---

## Brand & accent colours

The brand blue (`#2563eb`) works in both light and dark mode on their respective surface colours. No dark mode override is needed for `--color-brand` itself.

However, brand-tinted background tokens (like `--color-brand-subtle`) need a dark mode equivalent:

| Token | Light | Dark |
|---|---|---|
| `--color-brand-subtle` | `#eff6ff` (blue-50) | `#1e3a5f` (deep blue) |

The dark mode value uses a dark, desaturated blue rather than inverting blue-50 (which would produce a blinding light blue). The goal is a surface that reads as "brand-tinted" relative to the surrounding dark surfaces.

---

## Status colours

Status colours (success, warning, danger, info) follow the same desaturation principle. Dark mode status colours are **lighter and more pastel** than their light mode counterparts because they need to work against dark backgrounds.

| Status | Light text | Light bg | Dark text | Dark bg |
|---|---|---|---|---|
| Success | `#15803d` on `#f0fdf4` | → | `#4ade80` on `#052e16` |
| Warning | `#b45309` on `#fffbeb` | → | `#fbbf24` on `#451a03` |
| Danger | `#b91c1c` on `#fef2f2` | → | `#f87171` on `#450a0a` |
| Info | `#1d4ed8` on `#eff6ff` | → | `#93c5fd` on `#172554` |

All dark mode status colour combinations have been verified to meet 4.5:1 contrast.

---

## Images & media

### Photographs
No treatment needed. Photos in dark mode contexts should be left as-is — applying a dark overlay or desaturation filter generally makes them look unintended.

### Icons
Aurora icons use `currentColor`, so they inherit the correct text colour automatically in dark mode.

### Illustrations / SVG art
Illustrations using hardcoded fill values (`fill="#111827"`) will not adapt to dark mode. Aurora illustrations should:
- Use `currentColor` for strokes and key fills
- Use semantic tokens where fills are needed
- Avoid pure black (`#000000`) or pure white (`#ffffff`) — use `--color-text-primary` and `--color-surface-raised`

### Data visualisations / charts
Chart colour palettes require separate dark mode variants. The default Tailwind/brand colour palette is often too saturated for dark backgrounds. Recommended approach:
- Use pastel/muted variants of each series colour in dark mode
- Ensure minimum 3:1 contrast between adjacent series colours (not just against background)

---

## Common mistakes

### ❌ Using hardcoded colour values in components
```css
/* Wrong */
.badge { background: #f3f4f6; color: #111827; }

/* Right */
.badge { background: var(--color-surface-sunken); color: var(--color-text-primary); }
```

### ❌ Targeting `prefers-color-scheme` instead of `[data-mode]`
Aurora uses an explicit `data-mode="dark"` attribute (user-controlled, persisted to localStorage) rather than relying on `prefers-color-scheme` alone. Always override using `[data-mode="dark"]`. You can use `prefers-color-scheme` as a fallback for the initial page load, but never as the only mechanism.

### ❌ Using `filter: invert(1)` for dark mode
This is occasionally used as a shortcut. It produces incorrect results for images, branded elements, and any component that uses colour semantically.

### ❌ Forgetting the focus ring in dark mode
The default brand blue focus ring (`#2563eb`) at 2px meets 3:1 against light surfaces. On dark surfaces (`#1e293b`), it still passes — but barely. If a component sits on a very dark surface (e.g. a button inside a modal header), verify the focus ring independently.

### ❌ Not testing on OLED/high-contrast displays
On OLED screens, `#0f172a` renders as a dark blue-black, not true black. Users on OLED devices who prefer pure black backgrounds may be using high-contrast mode or a forced-colours override. Always test with Windows High Contrast mode enabled.

---

## Implementation reference

```css
/* Light mode defaults on :root */
:root {
  --color-surface-base: #f9fafb;
  --color-surface-raised: #ffffff;
  --color-surface-sunken: #f3f4f6;
  --color-text-primary: #111827;
  --color-text-secondary: #6b7280;
  --color-border-subtle: #e5e7eb;
  --color-border-default: #d1d5db;
}

/* Dark mode overrides — triggered by JS + localStorage */
[data-mode="dark"] {
  --color-surface-base: #0f172a;
  --color-surface-raised: #1e293b;
  --color-surface-sunken: #0f172a;
  --color-text-primary: #f1f5f9;
  --color-text-secondary: #94a3b8;
  --color-border-subtle: #334155;
  --color-border-default: #475569;
}

/* System preference fallback for initial render before JS runs */
@media (prefers-color-scheme: dark) {
  :root:not([data-mode="light"]) {
    --color-surface-base: #0f172a;
    /* ... same overrides ... */
  }
}
```
