---
title: "Tag / Chip"
description: "A compact element that represents an attribute, category, filter, or selected value."
menu:
  main:
    parent: "components-simple"
---

A Tag (also called a Chip) is a compact element that represents an attribute, category, filter, or selected value. Tags can be static labels, interactive filters, or removable selections.

## Colors & Semantic Status

Tags use the semantic status palette. Each color has a distinct background, border, and text pairing to ensure perfect contrast and accessibility.

{{< demo >}}
<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; padding: 1rem;">
  <span class="tag tag-neutral">Neutral</span>
  <span class="tag tag-brand">Brand</span>
  <span class="tag tag-success"><span class="tag-dot"></span>Active</span>
  <span class="tag tag-warning"><span class="tag-dot"></span>Pending</span>
  <span class="tag tag-danger"><span class="tag-dot"></span>Blocked</span>
  <span class="tag tag-info">Info</span>
</div>
{{< /demo >}}

## Sizes

Tags come in three sizes: `sm`, `md` (default), and `lg`. Use smaller tags for dense tables and larger tags for standalone filter bars.

{{< demo >}}
<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; padding: 1rem; align-items: center;">
  <span class="tag tag-sm tag-neutral">Small</span>
  <span class="tag tag-neutral">Medium</span>
  <span class="tag tag-lg tag-neutral">Large</span>
</div>
{{< /demo >}}

## Interactive Filters

Filter tags are used to toggle states in a list or search interface. They use the `aria-pressed` attribute to communicate their state to screen readers.

{{< demo >}}
<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; padding: 1rem;" id="demo-filters">
  <button class="tag tag-neutral tag-filter" aria-pressed="true" onclick="this.setAttribute('aria-pressed', this.getAttribute('aria-pressed') === 'true' ? 'false' : 'true')">All</button>
  <button class="tag tag-neutral tag-filter" aria-pressed="true" onclick="this.setAttribute('aria-pressed', this.getAttribute('aria-pressed') === 'true' ? 'false' : 'true')">Strength</button>
  <button class="tag tag-neutral tag-filter" aria-pressed="false" onclick="this.setAttribute('aria-pressed', this.getAttribute('aria-pressed') === 'true' ? 'false' : 'true')">Mobility</button>
</div>
{{< /demo >}}

## Removable Input Tags

Used in multi-select inputs or tag editors. The remove button should always have an `aria-label` specifying what is being removed.

{{< demo >}}
<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; padding: 1rem;">
  <span class="tag tag-brand">
    Running 
    <button class="tag-remove" aria-label="Remove Running" onclick="this.closest('.tag').remove()">
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M6 2L2 6M2 2l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
    </button>
  </span>
  <span class="tag tag-brand">
    5K 
    <button class="tag-remove" aria-label="Remove 5K" onclick="this.closest('.tag').remove()">
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M6 2L2 6M2 2l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
    </button>
  </span>
</div>
{{< /demo >}}
