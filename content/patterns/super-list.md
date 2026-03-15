---
title: "Super List"
category: "Patterns"
description: "A flexible, responsive list component capable of rendering as a standard grid, horizontal carousel, or immersive full-viewport scroll."
menu:
  main:
    parent: "components-patterns"
---

The **Super List** is a fundamental architectural pattern. Rather than maintaining disparate data modules for Carousels, Category Grids, and Hero Landing sections, a single unified "Super List" container processes a common data array of Items (comprising properties such as *title, subtitle, imagery, and CTAs*), and dynamically alters their presentation via a simple `layout` state modifier.

This reduces content duplication, guarantees identical data structures across platforms, and ensures rapid layout iteration.

## Layout Variations
The true power of the Super List is modifying its presentation without changing its HTML item structure. Below is a unified demo. Use the controls to switch the layout context and observe how the items respond.

{{< demo >}}
<div style="margin-bottom: 2rem; display: flex; gap: 1rem; align-items: center; justify-content: center; padding-bottom: 1rem; border-bottom: 1px solid var(--ds-sys-color-border);">
  <span style="font-weight: 600; font-size: 0.9rem;">Select Layout:</span>
  <button class="btn secondary" onclick="setSuperListLayout('viewport')" id="btn-layout-viewport" style="border-color: var(--ds-sys-color-primary); color: var(--ds-sys-color-primary);">Viewport Scroll</button>
  <button class="btn secondary" onclick="setSuperListLayout('grid')" id="btn-layout-grid">Grid</button>
  <button class="btn secondary" onclick="setSuperListLayout('carousel')" id="btn-layout-carousel">Carousel</button>
</div>
<style>
/* 
  --- Base Super List Styles ---
  Reset list styling and define a common container.
*/
.super-list {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  border-radius: var(--ds-sys-radius-card);
  border: 1px solid var(--ds-sys-color-border);
  transition: all 0.5s ease;
}

/* Base item reset */
.sl-item {
  position: relative;
  overflow: hidden;
  display: flex;
}

/* Background Image Base */
.sl-item__bg {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.sl-item__bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Optional Overlay Base */
.sl-item__overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
}

/* Content Container Base */
.sl-item__content {
  position: relative;
  z-index: 3;
}

/* Actions Base */
.sl-item__actions {
  display: flex;
  gap: 1rem;
}

/* 
  --- 1. Viewport Scroll Variant --- 
*/
.super-list--viewport {
  --sl-viewport-height: 80vh; /* Scaled down slightly for demo purposes so it fits within documentation flow. In production, use 100vh */
  
  height: var(--sl-viewport-height);
  overflow-y: scroll;
  overflow-x: hidden;
  
  /* Scroll Snapping */
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

/* Hide scrollbar for cleaner look (optional, but common for immersive sections) */
.super-list--viewport::-webkit-scrollbar {
  display: none;
}
.super-list--viewport {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.super-list--viewport .sl-item {
  height: var(--sl-viewport-height);
  width: 100%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  align-items: center; 
  justify-content: center;
}

/* Background Image Layer */
.sl-item__bg {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.sl-item__bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.super-list--viewport .sl-item__bg img {
  transition: transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* Optional Overlay for Text Readability */
.super-list--viewport .sl-item__overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%);
  opacity: 0.7;
}

/* Content Container */
.super-list--viewport .sl-item__content {
  width: 100%;
  max-width: 1200px;
  padding: 4rem 2rem;
  color: #fff;
  text-align: center;
}

/* Typography Base Styles */
.super-list--viewport .sl-item__title {
  font-size: clamp(2.5rem, 5vw, 5rem);
  font-weight: 800;
  margin-bottom: 0.5rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.super-list--viewport .sl-item__desc {
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  font-weight: 400;
  max-width: 600px;
  margin: 0 auto 2rem auto;
  opacity: 0.9;
}

.super-list--viewport .sl-item__actions {
  justify-content: center;
  flex-wrap: wrap;
}

/* --- ANIMATIONS (Triggered by IntersectionObserver '.is-visible' class) --- */

/* Initial Hidden States */
.super-list--viewport .sl-item__title,
.super-list--viewport .sl-item__desc,
.super-list--viewport .sl-item__actions {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* Slightly scale down BG initially */
.super-list--viewport .sl-item:not(.is-visible) .sl-item__bg img {
  transform: scale(1.05);
}

/* Visible States (Cascading Stagger) */
.super-list--viewport .sl-item.is-visible .sl-item__bg img {
  transform: scale(1);
}

.super-list--viewport .sl-item.is-visible .sl-item__title {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.1s;
}

.super-list--viewport .sl-item.is-visible .sl-item__desc {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.3s;
}

.super-list--viewport .sl-item.is-visible .sl-item__actions {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.5s;
}

/* 
  --- 2. Grid Variant --- 
*/
.super-list--grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
  background: transparent;
  border: none;
}

.super-list--grid .sl-item {
  border-radius: var(--ds-sys-radius-card);
  height: 400px;
  align-items: flex-end; /* Align content to bottom */
}

/* Ensure background image zooms slightly on hover */
.super-list--grid .sl-item__bg img {
  transition: transform 0.4s ease;
}
.super-list--grid .sl-item:hover .sl-item__bg img {
  transform: scale(1.05);
}

.super-list--grid .sl-item__overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.9), transparent 80%);
  opacity: 0.8;
}

.super-list--grid .sl-item__content {
  padding: 1.5rem;
  width: 100%;
  color: #fff;
  text-align: left;
}

.super-list--grid .sl-item__title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.super-list--grid .sl-item__desc {
  font-size: 0.95rem;
  opacity: 0.8;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.super-list--grid .sl-item__actions {
  justify-content: flex-start;
  gap: 0.5rem;
}

.super-list--grid .btn {
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
}

/* 
  --- 3. Carousel Variant --- 
*/
.super-list--carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  gap: 1rem;
  padding: 1rem;
  background: transparent;
  border: none;
}

.super-list--carousel::-webkit-scrollbar {
  height: 8px;
}
.super-list--carousel::-webkit-scrollbar-thumb {
  background: var(--ds-sys-color-border);
  border-radius: 4px;
}

.super-list--carousel .sl-item {
  flex: 0 0 80%;
  max-width: 400px;
  height: 450px;
  scroll-snap-align: center;
  border-radius: var(--ds-sys-radius-card);
  align-items: center; /* Center content */
  text-align: center;
}

.super-list--carousel .sl-item__overlay {
  background: rgba(0,0,0,0.4);
}

.super-list--carousel .sl-item__content {
  padding: 2rem;
  color: #fff;
}

.super-list--carousel .sl-item__title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.super-list--carousel .sl-item__desc {
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.super-list--carousel .sl-item__actions {
  justify-content: center;
}

</style>

<!-- The Component Structure -->
<ul class="super-list super-list--viewport" id="demoSuperList">
  
  <!-- Item 1: Hero Landing (Centered) -->
  <li class="sl-item">
    <div class="sl-item__bg">
      <img src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=2000" alt="New Arrivals">
    </div>
    <div class="sl-item__overlay"></div>
    <div class="sl-item__content">
      <h2 class="sl-item__title">New Arrivals</h2>
      <p class="sl-item__desc">Discover the highly anticipated Spring/Summer collection.</p>
      <div class="sl-item__actions">
        <button class="btn primary" style="background: #fff; color: #000;">Shop the Collection</button>
      </div>
    </div>
  </li>

  <!-- Item 2: Category (Bottom Left Align using utility overrides) -->
  <li class="sl-item" style="align-items: flex-end; justify-content: flex-start;">
    <div class="sl-item__bg">
      <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=2000" alt="Footwear">
    </div>
    <div class="sl-item__overlay"></div>
    <div class="sl-item__content" style="text-align: left;">
      <h2 class="sl-item__title">Elevate Your Step</h2>
      <p class="sl-item__desc" style="margin-left: 0;">Precision engineered running and lifestyle footwear.</p>
      <div class="sl-item__actions" style="justify-content: flex-start;">
        <button class="btn secondary" style="border-color: #fff; color: #fff;">Men's Shoes</button>
        <button class="btn secondary" style="border-color: #fff; color: #fff;">Women's Shoes</button>
      </div>
    </div>
  </li>

  <!-- Item 3: Deep Look -->
  <li class="sl-item">
    <div class="sl-item__bg">
      <img src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=2000" alt="Accessories">
    </div>
    <div class="sl-item__overlay"></div>
    <div class="sl-item__content">
      <h2 class="sl-item__title">The Essentials</h2>
      <p class="sl-item__desc">Premium accessories built for the modern commute.</p>
      <div class="sl-item__actions">
        <button class="btn primary" style="background: #fff; color: #000;">Explore Accessories</button>
      </div>
    </div>
  </li>

</ul>

<script>
// --- Intersection Observer (For Viewport Layout) ---
let observer = null;

function initViewportObserver() {
  const items = document.querySelectorAll('#demoSuperList .sl-item');
  if (!items.length) return;

  const observerOptions = {
    root: document.getElementById('demoSuperList'), 
    rootMargin: '0px',
    threshold: 0.6
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible'); 
      }
    });
  }, observerOptions);

  items.forEach(item => observer.observe(item));
}

function destroyObserver() {
  if (observer) observer.disconnect();
  // Ensure all items are visible when not in viewport mode
  document.querySelectorAll('#demoSuperList .sl-item').forEach(item => {
    item.classList.add('is-visible');
  });
}

// --- Layout Switcher Logic ---
function setSuperListLayout(layout) {
  const list = document.getElementById('demoSuperList');
  
  // Update button visual states
  document.querySelectorAll('[id^="btn-layout-"]').forEach(btn => {
    btn.style.borderColor = 'transparent';
    btn.style.color = 'inherit';
  });
  
  const activeBtn = document.getElementById(`btn-layout-${layout}`);
  activeBtn.style.borderColor = 'var(--ds-sys-color-primary)';
  activeBtn.style.color = 'var(--ds-sys-color-primary)';

  // Remove old layout classes
  list.classList.remove('super-list--viewport', 'super-list--grid', 'super-list--carousel');
  
  // Add new layout class
  list.classList.add(`super-list--${layout}`);

  // Handle JS logic per layout
  if (layout === 'viewport') {
    // Reset scroll position before initializing observer
    list.scrollTop = 0; 
    document.querySelectorAll('#demoSuperList .sl-item').forEach(item => item.classList.remove('is-visible'));
    initViewportObserver();
  } else {
    destroyObserver();
  }
}

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
  initViewportObserver();
});
</script>
{{< /demo >}}
