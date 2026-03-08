---
title: "Skeleton"
description: "Animated placeholder elements to indicate content is loading."
menu:
  main:
    parent: "components"
    weight: 96
---

{{< demo >}}
<div class="demo-wrapper">
  <div class="demo-section">
    <h2>Skeleton</h2>

    <h3>Card skeleton</h3>
    <div class="skeleton-grid">
      <div class="skeleton-card" aria-busy="true" aria-label="Loading content">
        <div class="skeleton skeleton-image"></div>
        <div class="skeleton skeleton-heading"></div>
        <div class="skeleton-card-body">
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text-short"></div>
        </div>
        <div style="display:flex;gap:.5rem">
          <div class="skeleton skeleton-badge"></div>
          <div class="skeleton skeleton-button" style="width:80px;height:22px;border-radius:var(--radius-full)"></div>
        </div>
      </div>
      <div class="skeleton-card" aria-busy="true" aria-label="Loading content">
        <div class="skeleton skeleton-image"></div>
        <div class="skeleton skeleton-heading" style="width:85%"></div>
        <div class="skeleton-card-body">
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text" style="width:90%"></div>
          <div class="skeleton skeleton-text-short"></div>
        </div>
        <div style="display:flex;gap:.5rem">
          <div class="skeleton skeleton-badge"></div>
        </div>
      </div>
      <div class="skeleton-card" aria-busy="true" aria-label="Loading content">
        <div class="skeleton skeleton-image"></div>
        <div class="skeleton skeleton-heading" style="width:60%"></div>
        <div class="skeleton-card-body">
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text-short"></div>
        </div>
        <div style="display:flex;gap:.5rem">
          <div class="skeleton skeleton-badge"></div>
          <div class="skeleton skeleton-badge" style="width:48px"></div>
        </div>
      </div>
    </div>

    <h3>List skeleton</h3>
    <div class="card-demo" aria-busy="true" aria-label="Loading list">
      <div class="skeleton-list-item">
        <div class="skeleton skeleton-avatar-md"></div>
        <div class="skeleton-list-text">
          <div class="skeleton skeleton-text" style="width:55%"></div>
          <div class="skeleton skeleton-text" style="width:35%;height:.875em"></div>
        </div>
        <div class="skeleton skeleton-button" style="width:64px;height:28px"></div>
      </div>
      <div class="skeleton-list-item">
        <div class="skeleton skeleton-avatar-md"></div>
        <div class="skeleton-list-text">
          <div class="skeleton skeleton-text" style="width:40%"></div>
          <div class="skeleton skeleton-text" style="width:25%;height:.875em"></div>
        </div>
        <div class="skeleton skeleton-button" style="width:64px;height:28px"></div>
      </div>
      <div class="skeleton-list-item">
        <div class="skeleton skeleton-avatar-md"></div>
        <div class="skeleton-list-text">
          <div class="skeleton skeleton-text" style="width:65%"></div>
          <div class="skeleton skeleton-text" style="width:45%;height:.875em"></div>
        </div>
        <div class="skeleton skeleton-button" style="width:64px;height:28px"></div>
      </div>
    </div>

    <h3>Inline / text content</h3>
    <div style="display:flex;flex-direction:column;gap:.625rem;max-width:480px">
      <div class="skeleton skeleton-heading"></div>
      <div class="skeleton skeleton-text"></div>
      <div class="skeleton skeleton-text"></div>
      <div class="skeleton skeleton-text" style="width:80%"></div>
      <div class="skeleton skeleton-text-short"></div>
    </div>
  </div>

</div>
{{< /demo >}}

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

