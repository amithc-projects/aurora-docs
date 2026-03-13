export function initTimelineLineChart() {
  const containers = document.querySelectorAll('[data-component="timeline-line-chart"]');

  if (containers.length > 0) {
    if (typeof window.Chart === 'undefined') {
      // Load chart.js dynamically
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
      script.onload = () => initInstances(containers);
      document.head.appendChild(script);
    } else {
      initInstances(containers);
    }
  }
}

async function initInstances(containers) {
  for (const container of containers) {
    const dataSrc = container.getAttribute('data-src');
    if (!dataSrc) continue;

    try {
      const response = await fetch(dataSrc);
      const data = await response.json();
      setupTimeline(container, data);
    } catch (e) {
      console.error('Timeline Line Chart: Failed to load data', e);
      container.innerHTML = `<div class="error-msg">Failed to load timeline data.</div>`;
    }
  }
}

function setupTimeline(container, data) {
  const title = container.getAttribute('data-title') || 'Timeline';
  const desc = container.getAttribute('data-desc') || '';
  
  // Pluck the arrays format. The JSON shape likely has { labels: [], datasets: [] } 
  // embedded inside a larger structure, or we calculate it from the `raceData` format.
  
  // If we receive the raw race data array instead of pre-computed chart dataset:
  let chartLabels = [];
  let chartDatasets = [];
  let finalStandings = [];
  
  // Detect shape
  if (data.labels && data.datasets) {
    // Already in Chart.js format, sort alphabetically by label
    chartLabels = data.labels;
    chartDatasets = data.datasets.sort((a,b) => a.label.localeCompare(b.label));
    // Attempt to guess final standings from last point in dataset
    finalStandings = [...chartDatasets].sort((a,b) => {
      const aVal = a.data[a.data.length - 1];
      const bVal = b.data[b.data.length - 1];
      return aVal - bVal; // lower is better conceptually
    }).map(ds => ({ name: ds.label, logo: ds._logo || '' }));
  } else if (Array.isArray(data.raceData) || Array.isArray(data)) {
    // Reconstruct into Chart.js format
    const raceData = Array.isArray(data) ? data : data.raceData;
    const isRank = container.hasAttribute('data-is-rank');
    
    // Ignore meta if present
    const dataPoints = raceData.filter(d => !d._meta && d.standings);
    
    const fallbackColors = {
      "Brighton and Hove Albion": "#0057B8", "Arsenal": "#EF0107", "Liverpool": "#C8102E",
      "Manchester City": "#6CABDD", "Aston Villa": "#95BFE5", "Chelsea": "#034694",
      "Newcastle United": "#241F20", "Tottenham Hotspur": "#132257", "Manchester United": "#DA291C",
      "Brentford": "#E30613", "West Ham United": "#7A263A", "Nottingham Forest": "#DD0000",
      "Fulham": "#ffffff", "Bournemouth": "#DA291C", "Leicester City": "#003090",
      "Crystal Palace": "#1B458F", "Ipswich Town": "#0033A0", "Southampton": "#D71920",
      "Everton": "#003399", "Wolverhampton Wanderers": "#FDB913"
    };
    
    const fallbackLogos = {
        "Brighton and Hove Albion": "36", "Arsenal": "3", "Liverpool": "14",
        "Manchester City": "43", "Aston Villa": "7", "Chelsea": "8",
        "Newcastle United": "4", "Tottenham Hotspur": "6", "Manchester United": "1",
        "Brentford": "94", "West Ham United": "21", "Nottingham Forest": "17",
        "Fulham": "54", "Bournemouth": "91", "Leicester City": "13",
        "Crystal Palace": "31", "Ipswich Town": "40", "Southampton": "20",
        "Everton": "11", "Wolverhampton Wanderers": "39"
    };

    const metaObj = raceData.find(d => d._meta);
    const themeColors = metaObj?._meta?.colors || fallbackColors;
    const themeLogos = metaObj?._meta?.logos || Object.fromEntries(
      Object.entries(fallbackLogos).map(([k, v]) => [k, `https://resources.premierleague.com/premierleague/badges/50/t${v}.png`])
    );
    
    chartLabels = dataPoints.map(d => d.week || d.round || d.date);
    
    const items = [...new Set(dataPoints.flatMap(w => w.standings.map(s => s.team || s.name || s.id)))].sort((a,b) => a.localeCompare(b));
    
    chartDatasets = items.map(item => {
      const itemData = dataPoints.map(point => {
        const found = point.standings.find(s => (s.team || s.name || s.id) === item);
        if (isRank) {
          // If rank, we need to sort it first for that week
          const sorted = [...point.standings].sort((a,b) => {
            const valA = a.points !== undefined ? a.points : a.score;
            const valB = b.points !== undefined ? b.points : b.score;
            return valB - valA;
          });
          const rank = sorted.findIndex(s => (s.team || s.name || s.id) === item) + 1;
          return rank > 0 ? rank : null;
        } else {
          return found ? (found.points !== undefined ? found.points : found.score) : null;
        }
      });
      
      return {
        label: item,
        data: itemData,
        borderColor: themeColors[item] || 'var(--ds-sys-color-primary)',
        backgroundColor: themeColors[item] || 'var(--ds-sys-color-primary)',
        pointBackgroundColor: themeColors[item] || 'var(--ds-sys-color-primary)',
        pointRadius: 4,
        fill: false,
        tension: 0.1,
        hidden: false,
        _logo: themeLogos[item] || ''
      }
    });
    
    // Determine final standings order (use last data point)
    finalStandings = [...chartDatasets].sort((a, b) => {
      const aVal = a.data[a.data.length - 1];
      const bVal = b.data[b.data.length - 1];
      return isRank ? aVal - bVal : bVal - aVal;
    }).map(ds => ({ name: ds.label, logo: ds._logo }));
  }

  // HTML Structure
  container.innerHTML = `
    <div class="timeline-line-chart">
        <div class="timeline-line-chart-header">
            <h2 class="timeline-line-chart-title">${title}</h2>
            ${desc ? `<p class="timeline-line-chart-desc">${desc}</p>` : ''}
        </div>
        
        <div class="timeline-line-chart-body">
            <div class="timeline-line-chart-labels" data-ref="labels" style="--item-count: ${finalStandings.length || 20}"></div>
            <div class="timeline-line-chart-wrapper">
                <canvas data-ref="canvas" class="timeline-line-chart-canvas"></canvas>
            </div>
        </div>

        <div class="timeline-line-chart-controls">
            <div class="timeline-line-chart-controls-group">
                <button class="timeline-line-chart-btn timeline-line-chart-btn-action timeline-line-chart-btn-action--primary" data-action="show-all">Show All</button>
                <button class="timeline-line-chart-btn timeline-line-chart-btn-action" data-action="hide-all">Hide All</button>
            </div>
            <div class="timeline-line-chart-controls-toggles" data-ref="toggles"></div>
        </div>
    </div>
  `;

  // Draw rank labels on the left
  const labelsContainer = container.querySelector('[data-ref="labels"]');
  if (container.hasAttribute('data-is-rank') && finalStandings.length > 0) {
    finalStandings.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'timeline-line-chart-label-item';
      
      const logoHtml = item.logo ? `<img class="timeline-line-chart-logo" src="${item.logo}">` : '';
      
      div.innerHTML = `
          <span class="timeline-line-chart-num">${index + 1}</span>
          <span class="timeline-line-chart-name" title="${item.name}">${item.name}</span>
          ${logoHtml}
      `;
      labelsContainer.appendChild(div);
    });
  } else {
    // Hide left rank bar if not a rank chart
    labelsContainer.style.display = 'none';
  }

  // Init Chart.js
  const canvas = container.querySelector('[data-ref="canvas"]');
  const ctx = canvas.getContext('2d');
  
  const isRankChart = container.hasAttribute('data-is-rank');
  const maxAxis = isRankChart ? finalStandings.length : undefined;

  const chart = new window.Chart(ctx, {
      type: 'line',
      data: { labels: chartLabels, datasets: chartDatasets },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          clip: false,
          layout: {
              padding: { top: 30, bottom: 30, left: 10, right: 20 }
          },
          scales: {
              y: {
                  reverse: isRankChart, // Usually rank charts 1 is at top
                  min: isRankChart ? 1 : undefined,
                  max: maxAxis,
                  offset: isRankChart,
                  ticks: { 
                      display: !isRankChart, // Hide if it's rank, show if generic score
                      color: 'var(--ds-sys-color-on-surface-variant)'
                  },
                  grid: { color: 'var(--ds-sys-color-outline-variant)', drawTicks: false },
                  border: { display: false }
              },
              x: {
                  ticks: { color: 'var(--ds-sys-color-on-surface-variant)', font: { size: 10 } },
                  grid: { color: 'var(--ds-sys-color-outline-variant)' },
                  border: { display: false }
              }
          },
          plugins: {
              legend: { display: false }, // Use custom toggles below
              tooltip: {
                  mode: 'index',
                  intersect: false,
                  padding: 12,
                  backgroundColor: 'var(--ds-sys-color-surface-container-highest)',
                  titleColor: 'var(--ds-sys-color-primary)',
                  bodyColor: 'var(--ds-sys-color-on-surface)',
                  callbacks: {
                      label: (context) => {
                        const prefix = isRankChart ? 'Pos ' : '';
                        return ` ${context.dataset.label}: ${prefix}${context.parsed.y}`;
                      }
                  }
              }
          },
          interaction: { mode: 'nearest', axis: 'x', intersect: false }
      }
  });

  // Toggles
  const togglesContainer = container.querySelector('[data-ref="toggles"]');
  chartDatasets.forEach((ds, idx) => {
      const btn = document.createElement('button');
      btn.innerText = ds.label;
      btn.className = 'timeline-line-chart-btn active';
      btn.onclick = () => {
          const meta = chart.getDatasetMeta(idx);
          meta.hidden = meta.hidden === null ? !chart.data.datasets[idx].hidden : null;
          btn.classList.toggle('active', !meta.hidden);
          chart.update();
      };
      togglesContainer.appendChild(btn);
  });

  // global show/hide
  container.querySelector('[data-action="show-all"]').addEventListener('click', () => toggleAll(true));
  container.querySelector('[data-action="hide-all"]').addEventListener('click', () => toggleAll(false));

  function toggleAll(show) {
      chart.data.datasets.forEach((ds, idx) => {
          const meta = chart.getDatasetMeta(idx);
          meta.hidden = !show;
          const btn = togglesContainer.children[idx];
          if (btn) btn.classList.toggle('active', show);
      });
      chart.update();
  }
}
