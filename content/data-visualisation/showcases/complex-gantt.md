---
title: "Complex Gantt Component 2"
description: "An advanced, enterprise-grade Gantt implementation combining HTML data tables with an ECharts timeline for progress, milestones, and dependencies."
image: "/images/charts/echarts-complex-gantt.png"
tags: ["Gantt", "Project", "Timeline", "Complex"]
menu:
  main:
    parent: "data-visualisation-showcases"
    weight: 25
---

# Complex Gantt Component

The **Complex Gantt** demonstrates an enterprise pattern: a split layout where the left panel is a native HTML data table (perfect for displaying avatars, avatars, hierarchy, and tight text) perfectly synchronized with an [ECharts timeline](/data-visualisation/charts/echarts-gantt/) on the right.

### Capabilities in this pattern:
1. **Split-View Alignment:** HTML rows are explicitely sized (`48px`) to match the Y-Axis category mapping in the ECharts canvas.
2. **Progress Indicators:** The ECharts custom series overlays a darker 'progress' bar inside the main duration bar.
3. **Milestones & Decorators:** Custom clipping or SVGs can be drawn inside the `renderItem` function.
4. **Theming:** Full integration with Aurora design tokens.

<link rel="stylesheet" href="/aurora-docs/css/components/complex-gantt.css">



### 6-Group Test Example
To observe the bug where collapsing groups causes the top task item to disappear, here is a larger 6-group schedule context.

{{< demo >}}
<div class="aurora-complex-gantt" style="width: 100%;">
  <div class="gantt-table-panel">
    <div class="gantt-table-header">
      <div>Task Name</div>
      <div style="text-align: right;">Assignee</div>
    </div>
    <div class="gantt-table-body">
      <!-- Group 1 -->
      <div class="gantt-row gantt-row-group">
        <div class="gantt-task-name">
          <svg class="ds-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          Phase 1: Initiation
        </div>
        <div class="gantt-task-assignee"></div>
      </div>
      <div class="gantt-row">
        <div class="gantt-task-name" style="padding-left: 24px;">Kickoff</div>
        <div class="gantt-task-assignee"><div class="gantt-assignee-avatar">PB</div></div>
      </div>
      
      <!-- Group 2 -->
      <div class="gantt-row gantt-row-group">
        <div class="gantt-task-name">
          <svg class="ds-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          Phase 2: Planning
        </div>
        <div class="gantt-task-assignee"></div>
      </div>
      <div class="gantt-row">
        <div class="gantt-task-name" style="padding-left: 24px;">Requirements</div>
        <div class="gantt-task-assignee"></div>
      </div>

      <!-- Group 3 -->
      <div class="gantt-row gantt-row-group">
        <div class="gantt-task-name">
          <svg class="ds-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          Phase 3: Execution
        </div>
        <div class="gantt-task-assignee"></div>
      </div>
      <div class="gantt-row">
        <div class="gantt-task-name" style="padding-left: 24px;">Development</div>
        <div class="gantt-task-assignee"></div>
      </div>

      <!-- Group 4 -->
      <div class="gantt-row gantt-row-group">
        <div class="gantt-task-name">
          <svg class="ds-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          Phase 4: Monitoring
        </div>
        <div class="gantt-task-assignee"></div>
      </div>
      <div class="gantt-row">
        <div class="gantt-task-name" style="padding-left: 24px;">QA Testing</div>
        <div class="gantt-task-assignee"></div>
      </div>

      <!-- Group 5 -->
      <div class="gantt-row gantt-row-group">
        <div class="gantt-task-name">
          <svg class="ds-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          Phase 5: Closing
        </div>
        <div class="gantt-task-assignee"></div>
      </div>
      <div class="gantt-row">
        <div class="gantt-task-name" style="padding-left: 24px;">Deployment</div>
        <div class="gantt-task-assignee"></div>
      </div>

      <!-- Group 6 -->
      <div class="gantt-row gantt-row-group">
        <div class="gantt-task-name">
          <svg class="ds-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          Phase 6: Review
        </div>
        <div class="gantt-task-assignee"></div>
      </div>
      <div class="gantt-row">
        <div class="gantt-task-name" style="padding-left: 24px;">Retrospective</div>
        <div class="gantt-task-assignee"></div>
      </div>
    </div>
  </div>

  <div class="gantt-timeline-panel">
    <div class="aurora-chart-container" style="width: 800px; max-width: 800px;">
      <div data-component="aurora-chart" style="height: 100%; width: 800px;">
        <script type="application/json" data-ref="config">
        {
          "tooltip": {
            "show": true,
            "confine": true,
            "appendToBody": true,
            "enterable": false,
            "extraCssText": "pointer-events: none;",
            "trigger": "item",
            "position": "top",
            "formatter": "$(function() { return function (params) { return params.marker + params.name + '<br/>Progress: ' + (params.value[4] * 100).toFixed(0) + '%'; }; })()$"
          },
          "grid": { "top": 48, "bottom": 0, "left": 0, "right": 20, "containLabel": false },
          "xAxis": {
            "type": "time", "position": "top",
            "axisLabel": { "color": "var(--ds-sys-color-on-surface-variant)", "formatter": "{MMM} {dd}" },
            "splitLine": { "show": true, "lineStyle": { "color": "var(--ds-sys-color-border)", "type": "dashed" } },
            "axisLine": { "show": false }, "axisTick": { "show": false }
          },
          "yAxis": {
            "type": "category",
            "data": [ "12", "11", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1" ],
            "inverse": true,
            "axisLabel": { "show": false }, "axisLine": { "show": false }, "axisTick": { "show": false }, "splitLine": { "show": false }
          },
          "series": [
            {
              "type": "custom",
              "emphasis": { "disabled": true },
              "renderItem": "$(function() { return function (params, api) { var categoryIndex = api.value(0); var start = api.coord([api.value(1), categoryIndex]); var end = api.coord([api.value(2), categoryIndex]); var progress = api.value(4); var isGroup = api.value(5); var height = isGroup ? 20 : 28; var totalWidth = Math.max(2, end[0] - start[0]); var progressWidth = totalWidth * progress; var rx = isGroup ? 0 : 4; var yPos = start[1] - height / 2; var bgRect = { type: 'rect', shape: { x: Math.floor(start[0]), y: Math.floor(yPos), width: Math.max(Math.floor(totalWidth), 2), height: height, r: rx}, style: api.style({ fill: isGroup ? 'var(--ds-chart-1)' : 'var(--ds-chart-2)', opacity: isGroup ? 0.3 : 0.2 }) }; var fgRect = null; if (progressWidth > 0 && !isGroup) { fgRect = { type: 'rect', shape: { x: Math.floor(start[0]), y: Math.floor(yPos), width: Math.max(Math.floor(progressWidth), 2), height: height, r: rx}, style: api.style({ fill: 'var(--ds-chart-2)', opacity: 1 }) }; } var textEl = null; if (!isGroup) { textEl = { type: 'text', style: { text: params.name, x: Math.floor(start[0]) + 8, y: Math.floor(yPos) + height / 2, textVerticalAlign: 'middle', fill: 'var(--ds-sys-color-on-surface-variant)', fontSize: 12, overflow: 'truncate', width: Math.max(Math.floor(totalWidth) - 16, 0) } }; } var groupTextEl = null; if (isGroup) { groupTextEl = { type: 'text', style: { text: params.name, x: Math.floor(start[0]) + 8, y: Math.floor(yPos) + height / 2, textVerticalAlign: 'middle', fill: 'var(--ds-sys-color-on-surface)', fontSize: 13, fontWeight: 'bold' } }; } var elements = [bgRect]; if (fgRect) elements.push(fgRect); if (textEl) elements.push(textEl); if (groupTextEl) elements.push(groupTextEl); return { type: 'group', children: elements }; }; })()$",
              "itemStyle": { "opacity": 1 },
              "encode": { "x": [1, 2], "y": 0, "tooltip": [1, 2, 4] },
              "data": [
                { "name": "Phase 1: Initiation", "value": [0, "2026-07-01", "2026-07-10", 0, 0.4, true] },
                { "name": "Kickoff", "value": [1, "2026-07-01", "2026-07-05", 0, 1.0, false] },
                { "name": "Phase 2: Planning", "value": [2, "2026-07-11", "2026-07-20", 0, 0.2, true] },
                { "name": "Requirements", "value": [3, "2026-07-11", "2026-07-20", 0, 0.5, false] },
                { "name": "Phase 3: Execution", "value": [4, "2026-07-21", "2026-08-10", 0, 0.0, true] },
                { "name": "Development", "value": [5, "2026-07-21", "2026-08-10", 0, 0.0, false] },
                { "name": "Phase 4: Monitoring", "value": [6, "2026-08-11", "2026-08-20", 0, 0.0, true] },
                { "name": "QA Testing", "value": [7, "2026-08-11", "2026-08-20", 0, 0.0, false] },
                { "name": "Phase 5: Closing", "value": [8, "2026-08-21", "2026-08-25", 0, 0.0, true] },
                { "name": "Deployment", "value": [9, "2026-08-21", "2026-08-25", 0, 0.0, false] },
                { "name": "Phase 6: Review", "value": [10, "2026-08-26", "2026-08-30", 0, 0.0, true] },
                { "name": "Retrospective", "value": [11, "2026-08-26", "2026-08-30", 0, 0.0, false] }
              ]
            }
          ]
        }
        </script>
      </div>
    </div>
  </div>
</div>
{{< /demo >}}

<script>
function setupComplexGantt() {
  const containers = document.querySelectorAll('.aurora-complex-gantt');
  if (containers.length === 0) return;

  containers.forEach(container => {
    const chartDom = container.querySelector('[data-component="aurora-chart"]');
    if (!chartDom) return;

    let intervalCount = 0;
    const checkInterval = setInterval(() => {
      const chart = chartDom._chartInstance;
      intervalCount++;
      if (chart || intervalCount > 30) {
        clearInterval(checkInterval);
        if (!chart) return;
        
        let originalYAxis = [];
        let originalData = [];

        const configScript = container.querySelector('script[data-ref="config"]');
        if (configScript) {
            try {
                const configObj = JSON.parse(configScript.textContent || configScript.innerText);
                originalYAxis = configObj.yAxis.data;
                originalData = configObj.series[0].data;
            } catch (e) {
                console.error("Gantt: Failed to parse config", e);
            }
        } else {
            // Fallback to getOption if somehow the script wasn't there
            const option = chart.getOption();
            if (option && option.yAxis) {
                originalYAxis = option.yAxis[0].data;
                originalData = option.series[0].data;
            }
        }
        
        const groups = container.querySelectorAll('.gantt-row-group');
        
        groups.forEach((group) => {
          group.addEventListener('click', () => {
            // 1. Toggle HTML Rows
            const isCollapsed = group.classList.toggle('is-collapsed');
            let nextSibling = group.nextElementSibling;
            
            while(nextSibling && !nextSibling.classList.contains('gantt-row-group')) {
              nextSibling.style.display = isCollapsed ? 'none' : '';
              nextSibling.classList.toggle('is-hidden', isCollapsed);
              nextSibling = nextSibling.nextElementSibling;
            }
            
            // 2. Re-calculate ECharts Dataset mapping exactly mapping to visible rows
            const allRows = Array.from(container.querySelectorAll('.gantt-row'));
            const filteredData = [];
            let newIndex = 0;
            
            allRows.forEach((row, absoluteIndex) => {
              if (originalData[absoluteIndex] && !row.classList.contains('is-hidden')) {
                  const item = JSON.parse(JSON.stringify(originalData[absoluteIndex]));
                  item.value[0] = newIndex; 
                  filteredData.push(item);
                  newIndex++;
              }
            });
            
            // Build a perfectly inverse Y-Axis array dynamically matching the exact number of visible items
            // e.g. if 4 visible items, build: ["4", "3", "2", "1"] top to bottom matching Echarts `{inverse:true}`
            const filteredYAxis = Array.from({ length: newIndex }, (_, i) => String(newIndex - i));
            
            // Explicitly resize the ECharts wrapper container to guarantee 48px row heights 
            // 48px header + (48px per visible row)
            const newHeight = (newIndex * 48) + 48;
            chartDom.style.height = `${newHeight}px`;

            // 3. To completely avoid coordinate caching bugs during a manual shrink,
            // we will pull the global option, clear the instance, and reapply everything.
            let fullOption = chart.getOption();
            fullOption.yAxis[0].data = filteredYAxis;
            fullOption.series[0].data = filteredData;
            
            // Clear ECharts cached coordinate bounds
            chart.clear();
            
            // Reapply full configuration and resize explicitly overriding internal canvas height!
            chart.setOption(fullOption, true);
            chart.resize({ height: newHeight, width: 'auto' });
          });
        });
      }
    }, 100);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupComplexGantt);
} else {
  setupComplexGantt();
}
</script>

### Technical Breakdown
- **Fixed Dimensions:** The HTML rows are styled with `height: 48px;`. The ECharts grid is shifted down exactly `48px` to account for the header, and the Y-axis maps directly to 8 discrete intervals matching the 8 HTML rows.
- **Custom Render Groups:** Inside the `renderItem` callback, we return a `type: 'group'` object mapping multiple graphic elements.
- **Background vs Foreground Bars:** The custom series draws the background rectangle for total duration with a lowered opacity, then overlays the elapsed progress width on top as a saturated rectangle.

--- 