---
title: "Circular Graph Layout"
description: "A demonstration of the Circular Graph Layout from Apache ECharts."
menu:
  main:
    parent: "components"
---
# Circular Graph Layout

This is an automatically generated example of the **Circular Graph Layout** type, extending the `[data-component="aurora-chart"]` wrapper.

{{< demo >}}
<div class="aurora-chart-container" style="height: 500px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
  "tooltip": {},
  "series": [
    {
      "type": "graph",
      "layout": "circular",
      "roam": true,
      "label": {
        "show": true
      },
      "data": [
        {
          "name": "A"
        },
        {
          "name": "B"
        },
        {
          "name": "C"
        }
      ],
      "links": [
        {
          "source": "A",
          "target": "B"
        },
        {
          "source": "B",
          "target": "C"
        },
        {
          "source": "C",
          "target": "A"
        }
      ]
    }
  ]
}
    </script>
  </div>
</div>
{{< /demo >}}
