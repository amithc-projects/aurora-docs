// MapLibre URLs
const MAPLIBRE_CSS = "https://unpkg.com/maplibre-gl@3.6.2/dist/maplibre-gl.css";
const MAPLIBRE_JS = "https://unpkg.com/maplibre-gl@3.6.2/dist/maplibre-gl.js";

// Carto Basemaps (Free, no API key required)
const STYLE_LIGHT = "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";
const STYLE_DARK = "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";

let maplibreLoadPromise = null;

function loadMapLibre() {
    if (maplibreLoadPromise) return maplibreLoadPromise;
    
    maplibreLoadPromise = new Promise((resolve, reject) => {
        if (window.maplibregl) {
            resolve(window.maplibregl);
            return;
        }

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = MAPLIBRE_CSS;
        document.head.appendChild(link);

        const script = document.createElement('script');
        script.src = MAPLIBRE_JS;
        script.onload = () => resolve(window.maplibregl);
        script.onerror = reject;
        document.head.appendChild(script);
    });

    return maplibreLoadPromise;
}

function getStyleForMode() {
    const isDark = document.documentElement.getAttribute('data-mode') === 'dark';
    return isDark ? STYLE_DARK : STYLE_LIGHT;
}

export async function initMaps() {
    const mapContainers = document.querySelectorAll('.aurora-map, [data-component="map"]');
    if (mapContainers.length === 0) return;

    try {
        const maplibregl = await loadMapLibre();
        const activeMaps = [];

        mapContainers.forEach((container, index) => {
            // Ensure ID exists
            if (!container.id) container.id = `aurora-map-${index}`;

            const lat = parseFloat(container.dataset.lat || '40.7128');
            const lng = parseFloat(container.dataset.lng || '-74.0060');
            const zoom = parseFloat(container.dataset.zoom || '12');
            
            const map = new maplibregl.Map({
                container: container.id,
                style: getStyleForMode(),
                center: [lng, lat],
                zoom: zoom,
                attributionControl: false // Optional: Add a custom concise attribution if desired
            });

            map.addControl(new maplibregl.NavigationControl({ showCompass: true }), 'top-right');

            // Browser GPS Location Prompt
            const controls = container.dataset.controls || '';
            if (controls.includes('geolocate')) {
                const geolocateControl = new maplibregl.GeolocateControl({
                    positionOptions: { enableHighAccuracy: true },
                    trackUserLocation: true,
                    showUserLocation: true
                });
                map.addControl(geolocateControl, 'top-right');
                
                // Automatically prompt the user for their location once map is ready
                map.on('load', () => {
                    geolocateControl.trigger();
                });
            }

            // IP-based Geolocation
            if (container.dataset.autoLocate === 'ip') {
                fetch('http://ip-api.com/json')
                    .then(res => res.json())
                    .then(data => {
                        if (data.status === 'success') {
                            map.flyTo({ center: [data.lon, data.lat], zoom: 12 });
                            // Optional: Add a marker for the inferred location
                            new maplibregl.Marker({ color: 'var(--color-brand)' })
                                .setLngLat([data.lon, data.lat])
                                .addTo(map);
                        }
                    })
                    .catch(err => console.error('IP Geolocation failed:', err));
            }

            // Parse embedded markers
            const markerEls = container.querySelectorAll('.aurora-marker');
            markerEls.forEach(el => {
                const mLat = parseFloat(el.dataset.lat);
                const mLng = parseFloat(el.dataset.lng);
                const label = el.dataset.label;
                
                if (!isNaN(mLat) && !isNaN(mLng)) {
                    const markerNode = document.createElement('div');
                    markerNode.className = 'aurora-marker';
                    markerNode.innerHTML = el.innerHTML || `<span class="material-symbols-outlined">location_on</span>`;
                    
                    const marker = new maplibregl.Marker({ element: markerNode })
                        .setLngLat([mLng, mLat])
                        .addTo(map);

                    if (label) {
                        const popup = new maplibregl.Popup({ offset: 25 }).setText(label);
                        marker.setPopup(popup);
                    }
                }
                
                // Remove the source element from DOM since it's now wrapped in maplibre
                el.remove();
            });

            activeMaps.push(map);

            // Expose map instance to DOM and broadcast ready event
            container.auroraMap = map;
            container.dispatchEvent(new CustomEvent('map:ready', {
                detail: { map: map, maplibregl: maplibregl },
                bubbles: true
            }));
        });

        // Listen for Aurora mode changes to swap styles dynamically
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-mode') {
                    const newStyle = getStyleForMode();
                    activeMaps.forEach(m => m.setStyle(newStyle));
                }
            });
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-mode'] });

    } catch (err) {
        console.error('Failed to initialize AuroraMap:', err);
    }
}
