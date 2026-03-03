---
title: "Magazine Layout"
description: "Using Subgrid for 'Full Bleed' and 'Breakout' layouts."
category: "Patterns"
menu:
  main:
    parent: "layouts"
---


{{< demo >}}
<div class="l-page-grid" style="width: 100%;">

  <div class="col-content">
    <h1>The Subgrid Revolution</h1>
    <p class="prose">
      This paragraph lives in the <code>.col-content</code> track. It is centered and constrained 
      to a readable width. Notice how we don't need a wrapper div like <code>l-center</code> 
      to hold it in place. The Grid places it directly.
    </p>
  </div>

  <figure class="col-wide" style="margin: 2rem 0;">
    <img src="https://picsum.photos/id/16/1200/600" style="width: 100%; height: 400px; object-fit: cover; border-radius: 8px;">
    <figcaption style="text-align: center; color: #666; margin-top: 0.5rem;">
      This image uses <code>.col-wide</code> to break out of the text column.
    </figcaption>
  </figure>

  <div class="col-content">
    <p class="prose">
      We are back to standard text width here. The transition between widths is handled purely by 
      changing the <code>grid-column</code> property.
    </p>
  </div>

  <div class="col-full" style="background: var(--ds-sys-color-primary); color: white; padding: 4rem 0; margin: 2rem 0;">
    <div class="l-subgrid-section">
      <div class="col-content" style="text-align: center;">
        <h2>Full Width Section</h2>
        <p>This container spans <code>.col-full</code> (edge-to-edge), but aligns its internal text 
        back to <code>.col-content</code> using nested subgrid.</p>
      </div>
    </div>
  </div>

  <div class="col-content">
    <h3>Why is this better?</h3>
    <p class="prose">
      In the old days, you had to close the container div, open a new "full width" div, 
      then open a new "container" div. With Subgrid, the structure is flat.
    </p>
  </div>

</div>
{{< /demo >}}
