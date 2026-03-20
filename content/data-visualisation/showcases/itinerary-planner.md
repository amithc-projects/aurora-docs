---
title: "Zero-Latency Journey Planner"
description: "A fast, pure-data multi-stop itinerary builder powered by the Antigravity binary engine."
menu:
  main:
    parent: "data-visualisation"
    name: "Journey Planner"
    weight: 16
categories: ["Data", "Interactive"]
tags: ["Data", "Interactive", "Binary"]
---

<style>
  .search-input {
    flex-grow: 1;
    padding: var(--ds-spacing-3) var(--ds-spacing-4);
    border: 1px solid var(--ds-sys-color-outline);
    border-radius: var(--ds-radius-md);
    background-color: var(--ds-sys-color-surface-container);
    color: var(--ds-sys-color-on-surface);
    font-size: var(--ds-typography-body-large-font-size);
  }
  .search-input:focus {
    outline: none;
    border-color: var(--ds-sys-color-primary);
    box-shadow: 0 0 0 2px var(--ds-sys-color-primary-container);
  }
</style>

<div class="ds-container">

<div style="max-width: 800px; margin: 0 auto; padding: var(--ds-spacing-8) 0;">

<h2 style="color: var(--ds-sys-color-primary); display: flex; align-items: center; gap: 8px;">
<span class="material-symbols-outlined">map</span> Multi-Stop Journey Controller
</h2>

<p style="color: var(--ds-sys-color-on-surface-variant); margin-bottom: var(--ds-spacing-6);">
This demonstrator accesses the 2MB Antigravity binary route manifest natively. Select an origin terminal, and the system instantly resolves the outbound topological matrix to generate uniquely filtered destination comboboxes.
</p>

<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--ds-spacing-4);">
<div style="font-weight: 700; color: var(--ds-sys-color-on-surface); font-size: 1.1rem;">Flight Path</div>
<button id="reset-itinerary-btn" style="background: var(--ds-sys-color-error); color: var(--ds-sys-color-on-error); border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-weight: 600;">Reset Journey</button>
</div>

<!-- The Iterative Builder Mount Point -->
<div id="itinerary-stops" style="display: flex; flex-direction: column; gap: var(--ds-spacing-3); background: var(--ds-sys-color-surface-container-low); padding: var(--ds-spacing-4); border-radius: var(--ds-radius-lg); border: 1px solid var(--ds-sys-color-outline-variant);">
<div style="color: var(--ds-sys-color-on-surface-variant); font-style: italic;">Loading Engine...</div>
</div>

</div>

</div>

<script type="module" src="/aurora-docs/js/components/itinerary-planner.js?v=2"></script>
