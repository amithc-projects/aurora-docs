#!/bin/bash

echo "✨ Upgrading Content Filters with Minimal JS..."

# --- 1. CREATE FILTER JS COMPONENT ---
mkdir -p static/js

cat <<'EOF' > static/js/filters.js
/**
 * Aurora Content Filters
 * Progressive enhancement for filtering grids.
 * Features: URL Sync, A11y Announcements, View Transitions.
 */

export function initFilters() {
  const filterGroups = document.querySelectorAll('[data-filter-target]');
  
  // 1. Check URL for initial state
  const params = new URLSearchParams(window.location.search);
  const initialFilter = params.get('filter');

  filterGroups.forEach(group => {
    const targetId = group.dataset.filterTarget;
    const grid = document.getElementById(targetId);
    if (!grid) return;

    // Create ARIA Live Region for A11y
    const liveRegion = document.createElement('div');
    liveRegion.className = 'sr-only';
    liveRegion.setAttribute('aria-live', 'polite');
    group.appendChild(liveRegion);

    // Setup Buttons
    const buttons = group.querySelectorAll('button[data-filter]');
    
    // Apply initial state if present
    if (initialFilter) {
      const activeBtn = group.querySelector(`button[data-filter="${initialFilter}"]`);
      if (activeBtn) triggerFilter(grid, activeBtn, buttons, liveRegion, false);
    }

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Use View Transitions API if available for smooth layout morphing
        if (document.startViewTransition) {
          document.startViewTransition(() => {
            triggerFilter(grid, btn, buttons, liveRegion, true);
          });
        } else {
          // Fallback
          triggerFilter(grid, btn, buttons, liveRegion, true);
        }
      });
    });
  });
}

function triggerFilter(grid, activeBtn, allButtons, liveRegion, updateUrl) {
  const category = activeBtn.dataset.filter;
  const items = grid.querySelectorAll('.card');
  let visibleCount = 0;

  // 1. Visual State
  allButtons.forEach(b => {
    b.setAttribute('aria-pressed', 'false');
    b.classList.remove('is-active');
  });
  activeBtn.setAttribute('aria-pressed', 'true');
  activeBtn.classList.add('is-active');

  // 2. Filter Logic
  items.forEach(item => {
    // If category is 'all' OR item has matching data attribute
    const match = category === 'all' || item.dataset.category === category;
    
    if (match) {
      item.style.display = ''; // Reset to default (block/grid)
      visibleCount++;
    } else {
      item.style.display = 'none';
    }
  });

  // 3. Accessibility Announcement
  liveRegion.textContent = `Showing ${visibleCount} items for ${activeBtn.innerText}`;

  // 4. URL State (Optional: Don't clutter history for "all")
  if (updateUrl) {
    const url = new URL(window.location);
    if (category === 'all') {
      url.searchParams.delete('filter');
    } else {
      url.searchParams.set('filter', category);
    }
    window.history.replaceState({}, '', url);
  }
}
EOF

# --- 2. UPDATE CSS (Standard Classes) ---
# We no longer need the complex sibling selectors. 
# We just need styles for the buttons.

cat <<EOF > static/css/patterns/filter.css
/* JS-DRIVEN FILTER STYLES */

.filter-nav {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.filter-btn {
  /* Reset Button Styles */
  appearance: none;
  background: var(--ds-sys-color-surface-variant);
  border: 1px solid transparent;
  cursor: pointer;
  
  /* Pill Shape */
  padding: 0.25rem 0.85rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--ds-sys-color-on-surface);
  transition: all 0.2s ease;
}

.filter-btn:hover {
  background: var(--ds-sys-color-surface-inverse);
  color: var(--ds-sys-color-on-surface-inverse);
}

/* Active State (Applied by JS) */
.filter-btn.is-active,
.filter-btn[aria-pressed="true"] {
  background: var(--ds-sys-color-primary);
  color: var(--ds-sys-color-on-primary);
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

/* VIEW TRANSITIONS */
/* This makes the masonry grid animate smoothly when items disappear/appear */
::view-transition-group(root) {
  animation-duration: 0.4s;
}
EOF

# --- 3. INJECT JS INTO BASEOF ---
# Ensure the filter script is loaded
FILE="layouts/_default/baseof.html"
if ! grep -q "filters.js" "$FILE"; then
  # Insert before the closing body tag
  # Note: We append this to the existing script block if possible, or new one
  sed -i.bak 's|</body>|  <script type="module">import { initFilters } from "/js/filters.js"; initFilters();</script>\n</body>|' "$FILE"
  rm "${FILE}.bak"
fi

# --- 4. UPDATE DEMO PAGE ---
cat <<EOF > content/patterns/content-filter.md
---
title: "Content Filter (JS)"
description: "Accessible, URL-syncing filter with View Transitions."
category: "Patterns"
---

## Filter Grid
Click the buttons below.
1. **Accessible:** Screen readers announce results.
2. **Stateful:** The URL updates (refresh the page to test).
3. **Animated:** Uses the View Transitions API for smooth reordering.

{{< demo >}}
<div class="filter-nav" data-filter-target="masonry-grid-1">
  <span style="font-size:0.9rem; font-weight:bold; margin-right:0.5rem">Filter:</span>
  
  <button class="filter-btn is-active" data-filter="all" aria-pressed="true">All</button>
  <button class="filter-btn" data-filter="news" aria-pressed="false">News</button>
  <button class="filter-btn" data-filter="sport" aria-pressed="false">Sport</button>
  <button class="filter-btn" data-filter="tech" aria-pressed="false">Tech</button>
</div>

<div id="masonry-grid-1" class="l-masonry">

  <article class="card" data-category="news">
    <div class="card__content">
      <span class="badge badge--soft badge--primary">News</span>
      <h4>Election Results</h4>
    </div>
  </article>
  
  <article class="card span-v-2" data-category="news">
    <img src="https://picsum.photos/id/11/400/300" class="card__media" style="height: 150px;">
    <div class="card__content">
      <span class="badge badge--soft badge--primary">News</span>
      <h4>Markets Rally</h4>
      <p>Stocks hit all time high today.</p>
    </div>
  </article>

  <article class="card" data-category="sport">
    <div class="card__content">
      <span class="badge badge--soft badge--success">Sport</span>
      <h4>United win 3-0</h4>
    </div>
  </article>

  <article class="card span-h-2" data-category="sport">
    <div class="card__content">
      <span class="badge badge--soft badge--success">Sport</span>
      <h4>Olympic Bid</h4>
      <p>City announces official bid for 2036.</p>
    </div>
  </article>

  <article class="card" data-category="tech">
    <div class="card__content">
      <span class="badge badge--soft badge--warning">Tech</span>
      <h4>New AI Chip</h4>
    </div>
  </article>

  <article class="card span-block card--overlay" data-category="tech">
    <img src="https://picsum.photos/id/60/600/600" class="card__media">
    <div class="card__content">
      <span class="badge badge--solid badge--warning" style="margin-bottom:0.5rem">Tech</span>
      <h2 style="color:white">VR Review</h2>
    </div>
  </article>

</div>
{{< /demo >}}
EOF

echo "✅ Filters Upgraded to JS."
echo "👉 Check content/patterns/content-filter.md"

