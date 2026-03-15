---
title: "Basic Bar Chart"
description: "A demonstration of the Basic Bar Chart from Apache ECharts."
image: "/images/charts/echarts-bar-simple.png"
tags: ["Bar"]
---
# Basic Bar Chart

This is an automatically generated example of the **Basic Bar Chart** type, extending the `[data-component="aurora-chart"]` wrapper.

{{< demo >}}
<div class="aurora-chart-container" style="height: 500px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
  "tooltip": {
    "trigger": "axis"
  },
  "xAxis": {
    "type": "category",
    "data": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  "yAxis": {
    "type": "value"
  },
  "series": [
    {
      "data": [
        120,
        200,
        150,
        80
      ],
      "type": "bar"
    }
  ]
}
    </script>
  </div>
</div>
{{< /demo >}}
