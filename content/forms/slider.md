---
title: "Slider"
category: "Forms"
description: "Range input for selecting values."
menu:
  main:
    parent: "forms"
---

## Basic Range
The standard HTML5 range input.

{{< demo >}}
<div class="field">
  <label class="field__label">Volume</label>
  <input type="range" class="range" min="0" max="100">
</div>
{{< /demo >}}

## With Steps
Snaps to specific increments.

{{< demo >}}
<div class="field">
  <label class="field__label">Rating (0-5)</label>
  <input type="range" class="range" min="0" max="5" step="1">
</div>
{{< /demo >}}
