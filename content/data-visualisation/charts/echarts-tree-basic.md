---
title: "Tree - Left to Right"
description: "A demonstration of the Tree - Left to Right from Apache ECharts."
image: "/images/charts/echarts-tree-basic.png"
tags: ["Relational"]
---
# Tree - Left to Right

This is an automatically generated example of the **Tree - Left to Right** type, extending the `[data-component="aurora-chart"]` wrapper.

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
      "type": "tree",
      "data": [
        {
          "name": "Root",
          "children": [
            {
              "name": "Child A"
            },
            {
              "name": "Child B"
            }
          ]
        }
      ],
      "left": "2%",
      "right": "2%",
      "top": "8%",
      "bottom": "20%",
      "symbol": "emptyCircle",
      "orient": "LR"
    }
  ]
}
    </script>
  </div>
</div>
{{< /demo >}}
