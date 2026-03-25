---
title: "Button Bar (Group)"
description: "Combine multiple buttons into a single cohesive navigation or action bar."
menu:
  main:
    parent: "nav-page"
---

The Button Bar (or Button Group) allows you to group related actions or navigation items into a single, cohesive visual unit. This is often used for tab-like navigation, filter bars, or multi-state toggles.

## Basic Layout

Join buttons together with centered text and internal dividers.

{{< demo >}}
<div class="l-stack" style="gap: 2rem; align-items: start;">

  <!-- Standard Button Bar -->
  <div class="btn-group" role="group" aria-label="Navigation">
    <button class="btn is-active">Profile</button>
    <button class="btn">Settings</button>
    <button class="btn">Messages</button>
  </div>

  <!-- Icon-only variants -->
  <div class="btn-group" role="group" aria-label="Actions">
    <button class="btn" title="Edit">
      <span class="material-symbols-outlined">edit</span>
    </button>
    <button class="btn" title="Delete">
      <span class="material-symbols-outlined">delete</span>
    </button>
    <button class="btn" title="Share">
      <span class="material-symbols-outlined">share</span>
    </button>
  </div>

</div>
{{< /demo >}}

## Vertical Orientation

For sidebars or mobile menus, use the `--vertical` modifier.

{{< demo >}}
<div class="btn-group btn-group--vertical">
  <button class="btn is-active">Dashboard</button>
  <button class="btn">Projects</button>
  <button class="btn">Team</button>
  <button class="btn">Reports</button>
</div>
{{< /demo >}}

## Compact Table Navigation

You can use the button bar for compact pagination or table footers, matching the aesthetic of the system's pagination.

{{< demo >}}
<div class="btn-group btn-group--small" role="navigation" aria-label="Table navigation">
  <button class="btn" aria-label="Previous">
    <span class="material-symbols-outlined">chevron_left</span>
  </button>
  <button class="btn" style="pointer-events: none; font-weight: 600;">3 / 12</button>
  <button class="btn" aria-label="Next">
    <span class="material-symbols-outlined">chevron_right</span>
  </button>
</div>
{{< /demo >}}

## Themes

The component automatically adapts to the system's theme tokens.

### Corporate (Default)
Standard elevated surface with subtle borders.

### Casual
A sticker-like aesthetic with thick borders and high-contrast shadows.

---

## Anatomy

- **Container (`.btn-group`)**: The outer wrapper providing the border and rounded corners.
- **Item (`.btn`, `button`)**: The individual interactive elements.
- **Active State (`.is-active`)**: Used to highlight the currently selected or active item.

## Usage Guidelines

- **Logical Grouping**: Only group buttons that are logically related (e.g., navigation links, text formatting options).
- **Aria Labels**: Always provide `aria-label` to the container describing the group's purpose.
- **State Management**: When using as a toggle group, ensure `aria-current="page"` or `aria-pressed="true"` is handled via JavaScript for screen readers.
