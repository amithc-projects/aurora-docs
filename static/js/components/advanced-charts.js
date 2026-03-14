export function initAdvancedCharts() {
  const containers = document.querySelectorAll('[data-component="advanced-chart"]');

  if (containers.length > 0) {
    if (typeof window.Chart === 'undefined') {
      // Load chart.js dynamically from CDN
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
      script.onload = () => {
        applyGlobalDefaults();
        initInstances(containers);
      };
      document.head.appendChild(script);
    } else {
      applyGlobalDefaults();
      initInstances(containers);
    }
  }
}

function applyGlobalDefaults() {
  if (window.Chart && !window._auroraChartDefaultsApplied) {
    // Force all Chart.js instances to inherit system typography and grid colors by default
    // We must resolve them to actual computed values as Chart.defaults doesn't auto-parse "var()" inside Canvas
    window.Chart.defaults.color = resolveCSSVariable('var(--ds-sys-color-on-surface-variant)');
    window.Chart.defaults.borderColor = resolveCSSVariable('var(--ds-sys-color-outline-variant)');
    window._auroraChartDefaultsApplied = true;

    // Canvas doesn't automatically repaint when CSS Custom Properties change.
    // Listen for theme/mode toggles on the HTML element to forcefully update all charts live.
    const observer = new MutationObserver(() => {
      document.querySelectorAll('[data-component="advanced-chart"]').forEach(container => {
        if (container._originalConfig) {
          setupChart(container, container._originalConfig);
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'data-mode'] });
  }
}

/**
 * Traverses an object and replaces any CSS var() strings with their computed value.
 * Chart.js Canvas cannot natively process 'var(--color)' syntax.
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
 * Creates a dummy element to force the browser to compute the CSS value of a variable or function (e.g. color-mix)
 */
function resolveCSSVariable(cssString) {
  const dummy = document.createElement('div');
  dummy.style.color = cssString;
  dummy.style.display = 'none';
  document.body.appendChild(dummy);
  const computedColor = window.getComputedStyle(dummy).color;
  dummy.remove();
  return computedColor || cssString;
}

async function initInstances(containers) {
  for (const container of containers) {
    let config = null;

    // 1. Try reading the config from an embedded JSON script
    const scriptRef = container.querySelector('script[data-ref="config"][type="application/json"]');
    if (scriptRef) {
      try {
        config = JSON.parse(scriptRef.textContent);
      } catch (e) {
        console.error('Advanced Chart: Failed to parse inline JSON config', e);
      }
    } 
    // 2. Fallback to external JSON file via data-src
    else {
      const dataSrc = container.getAttribute('data-src');
      if (dataSrc) {
        try {
          const response = await fetch(dataSrc);
          config = await response.json();
        } catch (e) {
          console.error('Advanced Chart: Failed to fetch external config', e);
        }
      }
    }

    if (!config) {
      container.innerHTML = `<div class="error-msg">Failed to load chart configuration.</div>`;
      continue;
    }

    setupChart(container, config);
  }
}

function setupChart(container, config) {
  let canvas = container.querySelector('[data-ref="canvas"]');
  
  // Create wrapper and canvas if not manually defined by user
  if (!canvas) {
    container.innerHTML = `
      <div class="advanced-chart-canvas-wrapper">
         <canvas data-ref="canvas"></canvas>
      </div>
    `;
    canvas = container.querySelector('[data-ref="canvas"]');
  }

  const ctx = canvas.getContext('2d');
  
  // Store original config so the observer can re-paint if the theme changes
  container._originalConfig = config;

  // Recursively resolve any var(--...) or color-mix inside the JSON into raw RBG/HEX
  const themedConfig = resolveThemeVariables(config);
  
  // Merge aurora responsive defaults if not overridden by the user config
  const finalConfig = {
    ...themedConfig,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      ...themedConfig.options
    }
  };

  // If chart already exists, destroy it before repainting
  if (container._chartInstance) {
    container._chartInstance.destroy();
  }

  container._chartInstance = new window.Chart(ctx, finalConfig);
}
