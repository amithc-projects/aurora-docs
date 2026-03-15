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
<div style="margin-bottom: 2rem; display: flex; gap: 1rem; align-items: center; justify-content: center; padding-bottom: 1rem; border-bottom: 1px solid var(--ds-sys-color-border); flex-wrap: wrap;">
  <span style="font-weight: 600; font-size: 0.9rem;">Select Layout:</span>
  <button class="btn secondary" onclick="setSuperListLayout('viewport')" id="btn-layout-viewport" style="border-color: var(--ds-sys-color-primary); color: var(--ds-sys-color-primary);">Viewport Scroll</button>
  <button class="btn secondary" onclick="setSuperListLayout('grid')" id="btn-layout-grid">Grid</button>
  <button class="btn secondary" onclick="setSuperListLayout('carousel')" id="btn-layout-carousel">Carousel</button>
  <button class="btn secondary" onclick="setSuperListLayout('split')" id="btn-layout-split">Zig-Zag</button>
  <button class="btn secondary" onclick="setSuperListLayout('accordion')" id="btn-layout-accordion">Accordion</button>
  <button class="btn secondary" onclick="setSuperListLayout('masonry')" id="btn-layout-masonry">Masonry</button>
  <button class="btn secondary" onclick="setSuperListLayout('marquee')" id="btn-layout-marquee">Marquee</button>
  <button class="btn secondary" onclick="setSuperListLayout('story')" id="btn-layout-story">Story</button>
  <button class="btn secondary" onclick="setSuperListLayout('bento')" id="btn-layout-bento">Bento</button>
  <button class="btn secondary" onclick="setSuperListLayout('timeline')" id="btn-layout-timeline">Timeline</button>
  <button class="btn secondary" onclick="setSuperListLayout('list')" id="btn-layout-list">List</button>
  <button class="btn secondary" onclick="setSuperListLayout('stacked')" id="btn-layout-stacked">Stacked</button>
  <button class="btn secondary" onclick="setSuperListLayout('coverflow')" id="btn-layout-coverflow">Cover Flow</button>
</div>
{{< /demo >}}

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

/* Optional Meta Label Base */
.sl-item__meta {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(4px);
  margin-bottom: 0.75rem;
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

/* 
  --- 4. Zig-Zag (Split) Variant --- 
*/
.super-list--split {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  background: transparent;
  border: none;
}

.super-list--split .sl-item {
  display: flex;
  border-radius: var(--ds-sys-radius-card);
  overflow: hidden;
  height: auto;
  min-height: 400px;
  background: var(--ds-sys-color-surface);
  box-shadow: var(--ds-sys-shadow-card);
}

.super-list--split .sl-item:nth-child(even) {
  flex-direction: row-reverse;
}

.super-list--split .sl-item__bg {
  position: relative;
  flex: 1;
  min-height: 400px;
}

.super-list--split .sl-item__overlay {
  display: none; /* Text sits on plain background */
}

.super-list--split .sl-item__content {
  flex: 1;
  padding: 4rem;
  color: var(--ds-sys-color-on-surface);
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.super-list--split .sl-item__title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--ds-sys-color-on-surface);
}

.super-list--split .sl-item__desc {
  font-size: 1.1rem;
  opacity: 0.8;
  margin-bottom: 2rem;
  color: var(--ds-sys-color-on-surface);
}

.super-list--split .sl-item__actions {
  justify-content: flex-start;
}

/* Fix CTA colors for light theme since overlay is gone */
.super-list--split .btn.primary {
  background: var(--ds-sys-color-primary) !important;
  color: #fff !important;
}
.super-list--split .btn.secondary {
  border-color: var(--ds-sys-color-primary) !important;
  color: var(--ds-sys-color-primary) !important;
}

/* 
  --- 5. Hover Accordion Variant --- 
*/
.super-list--accordion {
  display: flex;
  height: 600px;
  overflow: hidden;
  gap: 0.5rem;
  padding: 0.5rem;
}

.super-list--accordion .sl-item {
  flex: 1; /* All items start equal size */
  transition: flex 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  border-radius: var(--ds-sys-radius-card);
  cursor: pointer;
  align-items: flex-end; /* Text at bottom */
}

/* Expand item on hover */
.super-list--accordion .sl-item:hover,
.super-list--accordion .sl-item.is-active {
  flex: 5; /* Expands to 5x ratio */
}

.super-list--accordion .sl-item__overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.9), transparent 60%);
  opacity: 0.6;
  transition: opacity 0.6s;
}

.super-list--accordion .sl-item:hover .sl-item__overlay,
.super-list--accordion .sl-item.is-active .sl-item__overlay {
  opacity: 0.9;
}

.super-list--accordion .sl-item__content {
  padding: 2rem;
  color: #fff;
  text-align: left;
  opacity: 0;
  transition: opacity 0.4s 0.2s, transform 0.4s 0.2s; /* Delay fade in */
  transform: translateY(20px);
  width: 100%;
}

/* Only show text when expanded */
.super-list--accordion .sl-item:hover .sl-item__content,
.super-list--accordion .sl-item.is-active .sl-item__content {
  opacity: 1;
  transform: translateY(0);
}

.super-list--accordion .sl-item__title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  /* Prevent word wrap when squished */
  white-space: nowrap; 
}

.super-list--accordion .sl-item__desc {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  
  /* Prevent word wrap when squished */
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
}

.super-list--accordion .sl-item__actions {
  justify-content: flex-start;
}

/* 
  --- 6. Masonry Grid Variant --- 
*/
.super-list--masonry {
  column-count: 3;
  column-gap: 1.5rem;
  padding: 1.5rem;
  background: transparent;
  border: none;
}

/* Responsive columns */
@media (max-width: 1000px) { .super-list--masonry { column-count: 2; } }
@media (max-width: 600px) { .super-list--masonry { column-count: 1; } }

.super-list--masonry .sl-item {
  display: flex;
  break-inside: avoid;
  margin-bottom: 1.5rem;
  border-radius: var(--ds-sys-radius-card);
  align-items: flex-end; /* Align content to bottom */
  
  /* Create varied heights based on content or n-th child logic */
  height: auto;
  min-height: 350px;
}

.super-list--masonry .sl-item:nth-child(2n) { min-height: 450px; }
.super-list--masonry .sl-item:nth-child(3n) { min-height: 550px; }

.super-list--masonry .sl-item__overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.9), transparent 80%);
  opacity: 0.8;
}

.super-list--masonry .sl-item__content {
  padding: 1.5rem;
  width: 100%;
  color: #fff;
  text-align: left;
}

.super-list--masonry .sl-item__title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.super-list--masonry .sl-item__desc {
  font-size: 0.95rem;
  opacity: 0.8;
  margin-bottom: 1rem;
}

.super-list--masonry .sl-item__actions {
  justify-content: flex-start;
  gap: 0.5rem;
}

/* 
  --- 7. Infinite Marquee Variant --- 
*/
.super-list--marquee {
  display: flex;
  overflow: hidden;
  padding: 2rem 0;
  background: var(--ds-sys-color-surface);
  border-top: 1px solid var(--ds-sys-color-border);
  border-bottom: 1px solid var(--ds-sys-color-border);
  border-radius: 0;
}

.super-list--marquee .sl-item {
  flex: 0 0 400px;
  height: 250px;
  margin-right: 2rem;
  border-radius: var(--ds-sys-radius-card);
  align-items: center; /* Center content */
  text-align: center;
  
  /* The continuous animation */
  animation: marqueeScroll 20s linear infinite;
}

/* Pause on hover */
.super-list--marquee:hover .sl-item {
  animation-play-state: paused;
}

/* Keyframes for sliding left */
@keyframes marqueeScroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(calc(-400px * 3 - 2rem * 3)); /* Shift left by total width of 3 items + gaps */ }
}

.super-list--marquee .sl-item__overlay {
  background: rgba(0,0,0,0.5);
}

.super-list--marquee .sl-item__content {
  padding: 1rem;
  color: #fff;
}

.super-list--marquee .sl-item__title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.super-list--marquee .sl-item__desc {
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.super-list--marquee .sl-item__actions {
  justify-content: center;
}
.super-list--marquee .btn {
  padding: 0.3rem 0.6rem;
  font-size: 0.8rem;
}

/* 
  --- 8. Instagram Story Variant --- 
*/
.super-list--story {
  position: relative;
  display: flex;
  height: 80vh; 
  max-width: 450px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 20px; /* Phone-like rounded corners */
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.super-list--story .sl-item {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  align-items: center; 
  justify-content: center;
}

/* Only the active story item is visible */
.super-list--story .sl-item.is-story-active {
  opacity: 1;
  pointer-events: auto;
  z-index: 5;
}

.super-list--story .sl-item__overlay {
  background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 20%, transparent 60%, rgba(0,0,0,0.8) 100%);
}

.super-list--story .sl-item__content {
  padding: 2rem;
  color: #fff;
  text-align: center;
  margin-top: auto; /* Push content to bottom */
  margin-bottom: 2rem;
}

.super-list--story .sl-item__title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.super-list--story .sl-item__desc {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}

/* Story Progress Bars (Injected via JS) */
.story-progress-container {
  position: absolute;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.4rem;
  z-index: 10;
}
.story-progress-bar {
  flex: 1;
  height: 3px;
  background: rgba(255,255,255,0.3);
  border-radius: 2px;
  overflow: hidden;
}
.story-progress-fill {
  height: 100%;
  width: 0%;
  background: #fff;
  transition: width 0.1s linear;
}
/* If a story is passed, fill it completely */
.story-progress-bar.is-passed .story-progress-fill {
  width: 100%;
}

/* Story Navigation Click Zones */
.story-nav-zone {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  z-index: 10;
  cursor: pointer;
}
.story-nav-zone.left { left: 0; }
.story-nav-zone.right { right: 0; }

/* 
  --- 9. Bento Box Variant --- 
*/
.super-list--bento {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 350px);
  gap: 1.5rem;
  padding: 1.5rem;
  background: transparent;
  border: none;
}

@media (max-width: 1000px) {
  .super-list--bento {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
}

@media (max-width: 600px) {
  .super-list--bento {
    grid-template-columns: 1fr;
  }
}

.super-list--bento .sl-item {
  border-radius: var(--ds-sys-radius-card);
  align-items: flex-end; /* Text at bottom */
}

/* Bento Asymmetric Sizing Rules */
.super-list--bento .sl-item:nth-child(1) {
  grid-column: span 2;
  grid-row: span 2;
}
.super-list--bento .sl-item:nth-child(2) {
  grid-column: span 2;
  grid-row: span 1;
}
.super-list--bento .sl-item:nth-child(3),
.super-list--bento .sl-item:nth-child(4) {
  grid-column: span 1;
  grid-row: span 1;
}
.super-list--bento .sl-item:nth-child(n+5) {
  /* Hide extra items in strict bento */
  display: none; 
}

.super-list--bento .sl-item__overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent 70%);
}

.super-list--bento .sl-item__content {
  padding: 2rem;
  color: #fff;
  text-align: left;
  width: 100%;
}

.super-list--bento .sl-item:nth-child(1) .sl-item__title {
  font-size: 3rem;
}

.super-list--bento .sl-item__title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.super-list--bento .sl-item__desc {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.super-list--bento .sl-item__actions {
  justify-content: flex-start;
}

/* 
  --- 10. Interactive Timeline Variant --- 
*/
.super-list--timeline {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 4rem 2rem;
  background: transparent;
  border: none;
  gap: 4rem;
}

/* The vertical center line */
.super-list--timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  background: var(--ds-sys-color-border);
  transform: translateX(-50%);
}

.super-list--timeline .sl-item {
  width: 45%;
  height: 350px;
  border-radius: var(--ds-sys-radius-card);
  box-shadow: var(--ds-sys-shadow-card);
  align-items: flex-end;
  position: relative;
}

/* Alternate left/right */
.super-list--timeline .sl-item:nth-child(odd) {
  align-self: flex-start;
}
.super-list--timeline .sl-item:nth-child(even) {
  align-self: flex-end;
}

/* Connecting Dots */
.super-list--timeline .sl-item::before {
  content: '';
  position: absolute;
  top: 50%;
  width: 20px;
  height: 20px;
  background: var(--ds-sys-color-primary);
  border: 4px solid var(--ds-sys-color-surface);
  border-radius: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.super-list--timeline .sl-item:nth-child(odd)::before {
  right: -5.55%; /* Reach the center line */
  transform: translate(50%, -50%);
}
.super-list--timeline .sl-item:nth-child(even)::before {
  left: -5.55%; /* Reach the center line */
  transform: translate(-50%, -50%);
}

.super-list--timeline .sl-item__overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent 70%);
}

.super-list--timeline .sl-item__content {
  padding: 2rem;
  color: #fff;
  width: 100%;
}

.super-list--timeline .sl-item:nth-child(odd) .sl-item__content {
  text-align: right;
}
.super-list--timeline .sl-item:nth-child(even) .sl-item__content {
  text-align: left;
}

.super-list--timeline .sl-item__meta {
  background: var(--ds-sys-color-primary);
  color: #fff;
  font-size: 0.9rem;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  position: absolute;
  top: 1rem;
}

.super-list--timeline .sl-item:nth-child(odd) .sl-item__meta {
  right: 1rem;
}
.super-list--timeline .sl-item:nth-child(even) .sl-item__meta {
  left: 1rem;
}

.super-list--timeline .sl-item:nth-child(odd) .sl-item__actions {
  justify-content: flex-end;
}
.super-list--timeline .sl-item:nth-child(even) .sl-item__actions {
  justify-content: flex-start;
}

@media (max-width: 768px) {
  .super-list--timeline::before { left: 2rem; }
  .super-list--timeline .sl-item { width: calc(100% - 4rem); align-self: flex-end !important; margin-left: auto; }
  .super-list--timeline .sl-item::before { left: -2rem !important; transform: translate(-50%, -50%) !important; right: auto !important; }
  .super-list--timeline .sl-item__content { text-align: left !important; }
  .super-list--timeline .sl-item__meta { left: 1rem !important; right: auto !important; }
  .super-list--timeline .sl-item__actions { justify-content: flex-start !important; }
}

/* 
  --- 11. Dense Directory (List) Variant --- 
*/
.super-list--list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: transparent;
  border: none;
}

.super-list--list .sl-item {
  display: flex;
  flex-direction: row;
  height: 120px;
  border-radius: var(--ds-sys-radius-card);
  box-shadow: var(--ds-sys-shadow-card);
  background: var(--ds-sys-color-surface);
}

.super-list--list .sl-item__bg {
  position: relative;
  width: 150px;
  min-width: 150px;
  height: 100%;
}

.super-list--list .sl-item__overlay {
  display: none;
}

.super-list--list .sl-item__content {
  flex: 1;
  padding: 1rem 1.5rem;
  color: var(--ds-sys-color-on-surface);
  display: flex;
  flex-direction: row; /* Horizontal alignment inside */
  align-items: center;
  justify-content: space-between;
}

.super-list--list .sl-item__title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: var(--ds-sys-color-on-surface);
}

.super-list--list .sl-item__desc {
  font-size: 0.9rem;
  margin-bottom: 0px;
  opacity: 0.8;
  color: var(--ds-sys-color-on-surface);
  max-width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.super-list--list .sl-item__meta {
  position: static;
  background: var(--ds-sys-color-surface-variant);
  color: var(--ds-sys-color-on-surface);
  margin-bottom: 0;
  font-size: 0.75rem;
}

/* Fix CTA colors for light theme */
.super-list--list .btn.primary { background: var(--ds-sys-color-primary) !important; color: #fff !important; }
.super-list--list .btn.secondary { border-color: var(--ds-sys-color-primary) !important; color: var(--ds-sys-color-primary) !important; }

@media (max-width: 768px) {
  .super-list--list .sl-item { height: auto; }
  .super-list--list .sl-item__content { flex-direction: column; align-items: flex-start; gap: 1rem; }
  .super-list--list .sl-item__desc { white-space: normal; }
}

/* 
  --- 12. Sticky Stacked Cards Variant --- 
*/
.super-list--stacked {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1rem 10rem 1rem;
  background: transparent;
  border: none;
}

.super-list--stacked .sl-item {
  position: sticky;
  height: 500px;
  border-radius: var(--ds-sys-radius-card);
  box-shadow: 0 -10px 40px rgba(0,0,0,0.2);
  align-items: flex-end; /* Text at bottom */
}

/* Stagger the tops so they stack up like a deck */
.super-list--stacked .sl-item:nth-child(1) { top: 100px; }
.super-list--stacked .sl-item:nth-child(2) { top: 120px; }
.super-list--stacked .sl-item:nth-child(3) { top: 140px; }
.super-list--stacked .sl-item:nth-child(4) { top: 160px; }
.super-list--stacked .sl-item:nth-child(5) { top: 180px; }
.super-list--stacked .sl-item:nth-child(6) { top: 200px; }

.super-list--stacked .sl-item__overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.9), transparent 70%);
}

.super-list--stacked .sl-item__content {
  padding: 2rem;
  color: #fff;
  width: 100%;
}

.super-list--stacked .sl-item__title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.super-list--stacked .sl-item__desc {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}
.super-list--stacked .sl-item__actions {
  justify-content: flex-start;
}

/* 
  --- 13. 3D Cover Flow Variant --- 
*/
.super-list--coverflow {
  display: flex;
  overflow-x: auto;
  gap: 0;
  padding: 2rem 50vw 2rem 50vw; /* Pad edges so first/last can be centered */
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  background: #0f172a; /* Dark background enhances 3D effect */
  border: none;
  height: 600px;
  align-items: center;
  perspective: 1000px; /* Crucial for 3D depth */
}

.super-list--coverflow::-webkit-scrollbar {
  height: 8px;
}
.super-list--coverflow::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.2);
  border-radius: 4px;
}

.super-list--coverflow .sl-item {
  flex: 0 0 350px;
  height: 450px;
  scroll-snap-align: center;
  border-radius: var(--ds-sys-radius-card);
  align-items: flex-end; /* Text at bottom */
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
  margin: 0 -50px; /* Overlap items */
  transition: transform 0.1s linear, z-index 0.1s linear; /* Fast transition, handled tightly by JS */
}

.super-list--coverflow .sl-item__overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 100%);
}

.super-list--coverflow .sl-item__content {
  padding: 1.5rem;
  color: #fff;
  width: 100%;
  text-align: center;
}

.super-list--coverflow .sl-item__title { font-size: 1.5rem; margin-bottom: 0.5rem; }
.super-list--coverflow .sl-item__desc { font-size: 0.9rem; margin-bottom: 1rem; }
.super-list--coverflow .sl-item__actions { justify-content: center; }

</style>

### The Unified HTML Structure
Notice how regardless of which layout is currently active above, the underlying DOM structure (as seen by screen readers, search engines, and your data models) remains exactly the same:

{{< demo >}}
<!-- The Component Structure -->
<ul class="super-list super-list--viewport" id="demoSuperList">
  
  <!-- Item 1: Hero Landing (Centered) -->
  <li class="sl-item">
    <div class="sl-item__bg">
      <img src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=2000" alt="New Arrivals">
    </div>
    <div class="sl-item__overlay"></div>
    <div class="sl-item__content">
      <span class="sl-item__meta">Spring 2026</span>
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
      <span class="sl-item__meta">Available Now</span>
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
      <span class="sl-item__meta">Popular</span>
      <h2 class="sl-item__title">The Essentials</h2>
      <p class="sl-item__desc">Premium accessories built for the modern commute.</p>
      <div class="sl-item__actions">
        <button class="btn primary" style="background: #fff; color: #000;">Explore Accessories</button>
      </div>
    </div>
  </li>

  <!-- Item 4: Sale Feature -->
  <li class="sl-item" style="align-items: center; justify-content: flex-end;">
    <div class="sl-item__bg">
      <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=2000" alt="Sale">
    </div>
    <div class="sl-item__overlay"></div>
    <div class="sl-item__content" style="text-align: right;">
      <span class="sl-item__meta">Limited Time</span>
      <h2 class="sl-item__title">End of Season Sale</h2>
      <p class="sl-item__desc" style="margin-right: 0; margin-left: auto;">Up to 50% off selected outerwear and seasonal styles.</p>
      <div class="sl-item__actions" style="justify-content: flex-end;">
        <button class="btn primary" style="background: #e11d48; color: #fff; border: none;">Shop Sale</button>
      </div>
    </div>
  </li>

  <!-- Item 5: Community Story -->
  <li class="sl-item">
    <div class="sl-item__bg">
      <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2000" alt="Community Workout">
    </div>
    <div class="sl-item__overlay"></div>
    <div class="sl-item__content">
      <span class="sl-item__meta">Events</span>
      <h2 class="sl-item__title">Join the Club</h2>
      <p class="sl-item__desc">Connect with local athletes at our weekly run clubs and training sessions.</p>
      <div class="sl-item__actions">
        <button class="btn secondary" style="border-color: #fff; color: #fff;">Find a Segment</button>
      </div>
    </div>
  </li>

  <!-- Item 6: Sustainability Details -->
  <li class="sl-item" style="align-items: flex-start; justify-content: center;">
    <div class="sl-item__bg">
      <img src="https://images.unsplash.com/photo-1611270418597-a6cbf50fca26?auto=format&fit=crop&q=80&w=2000" alt="Sustainability">
    </div>
    <div class="sl-item__overlay" style="background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%);"></div>
    <div class="sl-item__content" style="padding-top: 6rem;">
      <span class="sl-item__meta" style="color:#000; background:#fff;">Mission</span>
      <h2 class="sl-item__title">Move to Zero</h2>
      <p class="sl-item__desc">Our journey toward zero carbon and zero waste to help protect the future of sport.</p>
      <div class="sl-item__actions">
        <button class="btn primary" style="background: #fff; color: #000;">Read the Report</button>
      </div>
    </div>
  </li>

</ul>
{{< /demo >}}

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

let storyInterval;
let storyCurrentIndex = 0;
let storyItems = [];
const STORY_DURATION = 5000; // 5 seconds per slide

function initStoryLayout() {
  const list = document.getElementById('demoSuperList');
  storyItems = Array.from(list.querySelectorAll('.sl-item'));
  if (!storyItems.length) return;

  storyCurrentIndex = 0;

  // 1. Create Progress Bars
  let progressHTML = '<div class="story-progress-container" id="storyProgressBars">';
  storyItems.forEach((_, i) => {
    progressHTML += `<div class="story-progress-bar" id="story-bar-${i}"><div class="story-progress-fill" id="story-fill-${i}"></div></div>`;
  });
  progressHTML += '</div>';
  list.insertAdjacentHTML('beforeend', progressHTML);

  // 2. Create Click Zones
  list.insertAdjacentHTML('beforeend', `
    <div class="story-nav-zone left" onclick="prevStory()"></div>
    <div class="story-nav-zone right" onclick="nextStory()"></div>
  `);

  // 3. Start Story loop
  updateStoryView();
  startStoryTimer();
}

function updateStoryView() {
  storyItems.forEach((item, index) => {
    // Set active item class
    if (index === storyCurrentIndex) {
      item.classList.add('is-story-active');
    } else {
      item.classList.remove('is-story-active');
    }

    // Update progress bars
    const barFill = document.getElementById(`story-fill-${index}`);
    const barContainer = document.getElementById(`story-bar-${index}`);
    if (barFill && barContainer) {
      if (index < storyCurrentIndex) {
        barContainer.classList.add('is-passed');
        barFill.style.width = '100%';
      } else if (index > storyCurrentIndex) {
        barContainer.classList.remove('is-passed');
        barFill.style.width = '0%';
        barFill.style.transition = 'none'; // Snap to 0
      }
    }
  });
}

function startStoryTimer() {
  clearInterval(storyInterval);
  const currentFill = document.getElementById(`story-fill-${storyCurrentIndex}`);
  if (!currentFill) return;

  // Reset transition to ensure smooth fill
  currentFill.style.transition = 'none';
  currentFill.style.width = '0%';
  
  // Force reflow
  void currentFill.offsetWidth; 
  
  currentFill.style.transition = `width ${STORY_DURATION}ms linear`;
  currentFill.style.width = '100%';

  storyInterval = setInterval(() => {
    nextStory();
  }, STORY_DURATION);
}

function nextStory() {
  if (storyCurrentIndex < storyItems.length - 1) {
    storyCurrentIndex++;
    updateStoryView();
    startStoryTimer();
  } else {
    // Loop back to start
    storyCurrentIndex = 0;
    document.querySelectorAll('.story-progress-bar').forEach(bar => bar.classList.remove('is-passed'));
    updateStoryView();
    startStoryTimer();
  }
}

function prevStory() {
  if (storyCurrentIndex > 0) {
    storyCurrentIndex--;
    updateStoryView();
    startStoryTimer();
  } else {
    // Reset current
    updateStoryView();
    startStoryTimer();
  }
}

function destroyStoryLayout() {
  clearInterval(storyInterval);
  storyItems.forEach(item => item.classList.remove('is-story-active'));
  
  // Remove injected DOM elements
  const progressBars = document.getElementById('storyProgressBars');
  if (progressBars) progressBars.remove();
  
  document.querySelectorAll('.story-nav-zone').forEach(zone => zone.remove());
}

// --- Cover Flow Logic ---
let coverflowRAF;
let coverflowList;
let coverflowItems;

function initCoverflowLayout() {
  coverflowList = document.getElementById('demoSuperList');
  coverflowItems = Array.from(coverflowList.querySelectorAll('.sl-item'));
  
  // Center the first scroll snap instantly
  coverflowList.scrollLeft = 0;

  function updateCoverflow() {
    const listCenter = coverflowList.offsetWidth / 2;
    
    coverflowItems.forEach(item => {
      // Calculate how far the center of this item is from the center of the scrolling container
      const itemCenter = item.offsetLeft + item.offsetWidth / 2 - coverflowList.scrollLeft;
      const distance = itemCenter - listCenter;
      
      const maxDistance = coverflowList.offsetWidth;
      let ratio = distance / maxDistance;
      
      // Clamp ratio between -1 and 1
      ratio = Math.max(-1, Math.min(1, ratio));
      
      // Calculate 3D transforms based on layout ratio
      const rotateY = ratio * -50; 
      const scale = 1 - Math.abs(ratio) * 0.25;
      const zIndex = Math.round(100 - Math.abs(ratio) * 100);
      
      item.style.transform = `rotateY(${rotateY}deg) scale(${scale})`;
      item.style.zIndex = zIndex;
      
      // Dim peripheral items
      const content = item.querySelector('.sl-item__content');
      if (Math.abs(ratio) > 0.2) {
         content.style.opacity = '0';
         item.style.filter = `brightness(${1 - Math.abs(ratio)*0.5})`;
      } else {
         content.style.opacity = '1';
         item.style.filter = 'brightness(1)';
      }
    });
    
    coverflowRAF = requestAnimationFrame(updateCoverflow);
  }
  
  updateCoverflow();
}

function destroyCoverflowLayout() {
  cancelAnimationFrame(coverflowRAF);
  document.querySelectorAll('#demoSuperList .sl-item').forEach(item => {
    item.style.transform = '';
    item.style.zIndex = '';
    item.style.filter = '';
    const content = item.querySelector('.sl-item__content');
    if(content) content.style.opacity = '';
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
  list.classList.remove(
    'super-list--viewport', 
    'super-list--grid', 
    'super-list--carousel',
    'super-list--split',
    'super-list--accordion',
    'super-list--masonry',
    'super-list--marquee',
    'super-list--story',
    'super-list--bento',
    'super-list--timeline',
    'super-list--list',
    'super-list--stacked',
    'super-list--coverflow'
  );
  
  // Clean up any layout-specific JS states
  destroyObserver();
  destroyStoryLayout();
  destroyCoverflowLayout();

  // Add new layout class
  list.classList.add(`super-list--${layout}`);

  // Initialize specific layout JS logic
  if (layout === 'viewport') {
    list.scrollTop = 0; 
    document.querySelectorAll('#demoSuperList .sl-item').forEach(item => item.classList.remove('is-visible'));
    initViewportObserver();
  } else if (layout === 'story') {
    initStoryLayout();
  } else if (layout === 'coverflow') {
    initCoverflowLayout();
  } else {
    // Make sure we un-hide everything if falling back to static formats
    document.querySelectorAll('#demoSuperList .sl-item').forEach(item => {
      item.classList.add('is-visible');
    });
  }
}

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
  initViewportObserver();
});
</script>
