---
title: "SaaS Analytics Dashboard"
description: "A high-density general SaaS dashboard built entirely with Aurora UI components and Aurora ECharts integratons."
layout: "single"
menu:
  main:
    parent: "saas"
---

# SaaS Analytics Dashboard

This page demonstrates a production-grade analytic interface integrating complex ECharts panels within Aurora's overarching component and grid systems.

> **Note:** To achieve realistic density, this documentation page uses raw HTML wrappers (`.l-dashboard-grid`, `.aurora-card`) rather than constrained Markdown containers.

{{< demo >}}
<style>
  .l-dashboard-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: var(--ds-sys-spacing-4);
    width: 100%;
    margin-top: var(--ds-sys-spacing-4);
  }
  .panel {
    background: var(--ds-sys-color-surface);
    border: 1px solid var(--ds-sys-color-border);
    border-radius: var(--ds-sys-shape-corner-medium);
    padding: var(--ds-sys-spacing-4);
  }
  .panel-kpi { grid-column: span 3; }
  .panel-main { grid-column: span 8; height: 400px; }
  .panel-side { grid-column: span 4; height: 400px; }
  .panel-half { grid-column: span 6; height: 350px; }
  .panel-full { grid-column: span 12; height: 300px; }
  
  .panel h3 { margin-top: 0; font-size: 1rem; color: var(--ds-sys-color-on-surface-variant); }
  .kpi-value { font-size: 2rem; font-weight: bold; margin: var(--ds-sys-spacing-2) 0; }
  .kpi-delta.positive { color: var(--ds-sys-color-success); }
  .kpi-delta.negative { color: var(--ds-sys-color-error); }
</style>

<div class="l-dashboard-grid">
  <!-- Top Row KPIs -->
  <div class="panel panel-kpi">
    <h3>Total Revenue</h3>
    <div class="kpi-value">$2,450,210</div>
    <div class="kpi-delta positive">▲ 14.5% vs last month</div>
  </div>
  <div class="panel panel-kpi">
    <h3>Active Users</h3>
    <div class="kpi-value">124k</div>
    <div class="kpi-delta positive">▲ 2.1% vs last month</div>
  </div>
  <div class="panel panel-kpi">
    <h3>Error Rate</h3>
    <div class="kpi-value">0.05%</div>
    <div class="kpi-delta negative">▼ 0.01% vs last month</div>
  </div>
  <div class="panel panel-kpi">
    <h3>Avg. Latency</h3>
    <div class="kpi-value">124ms</div>
    <div class="kpi-delta positive">▲ 5ms vs last month</div>
  </div>

  <!-- Main Time Series -->
  <div class="panel panel-main">
    <h3>Traffic Overview</h3>
    <div class="aurora-chart-container" style="height: 350px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
          {
            "tooltip": {"trigger":"axis"},
            "grid": {"top":"10%","bottom":"10%","left":"5%","right":"5%"},
            "xAxis": {"type":"category", "boundaryGap":false, "data":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},
            "yAxis": {"type":"value"},
            "series": [
              {"name":"Requests","type":"line","data":[820,932,901,934,1290,1330,1320],"areaStyle":{"opacity":0.3},"itemStyle":{"color":"var(--ds-chart-1)"},"smooth":true},
              {"name":"Responses","type":"line","data":[720,832,801,834,1190,1230,1220],"areaStyle":{"opacity":0.3},"itemStyle":{"color":"var(--ds-chart-2)"},"smooth":true}
            ]
          }
        </script>
      </div>
    </div>
  </div>

  <!-- Side Donut -->
  <div class="panel panel-side">
    <h3>Traffic by Region</h3>
    <div class="aurora-chart-container" style="height: 350px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
          {
            "tooltip": {"trigger":"item"},
            "series": [{"name":"Region","type":"pie","radius":["40%","70%"],"data":[{"value":1048,"name":"NA","itemStyle":{"color":"var(--ds-chart-1)"}},{"value":735,"name":"EU","itemStyle":{"color":"var(--ds-chart-2)"}},{"value":580,"name":"APAC","itemStyle":{"color":"var(--ds-chart-3)"}}]}]
          }
        </script>
      </div>
    </div>
  </div>

  <!-- Bottom Row 1 -->
  <div class="panel panel-half">
    <h3>Segment Distribution</h3>
    <div class="aurora-chart-container" style="height: 300px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
          {
            "tooltip": {"trigger":"axis"},
            "grid": {"top":"10%","bottom":"10%","left":"10%","right":"10%"},
            "xAxis": {"type":"value"},
            "yAxis": {"type":"category", "data":["Q1","Q2","Q3","Q4"]},
            "series": [
              {"name":"Enterprise","type":"bar","stack":"total","data":[320,302,301,334],"itemStyle":{"color":"var(--ds-chart-1)"}},
              {"name":"SMB","type":"bar","stack":"total","data":[120,132,101,134],"itemStyle":{"color":"var(--ds-chart-3)"}}
            ]
          }
        </script>
      </div>
    </div>
  </div>

  <!-- Bottom Row 2 -->
  <div class="panel panel-half">
    <h3>Weekly Incidents</h3>
    <div class="aurora-chart-container" style="height: 300px; width: 100%;">
      <div data-component="aurora-chart">
        <script type="application/json" data-ref="config">
          {
            "visualMap": {"show":false,"min":0,"max":10},
            "calendar": {"range":"2024-01", "left":"center", "top":"middle", "cellSize": [25, 25]},
            "series": {"type":"heatmap","coordinateSystem":"calendar","data":[["2024-01-01",5],["2024-01-04",10],["2024-01-08",2]]}
          }
        </script>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}
