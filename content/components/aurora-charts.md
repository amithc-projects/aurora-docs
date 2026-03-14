---
title: "Aurora Charts"
description: "A robust, data-first visualization wrapper utilizing a tree-shaken Apache ECharts ES Module to safely render complex graphs without bloating the application."
date: 2025-02-27
category: "Components"
menu:
  main:
    parent: "components"
    weight: 71
---

# Aurora Charts

The `[data-component="aurora-chart"]` component uses **Apache ECharts** to render highly complex, interactive data visualizations.
Unlike standard heavy Charting libraries, Aurora Charts uses a pure Native ES Module architecture that **tree-shakes** unused elements out of the final browser execution, meaning we get enterprise-level charting power at a tiny footprint (~60-80KB).

Aurora Charts natively supports the primary theme variables (`var(--ds-chart-1)`, etc.) and automatically repaints when switching between **Light and Dark mode**.

## Area Chart (Line with Fill)
An Area Chart is a Line Chart (`type: 'line'`) with the `areaStyle` property defined. This is highly effective for showing cumulative totals or volume over time.

{{< demo >}}
<div class="aurora-chart-container" style="height: 400px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
        "tooltip": { "trigger": "axis" },
        "xAxis": {
          "type": "category",
          "boundaryGap": false,
          "data": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
        },
        "yAxis": { "type": "value" },
        "series": [
          {
            "name": "Revenue",
            "type": "line",
            "data": [65, 120, 250, 480, 800, 1400, 2000],
            "areaStyle": { "opacity": 0.5 },
            "itemStyle": { "color": "var(--ds-chart-1)" },
            "lineStyle": { "width": 3 }
          }
        ]
      }
    </script>
  </div>
</div>
{{< /demo >}}

## Scatter Plot
Scatter plots display single data points along an X and Y axis, ideal for analyzing the distribution or correlation between two different variables.

{{< demo >}}
<div class="aurora-chart-container" style="height: 400px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
        "tooltip": { "trigger": "item", "formatter": "X: {c[0]}<br />Y: {c[1]}" },
        "xAxis": { "type": "value", "name": "Conversion Rate", "nameLocation": "middle", "nameGap": 30 },
        "yAxis": { "type": "value", "name": "Bounce Rate", "nameLocation": "middle", "nameGap": 40 },
        "series": [
          {
            "name": "Metrics",
            "type": "scatter",
            "symbolSize": 10,
            "data": [
              [10, 80], [15, 60], [20, 95], [35, 45], [50, 60],
              [60, 25], [75, 40], [80, 15], [90, 5]
            ],
            "itemStyle": { "color": "var(--ds-chart-1)" }
          }
        ]
      }
    </script>
  </div>
</div>
{{< /demo >}}

## Bubble Chart
A Bubble chart is a variation of a scatter plot where an additional third variable determines the radius (`r`) or the visual size of each data point marker.

{{< demo >}}
<div class="aurora-chart-container" style="height: 400px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
        "tooltip": { "trigger": "item", "formatter": "Budget: {c[0]}<br/>Profit: {c[1]}<br/>Size: {c[2]}" },
        "xAxis": { "type": "value", "name": "Budget", "nameLocation": "middle", "nameGap": 30 },
        "yAxis": { "type": "value", "name": "Profit", "nameLocation": "middle", "nameGap": 40 },
        "series": [
          {
            "name": "Projects",
            "type": "scatter",
            "itemStyle": { "color": "var(--ds-chart-2)", "opacity": 0.7 },
            "symbolSize": "$(function() { return function (data) { return data[2]; }; })()$",
            "data": [
              [20, 30, 15], [40, 10, 25], [25, 50, 30],
              [10, 10, 10], [50, 45, 40], [30, 60, 20]
            ]
          }
        ]
      }
    </script>
  </div>
</div>
{{< /demo >}}

## Radar Chart
Radar charts, also known as spider charts, map multiple qualitative variables across individual axes radiating from a centralized point. Often used for skill comparisons or multi-metric evaluations.

{{< demo >}}
<div class="aurora-chart-container" style="height: 400px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
        "tooltip": {},
        "legend": { "data": ["First Profile", "Second Profile"], "bottom": 0 },
        "radar": {
          "indicator": [
            { "name": "Eating", "max": 100 },
            { "name": "Drinking", "max": 100 },
            { "name": "Sleeping", "max": 100 },
            { "name": "Designing", "max": 100 },
            { "name": "Coding", "max": 100 },
            { "name": "Cycling", "max": 100 },
            { "name": "Running", "max": 100 }
          ]
        },
        "series": [{
          "type": "radar",
          "data": [
            {
              "value": [65, 59, 90, 81, 56, 55, 40],
              "name": "First Profile",
              "itemStyle": { "color": "var(--ds-chart-1)" },
              "areaStyle": { "opacity": 0.4 }
            },
            {
              "value": [28, 48, 40, 19, 96, 27, 100],
              "name": "Second Profile",
              "itemStyle": { "color": "var(--ds-chart-3)" },
              "areaStyle": { "opacity": 0.4 }
            }
          ]
        }]
      }
    </script>
  </div>
</div>
{{< /demo >}}

## Polar Area Chart
A Polar Area chart resembles a pie chart, but every segment shares the exact same arc angle. The value of the segment determines its radius stretching outward.

{{< demo >}}
<div class="aurora-chart-container" style="height: 400px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
        "tooltip": { "trigger": "item" },
        "legend": { "bottom": 0 },
        "angleAxis": { "type": "category", "data": ["Red", "Green", "Yellow", "Grey", "Blue"] },
        "radiusAxis": {},
        "polar": {},
        "series": [
          {
            "type": "bar",
            "data": [
              {"value": 11, "itemStyle": {"color": "var(--ds-chart-4)"}},
              {"value": 16, "itemStyle": {"color": "var(--ds-chart-2)"}},
              {"value": 7, "itemStyle": {"color": "var(--ds-chart-3)"}},
              {"value": 3, "itemStyle": {"color": "var(--ds-sys-color-surface-container-highest)"}},
              {"value": 14, "itemStyle": {"color": "var(--ds-chart-1)"}}
            ],
            "coordinateSystem": "polar",
            "name": "Dataset 1"
          }
        ]
      }
    </script>
  </div>
</div>
{{< /demo >}}
