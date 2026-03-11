---
title: "Typography"
category: "Atoms"
description: "Variable fonts for flexible, responsive type."
menu:
  main:
    parent: "components-simple"
---

## Variable Font Demo
Use the **Theme Tuner** on the right to adjust Weight and Width in real-time.

* **Corporate Theme:** Uses `Inter`. Adjustable **Weight**.
* **Casual Theme:** Uses `Fredoka`. Adjustable **Weight** AND **Width**.

{{< demo >}}
<div class="l-stack">
  <h1 >
    Variable Power
  </h1>
  <p >
    This text reacts to the <strong>--vf-wght</strong> and <strong>--vf-wdth</strong> variables.
  </p>
  
  <div class="l-cluster" >
    <button class="secondary" onclick="document.body.setAttribute('data-theme', 'corporate')">Corporate (Inter)</button>
    <button class="primary" onclick="document.body.setAttribute('data-theme', 'casual')">Casual (Fredoka)</button>
  </div>
</div>
{{< /demo >}}

## Utility Classes
We can lock specific variations using CSS classes.

{{< demo >}}
<div class="l-stack">
  <div >
    <div class="text-thin">Thin Text (Weight 200)</div>
    <div>Normal Text (Weight 400)</div>
    <div class="text-black">Black Text (Weight 900)</div>
  </div>
  
  <div >
    <small >(Switch to Casual theme to see Width effects)</small>
    <div class="text-narrow">Narrow Text (Width 75%)</div>
    <div>Normal Width (Width 100%)</div>
    <div class="text-wide">Wide Text (Width 125%)</div>
  </div>
</div>
{{< /demo >}}

## Standard Headings
{{< demo >}}
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
{{< /demo >}}
