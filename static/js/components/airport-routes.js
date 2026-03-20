import * as echarts from 'https://esm.sh/echarts/core';
import { RouteDatabase } from '/aurora-docs/js/data-binary.js?v=2';

let chartInstance = null;
let allAirports = [];
let db = null;
let isDarkTheme = document.documentElement.getAttribute('data-mode') === 'dark';

// DOM Elements
const searchInput = document.getElementById('airport-search');
const countLabel = document.getElementById('airport-count');
const hudOrigin = document.getElementById('hud-origin');
const hudRoutes = document.getElementById('hud-routes');
let globalDatalistHtml = '';
let itinerary = [];

// Modal Elements
const modalBackdrop = document.getElementById('flight-modal-backdrop');
const modalClose = document.getElementById('fm-close');
const fmTitle = document.getElementById('fm-title');
const fmDistance = document.getElementById('fm-distance');
const fmDuration = document.getElementById('fm-duration');
const fmCarriers = document.getElementById('fm-carriers');

async function initMap() {
    const el = document.getElementById('airport-map');
    if (!el) return;

    // Await the Aurora DOM to load the world JSON and register the map geometry
    let attempts = 0;
    const initInterval = setInterval(async () => {
        // Safe check for the global flag injected by aurora-charts.js!
        if (window.__AURORA_WORLD_MAP_READY__) {
            clearInterval(initInterval);
            
            chartInstance = echarts.getInstanceByDom(el);
            if (!chartInstance) {
               chartInstance = echarts.init(el, isDarkTheme ? 'dark' : 'light');
               chartInstance.setOption({ geo: { map: 'world', roam: true } });
            }
            
            await loadData();
        }
        
        attempts++;
        if (attempts > 100) { // 10 seconds timeout fallback
            clearInterval(initInterval);
            console.error("Antigravity: Map geometry timed out!");
            document.getElementById('airport-count').innerText = "Map Geometry Not Found.";
        }
    }, 100);
}

async function loadData() {
    try {
        countLabel.innerText = "Initializing Zero-Latency Map Engine...";
        db = new RouteDatabase();
        await db.load();
        
        // Use the fast binary decoder to extract all nodes
        const decodedList = db.getAllDecodedAirports();
        
        allAirports = decodedList.map(data => {
            return {
               name: data.name,
               rawName: data.name,
               country: data.country_code,
               iata: data.iata,
               value: [data.lon, data.lat, data.routes ? data.routes.length : 0]
            };
        });
        
        const sortedAll = [...allAirports].sort((a,b) => (a.country||'').localeCompare(b.country||'') || (a.name||'').localeCompare(b.name||''));
        sortedAll.forEach(a => {
            globalDatalistHtml += `<option value="${a.iata}">${a.country || ''} - ${a.name}</option>`;
        });
        
        countLabel.innerText = `${allAirports.length.toLocaleString()} Terminals`;
        setupInteractions();
        renderItineraryUI();
        renderItineraryMap();
    } catch (e) {
        countLabel.innerText = "Binary Engine Load Failed.";
        console.error("Failed to load Antigravity routes:", e);
    }
}

function getSeriesColor() {
    return isDarkTheme 
        ? getComputedStyle(document.documentElement).getPropertyValue('--ds-chart-2').trim() || '#FF4081'
        : getComputedStyle(document.documentElement).getPropertyValue('--ds-chart-1').trim() || '#3F51B5';
}

function getBgColor() {
    return getComputedStyle(document.documentElement).getPropertyValue('--ds-sys-color-surface').trim() || (isDarkTheme ? '#121212' : '#ffffff');
}

function renderPoints(data) {
    if (!chartInstance) return;

    chartInstance.setOption({
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'item',
            formatter: (params) => {
                if (params.seriesType === 'scatter') {
                    // Outbound route count is packed into value[2]
                    const routeCount = params.data.value[2];
                    return `<strong>${params.data.name}</strong><br/>Outbound Flights: ${routeCount}`;
                }
                if (params.seriesType === 'lines') {
                   return `Flight to ${params.data.toName}`;
                }
                return params.name;
            }
        },
        geo: {
            map: 'world',
            roam: true,
            selectedMode: 'single',
            layoutCenter: ['50%', '50%'],
            layoutSize: '100%',
            itemStyle: {
               areaColor: isDarkTheme ? '#1e1e1e' : '#e0e0e0',
               borderColor: isDarkTheme ? '#444' : '#fff'
            },
            emphasis: {
                itemStyle: {
                    areaColor: isDarkTheme ? '#333' : '#cccccc'
                }
            }
        },
        series: [
            {
                name: 'Airports',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: data,
                symbolSize: 3,
                large: true, // Crucial for rendering 7k+ points natively
                itemStyle: {
                    color: getSeriesColor(),
                    opacity: 0.8
                },
                emphasis: {
                   itemStyle: { color: '#FFD700', shadowBlur: 10, shadowColor: '#FFD700' }
                }
            }
        ]
    }, { replaceMerge: ['series'] }); // Only cleanly diff the series block
}

function renderItineraryUI() {
    const container = document.getElementById('itinerary-stops');
    if (!container) return;
    
    let html = '';
    
    // 1. Render Locked Stops
    itinerary.forEach((iata, index) => {
        const ap = db.getAirport(iata);
        html += `
          <div style="background: var(--ds-sys-color-surface-container); padding: 12px 16px; border-radius: 8px; border-left: 4px solid var(--ds-sys-color-primary); display: flex; justify-content: space-between; align-items: center;">
             <div>
                <span style="font-size: 0.8rem; font-weight: 700; color: var(--ds-sys-color-on-surface-variant); text-transform: uppercase;">Leg ${index + 1}</span>
                <div style="font-weight: 600; font-size: 1.1rem; color: var(--ds-sys-color-on-surface);"><span style="color: var(--ds-sys-color-primary);">${iata}</span> ${ap ? ap.name : ''}</div>
             </div>
             <div style="display: flex; gap: 8px; align-items: center;">
                <button class="itinerary-del-btn" data-index="${index}" style="background: transparent; border: none; cursor: pointer; display: flex; align-items: center; color: var(--ds-sys-color-on-surface-variant); padding: 4px;" title="Remove this leg">
                    <span class="material-symbols-outlined" style="font-size: 20px;">close</span>
                </button>
                ${index > 0 ? `<span class="material-symbols-outlined" style="color: var(--ds-sys-color-primary);">flight_land</span>` : `<span class="material-symbols-outlined" style="color: var(--ds-sys-color-primary);">flight_takeoff</span>`}
             </div>
          </div>
        `;
    });
    
    // 2. Render combobox for NEXT stop
    if (itinerary.length === 0) {
        html += `
          <div style="position: relative;">
            <input type="text" id="itinerary-origin-input" list="dl-origin" class="search-input" placeholder="Type a city, country, or IATA..." style="width: 100%; box-sizing: border-box;" autocomplete="off" />
            <datalist id="dl-origin">${globalDatalistHtml}</datalist>
            <span class="material-symbols-outlined" style="position: absolute; right: 12px; top: 12px; pointer-events: none; color: var(--ds-sys-color-on-surface-variant);">search</span>
          </div>
        `;
    } else {
        const lastCode = itinerary[itinerary.length - 1];
        const lastDb = db.getAirport(lastCode);
        
        if (lastDb && lastDb.routes && lastDb.routes.length > 0) {
            let options = '';
            const destItems = lastDb.routes.map(r => {
                const d = db.getAirport(r.iata);
                return d ? { iata: r.iata, name: d.name, country: d.country_code } : null;
            }).filter(Boolean).sort((a,b) => (a.country||'').localeCompare(b.country||'') || (a.name||'').localeCompare(b.name||''));
            
            destItems.forEach(d => {
                options += `<option value="${d.iata}">${d.country || ''} - ${d.name}</option>`;
            });
            
            html += `
              <div style="display: flex; gap: 8px; align-items: center; margin-top: 8px;">
                 <span class="material-symbols-outlined" style="color: var(--ds-sys-color-outline); transform: rotate(90deg);">subdirectory_arrow_right</span>
                 <div style="flex: 1; position: relative;">
                   <input type="text" id="itinerary-next-input" list="dl-next" class="search-input" placeholder="Search connecting flights by name or code..." style="width: 100%; box-sizing: border-box;" autocomplete="off" />
                   <datalist id="dl-next">${options}</datalist>
                   <span class="material-symbols-outlined" style="position: absolute; right: 12px; top: 12px; pointer-events: none; color: var(--ds-sys-color-on-surface-variant);">search</span>
                 </div>
              </div>
            `;
        } else {
            html += `<div style="font-style: italic; color: #f43f5e; padding: 12px;">Terminal hub reached - No outbound flights.</div>`;
        }
    }
    
    container.innerHTML = html;
    
    // 3. Attach Input Listeners
    setTimeout(() => {
        const originInput = document.getElementById('itinerary-origin-input');
        if (originInput) {
            const handleOrigin = (e) => {
                const val = e.target.value.trim().toUpperCase();
                if (val.length === 3 && itinerary.length === 0) {
                     if (db.getAirport(val)) {
                         itinerary.push(val);
                         renderItineraryUI();
                         renderItineraryMap();
                     } else if (e.type === 'change') {
                         e.target.value = '';
                         e.target.placeholder = 'Unknown IATA!';
                     }
                }
            };
            originInput.addEventListener('input', handleOrigin);
            originInput.addEventListener('change', handleOrigin);
        }

        const nextInput = document.getElementById('itinerary-next-input');
        if (nextInput) {
            const handleNext = (e) => {
                let val = e.target.value.trim().toUpperCase();
                
                // If selected directly from the datalist, intercept the full text label and extract the IATA
                const match = val.match(/\(([A-Z]{3})\)$/);
                if (match) val = match[1];
                
                if (val && val.length === 3 && itinerary.length > 0) {
                    const lastCode = itinerary[itinerary.length - 1];
                    const lastDb = db.getAirport(lastCode);
                    if (lastDb && lastDb.routes.find(r => r.iata === val) && val !== lastCode) {
                        itinerary.push(val);
                        renderItineraryUI();
                        renderItineraryMap();
                    } else if (e.type === 'change') {
                        e.target.value = '';
                    }
                }
            };
            nextInput.addEventListener('input', handleNext);
            nextInput.addEventListener('change', handleNext);
        }
        
        // Attach delete listeners
        document.querySelectorAll('.itinerary-del-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt(e.currentTarget.getAttribute('data-index'));
                if (!isNaN(idx)) {
                    itinerary = itinerary.slice(0, idx);
                    renderItineraryUI();
                    renderItineraryMap();
                }
            });
        });
    }, 10);
}

function renderItineraryMap() {
    if (!chartInstance) return;
    
    if (itinerary.length === 0) {
         chartInstance.setOption({
             series: [
                 { name: 'Airports', data: allAirports, coordinateSystem: 'geo', type: 'scatter', symbolSize: 3, large: true, itemStyle: { color: getSeriesColor(), opacity: 0.8 } },
                 { name: 'Committed Flights', coordinateSystem: 'geo', type: 'lines', data: [] },
                 { name: 'Possible Routes', coordinateSystem: 'geo', type: 'lines', data: [] },
                 { name: 'Itinerary Stops', coordinateSystem: 'geo', type: 'effectScatter', data: [] },
                 { name: 'Possible Destinations', coordinateSystem: 'geo', type: 'scatter', data: [] }
             ]
         });
         hudOrigin.innerText = "None Selected";
         hudRoutes.innerText = "Awaiting selection";
         return;
    }
    
    const committedLines = [];
    const committedEndpoints = [];
    
    for(let i = 0; i < itinerary.length; i++) {
        const ap = db.getAirport(itinerary[i]);
        if (!ap) continue;
        
        committedEndpoints.push({ name: ap.name, iata: itinerary[i], value: [ap.lon, ap.lat] });
        
        if (i < itinerary.length - 1) {
            const nextAp = db.getAirport(itinerary[i+1]);
            if (nextAp) committedLines.push({ coords: [ [ap.lon, ap.lat], [nextAp.lon, nextAp.lat] ] });
        }
    }
    
    const possibleLines = [];
    const possibleEndpoints = [];
    const lastCode = itinerary[itinerary.length - 1];
    const lastDb = db.getAirport(lastCode);
    
    if (lastDb && lastDb.routes) {
        lastDb.routes.forEach(route => {
            const dest = db.getAirport(route.iata);
            if (dest && !itinerary.includes(dest.iata)) {
                possibleLines.push({ coords: [ [lastDb.lon, lastDb.lat], [dest.lon, dest.lat] ], toName: dest.name || route.iata });
                possibleEndpoints.push({ name: dest.name, iata: dest.iata, value: [dest.lon, dest.lat] });
            }
        });
    }

    hudOrigin.innerText = lastDb.name;
    hudRoutes.innerText = `Mapped ${itinerary.length-1} connection(s). Exploring ${possibleLines.length} direct flights.`;

    chartInstance.setOption({
        series: [
            { name: 'Airports', type: 'scatter', coordinateSystem: 'geo', data: allAirports, symbolSize: 2, large: true, itemStyle: { color: getSeriesColor(), opacity: 0.1 } },
            { name: 'Possible Destinations', type: 'scatter', coordinateSystem: 'geo', data: possibleEndpoints, symbolSize: 4, itemStyle: { color: '#0ea5e9', opacity: 0.8 } },
            { name: 'Possible Routes', type: 'lines', coordinateSystem: 'geo', lineStyle: { color: '#0ea5e9', width: 1, opacity: 0.4, curveness: 0.3 }, data: possibleLines },
            { name: 'Itinerary Stops', type: 'effectScatter', coordinateSystem: 'geo', data: committedEndpoints, symbolSize: 8, showEffectOn: 'render', rippleEffect: { brushType: 'stroke', scale: 2 }, itemStyle: { color: '#f43f5e' } },
            { name: 'Committed Flights', type: 'lines', coordinateSystem: 'geo', lineStyle: { width: 3, opacity: 1, curveness: 0.3, color: '#f43f5e' }, data: committedLines },
            { name: 'Committed Flight Trails', type: 'lines', coordinateSystem: 'geo', effect: { show: true, period: 3, trailLength: 0.2, symbolSize: 5, color: '#f43f5e' }, lineStyle: { width: 0, opacity: 0, curveness: 0.3 }, data: committedLines }
        ]
    });
}

function setupInteractions() {
    // Top Input Bar (Faint Search filter over general global nodes)
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query === '') {
            renderItineraryMap();
            countLabel.innerText = `${allAirports.length.toLocaleString()} Terminals`;
            return;
        }
        const filtered = allAirports.filter(a => a.name.toLowerCase().includes(query) || a.iata.toLowerCase().includes(query) || (a.country && a.country.toLowerCase().includes(query)));
        chartInstance.setOption({ series: [{ name: 'Airports', type: 'scatter', data: filtered, symbolSize: 4, itemStyle: { color: getSeriesColor(), opacity: 1 } }] });
        countLabel.innerText = `${filtered.length.toLocaleString()} Terminals`;
    });

    const resetBtn = document.getElementById('reset-itinerary-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            itinerary = [];
            renderItineraryUI();
            renderItineraryMap();
        });
    }

    // Map Event Listener allows clicking to add to Itinerary!
    chartInstance.on('click', (params) => {
        if (params.seriesType === 'scatter' || params.seriesType === 'effectScatter') {
           const iata = params.data.iata;
           if (iata) {
               if (itinerary.length === 0) {
                   itinerary.push(iata);
                   renderItineraryUI();
                   renderItineraryMap();
               } else {
                   const lastCode = itinerary[itinerary.length - 1];
                   const lastDb = db.getAirport(lastCode);
                   if (lastDb && lastDb.routes.find(r => r.iata === iata)) {
                       itinerary.push(iata);
                       renderItineraryUI();
                       renderItineraryMap();
                   }
               }
           }
        } else if (params.seriesType === 'lines' && params.seriesName === 'Possible Routes') {
           showFlightModal(params.data, hudOrigin.innerText);
        }
    });

    // Modal Close Listeners
    modalClose.addEventListener('click', () => modalBackdrop.classList.remove('active'));
    modalBackdrop.addEventListener('click', (e) => {
        if(e.target === modalBackdrop) modalBackdrop.classList.remove('active');
    });

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'data-mode') {
                isDarkTheme = document.documentElement.getAttribute('data-mode') === 'dark';
                if (chartInstance && searchInput.value.trim() === '') {
                   renderItineraryMap();
                }
            }
        });
    });
    observer.observe(document.documentElement, { attributes: true });
}

function showFlightModal(lineData, originName) {
    const flight = lineData.flightData;
    
    // Header
    fmTitle.innerText = `${originName} to ${lineData.toName}`;
    
    // Telemetry stats
    fmDistance.innerText = flight.km ? `${flight.km.toLocaleString()} km` : 'Unknown';
    fmDuration.innerText = flight.min ? `${flight.min} mins` : 'Unknown';
    
    // Carriers formatting
    fmCarriers.innerHTML = '';
    if (flight.carriers && flight.carriers.length > 0) {
        flight.carriers.forEach(c => {
            const span = document.createElement('span');
            span.className = 'carrier-tag';
            span.innerText = c.name || c.iata || 'Unknown';
            fmCarriers.appendChild(span);
        });
    } else {
        fmCarriers.innerHTML = '<span class="f-label" style="font-style:italic">Carrier unknown</span>';
    }

    // Launch
    modalBackdrop.classList.add('active');
}

// Bootloader
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMap);
} else {
    initMap();
}
