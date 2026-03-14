---
title: "Logistics Dashboard"
description: "A geospatial dashboard highlighting mapping and scatter chart capabilities."
layout: "single"
menu:
  main:
    parent: "saas"
---

# Logistics & Routing Dashboard

This archetype leverages Cartesian grids configured to display spatial data, simulating a logistics or fleet tracking interface.

{{< demo >}}
<style>
  .l-dashboard-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: var(--ds-sys-spacing-4); width: 100%; margin-top: var(--ds-sys-spacing-4); }
  .panel { background: var(--ds-sys-color-surface); border: 1px solid var(--ds-sys-color-border); border-radius: var(--ds-sys-shape-corner-medium); padding: var(--ds-sys-spacing-4); }
  .panel-main { grid-column: span 8; height: 500px; }
  .panel-side { grid-column: span 4; height: 500px; display: flex; flex-direction: column; gap: var(--ds-sys-spacing-4); }
  .panel-side .sub-panel { flex: 1; border: 1px solid var(--ds-sys-color-border); border-radius: var(--ds-sys-shape-corner-medium); padding: var(--ds-sys-spacing-3); }
  .panel h3 { margin-top: 0; font-size: 1rem; color: var(--ds-sys-color-on-surface-variant); }
</style>

<div class="l-dashboard-grid">
  <!-- Main Map Simulation (using Scatter on Cartesian for demo purposes without external GeoJSON dependencies) -->
  <div class="panel panel-main">
    <h3>Active Fleet Locations (Cartesian Sim)</h3>
    <div class="aurora-chart-container" style="height: 450px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
          {
            "tooltip": {"trigger": "item"},
            "grid": {"top": "5%", "bottom": "5%", "left": "5%", "right": "5%"},
            "xAxis": {"type": "value", "scale": true, "show": false},
            "yAxis": {"type": "value", "scale": true, "show": false},
            "series": [
              {
                "name": "Delivery Vehicles",
                "type": "scatter",
                "symbolSize": 12,
                "itemStyle": {"color": "var(--ds-chart-1)", "opacity": 0.8},
                "data": [[10, 20], [15, 25], [40, 30], [35, 50], [20, 10], [55, 60], [60, 20]]
              },
              {
                "name": "Warehouses",
                "type": "scatter",
                "symbol": "rect",
                "symbolSize": 20,
                "itemStyle": {"color": "var(--ds-sys-color-error)"},
                "data": [[30, 30], [50, 40]]
              }
            ]
          }
        </script>
      </div>
    </div>
  </div>

  <!-- Sidebar metrics -->
  <div class="panel-side">
    <div class="sub-panel">
      <h3>Deliveries Today</h3>
      <div style="font-size: 2rem; font-weight: bold; margin: 10px 0;">4,281</div>
      <div style="height: 100px;">
        <div class="aurora-chart-container" style="height: 100%; width: 100%;">
          <div data-component="aurora-chart">
            <script type="application/json" data-ref="config">
              {
                "grid": {"top": 0, "bottom": 0, "left": 0, "right": 0},
                "xAxis": {"type": "category", "show": false, "data": ["1","2","3","4","5","6","7"]},
                "yAxis": {"type": "value", "show": false},
                "series": [{"type": "line", "smooth": true, "symbol": "none", "areaStyle": {"opacity": 0.2}, "itemStyle": {"color": "var(--ds-sys-color-success)"}, "data": [12, 14, 13, 18, 25, 30, 42]}]
              }
            </script>
          </div>
        </div>
      </div>
    </div>
    
    <div class="sub-panel">
      <h3>Average Transit Time</h3>
      <div style="font-size: 2rem; font-weight: bold; margin: 10px 0;">45 mins</div>
       <div style="height: 100px;">
        <div class="aurora-chart-container" style="height: 100%; width: 100%;">
          <div data-component="aurora-chart">
            <script type="application/json" data-ref="config">
              {
                "grid": {"top": 0, "bottom": 0, "left": 0, "right": 0},
                "xAxis": {"type": "category", "show": false, "data": ["1","2","3","4","5","6","7"]},
                "yAxis": {"type": "value", "show": false, "min": 30},
                "series": [{"type": "line", "smooth": true, "symbol": "none", "areaStyle": {"opacity": 0.2}, "itemStyle": {"color": "var(--ds-sys-color-error)"}, "data": [40, 42, 41, 44, 46, 48, 45]}]
              }
            </script>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
{{< /demo >}}
