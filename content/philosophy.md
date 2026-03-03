---
title: "Philosophy"
description: "Our approach to building scalable, consistent user interfaces."
menu: "main"
weight: 1
---

## Atomic Design
We follow the **Atomic Design** methodology to create a robust, resilient design system. Instead of designing pages in isolation, we design systems of components.

<div class="l-grid" style="--col-min: 200px; gap: 2rem; margin-top: 2rem;">
  <div class="card" style="padding: 1.5rem;">
    <span class="material-symbols-outlined" style="font-size: 2rem; color: var(--ds-sys-color-primary);">category</span>
    <h3>Atoms</h3>
    <p>The foundational building blocks. Inputs, Buttons, Badges, and Avatars. They cannot be broken down further without losing functionality.</p>
  </div>
  <div class="card" style="padding: 1.5rem;">
    <span class="material-symbols-outlined" style="font-size: 2rem; color: var(--ds-sys-color-primary);">widgets</span>
    <h3>Molecules</h3>
    <p>Groups of atoms functioning together. Search Forms (Input + Button), User Cards (Avatar + Text), and Form Fields.</p>
  </div>
  <div class="card" style="padding: 1.5rem;">
    <span class="material-symbols-outlined" style="font-size: 2rem; color: var(--ds-sys-color-primary);">view_quilt</span>
    <h3>Organisms</h3>
    <p>Complex sections of an interface. Navbars, Data Tables, and Dashboards. These form the distinct sections of a page.</p>
  </div>
</div>

## Design Goals
1.  **Consistency:** A shared vocabulary for designers and developers.
2.  **Maintainability:** Updates to an Atom propagate to every Organism.
3.  **Accessibility:** Built-in semantic HTML and ARIA support.

---

### Related Documentation
* [Explore Components](/components/buttons)
* [View Layouts](/layouts/dashboard)
