---
title: "Spring Campaign: Flight"
description: "An immersive marketing landing page utilizing the Super List 'Viewport' and 'Bento Box' layouts to showcase a new collection."
type: "page"
menu:
  main:
    parent: "ecommerce"
---

This page demonstrates how the **Super List** component can be used to rapidly compose visually stunning, highly-immersive marketing landing pages. It uses the `viewport` layout for the hero storytelling, and transitions into a dense `bento` box layout for secondary product discovery.

{{< demo >}}
<div style="width: 100%; border: 1px solid var(--ds-sys-color-border); border-radius: 8px; overflow: hidden; background: var(--ds-sys-color-surface); font-family: var(--ds-sys-font-family-base); position: relative;">

  <!-- Simple Global Nav Mock -->
  <header style="position: absolute; top: 0; left: 0; right: 0; z-index: 100; display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 2rem; color: #fff; background: linear-gradient(to bottom, rgba(0,0,0,0.5), transparent);">
    <div style="font-weight: 800; font-size: 1.5rem; letter-spacing: -1px; text-transform: uppercase;">Aero</div>
    <nav style="display: flex; gap: 2rem; font-size: 0.95rem; font-weight: 600;">
      <a href="/aurora-docs/archetypes/ecommerce/" style="color: #fff; text-decoration: none; border-bottom: 2px solid #fff; padding-bottom: 0.2rem;">Storefront</a>
      <span style="color: rgba(255,255,255,0.8); cursor: pointer;">Collection</span>
      <span style="color: rgba(255,255,255,0.8); cursor: pointer;">Innovation</span>
    </nav>
    <div style="display: flex; align-items: center; gap: 1.5rem;">
      <div style="position: relative; cursor: pointer;">
        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0, 'wght' 300;">shopping_bag</span>
      </div>
    </div>
  </header>

  <!-- Part 1: Immersive Viewport Storytelling -->
  <ul class="super-list super-list--viewport" id="campaignHeroList">
    
    <!-- Hero 1: The Vibe -->
    <li class="sl-item">
      <div class="sl-item__bg">
        <img src="https://images.unsplash.com/photo-1552346154-21d32810baa3?auto=format&fit=crop&q=80&w=2000" alt="Runner on track">
      </div>
      <div class="sl-item__overlay" style="background: linear-gradient(to top, rgba(0,0,0,0.8), transparent 50%);"></div>
      <div class="sl-item__content">
        <span class="sl-item__meta" style="background: #fff; color: #000;">Spring 2026</span>
        <h2 class="sl-item__title" style="font-size: 4rem; letter-spacing: -2px; margin-bottom: 1rem;">Defy Gravity.</h2>
        <p class="sl-item__desc" style="font-size: 1.25rem; max-width: 600px; margin: 0 auto 2rem auto;">Introducing the Flight Collection. Engineered with aerospace-grade carbon propulsion plates for maximum energy return.</p>
        <div class="sl-item__actions">
          <button class="btn primary" style="background: #fff; color: #000; padding: 1rem 2rem; border-radius: 999px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Discover Flight</button>
        </div>
      </div>
    </li>

    <!-- Hero 2: The Product Focus -->
    <li class="sl-item" style="align-items: flex-end; justify-content: flex-start;">
      <div class="sl-item__bg">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=2000" alt="Shoe Detail">
      </div>
      <div class="sl-item__overlay" style="background: linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 70%);"></div>
      <div class="sl-item__content" style="text-align: left; padding: 4rem;">
        <span class="sl-item__meta">Innovation</span>
        <h2 class="sl-item__title" style="font-size: 3rem; letter-spacing: -1px; margin-bottom: 0.5rem;">Aero ZoomX</h2>
        <p class="sl-item__desc" style="margin-left: 0; max-width: 400px; font-size: 1.1rem; opacity: 0.9;">Our lightest, highest energy-returning foam ever created. Feel the difference from mile 1 to 26.2.</p>
        <div class="sl-item__actions" style="justify-content: flex-start; margin-top: 2rem;">
          <a href="/aurora-docs/archetypes/ecommerce/shoes/aero-sprint-pro/"><button class="btn secondary" style="border-color: #fff; color: #fff; padding: 0.75rem 1.5rem; border-radius: 999px;">Shop Specifications</button></a>
        </div>
      </div>
    </li>

  </ul>

  <!-- Part 2: Dense Bento Discovery Grid -->
  <div style="background: #111827; padding: 6rem 2rem;">
    <div style="text-align: center; margin-bottom: 4rem;">
      <h3 style="color: #fff; font-size: 2.5rem; font-weight: 800; letter-spacing: -1px; text-transform: uppercase; margin: 0 0 1rem 0;">The Complete Ecosystem</h3>
      <p style="color: #9ca3af; font-size: 1.1rem; max-width: 600px; margin: 0 auto;">Everything you need to break your personal best. Precision engineered apparel and accessories.</p>
    </div>

    <!-- The Bento Super List -->
    <ul class="super-list super-list--bento" id="campaignBentoList">
      
      <!-- Bento 1: Featured Apparel (Spans 2x2) -->
      <li class="sl-item">
        <div class="sl-item__bg">
           <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000" alt="Apparel Collection">
        </div>
        <div class="sl-item__overlay"></div>
        <div class="sl-item__content">
          <span class="sl-item__meta" style="background: #ef4444;">Hot</span>
          <h2 class="sl-item__title">Aeroswift Apparel</h2>
          <p class="sl-item__desc">Ultralight, breathable racing kits designed for zero distractions.</p>
          <div class="sl-item__actions">
            <button class="btn primary" style="background: #fff; color: #000;">Shop Men's</button>
            <button class="btn secondary" style="border-color: #fff; color: #fff;">Shop Women's</button>
          </div>
        </div>
      </li>

      <!-- Bento 2: Accessories (Spans 2x1) -->
      <li class="sl-item">
        <div class="sl-item__bg">
           <img src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=1000" alt="Accessories">
        </div>
        <div class="sl-item__overlay"></div>
        <div class="sl-item__content">
          <h2 class="sl-item__title">Run Essentials</h2>
          <p class="sl-item__desc">Hydration packs, lightweight caps, and polarized optics.</p>
          <div class="sl-item__actions">
            <button class="btn secondary" style="border-color: #fff; color: #fff;">Shop Accessories</button>
          </div>
        </div>
      </li>

      <!-- Bento 3: Socks (Spans 1x1) -->
      <li class="sl-item" style="align-items: center; justify-content: center; text-align: center;">
        <div class="sl-item__bg">
           <div style="width: 100%; height: 100%; background: #1f2937;"></div>
        </div>
        <div class="sl-item__overlay"></div>
        <div class="sl-item__content" style="padding: 1rem;">
          <span class="material-symbols-outlined" style="font-size: 3rem; color: #fff; margin-bottom: 1rem;">dry_cleaning</span>
          <h2 class="sl-item__title" style="font-size: 1.25rem;">Multiplier Socks</h2>
          <p class="sl-item__desc" style="font-size: 0.85rem; margin-bottom: 0;">Sweat-wicking zone cushioning.</p>
        </div>
      </li>

      <!-- Bento 4: Tech (Spans 1x1) -->
      <li class="sl-item" style="align-items: center; justify-content: center; text-align: center;">
        <div class="sl-item__bg">
           <div style="width: 100%; height: 100%; background: var(--ds-sys-color-primary);"></div>
        </div>
        <div class="sl-item__overlay"></div>
        <div class="sl-item__content" style="padding: 1rem;">
          <span class="material-symbols-outlined" style="font-size: 3rem; color: #fff; margin-bottom: 1rem;">watch</span>
          <h2 class="sl-item__title" style="font-size: 1.25rem;">Aero Sync</h2>
          <p class="sl-item__desc" style="font-size: 0.85rem; margin-bottom: 0;">Track every metric in real-time.</p>
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
.sl-item { position: relative; overflow: hidden; display: flex; }
.sl-item__bg { position: absolute; inset: 0; z-index: 1; }
.sl-item__bg img { width: 100%; height: 100%; object-fit: cover; object-position: center; }
.sl-item__overlay { position: absolute; inset: 0; z-index: 2; }
.sl-item__content { position: relative; z-index: 3; }
.sl-item__meta { display: inline-block; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; padding: 0.2rem 0.5rem; border-radius: 4px; background: rgba(255,255,255,0.2); backdrop-filter: blur(4px); margin-bottom: 0.75rem; }
.sl-item__actions { display: flex; gap: 1rem; }

/* Viewport Layout */
.super-list--viewport {
  --sl-viewport-height: 85vh; /* Large hero size */
  height: var(--sl-viewport-height);
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  border-radius: 0; /* Full bleed mock */
}
.super-list--viewport::-webkit-scrollbar { display: none; }
.super-list--viewport { -ms-overflow-style: none; scrollbar-width: none; }
.super-list--viewport .sl-item {
  height: var(--sl-viewport-height);
  width: 100%;
  scroll-snap-align: start;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.super-list--viewport .sl-item__content {
  padding: 2rem;
  color: #fff;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  transition-delay: 0.2s;
}
.super-list--viewport .sl-item.is-visible .sl-item__content { opacity: 1; transform: translateY(0); }

/* Bento Layout */
.super-list--bento {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 350px);
  gap: 1.5rem;
  background: transparent;
  border: none;
}
@media (max-width: 1000px) { .super-list--bento { grid-template-columns: repeat(2, 1fr); grid-template-rows: auto; } }
@media (max-width: 600px) { .super-list--bento { grid-template-columns: 1fr; } }
.super-list--bento .sl-item { border-radius: var(--ds-sys-radius-card); align-items: flex-end; }
.super-list--bento .sl-item:nth-child(1) { grid-column: span 2; grid-row: span 2; }
.super-list--bento .sl-item:nth-child(2) { grid-column: span 2; grid-row: span 1; }
.super-list--bento .sl-item:nth-child(3), .super-list--bento .sl-item:nth-child(4) { grid-column: span 1; grid-row: span 1; }
.super-list--bento .sl-item__overlay { background: linear-gradient(to top, rgba(0,0,0,0.8), transparent 70%); }
.super-list--bento .sl-item__content { padding: 2rem; color: #fff; text-align: left; width: 100%; }
.super-list--bento .sl-item:nth-child(1) .sl-item__title { font-size: 3rem; }
.super-list--bento .sl-item__title { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; }
.super-list--bento .sl-item__desc { font-size: 1rem; margin-bottom: 1.5rem; opacity: 0.9; }
.super-list--bento .sl-item__actions { justify-content: flex-start; }
</style>

<script>
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll('#campaignHeroList .sl-item');
  if (!items.length) return;

  const observerOptions = {
    root: document.getElementById('campaignHeroList'), 
    rootMargin: '0px',
    threshold: 0.6
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible'); 
      }
    });
  }, observerOptions);

  items.forEach(item => observer.observe(item));

  // Trigger first item immediately
  setTimeout(() => {
    if(items[0]) items[0].classList.add('is-visible');
  }, 100);
});
</script>
