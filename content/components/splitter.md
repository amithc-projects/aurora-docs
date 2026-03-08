---
title: "Splitter"
description: "A highly versatile, draggable pane divider supporting pane-resizing and overlay-reveal modes."
category: "Layout"
menu:
  main:
    parent: "components"
---

The Aurora Splitter component splits a container into two controllable panes. It supports two radically different modes:
1. `data-mode="resize"`: Physically alters the layout dimensions of the two sibling panes (using CSS Grid).
2. `data-mode="reveal"`: Overlays the two panes directly on top of each other, clipping the top one to reveal what is beneath (using `clip-path`). Ideal for image comparisons.

Both modes support horizontal and vertical orientations via the `data-orientation` attribute.

---

## 1. Image Comparison (Reveal Mode)
Use `data-mode="reveal"` to overlay two `splitter__panel` containers. When the user drags the splitter, it changes the CSS mask boundaries to peel the top layer away.

*(Works beautifully for viewing "Before / After" photo edits.)*

{{< demo >}}
<!-- Horizontal Split Overlay -->
<div class="splitter-container" data-splitter data-mode="reveal" data-orientation="horizontal" data-initial-pos="40" style="height: 400px; border-radius: var(--ds-sys-radius-card); background: #eee;">
  
  <div class="splitter__panel">
    <!-- Top Image (After) -->
    <img src="https://picsum.photos/id/111/1000/600" alt="New Car" loading="lazy">
    <span class="badge badge--solid badge--primary" style="position: absolute; top: 1rem; left: 1rem;">After</span>
  </div>

  <div class="splitter__handle" aria-label="Resize overlay">
    <div class="splitter__knob">
      <span class="material-symbols-outlined">drag_indicator</span>
    </div>
  </div>

  <div class="splitter__panel">
    <!-- Bottom Image (Before) -->
    <img src="https://picsum.photos/id/107/1000/600" alt="Old Car" style="filter: grayscale(100%);" loading="lazy">
    <span class="badge" style="position: absolute; top: 1rem; right: 1rem;">Before</span>
  </div>

</div>
{{< /demo >}}

---

## 2. Layout Resizing (Resize Mode)
Use `data-mode="resize"` to physically push and squeeze content in standard CSS Grid layouts. This is commonly used for code editors, sidebars, or complex dashboard interfaces.

{{< demo >}}
<div class="splitter-container" data-splitter data-mode="resize" data-orientation="horizontal" style="height: 300px; border: 1px solid var(--ds-sys-color-border); border-radius: var(--ds-sys-radius-card);">
  
  <aside class="splitter__panel" style="padding: 1rem; background: var(--ds-sys-color-surface-container-low);">
    <h3 style="font-size: 0.9rem; font-weight: 600; margin-bottom: 1rem;">Navigation</h3>
    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.8rem;">
      <li>Dashboard</li>
      <li>Users</li>
      <li>Analytics</li>
      <li>Settings</li>
    </ul>
  </aside>

  <div class="splitter__handle" aria-label="Resize panes"></div>

  <main class="splitter__panel" style="padding: 1.5rem;">
    <h2 style="margin-bottom: 1rem;">Admin Dashboard</h2>
    <p style="color: var(--ds-sys-color-on-surface-variant); line-height: 1.6;">
      This content flows naturally as the container shrinks or grows. The splitter uses CSS Grid to recalculate the boundaries seamlessly without expensive JavaScript reflow calculations.
    </p>
  </main>

</div>
{{< /demo >}}

---

## 3. Vertical Reveal (Top / Bottom)
Change the orientation of the splitter to `vertical` to wipe/reveal down and up across overlapping layers.

{{< demo >}}
<div class="splitter-container" data-splitter data-mode="reveal" data-orientation="vertical" data-initial-pos="50" style="height: 300px; border-radius: var(--ds-sys-radius-card);">
  
  <div class="splitter__panel" style="background: var(--ds-sys-color-primary); color: white; display:flex; align-items:center; justify-content:center; flex-direction:column; padding: 2rem; text-align: center;">
    <h1 style="font-size: 3rem;">NEW FEATURES</h1>
    <p style="opacity: 0.8;">Drag down to reveal what's underneath.</p>
  </div>

  <div class="splitter__handle" aria-label="Resize overlay">
    <div class="splitter__knob">
      <span class="material-symbols-outlined" style="transform: rotate(90deg)">drag_indicator</span>
    </div>
  </div>

  <div class="splitter__panel" style="background: var(--ds-sys-color-surface-container-highest); display:flex; align-items:center; justify-content:center; padding: 2rem;">
    <code style="background: var(--ds-sys-color-surface); padding: 1rem; border-radius: 4px; box-shadow: var(--ds-sys-shadow-sm);">
        $ npm update @aurora/core
    </code>
  </div>

</div>
{{< /demo >}}
