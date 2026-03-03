---
title: "Modern CSS Carousel"
description: "Using Anchor Scope, Scroll Markers, and Scroll State."
category: "Patterns"
menu:
  main:
    parent: "patterns"
---

> **Requirement:** Chrome Canary (135+) or browsers with `anchor-scope` enabled.

## 1. Single Item (Center Snap)
Focus mode. One item takes center stage.

{{< demo >}}
<div class="carousel" role="region" aria-label="Single View">
  <div><a href="#">Item 1</a></div>
  <div><a href="#">Item 2</a></div>
  <div><a href="#">Item 3</a></div>
  <div><a href="#">Item 4</a></div>
  <div><a href="#">Item 5</a></div>
</div>
{{< /demo >}}

## 2. Multi-Item (Start Snap)
List mode. Shows multiple items at once with .
*Note: Dots represent individual items.*

{{< demo >}}
<div class="carousel carousel--multi" role="region" aria-label="Multi View">
  <div><a href="#">Card A</a></div>
  <div><a href="#">Card B</a></div>
  <div><a href="#">Card C</a></div>
  <div><a href="#">Card D</a></div>
  <div><a href="#">Card E</a></div>
  <div><a href="#">Card F</a></div>
  <div><a href="#">Card G</a></div>
  <div><a href="#">Card H</a></div>
  <div><a href="#">Card I</a></div>
  <div><a href="#">Card J</a></div>
  <div><a href="#">Card K</a></div>
  <div><a href="#">Card L</a></div>
</div>
{{< /demo >}}
