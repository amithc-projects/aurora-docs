---
title: "Main Navigation"
description: "The primary horizontal navigation system comprising the Global header and Section-specific Local header."
category: "Navigation"
menu:
  main:
    parent: "nav-site"
---

The Aurora Main Navigation system uses a two-tier horizontal approach tailored for complex Enterprise architectures:
1. **Global Navigation (`nav-global`)**: The persistent ubiquitous top bar. It houses the primary application brand, global omni-search, account actions, and root-level application routing. It is natively styled inverted (dark mode) for high-contrast visibility.
2. **Local Navigation (`nav-local`)**: A secondary sub-bar providing section-specific tabs and context. It rests cleanly beneath the Global Nav across a matching background surface color.

---

## 1. Global Navigation Only

For simpler applications, a single `nav-global` bar is often sufficient. It features a scalable left/right flexbox cluster layout that collapses naturally.

{{< demo >}}
<div style="position: relative; overflow: hidden; border-radius: var(--ds-sys-radius-card); border: 1px solid var(--ds-sys-color-border);">
<!-- NAV GLOBAL COMPOENT -->
<header class="nav-global">
  <div class="nav-global__container">
    
    <div class="nav-global__left">
      <a href="#" class="nav-global-brand">
        <span class="material-symbols-outlined">layers</span>
        Aurora
      </a>
      <ul class="nav-global__menu">
        <li><a href="#" class="nav-link is-active">Products</a></li>
        <li><a href="#" class="nav-link">Solutions</a></li>
        <li><a href="#" class="nav-link">Resources</a></li>
      </ul>
    </div>
    
    <div class="nav-global__right">
      <div class="search-group">
         <span class="material-symbols-outlined search-icon">search</span>
         <input type="text" class="search-input" aria-label="Search systems" placeholder="Search systems...">
      </div>
      <a href="#" class="nav-link">
        <span class="material-symbols-outlined">notifications</span>
      </a>
      <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--ds-sys-color-primary); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 14px; cursor: pointer;">AJ</div>
    </div>

  </div>
</header>
<!-- /NAV GLOBAL COMPOENT -->

<main style="padding: 4rem; background: var(--ds-sys-color-surface-container-low); min-height: 200px;">
  <p style="text-align: center; color: var(--ds-sys-color-on-surface-variant);">Main Application Content Area</p>
</main>
</div>
{{< /demo >}}

---

## 2. Global + Local Navigation Stack

For robust applications with deep routing architecture, stack the `.nav-local` horizontally immediately below `.nav-global`. The local navigation provides scrollable, section-specific tab routes that contextually shift depending on the global location.

{{< demo >}}
<div style="position: relative; overflow: hidden; border-radius: var(--ds-sys-radius-card); border: 1px solid var(--ds-sys-color-border);">
<!-- Layer 1: Global -->
<header class="nav-global">
  <div class="nav-global__container">
    <div class="nav-global__left">
      <a href="#" class="nav-global-brand">
        <span class="material-symbols-outlined">layers</span>
        Aurora
      </a>
    </div>
    <div class="nav-global__right">
      <div class="search-group">
         <span class="material-symbols-outlined search-icon">search</span>
         <input type="text" class="search-input" aria-label="Search" placeholder="Search...">
      </div>
    </div>
  </div>
</header>

<!-- Layer 2: Local -->
<nav class="nav-local">
  <div class="nav-local__container">
    <a href="#" class="nav-local__brand">
       Design System
    </a>
    <ul class="nav-local__menu">
      <li><a href="#">Overview</a></li>
      <li><a href="#">Foundations</a></li>
      <li><a href="#" class="is-active">Components</a></li>
      <li><a href="#">Patterns</a></li>
      <li><a href="#">Resources</a></li>
    </ul>
  </div>
</nav>

<main style="padding: 4rem; background: var(--ds-sys-color-surface-container-low); min-height: 200px;">
  <p style="text-align: center; color: var(--ds-sys-color-on-surface-variant);">Components Section Content</p>
</main>
</div>
{{< /demo >}}
