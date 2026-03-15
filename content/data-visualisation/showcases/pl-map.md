---
title: "Premier League Stadiums Map"
description: "Interactive geographical visualization of the 2023/2024 Premier League stadiums using custom ECharts Image Markers and distance calculation."
menu:
  main:
    parent: "data-visualisation"
    weight: 40
---

# Premier League Stadiums Map

This advanced ECharts implementation demonstrates how to use external JSON datasets to plot precise geographical points on a map.

It highlights two powerful ECharts features:
1. **Custom Image Markers**: Instead of standard scatter dots or pins, this map dynamically loads the SVG crest of each Premier League club to use as the `symbol`.
2. **Interactive JavaScript Binding**: The chart is bound to a custom Vanilla JS function that listens for `click` events on the markers, drawing a dynamic line between two selected stadiums and calculating the straight-line distance between them using the Haversine formula.

---

<style>
.stadium-hud {
  margin-top: 1rem;
  padding: 1.5rem;
  background: var(--ds-sys-color-surface-container-low);
  border: 1px solid var(--ds-sys-color-border);
  border-radius: var(--ds-sys-radius-card);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.hud-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: var(--ds-sys-color-on-surface);
}
.hud-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.stadium-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  color: var(--ds-sys-color-on-surface-variant);
  font-size: 0.9rem;
}
.distance-display {
  font-size: 2rem;
  font-weight: 700;
  color: var(--ds-sys-color-primary);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.distance-display span {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--ds-sys-color-on-surface-variant);
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>

{{< demo >}}
<div class="l-page-grid" style="width: 100%;">
  <div class="col-wide" style="width: 100%;">
    <div class="aurora-chart-container" style="height: 600px; width: 100%; position: relative;">
      
      <!-- Chart Container -->
      <div id="pl-map-container" data-component="aurora-chart" data-map="world" style="height: 100%; width: 100%;">
        <!-- We will initialize this manually via a custom script block rather than inline JSON so we can bind complex click events -->
      </div>
      
    </div>

    <!-- Interactive HUD Tool -->
    <div class="stadium-hud">
      <h3 class="hud-title">Distance Calculator</h3>
      <div class="hud-content">
        <div class="stadium-info">
          <div><strong style="color: var(--ds-sys-color-on-surface);">Point A: </strong><span id="point-a-text">Select a stadium on the map...</span></div>
          <div><strong style="color: var(--ds-sys-color-on-surface);">Point B: </strong><span id="point-b-text">Select a second stadium...</span></div>
        </div>
        <div class="distance-display">
          <div id="calc-result">--</div>
          <span>Miles</span>
        </div>
      </div>
    </div>

  </div>
</div>

<!-- Load Custom Script to wire up the interactive map -->
<script type="module" src="/aurora-docs/js/components/pl-map.js?v=2"></script>
{{< /demo >}}
