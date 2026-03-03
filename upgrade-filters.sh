#!/bin/bash

echo "✨ Upgrading Content Filters to Multi-Select..."

# --- 1. UPDATE JS (Multi-Select Logic) ---
cat <<'EOF' > static/js/filters.js
/**
 * Aurora Content Filters (Multi-Select)
 * Logic: "OR" based filtering. (Show item if it matches ANY active tag).
 */

export function initFilters() {
  const filterGroups = document.querySelectorAll('[data-filter-target]');
  
  filterGroups.forEach(group => {
    const targetId = group.dataset.filterTarget;
    const grid = document.getElementById(targetId);
    if (!grid) return;

    // A11y Live Region
    let liveRegion = group.querySelector('[aria-live]');
    if (!liveRegion) {
      liveRegion = document.createElement('div');
      liveRegion.className = 'sr-only';
      liveRegion.setAttribute('aria-live', 'polite');
      group.appendChild(liveRegion);
    }

    const buttons = group.querySelectorAll('button[data-filter]');
    
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const isViewTransition = document.startViewTransition;
        if (isViewTransition) {
          document.startViewTransition(() => updateFilters(grid, btn, buttons, liveRegion));
        } else {
          updateFilters(grid, btn, buttons, liveRegion);
        }
      });
    });
  });
}

function updateFilters(grid, clickedBtn, allButtons, liveRegion) {
  const filter = clickedBtn.dataset.filter;
  const allBtn = Array.from(allButtons).find(b => b.dataset.filter === 'all');
  
  // 1. Manage Button State
  if (filter === 'all') {
    // Reset: Activate "All", deactivate others
    allButtons.forEach(b => {
      const isAll = b.dataset.filter === 'all';
      b.classList.toggle('is-active', isAll);
      b.setAttribute('aria-pressed', isAll);
    });
  } else {
    // Toggle clicked button
    const wasActive = clickedBtn.classList.contains('is-active');
    clickedBtn.classList.toggle('is-active', !wasActive);
    clickedBtn.setAttribute('aria-pressed', !wasActive);
    
    // Deactivate "All" if we just activated a specific filter
    if (allBtn && !wasActive) {
      allBtn.classList.remove('is-active');
      allBtn.setAttribute('aria-pressed', 'false');
    }
    
    // If NO buttons are active, revert to "All"
    const anyActive = Array.from(allButtons).some(b => b.classList.contains('is-active'));
    if (!anyActive && allBtn) {
      allBtn.classList.add('is-active');
      allBtn.setAttribute('aria-pressed', 'true');
    }
  }

  // 2. Get Active Filters
  const activeFilters = Array.from(allButtons)
    .filter(b => b.classList.contains('is-active'))
    .map(b => b.dataset.filter);

  const isAllActive = activeFilters.includes('all');

  // 3. Apply to Items
  const items = grid.querySelectorAll('.card');
  let visibleCount = 0;

  items.forEach(item => {
    const category = item.dataset.category;
    // Match if "All" is active OR if the item's category is in the active list
    const isMatch = isAllActive || activeFilters.includes(category);
    
    if (isMatch) {
      item.style.display = ''; 
      visibleCount++;
    } else {
      item.style.display = 'none';
    }
  });

  // 4. Update A11y Text
  const labels = activeFilters.map(f => f.charAt(0).toUpperCase() + f.slice(1)).join(', ');
  liveRegion.textContent = `Showing ${visibleCount} items for: ${labels}`;
}
EOF

# --- 2. UPDATE DEMO PAGE (20+ Cards, Equal Grid) ---
cat <<EOF > content/patterns/content-filter.md
---
title: "Multi-Select Filter"
description: "Filter a large grid by multiple categories (OR logic)."
category: "Patterns"
---

## Multi-Select Grid
1. **Click "Sport" and "Tech"** to see items from *both* categories.
2. **Click "All"** (or deselect everything) to reset.
3. **Equal Sizing:** Uses a standard Grid so all cards in a row match height.

{{< demo >}}
<div class="filter-nav" data-filter-target="grid-demo">
  <span style="font-size:0.9rem; font-weight:bold; margin-right:0.5rem">Filter:</span>
  <button class="filter-btn is-active" data-filter="all" aria-pressed="true">All</button>
  <button class="filter-btn" data-filter="news" aria-pressed="false">News</button>
  <button class="filter-btn" data-filter="sport" aria-pressed="false">Sport</button>
  <button class="filter-btn" data-filter="tech" aria-pressed="false">Tech</button>
  <button class="filter-btn" data-filter="design" aria-pressed="false">Design</button>
</div>

<div id="grid-demo" class="l-grid" style="--col-min: 220px; gap: 1rem;">

  <article class="card" data-category="news">
    <div class="card__content">
      <span class="badge badge--soft badge--primary">News</span>
      <h4>Market Update</h4>
      <p>Global indices reach new highs.</p>
    </div>
  </article>

  <article class="card" data-category="sport">
    <div class="card__content">
      <span class="badge badge--soft badge--success">Sport</span>
      <h4>Championship Final</h4>
      <p>The underdogs take the trophy.</p>
    </div>
  </article>

  <article class="card" data-category="tech">
    <div class="card__content">
      <span class="badge badge--soft badge--warning">Tech</span>
      <h4>New AI Model</h4>
      <p>Faster processing speeds announced.</p>
    </div>
  </article>

  <article class="card" data-category="design">
    <div class="card__content">
      <span class="badge badge--soft badge--error">Design</span>
      <h4>2025 Color Trends</h4>
      <p>What to expect next season.</p>
    </div>
  </article>

  <article class="card" data-category="news">
    <div class="card__content">
      <span class="badge badge--soft badge--primary">News</span>
      <h4>Local Weather</h4>
      <p>Storm warning in effect.</p>
    </div>
  </article>

  <article class="card" data-category="sport">
    <div class="card__content">
      <span class="badge badge--soft badge--success">Sport</span>
      <h4>Transfer Window</h4>
      <p>Big moves expected this week.</p>
    </div>
  </article>

  <article class="card" data-category="tech">
    <div class="card__content">
      <span class="badge badge--soft badge--warning">Tech</span>
      <h4>VR Headsets</h4>
      <p>Are they finally ready for mainstream?</p>
    </div>
  </article>

  <article class="card" data-category="news">
    <div class="card__content">
      <span class="badge badge--soft badge--primary">News</span>
      <h4>City Council</h4>
      <p>New budget approved for parks.</p>
    </div>
  </article>

  <article class="card" data-category="design">
    <div class="card__content">
      <span class="badge badge--soft badge--error">Design</span>
      <h4>Minimalism</h4>
      <p>Is it dead? Experts weigh in.</p>
    </div>
  </article>

  <article class="card" data-category="sport">
    <div class="card__content">
      <span class="badge badge--soft badge--success">Sport</span>
      <h4>Marathon Results</h4>
      <p>New world record set today.</p>
    </div>
  </article>

  <article class="card" data-category="tech">
    <div class="card__content">
      <span class="badge badge--soft badge--warning">Tech</span>
      <h4>Quantum Leap</h4>
      <p>Breakthrough in computing.</p>
    </div>
  </article>

  <article class="card" data-category="design">
    <div class="card__content">
      <span class="badge badge--soft badge--error">Design</span>
      <h4>Typography</h4>
      <p>The best fonts for readability.</p>
    </div>
  </article>

  <article class="card" data-category="news">
    <div class="card__content">
      <span class="badge badge--soft badge--primary">News</span>
      <h4>Traffic Report</h4>
      <p>Major delays on the M1.</p>
    </div>
  </article>

  <article class="card" data-category="sport">
    <div class="card__content">
      <span class="badge badge--soft badge--success">Sport</span>
      <h4>Tennis Open</h4>
      <p>Quarter-finals begin today.</p>
    </div>
  </article>

  <article class="card" data-category="tech">
    <div class="card__content">
      <span class="badge badge--soft badge--warning">Tech</span>
      <h4>Smartphone Wars</h4>
      <p>The battle for the best camera.</p>
    </div>
  </article>

  <article class="card" data-category="design">
    <div class="card__content">
      <span class="badge badge--soft badge--error">Design</span>
      <h4>UX Patterns</h4>
      <p>Dark mode best practices.</p>
    </div>
  </article>

  <article class="card" data-category="news">
    <div class="card__content">
      <span class="badge badge--soft badge--primary">News</span>
      <h4>Election Polls</h4>
      <p>Latest numbers show a tight race.</p>
    </div>
  </article>

  <article class="card" data-category="sport">
    <div class="card__content">
      <span class="badge badge--soft badge--success">Sport</span>
      <h4>F1 Update</h4>
      <p>New regulations for next season.</p>
    </div>
  </article>

  <article class="card" data-category="tech">
    <div class="card__content">
      <span class="badge badge--soft badge--warning">Tech</span>
      <h4>Cyber Security</h4>
      <p>Protecting your data in 2026.</p>
    </div>
  </article>

  <article class="card" data-category="design">
    <div class="card__content">
      <span class="badge badge--soft badge--error">Design</span>
      <h4>Logo Evolution</h4>
      <p>From complex to flat.</p>
    </div>
  </article>

</div>
{{< /demo >}}
EOF

echo "✅ Multi-Select Filter Installed."

