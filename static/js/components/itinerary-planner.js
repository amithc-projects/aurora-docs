import { RouteDatabase } from '/aurora-docs/js/data-binary.js?v=2';

let db = null;
let allAirports = [];
let globalDatalistHtml = '';
let itinerary = [];

async function loadData() {
    try {
        console.log("STEP 1: Starting loadData()");
        await new Promise(r => setTimeout(r, 5));
        
        db = new RouteDatabase();
        console.log("STEP 2: Awaiting DB Load()");
        await db.load();
        
        console.log("STEP 3: Parsing binary records...");
        await new Promise(r => setTimeout(r, 5));
        const decodedList = db.getAllDecodedAirports();
        
        console.log(`STEP 4: Mapping ${decodedList.length} airports...`);
        await new Promise(r => setTimeout(r, 5));
        allAirports = decodedList.map(data => {
            return {
               name: data.name,
               rawName: data.name,
               country: data.country_code,
               iata: data.iata,
               routes: data.routes || []
            };
        });
        
        const sortedAll = [...allAirports].sort((a,b) => (a.country||'').localeCompare(b.country||'') || (a.name||'').localeCompare(b.name||''));
        sortedAll.forEach(a => {
            globalDatalistHtml += `<option value="${a.iata}">${a.country || ''} - ${a.name}</option>`;
        });
        
        console.log(`STEP 6: Setting up initial UI buttons...`);
        await new Promise(r => setTimeout(r, 5));
        const resetBtn = document.getElementById('reset-itinerary-btn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                itinerary = [];
                renderItineraryUI();
            });
        }
        
        console.log("STEP 7: Rendering innerHTML to container!");
        await new Promise(r => setTimeout(r, 5));
        renderItineraryUI();
        console.log("STEP 8: DOM Execution Finished Successfully!");
        
    } catch (e) {
        console.error("Failed to load Antigravity routes:", e);
        document.getElementById('itinerary-stops').innerText = "Binary Engine Load Failed.";
    }
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
                <button class="itinerary-del-btn" data-index="${index}" style="background: transparent; border: none; cursor: pointer; display: flex; align-items: center; color: var(--ds-sys-color-on-surface-variant); padding: 4px;" title="Remove this leg and subsequent connections">
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
            <input type="text" id="itinerary-origin-input" list="dl-origin" class="search-input" placeholder="Type a city, country, or IATA code..." style="width: 100%; box-sizing: border-box; padding: 12px 16px; border-radius: 8px; font-size: 1rem; height: 48px; border: 1px solid var(--ds-sys-color-outline); background: var(--ds-sys-color-surface-container-high); color: var(--ds-sys-color-on-surface);" autocomplete="off" />
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
                   <input type="text" id="itinerary-next-input" list="dl-next" class="search-input" placeholder="Search connecting flights by name or code..." style="width: 100%; box-sizing: border-box; padding: 12px 16px; border-radius: 8px; font-size: 1rem; height: 48px; border: 1px solid var(--ds-sys-color-outline); background: var(--ds-sys-color-surface-container-high); color: var(--ds-sys-color-on-surface);" autocomplete="off" />
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
                }
            });
        });
    }, 10);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadData);
} else {
    loadData();
}
