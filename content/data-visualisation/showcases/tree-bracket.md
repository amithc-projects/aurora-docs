---
title: "Hierarchical Trees & Brackets"
description: "A flexible ECharts tree visualization supporting NotebookLM style Mindmaps and scalable Tournament Brackets."
image: "/images/charts/echarts-tree-bracket.png"
tags: ["Tree", "Hierarchy", "Mindmap", "Bracket", "Tournament"]
menu:
  main:
    parent: "data-visualisation"
    weight: 26
---

The **Tree & Bracket** component leverages the versatile ECharts `tree` series to render complex hierarchical data. 
By manipulating the orientation (`orient`), edge styling (`edgeShape`), and root positions, the exact same underlying logic can be used to generate beautiful curved **Mindmaps** or rigid orthogonal **Tournament Brackets**.

<link rel="stylesheet" href="/aurora-docs/css/components/tree-chart.css">

### Variant A: NotebookLM Style Mindmap
This layout mimics a left-to-right discovery map. Nodes are styled as solid dark rounded rectangles (`symbol: 'roundRect'`) with centered text, and connections use a smooth curved spline (`edgeShape: 'curve'`).

{{< demo >}}
<div class="aurora-tree-chart-wrapper">
    <div class="aurora-tree-chart-scroll-area">
        <div id="mindmap-demo" class="aurora-tree-chart-canvas"></div>
    </div>
</div>
{{< /demo >}}

### Variant B: Standard Tournament Bracket (8 Teams)
A unidirectional playoff progression. By setting `orient: 'RL'` (Right to Left), the ultimate single "Winner" (the root node) appears on the right edge, while the 8 absolute leaf nodes (the starting teams) fan out evenly along the left edge. `edgeShape: 'polyline'` forces orthogonal, rigid stepping lines typical of sports brackets. 

{{< demo >}}
<div class="aurora-tree-chart-wrapper">
    <div class="aurora-tree-chart-scroll-area">
        <!-- Slightly wider for proper spacing of 4 layers deep -->
        <div id="bracket-standard-demo" class="aurora-tree-chart-canvas" style="min-width: 900px; height: 500px;"></div>
    </div>
</div>
{{< /demo >}}

### Variant C: Meet-in-the-Middle Bracket (16 Teams)
A championship layout commonly seen in 64-team tournaments (like March Madness), scaled down here for a 16-team display. 
This is achieved by instantiating **two separate tree series** inside the same ECharts canvas:
1. The Left Conference (`orient: 'RL'`) stationed entirely on the left 50% of the grid.
2. The Right Conference (`orient: 'LR'`) stationed entirely on the right 50% of the grid.
3. A centered custom graphic element representing the ultimate Championship Trophy connecting the two Finalists.

{{< demo >}}
<div class="aurora-tree-chart-wrapper">
    <div class="aurora-tree-chart-scroll-area">
        <!-- Wide canvas because we are fitting two intersecting trees -->
        <div id="bracket-center-demo" class="aurora-tree-chart-canvas is-wide" style="height: 600px;"></div>
    </div>
</div>
{{< /demo >}}


<script type="module">
import * as echarts from 'https://esm.sh/echarts/core';
import { TreeChart } from 'https://esm.sh/echarts/charts';
import { TooltipComponent, GraphicComponent } from 'https://esm.sh/echarts/components';
import { CanvasRenderer } from 'https://esm.sh/echarts/renderers';

echarts.use([TreeChart, TooltipComponent, GraphicComponent, CanvasRenderer]);

// Helper to grab live Aurora CSS variables safely for ECharts Canvas
function cssVar(name, defaultVal = '#888888') {
  let val = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  if (val) return val;
  val = getComputedStyle(document.body).getPropertyValue(name).trim();
  if (val) return val;
  return defaultVal;
}

function getPalette() {
  return {
    surface: cssVar('--ds-sys-color-surface'),
    surfaceVariant: cssVar('--ds-sys-color-surface-variant'),
    onSurface: cssVar('--ds-sys-color-on-surface'),
    onSurfaceVar: cssVar('--ds-sys-color-on-surface-variant'),
    border: cssVar('--ds-sys-color-border'),
    primary: cssVar('--ds-sys-color-primary'),
    // specific chart colours
    nodeDark: cssVar('--ds-sys-color-neutral-80', '#374151'),
    nodeLight: cssVar('--ds-sys-color-neutral-10', '#E5E7EB'),
    textColorLight: '#ffffff', // For dark mindmap nodes
    textColorDark: cssVar('--ds-sys-color-neutral-90', '#111827'),
    lineColorPrimary: cssVar('--ds-sys-color-primary-base', '#6366f1'),
    lineColorMuted: cssVar('--ds-sys-color-neutral-60', '#9CA3AF'),
  };
}

// -----------------------------------------------------
// 1. Mindmap (NotebookLM Style)
// -----------------------------------------------------
function renderMindmap(palette) {
  const container = document.getElementById('mindmap-demo');
  if (!container) return;
  
  const chart = echarts.init(container, null, { renderer: 'canvas' });
  
  const mindmapData = {
    name: 'LogFlow Pro',
    children: [
        { name: 'Core Architecture', children: [{ name: 'Query Definition (DSL)' }, { name: 'Smart Time Management' }]},
        { name: 'Visualization & Analysis', children: [{ name: 'Local Aggregation Engine' }, { name: 'Interactive Charts' }, { name: 'JsonTree Payload Viewer' }]},
        { name: 'Historical Management', children: []},
        { name: 'Technical Stack', children: [{ name: 'Express Framework' }, { name: 'AWS SDK' }, { name: 'Redux Local State' }]}
    ]
  };

  chart.setOption({
    tooltip: { trigger: 'item', triggerOn: 'mousemove' },
    series: [{
        type: 'tree', data: [mindmapData],
        top: '5%', left: '15%', bottom: '5%', right: '25%',
        symbolSize: [160, 40], symbol: 'roundRect',
        itemStyle: { color: palette.nodeDark, borderColor: palette.nodeDark, borderWidth: 2 },
        label: {
            position: 'inside', verticalAlign: 'middle', align: 'center',
            fontSize: 13, color: palette.textColorLight, fontFamily: 'var(--font-primary, sans-serif)',
            overflow: 'truncate', width: 140
        },
        leaves: {
            label: { position: 'inside', verticalAlign: 'middle', align: 'center' }
        },
        emphasis: { disabled: true },
        expandAndCollapse: true, animationDuration: 550, animationDurationUpdate: 750,
        edgeShape: 'curve',
        lineStyle: { color: palette.lineColorPrimary, width: 2, curveness: 0.5 }
    }]
  });
  return chart;
}

// -----------------------------------------------------
// 2. Standard Bracket (Right-to-Left logic, Left-to-Right visual)
// -----------------------------------------------------
function renderStandardBracket(palette) {
  const container = document.getElementById('bracket-standard-demo');
  if (!container) return;
  
  const chart = echarts.init(container, null, { renderer: 'canvas' });
  
  // Notice the "Root" is actually the final Winner on the right. 
  // We nest backwards down to the Quarter Finals teams on the left.
  const bracketData = {
    name: '🏆 Champion (Winner)',
    children: [
        {
            name: 'Semifinalist 1',
            children: [
                { name: 'Quarter W1', children: [{name: 'Seed 1'}, {name: 'Seed 8'}] },
                { name: 'Quarter W2', children: [{name: 'Seed 4'}, {name: 'Seed 5'}] }
            ]
        },
        {
            name: 'Semifinalist 2',
            children: [
                { name: 'Quarter W3', children: [{name: 'Seed 2'}, {name: 'Seed 7'}] },
                { name: 'Quarter W4', children: [{name: 'Seed 3'}, {name: 'Seed 6'}] }
            ]
        }
    ]
  };

  chart.setOption({
    tooltip: { trigger: 'item' },
    series: [{
        type: 'tree',
        orient: 'RL', // Right to Left layout visually places Root on the right boundary
        data: [bracketData],
        top: '5%', left: '10%', bottom: '5%', right: '15%',
        symbolSize: [110, 32], symbol: 'rect',
        itemStyle: { color: palette.nodeLight, borderColor: palette.border, borderWidth: 1 },
        label: { position: 'inside', color: palette.textColorDark, fontSize: 12, fontFamily: 'var(--font-primary, sans-serif)', overflow: 'truncate', width: 90 },
        leaves: { label: { position: 'inside' } },
        emphasis: { disabled: true },
        expandAndCollapse: false, // Brackets usually remain fully visible
        edgeShape: 'polyline',    // Critical for forcing 90 degree orthogonal paths
        edgeForkPosition: '50%',
        lineStyle: { width: 2, color: palette.lineColorMuted }
    }]
  });
  return chart;
}

// -----------------------------------------------------
// 3. Meet-in-the-Middle Bracket (16 Teams)
// -----------------------------------------------------
function renderCenterBracket(palette) {
  const container = document.getElementById('bracket-center-demo');
  if (!container) return;
  
  const chart = echarts.init(container, null, { renderer: 'canvas' });
  
  // Left side (8 teams mapping to 1 finalist)
  const leftData = {
    name: 'Western Champ',
    children: [
        { name: 'Semi W1', children: [{name: 'Q W1', children:[{name:'W1'},{name:'W8'}]}, {name: 'Q W2', children:[{name:'W4'},{name:'W5'}]}] },
        { name: 'Semi W2', children: [{name: 'Q W3', children:[{name:'W2'},{name:'W7'}]}, {name: 'Q W4', children:[{name:'W3'},{name:'W6'}]}] }
    ]
  };
  
  // Right side (8 teams mapping to 1 finalist)
  const rightData = {
    name: 'Eastern Champ',
    children: [
        { name: 'Semi E1', children: [{name: 'Q E1', children:[{name:'E1'},{name:'E8'}]}, {name: 'Q E2', children:[{name:'E4'},{name:'E5'}]}] },
        { name: 'Semi E2', children: [{name: 'Q E3', children:[{name:'E2'},{name:'E7'}]}, {name: 'Q E4', children:[{name:'E3'},{name:'E6'}]}] }
    ]
  };

  chart.setOption({
    tooltip: { trigger: 'item' },
    series: [
        {
            type: 'tree', orient: 'RL', // Faces Right
            data: [leftData],
            top: '5%', left: '2%', bottom: '5%', right: '55%', // Occupies Left 48% Width
            symbolSize: [80, 28], symbol: 'rect',
            itemStyle: { color: palette.nodeLight, borderColor: palette.border, borderWidth: 1 },
            label: { position: 'inside', color: palette.textColorDark, fontSize: 11, fontFamily: 'var(--font-primary, sans-serif)', overflow: 'truncate', width: 70 },
            leaves: { label: { position: 'inside' } },
            emphasis: { disabled: true },
            expandAndCollapse: false, edgeShape: 'polyline', edgeForkPosition: '50%', lineStyle: { width: 2, color: palette.lineColorMuted }
        },
        {
            type: 'tree', orient: 'LR', // Faces Left
            data: [rightData],
            top: '5%', left: '55%', bottom: '5%', right: '2%', // Occupies Right 48% Width
            symbolSize: [80, 28], symbol: 'rect',
            itemStyle: { color: palette.nodeLight, borderColor: palette.border, borderWidth: 1 },
            label: { position: 'inside', color: palette.textColorDark, fontSize: 11, fontFamily: 'var(--font-primary, sans-serif)', overflow: 'truncate', width: 70 },
            leaves: { label: { position: 'inside' } },
            emphasis: { disabled: true },
            expandAndCollapse: false, edgeShape: 'polyline', edgeForkPosition: '50%', lineStyle: { width: 2, color: palette.lineColorMuted }
        }
    ],
    graphic: [
        {
            // Center Championship block bridging the two trees, shifted up to avoid obscuring the final line
            type: 'rect',
            left: 'center', top: '40%',
            shape: { width: 140, height: 40, r: 4 },
            style: { fill: palette.primary, shadowBlur: 8, shadowColor: 'rgba(0,0,0,0.2)', shadowOffsetY: 4 },
            z: 10
        },
        {
            type: 'text',
            left: 'center', top: '43%', // aligned with the center of the rect above
            style: { text: '🏆 Grand Final', fill: '#ffffff', font: 'bold 14px sans-serif' },
            z: 11
        }
    ]
  });
  return chart;
}


function bootTreeCharts() {
  const palette = getPalette();
  const instances = [];
  
  instances.push(renderMindmap(palette));
  instances.push(renderStandardBracket(palette));
  instances.push(renderCenterBracket(palette));
  
  // Handle responsiveness
  window.addEventListener('resize', () => {
      instances.forEach(chart => { if(chart) chart.resize(); });
  });

  // Handle Aurora Theme modes gracefully
  new MutationObserver(() => {
    const newPalette = getPalette();
    instances.forEach(chart => {
       // Only redraw if instance exists, we rely on the init functions to clear/set
       // We'll dispatch a minor resize event to trigger redraw or reload logic depending on implementation size
       if(chart) {
           chart.dispose(); // ECharts colors require deep recreation sometimes, easiest is brutal dispose/re-init in this demo flow
       }
    });
    // Re-init completely
    renderMindmap(newPalette);
    renderStandardBracket(newPalette);
    renderCenterBracket(newPalette);
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'data-mode'] });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootTreeCharts);
} else {
  bootTreeCharts();
}
</script>
