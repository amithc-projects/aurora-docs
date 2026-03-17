---
title: "Faceted Search"
description: "A reference layout composing multiple primitive inputs into a responsive, e-commerce style filtering sidebar."
weight: 30
category: "Patterns"
menu:
  main:
    parent: "components-patterns"
---

The Aurora Design System does not provide a single, monolithic `<FacetedSearch>` component. Instead, you build robust, highly customized search interfaces by composing our core primitive inputs.

This pattern demonstrates how to assemble **Accordions**, **Checkboxes**, **Range Sliders**, and **Tags** into a classic e-commerce filter sidebar.

## Structure Overview
1.  **Layout**: Uses a responsive two-column CSS layout (`l-grid--sidebar`). On mobile, the filters stack gracefully above the results.
2.  **Sidebar (Filters)**: 
    *   Uses the `.accordion.accordion-flush` component to group facet categories space-efficiently.
    *   Inside the accordions, we place standard `<label class="field--checkbox">` elements and the dual-handle `.range-slider`.
3.  **Main Content (Results)**:
    *   Features an "Active Filters" header utilizing `.tag.tag-removable` chips.
    *   Lists the product results in a standard grid (`l-grid`).

---

## Interactive Demo

{{< demo >}}
<!-- Main Layout Wrapper -->
<div style="display: grid; grid-template-columns: var(--sidebar-width, 300px) 1fr; gap: 2rem; align-items: start;">
  
  <!-- ============================================== -->
  <!-- LEFT COLUMN: FILTER SIDEBAR                    -->
  <!-- ============================================== -->
  <aside style="background: var(--ds-sys-color-surface-variant); padding: 1.5rem; border-radius: var(--ds-sys-radius-card);">
    <h3 class="m-0 mb-3" style="font-size: 1.2rem; display: flex; align-items: center; justify-content: space-between;">
      Filters
      <span class="material-symbols-outlined" style="font-size: 1.2rem; color: var(--ds-sys-color-on-surface-subtle)">tune</span>
    </h3>

    <!-- Filter Accordion Group -->
    <div class="accordion accordion-flush" data-mode="multiple">
      
      <!-- Category: Brand (Checkboxes) -->
      <div class="accordion-item" style="border-top: 1px solid var(--ds-sys-color-border);">
        <h3>
          <button class="accordion-trigger" aria-expanded="true" aria-controls="facet-brand" id="t-brand" style="padding-left:0; padding-right:0;">
            Brand
            <span class="material-symbols-outlined accordion-icon">expand_more</span>
          </button>
        </h3>
        <div class="accordion-panel is-open" id="facet-brand" role="region" aria-labelledby="t-brand">
          <div class="accordion-body" style="padding-left:0; padding-right:0;">
            <div class="accordion-inner d-flex flex-column" id="facet-brand-container" style="gap: 0.75rem; max-height: 250px; overflow-y: auto;">
                <!-- JS will generate checkboxes here based on DummyJSON unique brands -->
            </div>
          </div>
        </div>
      </div>

      <!-- Category: Category (Checkboxes) -->
      <div class="accordion-item" style="border-top: 1px solid var(--ds-sys-color-border);">
        <h3>
          <button class="accordion-trigger" aria-expanded="true" aria-controls="facet-category" id="t-category" style="padding-left:0; padding-right:0;">
            Category
            <span class="material-symbols-outlined accordion-icon">expand_more</span>
          </button>
        </h3>
        <div class="accordion-panel is-open" id="facet-category" role="region" aria-labelledby="t-category">
          <div class="accordion-body" style="padding-left:0; padding-right:0;">
            <div class="accordion-inner d-flex flex-column" id="facet-category-container" style="gap: 0.75rem; max-height: 250px; overflow-y: auto;">
                <!-- JS will generate checkboxes here based on DummyJSON unique categories -->
            </div>
          </div>
        </div>
      </div>

      <!-- Category: Price (Range Slider) -->
      <div class="accordion-item" style="border-top: 1px solid var(--ds-sys-color-border);">
        <h3>
          <button class="accordion-trigger" aria-expanded="true" aria-controls="facet-price" id="t-price" style="padding-left:0; padding-right:0;">
            Price Range
            <span class="material-symbols-outlined accordion-icon">expand_more</span>
          </button>
        </h3>
        <div class="accordion-panel is-open" id="facet-price" role="region" aria-labelledby="t-price">
          <div class="accordion-body" style="padding-left:0; padding-right:0;">
            <div class="accordion-inner">
              
              <div class="range-slider">
                <div class="slider-track" style="background: linear-gradient(to right, #ddd 15%, var(--ds-sys-color-primary) 15%, var(--ds-sys-color-primary) 65%, #ddd 65%);"></div>
                
                <input type="range" min="0" max="1000" value="150" id="slider-1" oninput="slideOne()">
                <input type="range" min="0" max="1000" value="650" id="slider-2" oninput="slideTwo()">
                
                <div class="slider-val" id="val-1" style="left: 15%;">$150</div>
                <div class="slider-val" id="val-2" style="left: 65%;">$650</div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- Category: Size (Tags) -->
      <div class="accordion-item" style="border-top: 1px solid var(--ds-sys-color-border);">
        <h3>
          <button class="accordion-trigger" aria-expanded="false" aria-controls="facet-size" id="t-size" style="padding-left:0; padding-right:0;">
            Size
            <span class="material-symbols-outlined accordion-icon">expand_more</span>
          </button>
        </h3>
        <div class="accordion-panel" id="facet-size" role="region" aria-labelledby="t-size">
          <div class="accordion-body" style="padding-left:0; padding-right:0;">
            <div class="accordion-inner">
              
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="tag tag-neutral tag-filter" aria-pressed="false" onclick="this.setAttribute('aria-pressed', this.getAttribute('aria-pressed') === 'true' ? 'false' : 'true')">SM</button>
                <button class="tag tag-neutral tag-filter" aria-pressed="true" onclick="this.setAttribute('aria-pressed', this.getAttribute('aria-pressed') === 'true' ? 'false' : 'true')">MD</button>
                <button class="tag tag-neutral tag-filter" aria-pressed="true" onclick="this.setAttribute('aria-pressed', this.getAttribute('aria-pressed') === 'true' ? 'false' : 'true')">LG</button>
                <button class="tag tag-neutral tag-filter" aria-pressed="false" onclick="this.setAttribute('aria-pressed', this.getAttribute('aria-pressed') === 'true' ? 'false' : 'true')">XL</button>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  </aside>


  <!-- ============================================== -->
  <!-- RIGHT COLUMN: RESULTS VIEWER                   -->
  <!-- ============================================== -->
  <main>
    
    <!-- Top Configuration Bar (Active Filters & Sort) -->
    <header style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
      
      <!-- Applied Tags Container (JS will inject tags here) -->
      <div id="active-filters-container" style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap; min-height: 28px;">
        <!-- JS injects tags -->
      </div>


      <!-- Sort Dropdown -->
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <label for="sort-select" style="font-size: 0.875rem; color: var(--ds-sys-color-on-surface-subtle)">Sort by:</label>
        <select id="sort-select" class="input" style="padding: 0.4rem 2rem 0.4rem 0.75rem; font-size: 0.875rem; height: auto;" onchange="handleSortChange(this.value)">
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>
    </header>

    <!-- Product Grid Container -->
    <div id="product-grid" class="l-grid" style="--col-min: 240px; gap: 1.5rem;">
      <!-- JavaScript will inject authentic Aurora .card components here -->
    </div>

  </main>
</div>

<!-- ============================================== -->
<!-- PRODUCT DETAILS MODAL TEMPLATE                 -->
<!-- ============================================== -->
<dialog class="modal" id="product-modal" style="width: 90vw; max-width: 800px; padding: 0;">
  <div class="modal__dialog">
    <header class="modal__header">
      <h2 class="modal__title" id="modal-title">Product Details</h2>
      <button class="modal__close" onclick="this.closest('dialog').close()" aria-label="Close dialog">
        <span class="material-symbols-outlined">close</span>
      </button>
    </header>
    <div class="modal__body" id="modal-body">
      <!-- JS injects the grid/carousel here -->
    </div>
  </div>
</dialog>

<script>
  /* ============================================================== 
     1. STATE MANAGEMENT & PUB/SUB EVENT BUS
  ============================================================== */
  class FilterBus {
    constructor() {
      this.listeners = {};
      this.state = {
        brands: [],
        priceMin: 0,
        priceMax: 2000,
        sort: 'featured'
      };
      this.allProducts = []; // The master raw dataset
      this.filteredProducts = []; // The current filtered view
    }

    subscribe(event, callback) {
      if (!this.listeners[event]) this.listeners[event] = [];
      this.listeners[event].push(callback);
    }

    publish(event, data) {
      if (!this.listeners[event]) return;
      this.listeners[event].forEach(callback => callback(data));
    }

    updateState(key, value) {
      this.state[key] = value;
      this.applyFilters();
    }

    applyFilters() {
      let result = [...this.allProducts];
      
      // 1. Filter by Brand
      if (this.state.brands.length > 0) {
        result = result.filter(p => this.state.brands.includes(p.brand));
      }

      // 2. Filter by Category
      if (this.state.categories && this.state.categories.length > 0) {
        result = result.filter(p => this.state.categories.includes(p.category));
      }

      // 3. Filter by Price
      result = result.filter(p => p.price >= this.state.priceMin && p.price <= this.state.priceMax);

      // 4. Apply Sort
      if (this.state.sort === 'price-asc') {
        result.sort((a, b) => a.price - b.price);
      } else if (this.state.sort === 'price-desc') {
        result.sort((a, b) => b.price - a.price);
      } else if (this.state.sort === 'rating') {
        result.sort((a, b) => b.rating - a.rating);
      }

      this.filteredProducts = result;
      this.publish('STORE_UPDATED', this.filteredProducts);
    }
  }

  const store = new FilterBus();

  /* ============================================================== 
     2. DUMMYJSON DATA FETCHING & UI GENERATION
  ============================================================== */
  
  // Format currency
  const formatPrice = (num) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);

  async function initializeFacetedSearch() {
    triggerLoadingState();

    try {
      const res = await fetch('https://dummyjson.com/products?limit=200');
      const data = await res.json();
      
      // Filter out products without brands to make the demo cleaner
      store.allProducts = data.products.filter(p => p.brand);
      
      generateDynamicSidebar();
      store.applyFilters(); // Initial render broadcast

    } catch (err) {
      console.error("Failed to fetch DummyJSON:", err);
      document.getElementById('product-grid').innerHTML = `<div class="empty-state">Failed to load payload.</div>`;
    }
  }

  /* --- RENDER: DYNAMIC SIDEBAR FACETS --- */
  function generateDynamicSidebar() {
      // Extract unique Brands
      const brandCounts = {};
      store.allProducts.forEach(p => {
          brandCounts[p.brand] = (brandCounts[p.brand] || 0) + 1;
      });
      const uniqueBrands = Object.keys(brandCounts).sort();

      // Extract unique Categories
      const categoryCounts = {};
      store.allProducts.forEach(p => {
          categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
      });
      const uniqueCategories = Object.keys(categoryCounts).sort();

      // Render Brand HTML
      const brandContainer = document.getElementById('facet-brand-container');
      brandContainer.innerHTML = uniqueBrands.map(b => `
          <label class="field--checkbox m-0" style="display: block; margin-bottom: 0.5rem !important;">
            <input type="checkbox" value="${b.replace(/"/g, '&quot;')}" onchange="handleBrandToggle(this)">
            <span>${b} <small style="color:var(--ds-sys-color-on-surface-subtle)">(${brandCounts[b]})</small></span>
          </label>
      `).join('');

      // Render Category HTML
      const categoryContainer = document.getElementById('facet-category-container');
      categoryContainer.innerHTML = uniqueCategories.map(c => `
          <label class="field--checkbox m-0" style="display: block; margin-bottom: 0.5rem !important;">
            <input type="checkbox" value="${c.replace(/"/g, '&quot;')}" onchange="handleCategoryToggle(this)">
            <span style="text-transform: capitalize;">${c.replace(/-/g, ' ')} <small style="color:var(--ds-sys-color-on-surface-subtle)">(${categoryCounts[c]})</small></span>
          </label>
      `).join('');
  }

  /* --- INTERACTION: SORT DROPDOWN --- */
  window.handleSortChange = function(sortValue) {
      triggerLoadingState();
      
      // Add artificial delay to show loader
      setTimeout(() => {
          store.updateState('sort', sortValue);
      }, 400);
  };

  /* --- INTERACTION: CHECKBOX TOGGLES --- */
  window.handleBrandToggle = function(checkbox) {
      triggerLoadingState();
      
      const val = checkbox.value;
      let currentBrands = [...store.state.brands];
      
      if(checkbox.checked) {
          currentBrands.push(val);
      } else {
          currentBrands = currentBrands.filter(b => b !== val);
      }
      
      store.updateState('brands', currentBrands);
      store.publish('FILTER_TOGGLED', { type: 'brand', value: val, action: checkbox.checked ? 'add' : 'remove' });
  };

  window.handleCategoryToggle = function(checkbox) {
      triggerLoadingState();
      
      const val = checkbox.value;
      let currentCats = store.state.categories || [];
      
      if(checkbox.checked) {
          currentCats.push(val);
      } else {
          currentCats = currentCats.filter(c => c !== val);
      }
      
      store.updateState('categories', currentCats);
      store.publish('FILTER_TOGGLED', { type: 'category', value: val, action: checkbox.checked ? 'add' : 'remove' });
  };

  /* --- RENDER: ACTIVE FILTERS HEADER --- */
  function renderActiveFilters() {
      const container = document.getElementById('active-filters-container');
      container.innerHTML = `<span style="font-size: 0.875rem; color: var(--ds-sys-color-on-surface-subtle); margin-right: 0.5rem;">Active:</span>`;
      
      let hasFilters = false;

      // Render Brand Tags
      store.state.brands.forEach(b => {
          hasFilters = true;
          container.innerHTML += `
          <span class="tag tag-sm tag-brand">
            ${b} 
            <button class="tag-remove" aria-label="Remove ${b}" onclick="removeFilter('brand', '${b.replace(/'/g, "\\'")}')">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M6 2L2 6M2 2l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </button>
          </span>`;
      });

      // Render Category Tags
      if(store.state.categories) {
          store.state.categories.forEach(c => {
              hasFilters = true;
              container.innerHTML += `
              <span class="tag tag-sm tag-secondary">
                <span style="text-transform: capitalize;">${c.replace(/-/g, ' ')}</span>
                <button class="tag-remove" aria-label="Remove ${c}" onclick="removeFilter('category', '${c.replace(/'/g, "\\'")}')">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M6 2L2 6M2 2l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                </button>
              </span>`;
          });
      }

      // Render Price Tag
      if (store.state.priceMin > 0 || store.state.priceMax < 2000) {
          hasFilters = true;
          container.innerHTML += `
          <span class="tag tag-sm tag-neutral">
            $${store.state.priceMin} - $${store.state.priceMax}
            <button class="tag-remove" aria-label="Reset Price" onclick="resetPriceFilter()">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M6 2L2 6M2 2l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </button>
          </span>`;
      }

      if (hasFilters) {
          container.innerHTML += `<button class="btn btn--tertiary btn--sm" style="padding-left: 0.5rem;" onclick="clearAllFilters()">Clear All</button>`;
      } else {
          container.innerHTML += `<span style="font-size: 0.875rem; color: var(--ds-sys-color-on-surface-subtle); font-style: italic;">None</span>`;
      }
  }

  window.removeFilter = function(type, value) {
      triggerLoadingState();
      
      // Update State
      if (type === 'brand') store.updateState('brands', store.state.brands.filter(b => b !== value));
      if (type === 'category') store.updateState('categories', store.state.categories.filter(c => c !== value));
      
      // Sync UI Checkboxes in Sidebar
      const containerId = type === 'brand' ? 'facet-brand-container' : 'facet-category-container';
      const checkboxes = document.querySelectorAll(`#${containerId} input[type="checkbox"]`);
      checkboxes.forEach(cb => {
          if(cb.value === value) cb.checked = false;
      });
  };

  window.resetPriceFilter = function() {
      triggerLoadingState();
      document.getElementById('slider-1').value = 0;
      document.getElementById('slider-2').value = 2000;
      window.updateTrack(document.getElementById('slider-1'), document.getElementById('slider-2'), document.querySelector(".range-slider .slider-track"));
  };

  window.clearAllFilters = function() {
      // Uncheck all sidebar boxes
      document.querySelectorAll('#facet-brand-container input[type="checkbox"], #facet-category-container input[type="checkbox"]').forEach(cb => cb.checked = false);
      
      window.resetPriceFilter();
      
      store.updateState('brands', []);
      store.updateState('categories', []);
  };

  // Bind the Header to the Event Bus
  store.subscribe('STORE_UPDATED', renderActiveFilters);
  store.subscribe('FILTER_TOGGLED', renderActiveFilters);

  /* --- RENDER: LOADING SKELETONS --- */
  function triggerLoadingState() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';
    
    // Inject 8 generic skeleton cards
    for(let i=0; i<8; i++) {
        grid.innerHTML += `
        <article class="card">
            <div class="skeleton" style="height: 180px; width: 100%; border-bottom-left-radius: 0; border-bottom-right-radius: 0;"></div>
            <div class="card__content" style="display: flex; flex-direction: column; gap: 0.5rem;">
                <div class="skeleton" style="height: 1.2rem; width: 80%;"></div>
                <div class="skeleton" style="height: 1rem; width: 40%;"></div>
                <div class="skeleton" style="height: 2rem; width: 100%; margin-top: 1rem;"></div>
            </div>
        </article>
        `;
    }
  }

  /* --- RENDER: PRODUCT CARDS --- */
  store.subscribe('STORE_UPDATED', (products) => {
    const grid = document.getElementById('product-grid');
    
    // Simulate slight network delay for visual UX confirmation
    setTimeout(() => {
        grid.innerHTML = '';

        if(products.length === 0) {
            grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: var(--ds-sys-color-surface-variant); border-radius: var(--ds-sys-radius-card);">
                <span class="material-symbols-outlined" style="font-size: 3rem; color: var(--ds-sys-color-on-surface-subtle); margin-bottom: 1rem;">search_off</span>
                <h3 style="margin: 0 0 0.5rem 0;">No products found</h3>
                <p style="color: var(--ds-sys-color-on-surface-subtle); margin: 0;">Try adjusting your active filters.</p>
            </div>`;
            return;
        }

        products.forEach(p => {
            const card = document.createElement('article');
            card.className = 'card';
            card.innerHTML = `
                <img src="${p.thumbnail}" class="card__media" alt="${p.title}" style="height: 200px; object-fit: cover; background: white;">
                <div class="card__content">
                    <h3 style="font-size: 1.1rem; margin: 0 0 0.5rem 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${p.title}">${p.title}</h3>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <span style="font-weight: 700; color: var(--ds-sys-color-primary);">${formatPrice(p.price)}</span>
                        <span class="tag tag-sm tag-neutral" style="font-weight: 400;">★ ${p.rating}</span>
                    </div>
                    <button class="btn btn-secondary w-100" onclick='openProductModal(${JSON.stringify(p).replace(/'/g, "&#39;")})'>View Details</button>
                </div>
            `;
            grid.appendChild(card);
        });
    }, 400); // 400ms synthetic delay to show loading state nicely
  });

  /* ============================================================== 
     3. PRODUCT MODAL VIEW
  ============================================================== */
  window.openProductModal = function(product) {
      const modal = document.getElementById('product-modal');
      document.getElementById('modal-title').innerText = product.brand;
      
      const body = document.getElementById('modal-body');
      
      // Calculate carousel HTML for images
      let imagesHtml = '';
      const imagesToRender = (product.images && product.images.length > 0) ? product.images : [product.thumbnail || 'https://via.placeholder.com/300x200?text=No+Image'];
      
      imagesHtml = `
      <div style="background: var(--ds-sys-color-surface-variant); padding: 1.5rem; border-radius: var(--ds-sys-radius-card); margin-bottom: 1.5rem; text-align: center;">
          ${imagesToRender.slice(0, 1).map(img => `<img src="${img}" style="width: 100%; max-width: 300px; max-height: 250px; object-fit: contain; mix-blend-mode: multiply;" alt="Product Image">`).join('')}
          ${imagesToRender.length > 1 ? `<div style="margin-top: 1rem; color: var(--ds-sys-color-primary); font-size: 0.9rem;">(Viewing 1 of ${imagesToRender.length} images)</div>` : ''}
      </div>`;
      body.innerHTML = `
          ${imagesHtml}
          <div style="margin-bottom: 1.5rem; width: 100%;">
              <h2 style="font-size: 1.5rem; margin: 0 0 0.5rem 0; color: var(--ds-sys-color-on-surface); line-height: 1.3; overflow-wrap: break-word; word-break: break-all;">${product.title}</h2>
              <p style="font-size: 1.1rem; color: var(--ds-sys-color-primary); font-weight: bold; margin: 0;">${formatPrice(product.price)} <span style="font-size: 0.9rem; color: var(--ds-sys-color-on-surface-subtle); margin-left: 0.25rem;">(${product.stock} in stock)</span></p>
          </div>
          
          <div style="background: var(--ds-sys-color-surface-variant); padding: 1.25rem; border-radius: var(--ds-sys-radius-card); margin-bottom: 1.5rem; width: 100%;">
                <p style="margin: 0; color: var(--ds-sys-color-on-surface); line-height: 1.5;">${product.description}</p>
          </div>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                  <div>
                      <strong style="display: block; font-size: 0.8rem; text-transform: uppercase; color: var(--ds-sys-color-on-surface-subtle); margin-bottom: 0.25rem;">Category</strong>
                      <span style="color: var(--ds-sys-color-on-surface); text-transform: capitalize;">${product.category}</span>
                  </div>
                  <div>
                      <strong style="display: block; font-size: 0.8rem; text-transform: uppercase; color: var(--ds-sys-color-on-surface-subtle); margin-bottom: 0.25rem;">Rating</strong>
                      <span style="color: var(--ds-sys-color-on-surface);">★ ${product.rating} / 5.0</span>
                  </div>
              </div>
          </div>
      `;

      modal.showModal();
  };

  /* ============================================================== 
     4. GENERIC SLIDER LOGIC
  ============================================================== */
  window.slideOne = function() {
    const s1 = document.getElementById("slider-1");
    const s2 = document.getElementById("slider-2");
    const track = document.querySelector(".range-slider .slider-track");
    const minGap = 50;

    if (parseInt(s2.value) - parseInt(s1.value) <= minGap) {
      s1.value = parseInt(s2.value) - minGap;
    }
    updateTrack(s1, s2, track);
  };

  window.slideTwo = function() {
    const s1 = document.getElementById("slider-1");
    const s2 = document.getElementById("slider-2");
    const track = document.querySelector(".range-slider .slider-track");
    const minGap = 50;

    if (parseInt(s2.value) - parseInt(s1.value) <= minGap) {
      s2.value = parseInt(s1.value) + minGap;
    }
    updateTrack(s1, s2, track);
  };

  window.updateTrack = function(s1, s2, track) {
    const min = parseInt(s1.min);
    const max = parseInt(s1.max);
    const percent1 = ((s1.value - min) / (max - min)) * 100;
    const percent2 = ((s2.value - min) / (max - min)) * 100;
    
    if (track) track.style.background = `linear-gradient(to right, #ddd ${percent1}%, var(--ds-sys-color-primary) ${percent1}%, var(--ds-sys-color-primary) ${percent2}%, #ddd ${percent2}%)`;
    
    // Publish immediately on drag (will trigger loading state in real time)
    store.updateState('priceMin', parseInt(s1.value));
    store.updateState('priceMax', parseInt(s2.value));
    
    const v1 = document.getElementById("val-1");
    if(v1) { v1.innerText = "$" + s1.value; v1.style.left = percent1 + "%"; }
    
    const v2 = document.getElementById("val-2");
    if(v2) { v2.innerText = "$" + s2.value; v2.style.left = percent2 + "%"; }
  };
  
  // Kickoff Execution
  window.addEventListener('load', initializeFacetedSearch);

</script>
{{< /demo >}}
