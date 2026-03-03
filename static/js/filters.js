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
