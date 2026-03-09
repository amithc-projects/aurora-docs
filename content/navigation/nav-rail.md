---
title: "Navigation Rail"
description: "A compact, icon-first vertical sidebar designed for application dashboards. Expands smoothly on hover to reveal full semantic text labels."
category: "Navigation"
menu:
  main:
    parent: "navigation"
    weight: 25
---

The `nav-rail` component provides a highly compressed vertical navigation pattern. It occupies minimal horizontal real-estate (perfect for data-dense dashboards), persisting only primary icons.

When users interact with the rail either via mouse hover or keyboard focus, it seamlessly expands via zero-JavaScript CSS width transitions to display the full descriptive labels!

## 1. Expanding Dashboard Rail

In its resting state, the Navigation Rail is an icon-only strip. When hovered, the `nav-rail` expands, and the internal `.nav-rail-label` spans naturally fade in their text without causing jank.

{{< demo >}}
<div style="height: 500px; display: flex; position: relative;">
  <!-- NAV RAIL COMPONENT -->
  <nav class="nav-rail" aria-label="Application Rail">
    <ul>
      <li>
        <a href="#" class="is-active" aria-current="page">
          <div class="nav-rail-inner">
            <span class="material-symbols-outlined">dashboard</span>
            <span class="nav-rail-label">Dashboard</span>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="nav-rail-inner">
            <span class="material-symbols-outlined">analytics</span>
            <span class="nav-rail-label">Analytics</span>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="nav-rail-inner">
            <span class="material-symbols-outlined">group</span>
            <span class="nav-rail-label">Audiences</span>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="nav-rail-inner">
            <span class="material-symbols-outlined">campaign</span>
            <span class="nav-rail-label">Campaigns</span>
          </div>
        </a>
      </li>
    </ul>

    <!-- Bottom Pushed Group -->
    <ul class="nav-rail-bottom-group">
      <li>
        <a href="#">
          <div class="nav-rail-inner">
            <span class="material-symbols-outlined">settings</span>
            <span class="nav-rail-label">Settings</span>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="nav-rail-inner">
            <div style="width: 24px; height: 24px; border-radius: 50%; background: var(--ds-sys-color-primary); display: flex; align-items: center; justify-content: center; color: white; font-size: 12px; font-weight: bold;">AJ</div>
            <span class="nav-rail-label">Profile</span>
          </div>
        </a>
      </li>
    </ul>
  </nav>

  <!-- Dummy Main Content Area -->
  <main style="flex: 1; padding: var(--ds-ref-space-xl); background: var(--ds-sys-color-surface-container-low); border-radius: var(--ds-sys-radius-card); margin-left: var(--ds-ref-space-md); border: var(--ds-sys-border-width) solid var(--ds-sys-color-border);">
    <h3 style="margin-top: 0;">Main Application Content</h3>
    <p style="color: var(--ds-sys-color-on-surface-variant)">
      Notice how the Nav Rail sits tightly to the left. Hover your mouse over the icons to expand the rail. Because the `.nav-rail` possesses a higher elevated `z-index` and a fixed width transition, it perfectly floats *over* this content body without causing a jarring layout shift restructure!
    </p>
  </main>
</div>
{{< /demo >}}

---

## 2. Pinned State

By applying the `.is-pinned` modifier class to the `<nav>` wrapper, the rail will permanently hold its fully expanded `280px` layout without requiring a mouse hover. This is useful when users explicitly toggle a "keep open" setting within their application.

{{< demo >}}
<div style="height: 300px; display: flex;">
  <!-- NAV RAIL COMPONENT (PINNED) -->
  <nav class="nav-rail is-pinned" aria-label="Pinned Rail">
    <ul>
      <li>
        <a href="#" class="is-active" aria-current="page">
          <div class="nav-rail-inner">
            <span class="material-symbols-outlined">dashboard</span>
            <span class="nav-rail-label">Dashboard</span>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="nav-rail-inner">
            <span class="material-symbols-outlined">analytics</span>
            <span class="nav-rail-label">Analytics</span>
          </div>
        </a>
      </li>
    </ul>
  </nav>

  <main style="flex: 1; padding: var(--ds-ref-space-xl); background: var(--ds-sys-color-surface-container-low); margin-left: var(--ds-ref-space-md); border: var(--ds-sys-border-width) solid var(--ds-sys-color-border);">
    <p style="color: var(--ds-sys-color-on-surface-variant)">This rail permanently occupies 280px of layout width.</p>
  </main>
</div>
{{< /demo >}}

---

## 3. Nested Hierarchies (Accordion)

Like the Side Navigation, you can utilize the native HTML5 `<details>` cascading structure. 
During the compressed state, the expansion chevrons and nested links are completely hidden from the layout to avoid breaking the 72px boundaries. When the rail Expands (via hover or `.is-pinned`), the semantic dropdowns reveal themselves!

{{< demo >}}
<div style="height: 500px; display: flex; position: relative;">
  <!-- NAV RAIL COMPONENT (NESTED) -->
  <nav class="nav-rail" aria-label="Nested Rail">
    <ul>
      <li>
        <a href="#">
          <div class="nav-rail-inner">
            <span class="material-symbols-outlined">home</span>
            <span class="nav-rail-label">Home</span>
          </div>
        </a>
      </li>
      <li>
        <details>
          <summary>
          <div class="nav-rail-inner">
             <span class="material-symbols-outlined">group</span>
             <span class="nav-rail-label">Audiences</span>
          </div>
        </summary>
          <ul>
            <li><a href="#">Demographics</a></li>
            <li><a href="#">Geographies</a></li>
            <li><a href="#">Interests</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>
          <div class="nav-rail-inner">
             <span class="material-symbols-outlined">shopping_cart</span>
             <span class="nav-rail-label">Commerce</span>
          </div>
        </summary>
          <ul>
            <li><a href="#" class="is-active">Transactions</a></li>
            <li><a href="#">Disputes</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </nav>

  <main style="flex: 1; padding: var(--ds-ref-space-xl); background: var(--ds-sys-color-surface-container-low); border-radius: var(--ds-sys-radius-card); margin-left: var(--ds-ref-space-md); border: var(--ds-sys-border-width) solid var(--ds-sys-color-border);">
    <h3 style="margin-top: 0;">Hover to reveal deeply nested items!</h3>
    <p style="color: var(--ds-sys-color-on-surface-variant)">
      Notice that when collapsed to 72px, the Chevron disappears so the layout remains an immaculate column of pure primary icons.
    </p>
  </main>
</div>
{{< /demo >}}
