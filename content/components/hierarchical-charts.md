---
title: "Hierarchical Charts"
description: "Visualize complex, nested, or sequential data structures effortlessly using Apache ECharts."
date: 2025-02-27
category: "Components"
menu:
  main:
    parent: "components"
    weight: 72
---

# Hierarchical Charts

In addition to standard visual graphing, the `aurora-chart` component natively supports highly interactive hierarchical structures like Treemaps, Sunbursts, and Funnels. 
All of these are incredibly lightweight because the Native ES Module safely tree-shakes any properties we do not use in production.

## Treemap Chart
Treemaps display hierarchical data as a set of nested rectangles. Each branch of the tree is given a rectangle, which is then tiled with smaller rectangles representing sub-branches.

{{< demo >}}
<div class="aurora-chart-container" style="height: 400px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
        "tooltip": { "trigger": "item" },
        "series": [
          {
            "type": "treemap",
            "data": [
              {
                "name": "Frontend",
                "value": 40,
                "itemStyle": { "color": "var(--ds-chart-1)" },
                "children": [
                  { "name": "React", "value": 25 },
                  { "name": "Vue", "value": 15 }
                ]
              },
              {
                "name": "Backend",
                "value": 30,
                "itemStyle": { "color": "var(--ds-chart-2)" },
                "children": [
                  { "name": "Node.js", "value": 20 },
                  { "name": "Python", "value": 10 }
                ]
              },
              {
                "name": "DevOps",
                "value": 20,
                "itemStyle": { "color": "var(--ds-chart-3)" }
              }
            ]
          }
        ]
      }
    </script>
  </div>
</div>
{{< /demo >}}

## Sunburst Chart
A Sunburst Chart is excellent for displaying hierarchical data radially. Each level of the hierarchy is represented by one ring or circle with the innermost circle as the root. You can interactively click on a node to zoom into its children natively!

{{< demo >}}
<div class="aurora-chart-container" style="height: 400px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
        "series": {
          "type": "sunburst",
          "data": [
            {
              "name": "North America",
              "itemStyle": { "color": "var(--ds-chart-4)" },
              "children": [
                {
                  "name": "US",
                  "value": 15,
                  "itemStyle": { "color": "color-mix(in srgb, var(--ds-chart-4) 70%, transparent)" }
                },
                {
                  "name": "Canada",
                  "value": 4,
                  "itemStyle": { "color": "color-mix(in srgb, var(--ds-chart-4) 50%, transparent)" }
                }
              ]
            },
            {
              "name": "Europe",
              "itemStyle": { "color": "var(--ds-chart-5)" },
              "children": [
                {
                  "name": "UK",
                  "value": 10,
                  "itemStyle": { "color": "color-mix(in srgb, var(--ds-chart-5) 70%, transparent)" }
                },
                {
                  "name": "Germany",
                  "value": 6,
                  "itemStyle": { "color": "color-mix(in srgb, var(--ds-chart-5) 50%, transparent)" }
                }
              ]
            }
          ],
          "radius": [0, "90%"],
          "label": {
            "rotate": "radial"
          }
        }
      }
    </script>
  </div>
</div>
{{< /demo >}}

## Funnel Chart
Funnel charts are often used to represent stages in a sales process and show the amount of potential revenue for each stage natively descending.

{{< demo >}}
<div class="aurora-chart-container" style="height: 400px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
        "tooltip": { "trigger": "item", "formatter": "{a} <br/>{b} : {c}%" },
        "series": [
          {
            "name": "Sales Funnel",
            "type": "funnel",
            "left": "10%",
            "top": 60,
            "bottom": 60,
            "width": "80%",
            "min": 0,
            "max": 100,
            "minSize": "0%",
            "maxSize": "100%",
            "sort": "descending",
            "gap": 2,
            "label": {
              "show": true,
              "position": "inside"
            },
            "data": [
              { "value": 100, "name": "Impressions", "itemStyle": { "color": "var(--ds-chart-seq-1)" } },
              { "value": 80, "name": "Clicks", "itemStyle": { "color": "var(--ds-chart-seq-2)" } },
              { "value": 60, "name": "Visits", "itemStyle": { "color": "var(--ds-chart-seq-3)" } },
              { "value": 40, "name": "Inquiries", "itemStyle": { "color": "var(--ds-chart-seq-4)" } },
              { "value": 20, "name": "Orders", "itemStyle": { "color": "var(--ds-chart-seq-5)" } }
            ]
          }
        ]
      }
    </script>
  </div>
</div>
{{< /demo >}}
