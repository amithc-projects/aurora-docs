---
title: "Flyout Hierarchy"
description: "A 0kb JavaScript, infinite-level nested dropdown navigation system powered exclusively by pure CSS hover states."
category: "Navigation"
menu:
  main:
    parent: "navigation"
    weight: 40
---

The `nav-flyout` component implements a deeply cascading context menu entirely via semantic HTML and CSS `:hover` states. Nested `<ul>` elements are visually hidden but dynamically positioned and revealed seamlessly when the user interacts with the parent list items.

This component guarantees pristine performance, zero JavaScript layout-shift blocking, and instantaneous infinite drill-down hierarchies.

## Infinite Cascade Example

Hover over "Solutions" to witness an infinitely extending right-side cascade. The logic supports any depth of hierarchy natively.

{{< demo >}}
<div style="min-height: 480px; position: relative;">

<nav class="nav-flyout" aria-label="Flyout Navigation">
  <ul>
    
    <li>
      <a href="#">
        Home
      </a>
    </li>

    <li>
      <a href="#" aria-haspopup="true">
        Products
        <span class="cascader"></span>
      </a>
      <ul>
        <li><a href="#">CRM Software</a></li>
        <li><a href="#">Marketing Hub</a></li>
        <li><a href="#">Sales Suite</a></li>
      </ul>
    </li>

    <li>
      <a href="#" aria-haspopup="true">
        Solutions
        <span class="cascader"></span>
      </a>
      <!-- LEVEL 2 -->
      <ul>
        <li><a href="#">By Industry</a></li>
        <li>
          <a href="#" aria-haspopup="true">
            By Use Case
            <span class="cascader"></span>
          </a>
          <!-- LEVEL 3 -->
          <ul>
            <li><a href="#">Lead Generation</a></li>
            <li><a href="#">Customer Service</a></li>
            <li>
              <a href="#" aria-haspopup="true">
                Enterprise Operations
                <span class="cascader"></span>
              </a>
              <!-- LEVEL 4 -->
              <ul>
                <li><a href="#">Data Migrations</a></li>
                <li><a href="#">Compliance</a></li>
                <li><a href="#">Security Audits</a></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>

    <li><a href="#">Pricing</a></li>

  </ul>
</nav>

</div>
{{< /demo >}}
