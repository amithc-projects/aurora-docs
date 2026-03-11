---
title: "Side Navigation"
description: "A pure-CSS hierarchical vertical menu utilizing native HTML5 `<details>` for infinite depth without JavaScript overhead."
category: "Navigation"
menu:
  main:
    parent: "nav-site"
---

The `nav-side` component provides a foundational accordion-style vertical menu optimized for deep hierarchies. 

Unlike heavy JavaScript implementations that compute bounding boxes to animate drops, Aurora's preferred architecture leverages the native browser DOM `ul > li > details > summary` cascade. This ensures 0kb JavaScript payload, perfect keyboard accessibility, inherent ARIA states, and graceful degradation!

## 1. Basic Navigation (Flat)

For simple un-nested menus, you can utilize standard `<ul>` lists containing anchors.

{{< demo >}}
<nav class="nav-side" aria-label="Simple Side Navigation" style="height: auto; padding-bottom: 2rem;">
  <ul>
    <li>
      <a href="#" class="is-active">
        <span class="material-symbols-outlined ds-mr-2">dashboard</span>
        Dashboard
      </a>
    </li>
    <li>
      <a href="#">
        <span class="material-symbols-outlined ds-mr-2">monitoring</span>
        Analytics
      </a>
    </li>
    <li>
      <a href="#">
        <span class="material-symbols-outlined ds-mr-2">settings</span>
        Settings
      </a>
    </li>
  </ul>
</nav>
{{< /demo >}}

---

## 2. Nested Hierarchy (Accordion)

To create nested tiers, simply wrap your anchor in a `<summary>` tag, place it inside a `<details>` wrapper, and append a sub-`<ul>` directly beneath it. The browser handles the open/close state natively!

The CSS `.nav-side` class automatically identifies `details > summary` triggers and injects a 180-degree animating chevron on the far right.

{{< demo >}}
<nav class="nav-side" aria-label="Accordion Side Navigation" style="height: auto; padding-bottom: 2rem;">
  <ul>
    <li class="nav-side-item">
      <a href="#">
        <span class="material-symbols-outlined ds-mr-2">home</span>
        Overview
      </a>
    </li>
    
    <li class="nav-side-item">
      <details>
        <summary>
          <span class="material-symbols-outlined ds-mr-2">group</span>
            Audience
        </summary>
        <ul>
          <li><a href="#">Demographics</a></li>
          <li><a href="#">Geographies</a></li>
          <li><a href="#">Interests</a></li>
        </ul>
      </details>
    </li>
    
    <li class="nav-side-item">
      <details open>
        <summary>
          <span class="material-symbols-outlined ds-mr-2">shopping_cart</span>
            E-Commerce
        </summary>
        <ul>
          <li><a href="#">Transactions</a></li>
          <li><a href="#" class="is-active">Revenue (Active)</a></li>
          <li><a href="#">Checkout Funnel</a></li>
        </ul>
      </details>
    </li>
  </ul>
</nav>
{{< /demo >}}

---

## 3. Deeply Nested Architecture

Because the engine relies purely on CSS combinators, there is no limit to how deeply you can nest the navigation. The CSS automatically handles proportional indentation `padding-left` and font-sizing scale down for deeply nested tiers to maintain visual rhythm!

{{< demo >}}
<nav class="nav-side" aria-label="Deeply Nested Side Navigation" style="height: auto; padding-bottom: 2rem;">
  <ul>
    <li class="nav-side-item">
      <details open>
        <summary>
          <span class="material-symbols-outlined ds-mr-2">folder</span>
             Corporate Drive
        </summary>
        <ul>
          <li>
            <details open>
              <summary>Engineering</summary>
              <ul>
                <li><a href="#">Architecture Docs</a></li>
                <li>
                  <details>
                    <summary>Q3 Planning</summary>
                    <ul>
                      <li><a href="#">Sprint 1</a></li>
                      <li><a href="#">Sprint 2</a></li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
               <summary>Marketing</summary>
               <ul>
                 <li><a href="#">Brand Assets</a></li>
                 <li><a href="#">Campaigns</a></li>
               </ul>
            </details>
          </li>
        </ul>
      </details>
    </li>
  </ul>
</nav>
{{< /demo >}}
