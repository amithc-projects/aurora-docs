---
title: "Basic Sankey Diagram (Flows)"
description: "A demonstration of the Basic Sankey Diagram (Flows) from Apache ECharts."
image: "/images/charts/echarts-sankey.png"
tags: ["Relational"]
---
# Basic Sankey Diagram (Flows)

This is an automatically generated example of the **Basic Sankey Diagram (Flows)** type, extending the `[data-component="aurora-chart"]` wrapper.

{{< demo >}}
<div class="aurora-chart-container" style="height: 500px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
  "tooltip": {
    "trigger": "item",
    "triggerOn": "mousemove"
  },
  "series": [
    {
      "type": "sankey",
      "data": [
        {
          "name": "a"
        },
        {
          "name": "b"
        },
        {
          "name": "a1"
        },
        {
          "name": "b1"
        }
      ],
      "links": [
        {
          "source": "a",
          "target": "a1",
          "value": 5
        },
        {
          "source": "b",
          "target": "b1",
          "value": 3
        }
      ]
    }
  ]
}
    </script>
  </div>
</div>
{{< /demo >}}
