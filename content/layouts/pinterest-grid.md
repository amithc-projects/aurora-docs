---
title: "Pinterest Masonry"
description: "Vertical stacking layout for variable height images."
category: "Patterns"
---

## The "Waterfall" Effect
This layout uses CSS Columns. Items are ordered **down the column**, then across. This allows for perfect vertical stacking of images with different aspect ratios, just like Pinterest.

{{< demo >}}
<div class="l-pinterest">

  <article class="card">
    <img src="https://picsum.photos/id/10/400/600" class="card__media">
    <div class="card__content">
      <h4>Forest Path</h4>
      <p>A tall vertical image.</p>
    </div>
  </article>

  <article class="card">
    <img src="https://picsum.photos/id/11/400/300" class="card__media">
    <div class="card__content">
      <h4>Landscape</h4>
      <p>A standard wider image.</p>
    </div>
  </article>

  <article class="card">
    <img src="https://picsum.photos/id/12/400/400" class="card__media">
    <div class="card__content">
      <h4>Square</h4>
      <p>Perfect 1:1 ratio.</p>
    </div>
  </article>

  <article class="card">
    <img src="https://picsum.photos/id/13/400/700" class="card__media">
    <div class="card__content">
      <h4>Skyscraper</h4>
      <p>This image is very tall.</p>
    </div>
  </article>

  <article class="card" style="background: var(--ds-sys-color-primary); color: white;">
    <div class="card__content">
      <h3 style="color:white">Just Text</h3>
      <p>This card has no image but fits perfectly into the flow.</p>
    </div>
  </article>

  <article class="card">
    <img src="https://picsum.photos/id/14/400/350" class="card__media">
    <div class="card__content">
      <h4>Ocean View</h4>
    </div>
  </article>

  <article class="card">
    <img src="https://picsum.photos/id/15/400/500" class="card__media">
    <div class="card__content">
      <h4>Waterfall</h4>
    </div>
  </article>

  <article class="card">
    <img src="https://picsum.photos/id/16/400/300" class="card__media">
    <div class="card__content">
      <h4>Mountain</h4>
    </div>
  </article>
  
   <article class="card">
    <img src="https://picsum.photos/id/17/400/450" class="card__media">
    <div class="card__content">
      <h4>Trail</h4>
    </div>
  </article>

</div>
{{< /demo >}}
