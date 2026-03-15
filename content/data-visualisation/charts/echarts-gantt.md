---
title: "Gantt Chart (Custom Series)"
description: "A demonstration of a project timeline Gantt chart built using the Apache ECharts Custom Series api."
image: "/images/charts/echarts-gantt.png"
tags: ["Gantt", "Timeline", "Custom"]
---
# Gantt Chart (Custom Series)

This example demonstrates how to leverage ECharts' powerful `custom` series to build a fully functional Gantt chart. Using a custom `renderItem` function along an X-axis `time` scale, we can render precise task durations, overlap tasks on the same row, and map the visuals directly to Aurora's design tokens.

{{< demo >}}
<div class="aurora-chart-container" style="height: 400px; width: 100%;">
  <div data-component="aurora-chart">
    <script type="application/json" data-ref="config">
{
  "tooltip": {
    "formatter": "$(function() { return function (params) { return params.marker + params.name + ': ' + params.value[3] + ' days'; }; })()$"
  },
  "grid": {
    "left": "3%",
    "right": "4%",
    "bottom": "3%",
    "containLabel": true
  },
  "xAxis": {
    "type": "time",
    "axisLine": { "show": true },
    "splitLine": { "show": false }
  },
  "yAxis": {
    "type": "category",
    "data": [
      "Launch",
      "QA & Polish",
      "Development",
      "Prototyping",
      "Discovery"
    ],
    "axisTick": {
      "alignWithLabel": true
    }
  },
  "series": [
    {
      "type": "custom",
      "renderItem": "$(function() { return function (params, api) { var categoryIndex = api.value(0); var start = api.coord([api.value(1), categoryIndex]); var end = api.coord([api.value(2), categoryIndex]); var height = api.size([0, 1])[1] * 0.5; var rectShape = echarts.graphic.clipRectByRect({ x: start[0], y: start[1] - height / 2, width: Math.max(end[0] - start[0], 2), height: height }, { x: params.coordSys.x, y: params.coordSys.y, width: params.coordSys.width, height: params.coordSys.height }); return rectShape && { type: 'rect', transition: ['shape'], shape: rectShape, style: api.style() }; }; })()$",
      "itemStyle": {
        "opacity": 0.9,
        "borderRadius": 4
      },
      "encode": {
        "x": [1, 2],
        "y": 0,
        "tooltip": [1, 2]
      },
      "data": [
        {
          "name": "Phase 1: Discovery",
          "value": [4, "2026-03-01", "2026-03-10", 9],
          "itemStyle": { "color": "var(--ds-chart-1)" }
        },
        {
          "name": "Phase 2: Prototyping",
          "value": [3, "2026-03-08", "2026-03-24", 16],
          "itemStyle": { "color": "var(--ds-chart-2)" }
        },
        {
          "name": "Phase 3: Development",
          "value": [2, "2026-03-20", "2026-04-15", 26],
          "itemStyle": { "color": "var(--ds-chart-3)" }
        },
        {
          "name": "Phase 4: QA & Testing",
          "value": [1, "2026-04-10", "2026-04-25", 15],
          "itemStyle": { "color": "var(--ds-chart-4)" }
        },
        {
          "name": "Phase 5: Launch Prep",
          "value": [0, "2026-04-22", "2026-04-30", 8],
          "itemStyle": { "color": "var(--ds-sys-color-success)" }
        }
      ]
    }
  ]
}
    </script>
  </div>
</div>
{{< /demo >}}

### Implementation Details

1. **Custom Renderer:** The `renderItem` property is evaluated dynamically by our chart wrapper. We use `echarts.graphic.clipRectByRect` to draw standard rounded rectangles stretching from the start date `api.value(1)` to the end date `api.value(2)`.
2. **Category Mapping:** Because our Y-axis relies on category indices, the very first index in `value[]` defines which row the bar prints on.
3. **Aurora Token Colors:** The custom series directly receives tokenized colors (`var(--ds-chart-1)`, etc.) to match the brand palette accurately under both light and dark modes.

