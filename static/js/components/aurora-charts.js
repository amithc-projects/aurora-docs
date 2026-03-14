/**
 * js/components/aurora-charts.js
 * An ES Module wrapper for tree-shaken Apache ECharts
 */

// Import Core ECharts Engine
import * as echarts from 'https://esm.sh/echarts/core';

// Import Specific Charts
import {
  BarChart,
  LineChart,
  PieChart,
  ScatterChart,
  RadarChart,
  TreemapChart,
  SunburstChart,
  FunnelChart,
  CustomChart,
  BoxplotChart, 
  ParallelChart, 
  CandlestickChart, 
  ThemeRiverChart, 
  PictorialBarChart, 
  HeatmapChart, 
  TreeChart, 
  GraphChart, 
  SankeyChart,
  EffectScatterChart,
  LinesChart,
  MapChart
} from 'https://esm.sh/echarts/charts';

// Import Specific Features (Tooltips, Grid, Legends, etc.)
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  PolarComponent,
  DataZoomComponent,
  ParallelComponent, 
  VisualMapComponent, 
  CalendarComponent, 
  SingleAxisComponent,
  GeoComponent
} from 'https://esm.sh/echarts/components';

// Import Renderer
import { CanvasRenderer } from 'https://esm.sh/echarts/renderers';

// Register precisely what we need with ECharts core
echarts.use([
  BarChart, LineChart, PieChart, ScatterChart, RadarChart, TreemapChart, SunburstChart, FunnelChart, CustomChart,
  BoxplotChart, ParallelChart, CandlestickChart, ThemeRiverChart, PictorialBarChart, HeatmapChart, TreeChart, GraphChart, SankeyChart,
  EffectScatterChart, LinesChart, MapChart,
  TitleComponent, TooltipComponent, GridComponent, DatasetComponent, TransformComponent, LegendComponent, PolarComponent, DataZoomComponent,
  ParallelComponent, VisualMapComponent, CalendarComponent, SingleAxisComponent, GeoComponent,
  CanvasRenderer
]);

/**
 * Creates a dummy element to force the browser to compute the CSS value of a variable or function (e.g. color-mix)
 * This ensures ECharts can render CSS variables even deeply nested within its canvas.
 */
function resolveCSSVariable(cssString) {
  const dummy = document.createElement('div');
  dummy.style.backgroundColor = cssString;
  dummy.style.display = 'none';
  document.body.appendChild(dummy);
  const computedColor = window.getComputedStyle(dummy).backgroundColor;
  dummy.remove();
  
  if (computedColor === 'rgba(0, 0, 0, 0)' && !cssString.includes('transparent')) {
    return cssString; // Fallback
  }
  return computedColor || cssString;
}

/**
 * Traverses an ECharts config object and replaces any native CSS 'var(...)' strings 
 * with their computed RGB counterpart so Canvas can render them correctly.
 */
function resolveThemeVariables(obj) {
  if (typeof obj === 'string' && obj.includes('var(')) {
    return resolveCSSVariable(obj);
  }
  
  if (Array.isArray(obj)) {
    return obj.map(resolveThemeVariables);
  }
  
  if (obj !== null && typeof obj === 'object') {
    const newObj = {};
    for (const key in obj) {
      newObj[key] = resolveThemeVariables(obj[key]);
    }
    return newObj;
  }
  
  return obj;
}

/**
 * Traverses an ECharts config object and evaluates stringified functions.
 * Useful for passing functions like `symbolSize` via JSON.
 * Syntax: `"$(function() { ... return function(x) { ... } })()$"`
 */
function resolveFunctionStrings(obj) {
  if (typeof obj === 'string') {
    if (obj.startsWith('$(') && obj.endsWith(')$')) {
      try {
        const funcStr = obj.slice(2, -2);
        // Safely evaluate the function by wrapping it
        // The funcStr is like "function() { return function (data) { return data[2]; }; })()"
        // We use eval or a new Function that executes the IIFE.
        return eval('(' + funcStr + ')');
      } catch (err) {
        console.error("AuroraCharts: Error parsing function string:", obj, err);
        return obj;
      }
    }
    return obj;
  }
  
  if (Array.isArray(obj)) {
    return obj.map(resolveFunctionStrings);
  }
  
  if (obj !== null && typeof obj === 'object') {
    const newObj = {};
    for (const key in obj) {
      newObj[key] = resolveFunctionStrings(obj[key]);
    }
    return newObj;
  }
  
  return obj;
}

/**
 * Initializes, themes, and binds an ECharts instance to a DOM element.
 */
function setupChart(container, configObj) {
  // Store original for repainting on theme toggles
  container._originalConfig = configObj;

  // Resolve stringified functions first
  let resolvedConfig = resolveFunctionStrings(configObj);
  
  // Resolve CSS variables against current active theme
  resolvedConfig = resolveThemeVariables(resolvedConfig);

  // Default Aurora Styles injections
  const textColor = resolveCSSVariable('var(--ds-sys-color-on-surface-variant)');
  const axisColor = resolveCSSVariable('var(--ds-sys-color-outline-variant)');
  
  // Inject global base text styles if not overridden by the user config
  if (!resolvedConfig.textStyle) resolvedConfig.textStyle = {};
  resolvedConfig.textStyle.color = resolvedConfig.textStyle.color || textColor;
  resolvedConfig.textStyle.fontFamily = resolvedConfig.textStyle.fontFamily || 'var(--font-primary)';

  // Ensure tooltips look native by default
  if (!resolvedConfig.tooltip) resolvedConfig.tooltip = {};
  resolvedConfig.tooltip.backgroundColor = resolvedConfig.tooltip.backgroundColor || resolveCSSVariable('var(--ds-sys-color-surface)');
  resolvedConfig.tooltip.borderColor = resolvedConfig.tooltip.borderColor || resolveCSSVariable('var(--ds-sys-color-border)');
  resolvedConfig.tooltip.textStyle = resolvedConfig.tooltip.textStyle || { color: resolveCSSVariable('var(--ds-sys-color-on-surface)') };
  
  // Destroy existing instance if repainting
  if (container._chartInstance) {
    container._chartInstance.dispose();
  }

  // Initialize ECharts instance
  // ECharts has a built in 'dark' theme string, but passing null lets us run entirely off Aurora's resolved config vars
  const chart = echarts.init(container, null, { renderer: 'canvas' });
  chart.setOption(resolvedConfig);

  container._chartInstance = chart;

  // Make it responsive
  window.addEventListener('resize', () => {
    chart.resize();
  });
}

function initAuroraCharts() {
  const containers = document.querySelectorAll('[data-component="aurora-chart"]');
  if (containers.length === 0) return;

  const processChart = (container) => {
    // 1. Check for inline JSON config
    const inlineScript = container.querySelector('script[type="application/json"][data-ref="config"]');
    if (inlineScript) {
      try {
        const configStr = inlineScript.textContent;
        const configObj = JSON.parse(configStr);
        setupChart(container, configObj);
      } catch (e) {
        console.error("AuroraCharts: Error parsing inline JSON configuration.", e);
      }
    } 
    // 2. Or load from external data source
    else if (container.dataset.src) {
      fetch(container.dataset.src)
        .then(response => response.json())
        .then(data => setupChart(container, data))
        .catch(err => console.error("AuroraCharts: Failed to fetch external chart data.", err));
    }
  };

  containers.forEach(container => {
    // Check if chart requires a Map to be registered first
    if (container.dataset.map === 'world') {
      const mapUrl = new URL('../world.json', import.meta.url).href;
      fetch(mapUrl)
        .then(res => {
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          return res.json();
        })
        .then(geoJson => {
          echarts.registerMap('world', geoJson);
          processChart(container);
        })
        .catch(err => console.error("AuroraCharts: Error loading world map JSON", err));
    } else {
      processChart(container);
    }
  });

  // Listen for Dark Mode / Theme toggles globally to force re-computation of CSS vars
  const observer = new MutationObserver(() => {
    document.querySelectorAll('[data-component="aurora-chart"]').forEach(container => {
      if (container._originalConfig) {
        // A tiny delay ensures the CSS variables have fully switched in the DOM
        setTimeout(() => setupChart(container, container._originalConfig), 50);
      }
    });
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'data-mode'] });
}

// Automatically initialize when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAuroraCharts);
} else {
  initAuroraCharts();
}
