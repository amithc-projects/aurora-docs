---
title: "Star Rating"
description: "Interactive forms or read-only aggregate views with fractional precision."
category: "Components"
menu:
  main:
    parent: "components-simple"
---

The Star Rating component provides both **Interactive Inputs** for user forms and **Read-Only Displays** perfect for E-commerce aggregate scores.

## Read-Only Aggregate Rating
A display component for E-commerce. Set the fill percentage dynamically via `style="--rating-fill: X%"`.

{{< demo >}}
<div class="rating-group">
  <div class="rating-display" style="--rating-fill: 86%;" aria-label="Rating: 4.3 out of 5"></div>
  <span class="rating-group__text">4.3 (128 reviews)</span>
</div>

<div class="rating-group" style="margin-top: 1rem;">
  <div class="rating-display" style="--rating-fill: 30%;" aria-label="Rating: 1.5 out of 5"></div>
  <span class="rating-group__text">1.5 (12 reviews)</span>
</div>

<div class="rating-group" style="margin-top: 1rem;">
  <div class="rating-display" style="--rating-fill: 100%;" aria-label="Rating: 5 out of 5"></div>
  <span class="rating-group__text">5.0 (1 review)</span>
</div>
{{< /demo >}}

## Interactive Form Rating
A CSS-only component using hidden radio buttons for rating inputs.

{{< demo >}}
<div class="field">
  <label class="field__label">Leave a Review</label>
  <div class="rating-input">
    <!-- Note: CSS `flex-direction: row-reverse` makes visual order opposite of DOM -->
    <input type="radio" name="star" id="s5"><label for="s5">★</label>
    <input type="radio" name="star" id="s4"><label for="s4">★</label>
    <input type="radio" name="star" id="s3"><label for="s3">★</label>
    <input type="radio" name="star" id="s2"><label for="s2">★</label>
    <input type="radio" name="star" id="s1"><label for="s1">★</label>
  </div>
</div>
{{< /demo >}}
