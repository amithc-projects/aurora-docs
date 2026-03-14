---
title: "Advanced Charts"
description: "A flexible wrapper for generating dynamic Area, Bubble, Scatter, Radar, and Polar Area charts powered by Chart.js."
category: "Components"
menu:
  main:
    parent: "components-simple"
---

The `Advanced Chart` component provides a generic container that allows you to render any complex data visualization supported by the [Chart.js API](https://www.chartjs.org/docs/latest/). By injecting a JSON configuration directly into the DOM or linking it via an external file, you avoid needing to manually load dependencies or write initialization scripts for every graphic on your site.

## Area Chart
Area charts are based on Line charts (`type: 'line'`) but use the `fill: true` property to shade the space below the dataset. This is highly effective for showing cumulative totals or volume over time.

{{< demo >}}
<div class="advanced-chart" data-component="advanced-chart">
  <script type="application/json" data-ref="config">
    {
      "type": "line",
      "data": {
        "labels": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        "datasets": [
          {
            "label": "Total Subscriptions",
            "data": [65, 120, 250, 480, 800, 1400, 2000],
            "fill": true,
            "borderColor": "var(--ds-chart-1)",
            "backgroundColor": "color-mix(in srgb, var(--ds-chart-1) 20%, transparent)",
            "tension": 0.4
          }
        ]
      },
      "options": {
        "plugins": {
          "legend": { "display": false }
        },
        "scales": {
          "y": { "beginAtZero": true }
        }
      }
    }
  </script>
</div>
{{< /demo >}}

## Scatter Plot
Scatter plots (`type: 'scatter'`) display single data points along an X and Y axis, ideal for analyzing the distribution or correlation between two different variables.

{{< demo >}}
<div class="advanced-chart" data-component="advanced-chart">
  <script type="application/json" data-ref="config">
    {
      "type": "scatter",
      "data": {
        "datasets": [
          {
            "label": "Conversion vs. Bounce Rate",
            "data": [
              {"x": -10, "y": 0}, {"x": 0, "y": 10}, {"x": 10, "y": 5},
              {"x": 0.5, "y": 5.5}, {"x": 40, "y": 80}, {"x": 20, "y": -10},
              {"x": 35, "y": 55}, {"x": -25, "y": -15}, {"x": -15, "y": 20}
            ],
            "backgroundColor": "var(--ds-chart-1)",
            "pointRadius": 6
          }
        ]
      },
      "options": {
        "plugins": {
          "legend": { "display": true }
        }
      }
    }
  </script>
</div>
{{< /demo >}}

## Bubble Chart
A Bubble chart (`type: 'bubble'`) is a variation of a scatter plot where an additional third variable determines the radius (`r`) or the visual size of each data point marker.

{{< demo >}}
<div class="advanced-chart" data-component="advanced-chart">
  <script type="application/json" data-ref="config">
    {
      "type": "bubble",
      "data": {
        "datasets": [
          {
            "label": "Product Performance (Sales, Margin, Market Size)",
            "data": [
              {"x": 20, "y": 30, "r": 15},
              {"x": 40, "y": 10, "r": 10},
              {"x": 15, "y": 55, "r": 25},
              {"x": 60, "y": 80, "r": 35},
              {"x": 80, "y": 45, "r": 8}
            ],
            "backgroundColor": "color-mix(in srgb, var(--ds-chart-1) 40%, transparent)",
            "borderColor": "var(--ds-chart-1)",
            "borderWidth": 1
          }
        ]
      }
    }
  </script>
</div>
{{< /demo >}}

## Radar Chart
Radar charts (`type: 'radar'`), also known as spider charts, map multiple qualitative variables across individual axes radiating from a centralized point. Often used for skill comparisons or multi-metric evaluations.

{{< demo >}}
<div class="advanced-chart" data-component="advanced-chart">
  <script type="application/json" data-ref="config">
    {
      "type": "radar",
      "data": {
        "labels": ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        "datasets": [
          {
            "label": "First Profile",
            "data": [65, 59, 90, 81, 56, 55, 40],
            "fill": true,
            "backgroundColor": "color-mix(in srgb, var(--ds-chart-1) 30%, transparent)",
            "borderColor": "var(--ds-chart-1)",
            "pointBackgroundColor": "var(--ds-chart-1)"
          },
          {
            "label": "Second Profile",
            "data": [28, 48, 40, 19, 96, 27, 100],
            "fill": true,
            "backgroundColor": "color-mix(in srgb, var(--ds-chart-3) 30%, transparent)",
            "borderColor": "var(--ds-chart-3)",
            "pointBackgroundColor": "var(--ds-chart-3)"
          }
        ]
      },
      "options": {
        "elements": {
          "line": { "borderWidth": 3 }
        }
      }
    }
  </script>
</div>
{{< /demo >}}

## Polar Area Chart
A Polar Area chart (`type: 'polarArea'`) resembles a pie chart, but every segment shares the exact same arc angle. The value of the segment determines its radius stretching outward.

{{< demo >}}
<div class="advanced-chart" data-component="advanced-chart">
  <script type="application/json" data-ref="config">
    {
      "type": "polarArea",
      "data": {
        "labels": ["Red", "Green", "Yellow", "Grey", "Blue"],
        "datasets": [
          {
            "label": "System Distribution",
            "data": [11, 16, 7, 3, 14],
            "backgroundColor": [
              "color-mix(in srgb, var(--ds-chart-4) 60%, transparent)",
              "color-mix(in srgb, var(--ds-chart-2) 60%, transparent)",
              "color-mix(in srgb, var(--ds-chart-3) 60%, transparent)",
              "color-mix(in srgb, var(--ds-chart-5) 60%, transparent)",
              "color-mix(in srgb, var(--ds-chart-1) 60%, transparent)"
            ]
          }
        ]
      }
    }
  </script>
</div>
{{< /demo >}}
