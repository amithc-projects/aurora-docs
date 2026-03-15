/**
 * pl-map.js
 * Custom controller for the Premier League Stadium Map
 */
import * as echarts from 'https://esm.sh/echarts/core';

// Pythagorean formula to calculate distance between two lat/long points in miles
function calculateDistance(lat1, lon1, lat2, lon2) {
  const dx = (lon2 - lon1) * Math.cos((lat1 * Math.PI) / 180);
  const dy = lat2 - lat1;
  const distBytes = Math.sqrt(dx * dx + dy * dy);
  return Math.round((distBytes * 69) * 10) / 10;
}

function deg2rad(deg) {
  return deg * (Math.PI/180);
}

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById('pl-map-container');
  if (!container) return;

  // We load a high-resolution UK map explicitly
  if (!echarts.getMap('united_kingdom')) {
    try {
        const mapUrl = new URL('./uk.json', import.meta.url).href;
        const geoJson = await fetch(mapUrl).then(r => r.json());
        echarts.registerMap('united_kingdom', geoJson);
    } catch(e) {
        console.error("pl-map: Could not load UK map", e);
        return;
    }
  }

  // Fetch Stadium Data
  let stadiumData = [];
  try {
     stadiumData = await fetch('/aurora-docs/data/pl_stadiums.json').then(r => r.json());
  } catch(e) {
      console.error("pl-map: Failed to load stadium JSON", e);
      return;
  }

  // Transform raw JSON into ECharts series data format
  // We map the Wikipedia logo to the `symbol` property
  const scatterData = stadiumData.map(team => ({
      name: team.name,
      value: [team.long, team.lat, team.stadium], // longitude, latitude, stadium name
      symbol: `image://${team.logo}`,
      symbolSize: [30, 30],
      itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0,0,0,0.3)',
          shadowOffsetY: 5
      }
  }));

  // Ensure chart is not already instantiated by aurora-charts auto-loader
  let chart = echarts.getInstanceByDom(container);
  if (!chart) {
    chart = echarts.init(container, null, { renderer: 'canvas' });
    container._chartInstance = chart;
  }

  // Helper to resolve CSS vars from the active Corporate Theme
  const getThemeVar = (v) => {
      const dummy = document.createElement('div');
      dummy.style.backgroundColor = v;
      document.body.appendChild(dummy);
      const color = window.getComputedStyle(dummy).backgroundColor;
      dummy.remove();
      return color === 'rgba(0, 0, 0, 0)' && !v.includes('transparent') ? v : color;
  };

  // Build the initial chart configuration
  const baseConfig = {
      backgroundColor: 'transparent',
      tooltip: {
          trigger: 'item',
          backgroundColor: getThemeVar('var(--ds-sys-color-surface)'),
          borderColor: getThemeVar('var(--ds-sys-color-border)'),
          textStyle: { color: getThemeVar('var(--ds-sys-color-on-surface)'), fontFamily: 'var(--font-primary)' },
          formatter: function(params) {
              if (params.seriesType === 'scatter') {
                  return `<strong>${params.name}</strong><br/>${params.value[2]}`;
              } else if (params.seriesType === 'lines') {
                  const dist = calculateDistance(params.data.coords[0][1], params.data.coords[0][0], params.data.coords[1][1], params.data.coords[1][0]);
                  return `Distance: <strong>${dist} miles</strong>`;
              }
          }
      },
      geo: {
          map: 'united_kingdom', // Use the new high-res shapefile
          roam: true,
          itemStyle: {
              areaColor: getThemeVar('var(--ds-sys-color-surface-container-high)'),
              borderColor: getThemeVar('var(--ds-sys-color-border)'),
              borderWidth: 1.5
          },
          emphasis: {
              itemStyle: { areaColor: getThemeVar('var(--ds-sys-color-surface-container-highest)') },
              label: { show: false }
          }
      },
      series: [
          {
              name: 'Premier League Stadiums',
              type: 'scatter',
              coordinateSystem: 'geo',
              zlevel: 2,
              data: scatterData
          },
          {
              name: 'Measurement Line',
              type: 'lines',
              coordinateSystem: 'geo',
              zlevel: 1,
              effect: {
                  show: true,
                  period: 3,
                  trailLength: 0.1,
                  color: getThemeVar('var(--ds-sys-color-error)'),
                  symbolSize: 6
              },
              lineStyle: {
                  color: getThemeVar('var(--ds-sys-color-primary)'),
                  width: 3,
                  opacity: 0.8,
                  curveness: 0.2, // Adds a nice arc to the connecting line
                  type: 'dashed'
              },
              data: [] // Initially empty, populated by clicks
          }
      ]
  };

  chart.setOption(baseConfig);

  // Interaction State Machine
  let selectedPoints = [];
  const pointAtext = document.getElementById('point-a-text');
  const pointBtext = document.getElementById('point-b-text');
  const resultText = document.getElementById('calc-result');

  chart.on('click', function(params) {
      if (params.seriesType !== 'scatter') return;

      const teamName = params.name;
      const stadium = params.value[2];
      const coords = [params.value[0], params.value[1]]; // [long, lat]

      // Determine click slot
      if (selectedPoints.length >= 2) {
          // Reset
          selectedPoints = [{ name: teamName, stadium: stadium, coords: coords }];
          pointAtext.innerHTML = `<strong>${teamName}</strong> (${stadium})`;
          pointBtext.innerText = 'Select a second stadium...';
          resultText.innerText = '--';
          
          // Clear lines
          chart.setOption({ series: [{}, { data: [] }] });
      } 
      else if (selectedPoints.length === 1) {
          // Second click -> Draw line and Calculate
          selectedPoints.push({ name: teamName, stadium: stadium, coords: coords });
          pointBtext.innerHTML = `<strong>${teamName}</strong> (${stadium})`;
          
          const p1 = selectedPoints[0];
          const p2 = selectedPoints[1];

          // Convert to decimal and use pythagoras approximation for miles
          const lat1 = p1.coords[1];
          const lon1 = p1.coords[0];
          const lat2 = p2.coords[1];
          const lon2 = p2.coords[0];
          
          const dx = (lon2 - lon1) * Math.cos((lat1 * Math.PI) / 180);
          const dy = lat2 - lat1;
          const distBytes = Math.sqrt(dx * dx + dy * dy);
          const dist = Math.round((distBytes * 69) * 10) / 10; // Approx 69 miles per degree

          // Animate counter upwards
          let currentVal = 0;
          const interval = setInterval(() => {
              currentVal += (dist / 15);
              if (currentVal >= dist) {
                  resultText.innerText = dist;
                  clearInterval(interval);
              } else {
                  resultText.innerText = Math.round(currentVal * 10) / 10;
              }
          }, 30);

          // Plot the animated arc line in ECharts
          chart.setOption({
              series: [
                  {}, // scatter unchanged
                  {
                      name: 'Measurement Line',
                      data: [{
                          coords: [p1.coords, p2.coords],
                          value: dist
                      }]
                  }
              ]
          });
      }
      else {
          // First click
          selectedPoints.push({ name: teamName, stadium: stadium, coords: coords });
          pointAtext.innerHTML = `<strong>${teamName}</strong> (${stadium})`;
      }
  });

  // Handle responsive resizing map
  window.addEventListener('resize', () => chart.resize());

  // Handle Theme Toggle repaints
  const observer = new MutationObserver(() => {
      // Small timeout allows DOM to fully update CSSOM variables
      setTimeout(() => {
          chart.setOption({
              tooltip: {
                  backgroundColor: getThemeVar('var(--ds-sys-color-surface)'),
                  borderColor: getThemeVar('var(--ds-sys-color-border)'),
                  textStyle: { color: getThemeVar('var(--ds-sys-color-on-surface)') }
              },
              geo: {
                  itemStyle: {
                      areaColor: getThemeVar('var(--ds-sys-color-surface-container-high)'),
                      borderColor: getThemeVar('var(--ds-sys-color-border)')
                  },
                  emphasis: {
                      itemStyle: { areaColor: getThemeVar('var(--ds-sys-color-surface-container-highest)') }
                  }
              },
              series: [
                  {}, // scatter
                  {
                      effect: { color: getThemeVar('var(--ds-sys-color-error)') },
                      lineStyle: { color: getThemeVar('var(--ds-sys-color-primary)') }
                  }
              ]
          });
      }, 50);
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'data-mode'] });
});
