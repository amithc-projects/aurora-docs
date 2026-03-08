---
title: "Segmented Control"
description: "A smoothly animated alternative to standard Radio Buttons, allowing users to toggle between mutually exclusive options."
category: "Forms"
menu:
  main:
    parent: "components"
---

The Aurora Segmented Control uses a fluid JavaScript engine that measures active labels and dynamically rewrites CSS custom properties to drive a 60-fps hardware-accelerated background slider. Native `<input type="radio">` tags are used under the hood, guaranteeing absolute keyboard accessibility and simplified form submissions.

## Standard Usage

Below is a standard segmented control featuring three options. Notice how the indicator perfectly adjusts its `width` and `transform` as clicking across labels of different lengths.

{{< demo >}}
<div style="display: flex; justify-content: center; padding: 2rem 0;">
    <div class="segmented-control">
        <div class="segmented-control__indicator"></div>
        
        <input type="radio" id="seg-today" name="timeframe" value="today" checked>
        <label for="seg-today">Today</label>
        
        <input type="radio" id="seg-week" name="timeframe" value="week">
        <label for="seg-week">This Week</label>
        
        <input type="radio" id="seg-month" name="timeframe" value="month">
        <label for="seg-month">Month</label>
    </div>
</div>
{{< /demo >}}

---

## Icon Only & Event Handling

Segmented controls natively emit standard `change` events from their interior radios, but the wrapper also dispatches a custom `segmented:change` CustomEvent carrying the payload for convenience.

{{< demo >}}
<div style="display: flex; flex-direction: column; align-items: center; gap: 2rem; padding: 2rem 0;">
    <div class="segmented-control" id="demo-align-control">
        <div class="segmented-control__indicator"></div>
        
        <input type="radio" id="align-left" name="alignment" value="left" checked>
        <label for="align-left" aria-label="Align Left">
            <span class="material-symbols-outlined">format_align_left</span>
        </label>
        
        <input type="radio" id="align-center" name="alignment" value="center">
        <label for="align-center" aria-label="Align Center">
            <span class="material-symbols-outlined">format_align_center</span>
        </label>
        
        <input type="radio" id="align-right" name="alignment" value="right">
        <label for="align-right" aria-label="Align Right">
            <span class="material-symbols-outlined">format_align_right</span>
        </label>
    </div>

    <div style="padding: 1rem; width: 100%; border: 1px dashed var(--ds-sys-color-border); border-radius: var(--ds-sys-radius-card);">
        <p id="demo-align-target" style="text-align: left; transition: all 0.3s ease;">
            The quick brown fox jumps over the lazy dog.
        </p>
    </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const control = document.getElementById('demo-align-control');
    const target = document.getElementById('demo-align-target');

    control.addEventListener('segmented:change', (e) => {
        target.style.textAlign = e.detail.value;
    });
});
</script>
{{< /demo >}}
