---
title: "Divider"
description: "A thin rule that separates content into visual groups."
menu:
  main:
    parent: "components-simple"
---

{{< demo >}}
<div class="demo-wrapper">
  <div class="demo-section">
    <h2>Divider</h2>

    <h3>Horizontal (default)</h3>
    <div class="card-demo">
      <p class="section-content">This section contains introductory content about the topic.</p>
      <hr class="divider" role="separator" />
      <p class="section-content">This section contains supplementary information below the divider.</p>
      <hr class="divider divider-subtle" role="separator" />
      <p class="section-content" style="margin-bottom:0">Subtle variant — lower contrast for denser layouts.</p>
    </div>

    <h3>With label</h3>
    <div class="card-demo" style="display:flex;flex-direction:column;gap:0">
      <p class="section-content">Content above</p>
      <div class="divider-labeled" role="separator"><span class="divider-labeled-text" aria-hidden="true">OR</span></div>
      <p class="section-content">Alternative content below</p>
      <div class="divider-labeled" role="separator"><span class="divider-labeled-text" aria-hidden="true">This week</span></div>
      <p class="section-content" style="margin-bottom:0">Date-grouped list content</p>
    </div>

    <h3>Vertical</h3>
    <div class="card-demo">
      <div class="inline-row" style="gap:0">
        <span style="font-size:var(--text-sm);color:var(--color-text-secondary)">12 items</span>
        <span class="divider-vertical" role="separator" aria-orientation="vertical"></span>
        <span style="font-size:var(--text-sm);color:var(--color-text-secondary)">3 selected</span>
        <span class="divider-vertical" role="separator" aria-orientation="vertical"></span>
        <span style="font-size:var(--text-sm);color:var(--color-brand);font-weight:500;cursor:pointer">Clear all</span>
      </div>
    </div>
  </div>

</div>
{{< /demo >}}

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
