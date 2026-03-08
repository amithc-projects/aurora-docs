---
title: "Breakpoints & Grid"
menu:
  main:
    parent: "system"
---
# Breakpoints & Grid System

> **Status:** Proposed · **Owner:** Design Systems Team · **Last updated:** 2026-03-07
>
> This page documents Aurora's responsive breakpoint scale, the column grid, gutter and margin tokens, and the CSS layout primitives that all page templates and components build on.

---

## Contents

1. [Breakpoints](#breakpoints)
2. [The column grid](#the-column-grid)
3. [Gutters & margins](#gutters--margins)
4. [Layout primitives](#layout-primitives)
5. [Container widths](#container-widths)
6. [Responsive design rules](#responsive-design-rules)
7. [Using breakpoints in code](#using-breakpoints-in-code)

---

## Breakpoints

Aurora uses **six named breakpoints**. They are mobile-first — styles written without a breakpoint qualifier apply to all screen sizes, and breakpoint qualifiers override upward.

| Token | Name | Min-width | Typical target |
|---|---|---|---|
| _(base)_ | `xs` | `0px` | Small phones (320–479px) |
| `--bp-sm` | `sm` | `480px` | Large phones |
| `--bp-md` | `md` | `768px` | Tablets, landscape phones |
| `--bp-lg` | `lg` | `1024px` | Small laptops, large tablets |
| `--bp-xl` | `xl` | `1280px` | **Desktop** — primary design target |
| `--bp-2xl` | `2xl` | `1536px` | Wide monitors |

```css
:root {
  --bp-sm:  480px;
  --bp-md:  768px;
  --bp-lg:  1024px;
  --bp-xl:  1280px;
  --bp-2xl: 1536px;
}
```

> **Primary design target is `xl` (1280px).** All component specs and layout documentation show `xl` as the default view. Responsive notes call out deviations at `md` and below.

---

## The column grid

Aurora uses a **12-column grid** at all breakpoints. The number of active columns a layout uses scales with viewport width.

| Breakpoint | Columns used | Notes |
|---|---|---|
| `xs` (base) | 4 | Single-column layouts, stacked everything |
| `sm` | 4 | Two-column possible for small cards |
| `md` | 8 | Two- and three-column layouts |
| `lg` | 12 | Full grid available |
| `xl` | 12 | Default design target |
| `2xl` | 12 | Same as xl; max-width constrains content |

The 12-column grid is implemented with CSS Grid. The Aurora grid wrapper uses:

```css
.aurora-grid {
  display: grid;
  grid-template-columns: repeat(var(--grid-columns, 12), 1fr);
  gap: var(--grid-gutter);
  width: 100%;
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--grid-margin);
}
```

### Grid tokens

| Token | xs | sm | md | lg | xl | 2xl |
|---|---|---|---|---|---|---|
| `--grid-columns` | `4` | `4` | `8` | `12` | `12` | `12` |
| `--grid-gutter` | `--space-4` | `--space-4` | `--space-6` | `--space-6` | `--space-8` | `--space-8` |
| `--grid-margin` | `--space-4` | `--space-6` | `--space-8` | `--space-10` | `--space-12` | `--space-16` |

---

## Gutters & margins

**Gutter** is the gap between columns. **Margin** is the horizontal padding between the grid and the viewport edge.

| Token | Value at xl | Description |
|---|---|---|
| `--grid-gutter` | `var(--space-8)` = 32px | Gap between grid columns |
| `--grid-margin` | `var(--space-12)` = 48px | Page edge margin |
| `--grid-row-gap` | `var(--space-8)` = 32px | Vertical gap between grid rows |

These are set responsively via `@container` or `@media` queries:

```css
:root {
  --grid-gutter: var(--space-4);   /* xs default */
  --grid-margin: var(--space-4);
}

@media (min-width: 768px) {
  :root {
    --grid-gutter: var(--space-6);
    --grid-margin: var(--space-8);
  }
}

@media (min-width: 1280px) {
  :root {
    --grid-gutter: var(--space-8);
    --grid-margin: var(--space-12);
  }
}
```

---

## Layout primitives

Aurora provides three CSS layout utility classes that components and page templates compose together. These are the only layout mechanisms — do not create one-off grid or flex wrappers in component CSS.

### `.aurora-grid`

12-column CSS Grid with responsive gutters and margins. Used for page-level layouts.

```html
<div class="aurora-grid">
  <div class="col-span-8">Main content</div>
  <div class="col-span-4">Sidebar</div>
</div>
```

**Column span utilities** follow the pattern `.col-span-{n}` where n = 1–12. At `md` and below these collapse to full width unless overridden with a responsive modifier.

### `.aurora-flex`

Flexbox wrapper with Aurora spacing tokens applied as gap.

```html
<div class="aurora-flex gap-4 align-center">
  <Icon />
  <span>Label</span>
</div>
```

### `.aurora-stack`

Vertical flex stack with consistent gap. Used for form fields, card bodies, and stacked content.

```html
<div class="aurora-stack gap-6">
  <Heading />
  <Body />
  <Actions />
</div>
```

---

## Container widths

Content is constrained by named container tokens to prevent lines from becoming too wide to read.

| Token | Value | Usage |
|---|---|---|
| `--container-xs` | `20rem` / 320px | Narrow dialogs, small modals |
| `--container-sm` | `30rem` / 480px | Modals, auth forms |
| `--container-md` | `48rem` / 768px | Reading width, centered content |
| `--container-lg` | `64rem` / 1024px | Content-heavy pages |
| `--container-xl` | `80rem` / 1280px | **Default page max-width** |
| `--container-2xl` | `96rem` / 1536px | Wide dashboard layouts |
| `--container-prose` | `65ch` | Optimal line length for long-form reading |
| `--container-full` | `100%` | Full-bleed sections |

```css
/* Standard page wrapper */
.page-content {
  max-width: var(--container-xl);
  margin-inline: auto;
  padding-inline: var(--grid-margin);
}

/* Centered reading column */
.prose {
  max-width: var(--container-prose);
  margin-inline: auto;
}
```

---

## Responsive design rules

### 1. Mobile-first, always

Write base styles for mobile. Add complexity at larger breakpoints with `min-width` queries. Never use `max-width` queries in Aurora component code.

```css
/* ✅ Mobile-first */
.card-grid {
  grid-template-columns: 1fr;
}
@media (min-width: 768px) {
  .card-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1280px) {
  .card-grid { grid-template-columns: repeat(3, 1fr); }
}

/* ❌ Desktop-first — do not use */
.card-grid {
  grid-template-columns: repeat(3, 1fr);
}
@media (max-width: 1279px) {
  .card-grid { grid-template-columns: repeat(2, 1fr); }
}
```

### 2. Use container queries for component-level responsiveness

Components that may appear in narrow contexts (e.g. a card inside a sidebar) should use `@container` queries rather than `@media` queries. This makes components context-aware.

```css
.card-wrapper {
  container-type: inline-size;
}

.card-content {
  flex-direction: column;
}

@container (min-width: 400px) {
  .card-content {
    flex-direction: row;
  }
}
```

> **Browser support note:** `@container` queries require Chrome 105+, Safari 16+, Firefox 110+. Check the [Browser Support Matrix](/aurora-docs/system/browser-support/) before using.

### 3. Never hide content by breakpoint alone

Hiding content with `display: none` at certain breakpoints is a last resort. Prefer:
- Reordering with `order` or `grid-template-areas`
- Condensing to a compact variant (e.g. icon-only button at small sizes)
- Progressive disclosure (accordion, drawer)

### 4. Touch targets at mobile

All interactive elements must meet a **minimum touch target of 44×44px** at `sm` and below, even if the visual element is smaller. Use padding to achieve this without affecting layout.

```css
@media (max-width: 479px) {
  .icon-button {
    min-width: 44px;
    min-height: 44px;
  }
}
```

---

## Using breakpoints in code

### CSS media queries

Reference the breakpoint token values directly in media query conditions:

```css
@media (min-width: 768px) { /* md */ }
@media (min-width: 1280px) { /* xl */ }
```

> CSS custom properties cannot be used directly inside `@media (min-width: var(--bp-md))` — this is a CSS spec limitation. Use the raw pixel values in media queries, but always use the named token value from this table so the correct number is used.

### CSS custom properties for runtime use

When you need to respond to breakpoints in JavaScript (e.g. conditionally rendering a mobile menu), read the token value from the computed style:

```js
const bpMd = parseInt(
  getComputedStyle(document.documentElement)
    .getPropertyValue('--bp-md')
);

const isMobile = window.innerWidth < bpMd;
```

### Subgrid alignment

See the [Subgrid Alignment pattern](/aurora-docs/patterns/subgrid/) for how to use CSS subgrid to align nested content across the page grid — particularly useful for card grids where inner elements need to align across cards.
