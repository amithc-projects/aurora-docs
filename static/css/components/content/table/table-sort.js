/* aurora/js/table-sort.js */

document.addEventListener('DOMContentLoaded', () => {
  const tables = document.querySelectorAll('.table-sortable');

  tables.forEach(table => {
    const headers = table.querySelectorAll('th[data-sort]');
    
    headers.forEach(header => {
      header.addEventListener('click', () => {
        const type = header.getAttribute('data-sort'); // string, number, date
        const colIndex = Array.from(header.parentNode.children).indexOf(header);
        const currentSort = header.getAttribute('aria-sort');
        
        // 1. Determine new sort direction
        let newSort = 'ascending';
        if (currentSort === 'ascending') newSort = 'descending';
        
        // 2. Reset other headers
        headers.forEach(h => h.setAttribute('aria-sort', 'none'));
        header.setAttribute('aria-sort', newSort);

        // 3. Sort the rows
        sortTableByColumn(table, colIndex, type, newSort);
      });
    });
  });
});

function sortTableByColumn(table, colIndex, type, direction) {
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  // Multiplier: 1 for asc, -1 for desc
  const dirModifier = direction === 'ascending' ? 1 : -1;

  const sortedRows = rows.sort((a, b) => {
    const aColText = a.children[colIndex].innerText.trim();
    const bColText = b.children[colIndex].innerText.trim();

    // Parse based on type
    let aValue, bValue;

    switch (type) {
      case 'number':
        aValue = parseFloat(aColText.replace(/[^0-9.-]+/g, ""));
        bValue = parseFloat(bColText.replace(/[^0-9.-]+/g, ""));
        break;
      case 'date':
        aValue = new Date(aColText);
        bValue = new Date(bColText);
        break;
      case 'currency':
        aValue = parseFloat(aColText.replace(/[^0-9.-]+/g, ""));
        bValue = parseFloat(bColText.replace(/[^0-9.-]+/g, ""));
        break;
      default: // string
        aValue = aColText.toLowerCase();
        bValue = bColText.toLowerCase();
    }

    if (aValue > bValue) return (1 * dirModifier);
    if (aValue < bValue) return (-1 * dirModifier);
    return 0;
  });

  // Re-append rows in new order (moves them in the DOM)
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  tbody.append(...sortedRows);
}