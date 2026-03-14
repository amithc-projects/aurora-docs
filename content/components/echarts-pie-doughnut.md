---
title: "Doughnut Chart"
description: "A demonstration of the Doughnut Chart from Apache ECharts."
menu:
  main:
    parent: "components"
---
# Doughnut Chart

This is an automatically generated example of the **Doughnut Chart** type, extending the `[data-component="aurora-chart"]` wrapper.

{{< demo >}}
<div class="aurora-chart-container" style="height: 500px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
  "tooltip": {
    "trigger": "item"
  },
  "series": [
    {
      "type": "pie",
      "radius": [
        "40%",
        "70%"
      ],
      "avoidLabelOverlap": false,
      "itemStyle": {
        "borderRadius": 10,
        "borderColor": "#fff",
        "borderWidth": 2
      },
      "label": {
        "show": false,
        "position": "center"
      },
      "labelLine": {
        "show": false
      },
      "data": [
        {
          "value": 1048,
          "name": "Search Engine"
        },
        {
          "value": 735,
          "name": "Direct"
        }
      ]
    }
  ]
}
    </script>
  </div>
</div>
{{< /demo >}}
