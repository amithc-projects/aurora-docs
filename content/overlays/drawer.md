---
title: "Drawer / Side Panel"
description: "Edge-anchored overlay panels for settings, navigation, forms, and detail views."
category: "Overlays"
menu:
  main:
    parent: "components-simple"
---

A Drawer is a panel that slides in from the edge of the viewport, overlaying the page content. It is used for secondary tasks, settings, navigation, and detail views that do not require a full page transition.

---

## Live Demos

*Note: The `drawer.js` controller automatically binds any button with a `data-drawer-target="id"` attribute to open the corresponding drawer panel.*

### 1. Position Variants
Drawers can slide in from the right (default), left, or bottom edges of the screen. Bottom drawers are heavily recommended for mobile-first action sheets.

{{< demo >}}
<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <button class="btn btn-primary" data-drawer-target="demo-drawer-right">Right (default)</button>
  <button class="btn btn-secondary" data-drawer-target="demo-drawer-left">Left navigation</button>
  <button class="btn btn-secondary" data-drawer-target="demo-drawer-bottom">Bottom sheet</button>
</div>

<!-- Right Drawer -->
<div class="drawer-panel" id="demo-drawer-right" data-position="right" role="dialog" aria-modal="true" aria-labelledby="title-right">
  <div class="drawer-header">
    <div>
        <div class="drawer-title" id="title-right">Right Drawer</div>
        <div class="drawer-subtitle">Default position</div>
    </div>
    <button class="drawer-close" aria-label="Close drawer">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 4L4 12M4 4l8 8" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>
    </button>
  </div>
  <div class="drawer-body">
    <p style="color:var(--ds-sys-color-on-surface-variant); font-size:.9rem; line-height:1.6">This is a right-anchored drawer — the default position. Use it for settings panels, filter configurations, and detail views that keep the main content visible in context.</p>
  </div>
  <div class="drawer-footer">
    <button class="btn btn-secondary btn-sm drawer-close">Cancel</button>
    <button class="btn btn-primary btn-sm drawer-close">Apply</button>
  </div>
</div>

<!-- Left Drawer -->
<div class="drawer-panel" id="demo-drawer-left" data-position="left" role="dialog" aria-modal="true" aria-labelledby="title-left">
  <div class="drawer-header">
    <div class="drawer-title" id="title-left">Left Navigation</div>
    <button class="drawer-close" aria-label="Close drawer">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 4L4 12M4 4l8 8" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>
    </button>
  </div>
  <div class="drawer-body">
    <p style="color:var(--ds-sys-color-on-surface-variant); font-size:.9rem; line-height:1.6">Left drawers are best suited for primary application navigation menus (like hamburger menus) or table of contents features.</p>
  </div>
</div>

<!-- Bottom Drawer -->
<div class="drawer-panel" id="demo-drawer-bottom" data-position="bottom" role="dialog" aria-modal="true" aria-labelledby="title-bottom">
  <div class="drawer-handle"></div>
  <div class="drawer-header">
    <div class="drawer-title" id="title-bottom">Share options</div>
    <button class="drawer-close" aria-label="Close drawer">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 4L4 12M4 4l8 8" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>
    </button>
  </div>
  <div class="drawer-body">
    <p style="color:var(--ds-sys-color-on-surface-variant); font-size:.9rem; line-height:1.6; margin-bottom: 1.5rem">Bottom drawers are ideal for mobile action sheets and contextual menus.</p>
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <button class="btn btn-secondary drawer-close">Copy link</button>
      <button class="btn btn-secondary drawer-close">Share via email</button>
      <button class="btn btn-secondary drawer-close">Export PDF</button>
    </div>
  </div>
</div>
{{< /demo >}}


### 2. Size Variants
Drawers come in `sm`, `md` (default), and `lg` sizing. Use the `data-size=""` attribute on the panel component to set this.

{{< demo >}}
<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <button class="btn btn-secondary btn-sm" data-drawer-target="demo-drawer-sm">Small (280px)</button>
  <button class="btn btn-secondary btn-sm" data-drawer-target="demo-drawer-md">Medium (400px)</button>
  <button class="btn btn-secondary btn-sm" data-drawer-target="demo-drawer-lg">Large (560px)</button>
</div>

<!-- Small -->
<div class="drawer-panel" id="demo-drawer-sm" data-position="right" data-size="sm" role="dialog" aria-modal="true" aria-labelledby="title-sm">
  <div class="drawer-header">
    <div class="drawer-title" id="title-sm">Small — 280px</div>
    <button class="drawer-close" aria-label="Close"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 4L4 12M4 4l8 8" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg></button>
  </div>
  <div class="drawer-body"><p style="color:var(--ds-sys-color-on-surface-variant);font-size:.875rem;line-height:1.6">Narrow panel — good for compact filter panels or contextual help.</p></div>
</div>

<!-- Medium -->
<div class="drawer-panel" id="demo-drawer-md" data-position="right" role="dialog" aria-modal="true" aria-labelledby="title-md">
  <div class="drawer-header">
    <div class="drawer-title" id="title-md">Medium — 400px</div>
    <button class="drawer-close" aria-label="Close"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 4L4 12M4 4l8 8" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg></button>
  </div>
  <div class="drawer-body"><p style="color:var(--ds-sys-color-on-surface-variant);font-size:.875rem;line-height:1.6">Default size. Good for settings forms and detail panels.</p></div>
</div>

<!-- Large -->
<div class="drawer-panel" id="demo-drawer-lg" data-position="right" data-size="lg" role="dialog" aria-modal="true" aria-labelledby="title-lg">
  <div class="drawer-header">
    <div class="drawer-title" id="title-lg">Large — 560px</div>
    <button class="drawer-close" aria-label="Close"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 4L4 12M4 4l8 8" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg></button>
  </div>
  <div class="drawer-body"><p style="color:var(--ds-sys-color-on-surface-variant);font-size:.875rem;line-height:1.6">Wide panel for complex forms and multi-column content.</p></div>
</div>
{{< /demo >}}

---

## Anatomy

```
┌─────────────────────────────────────┐
│ Backdrop (--color-surface-overlay)  │
│  ┌───────────────────────────────┐  │
│  │ Header                    [×] │  │
│  │ Title                         │  │
│  ├───────────────────────────────┤  │
│  │                               │  │
│  │ Body (scrollable)             │  │
│  │                               │  │
│  ├───────────────────────────────┤  │
│  │ Footer (optional)             │  │
│  │ [Cancel]            [Confirm] │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

| Part | Element | Token |
|---|---|---|
| Backdrop | `div.drawer-backdrop` | `--color-surface-overlay` + `--opacity-overlay` |
| Panel | `div.drawer-panel` | `--color-surface-raised` |
| Header | `div.drawer-header` | `--color-border-subtle` bottom border |
| Title | `h2.drawer-title` | `--color-text-primary`, `--text-lg`, `--font-weight-semibold` |
| Close button | `button.drawer-close` | Icon button |
| Body | `div.drawer-body` | Scrollable, `--spacing-component-lg` padding |
| Footer | `div.drawer-footer` | Optional, `--color-border-subtle` top border |

---

## Behaviour

- **Opening:** Triggered by a button or programmatic call. Panel slides in, backdrop fades in simultaneously. Focus moves to the first focusable element inside the panel (or the close button if none).
- **Closing:** Triggered by the close button (`.drawer-close`), pressing `Escape`, or clicking the background backdrop. Returns focus to the element that triggered the drawer.
- **Scroll lock:** Page scroll is locked (`overflow: hidden` on `<body>`) while a drawer is open.
- **Stacking:** Drawers do not stack. Opening a second drawer closes the first. Use a Modal for stacked scenarios.

---

## Accessibility

| Requirement | Implementation |
|---|---|
| ARIA role | `role="dialog"` on the panel |
| Label | `aria-labelledby` pointing to the drawer title `id` |
| Modal flag | `aria-modal="true"` |
| Focus trap | Tab and Shift+Tab cycle only within the drawer while open |
| Escape key | Always closes the drawer |
| Backdrop click | Closes the drawer (can be disabled for persistent variant) |
| Return focus | On close, focus returns to the trigger element |
| Screen reader | Backdrop has `aria-hidden="true"` |

---

## Usage guidelines

### Do
- Use a Drawer for tasks that are secondary to the main page — settings, filters, detail views, sub-forms.
- Always include a visible close button in the header.
- Keep the footer for primary actions (Save, Apply) so the user knows what committing means.
- Use the `bottom` position on mobile rather than `right` — it's more thumb-friendly.

### Don't
- Don't use a Drawer for critical, blocking flows — use a Modal instead.
- Don't put a Drawer inside another Drawer. Nest content inside the body instead.
- Don't use a Drawer as primary navigation on desktop — use a persistent sidebar component.
- Don't skip the backdrop on the default variant — it signals to the user that the page is temporarily inert.

### Drawer vs Modal
| | Drawer | Modal |
|---|---|---|
| Position | Edge-anchored | Centred |
| Content size | Can be long/scrollable | Should be concise |
| Task type | Secondary / ongoing | Blocking / decision |
| Context preserved | Yes — page visible behind | Yes — page visible behind |
| Stacking | No | Yes (use sparingly) |
