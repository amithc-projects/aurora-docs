---
title: "Observability Dashboard"
description: "A high-density operations dashboard focused on system health, error rates, and infrastructure metrics."
layout: "single"
menu:
  main:
    parent: "saas"
---

# Observability Dashboard

This operations archetype focuses on real-time infrastructure monitoring. It demonstrates how Aurora's dense grids can elegantly handle high-volume time-series data and heatmaps without visual clutter.

{{< demo >}}
<style>
  .l-dashboard-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: var(--ds-sys-spacing-4); width: 100%; margin-top: var(--ds-sys-spacing-4); }
  .panel { background: var(--ds-sys-color-surface); border: 1px solid var(--ds-sys-color-border); border-radius: var(--ds-sys-shape-corner-medium); padding: var(--ds-sys-spacing-4); }
  .panel-kpi { grid-column: span 3; }
  .panel-main { grid-column: span 12; height: 350px; }
  .panel-half { grid-column: span 6; height: 350px; }
  .panel h3 { margin-top: 0; font-size: 1rem; color: var(--ds-sys-color-on-surface-variant); }
  .kpi-value { font-size: 2rem; font-weight: bold; margin: var(--ds-sys-spacing-2) 0; }
  .kpi-delta.negative { color: var(--ds-sys-color-error); }
  .kpi-delta.neutral { color: var(--ds-sys-color-on-surface-variant); }
</style>

<div class="l-dashboard-grid">
  <!-- KPIs -->
  <div class="panel panel-kpi">
    <h3>System Uptime</h3>
    <div class="kpi-value">99.998%</div>
    <div class="kpi-delta neutral">Target: 99.99%</div>
  </div>
  <div class="panel panel-kpi">
    <h3>Active Incidents</h3>
    <div class="kpi-value" style="color: var(--ds-sys-color-error)">3</div>
    <div class="kpi-delta negative">▲ 2 since yesterday</div>
  </div>
  <div class="panel panel-kpi">
    <h3>Avg Response Time</h3>
    <div class="kpi-value">42ms</div>
    <div class="kpi-delta neutral">P99: 120ms</div>
  </div>
  <div class="panel panel-kpi">
    <h3>Error Rate</h3>
    <div class="kpi-value">0.05%</div>
    <div class="kpi-delta negative">▲ 0.02% 1h</div>
  </div>

  <!-- CPU Load -->
  <div class="panel panel-main">
    <h3>Cluster CPU Load</h3>
    <div class="aurora-chart-container" style="height: 300px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
          {
            "tooltip": {"trigger": "axis"},
            "grid": {"top": "10%", "bottom": "15%", "left": "5%", "right": "5%"},
            "xAxis": {"type": "category", "boundaryGap": false, "data": ["10:00", "10:10", "10:20", "10:30", "10:40", "10:50", "11:00"]},
            "yAxis": {"type": "value", "max": 100},
            "series": [
              {"name": "us-east-1", "type": "line", "data": [45, 52, 65, 85, 92, 45, 50], "itemStyle": {"color": "var(--ds-chart-1)"}, "areaStyle": {"opacity": 0.2}},
              {"name": "eu-west-1", "type": "line", "data": [30, 32, 28, 40, 45, 38, 35], "itemStyle": {"color": "var(--ds-chart-2)"}, "areaStyle": {"opacity": 0.2}}
            ]
          }
        </script>
      </div>
    </div>
  </div>

  <!-- Error Heatmap -->
  <div class="panel panel-half">
    <h3>Error Distribution by Service</h3>
    <div class="aurora-chart-container" style="height: 300px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
          {
            "tooltip": {"position": "top"},
            "grid": {"top": "10%", "bottom": "15%", "left": "15%", "right": "5%"},
            "visualMap": {"min": 0, "max": 100, "calculable": true, "orient": "horizontal", "left": "center", "bottom": "0%", "inRange": { "color": ["var(--ds-sys-color-surface-variant)", "var(--ds-sys-color-error)"] } },
            "xAxis": {"type": "category", "data": ["API", "Auth", "DB", "Cache"]},
            "yAxis": {"type": "category", "data": ["Mon", "Tue", "Wed", "Thu", "Fri"]},
            "series": [{
              "type": "heatmap",
              "data": [[0,0,5],[1,0,2],[2,0,0],[3,0,0],[0,1,12],[1,1,3],[2,1,1],[3,1,0],[0,2,80],[1,2,50],[2,2,10],[3,2,5],[0,3,15],[1,3,4],[2,3,2],[3,3,1],[0,4,8],[1,4,2],[2,4,0],[3,4,0]],
              "label": {"show": true}
            }]
          }
        </script>
      </div>
    </div>
  </div>

  <!-- Request Volume -->
  <div class="panel panel-half">
    <h3>Requests / second</h3>
    <div class="aurora-chart-container" style="height: 300px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
          {
            "tooltip": {"trigger": "axis"},
            "grid": {"top": "10%", "bottom": "15%", "left": "10%", "right": "5%"},
            "xAxis": {"type": "category", "data": ["10:00", "10:15", "10:30", "10:45", "11:00"]},
            "yAxis": {"type": "value"},
            "series": [
              {"name": "2xx", "type": "bar", "stack": "total", "data": [1200, 1350, 1800, 2100, 1400], "itemStyle": {"color": "var(--ds-sys-color-success)"}},
              {"name": "4xx", "type": "bar", "stack": "total", "data": [40, 50, 80, 150, 60], "itemStyle": {"color": "var(--ds-sys-color-warning)"}},
              {"name": "5xx", "type": "bar", "stack": "total", "data": [5, 2, 45, 12, 3], "itemStyle": {"color": "var(--ds-sys-color-error)"}}
            ]
          }
        </script>
      </div>
    </div>
  </div>

</div>
{{< /demo >}}
