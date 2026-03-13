---
title: "Design Tokens"
menu:
  main:
    parent: "overview"
---
# Design Token Reference

> **Status:** Proposed · **Owner:** Design Systems Team · **Last updated:** 2026-03-07
>
> This page is the authoritative dictionary for every CSS custom property in Aurora. All component code **must** reference tokens from this list — never raw values. If a value you need is not here, open a token proposal before hardcoding anything.

---

## Contents

1. [How tokens work](#how-tokens-work)
2. [Token tiers](#token-tiers)
3. [Color](#color)
4. [Spacing](#spacing)
5. [Border radius](#border-radius)
6. [Elevation & shadows](#elevation--shadows)
7. [Z-index](#z-index)
8. [Opacity](#opacity)
9. [Typography](#typography)
10. [Motion](#motion)
11. [Using tokens in code](#using-tokens-in-code)
12. [Adding or changing tokens](#adding-or-changing-tokens)

---

## How tokens work

Aurora is a **token-driven** system. HTML is static; CSS custom properties defined on `:root` control everything from colour to layout mechanics. Swapping a theme means overriding a set of semantic tokens — no component code changes.

```
Primitive tokens  →  Semantic tokens  →  Component tokens
(raw values)         (role-based)         (component-scoped)

--color-blue-500     --color-brand        --button-bg
#3B82F6          →   var(--color-blue-500) → var(--color-brand)
```

The three-tier structure means:

- **Primitives** are never used directly in components — they are the vocabulary.
- **Semantic tokens** describe *intent* (brand, danger, surface) not appearance.
- **Component tokens** are optional overrides that let a single component deviate without breaking the semantic layer.

---

## Token tiers

| Tier | Prefix pattern | Example | Used in |
|---|---|---|---|
| Primitive | `--[category]-[scale]` | `--color-blue-500` | Semantic token definitions only |
| Semantic | `--[role]` | `--color-brand` | All component CSS |
| Component | `--[component]-[property]` | `--button-bg` | That component's stylesheet only |

---

## Color

### Primitive color palette

Primitive colors are defined once in the base stylesheet. They are **never referenced in components directly** — only in semantic token definitions.

#### Neutrals

| Token | Light value | Dark value | Notes |
|---|---|---|---|
| `--color-neutral-0` | `#ffffff` | `#ffffff` | Pure white |
| `--color-neutral-50` | `#f9fafb` | `#111827` | |
| `--color-neutral-100` | `#f3f4f6` | `#1f2937` | |
| `--color-neutral-200` | `#e5e7eb` | `#374151` | |
| `--color-neutral-300` | `#d1d5db` | `#4b5563` | |
| `--color-neutral-400` | `#9ca3af` | `#6b7280` | |
| `--color-neutral-500` | `#6b7280` | `#9ca3af` | |
| `--color-neutral-600` | `#4b5563` | `#d1d5db` | |
| `--color-neutral-700` | `#374151` | `#e5e7eb` | |
| `--color-neutral-800` | `#1f2937` | `#f3f4f6` | |
| `--color-neutral-900` | `#111827` | `#f9fafb` | |
| `--color-neutral-1000` | `#030712` | `#ffffff` | Near-black / near-white |

#### Brand (Corporate theme)

> **To fill in:** Replace placeholder values with the actual Corporate brand palette.

| Token | Value | Notes |
|---|---|---|
| `--color-brand-50` | — | Lightest tint |
| `--color-brand-100` | — | |
| `--color-brand-200` | — | |
| `--color-brand-300` | — | |
| `--color-brand-400` | — | |
| `--color-brand-500` | — | **Primary brand colour** |
| `--color-brand-600` | — | |
| `--color-brand-700` | — | |
| `--color-brand-800` | — | |
| `--color-brand-900` | — | Deepest shade |

#### Accent (Casual theme)

> **To fill in:** Replace placeholder values with the actual Casual palette.

| Token | Value |
|---|---|
| `--color-accent-50` | — |
| `--color-accent-500` | — |
| `--color-accent-900` | — |

#### Semantic status colors

| Token | Light value | Dark value | Usage |
|---|---|---|---|
| `--color-success-50` | `#f0fdf4` | `#052e16` | Success background tint |
| `--color-success-500` | `#22c55e` | `#4ade80` | Success foreground |
| `--color-success-700` | `#15803d` | `#86efac` | Success text on light |
| `--color-warning-50` | `#fffbeb` | `#451a03` | Warning background tint |
| `--color-warning-500` | `#f59e0b` | `#fbbf24` | Warning foreground |
| `--color-warning-700` | `#b45309` | `#fde68a` | Warning text on light |
| `--color-danger-50` | `#fef2f2` | `#450a0a` | Danger background tint |
| `--color-danger-500` | `#ef4444` | `#f87171` | Danger foreground |
| `--color-danger-700` | `#b91c1c` | `#fca5a5` | Danger text on light |
| `--color-info-50` | `#eff6ff` | `#172554` | Info background tint |
| `--color-info-500` | `#3b82f6` | `#60a5fa` | Info foreground |
| `--color-info-700` | `#1d4ed8` | `#93c5fd` | Info text on light |

---

### Semantic color tokens

These are what **all component code references**. They are redefined per-theme and per-mode.

#### Surface

| Token | Description |
|---|---|
| `--color-surface-base` | Page background |
| `--color-surface-raised` | Cards, dropdowns |
| `--color-surface-overlay` | Modals, popovers |
| `--color-surface-sunken` | Input backgrounds, code blocks |
| `--color-surface-inverted` | Dark surface in light mode (and vice versa) |

#### Text

| Token | Description |
|---|---|
| `--color-text-primary` | Body text, headings |
| `--color-text-secondary` | Captions, helper text |
| `--color-text-tertiary` | Placeholder text |
| `--color-text-disabled` | Disabled state text |
| `--color-text-inverted` | Text on inverted/dark surfaces |
| `--color-text-link` | Anchor and interactive text |
| `--color-text-link-hover` | Anchor hover state |
| `--color-text-danger` | Error messages |
| `--color-text-success` | Success messages |
| `--color-text-warning` | Warning messages |

#### Border

| Token | Description |
|---|---|
| `--color-border-subtle` | Hairline dividers, input borders at rest |
| `--color-border-default` | Default border strength |
| `--color-border-strong` | Emphasized borders, focused inputs |
| `--color-border-danger` | Error-state borders |
| `--color-border-success` | Success-state borders |

#### Brand / action

| Token | Description |
|---|---|
| `--color-brand` | Primary brand colour — buttons, links, focus rings |
| `--color-brand-hover` | Brand colour on hover (auto-calculated from `--color-brand`) |
| `--color-brand-active` | Brand colour on active/press |
| `--color-brand-subtle` | Tinted brand background (badges, tags) |
| `--color-brand-on` | Text/icon colour placed on top of `--color-brand` |

#### Feedback

| Token | Description |
|---|---|
| `--color-feedback-success-bg` | Alert/banner success background |
| `--color-feedback-success-border` | Alert/banner success border |
| `--color-feedback-success-text` | Alert/banner success text |
| `--color-feedback-warning-bg` | — |
| `--color-feedback-warning-border` | — |
| `--color-feedback-warning-text` | — |
| `--color-feedback-danger-bg` | — |
| `--color-feedback-danger-border` | — |
| `--color-feedback-danger-text` | — |
| `--color-feedback-info-bg` | — |
| `--color-feedback-info-border` | — |
| `--color-feedback-info-text` | — |

---

### Theme token overrides

Aurora's token system works by overriding semantic tokens at the theme level. Each theme applies its overrides on a theme-specific class.

```css
/* Base (light mode defaults) */
:root {
  --color-brand: var(--color-brand-500);
  --color-surface-base: var(--color-neutral-0);
  --color-text-primary: var(--color-neutral-900);
  /* ... */
}

/* Dark mode override */
[data-mode="dark"] {
  --color-surface-base: var(--color-neutral-950);
  --color-text-primary: var(--color-neutral-50);
  /* ... */
}

/* Corporate theme */
[data-theme="corporate"] {
  --color-brand-500: /* corporate blue */;
  --color-brand: var(--color-brand-500);
  /* ... */
}

/* Casual theme */
[data-theme="casual"] {
  --color-brand-500: /* casual accent */;
  --color-brand: var(--color-brand-500);
  /* ... */
}
```

---

## Spacing

Aurora uses a **4px base unit**. All spacing tokens are multiples of 4.

| Token | Value | px equivalent | Usage |
|---|---|---|---|
| `--space-0` | `0` | 0px | Zero-out margin/padding |
| `--space-px` | `1px` | 1px | Single-pixel borders |
| `--space-0-5` | `0.125rem` | 2px | Micro gap (icon+label) |
| `--space-1` | `0.25rem` | 4px | Tight internal padding |
| `--space-2` | `0.5rem` | 8px | Input padding, inline gap |
| `--space-3` | `0.75rem` | 12px | |
| `--space-4` | `1rem` | 16px | **Default spacing unit** |
| `--space-5` | `1.25rem` | 20px | |
| `--space-6` | `1.5rem` | 24px | Card padding, section gap |
| `--space-8` | `2rem` | 32px | |
| `--space-10` | `2.5rem` | 40px | |
| `--space-12` | `3rem` | 48px | Section vertical rhythm |
| `--space-16` | `4rem` | 64px | |
| `--space-20` | `5rem` | 80px | |
| `--space-24` | `6rem` | 96px | |
| `--space-32` | `8rem` | 128px | Large layout gaps |
| `--space-40` | `10rem` | 160px | |
| `--space-48` | `12rem` | 192px | |
| `--space-64` | `16rem` | 256px | |

### Semantic spacing aliases

Prefer these named tokens in component code over raw scale values.

| Token | Maps to | Usage |
|---|---|---|
| `--spacing-component-xs` | `--space-1` | Tight internal component padding |
| `--spacing-component-sm` | `--space-2` | Small component padding |
| `--spacing-component-md` | `--space-4` | Default component padding |
| `--spacing-component-lg` | `--space-6` | Generous component padding |
| `--spacing-component-xl` | `--space-8` | Large component padding |
| `--spacing-layout-sm` | `--space-8` | Narrow section gap |
| `--spacing-layout-md` | `--space-16` | Default section gap |
| `--spacing-layout-lg` | `--space-24` | Wide section gap |
| `--spacing-layout-xl` | `--space-32` | Page-level section gap |
| `--spacing-inline` | `--space-2` | Gap between inline elements (icon+text) |
| `--spacing-stack` | `--space-4` | Gap between stacked elements |

---

## Border radius

| Token | Value | Usage |
|---|---|---|
| `--radius-none` | `0` | Sharp — tables, code blocks |
| `--radius-sm` | `0.125rem` | `2px` — subtle rounding (badges inline) |
| `--radius-md` | `0.375rem` | `6px` — **default** — inputs, buttons, tags |
| `--radius-lg` | `0.5rem` | `8px` — cards, dropdowns |
| `--radius-xl` | `0.75rem` | `12px` — modals, sheets |
| `--radius-2xl` | `1rem` | `16px` — large cards |
| `--radius-3xl` | `1.5rem` | `24px` — feature cards, banners |
| `--radius-full` | `9999px` | Pills — pill buttons, pill badges, avatars |

### Component radius aliases

| Token | Maps to | Component |
|---|---|---|
| `--radius-button` | `--radius-md` | All button variants |
| `--radius-input` | `--radius-md` | Text inputs, selects |
| `--radius-card` | `--radius-lg` | Card component |
| `--radius-modal` | `--radius-xl` | Modal and drawer |
| `--radius-badge` | `--radius-full` | Badge component |
| `--radius-avatar` | `--radius-full` | Avatar component |
| `--radius-tooltip` | `--radius-md` | Tooltip component |

---

## Elevation & shadows

Shadows in Aurora communicate **z-axis lift**. Higher elevation = larger, more diffuse shadow.

| Token | Value | Usage |
|---|---|---|
| `--shadow-none` | `none` | Flat surfaces, tables |
| `--shadow-xs` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | Subtle lift — badges, tags |
| `--shadow-sm` | `0 1px 3px 0 rgb(0 0 0 / 0.10), 0 1px 2px -1px rgb(0 0 0 / 0.10)` | **Default** — input focus, small cards |
| `--shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.10), 0 2px 4px -2px rgb(0 0 0 / 0.10)` | Cards, dropdowns |
| `--shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.10), 0 4px 6px -4px rgb(0 0 0 / 0.10)` | Modals, drawers, menus |
| `--shadow-xl` | `0 20px 25px -5px rgb(0 0 0 / 0.10), 0 8px 10px -6px rgb(0 0 0 / 0.10)` | Popovers, floating panels |
| `--shadow-2xl` | `0 25px 50px -12px rgb(0 0 0 / 0.25)` | Full-screen overlays |
| `--shadow-inner` | `inset 0 2px 4px 0 rgb(0 0 0 / 0.05)` | Sunken inputs, pressed state |

> **Dark mode note:** Shadow opacity is increased in dark mode to remain visible against dark surfaces. Override in `[data-mode="dark"]` with higher opacity values (typically 2–3× the light mode value).

### Component elevation aliases

| Token | Maps to | Usage |
|---|---|---|
| `--shadow-card` | `--shadow-md` | Card component |
| `--shadow-card-hover` | `--shadow-lg` | Card on hover |
| `--shadow-dropdown` | `--shadow-lg` | Dropdown menu |
| `--shadow-modal` | `--shadow-xl` | Modal and drawer |
| `--shadow-tooltip` | `--shadow-sm` | Tooltip |
| `--shadow-focus-ring` | See focus ring section below | Input focus indicator |

### Focus ring

Aurora uses an offset focus ring rather than a box shadow for accessibility.

| Token | Value | Notes |
|---|---|---|
| `--focus-ring-width` | `2px` | Ring thickness |
| `--focus-ring-offset` | `2px` | Gap between element and ring |
| `--focus-ring-color` | `var(--color-brand)` | Ring colour |
| `--focus-ring-color-invert` | `var(--color-neutral-0)` | Ring on dark/inverted surfaces |

```css
/* Standard focus ring implementation */
:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}
```

---

## Z-index

Z-index values are named to avoid conflicts between layered components.

| Token | Value | Layer occupants |
|---|---|---|
| `--z-below` | `-1` | Behind-page effects, decorative overlays |
| `--z-base` | `0` | Default document flow |
| `--z-raised` | `10` | Raised cards, sticky table headers |
| `--z-dropdown` | `100` | Dropdowns, comboboxes, date pickers |
| `--z-sticky` | `200` | Sticky headers, sticky sidebars |
| `--z-overlay` | `300` | Modal backdrops |
| `--z-modal` | `400` | Modal dialogs, drawers |
| `--z-popover` | `500` | Popovers, floating toolbars |
| `--z-toast` | `600` | Toast notifications |
| `--z-tooltip` | `700` | Tooltips (must clear toasts) |

> **Rule:** Never hardcode a z-index integer in component CSS. Always reference a z-index token. If none fits, propose a new token — do not squeeze values between existing ones.

---

## Opacity

| Token | Value | Usage |
|---|---|---|
| `--opacity-0` | `0` | Fully transparent |
| `--opacity-5` | `0.05` | Ghost hover states |
| `--opacity-10` | `0.10` | Tinted backgrounds |
| `--opacity-20` | `0.20` | Subtle overlays |
| `--opacity-25` | `0.25` | |
| `--opacity-30` | `0.30` | |
| `--opacity-40` | `0.40` | |
| `--opacity-50` | `0.50` | Half-transparency |
| `--opacity-60` | `0.60` | |
| `--opacity-70` | `0.70` | |
| `--opacity-75` | `0.75` | |
| `--opacity-80` | `0.80` | |
| `--opacity-90` | `0.90` | |
| `--opacity-95` | `0.95` | |
| `--opacity-100` | `1` | Fully opaque |

### Semantic opacity aliases

| Token | Maps to | Usage |
|---|---|---|
| `--opacity-disabled` | `--opacity-40` | Disabled interactive elements |
| `--opacity-placeholder` | `--opacity-50` | Input placeholder text |
| `--opacity-overlay` | `--opacity-50` | Modal/drawer backdrops |
| `--opacity-overlay-heavy` | `--opacity-80` | Immersive backdrops |

---

## Typography

> Full type scale and font choices are documented on the [Typography](/aurora-docs/atoms/typography/) atom page. Token reference below covers the CSS custom properties only.

### Font families

| Token | Value | Usage |
|---|---|---|
| `--font-sans` | _Theme-defined_ | Body text, UI labels |
| `--font-serif` | _Theme-defined_ | Editorial headings (Magazine layout) |
| `--font-mono` | _Theme-defined_ | Code, pre blocks |
| `--font-display` | _Theme-defined_ | Hero headings, large display text |

### Font size scale

| Token | Value | rem | Usage |
|---|---|---|---|
| `--text-xs` | `0.75rem` | 12px | Labels, captions |
| `--text-sm` | `0.875rem` | 14px | Secondary UI text |
| `--text-base` | `1rem` | 16px | **Body text default** |
| `--text-lg` | `1.125rem` | 18px | Slightly larger body |
| `--text-xl` | `1.25rem` | 20px | H5, card titles |
| `--text-2xl` | `1.5rem` | 24px | H4 |
| `--text-3xl` | `1.875rem` | 30px | H3 |
| `--text-4xl` | `2.25rem` | 36px | H2 |
| `--text-5xl` | `3rem` | 48px | H1 |
| `--text-6xl` | `3.75rem` | 60px | Display |
| `--text-7xl` | `4.5rem` | 72px | Hero display |

### Font weight

| Token | Value | Usage |
|---|---|---|
| `--font-weight-normal` | `400` | Body text |
| `--font-weight-medium` | `500` | UI labels, button text |
| `--font-weight-semibold` | `600` | Subheadings, emphasis |
| `--font-weight-bold` | `700` | Headings |
| `--font-weight-extrabold` | `800` | Display headings |

### Line height

| Token | Value | Usage |
|---|---|---|
| `--leading-none` | `1` | Single-line display text |
| `--leading-tight` | `1.25` | Headings |
| `--leading-snug` | `1.375` | Subheadings |
| `--leading-normal` | `1.5` | **Body text default** |
| `--leading-relaxed` | `1.625` | Long-form reading |
| `--leading-loose` | `2` | Spaced lists |

### Letter spacing

| Token | Value | Usage |
|---|---|---|
| `--tracking-tighter` | `-0.05em` | Large display headings |
| `--tracking-tight` | `-0.025em` | Headings ≥ 3xl |
| `--tracking-normal` | `0em` | Body text |
| `--tracking-wide` | `0.025em` | Small caps, labels |
| `--tracking-wider` | `0.05em` | Uppercase labels, badges |
| `--tracking-widest` | `0.1em` | All-caps micro text |

---

## Motion

> Full motion guidelines are documented on the [Motion & Animation Tokens](/aurora-docs/system/motion/) page (Phase 1 roadmap item). Token reference below.

### Duration

| Token | Value | Usage |
|---|---|---|
| `--ds-motion-duration-instant` | `0ms` | Disabled states, reduced-motion fallback |
| `--ds-motion-duration-fast` | `100ms` | Micro-interactions (checkbox tick, toggle) |
| `--ds-motion-duration-norm` | `300ms` | **Default** — buttons, hovers, focus rings |
| `--ds-motion-duration-moderate` | `500ms` | Dropdowns, tooltips, content reveals |
| `--ds-motion-duration-slow` | `700ms` | Modals, drawers, layout transitions |

### Easing

| Token | Value | Usage |
|---|---|---|
| `--ds-motion-easing-linear` | `linear` | Progress bars, loaders |
| `--ds-motion-easing-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | **Default** — components entering/moving |
| `--ds-motion-easing-bubbly` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful/Kids theme (bouncy) interactions |
| `--ds-motion-easing-professional` | `cubic-bezier(0.2, 0, 0, 1)` | High-speed, high-precision (Corporate) |
| `--ds-motion-easing-reveal` | `cubic-bezier(0.1, 0.9, 0.2, 1)` | Selection reveals and hero transitions |

### Selection Attributes (Motion Primitives)

| Token | Value | Usage |
|---|---|---|
| `--ds-motion-scale-focus` | `1.05` | Scaling factor for selected tiles |
| `--ds-motion-halo-glow` | `0 0 15px var(--ds-sys-color-primary)` | Interaction "Halo" effect |

### Reduced motion

Always respect the user's preference. Aurora wraps all transitions with:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: var(--duration-instant) !important;
    transition-duration: var(--duration-instant) !important;
  }
}
```

---

## Using tokens in code

### In component CSS

```css
.my-button {
  background: var(--color-brand);
  color: var(--color-brand-on);
  padding: var(--spacing-component-sm) var(--spacing-component-md);
  border-radius: var(--radius-button);
  box-shadow: var(--shadow-sm);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  transition: background var(--duration-normal) var(--ease-out);
}

.my-button:hover {
  background: var(--color-brand-hover);
}

.my-button:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}

.my-button:disabled {
  opacity: var(--opacity-disabled);
  cursor: not-allowed;
}
```

### In inline styles (avoid where possible)

```html
<!-- Only when a component token isn't available and CSS isn't practical -->
<div style="gap: var(--space-4); padding: var(--spacing-component-md)">
```

### What never to do

```css
/* ❌ Raw value — breaks theme switching */
.card { background: #ffffff; }

/* ❌ Primitive token in a component — bypasses semantic layer */
.card { background: var(--color-neutral-0); }

/* ✅ Correct — semantic token */
.card { background: var(--color-surface-raised); }
```

---

## Adding or changing tokens

1. **Primitives:** Only added when a new raw value is genuinely needed. Requires design review. PR must update this page.
2. **Semantic tokens:** Added when a new *role* or *intent* exists that isn't covered. Both light and dark values must be defined. Both theme overrides must be updated. PR must update this page.
3. **Component tokens:** Added inside the component's own stylesheet. Named `--[component]-[property]`. Must map to a semantic token, not a primitive or raw value.
4. **Deprecating tokens:** Mark with a `/* @deprecated — use --new-token-name instead */` comment. Maintain for one minor version before removal. Log in [Changelog](/aurora-docs/system/changelog/).

> **Questions?** Open an issue tagged `tokens` or post in `#design-system` before making changes.
