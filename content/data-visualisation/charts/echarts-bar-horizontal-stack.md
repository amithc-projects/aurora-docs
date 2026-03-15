---
title: "Stacked Horizontal Bar"
description: "A demonstration of the Stacked Horizontal Bar from Apache ECharts."
image: "/images/charts/echarts-bar-horizontal-stack.png"
tags: ["Bar"]
---
# Stacked Horizontal Bar

This is an automatically generated example of the **Stacked Horizontal Bar** type, extending the `[data-component="aurora-chart"]` wrapper.

{{< demo >}}
<div class="aurora-chart-container" style="height: 500px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
  "tooltip": {
    "trigger": "axis"
  },
  "legend": {},
  "grid": {
    "left": "3%",
    "right": "4%",
    "bottom": "3%",
    "containLabel": true
  },
  "xAxis": {
    "type": "value"
  },
  "yAxis": {
    "type": "category",
    "data": [
      "Mon",
      "Tue",
      "Wed"
    ]
  },
  "series": [
    {
      "name": "Direct",
      "type": "bar",
      "stack": "total",
      "data": [
        320,
        302,
        301
      ]
    },
    {
      "name": "Mail Ad",
      "type": "bar",
      "stack": "total",
      "data": [
        120,
        132,
        101
      ]
    }
  ]
}
    </script>
  </div>
</div>
{{< /demo >}}
