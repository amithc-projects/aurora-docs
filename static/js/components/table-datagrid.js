export function initDataGrids() {
    const grids = document.querySelectorAll('.table-datagrid');

    grids.forEach(grid => {
        // Find existing thead and tbody
        const thead = grid.querySelector('thead');
        const tbody = grid.querySelector('tbody');
        if (!tbody || !thead) return;

        // Keep a copy of all original rows in memory as the "source of truth"
        const allOriginalRows = Array.from(tbody.querySelectorAll('tr'));

        // Define configuration
        const pageSize = parseInt(grid.getAttribute('data-page-size') || '10', 10);
        let currentPage = 1;
        let currentFilter = '';
        let currentSortColumn = -1;
        let currentSortDir = 'none'; // 'none', 'ascending', 'descending'
        let currentSortType = 'string';

        // Arrays for state management
        let filteredRows = [...allOriginalRows];

        // 1. Inject DOM for Search Input above the table
        const container = grid.closest('.table-container') || grid;

        const controlsHeader = document.createElement('div');
        controlsHeader.className = 'datagrid-controls-header';
        controlsHeader.style.display = 'flex';
        controlsHeader.style.justifyContent = 'space-between';
        controlsHeader.style.alignItems = 'center';
        controlsHeader.style.marginBottom = '1rem';

        const searchInput = document.createElement('input');
        searchInput.type = 'search';
        searchInput.className = 'input input--sm';
        searchInput.placeholder = 'Search table...';
        searchInput.style.maxWidth = '300px';

        const recordCount = document.createElement('span');
        recordCount.className = 'text-sm text-subtle';
        recordCount.style.color = 'var(--ds-sys-color-on-surface-subtle)';
        recordCount.style.fontSize = '0.85rem';

        controlsHeader.appendChild(searchInput);
        controlsHeader.appendChild(recordCount);
        container.parentNode.insertBefore(controlsHeader, container);

        // 2. Inject DOM for Pagination below the table
        const paginationWrapper = document.createElement('div');
        paginationWrapper.className = 'datagrid-pagination';
        paginationWrapper.style.display = 'flex';
        paginationWrapper.style.justifyContent = 'space-between';
        paginationWrapper.style.alignItems = 'center';
        paginationWrapper.style.marginTop = '1rem';
        container.parentNode.insertBefore(paginationWrapper, container.nextSibling);

        // Render Function: Takes the full dataset, filters it, sorts it, slices it, and repaints
        function render() {
            // A. Filter
            if (currentFilter.trim() === '') {
                filteredRows = [...allOriginalRows];
            } else {
                const query = currentFilter.toLowerCase();
                filteredRows = allOriginalRows.filter(row => {
                    return row.innerText.toLowerCase().includes(query);
                });
            }

            // B. Sort
            if (currentSortDir !== 'none' && currentSortColumn > -1) {
                const dirModifier = currentSortDir === 'ascending' ? 1 : -1;
                filteredRows.sort((a, b) => {
                    // Safe column extraction (fallback to empty string if missing)
                    const aCell = a.children[currentSortColumn];
                    const bCell = b.children[currentSortColumn];
                    const aColText = aCell ? aCell.innerText.trim() : '';
                    const bColText = bCell ? bCell.innerText.trim() : '';

                    let aValue, bValue;
                    switch (currentSortType) {
                        case 'number':
                            aValue = parseFloat(aColText.replace(/[^0-9.-]+/g, "")) || 0;
                            bValue = parseFloat(bColText.replace(/[^0-9.-]+/g, "")) || 0;
                            break;
                        case 'currency':
                            aValue = parseFloat(aColText.replace(/[^0-9.-]+/g, "")) || 0;
                            bValue = parseFloat(bColText.replace(/[^0-9.-]+/g, "")) || 0;
                            break;
                        case 'date':
                            aValue = new Date(aColText).getTime() || 0;
                            bValue = new Date(bColText).getTime() || 0;
                            break;
                        default: // string
                            aValue = aColText.toLowerCase();
                            bValue = bColText.toLowerCase();
                    }

                    if (aValue > bValue) return (1 * dirModifier);
                    if (aValue < bValue) return (-1 * dirModifier);
                    return 0;
                });
            }

            // C. Paginate
            const totalPages = Math.max(1, Math.ceil(filteredRows.length / pageSize));
            if (currentPage > totalPages) currentPage = totalPages;

            const startIndex = (currentPage - 1) * pageSize;
            const endIndex = Math.min(startIndex + pageSize, filteredRows.length);
            const pagedRows = filteredRows.slice(startIndex, endIndex);

            // D. Repaint Table Body
            tbody.innerHTML = '';

            if (pagedRows.length === 0) {
                const emptyRow = document.createElement('tr');
                const emptyCell = document.createElement('td');
                emptyCell.colSpan = thead.querySelectorAll('th').length;
                emptyCell.style.textAlign = 'center';
                emptyCell.style.padding = '2rem';
                emptyCell.style.color = 'var(--ds-sys-color-on-surface-subtle)';
                emptyCell.innerText = `No results found for "${currentFilter}"`;
                emptyRow.appendChild(emptyCell);
                tbody.appendChild(emptyRow);
            } else {
                pagedRows.forEach(row => tbody.appendChild(row));
            }

            // E. Update Meta UI
            recordCount.innerText = `Showing ${filteredRows.length === 0 ? 0 : startIndex + 1}-${endIndex} of ${filteredRows.length} rows`;
            renderPaginationControls(totalPages);
        }

        function renderPaginationControls(totalPages) {
            paginationWrapper.innerHTML = '';
            if (totalPages <= 1) return; // Hide pagination if only 1 page

            const info = document.createElement('span');
            info.style.fontSize = '0.85rem';
            info.style.color = 'var(--ds-sys-color-on-surface-subtle)';
            info.innerText = `Page ${currentPage} of ${totalPages}`;

            const nav = document.createElement('nav');
            nav.className = 'pagination pagination-compact';
            nav.setAttribute('aria-label', 'Table navigation');

            // Prev Button
            const prev = document.createElement('button');
            prev.className = 'pagination-item';
            prev.disabled = currentPage === 1;
            prev.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
            prev.addEventListener('click', () => {
                if (currentPage > 1) { currentPage--; render(); }
            });
            nav.appendChild(prev);

            // Page Numbers (Simplified logic: show next/prev 1 page, plus ends)
            for (let i = 1; i <= totalPages; i++) {
                // Show first, last, current, and adjacent to current
                if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                    const btn = document.createElement('button');
                    btn.className = `pagination-item ${i === currentPage ? 'is-active' : ''}`;
                    if (i === currentPage) btn.setAttribute('aria-current', 'page');
                    btn.innerText = i;
                    btn.addEventListener('click', () => {
                        currentPage = i;
                        render();
                    });
                    nav.appendChild(btn);
                } else if (i === currentPage - 2 || i === currentPage + 2) {
                    const elipsis = document.createElement('span');
                    elipsis.className = 'pagination-item';
                    elipsis.style.pointerEvents = 'none';
                    elipsis.innerText = '...';
                    nav.appendChild(elipsis);
                }
            }

            // Next Button
            const next = document.createElement('button');
            next.className = 'pagination-item';
            next.disabled = currentPage === totalPages;
            next.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
            next.addEventListener('click', () => {
                if (currentPage < totalPages) { currentPage++; render(); }
            });
            nav.appendChild(next);

            paginationWrapper.appendChild(info);
            paginationWrapper.appendChild(nav);
        }

        // --- Event Listeners ---

        // Search Input
        searchInput.addEventListener('input', (e) => {
            currentFilter = e.target.value;
            currentPage = 1; // reset to page 1 on search
            render();
        });

        // Headers (Sorting)
        const sortableHeaders = grid.querySelectorAll('th[data-sort]');
        sortableHeaders.forEach((header, index) => {
            header.style.cursor = 'pointer';
            header.title = 'Click to sort';

            // Look for existing icons, inject if missing to make it clear it's sortable
            if (!header.querySelector('.sort-icon')) {
                header.innerHTML += ` <svg class="sort-icon" style="display:inline-block; vertical-align:middle; opacity:0.3;" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 5l3-3 3 3M3 7l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
            }

            header.addEventListener('click', () => {
                const type = header.getAttribute('data-sort') || 'string';
                const colIndex = Array.from(header.parentNode.children).indexOf(header);

                // Toggle direction
                if (currentSortColumn === colIndex) {
                    currentSortDir = currentSortDir === 'ascending' ? 'descending' : 'ascending';
                } else {
                    currentSortColumn = colIndex;
                    currentSortDir = 'ascending';
                    currentSortType = type;
                }

                // Update UI attributes
                sortableHeaders.forEach(h => {
                    h.setAttribute('aria-sort', 'none');
                    const icon = h.querySelector('.sort-icon path');
                    if (icon) icon.setAttribute('d', 'M3 5l3-3 3 3M3 7l3 3 3-3'); // Reset icon
                });

                header.setAttribute('aria-sort', currentSortDir);
                const activeIcon = header.querySelector('.sort-icon path');
                if (activeIcon) {
                    if (currentSortDir === 'ascending') activeIcon.setAttribute('d', 'M3 8l3-3 3 3');
                    else activeIcon.setAttribute('d', 'M3 4l3 3 3-3');
                }

                render();
            });
        });

        // Initial paint
        render();
    });
}
