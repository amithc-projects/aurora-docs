# Spinner, Skeleton & Divider

> **Category:** Atoms & Molecules · **Status:** Proposed · **Last updated:** 2026-03-07

Three small loading and structural primitives documented together due to their compact scope.

---

## Spinner

A rotating indicator used when the duration of a loading operation is unknown.

### Anatomy

```
  ◌   ← Circular track (--color-border-subtle)
  ◑   ← Rotating arc  (--color-brand)
```

### Variants

| Variant | Use |
|---|---|
| **Default** (brand) | General async operations, button loading state |
| **Muted** | On coloured or dark surfaces where brand colour is too prominent |
| **Inverted** | On brand-coloured buttons or banners |

### Sizes

| Size | Token | px | Use |
|---|---|---|---|
| `xs` | `--spinner-size-xs` | 12px | Inline text, micro contexts |
| `sm` | `--spinner-size-sm` | 16px | Table cells, compact UI |
| `md` | `--spinner-size-md` | 24px | **Default** — button loading, form submission |
| `lg` | `--spinner-size-lg` | 40px | Card-level loading |
| `xl` | `--spinner-size-xl` | 64px | Page-level loading |

### Tokens

| Token | Default | Description |
|---|---|---|
| `--spinner-size-xs` | `12px` | |
| `--spinner-size-sm` | `16px` | |
| `--spinner-size-md` | `24px` | |
| `--spinner-size-lg` | `40px` | |
| `--spinner-size-xl` | `64px` | |
| `--spinner-track-color` | `var(--color-border-subtle)` | Background circle |
| `--spinner-arc-color` | `var(--color-brand)` | Animated arc |
| `--spinner-stroke-width` | `2px` | Stroke thickness |
| `--spinner-duration` | `700ms` | One full rotation |

### Accessibility

- Always add `role="status"` to the spinner's container.
- Include a visually hidden label: `<span class="sr-only">Loading…</span>`.
- When loading completes, update or remove the `role="status"` region so screen readers announce completion.
- Respect `prefers-reduced-motion` — reduce to a pulse animation instead of rotation.

### Usage guidelines

- Use a Spinner for **unknown duration** operations (network requests, processing).
- Use a [Progress Bar](/aurora-docs/components/progress/) for **known duration** or **percentage-complete** operations.
- Use [Skeleton](#skeleton) when the layout of the content is known in advance.
- A Spinner should never appear for operations expected to complete in under 300ms — introduce a delay before showing it.
- Button loading state: replace button label with a Spinner and set `disabled`. Maintain button width to prevent layout shift.

---

## Skeleton

Placeholder content that mimics the shape of real content while it loads. Reduces perceived load time by showing structure immediately.

### Anatomy

Skeleton is a low-level utility. It renders a grey rectangle with a shimmer animation. Specific shapes are composed by setting width, height, and border-radius.

```
┌─────────────────────────────────────┐
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│  ← shimmer sweep →
└─────────────────────────────────────┘
```

### Preset shapes

| Shape | Class / prop | Description |
|---|---|---|
| Text line | `.skeleton-text` | Full-width line, 1em tall |
| Text line (short) | `.skeleton-text-short` | 60% width — for last line in a paragraph |
| Heading | `.skeleton-heading` | 1.25em tall, 70% wide |
| Avatar (circle) | `.skeleton-avatar-{sm,md,lg}` | Circle, matches avatar sizes |
| Avatar (square) | `.skeleton-avatar-square` | Rounded square |
| Image | `.skeleton-image` | 16:9 aspect ratio block |
| Button | `.skeleton-button` | Pill shape, standard button height |
| Badge | `.skeleton-badge` | Small pill |
| Card | Composed from above | Compose with `.skeleton-card` wrapper |

### Skeleton card example

```html
<div class="skeleton-card">
  <div class="skeleton skeleton-image"></div>
  <div class="skeleton skeleton-heading" style="width:75%"></div>
  <div class="skeleton skeleton-text"></div>
  <div class="skeleton skeleton-text"></div>
  <div class="skeleton skeleton-text-short"></div>
</div>
```

### Animation

The shimmer uses a gradient sweep from left to right. The gradient moves using `background-position` animation — no transform needed, making it performant.

```css
@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

With `prefers-reduced-motion`, the shimmer is replaced with a static pulse (`opacity` oscillation).

### Tokens

| Token | Default | Description |
|---|---|---|
| `--skeleton-bg` | `var(--color-neutral-200)` | Base colour |
| `--skeleton-shine` | `var(--color-neutral-100)` | Shimmer highlight colour |
| `--skeleton-radius` | `var(--radius-md)` | Default corner radius |
| `--skeleton-duration` | `1.5s` | Shimmer sweep duration |

In dark mode, `--skeleton-bg` maps to `--color-neutral-700` and `--skeleton-shine` to `--color-neutral-600`.

### Accessibility

- Skeleton containers must have `aria-busy="true"` and `aria-label="Loading…"`.
- When content loads, remove skeletons and set `aria-busy="false"`.
- Never mix real content and skeletons in the same visual block.

### Usage guidelines

- Use Skeleton when you know the shape of the incoming content. Use Spinner when you don't.
- Match skeleton proportions to the real content as closely as possible — mismatched skeletons cause layout shift on load.
- Don't show Skeletons indefinitely. After 10 seconds with no content, show an error state instead.

---

## Divider

A thin rule that separates content into visual groups. Horizontal or vertical.

### Variants

| Variant | Description |
|---|---|
| **Horizontal** (default) | Full-width rule between vertical sections |
| **Vertical** | Inline separator between horizontal elements |
| **With label** | Centred text label interrupts the rule |

### Label divider examples

```
──────────── OR ────────────

──────── This week ─────────
```

### Tokens

| Token | Default | Description |
|---|---|---|
| `--divider-color` | `var(--color-border-subtle)` | Line colour |
| `--divider-thickness` | `1px` | Line weight |
| `--divider-margin-y` | `var(--space-4)` | Vertical margin (horizontal divider) |
| `--divider-margin-x` | `var(--space-3)` | Horizontal margin (vertical divider) |
| `--divider-label-color` | `var(--color-text-secondary)` | Label text colour |
| `--divider-label-font-size` | `var(--text-xs)` | Label font size |
| `--divider-label-gap` | `var(--space-3)` | Gap between rule and label |

### Accessibility

- Use `role="separator"` on the divider element.
- Add `aria-orientation="vertical"` for vertical dividers.
- Labelled dividers: the label is decorative — use `aria-hidden="true"` on it unless the label is the primary way to navigate sections (e.g. date group headers in a list).

### Usage guidelines

- Use a Divider to separate logically distinct sections, not to add visual decoration.
- Avoid stacking multiple dividers in a row — rethink the content grouping.
- In dense lists, use whitespace (padding) to group items before reaching for a divider.
- Vertical dividers are best used sparingly — between exactly two sibling elements (e.g. a stat and its label, or two action buttons).
