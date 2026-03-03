---
title: "Grid Masonry"
description: "Dense packing grid that maintains left-to-right reading order."
category: "Patterns"
---

## Dense Grid Layout
Unlike standard CSS Columns (which read top-to-bottom), this layout keeps items in a logical order but packs them tightly to fill gaps.

**Resize your browser** to see the cards reshuffle!

{{< demo >}}
<div class="l-masonry">

  <article class="card">
    <div class="card__content">
      <h3>1. Standard</h3>
      <p>Just a normal card.</p>
    </div>
  </article>

  <article class="card span-v-2 card--interactive">
    <img src="https://picsum.photos/id/10/400/600" class="card__media" style="height: 200px;">
    <div class="card__content">
      <h3>2. Tall Item</h3>
      <p>Uses <code>.span-v-2</code> to take up two rows of height.</p>
      <p>Notice how the grid flows around it.</p>
    </div>
  </article>

  <article class="card">
    <div class="card__content">
      <h3>3. Standard</h3>
    </div>
  </article>

  <article class="card span-block card--overlay">
    <img src="https://picsum.photos/id/11/600/600" class="card__media">
    <div class="card__content">
      <h3>4. Big Feature</h3>
      <p>Uses <code>.span-block</code> (2x2).</p>
    </div>
  </article>

  <article class="card span-h-2">
    <div class="card__content">
      <h3>5. Wide Item</h3>
      <p>Uses <code>.span-h-2</code>. Because of "dense" packing, if this doesn't fit on the current row, smaller items might jump ahead of it to fill the gap.</p>
    </div>
  </article>

  <article class="card">
    <div class="card__content"><h3>6. Filler</h3></div>
  </article>

  <article class="card">
    <div class="card__content"><h3>7. Filler</h3></div>
  </article>
  
  <article class="card span-v-2">
     <div class="card__content">
       <h3>8. Tall Text</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
     </div>
  </article>

  <article class="card">
    <div class="card__content"><h3>9. Filler</h3></div>
  </article>

</div>
{{< /demo >}}
