---
title: "Subgrid Alignment"
description: "Perfectly aligned card internals using CSS Subgrid."
category: "Patterns"
menu:
  main:
    parent: "patterns"
---

## The Problem
In a standard flex layout, if one card has a long title, it pushes the content down, misaligning the buttons across the row.

## The Solution (Subgrid)
With `.l-subgrid-row`, the parent defines the rows (Header, Body, Footer). The cards simply "hook" into these rows.

{{< demo >}}
<div class="l-subgrid-row">
  
  <div class="card">
    <div class="card__subgrid-header">
      <h3 style="margin:0">Short Title</h3>
    </div>
    <div class="card__subgrid-body">
      <p>A short description.</p>
    </div>
    <div class="card__subgrid-footer">
      <button class="btn primary full-width">Read</button>
    </div>
  </div>

  <div class="card">
    <div class="card__subgrid-header">
      <h3 style="margin:0">A Much Longer Title That Wraps to Two Lines</h3>
    </div>
    <div class="card__subgrid-body">
      <p>Notice how the description below starts at the exact same vertical line as the card to the left, even though this header is taller.</p>
    </div>
    <div class="card__subgrid-footer">
      <button class="btn primary full-width">Read</button>
    </div>
  </div>

  <div class="card">
    <div class="card__subgrid-header">
      <h3 style="margin:0">Medium Title</h3>
    </div>
    <div class="card__subgrid-body">
      <p>This card has a lot more text in the body area. It forces the whole row to grow taller.</p>
      <p>Crucially, the "Read" button below will still align perfectly with the others at the bottom.</p>
    </div>
    <div class="card__subgrid-footer">
      <button class="btn primary full-width">Read</button>
    </div>
  </div>

</div>
{{< /demo >}}

### How it works
1. **Parent:** Defines `grid-auto-rows: auto 1fr auto` (Header, Body, Footer).
2. **Child (Card):** Sets `grid-row: span 3` and `grid-template-rows: subgrid`.
3. **Result:** All headers share the same track. All bodies share the same track. All footers align at the bottom.
