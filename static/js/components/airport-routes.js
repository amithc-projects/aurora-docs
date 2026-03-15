import * as echarts from 'https://esm.sh/echarts/core';

let chartInstance = null;
let allAirports = [];
let airportDict = {};
let isDarkTheme = document.documentElement.getAttribute('data-mode') === 'dark';

// DOM Elements
const searchInput = document.getElementById('airport-search');
const countLabel = document.getElementById('airport-count');
const hudOrigin = document.getElementById('hud-origin');
const hudRoutes = document.getElementById('hud-routes');

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

    // Await the DOM to initialize the aurorachart mapping
    setTimeout(async () => {
        chartInstance = echarts.getInstanceByDom(el);
        if (!chartInstance) {
           chartInstance = echarts.init(el, isDarkTheme ? 'dark' : 'light');
           // Set empty geography if aurorachart hasn't
           chartInstance.setOption({ geo: { map: 'world', roam: true } });
        }
        await loadData();
        setupInteractions();
    }, 300);
}

async function loadData() {
    try {
        countLabel.innerText = "Downloading GPS Routes (22MB)...";
        const response = await fetch('/aurora-docs/data/airline_routes.json');
        airportDict = await response.json();
        
        // Convert dictionary to array for faster ECharts filtering
        for (const [iata, data] of Object.entries(airportDict)) {
            // Only add valid coordinates
            if (data.longitude && data.latitude) {
               allAirports.push({
                   name: data.display_name,
                   rawName: data.name,
                   country: data.country,
                   iata: data.iata,
                   value: [parseFloat(data.longitude), parseFloat(data.latitude), data.routes ? data.routes.length : 0],
                   routes: data.routes || []
               });
            }
        }
        
        countLabel.innerText = `${allAirports.length.toLocaleString()} Terminals`;
        renderPoints(allAirports);
    } catch (e) {
        countLabel.innerText = "Data Load Failed.";
        console.error("Failed to load airport routes:", e);
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

function drawRoutes(originData) {
    if (!originData.routes || originData.routes.length === 0) {
        hudRoutes.innerText = "No direct outbound routes detected.";
        return;
    }

    const linesData = [];
    const destPoints = [{
        name: originData.name,
        value: originData.value // Re-plot Origin point
    }];

    originData.routes.forEach(route => {
        // Find Destination Airport in the Master Dictionary
        const dest = airportDict[route.iata];
        if (dest && dest.longitude && dest.latitude) {
            const destCoords = [parseFloat(dest.longitude), parseFloat(dest.latitude)];
            
            linesData.push({
                coords: [originData.value, destCoords],
                toName: dest.display_name || route.iata,
                flightData: route // retain for the click modal
            });
            
            destPoints.push({
               name: dest.display_name,
               value: destCoords
            });
        }
    });

    hudRoutes.innerText = `Mapping ${linesData.length} direct flights...`;

    // Overlay the routing lines and highlight the endpoints
    chartInstance.setOption({
        series: [
            {
               // Retain original scatter to keep background airports
               name: 'Airports',
               type: 'scatter',
               coordinateSystem: 'geo',
               data: allAirports,
               symbolSize: 2,
               large: true,
               itemStyle: { color: getSeriesColor(), opacity: 0.1 } // Dim inactive
            },
            {
               name: 'Endpoints',
               type: 'effectScatter',
               coordinateSystem: 'geo',
               data: destPoints,
               symbolSize: 6,
               showEffectOn: 'render',
               rippleEffect: { brushType: 'stroke', scale: 3 },
               itemStyle: { color: '#FFD700' }
            },
            {
                name: 'Flights',
                type: 'lines',
                coordinateSystem: 'geo',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 4,     // Seconds to cross line
                    trailLength: 0.4,
                    color: '#FFD700',
                    symbolSize: 4
                },
                lineStyle: {
                    color: getSeriesColor(),
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.3 // Arc curvature for globe feel
                },
                data: linesData
            }
        ]
    });
}

function setupInteractions() {
    // 1. Search Box Filtering
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query === '') {
            // Force Echarts to drop the lines and endpoints to reset state completely
            chartInstance.setOption({
               series: [
                 {
                    name: 'Airports',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: allAirports,
                    symbolSize: 3,
                    large: true,
                    itemStyle: { color: getSeriesColor(), opacity: 0.8 }
                 }
               ]
            }, true); // The `true` flag tells Echarts NOT to merge, but to overwrite
            countLabel.innerText = `${allAirports.length.toLocaleString()} Terminals`;
            hudOrigin.innerText = "None Selected";
            hudRoutes.innerText = "Awaiting selection";
            return;
        }

        const filtered = allAirports.filter(a => 
            a.name.toLowerCase().includes(query) || 
            a.iata.toLowerCase().includes(query) ||
            (a.country && a.country.toLowerCase().includes(query))
        );

        renderPoints(filtered);
        countLabel.innerText = `${filtered.length.toLocaleString()} Terminals`;
    });

    // 2. Map Clicking for Routes & Modals
    chartInstance.on('click', (params) => {
        if (params.seriesType === 'scatter' || params.seriesType === 'effectScatter') {
           const ap = params.data;
           hudOrigin.innerText = ap.name;
           drawRoutes(ap);
        } else if (params.seriesType === 'lines') {
           showFlightModal(params.data, hudOrigin.innerText);
        }
    });

    // 3. Modal Close Listeners
    modalClose.addEventListener('click', () => modalBackdrop.classList.remove('active'));
    modalBackdrop.addEventListener('click', (e) => {
        if(e.target === modalBackdrop) modalBackdrop.classList.remove('active');
    });

    // 4. Theme Toggle Observer
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'data-mode') {
                isDarkTheme = document.documentElement.getAttribute('data-mode') === 'dark';
                if (chartInstance && searchInput.value.trim() === '') {
                   renderPoints(allAirports); // Retrigger with new color vars
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
document.addEventListener('DOMContentLoaded', initMap);
