---
title: "Theming"
menu:
  main:
    parent: "overview"
---
# Theming Guide

> **Status:** Proposed · **Owner:** Design Systems Team · **Last updated:** 2026-03-07
>
> Aurora ships with two themes — **Corporate** and **Casual** — and a **light/dark mode** toggle that works across both. This page explains how the theme system works, how to switch themes, and how to build a new theme from scratch.

---

## Contents

1. [How theming works](#how-theming-works)
2. [Built-in themes](#built-in-themes)
3. [Light & dark mode](#light--dark-mode)
4. [Switching themes at runtime](#switching-themes-at-runtime)
5. [Creating a new theme](#creating-a-new-theme)
6. [Theme checklist](#theme-checklist)
7. [What themes can and cannot change](#what-themes-can-and-cannot-change)

---

## How theming works

Aurora's theme system has three layers that work together:

```
Base tokens (always loaded)
    ↓
Mode override  [data-mode="dark"]
    ↓
Theme override  [data-theme="corporate"] | [data-theme="casual"]
```

1. **Base tokens** define the default values for every semantic token (colours, radius, fonts, motion). These are the light-mode, theme-neutral defaults loaded for every user.

2. **Mode override** (`[data-mode="dark"]`) redefines the colour semantic tokens to their dark-mode equivalents. No structural or radius tokens change between modes — only colour and shadow opacity.

3. **Theme override** (`[data-theme="..."]`) redefines brand colours, font families, border radius defaults, and motion characteristics. A theme can change *personality* — it cannot change *structure*.

The `data-theme` and `data-mode` attributes are set on the `<html>` element:

```html
<html data-theme="corporate" data-mode="light">
```

Because later rules in the cascade override earlier ones, `[data-mode="dark"]` sits below the base and above the theme — meaning dark-mode colour overrides apply first, then the theme brand colours layer on top.

---

## Built-in themes

### Corporate

A professional, trust-oriented theme. Characteristics:

- **Brand palette:** Blues and cool neutrals
- **Typography:** Geometric sans-serif for headings; clean humanist sans for body
- **Border radius:** Moderate — `--radius-md` (6px) default, `--radius-lg` (8px) for cards
- **Motion:** Functional — fast durations, `ease-out` preferred. No spring animations.
- **Density:** Medium — comfortable padding, clear hierarchy

### Casual

A playful, high-energy theme. Characteristics:

- **Brand palette:** Saturated primaries and bright accents
- **Typography:** Rounded, friendly display font; legible body font with generous size
- **Border radius:** Generous — `--radius-xl` (12px) default, `--radius-full` for pill shapes everywhere
- **Motion:** Expressive — `--ease-spring` used for reveals and interactions, slightly longer durations
- **Density:** Open — larger touch targets, more padding, bigger type

---

## Light & dark mode

Mode is **separate from theme**. Both Corporate and Casual support light and dark modes. The mode toggle only overrides colour tokens — it never changes font, radius, or motion.

### Colour tokens that change between modes

Every token in the `--color-surface-*`, `--color-text-*`, and `--color-border-*` groups has distinct light and dark values. Brand and status colours (`--color-brand`, `--color-danger-500`, etc.) shift to their lighter/more accessible counterparts in dark mode.

See the [Design Token Reference](/aurora-docs/system/design-tokens/) for the full per-token light and dark values.

### Persisting the user's mode preference

```js
// On load — check saved preference, then system preference
const savedMode = localStorage.getItem('aurora-mode');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const mode = savedMode ?? (systemDark ? 'dark' : 'light');

document.documentElement.setAttribute('data-mode', mode);

// On toggle
function toggleMode() {
  const current = document.documentElement.getAttribute('data-mode');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-mode', next);
  localStorage.setItem('aurora-mode', next);
}
```

> **Respect system preferences.** Always check `prefers-color-scheme` as the fallback when no saved preference exists. Never default to light mode unconditionally.

---

## Switching themes at runtime

```js
function setTheme(themeName) {
  document.documentElement.setAttribute('data-theme', themeName);
  localStorage.setItem('aurora-theme', themeName);
}

// On load
const savedTheme = localStorage.getItem('aurora-theme') ?? 'corporate';
document.documentElement.setAttribute('data-theme', savedTheme);
```

Because all theme values are CSS custom properties, the switch is instantaneous — no class toggling, no stylesheet swapping, no flash.

---

## Creating a new theme

To create a new Aurora theme, you override a defined set of semantic tokens under a new `[data-theme="your-theme"]` selector. You do not need to redefine every token — only the ones your theme changes.

### Step 1 — Create the theme file

```
/themes/
  corporate.css   ← existing
  casual.css        ← existing
  your-theme.css  ← new file
```

### Step 2 — Define your primitive brand palette

Start by defining your brand's raw colour ramp as primitive tokens. These are not used in components — they're the source values your semantic tokens will point to.

```css
/* your-theme.css */

/* Step 2: Primitive palette */
[data-theme="your-theme"] {
  --color-brand-50:  #f0f9ff;
  --color-brand-100: #e0f2fe;
  --color-brand-200: #bae6fd;
  --color-brand-300: #7dd3fc;
  --color-brand-400: #38bdf8;
  --color-brand-500: #0ea5e9;   /* primary brand colour */
  --color-brand-600: #0284c7;
  --color-brand-700: #0369a1;
  --color-brand-800: #075985;
  --color-brand-900: #0c4a6e;
}
```

### Step 3 — Wire semantic brand tokens

```css
[data-theme="your-theme"] {
  /* Brand action colours */
  --color-brand:         var(--color-brand-500);
  --color-brand-hover:   var(--color-brand-600);
  --color-brand-active:  var(--color-brand-700);
  --color-brand-subtle:  var(--color-brand-50);
  --color-brand-on:      #ffffff;   /* text colour on top of --color-brand */

  /* Links */
  --color-text-link:       var(--color-brand-600);
  --color-text-link-hover: var(--color-brand-700);

  /* Focus ring uses brand colour automatically via --color-brand */
}
```

### Step 4 — Override typography (optional)

Only override fonts if your theme has a distinct typographic personality. Font tokens are defined in the [Design Token Reference](/aurora-docs/system/design-tokens/).

```css
[data-theme="your-theme"] {
  --font-sans:    'Your Body Font', system-ui, sans-serif;
  --font-display: 'Your Display Font', serif;
}
```

> **Font loading:** Add your `@font-face` declarations or Google Fonts `<link>` tags before the Aurora stylesheet. Do not put `@font-face` inside the theme override block.

### Step 5 — Override radius (optional)

Only change radius if your theme has a meaningfully different personality (e.g. sharp/corporate vs. rounded/playful).

```css
[data-theme="your-theme"] {
  --radius-button:  var(--radius-sm);   /* sharper buttons */
  --radius-card:    var(--radius-md);
  --radius-modal:   var(--radius-lg);
  --radius-badge:   var(--radius-md);   /* rectangular badges instead of pill */
}
```

### Step 6 — Override motion (optional)

```css
[data-theme="your-theme"] {
  --duration-normal:  150ms;              /* snappier interactions */
  --ease-out:         cubic-bezier(0, 0, 0.2, 1);
}
```

### Step 7 — Define dark mode overrides for your brand palette

If your theme will support dark mode, add a combined selector for dark-mode + your theme:

```css
[data-mode="dark"][data-theme="your-theme"],
[data-mode="dark"] [data-theme="your-theme"] {
  --color-brand:        var(--color-brand-400);   /* lighter in dark mode */
  --color-brand-hover:  var(--color-brand-300);
  --color-brand-subtle: color-mix(in srgb, var(--color-brand-500) 15%, transparent);

  --color-text-link:       var(--color-brand-300);
  --color-text-link-hover: var(--color-brand-200);
}
```

### Step 8 — Register the theme

Add your theme name to the list of valid themes in Aurora's configuration so the runtime theme switcher and documentation generator know it exists:

```js
// aurora.config.js
export const themes = ['corporate', 'casual', 'your-theme'];
```

---

## Theme checklist

Use this checklist before shipping a new theme.

### Required overrides

- [ ] `--color-brand-50` through `--color-brand-900` primitive ramp defined
- [ ] `--color-brand`, `--color-brand-hover`, `--color-brand-active` wired
- [ ] `--color-brand-subtle` and `--color-brand-on` defined
- [ ] `--color-text-link` and `--color-text-link-hover` set
- [ ] Dark mode brand overrides defined

### Visual QA

- [ ] Brand colour passes **4.5:1 contrast** against `--color-surface-base` (WCAG AA for normal text)
- [ ] Brand colour passes **3:1 contrast** against `--color-surface-base` (WCAG AA for large text and UI components)
- [ ] `--color-brand-on` passes **4.5:1 contrast** against `--color-brand` (text on brand-coloured buttons)
- [ ] Focus ring is visible in both light and dark mode
- [ ] All four feedback states (success, warning, danger, info) remain visually distinct from the brand colour
- [ ] Tested at all six breakpoints

### Component smoke test

Check these components visually in both modes before merging:

- [ ] Primary and secondary buttons
- [ ] Form inputs (rest, focus, error states)
- [ ] Badges and tags
- [ ] Cards
- [ ] Navigation bar
- [ ] Modal
- [ ] Toast / feedback alerts
- [ ] Data table

---

## What themes can and cannot change

Understanding the boundaries of the theme system prevents overrides that break the contract between design and development.

### Themes CAN change

| Property | Via token |
|---|---|
| Brand colour ramp | `--color-brand-*` |
| Semantic action colours | `--color-brand`, `--color-brand-hover`, etc. |
| Link colours | `--color-text-link`, `--color-text-link-hover` |
| Font families | `--font-sans`, `--font-display`, `--font-mono` |
| Default border radius | `--radius-button`, `--radius-card`, etc. |
| Motion speed & easing | `--duration-*`, `--ease-*` |
| Focus ring colour | `--focus-ring-color` (inherits from `--color-brand`) |

### Themes CANNOT change

| Property | Reason |
|---|---|
| Spacing scale | Spacing is structural — changing it breaks layout |
| Grid columns or gutters | Grid is structural |
| Breakpoints | Breakpoints are structural |
| Z-index scale | Z-index is structural |
| Status/feedback colours (success, warning, danger, info) | These carry universal meaning across all themes |
| Component HTML structure | Themes are CSS-only — no HTML changes |
| Component token names or the semantic token API | Changing token names is a breaking change requiring a major version bump |

> **The rule of thumb:** If changing it would break a layout, move content, or change the meaning of a UI state — it belongs to the structure, not the theme.
