---
title: "Breadcrumbs"
description: "Navigation aids to show location within a hierarchy."
menu:
  main:
    parent: "components"
---

## Basic Breadcrumb
Standard slash-separated list.

{{< demo >}}

          <label class="field__label">Standard (/)</label>
      <div>
          <ul class="list list--breadcrumbs">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Electronics</a></li>
            <li>Headphones</li>
          </ul>
        </div>
{{< /demo >}}
{{< demo >}}
          <label class="field__label">Arrow (›)</label>
        <div>
          <ul class="list list--breadcrumbs list--breadcrumbs-arrow">
            <li><a href="#">Account</a></li>
            <li><a href="#">Settings</a></li>
            <li>Security</li>
          </ul>
        </div>
{{< /demo >}}
{{< demo >}}
          <label class="field__label">Icon (Material Symbols)</label>
        <div>
          <ul class="list list--breadcrumbs list--breadcrumbs-chevron">
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">2025</a></li>
            <li>Q1 Financials</li>
          </ul>
        </div>

{{< /demo >}}
{{< demo >}}
<nav aria-label="Breadcrumb">
  <ol >
    <li><a href="#" >Home</a></li>
    <li>/</li>
    <li><a href="#" >Settings</a></li>
    <li>/</li>
    <li aria-current="page" >Profile</li>
  </ol>
</nav>
{{< /demo >}}
