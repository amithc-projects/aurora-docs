---
title: "Pictorial Bar (Replacing Map)"
description: "A demonstration of the Pictorial Bar (Replacing Map) from Apache ECharts."
menu:
  main:
    parent: "components"
---
# Pictorial Bar (Replacing Map)

This is an automatically generated example of the **Pictorial Bar (Replacing Map)** type, extending the `[data-component="aurora-chart"]` wrapper.

{{< demo >}}
<div class="aurora-chart-container" style="height: 500px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
      {
  "tooltip": {
    "trigger": "item"
  },
  "xAxis": {
    "data": [
      "Reindeer",
      "Sheep",
      "Pig"
    ]
  },
  "yAxis": {
    "splitLine": {
      "show": false
    }
  },
  "series": [
    {
      "type": "pictorialBar",
      "symbol": "path://M0,10 L10,10 L5,0 L0,10 Z",
      "data": [
        123,
        60,
        25
      ]
    }
  ]
}
    </script>
  </div>
</div>
{{< /demo >}}
