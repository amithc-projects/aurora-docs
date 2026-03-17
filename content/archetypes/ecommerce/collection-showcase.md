---
title: "Product Showcase"
description: "An alternative Product Listing Page focusing on storytelling and interactive exploration using the Super List 'Timeline' and 'Accordion' layouts."
type: "page"
menu:
  main:
    parent: "ecommerce"
---

This page demonstrates how the **Super List** component can replace a traditional, static grid of products with an interactive, storytelling experience. It utilizes the `timeline` layout to explain the evolution of a product line, and the `accordion` layout to let users densely explore colorways.

{{< demo >}}
<div style="width: 100%; border: 1px solid var(--ds-sys-color-border); border-radius: 8px; overflow: hidden; background: var(--ds-sys-color-surface); font-family: var(--ds-sys-font-family-base);">

  <!-- Header -->
  <div style="padding: 4rem 2rem; text-align: center; background: var(--ds-sys-color-surface-container-low); border-bottom: 1px solid var(--ds-sys-color-border);">
    <div style="font-weight: 700; font-size: 0.9rem; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 1rem; color: var(--ds-sys-color-on-surface-variant);">The Legacy Series</div>
    <h1 style="font-size: 3.5rem; font-weight: 900; letter-spacing: -2px; text-transform: uppercase; margin: 0 0 1.5rem 0; line-height: 1;">Aero Air Max</h1>
    <p style="font-size: 1.1rem; max-width: 600px; margin: 0 auto; color: var(--ds-sys-color-on-surface);">Four decades of visible air. Explore the evolution of the sneaker that changed the industry forever.</p>
  </div>

  <!-- Part 1: Interactive Timeline (History) -->
  <ul class="super-list super-list--timeline" style="margin-bottom: 4rem;">
    
    <li class="sl-item">
      <div class="sl-item__bg">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000" alt="1987 Model">
      </div>
      <div class="sl-item__overlay"></div>
      <div class="sl-item__content">
        <span class="sl-item__meta">1987</span>
        <h2 class="sl-item__title">The Breakthrough</h2>
        <p class="sl-item__desc">The first shoe to feature a visible Air unit in the heel, inspired by the inside-out architecture of the Centre Pompidou in Paris.</p>
      </div>
    </li>

    <li class="sl-item">
      <div class="sl-item__bg">
        <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000" alt="1990 Model">
      </div>
      <div class="sl-item__overlay"></div>
      <div class="sl-item__content">
        <span class="sl-item__meta">1990</span>
        <h2 class="sl-item__title">Bigger is Better</h2>
        <p class="sl-item__desc">A larger air volume and a bolder, more aggressive stance defined the start of a new decade in running culture.</p>
      </div>
    </li>

    <li class="sl-item">
      <div class="sl-item__bg">
        <img src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=1000" alt="1995 Model">
      </div>
      <div class="sl-item__overlay"></div>
      <div class="sl-item__content">
        <span class="sl-item__meta">1995</span>
        <h2 class="sl-item__title">Anatomy in Motion</h2>
        <p class="sl-item__desc">Design inspired by the human body: the midsole represents the spine, and the graduated panels represent muscle fibers.</p>
      </div>
    </li>

    <li class="sl-item">
      <div class="sl-item__bg">
        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000" alt="2026 Model">
      </div>
      <div class="sl-item__overlay"></div>
      <div class="sl-item__content">
        <span class="sl-item__meta" style="background: #fff; color: #000;">Today</span>
        <h2 class="sl-item__title">The Pulse Series</h2>
        <p class="sl-item__desc">Rethinking the future with a point-loaded Air unit that delivers tailored responsiveness based on footstrike.</p>
      </div>
    </li>

  </ul>

  <!-- Part 2: Interactive Accordion (Colorways) -->
  <div style="background: var(--ds-sys-color-on-surface); padding: 6rem 2rem;">
    <div style="text-align: center; margin-bottom: 4rem;">
      <h3 style="color: var(--ds-sys-color-surface); font-size: 2.5rem; font-weight: 800; letter-spacing: -1px; text-transform: uppercase;">Shop the Pulse</h3>
      <p style="color: var(--ds-sys-color-surface-variant); font-size: 1.1rem;">Select your statement colorway.</p>
    </div>

    <ul class="super-list super-list--accordion">
      
      <li class="sl-item">
        <div class="sl-item__bg">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000" alt="Red">
        </div>
        <div class="sl-item__overlay"></div>
        <div class="sl-item__content" style="writing-mode: unset; text-orientation: unset;">
          <h2 class="sl-item__title">Varsity Red</h2>
          <div class="sl-item__actions">
            <button class="btn secondary" style="border-color: #fff; color: #fff; background: transparent;">Add to Bag - $150</button>
          </div>
        </div>
      </li>

      <li class="sl-item">
        <div class="sl-item__bg">
          <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000" alt="Black">
        </div>
        <div class="sl-item__overlay"></div>
        <div class="sl-item__content" style="writing-mode: unset; text-orientation: unset;">
          <h2 class="sl-item__title">Triple Black</h2>
          <div class="sl-item__actions">
            <button class="btn secondary" style="border-color: #fff; color: #fff; background: transparent;">Add to Bag - $150</button>
          </div>
        </div>
      </li>

      <li class="sl-item">
        <div class="sl-item__bg">
          <img src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=1000" alt="White">
        </div>
        <div class="sl-item__overlay"></div>
        <div class="sl-item__content" style="writing-mode: unset; text-orientation: unset;">
          <h2 class="sl-item__title">Pure Platinum</h2>
          <div class="sl-item__actions">
            <button class="btn secondary" style="border-color: #fff; color: #fff; background: transparent;">Add to Bag - $150</button>
          </div>
        </div>
      </li>

       <li class="sl-item">
        <div class="sl-item__bg">
          <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000" alt="Gold">
        </div>
        <div class="sl-item__overlay"></div>
        <div class="sl-item__content" style="writing-mode: unset; text-orientation: unset;">
          <h2 class="sl-item__title">Olympic Gold</h2>
          <div class="sl-item__actions">
            <button class="btn secondary" style="border-color: #fff; color: #fff; background: transparent;">Add to Bag - $170</button>
          </div>
        </div>
      </li>

    </ul>
  </div>

</div>
{{< /demo >}}

<!-- Inline CSS to independently power this page's Super List components -->
<style>
/* Base */
.super-list { margin: 0; padding: 0; list-style: none; width: 100%; border-radius: var(--ds-sys-radius-card); transition: all 0.5s ease; }
.sl-item { position: relative; display: flex; }
.sl-item__bg { position: absolute; inset: 0; z-index: 1; border-radius: inherit; overflow: hidden; }
.sl-item__bg img { width: 100%; height: 100%; object-fit: cover; object-position: center; }
.sl-item__overlay { position: absolute; inset: 0; z-index: 2; border-radius: inherit; overflow: hidden; }
.sl-item__content { position: relative; z-index: 3; }
.sl-item__meta { display: inline-block; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; padding: 0.2rem 0.5rem; border-radius: 4px; background: rgba(255,255,255,0.2); backdrop-filter: blur(4px); margin-bottom: 0.75rem; }
.sl-item__actions { display: flex; gap: 1rem; }

/* Timeline Variant */
.super-list--timeline {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 4rem 2rem;
  background: transparent;
  border: none;
  gap: 4rem;
}
.super-list--timeline::before { content: ''; position: absolute; top: 0; bottom: 0; left: 50%; width: 4px; background: var(--ds-sys-color-border); transform: translateX(-50%); }
.super-list--timeline .sl-item { width: 45%; height: 350px; border-radius: var(--ds-sys-radius-card); box-shadow: var(--ds-sys-shadow-card); align-items: flex-end; position: relative; }
.super-list--timeline .sl-item:nth-child(odd) { align-self: flex-start; }
.super-list--timeline .sl-item:nth-child(even) { align-self: flex-end; }
.super-list--timeline .sl-item__overlay { background: linear-gradient(to top, rgba(0,0,0,0.8), transparent 70%); }
.super-list--timeline .sl-item__content { padding: 2rem; color: #fff; width: 100%; }
.super-list--timeline .sl-item:nth-child(odd) .sl-item__content { text-align: right; }
.super-list--timeline .sl-item:nth-child(even) .sl-item__content { text-align: left; }
.super-list--timeline .sl-item__meta { background: var(--ds-sys-color-primary); color: #fff; font-size: 0.9rem; padding: 0.4rem 0.8rem; border-radius: 20px; position: absolute; top: 1rem; opacity: 1; white-space: nowrap; }
.super-list--timeline .sl-item:nth-child(odd) .sl-item__meta { left: calc(111.11% + 1rem); }
.super-list--timeline .sl-item:nth-child(even) .sl-item__meta { right: calc(111.11% + 1rem); }
@media (max-width: 768px) {
  .super-list--timeline::before { left: 2rem; }
  .super-list--timeline .sl-item { width: calc(100% - 4rem); align-self: flex-end !important; margin-left: auto; }
  .super-list--timeline .sl-item__content { text-align: left !important; }
  .super-list--timeline .sl-item__meta { right: auto !important; left: -1.75rem !important; top: -1.25rem !important; }
}

/* Accordion Variant */
.super-list--accordion {
  display: flex;
  height: 500px;
  gap: 1rem;
  background: transparent;
  border: none;
}
.super-list--accordion .sl-item {
  flex: 1;
  border-radius: var(--ds-sys-radius-card);
  transition: flex 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  align-items: flex-end;
}
.super-list--accordion .sl-item:hover {
  flex: 5; /* Expand to 5x width on hover */
}
.super-list--accordion .sl-item__overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
}
.super-list--accordion .sl-item__content {
  padding: 2rem;
  color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  opacity: 0; /* Hide normally */
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  transition-delay: 0s;
  white-space: nowrap; /* Prevent wrap during transition */
}
.super-list--accordion .sl-item:hover .sl-item__content {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.2s; /* Wait for flex expansion to start */
}
.super-list--accordion .sl-item__title { font-size: 2rem; margin-bottom: 1rem; }
/* Create a vertical title for the collapsed state */
.super-list--accordion .sl-item::after {
  content: attr(data-title);
  position: absolute;
  top: auto;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%) rotate(-90deg);
  transform-origin: left bottom;
  color: #fff;
  font-weight: 700;
  font-size: 1.25rem;
  white-space: nowrap;
  opacity: 1;
  transition: opacity 0.2s;
  z-index: 10;
}
.super-list--accordion .sl-item:hover::after {
  opacity: 0;
}

@media (max-width: 768px) {
  .super-list--accordion { flex-direction: column; height: 800px; }
  .super-list--accordion .sl-item::after { transform: none; bottom: auto; top: 50%; left: 2rem; transform: translateY(-50%); }
}

</style>

<script>
// Small polyfill for the accordion titles
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.super-list--accordion .sl-item').forEach(item => {
    const title = item.querySelector('.sl-item__title');
    if(title) {
        item.setAttribute('data-title', title.innerText);
    }
  });
});
</script>
