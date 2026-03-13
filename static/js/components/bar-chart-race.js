export function initBarChartRace() {
  const containers = document.querySelectorAll('[data-component="bar-chart-race"]');

  containers.forEach(async (container) => {
    const dataSrc = container.getAttribute('data-src');
    if (!dataSrc) {
      console.error('Bar Chart Race: Missing data-src attribute');
      return;
    }

    try {
      const response = await fetch(dataSrc);
      const data = await response.json();
      
      // Determine what to map the data from
      // The example has an array of objects: { week: 1, standings: [...] }
      const raceData = data.raceData || data; // handle direct array or property
      
      if (!Array.isArray(raceData) || raceData.length === 0) {
        throw new Error("Invalid race data format.");
      }

      setupRace(container, raceData);
    } catch (e) {
      console.error('Bar Chart Race: Failed to load data from', dataSrc, e);
      container.innerHTML = `<div class="error-msg">Failed to load chart data.</div>`;
    }
  });
}

function setupRace(container, raceData) {
  // Config from data attributes
  const title = container.getAttribute('data-title') || 'Race';
  const labelPrefix = container.getAttribute('data-label-prefix') || 'Round ';
  const maxScore = parseInt(container.getAttribute('data-max-score')) || 100; // Expected max points for scale
  const updateInterval = parseInt(container.getAttribute('data-interval')) || 1200;
  
  // The JSON structure puts _meta as the first object in the array if it exists.
  const metaObj = raceData.find(d => d._meta);
  
  // Default PL Fallbacks since JSON doesn't contain it natively
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

  const themeColors = metaObj?._meta?.colors || fallbackColors;
  
  // Build logo URLs if they are just the IDs
  const themeLogos = metaObj?._meta?.logos || Object.fromEntries(
    Object.entries(fallbackLogos).map(([k, v]) => [k, `https://resources.premierleague.com/premierleague/badges/50/t${v}.png`])
  );
  
  // Filter out the meta object to just get standings data
  const dataPoints = raceData.filter(d => !d._meta && d.standings);

  // Build skeleton
  container.innerHTML = `
    <div class="bar-chart-race">
      <div class="bar-chart-race-header">
          <h2 class="bar-chart-race-title">${title}</h2>
          <div class="bar-chart-race-label" data-ref="label"></div>
      </div>
      <div class="bar-chart-race-container">
        <div class="bar-chart-race-track" data-ref="track"></div>
      </div>
      <div class="bar-chart-race-controls">
          <button class="bar-chart-race-btn" data-action="play">Play Animation</button>
      </div>
    </div>
  `;

  const track = container.querySelector('[data-ref="track"]');
  const label = container.querySelector('[data-ref="label"]');
  const playBtn = container.querySelector('[data-action="play"]');
  const ROW_HEIGHT = 40;

  let currentIdx = 0;
  let interval;
  
  // Gather all unique items
  const items = [...new Set(dataPoints.flatMap(w => w.standings.map(s => s.team || s.name || s.id)))];
  const rows = {};

  // Set minimum height of the track to fit all items (ROW_HEIGHT * itemCount)
  track.style.height = `${items.length * ROW_HEIGHT}px`;

  items.forEach(item => {
    const row = document.createElement('div');
    row.className = 'bar-chart-race-row';
    
    // Check if we have styling mappings, otherwise use fallback generic coloring
    const bgColor = themeColors[item] || `var(--ds-sys-color-primary)`;
    const logoHtml = themeLogos[item] ? `<img class="team-logo" src="${themeLogos[item]}" style="opacity: 0; position: absolute; right: 5px; height: 24px; transition: opacity 0.5s;">` : '';
    
    row.innerHTML = `
        <div class="bar-chart-race-name" title="${item}">${item}</div>
        <div class="bar-chart-race-bar-wrapper">
            <div class="bar-chart-race-bar" style="background-color: ${bgColor}; width: 0%">
                ${logoHtml}
                <div class="bar-chart-race-points">0</div>
            </div>
        </div>
    `;
    track.appendChild(row);
    rows[item] = row;
  });

  function update(idx) {
    const data = dataPoints[idx];
    if (!data || !data.standings) return;
    
    // Week or Round label
    const periodValue = data.week || data.round || data.date || idx + 1;
    label.innerText = labelPrefix + periodValue;
    
    // Sort logic
    const scoreKey = data.standings[0]?.points !== undefined ? 'points' : 'score';
    const nameKey = data.standings[0]?.team !== undefined ? 'team' : 'name';
    
    const sorted = [...data.standings].sort((a,b) => b[scoreKey] - a[scoreKey] || a[nameKey].localeCompare(b[nameKey]));
    
    sorted.forEach((s, index) => {
        const row = rows[s[nameKey]];
        if (!row) return;
        
        row.style.transform = `translateY(${index * ROW_HEIGHT}px)`;
        const bar = row.querySelector('.bar-chart-race-bar');
        
        // Calculate width percentage based on maxScore
        const percentage = Math.min(100, Math.max(1, (s[scoreKey] / maxScore) * 100)); // Minimum 1% so we see it
        bar.style.width = `max(10px, ${percentage}%)`;
        
        row.querySelector('.bar-chart-race-points').innerText = s[scoreKey];
        row.classList.toggle('top-3', index < 3);
        row.classList.toggle('rank-1', index === 0);

        const logo = row.querySelector('.team-logo');
        if (logo) {
            // Only show logo if they have points (for aesthetics)
            logo.style.opacity = s[scoreKey] > 0 ? "1" : "0";
        }
    });
  }

  function play() {
    if (interval) clearInterval(interval);
    currentIdx = 0;
    playBtn.innerText = "Playing...";
    update(0);
    interval = setInterval(() => {
        currentIdx++;
        if (currentIdx >= dataPoints.length) { 
          clearInterval(interval); 
          playBtn.innerText = "Replay Animation";
          return; 
        }
        update(currentIdx);
    }, updateInterval);
  }

  playBtn.addEventListener('click', play);
  
  // Initialize to first frame
  update(0);
}
