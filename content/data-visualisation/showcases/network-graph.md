---
title: "Network Graphs"
description: "Visualizing complex interconnected data with ECharts force-directed graph layouts."
image: "/images/charts/echarts-network.png"
tags: ["Network", "Graph", "Nodes", "Edges", "Connections", "Force Layout"]
menu:
  main:
    parent: "data-visualisation"
    weight: 27
---

The **Network Graph** component uses ECharts' powerful `graph` series to visualize complex webs of relationships. 
By utilizing the `force` layout, the nodes automatically repel each other while the edges pull them together, creating an organic, dynamic structure that reveals clusters and central hubs computationally.

<link rel="stylesheet" href="/aurora-docs/css/components/network-chart.css">

### Global Airport Network (Top 250 Hubs)
This demonstration visualizes the 250 most hyper-connected airports globally and the ~8,000 flight routes connecting them. 
*   **Node Size** represents the airport's overall degree of connectivity.
*   **Colors** indicate geographical continents.
*   **Interactivity:** You can drag nodes to snap the physical simulation, and use the mouse wheel to zoom/pan (`roam: true`).

{{< demo >}}
<div class="aurora-network-chart-wrapper">
    <div id="loading-indicator" class="aurora-loading">Simulating Physics Model...</div>
    <div id="airport-network-demo" class="aurora-network-chart-canvas"></div>
</div>
{{< /demo >}}

<script type="module">
import * as echarts from 'https://esm.sh/echarts/core';
import { GraphChart } from 'https://esm.sh/echarts/charts';
import { TooltipComponent, LegendComponent } from 'https://esm.sh/echarts/components';
import { CanvasRenderer } from 'https://esm.sh/echarts/renderers';

echarts.use([GraphChart, TooltipComponent, LegendComponent, CanvasRenderer]);

function cssVar(name, defaultVal = '#888888') {
  let val = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  if (val) return val;
  val = getComputedStyle(document.body).getPropertyValue(name).trim();
  if (val) return val;
  return defaultVal;
}

function getPalette() {
  return [
      cssVar('--ds-sys-color-primary-base', '#6366f1'),
      cssVar('--ds-sys-color-secondary-base', '#ec4899'),
      cssVar('--ds-sys-color-tertiary-base', '#14b8a6'),
      cssVar('--ds-sys-color-warning-base', '#f59e0b'),
      cssVar('--ds-sys-color-error-base', '#ef4444'),
      cssVar('--ds-sys-color-success-base', '#10b981'),
      cssVar('--ds-sys-color-info-base', '#3b82f6'),
      cssVar('--ds-sys-color-neutral-60', '#9ca3af')
  ];
}

async function renderNetworkChart() {
  const container = document.getElementById('airport-network-demo');
  const loading = document.getElementById('loading-indicator');
  if (!container) return;

  const chart = echarts.init(container, null, { renderer: 'canvas' });
  const palette = getPalette();

  try {
      const response = await fetch('/aurora-docs/data/airport_network.json');
      const data = await response.json();
      
      loading.style.display = 'none';

      chart.setOption({
          color: palette,
          tooltip: {
              formatter: function (params) {
                  if (params.dataType === 'node') {
                      return `<b>${params.data.name} (${params.data.id})</b><br/>
                              Continent: ${params.data.category}<br/>
                              Connections: ${params.data.value}`;
                  }
                  return null; // hide tooltip for edges to reduce noise
              }
          },
          legend: {
              data: data.categories.map(c => c.name),
              textStyle: { color: cssVar('--ds-sys-color-on-surface', '#111827'), fontFamily: 'var(--font-primary)' },
              bottom: 10
          },
          animationDurationUpdate: 1500,
          animationEasingUpdate: 'quinticInOut',
          series: [
              {
                  type: 'graph',
                  layout: 'force',
                  data: data.nodes,
                  links: data.edges,
                  categories: data.categories,
                  roam: true, // allows zoom and pan
                  draggable: true,
                  label: {
                      position: 'right',
                      formatter: '{b}'
                  },
                  lineStyle: {
                      color: 'source',
                      curveness: 0.1,
                      opacity: 0.2, // Very low opacity because 8000 lines is dense
                      width: 0.5
                  },
                  itemStyle: {
                      borderColor: cssVar('--ds-sys-color-surface', '#ffffff'),
                      borderWidth: 1
                  },
                  emphasis: {
                      focus: 'adjacency', // Highlights connected nodes on hover
                      lineStyle: {
                          width: 2,
                          opacity: 0.8
                      }
                  },
                  force: {
                      repulsion: 150,    // Push nodes apart
                      gravity: 0.1,      // Pull them to center
                      edgeLength: 30     // Desired resting distance of links
                  }
              }
          ]
      });

      // Handle window resize
      window.addEventListener('resize', () => chart.resize());

      // Handle Dark/Light Mode Swap
      new MutationObserver(() => {
          const newPalette = getPalette();
          chart.setOption({
              color: newPalette,
              legend: { textStyle: { color: cssVar('--ds-sys-color-on-surface') }}
          });
      }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'data-mode'] });

  } catch (err) {
      console.error("Failed to load network data:", err);
      loading.innerText = 'Failed to fetch network data.';
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderNetworkChart);
} else {
  renderNetworkChart();
}
</script>
