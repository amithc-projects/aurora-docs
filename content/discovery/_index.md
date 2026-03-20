---
title: "Antigravity Discovery Platform"
description: "High-performance Map Visualization using O(logn) binary ArrayBuffer decoding."
menu:
  main:
    weight: 10
---

Welcome to **Antigravity**, Aurora's high-performance geospatial discovery engine. This interactive layout leverages a custom 500KB packed ArrayBuffer to lazily fetch from 3,854 global airports instantly, without ever parsing a JSON file or requesting an API server.

{{< demo >}}
<div style="display: grid; grid-template-columns: 320px 1fr; gap: 0; border: 1px solid var(--ds-sys-color-border); border-radius: var(--ds-sys-radius-card); overflow: hidden; height: 650px; background: var(--ds-sys-color-surface);">
  
  <!-- Left Column: Query Panel -->
  <aside style="background: var(--ds-sys-color-surface-container-lowest); border-right: 1px solid var(--ds-sys-color-border); padding: 2rem; display: flex; flex-direction: column; gap: 2rem; overflow-y: auto;">
    
    <div>
      <h2 style="margin: 0 0 0.5rem 0; font-size: 1.25rem; font-weight: 800; letter-spacing: -0.5px;">Flight Operations</h2>
      <p style="margin: 0; font-size: 0.85rem; color: var(--ds-sys-color-on-surface-variant); line-height: 1.4;">
        Explore routes instantly using our zero-latency embedded binary engine.
      </p>
    </div>

    <!-- Point to Point Search -->
    <div class="l-stack">
      <div style="font-size: 0.9rem; font-weight: 600; text-transform: uppercase;">Route Analysis</div>
      
      <div class="form-group" style="margin-bottom: 1rem;">
        <label class="form-label" style="font-size: 0.8rem;">Origin Hub (IATA)</label>
        <div style="position: relative; display: flex; align-items: center;">
          <span class="material-symbols-outlined" style="position: absolute; left: 12px; color: var(--ds-sys-color-on-surface-variant); font-size: 1.2rem;">flight_takeoff</span>
          <input type="text" id="ag-origin" style="width: 100%; padding: 0.75rem 1rem 0.75rem 2.5rem; border: 1px solid var(--ds-sys-color-border); border-radius: var(--ds-sys-radius-base); background: var(--ds-sys-color-surface); font-family: inherit; font-size: 0.95rem; text-transform: uppercase;" placeholder="e.g. LHR" maxlength="3">
        </div>
      </div>

      <div class="form-group" style="margin-bottom: 1rem;">
        <label class="form-label" style="font-size: 0.8rem;">Destination Hub (IATA)</label>
        <div style="position: relative; display: flex; align-items: center;">
          <span class="material-symbols-outlined" style="position: absolute; left: 12px; color: var(--ds-sys-color-on-surface-variant); font-size: 1.2rem;">flight_land</span>
          <input type="text" id="ag-dest" style="width: 100%; padding: 0.75rem 1rem 0.75rem 2.5rem; border: 1px solid var(--ds-sys-color-border); border-radius: var(--ds-sys-radius-base); background: var(--ds-sys-color-surface); font-family: inherit; font-size: 0.95rem; text-transform: uppercase;" placeholder="e.g. JFK" maxlength="3">
        </div>
      </div>
      
      <button id="ag-find-route" class="btn btn-primary" style="width: 100%; justify-content: center; font-weight: 600;">Plot Direct Route</button>
    </div>

    <!-- Continental Discovery -->
    <div class="l-stack" style="padding-top: 1.5rem; border-top: 1px solid var(--ds-sys-color-border);">
      <div style="font-size: 0.9rem; font-weight: 600; text-transform: uppercase; margin-bottom: 0.5rem;">Regional Hubs</div>
      
      <div style="display: flex; gap: 0.5rem;">
        <button class="ag-region-btn" data-region="NA" style="flex: 1; padding: 0.5rem; background: var(--ds-sys-color-surface); border: 1px solid var(--ds-sys-color-border); border-radius: var(--ds-sys-radius-base); cursor: pointer; font-weight: 600; font-size: 0.85rem;">NA</button>
        <button class="ag-region-btn" data-region="EU" style="flex: 1; padding: 0.5rem; background: var(--ds-sys-color-surface); border: 1px solid var(--ds-sys-color-border); border-radius: var(--ds-sys-radius-base); cursor: pointer; font-weight: 600; font-size: 0.85rem;">EU</button>
        <button class="ag-region-btn" data-region="AS" style="flex: 1; padding: 0.5rem; background: var(--ds-sys-color-surface); border: 1px solid var(--ds-sys-color-border); border-radius: var(--ds-sys-radius-base); cursor: pointer; font-weight: 600; font-size: 0.85rem;">AS</button>
      </div>
    </div>
    
  </aside>

  <!-- Right Column: Map Visualizer -->
  <div style="position: relative; background: #cce9f2;">
    <!-- Loading Overlay -->
    <div id="ag-loader" style="position: absolute; inset: 0; background: rgba(255,255,255,0.8); z-index: 10; display: flex; flex-direction: column; justify-content: center; align-items: center; font-weight: 600;">
       <span class="material-symbols-outlined" style="animation: spin 2s linear infinite; font-size: 2rem; margin-bottom: 1rem; color: var(--ds-sys-color-primary);">sync</span>
       Initializing Binary Engine...
    </div>

    <!-- ECharts Container -->
    <div id="ag-map-container" data-component="aurora-chart" data-map="world" style="width: 100%; height: 100%;">
      <script type="application/json">
        {
          "tooltip": { "trigger": "item" },
          "geo": {
            "map": "world",
            "roam": true,
            "zoom": 1.2,
            "itemStyle": {
              "areaColor": "#e0e6ed",
              "borderColor": "#ffffff",
              "borderWidth": 1
            },
            "emphasis": {
              "itemStyle": { "areaColor": "#cbd5e1" },
              "label": { "show": false }
            }
          },
          "series": [
            {
              "name": "Flight Routes",
              "type": "lines",
              "coordinateSystem": "geo",
              "zlevel": 2,
              "large": true,
              "effect": {
                "show": true,
                "period": 4,
                "trailLength": 0.2,
                "symbol": "arrow",
                "symbolSize": 5
              },
              "lineStyle": {
                "color": "var(--ds-sys-color-primary)",
                "width": 1.5,
                "opacity": 0.4,
                "curveness": 0.3
              },
              "data": []
            },
            {
              "name": "Airports",
              "type": "scatter",
              "coordinateSystem": "geo",
              "zlevel": 3,
              "symbolSize": 6,
              "itemStyle": {
                 "color": "var(--ds-sys-color-primary)",
                 "borderColor": "#ffffff",
                 "borderWidth": 1
              },
              "data": []
            }
          ]
        }
      </script>
    </div>
  </div>
</div>
{{< /demo >}}

<style>
@keyframes spin { 100% { transform: rotate(360deg); } }
.ag-region-btn:hover { background: var(--ds-sys-color-surface-container-highest) !important; }
.ag-region-btn.active { background: var(--ds-sys-color-primary) !important; color: var(--ds-sys-color-on-primary) !important; border-color: var(--ds-sys-color-primary) !important; }
</style>

<script type="module">
import { RouteDatabase } from '/aurora-docs/js/data-binary.js';

document.addEventListener('DOMContentLoaded', async () => {
    const loader = document.getElementById('ag-loader');
    const btnFind = document.getElementById('ag-find-route');
    const inputOrigin = document.getElementById('ag-origin');
    const inputDest = document.getElementById('ag-dest');
    const regionBtns = document.querySelectorAll('.ag-region-btn');
    
    // 1. Initialize Binary DB
    const db = new RouteDatabase();
    try {
        await db.load();
        loader.style.display = 'none';
        console.log("Antigravity DB Loaded with", db.numAirports, "airports.");
    } catch(e) {
        loader.innerHTML = "Failed to load binary routes.";
        console.error(e);
        return;
    }

    const container = document.getElementById('ag-map-container');
    let chartInstance = null;
    
    const initMap = setInterval(() => {
        if(window.echarts && (chartInstance = echarts.getInstanceByDom(container))) {
            clearInterval(initMap);
            
            // Plot all 3,854 global airports immediately
            chartInstance.setOption({
                series: [
                    { name: "Flight Routes", data: [] },
                    { name: "Airports", data: db.getBasicAirportsInfo() }
                ]
            });
            
            // HOVER-TO-FETCH LOGIC
            chartInstance.on('mouseover', { seriesName: 'Airports' }, (params) => {
                const iata = params.name;
                const airportData = db.getAirport(iata);
                if(!airportData || !airportData.routes) return;
                
                const routeLines = airportData.routes.map(route => {
                    const destData = db.getAirport(route.iata);
                    if(destData) {
                        return { coords: [ [airportData.lon, airportData.lat], [destData.lon, destData.lat] ] };
                    }
                    return null;
                }).filter(Boolean);
                
                chartInstance.setOption({
                    series: [{ name: "Flight Routes", data: routeLines }]
                });
                
                if(window.AuroraEvents) window.AuroraEvents.emitUI('aurora:ui:map_hover', { iata });
            });
        }
    }, 100);

    const plotRoute = (originNode, destNode) => {
        if(!chartInstance) return;
        chartInstance.setOption({
            series: [{
                name: "Flight Routes",
                data: [{ coords: [ [originNode.lon, originNode.lat], [destNode.lon, destNode.lat] ] }]
            }]
        });
    };

    // Point to Point Click Handler
    btnFind.addEventListener('click', () => {
        const o = inputOrigin.value.trim().toUpperCase();
        const d = inputDest.value.trim().toUpperCase();
        if(o.length !== 3 || d.length !== 3) return alert("Please enter 3-letter IATA codes.");
        
        const originData = db.getAirport(o);
        const destData = db.getAirport(d);
        
        if(!originData) return alert("Origin airport not found.");
        if(!destData) return alert("Destination airport not found.");
        
        plotRoute(originData, destData);
    });
    
    // Quick Demo Buttons for Continental hubs
    // For demo purposes we just hardcode a major hub plot
    regionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            regionBtns.forEach(b => b.classList.remove('active'));
            const target = e.target;
            target.classList.add('active');
            
            const region = target.getAttribute('data-region');
            if(region === 'EU') { inputOrigin.value = 'LHR'; inputDest.value = 'CDG'; }
            if(region === 'NA') { inputOrigin.value = 'JFK'; inputDest.value = 'LAX'; }
            if(region === 'AS') { inputOrigin.value = 'HND'; inputDest.value = 'SIN'; }
            btnFind.click();
        });
    });
});
</script>
