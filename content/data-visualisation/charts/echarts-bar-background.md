---
title: "Bar with Background"
description: "A demonstration of the Bar with Background from Apache ECharts."
image: "/images/charts/echarts-bar-background.png"
tags: ["Bar"]
---
# Bar with Background

This is an automatically generated example of the **Bar with Background** type, extending the `[data-component="aurora-chart"]` wrapper.

{{< demo >}}
<div class="aurora-chart-container" style="height: 500px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
  "xAxis": {
    "type": "category",
    "data": [
      "A",
      "B",
      "C"
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
        150
      ],
      "type": "bar",
      "showBackground": true,
      "backgroundStyle": {
        "color": "rgba(180, 180, 180, 0.2)"
      }
    }
  ]
}
    </script>
  </div>
</div>
{{< /demo >}}
