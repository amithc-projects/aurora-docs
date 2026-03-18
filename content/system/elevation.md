---
title: "Elevation & Z-Index"
description: "Guidelines for surface depth, stacking contexts, and shadows."
menu:
  main:
    parent: "overview"
---

## Overview

Elevation in Aurora dictates the Z-axis distance between surfaces. We communicate this depth visually using **shadows**, and technically using **Z-index tokens**. This ensures that layered components (like dropdowns, modals, and sticky headers) always stack predictably without fighting for the top spot.

## The Z-Index Scale

Never hardcode a `z-index` integer like `999` or `9999` in your components. Use the following CSS variables defined globally in Aurora.

| Token | Value | Explanation |
|---|---|---|
| `--z-below` | `-1` | Pushes an element behind the document base (decorations) |
| `--z-base` | `0` | The default document flow where standard content sits |
| `--z-raised` | `10` | Interactive surfaces slightly raised above base (cards, sticky table headers) |
| `--z-dropdown` | `100` | Flyout menus, comboboxes, and date pickers |
| `--z-sticky` | `200` | Global headers, sidebars, or subnavs that stay in the viewport |
| `--z-overlay` | `300` | The dark mask or backdrop behind a modal or offcanvas element |
| `--z-modal` | `400` | Modals, drawers, and heavy dialog boxes (sits on top of the overlay) |
| `--z-popover` | `500` | Toolbars or popovers that can be triggered from inside a modal |
| `--z-toast` | `600` | Toast notifications (must always be visible above everything else) |
| `--z-tooltip` | `700` | Hover tooltips (must never be obscured by notifications) |

## Surface Elevation (Shadows)

Shadows visually reinforce the Z-index scale. Higher elevation components cast larger, softer shadows to indicate distance from the base background.

### Light Mode vs. Dark Mode

Shadows behave differently depending on the active theme:
- **Light Mode**: Standard drop-shadows are used.
- **Dark Mode**: Shadows become significantly darker and more opaque. In many high-elevation dark mode surfaces, a subtle lighter border or lighter surface tint provides better contrast than a shadow alone.

### Shadow Scale

Use the following semantic shadow tokens (`--shadow-*`) on your components instead of manually writing box-shadow properties.

{{< demo >}}
<div style="display: flex; gap: 2rem; flex-wrap: wrap;">
  <div style="width: 150px; height: 150px; border-radius: 8px; background: var(--ds-sys-color-surface); box-shadow: var(--shadow-sm); display: flex; align-items: center; justify-content: center; text-align: center; flex-direction: column;">
    <strong>--shadow-sm</strong><br><small>Default elements, cards</small>
  </div>
  <div style="width: 150px; height: 150px; border-radius: 8px; background: var(--ds-sys-color-surface); box-shadow: var(--shadow-md); display: flex; align-items: center; justify-content: center; text-align: center; flex-direction: column;">
    <strong>--shadow-md</strong><br><small>Dropdowns</small>
  </div>
  <div style="width: 150px; height: 150px; border-radius: 8px; background: var(--ds-sys-color-surface); box-shadow: var(--shadow-lg); display: flex; align-items: center; justify-content: center; text-align: center; flex-direction: column;">
    <strong>--shadow-lg</strong><br><small>Modals, Menus</small>
  </div>
  <div style="width: 150px; height: 150px; border-radius: 8px; background: var(--ds-sys-color-surface); box-shadow: var(--shadow-xl); display: flex; align-items: center; justify-content: center; text-align: center; flex-direction: column;">
    <strong>--shadow-xl</strong><br><small>Floating Popovers</small>
  </div>
</div>
{{< /demo >}}
