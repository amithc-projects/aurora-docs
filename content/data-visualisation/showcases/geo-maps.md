---
title: "Geo & Map Visualisation"
description: "Demonstration of spatial data architectures using ECharts GeoJSON topologies for dashboards."
menu:
  main:
    parent: "data-visualisation"
    weight: 30
---

# Geo & Map Visualisation

Aurora supports native geographic projection through Apache ECharts. Rather than loading heavy external mapping libraries like Leaflet or Mapbox for simple data overlays, you can use raw GeoJSON topologies directly within the ECharts canvas.

This provides seamless integration with your existing thematic tokens (`var(--ds-chart-*)`), tooltips, and interactive legends, while maintaining an extremely lightweight footprint suitable for dense dashboard grids.

---

> **Note on Map Data:** ECharts no longer bundles map data directly. To render maps, you must register a loaded GeoJSON file using `echarts.registerMap('world', geoJsonString)`. In these demonstrations, we assume a global `world` topology has been registered by the `aurora-charts.js` controller.

---

## 1. Global Metric Scatter
Useful for displaying concentrated activity across regions, such as user density or server locations.

{{< demo >}}
<div class="l-page-grid" style="width: 100%;">
  <div class="col-wide" style="width: 100%;">
    <div class="aurora-chart-container" style="height: 500px; width: 100%;">
      <div data-component="aurora-chart" data-map="world">
        <!-- The component wrapper will fetch world.json and register it if data-map="world" is present -->
        <script type="application/json" data-ref="config">
        {
          "backgroundColor": "transparent",
          "tooltip": {
            "trigger": "item",
            "backgroundColor": "var(--ds-sys-color-surface)",
            "borderColor": "var(--ds-sys-color-border)",
            "textStyle": { "color": "var(--ds-sys-color-on-surface)" }
          },
          "geo": {
            "map": "world",
            "roam": true,
            "itemStyle": {
              "areaColor": "var(--ds-sys-color-surface-container-high)",
              "borderColor": "var(--ds-sys-color-border)"
            },
            "emphasis": {
              "itemStyle": {
                "areaColor": "var(--ds-sys-color-surface-container-highest)"
              },
              "label": { "show": false }
            }
          },
          "series": [
            {
              "name": "Datacenters",
              "type": "scatter",
              "coordinateSystem": "geo",
              "data": [
                { "name": "New York", "value": [-74.0059, 40.7128, 150] },
                { "name": "London", "value": [-0.1278, 51.5074, 120] },
                { "name": "Tokyo", "value": [139.6917, 35.6895, 200] },
                { "name": "Sydney", "value": [151.2093, -33.8688, 80] },
                { "name": "São Paulo", "value": [-46.6333, -23.5505, 90] }
              ],
              "symbolSize": 12,
              "itemStyle": {
                "color": "var(--ds-chart-1)",
                "shadowBlur": 10,
                "shadowColor": "var(--ds-chart-1)"
              }
            },
            {
              "name": "High Traffic",
              "type": "effectScatter",
              "coordinateSystem": "geo",
              "data": [
                { "name": "Tokyo", "value": [139.6917, 35.6895, 200] },
                { "name": "New York", "value": [-74.0059, 40.7128, 150] }
              ],
              "symbolSize": 20,
              "showEffectOn": "render",
              "rippleEffect": {
                "brushType": "stroke"
              },
              "itemStyle": {
                "color": "var(--ds-sys-color-error)",
                "shadowBlur": 10,
                "shadowColor": "var(--ds-sys-color-error)"
              },
              "zlevel": 1
            }
          ]
        }
        </script>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}

---

## 2. Air Routing / Directed Lines
Useful for visualizing network packets, supply chains, or physical transit paths.

{{< demo >}}
<div class="l-page-grid" style="width: 100%;">
  <div class="col-wide" style="width: 100%;">
    <div class="aurora-chart-container" style="height: 500px; width: 100%;">
      <div data-component="aurora-chart" data-map="world">
        <script type="application/json" data-ref="config">
        {
          "backgroundColor": "transparent",
          "tooltip": {
            "trigger": "item",
            "backgroundColor": "var(--ds-sys-color-surface)",
            "borderColor": "var(--ds-sys-color-border)",
            "textStyle": { "color": "var(--ds-sys-color-on-surface)" },
            "formatter": "{b}"
          },
          "geo": {
            "map": "world",
            "roam": true,
            "itemStyle": {
              "areaColor": "var(--ds-sys-color-surface-container)",
              "borderColor": "var(--ds-sys-color-border)",
              "borderWidth": 0.5
            },
            "emphasis": {
              "itemStyle": {
                "areaColor": "var(--ds-sys-color-surface-container-high)"
              },
              "label": { "show": false }
            }
          },
          "series": [
            {
              "name": "Hubs",
              "type": "scatter",
              "coordinateSystem": "geo",
              "zlevel": 2,
              "data": [
                { "name": "Frankfurt", "value": [8.6821, 50.1109] },
                { "name": "Singapore", "value": [103.8198, 1.3521] },
                { "name": "San Francisco", "value": [-122.4194, 37.7749] }
              ],
              "symbolSize": 8,
              "itemStyle": { "color": "var(--ds-chart-4)" }
            },
            {
              "name": "Routes",
              "type": "lines",
              "zlevel": 1,
              "effect": {
                "show": true,
                "period": 4,
                "trailLength": 0.3,
                "color": "var(--ds-chart-2)",
                "symbolSize": 4
              },
              "lineStyle": {
                "color": "var(--ds-chart-3)",
                "width": 1,
                "opacity": 0.3,
                "curveness": 0.3
              },
              "data": [
                 { "coords": [[-122.4194, 37.7749], [8.6821, 50.1109]], "value": 90 },
                 { "coords": [[8.6821, 50.1109], [103.8198, 1.3521]], "value": 80 },
                 { "coords": [[103.8198, 1.3521], [-122.4194, 37.7749]], "value": 70 }
              ]
            }
          ]
        }
        </script>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}
