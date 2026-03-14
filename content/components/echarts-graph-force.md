---
title: "Force Layout (Network Graph)"
description: "A demonstration of the Force Layout (Network Graph) from Apache ECharts."
menu:
  main:
    parent: "components"
---
# Force Layout (Network Graph)

This is an automatically generated example of the **Force Layout (Network Graph)** type, extending the `[data-component="aurora-chart"]` wrapper.

{{< demo >}}
<div class="aurora-chart-container" style="height: 500px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
  "tooltip": {},
  "animationDurationUpdate": 1500,
  "animationEasingUpdate": "quinticInOut",
  "series": [
    {
      "type": "graph",
      "layout": "force",
      "roam": true,
      "label": {
        "show": true
      },
      "data": [
        {
          "name": "Node 1"
        },
        {
          "name": "Node 2"
        }
      ],
      "links": [
        {
          "source": "Node 1",
          "target": "Node 2"
        }
      ],
      "force": {
        "edgeLength": 100,
        "repulsion": 1000
      }
    }
  ]
}
    </script>
  </div>
</div>
{{< /demo >}}
