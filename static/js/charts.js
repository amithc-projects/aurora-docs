import { events } from './events.js';

export function initCharts() {
  // 1. Initialize Standard SVG Charts (Existing)
  const charts = document.querySelectorAll('.chart[data-type="pie"], .chart[data-type="donut"], .chart[data-type="line"]');
  charts.forEach(table => {
    const type = table.dataset.type;
    const pos = table.dataset.tablePos || 'none';
    
    // DETECT THEME
    const themeClass = Array.from(table.classList).find(c => c.startsWith('chart-theme-'));
    
    const data = parseTable(table, !!themeClass);
    
    const wrapper = document.createElement('div');
    wrapper.className = `chart-svg-wrapper chart--${type} ${themeClass || ''}`;
    
    let svg;
    if (type === 'line') {
      svg = createLineChart(data);
    } else {
      svg = createPieChart(data, type === 'donut');
    }
    
    wrapper.appendChild(svg);
    if (type !== 'line') wrapper.appendChild(createLegend(data));

    if (pos === 'none') {
      table.classList.add('sr-only');
      table.parentNode.insertBefore(wrapper, table);
    } else {
      const container = document.createElement('div');
      container.className = `chart-layout chart-layout--${pos}`;
      table.parentNode.insertBefore(container, table);
      table.className = 'chart-data-table'; 
      if (pos === 'left' || pos === 'top') {
        container.appendChild(table);
        container.appendChild(wrapper);
      } else {
        container.appendChild(wrapper);
        container.appendChild(table);
      }
    }
  });

  // 2. Initialize CSS-Only Donuts (New)
  initCSSDonuts();
}

/**
 * NEW: Tiny JS Helper for CSS Donuts
 * Calculates the cumulative sum of data-values and assigns '--start'
 */
function initCSSDonuts() {
  document.querySelectorAll('.chart-donut tbody').forEach(tbody => {
    let cumulative = 0;
    
    // Loop through each slice (row)
    tbody.querySelectorAll('tr').forEach(row => {
      const td = row.querySelector('td');
      const value = parseFloat(td.dataset.value) || 0;
      
      // Assign the cumulative start point to the row
      // The CSS then uses: background: conic-gradient(..., var(--color) 0 calc((var(--start) + var(--val)) * 100%), ...)
      row.style.setProperty('--start', cumulative);
      
      // Increment for the next slice
      cumulative += value;
    });
  });
}

function parseTable(table, hasTheme) {
  const rows = Array.from(table.querySelectorAll('tbody tr'));
  
  return rows.map((tr, index) => {
    const th = tr.querySelector('th');
    const td = tr.querySelector('td');
    const size = parseFloat(td.getAttribute('data-value')) || 0;
    
    // LOGIC: Check if user provided a specific color style
    let color = td.style.getPropertyValue('--color');
    
    if (!color) {
      if (hasTheme) {
        // USE THEME SEQUENCE: 1-10
        const seqIndex = (index % 10) + 1;
        color = `var(--chart-seq-${seqIndex})`;
      } else {
        // LEGACY DEFAULT
        const colorIndex = (index % 6) + 1; 
        color = `var(--ds-chart-${colorIndex})`;
      }
    }
    
    return {
      label: th ? th.innerText : '',
      value: size,
      color: color,
      formatted: td.innerText
    };
  });
}

/* ... SVG Helpers (Keep existing) ... */
function createSVG(viewBox) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', viewBox);
  svg.classList.add('chart-svg');
  return svg;
}

function createPieChart(data, isDonut) {
  const svg = createSVG('0 0 100 100');
  const total = data.reduce((acc, d) => acc + d.value, 0);
  let startAngle = 0;
  
  data.forEach((d, i) => {
    const angle = (d.value / total) * 360;
    const largeArc = angle > 180 ? 1 : 0;
    const r = 50, cx = 50, cy = 50;
    const x1 = cx + r * Math.cos(Math.PI * startAngle / 180);
    const y1 = cy + r * Math.sin(Math.PI * startAngle / 180);
    const x2 = cx + r * Math.cos(Math.PI * (startAngle + angle) / 180);
    const y2 = cy + r * Math.sin(Math.PI * (startAngle + angle) / 180);
    const dPath = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
    
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', dPath);
    path.setAttribute('fill', d.color);
    path.setAttribute('stroke', 'var(--ds-sys-color-bg-app, white)');
    path.setAttribute('stroke-width', '1');
    path.style.opacity = 0;
    path.style.animation = `chart-fade-in 0.5s ease forwards ${i * 0.1}s`;
    
    const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    title.textContent = `${d.label}: ${d.formatted}`;
    path.appendChild(title);

    // Event Tracking
    path.style.cursor = 'pointer';
    path.addEventListener('click', () => {
      const detail = { label: d.label, value: d.value, formatted: d.formatted };
      events.emitUI('chart_select', { ...detail, message: `Selected ${d.label}: ${d.formatted}` });
      events.emitAnalytics('drilldown', {
        component: 'chart',
        action: 'segment_click',
        metadata: detail
      });
    });

    svg.appendChild(path);
    startAngle += angle;
  });

  if (isDonut) {
    const hole = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    hole.setAttribute('cx', 50); hole.setAttribute('cy', 50); hole.setAttribute('r', 30);
    hole.setAttribute('fill', 'var(--ds-sys-color-bg-app, white)');
    svg.appendChild(hole);
  }
  return svg;
}

function createLegend(data) {
  const ul = document.createElement('ul');
  ul.className = 'chart-legend';
  data.forEach(d => {
    const li = document.createElement('li');
    li.innerHTML = `<span style="background:${d.color}"></span> ${d.label}`;
    ul.appendChild(li);
  });
  return ul;
}

function createLineChart(data) {
  const width = 100, height = 50;
  const svg = createSVG(`0 0 ${width} ${height}`);
  const maxVal = Math.max(...data.map(d => d.value)) || 1;
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - (d.value / maxVal) * height;
    return [x, y];
  });

  let dPath = `M ${points[0][0]} ${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i++) {
    const [x0, y0] = points[i];
    const [x1, y1] = points[i + 1];
    const cX = (x0 + x1) / 2;
    dPath += ` C ${cX} ${y0}, ${cX} ${y1}, ${x1} ${y1}`;
  }

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', dPath);
  path.setAttribute('fill', 'none');
  path.setAttribute('stroke', 'var(--ds-sys-color-primary)');
  path.setAttribute('stroke-width', '2');
  path.setAttribute('stroke-linecap', 'round');
  path.classList.add('chart-line-path');
  svg.appendChild(path);

  points.forEach((p, i) => {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', p[0]); circle.setAttribute('cy', p[1]); circle.setAttribute('r', 2);
    circle.setAttribute('fill', 'var(--ds-sys-color-surface)');
    circle.setAttribute('stroke', 'var(--ds-sys-color-primary)');
    circle.setAttribute('stroke-width', '1.5');
    const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    title.textContent = `${data[i].label}: ${data[i].formatted}`;
    circle.appendChild(title);
    svg.appendChild(circle);
  });
  return svg;
}

