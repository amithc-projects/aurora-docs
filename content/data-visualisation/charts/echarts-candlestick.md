---
title: "Basic Candlestick"
description: "A demonstration of the Basic Candlestick from Apache ECharts."
image: "/images/charts/echarts-candlestick.png"
tags: ["Advanced"]
---
# Basic Candlestick

This is an automatically generated example of the **Basic Candlestick** type, extending the `[data-component="aurora-chart"]` wrapper.

{{< demo >}}
<div class="aurora-chart-container" style="height: 500px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
  "xAxis": {
    "data": [
      "2017-10-24",
      "2017-10-25",
      "2017-10-26",
      "2017-10-27"
    ]
  },
  "yAxis": {},
  "series": [
    {
      "type": "candlestick",
      "data": [
        [
          20,
          34,
          10,
          38
        ],
        [
          40,
          35,
          30,
          50
        ],
        [
          31,
          38,
          33,
          44
        ],
        [
          38,
          15,
          5,
          42
        ]
      ]
    }
  ]
}
    </script>
  </div>
</div>
{{< /demo >}}
