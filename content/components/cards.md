---
title: "Cards"
category: "Molecules"
description: "Flexible containers for grouping related content."
menu:
  main:
    parent: "components"
---

## Vertical Card
The standard stacked layout.

{{< demo >}}
<article class="card" style="max-width: 300px;">
  <img src="https://picsum.photos/id/10/600/400" class="card__media" alt="Nature">
  <div class="card__content">
    <h3>Card Title</h3>
    <p>A flexible content container that can hold images, text, and actions.</p>
    <div style="margin-top: 1rem;">
      <button class="btn primary btn-sm">Read More</button>
    </div>
  </div>
</article>
{{< /demo >}}

## Horizontal (Media Object)
Great for news lists or search results.

{{< demo >}}
<article class="card card--horizontal">
  <img src="https://picsum.photos/id/20/300/300" class="card__media" alt="Work">
  <div class="card__content">
    <h3>Horizontal Card</h3>
    <p>The image sits to the left (on desktop) and stacks on mobile.</p>
  </div>
</article>
{{< /demo >}}
