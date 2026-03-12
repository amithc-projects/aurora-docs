---
title: "Overview"
description: "Variable fonts, scale, and spacing for flexible, responsive type."
menu:
  main:
    parent: "typography"
    weight: 1
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
Default heading sizes and variations are scaled mathematically. They automatically inherit the `wght` and `wdth` of the base type, and then add +300 to the variable font weight to establish a proper hierarchy.

{{< demo >}}
<div class="l-stack">
  <div class="demo-type-scale">
    <div class="scale-label">H1</div>
    <h1>The quick brown fox jumps over the lazy dog</h1>
  </div>
  <div class="demo-type-scale">
    <div class="scale-label">H2</div>
    <h2>The quick brown fox jumps over the lazy dog</h2>
  </div>
  <div class="demo-type-scale">
    <div class="scale-label">H3</div>
    <h3>The quick brown fox jumps over the lazy dog</h3>
  </div>
  <div class="demo-type-scale">
    <div class="scale-label">H4</div>
    <h4>The quick brown fox jumps over the lazy dog</h4>
  </div>
  <div class="demo-type-scale">
    <div class="scale-label">H5</div>
    <h5>The quick brown fox jumps over the lazy dog</h5>
  </div>
  <div class="demo-type-scale">
    <div class="scale-label">H6</div>
    <h6>The quick brown fox jumps over the lazy dog</h6>
  </div>
</div>
{{< /demo >}}

<style>
  .demo-type-scale { display: flex; align-items: baseline; gap: 1.5rem; border-bottom: 1px solid var(--ds-sys-color-border); padding-bottom: 1rem; }
  .scale-label { min-width: 40px; font-weight: bold; color: var(--ds-sys-color-primary); font-size: 0.85rem; text-transform: uppercase; }
  .demo-type-scale > *:last-child { margin: 0; }
</style>

## Spacing System
Aurora utilizes a logical and progressive spacing scale to ensure predictable rhythms across the entire design system. Utilize these CSS variables anywhere in your implementation to manage padding and margins consistently.

{{< demo >}}
<div class="l-stack">
  <div class="spacing-demo"><div class="space-block" style="width: var(--space-3xs)"></div> <code>--space-3xs</code> <small>(0.25rem)</small></div>
  <div class="spacing-demo"><div class="space-block" style="width: var(--space-2xs)"></div> <code>--space-2xs</code> <small>(0.5rem)</small></div>
  <div class="spacing-demo"><div class="space-block" style="width: var(--space-xs)"></div> <code>--space-xs</code> <small>(0.75rem)</small></div>
  <div class="spacing-demo"><div class="space-block" style="width: var(--space-sm)"></div> <code>--space-sm</code> <small>(0.875rem)</small></div>
  <div class="spacing-demo"><div class="space-block" style="width: var(--space-md)"></div> <code>--space-md</code> (Base) <small>(1rem)</small></div>
  <div class="spacing-demo"><div class="space-block" style="width: var(--space-lg)"></div> <code>--space-lg</code> <small>(1.25rem)</small></div>
  <div class="spacing-demo"><div class="space-block" style="width: var(--space-xl)"></div> <code>--space-xl</code> <small>(1.5rem)</small></div>
  <div class="spacing-demo"><div class="space-block" style="width: var(--space-2xl)"></div> <code>--space-2xl</code> <small>(2rem)</small></div>
  <div class="spacing-demo"><div class="space-block" style="width: var(--space-3xl)"></div> <code>--space-3xl</code> <small>(3rem)</small></div>
  <div class="spacing-demo"><div class="space-block" style="width: var(--space-4xl)"></div> <code>--space-4xl</code> <small>(4rem)</small></div>
</div>

<style>
.spacing-demo { display: flex; align-items: center; gap: 1rem; }
.space-block { height: 1.5rem; background: var(--ds-sys-color-primary); border-radius: 4px; }
.spacing-demo code { font-size: 0.85rem; padding: 2px 6px; background: var(--ds-sys-color-surface-container-highest); border-radius: 4px; }
.spacing-demo small { opacity: 0.6; }
</style>
{{< /demo >}}

## Line Heights
In Aurora, headings naturally adopt a tighter line-height to maintain block solidity, while body copy inherits a more relaxed `1.5` line height for maximum legibility across paragraphs. Use layout primitives like `.l-stack` to maintain vertical rhythm without hardcoding margins.
