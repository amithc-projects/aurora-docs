---
title: "Bottom Navigation"
description: "Mobile-optimized navigation bar with icons and an optional Floating Action Button."
category: "Navigation"
menu:
  main:
    parent: "navigation"
---

## Default Bottom Navigation
A standard navigation bar perfect for mobile apps. It uses `position: fixed` to stick to the bottom of the viewport.

*(Note: We use `position: relative` below just for demonstration purposes so it doesn't stick to the documentation page screen).*

{{< demo >}}
<style>
/* Override just for the demo container */
.demo-nav-bottom-wrapper {
position: relative;
height: 300px;
width: 100%;
max-width: 400px;
min-width: 320px;
background: var(--ds-sys-color-surface-container-highest);
overflow: hidden;
border-radius: var(--ds-sys-radius-card);
}
.demo-nav-bottom-wrapper .nav-bottom {
position: absolute; 
}
</style>

<div class="demo-nav-bottom-wrapper">
<nav class="nav-bottom">
<a href="#home" class="nav-bottom__item is-active">
<span class="material-symbols-outlined">home</span>
<span class="nav-bottom__label">Home</span>
</a>
<a href="#explore" class="nav-bottom__item">
<span class="material-symbols-outlined">explore</span>
<span class="nav-bottom__label">Explore</span>
</a>

<div class="nav-bottom__fab-wrapper">
<button class="nav-bottom__fab" aria-label="Start New Workout">
<span class="material-symbols-outlined" style="font-size: 2rem;">add</span>
</button>
</div>

<a href="#stats" class="nav-bottom__item">
<span class="material-symbols-outlined">bar_chart</span>
<span class="nav-bottom__label">Stats</span>
</a>
<a href="#profile" class="nav-bottom__item">
<span class="material-symbols-outlined">person</span>
<span class="nav-bottom__label">Profile</span>
</a>
</nav>
</div>
{{< /demo >}}
