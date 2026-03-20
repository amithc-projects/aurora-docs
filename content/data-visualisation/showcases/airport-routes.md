---
title: "Global Airports & Routes"
description: "Interactive visualization of 7,000+ global air terminals and their direct flight vectors."
menu:
  main:
    parent: "data-visualisation"
    name: "Airport Mapping"
    weight: 15
categories: ["Map", "Scatter", "Interactive"]
tags: ["Map", "Interactive", "Scatter", "Lines"]
---

<style>
  .airport-header {
    margin-bottom: var(--ds-spacing-6);
  }
  .query-wrapper {
    display: flex;
    gap: var(--ds-spacing-3);
    margin-bottom: var(--ds-spacing-4);
  }
  .search-input {
    flex-grow: 1;
    padding: var(--ds-spacing-3) var(--ds-spacing-4);
    border: 1px solid var(--ds-sys-color-outline);
    border-radius: var(--ds-radius-md);
    background-color: var(--ds-sys-color-surface-container);
    color: var(--ds-sys-color-on-surface);
    font-size: var(--ds-typography-body-large-font-size);
  }
  .search-input:focus {
    outline: none;
    border-color: var(--ds-sys-color-primary);
    box-shadow: 0 0 0 2px var(--ds-sys-color-primary-container);
  }
  .stat-card {
    background-color: var(--ds-sys-color-surface-container-low);
    border: 1px solid var(--ds-sys-color-outline-variant);
    border-radius: var(--ds-radius-lg);
    padding: var(--ds-spacing-4);
    margin-top: var(--ds-spacing-4);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .stat-label {
    text-transform: uppercase;
    font-size: var(--ds-typography-label-medium-font-size);
    font-weight: 700;
    color: var(--ds-sys-color-on-surface-variant);
    letter-spacing: 0.05em;
  }
  .stat-value {
    font-size: var(--ds-typography-headline-small-font-size);
    font-weight: 300;
    color: var(--ds-sys-color-primary);
  }
  
  #hud-origin {
    color: var(--ds-sys-color-on-surface);
    font-weight: 600;
  }
  
  /* Modal Styles */
  .flight-modal-backdrop {
    display: none;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(4px);
    z-index: 9999;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  .flight-modal-backdrop.active {
    display: flex;
    opacity: 1;
  }
  .flight-modal {
    background: var(--ds-sys-color-surface);
    border: 1px solid var(--ds-sys-color-outline-variant);
    border-radius: var(--ds-radius-xl);
    width: 90%;
    max-width: 400px;
    padding: var(--ds-spacing-6);
    box-shadow: var(--ds-elevation-3);
    transform: translateY(20px);
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .flight-modal-backdrop.active .flight-modal {
    transform: translateY(0);
  }
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--ds-spacing-4);
    border-bottom: 1px solid var(--ds-sys-color-surface-variant);
    padding-bottom: var(--ds-spacing-3);
  }
  .modal-title {
    font-size: var(--ds-typography-title-large-font-size);
    font-weight: 700;
    color: var(--ds-sys-color-on-surface);
  }
  .close-btn {
    background: none; border: none; font-size: 1.5rem; cursor: pointer;
    color: var(--ds-sys-color-on-surface-variant);
    line-height: 1; padding: 0.25rem;
  }
  .close-btn:hover { color: var(--ds-sys-color-error); }
  
  .flight-stat {
    margin-bottom: var(--ds-spacing-3);
    display: flex; justify-content: space-between;
  }
  .f-label {
    color: var(--ds-sys-color-on-surface-variant);
    font-size: var(--ds-typography-body-medium-font-size);
  }
  .f-val {
    color: var(--ds-sys-color-on-surface);
    font-weight: 600;
  }
  .carriers-list {
    margin-top: var(--ds-spacing-2);
    display: flex; flex-wrap: wrap; gap: var(--ds-spacing-2);
  }
  .carrier-tag {
    background: var(--ds-sys-color-secondary-container);
    color: var(--ds-sys-color-on-secondary-container);
    padding: 0 var(--ds-spacing-2);
    border-radius: var(--ds-radius-sm);
    font-size: var(--ds-typography-label-small-font-size);
    line-height: 1.5;
  }
</style>

<div class="airport-header">
  <h2>Global Flight Vector Tracker</h2>
  <p>Search over 7,000 global terminals by Name, IATA Code, or Country. Tap any airport node to immediately map curved spline links to its outbound direct-flight destinations.</p>
</div>

<div class="query-wrapper">
  <input type="text" id="airport-search" class="search-input" placeholder="Highlight Map (e.g. Heathrow)" aria-label="Search Airports" style="flex: 1" />
  <button id="reset-itinerary-btn" style="flex: 0 0 auto; padding: 0 1.5rem; background: var(--ds-sys-color-error, #f43f5e); color: white; border: none; border-radius: var(--ds-radius-md); font-weight: 600; cursor: pointer;">Reset Journey</button>
</div>

<!-- Multi-Stop Journey Planner -->
<div id="itinerary-builder" style="background: var(--ds-sys-color-surface-container-lowest); border: 1px solid var(--ds-sys-color-outline-variant); border-radius: var(--ds-radius-lg); padding: var(--ds-spacing-4); margin-bottom: var(--ds-spacing-6);">
  <h3 style="margin-top: 0; margin-bottom: var(--ds-spacing-3); display: flex; align-items: center; gap: 8px;">
    <span class="material-symbols-outlined" style="color: var(--ds-sys-color-primary);">map</span> Multi-Stop Journey Planner
  </h3>
  <div id="itinerary-stops" style="display: flex; flex-direction: column; gap: var(--ds-spacing-3);">
     <!-- JS Iterative State Machine Injects Combo Boxes Here -->
  </div>
</div>

<div class="chart-wrapper">
    <div 
        id="airport-map"
        data-component="aurora-chart" 
        data-map="world"
        data-theme-aware="true"
        style="width: 100%; min-height: 600px; height: 75vh;"
    ></div>
</div>

<div class="stat-card">
    <div>
        <div class="stat-label">Terminals Indexed</div>
        <div class="stat-value" id="airport-count">Loading Payload...</div>
    </div>
    <div style="text-align: right;">
        <div class="stat-label">Selected Origin</div>
        <div class="stat-value" id="hud-origin">None Selected</div>
        <div class="stat-label" style="font-size: 0.75rem; margin-top: 4px;" id="hud-routes">Awaiting selection</div>
    </div>
</div>



<div class="flight-modal-backdrop" id="flight-modal-backdrop">
  <div class="flight-modal">
    <div class="modal-header">
      <div class="modal-title" id="fm-title">Flight Details</div>
      <button class="close-btn" id="fm-close">&times;</button>
    </div>
    
    <div class="flight-stat">
      <span class="f-label">Distance</span>
      <span class="f-val" id="fm-distance">-- km</span>
    </div>
    
    <div class="flight-stat">
      <span class="f-label">Est. Duration</span>
      <span class="f-val" id="fm-duration">-- min</span>
    </div>
    
    <div style="margin-top: var(--ds-spacing-4);">
      <span class="f-label" style="display:block; margin-bottom:var(--ds-spacing-2);">Operating Carriers</span>
      <div class="carriers-list" id="fm-carriers">
         <!-- Tags injected here -->
      </div>
    </div>
  </div>
</div>

<script type="module" src="/aurora-docs/js/components/airport-routes.js?v=2"></script>
