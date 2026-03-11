---
title: "Dropdown Menu"
description: "Action menus, context menus, and selection menus triggered from a button."
menu:
  main:
    parent: "components-simple"
---

A Dropdown Menu is a list of actions or options that appears when the user activates a trigger element. It is distinct from a Select input (which captures a form value) — a Dropdown Menu triggers actions or navigation.

## Action Menu

The default action menu positions itself below the trigger button. Trigger it by clicking or hitting Space/Enter.

{{< demo >}}
<div style="display: flex; gap: 1rem; flex-wrap: wrap; padding-bottom: 180px;">
  <!-- Basic actions -->
  <div class="dropdown-wrapper">
    <button aria-haspopup="menu" aria-expanded="false" aria-controls="menu-actions" style="display: inline-flex; align-items: center; gap: .5rem; padding: .5rem 1rem; border-radius: var(--ds-sys-radius-md); border: 1.5px solid var(--ds-sys-color-border); background: var(--ds-sys-color-surface); color: var(--ds-sys-color-text); cursor: pointer; font-size: 0.875rem; font-weight: 500;">
      Actions
      <svg style="width: 14px; height: 14px; transition: transform 200ms cubic-bezier(0,0,.2,1);" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
    <ul class="dropdown-menu" id="menu-actions" role="menu">
      <li class="menu-item" role="menuitem" tabindex="-1">
        <svg class="item-icon" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>
        <span class="item-label">New item</span>
        <span class="item-shortcut">⌘N</span>
      </li>
      <li class="menu-item" role="menuitem" tabindex="-1">
        <svg class="item-icon" viewBox="0 0 16 16" fill="none"><path d="M11 2H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" stroke="currentColor" stroke-width="1.5"/><path d="M9 2V1M7 2V1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        <span class="item-label">Duplicate</span>
        <span class="item-shortcut">⌘D</span>
      </li>
      <li class="menu-item" role="menuitem" tabindex="-1">
        <svg class="item-icon" viewBox="0 0 16 16" fill="none"><path d="M13.5 2.5l-11 11M13.5 13.5l-11-11" stroke="currentColor" stroke-width="0"/><path d="M3 8h10M8 3v10" stroke="currentColor" stroke-width="0"/><path d="M10 2H6M2 6v4M14 6v4M6 14h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M2 6a4 4 0 0 1 4-4M14 6a4 4 0 0 0-4-4M2 10a4 4 0 0 0 4 4M14 10a4 4 0 0 1-4 4" stroke="currentColor" stroke-width="1.5"/></svg>
        <span class="item-label">Share</span>
      </li>
      <li class="menu-separator" role="separator"></li>
      <li class="menu-item is-destructive" role="menuitem" tabindex="-1">
        <svg class="item-icon" viewBox="0 0 16 16" fill="none"><path d="M3 4h10M6 4V3h4v1M7 7v5M9 7v5M5 4l.5 8h5L11 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span class="item-label">Delete</span>
      </li>
    </ul>
  </div>

  <!-- More options (icon trigger) -->
  <div class="dropdown-wrapper">
    <button aria-haspopup="menu" aria-expanded="false" aria-controls="menu-more" aria-label="More options" style="display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: var(--ds-sys-radius-md); border: 1.5px solid var(--ds-sys-color-border); background: var(--ds-sys-color-surface); color: var(--ds-sys-color-text); cursor: pointer;">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="3" r="1.25"/><circle cx="8" cy="8" r="1.25"/><circle cx="8" cy="13" r="1.25"/></svg>
    </button>
    <ul class="dropdown-menu align-end" id="menu-more" role="menu">
      <li class="menu-item" role="menuitem" tabindex="-1"><svg class="item-icon" viewBox="0 0 16 16" fill="none"><path d="M2 8s2.5-5 6-5 6 5 6 5-2.5 5-6 5-6-5-6-5z" stroke="currentColor" stroke-width="1.5"/><circle cx="8" cy="8" r="2" stroke="currentColor" stroke-width="1.5"/></svg><span class="item-label">View</span></li>
      <li class="menu-item" role="menuitem" tabindex="-1"><svg class="item-icon" viewBox="0 0 16 16" fill="none"><path d="M11 2l3 3-8 8H3v-3L11 2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg><span class="item-label">Edit</span><span class="item-shortcut">⌘E</span></li>
      <li class="menu-separator" role="separator"></li>
      <li class="menu-item" role="menuitem" tabindex="-1" aria-disabled="true"><svg class="item-icon" viewBox="0 0 16 16" fill="none"><path d="M8 2v8M5 7l3 3 3-3M3 13h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="item-label">Export</span></li>
      <li class="menu-separator" role="separator"></li>
      <li class="menu-item is-destructive" role="menuitem" tabindex="-1"><svg class="item-icon" viewBox="0 0 16 16" fill="none"><path d="M3 4h10M6 4V3h4v1M7 7v5M9 7v5M5 4l.5 8h5L11 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="item-label">Delete</span></li>
    </ul>
  </div>
</div>
{{< /demo >}}

## With Groups & Labels

You can group interactive choices within a dropdown menu. If users can toggle options directly from the dropdown, be sure to use `menuitemcheckbox` or `menuitemradio`.

{{< demo >}}
<div style="display: flex; padding-bottom: 180px;">
  <div class="dropdown-wrapper">
    <button aria-haspopup="menu" aria-expanded="false" aria-controls="menu-grouped" style="display: inline-flex; align-items: center; gap: .5rem; padding: .5rem 1rem; border-radius: var(--ds-sys-radius-md); border: 1.5px solid var(--ds-sys-color-border); background: var(--ds-sys-color-surface); color: var(--ds-sys-color-text); cursor: pointer; font-size: 0.875rem; font-weight: 500;">
      Sort &amp; filter
      <svg style="width: 14px; height: 14px;" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
    <ul class="dropdown-menu" id="menu-grouped" role="menu">
      <li class="menu-group-label" role="presentation">Sort by</li>
      <li class="menu-item" role="menuitemradio" aria-checked="true" tabindex="-1">
        <svg class="item-check" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span class="item-label">Date created</span>
      </li>
      <li class="menu-item" role="menuitemradio" aria-checked="false" tabindex="-1">
        <svg class="item-check" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span class="item-label">Last modified</span>
      </li>
      <li class="menu-item" role="menuitemradio" aria-checked="false" tabindex="-1">
        <svg class="item-check" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span class="item-label">Alphabetical</span>
      </li>
      <li class="menu-separator" role="separator"></li>
      <li class="menu-group-label" role="presentation">View</li>
      <li class="menu-item" role="menuitemcheckbox" aria-checked="true" tabindex="-1">
        <svg class="item-check" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span class="item-label">Show archived</span>
      </li>
      <li class="menu-item" role="menuitemcheckbox" aria-checked="false" tabindex="-1">
        <svg class="item-check" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span class="item-label">Compact rows</span>
      </li>
    </ul>
  </div>
</div>
{{< /demo >}}

## With Badge & New Indicator

{{< demo >}}
<div style="display: flex; padding-bottom: 180px;">
  <div class="dropdown-wrapper">
    <button aria-haspopup="menu" aria-expanded="false" aria-controls="menu-new" style="display: inline-flex; align-items: center; gap: .5rem; padding: .5rem 1rem; border-radius: var(--ds-sys-radius-md); border: 1.5px solid var(--ds-sys-color-primary); background: var(--ds-sys-color-primary); color: #fff; cursor: pointer; font-size: 0.875rem; font-weight: 500;">
      Create
      <svg style="width: 14px; height: 14px;" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
    <ul class="dropdown-menu" id="menu-new" role="menu">
      <li class="menu-item" role="menuitem" tabindex="-1"><svg class="item-icon" viewBox="0 0 16 16" fill="none"><path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4z" stroke="currentColor" stroke-width="1.5"/><path d="M8 6v4M6 8h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg><span class="item-label">New document</span></li>
      <li class="menu-item" role="menuitem" tabindex="-1"><svg class="item-icon" viewBox="0 0 16 16" fill="none"><rect x="2" y="4" width="12" height="9" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M5 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" stroke="currentColor" stroke-width="1.5"/></svg><span class="item-label">New project</span><span class="item-badge">New</span></li>
      <li class="menu-item" role="menuitem" tabindex="-1"><svg class="item-icon" viewBox="0 0 16 16" fill="none"><path d="M13 7H3M10 4l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="item-label">Import</span></li>
      <li class="menu-item" role="menuitem" tabindex="-1" aria-disabled="true"><svg class="item-icon" viewBox="0 0 16 16" fill="none"><path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2zM8 6v4M8 10h.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg><span class="item-label">From template</span></li>
    </ul>
  </div>
</div>
{{< /demo >}}
