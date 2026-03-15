---
title: "Basic Pie Data Proportions"
description: "A demonstration of the Basic Pie Data Proportions from Apache ECharts."
image: "/images/charts/echarts-pie-simple.png"
tags: ["Pie"]
---
# Basic Pie Data Proportions

This is an automatically generated example of the **Basic Pie Data Proportions** type, extending the `[data-component="aurora-chart"]` wrapper.

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
      "radius": "50%",
      "data": [
        {
          "value": 1048,
          "name": "Search Engine"
        },
        {
          "value": 735,
          "name": "Direct"
        },
        {
          "value": 580,
          "name": "Email"
        }
      ]
    }
  ]
}
    </script>
  </div>
</div>
{{< /demo >}}
