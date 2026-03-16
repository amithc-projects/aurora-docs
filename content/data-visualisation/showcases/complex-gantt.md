---
title: "Complex Gantt Component cc3"
description: "An advanced, enterprise-grade Gantt implementation combining HTML data tables with an ECharts timeline for progress, milestones, and dependencies."
image: "/images/charts/echarts-complex-gantt.png"
tags: ["Gantt", "Project", "Timeline", "Complex"]
menu:
  main:
    parent: "data-visualisation-showcases"
    weight: 25
---

# Complex Gantt Component

The **Complex Gantt** demonstrates an enterprise pattern: a split layout where the left panel is a native HTML data table (perfect for displaying avatars, hierarchy, and tight text) perfectly synchronized with an ECharts timeline on the right.

### Capabilities in this pattern:
1. **Split-View Alignment:** HTML rows are explicitly sized (`48px`) to match the Y-Axis category mapping in the ECharts canvas.
2. **Progress Indicators:** The ECharts custom series overlays a progress bar inside the main duration bar.
3. **Collapse / Expand:** Phase group rows can be toggled to hide child tasks.
4. **Theming:** Full integration with Aurora design tokens.

<link rel="stylesheet" href="/aurora-docs/css/components/complex-gantt.css">

{{< demo >}}
<div class="aurora-complex-gantt" id="gantt-a">
  <div class="gantt-table-panel">
    <div class="gantt-table-header">
      <div>Task Name</div>
      <div style="text-align:right;">Assignee</div>
    </div>
    <div class="gantt-table-body">
      <div class="gantt-row gantt-row-group" data-group="g1">
        <div class="gantt-task-name">
          <svg class="ds-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          Phase 1: Initiation
        </div>
        <div class="gantt-task-assignee"></div>
      </div>
      <div class="gantt-row" data-parent="g1">
        <div class="gantt-task-name" style="padding-left:24px">Feasibility Study</div>
        <div class="gantt-task-assignee"><div class="gantt-assignee-avatar">PB</div></div>
      </div>
      <div class="gantt-row" data-parent="g1">
        <div class="gantt-task-name" style="padding-left:24px">Scope Identification</div>
        <div class="gantt-task-assignee"><div class="gantt-assignee-avatar">JD</div></div>
      </div>
      <div class="gantt-row" data-parent="g1">
        <div class="gantt-task-name" style="padding-left:24px">Statement of Work</div>
        <div class="gantt-task-assignee"><div class="gantt-assignee-avatar">Un</div></div>
      </div>
      <div class="gantt-row gantt-row-group" data-group="g2">
        <div class="gantt-task-name">
          <svg class="ds-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          Phase 2: Planning
        </div>
        <div class="gantt-task-assignee"></div>
      </div>
      <div class="gantt-row" data-parent="g2">
        <div class="gantt-task-name" style="padding-left:24px">Initial Meeting</div>
        <div class="gantt-task-assignee"><div class="gantt-assignee-avatar">JA</div></div>
      </div>
      <div class="gantt-row" data-parent="g2">
        <div class="gantt-task-name" style="padding-left:24px">Collection of Ideas</div>
        <div class="gantt-task-assignee"></div>
      </div>
      <div class="gantt-row" data-parent="g2">
        <div class="gantt-task-name" style="padding-left:24px">Roadmap Creation</div>
        <div class="gantt-task-assignee"></div>
      </div>
    </div>
  </div>
  <div class="gantt-timeline-panel">
    <div class="gantt-chart-mount" style="width:100%;height:100%;min-height:432px;"></div>
  </div>
</div>
{{< /demo >}}

### 6-Group Test Example

{{< demo >}}
<div class="aurora-complex-gantt" id="gantt-b">
  <div class="gantt-table-panel">
    <div class="gantt-table-header">
      <div>Task Name</div>
      <div style="text-align:right;">Assignee</div>
    </div>
    <div class="gantt-table-body">
      <div class="gantt-row gantt-row-group" data-group="b1">
        <div class="gantt-task-name"><svg class="ds-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>Phase 1: Initiation</div>
        <div class="gantt-task-assignee"></div>
      </div>
      <div class="gantt-row" data-parent="b1">
        <div class="gantt-task-name" style="padding-left:24px">Kickoff</div>
        <div class="gantt-task-assignee"><div class="gantt-assignee-avatar">PB</div></div>
      </div>
      <div class="gantt-row gantt-row-group" data-group="b2">
        <div class="gantt-task-name"><svg class="ds-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>Phase 2: Planning</div>
        <div class="gantt-task-assignee"></div>
      </div>
      <div class="gantt-row" data-parent="b2">
        <div class="gantt-task-name" style="padding-left:24px">Requirements</div>
        <div class="gantt-task-assignee"></div>
      </div>
      <div class="gantt-row gantt-row-group" data-group="b3">
        <div class="gantt-task-name"><svg class="ds-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>Phase 3: Execution</div>
        <div class="gantt-task-assignee"></div>
      </div>
      <div class="gantt-row" data-parent="b3">
        <div class="gantt-task-name" style="padding-left:24px">Development</div>
        <div class="gantt-task-assignee"></div>
      </div>
      <div class="gantt-row gantt-row-group" data-group="b4">
        <div class="gantt-task-name"><svg class="ds-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>Phase 4: Monitoring</div>
        <div class="gantt-task-assignee"></div>
      </div>
      <div class="gantt-row" data-parent="b4">
        <div class="gantt-task-name" style="padding-left:24px">QA Testing</div>
        <div class="gantt-task-assignee"></div>
      </div>
      <div class="gantt-row gantt-row-group" data-group="b5">
        <div class="gantt-task-name"><svg class="ds-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>Phase 5: Closing</div>
        <div class="gantt-task-assignee"></div>
      </div>
      <div class="gantt-row" data-parent="b5">
        <div class="gantt-task-name" style="padding-left:24px">Deployment</div>
        <div class="gantt-task-assignee"></div>
      </div>
      <div class="gantt-row gantt-row-group" data-group="b6">
        <div class="gantt-task-name"><svg class="ds-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>Phase 6: Review</div>
        <div class="gantt-task-assignee"></div>
      </div>
      <div class="gantt-row" data-parent="b6">
        <div class="gantt-task-name" style="padding-left:24px">Retrospective</div>
        <div class="gantt-task-assignee"></div>
      </div>
    </div>
  </div>
  <div class="gantt-timeline-panel">
    <div class="gantt-chart-mount" style="width:100%;height:100%;min-height:672px;"></div>
  </div>
</div>
{{< /demo >}}

<script type="module">
import * as echarts from 'https://esm.sh/echarts/core';
import { CustomChart }    from 'https://esm.sh/echarts/charts';
import { TooltipComponent, GridComponent, DatasetComponent } from 'https://esm.sh/echarts/components';
import { CanvasRenderer } from 'https://esm.sh/echarts/renderers';

echarts.use([CustomChart, TooltipComponent, GridComponent, DatasetComponent, CanvasRenderer]);

// ---------------------------------------------------------------------------
// Resolve a CSS custom property to a concrete colour ECharts canvas can use.
// Chart palette tokens are fill/background colours — reading them via
// el.style.color returns rgba(0,0,0,0) in some themes (e.g. Corporate Light).
// We probe background-color first, then fall back to color, then a safe grey.
// ---------------------------------------------------------------------------
function cssVar(name) {
  const el = document.createElement('div');
  el.style.cssText = 'position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;background-color:var(' + name + ')';
  document.body.appendChild(el);
  const bg = getComputedStyle(el).backgroundColor;
  el.remove();
  if (bg && bg !== 'rgba(0, 0, 0, 0)') return bg;

  // Fall back to probing as a text colour
  const el2 = document.createElement('div');
  el2.style.cssText = 'position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;color:var(' + name + ')';
  document.body.appendChild(el2);
  const fg = getComputedStyle(el2).color;
  el2.remove();
  if (fg && fg !== 'rgba(0, 0, 0, 0)') return fg;

  return '#888888';
}

function buildPalette() {
  return {
    chart1:       cssVar('--ds-chart-1'),
    chart2:       cssVar('--ds-chart-2'),
    chart4:       cssVar('--ds-chart-4'),
    onSurface:    cssVar('--ds-sys-color-on-surface'),
    onSurfaceVar: cssVar('--ds-sys-color-on-surface-variant'),
    border:       cssVar('--ds-sys-color-border'),
    tooltipBg:    cssVar('--ds-sys-color-surface'),
    tooltipBorder:cssVar('--ds-sys-color-border'),
    tooltipText:  cssVar('--ds-sys-color-on-surface'),
  };
}

// ---------------------------------------------------------------------------
// renderItem — ALL elements silent, no canvas hover repaints ever.
// Tooltip fires via trigger:'axis' coordinate lookup, not shape hit-testing.
// ---------------------------------------------------------------------------
function makeRenderItem(palette) {
  return function renderItem(params, api) {
    var categoryIndex = api.value(0);
    var start     = api.coord([api.value(1), categoryIndex]);
    var end       = api.coord([api.value(2), categoryIndex]);
    var progress  = api.value(4);
    var isGroup   = api.value(5);
    var color     = api.value(6);
    var barH      = isGroup ? 20 : 28;
    var totalW    = Math.max(2, end[0] - start[0]);
    var progressW = totalW * progress;
    var rx        = isGroup ? 0 : 4;
    var yPos      = Math.floor(start[1] - barH / 2);
    var x0        = Math.floor(start[0]);
    var cs        = params.coordSys;

    var cx  = Math.max(x0, cs.x);
    var cx2 = Math.min(x0 + Math.floor(totalW), cs.x + cs.width);
    if (cx2 <= cx) return { type: 'group', silent: true, children: [] };
    var cw = cx2 - cx;

    var bgColor = color || (isGroup ? palette.chart1 : palette.chart2);

    var els = [
      { type: 'rect', silent: true, transition: [],
        shape: { x: cx, y: yPos, width: cw, height: barH, r: rx },
        style: { fill: bgColor, opacity: isGroup ? 0.4 : 0.2, stroke: 'none' } }
    ];

    if (progressW > 0 && !isGroup) {
      var px  = Math.max(x0, cs.x);
      var px2 = Math.min(x0 + Math.floor(progressW), cs.x + cs.width);
      if (px2 > px) {
        els.push({ type: 'rect', silent: true, transition: [],
          shape: { x: px, y: yPos, width: px2 - px, height: barH, r: rx },
          style: { fill: color || palette.chart2, opacity: 1, stroke: 'none' } });
      }
    }

    els.push({ type: 'text', silent: true, transition: [],
      style: {
        text: params.name, x: cx + 8, y: yPos + barH / 2,
        textVerticalAlign: 'middle',
        fill: isGroup ? palette.onSurface : palette.onSurfaceVar,
        fontSize: isGroup ? 13 : 12,
        fontWeight: isGroup ? 'bold' : 'normal',
        overflow: 'truncate', width: Math.max(cw - 16, 0)
      }
    });

    return { type: 'group', silent: true, children: els };
  };
}

function buildOption(visibleRows, palette) {
  var count = visibleRows.length;
  var yAxisData = Array.from({ length: count }, function(_, i) { return String(count - i); });

  var seriesData = visibleRows.map(function(row, i) {
    return {
      name:      row.name,
      value:     [i, row.start, row.end, 0, row.progress, row.isGroup, row.color],
      itemStyle: { color: row.color || (row.isGroup ? palette.chart1 : palette.chart2) }
    };
  });

  return {
    animation: false,
    tooltip: {
      show: true,
      // trigger:'axis' fires from coordinate lookup — no canvas shape events needed.
      // This is why silent:true on all renderItem elements doesn't break the tooltip.
      trigger: 'axis',
      axisPointer: { type: 'shadow', shadowStyle: { opacity: 0 } },
      confine: true,
      appendToBody: true,
      enterable: false,
      extraCssText: 'pointer-events:none;',
      backgroundColor: palette.tooltipBg,
      borderColor:     palette.tooltipBorder,
      textStyle:       { color: palette.tooltipText },
      formatter: function(params) {
        if (!params || !params.length) return '';
        var p = params[0];
        var progress = (p.value[4] * 100).toFixed(0);
        return p.marker + p.name + '<br/>Progress: ' + progress + '%';
      }
    },
    grid: { top: 48, bottom: 0, left: 0, right: 20, containLabel: false },
    xAxis: {
      type: 'time', position: 'top',
      axisLabel: { color: palette.onSurfaceVar, formatter: '{MMM} {dd}' },
      splitLine: { show: true, lineStyle: { color: palette.border, type: 'dashed' } },
      axisLine: { show: false }, axisTick: { show: false }
    },
    yAxis: {
      type: 'category', data: yAxisData, inverse: true,
      axisLabel: { show: false }, axisLine: { show: false },
      axisTick: { show: false }, splitLine: { show: false }
    },
    series: [{
      type: 'custom', animation: false,
      emphasis: { disabled: true }, selectedMode: false,
      renderItem: makeRenderItem(palette),
      encode: { x: [1, 2], y: 0, tooltip: [1, 2, 4] },
      data: seriesData
    }]
  };
}

class GanttChart {
  constructor(mountEl, allRows) {
    this.mountEl   = mountEl;
    this.allRows   = allRows;
    this.collapsed = new Set();
    this.chart     = null;
    this.palette   = buildPalette();
    this._init();
  }

  _visibleRows() {
    return this.allRows.filter(row =>
      !row.parentGroup || !this.collapsed.has(row.parentGroup)
    );
  }

  _height(n) { return n * 48 + 48; }

  _init() {
    var visible = this._visibleRows();
    var h = this._height(visible.length);
    this.mountEl.style.height = h + 'px';
    this.chart = echarts.init(this.mountEl, null, { renderer: 'canvas' });
    this.chart.setOption(buildOption(visible, this.palette));
    window.addEventListener('resize', () => this.chart && this.chart.resize());
  }

  toggle(groupId) {
    this.collapsed.has(groupId) ? this.collapsed.delete(groupId) : this.collapsed.add(groupId);
    this._redraw();
  }

  _redraw() {
    var visible = this._visibleRows();
    var h = this._height(visible.length);
    this.mountEl.style.height = h + 'px';
    this.chart.setOption(buildOption(visible, this.palette), true);
    this.chart.resize({ height: h });
  }

  onThemeChange() {
    this.palette = buildPalette();
    this._redraw();
  }
}

var GANTT_DATA = {
  'gantt-a': [
    { name: 'Phase 1: Initiation', start: '2026-07-01', end: '2026-07-21', progress: 0.4,  isGroup: true,  groupId: 'g1', parentGroup: null, color: null },
    { name: 'Feasibility Study',   start: '2026-07-01', end: '2026-07-10', progress: 0.8,  isGroup: false, groupId: null, parentGroup: 'g1', color: null },
    { name: 'Scope Identification',start: '2026-07-08', end: '2026-07-15', progress: 1.0,  isGroup: false, groupId: null, parentGroup: 'g1', color: null },
    { name: 'Statement of Work',   start: '2026-07-13', end: '2026-07-21', progress: 0.2,  isGroup: false, groupId: null, parentGroup: 'g1', color: null },
    { name: 'Phase 2: Planning',   start: '2026-07-15', end: '2026-08-05', progress: 0.1,  isGroup: true,  groupId: 'g2', parentGroup: null, color: null },
    { name: 'Initial Meeting',     start: '2026-07-15', end: '2026-07-20', progress: 1.0,  isGroup: false, groupId: null, parentGroup: 'g2', color: null },
    { name: 'Collection of Ideas', start: '2026-07-19', end: '2026-07-26', progress: 0.0,  isGroup: false, groupId: null, parentGroup: 'g2', color: null },
    { name: 'Roadmap Creation',    start: '2026-07-24', end: '2026-08-05', progress: 0.0,  isGroup: false, groupId: null, parentGroup: 'g2', color: null },
  ],
  'gantt-b': [
    { name: 'Phase 1: Initiation', start: '2026-07-01', end: '2026-07-10', progress: 0.4, isGroup: true,  groupId: 'b1', parentGroup: null, color: null },
    { name: 'Kickoff',             start: '2026-07-01', end: '2026-07-05', progress: 1.0, isGroup: false, groupId: null, parentGroup: 'b1', color: null },
    { name: 'Phase 2: Planning',   start: '2026-07-11', end: '2026-07-20', progress: 0.2, isGroup: true,  groupId: 'b2', parentGroup: null, color: null },
    { name: 'Requirements',        start: '2026-07-11', end: '2026-07-20', progress: 0.5, isGroup: false, groupId: null, parentGroup: 'b2', color: null },
    { name: 'Phase 3: Execution',  start: '2026-07-21', end: '2026-08-10', progress: 0.0, isGroup: true,  groupId: 'b3', parentGroup: null, color: null },
    { name: 'Development',         start: '2026-07-21', end: '2026-08-10', progress: 0.0, isGroup: false, groupId: null, parentGroup: 'b3', color: null },
    { name: 'Phase 4: Monitoring', start: '2026-08-11', end: '2026-08-20', progress: 0.0, isGroup: true,  groupId: 'b4', parentGroup: null, color: null },
    { name: 'QA Testing',          start: '2026-08-11', end: '2026-08-20', progress: 0.0, isGroup: false, groupId: null, parentGroup: 'b4', color: null },
    { name: 'Phase 5: Closing',    start: '2026-08-21', end: '2026-08-25', progress: 0.0, isGroup: true,  groupId: 'b5', parentGroup: null, color: null },
    { name: 'Deployment',          start: '2026-08-21', end: '2026-08-25', progress: 0.0, isGroup: false, groupId: null, parentGroup: 'b5', color: null },
    { name: 'Phase 6: Review',     start: '2026-08-26', end: '2026-08-30', progress: 0.0, isGroup: true,  groupId: 'b6', parentGroup: null, color: null },
    { name: 'Retrospective',       start: '2026-08-26', end: '2026-08-30', progress: 0.0, isGroup: false, groupId: null, parentGroup: 'b6', color: null },
  ]
};

function boot() {
  var instances = {};

  Object.keys(GANTT_DATA).forEach(function(id) {
    var container = document.getElementById(id);
    if (!container) return;
    var mountEl = container.querySelector('.gantt-chart-mount');
    if (!mountEl) return;

    var gc = new GanttChart(mountEl, GANTT_DATA[id]);
    instances[id] = gc;

    container.querySelectorAll('.gantt-row-group').forEach(function(groupRow) {
      var groupId = groupRow.dataset.group;
      groupRow.addEventListener('click', function() {
        groupRow.classList.toggle('is-collapsed');
        container.querySelectorAll('.gantt-row[data-parent="' + groupId + '"]')
          .forEach(function(child) {
            child.style.display = groupRow.classList.contains('is-collapsed') ? 'none' : '';
          });
        gc.toggle(groupId);
      });
    });
  });

  new MutationObserver(function() {
    Object.values(instances).forEach(function(gc) { gc.onThemeChange(); });
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'data-mode'] });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
</script>

### Technical Breakdown
- **Standalone ECharts init:** The Gantt imports ECharts directly via ESM and calls `echarts.init()` on a dedicated `.gantt-chart-mount` div — completely bypassing the Aurora `data-component="aurora-chart"` wrapper and its ResizeObserver/MutationObserver re-init cycle.
- **CSS variable resolution:** `cssVar()` probes each token via `background-color` first, then `color`, then falls back to `#888888`. This handles chart palette tokens (fill colours) correctly across all themes — reading via `color` alone returns `rgba(0,0,0,0)` for fill tokens in Corporate Light mode.
- **Flicker-free hover:** All `renderItem` elements are `silent:true`. Tooltip uses `trigger:'axis'` which fires from ECharts' coordinate lookup, not canvas shape hit-testing — so no canvas repaints occur on hover.
- **Collapse/expand:** The `GanttChart` class maintains a `collapsed` Set. On toggle, `setOption(option, true)` with a freshly built option replaces the full yAxis cleanly.