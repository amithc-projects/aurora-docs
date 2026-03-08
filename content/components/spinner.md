---
title: "Spinner"
description: "A circular, indeterminate loading indicator used to show background activity."
menu:
  main:
    parent: "components"
    weight: 95
---

{{< demo >}}
<div class="demo-wrapper">
  <!-- ── SPINNER ── -->
  <div class="demo-section">
    <h2>Spinner</h2>

    <h3>Sizes</h3>
    <div class="spinner-row" role="status" aria-label="Loading">
      <div title="xs — 12px"><svg class="spinner spinner-xs" viewBox="0 0 24 24"><circle class="track" cx="12" cy="12" r="9" stroke-width="2.5"/><circle class="arc" cx="12" cy="12" r="9" stroke-width="2.5"/></svg></div>
      <div title="sm — 16px"><svg class="spinner spinner-sm" viewBox="0 0 24 24"><circle class="track" cx="12" cy="12" r="9" stroke-width="2.5"/><circle class="arc" cx="12" cy="12" r="9" stroke-width="2.5"/></svg></div>
      <div title="md — 24px (default)"><svg class="spinner spinner-md" viewBox="0 0 24 24"><circle class="track" cx="12" cy="12" r="9" stroke-width="2.5"/><circle class="arc" cx="12" cy="12" r="9" stroke-width="2.5"/></svg></div>
      <div title="lg — 40px"><svg class="spinner spinner-lg" viewBox="0 0 24 24"><circle class="track" cx="12" cy="12" r="9" stroke-width="2"/><circle class="arc" cx="12" cy="12" r="9" stroke-width="2"/></svg></div>
      <div title="xl — 64px"><svg class="spinner spinner-xl" viewBox="0 0 24 24"><circle class="track" cx="12" cy="12" r="9" stroke-width="1.75"/><circle class="arc" cx="12" cy="12" r="9" stroke-width="1.75"/></svg></div>
    </div>

    <h3>Variants</h3>
    <div class="spinner-row">
      <div style="display:flex;flex-direction:column;align-items:center;gap:.5rem;font-size:var(--text-xs);color:var(--color-text-secondary)">
        <svg class="spinner spinner-md" viewBox="0 0 24 24"><circle class="track" cx="12" cy="12" r="9" stroke-width="2.5"/><circle class="arc" cx="12" cy="12" r="9" stroke-width="2.5"/></svg>
        Brand (default)
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:.5rem;font-size:var(--text-xs);color:var(--color-text-secondary)">
        <svg class="spinner spinner-md spinner-muted" viewBox="0 0 24 24"><circle class="track" cx="12" cy="12" r="9" stroke-width="2.5"/><circle class="arc" cx="12" cy="12" r="9" stroke-width="2.5"/></svg>
        Muted
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:.5rem;font-size:var(--text-xs);color:var(--color-text-secondary)">
        <div style="background:var(--color-brand);padding:.75rem;border-radius:var(--radius-md);">
          <svg class="spinner spinner-md spinner-inverted" viewBox="0 0 24 24"><circle class="track" cx="12" cy="12" r="9" stroke-width="2.5"/><circle class="arc" cx="12" cy="12" r="9" stroke-width="2.5"/></svg>
        </div>
        Inverted
      </div>
    </div>

    <h3>In context — button loading state</h3>
    <div style="display:flex;gap:.75rem;flex-wrap:wrap;align-items:center">
      <button class="btn btn-primary" disabled>
        <svg class="spinner spinner-sm spinner-inverted" viewBox="0 0 24 24"><circle class="track" cx="12" cy="12" r="9" stroke-width="2.5"/><circle class="arc" cx="12" cy="12" r="9" stroke-width="2.5"/></svg>
        Saving…
      </button>
      <button class="btn btn-ghost" disabled>
        <svg class="spinner spinner-sm spinner-muted" viewBox="0 0 24 24"><circle class="track" cx="12" cy="12" r="9" stroke-width="2.5"/><circle class="arc" cx="12" cy="12" r="9" stroke-width="2.5"/></svg>
        Loading
      </button>
      <span style="display:inline-flex;align-items:center;gap:.375rem;font-size:var(--text-sm);color:var(--color-text-secondary)">
        <svg class="spinner spinner-xs spinner-muted" viewBox="0 0 24 24"><circle class="track" cx="12" cy="12" r="9" stroke-width="2.5"/><circle class="arc" cx="12" cy="12" r="9" stroke-width="2.5"/></svg>
        Syncing data
      </span>
    </div>
  </div>

</div>
{{< /demo >}}

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

