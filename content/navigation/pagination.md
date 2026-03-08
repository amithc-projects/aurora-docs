---
title: "Pagination"
description: "Navigate datasets split across multiple pages. Four variants covering all common use cases."
menu:
  main:
    parent: "navigation"
---

Pagination allows users to navigate through large datasets split across multiple pages. It communicates position within the dataset and provides controls to move between pages.

## Numeric (default)

Full page number list with prev/next controls and ellipsis compression. Best for datasets where absolute position matters (search results, data tables).

{{< demo >}}
<div style="padding: 1rem;">
  <nav aria-label="Search results">
    <ol class="pagination">
      <li>
        <button class="page-btn page-arrow" aria-disabled="true" tabindex="-1" aria-label="Go to previous page">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg> Prev
        </button>
      </li>
      <li><button class="page-btn" aria-current="page" aria-label="Page 1">1</button></li>
      <li><button class="page-btn" aria-label="Page 2">2</button></li>
      <li><button class="page-btn" aria-label="Page 3">3</button></li>
      <li><span class="page-ellipsis" aria-hidden="true">…</span></li>
      <li><button class="page-btn" aria-label="Page 12">12</button></li>
      <li>
        <button class="page-btn page-arrow" aria-label="Go to next page">
          Next <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </li>
    </ol>
  </nav>
  <p style="font-size: 0.75rem; color: var(--ds-sys-color-on-surface-subtle); margin-top: 0.875rem;">Showing 1–20 of 234 results</p>
</div>
{{< /demo >}}

## Simple Prev / Next

Only previous and next controls, with a current position indicator. Best for sequential content where jumping to a specific page isn't needed.

{{< demo >}}
<div style="padding: 1rem;">
  <nav aria-label="Article navigation">
    <div class="pagination-simple">
      <button class="page-btn page-arrow" aria-label="Go to previous page">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg> Previous
      </button>
      <div class="page-indicator">
        <strong>3</strong> / 12
      </div>
      <button class="page-btn page-arrow" aria-label="Go to next page">
        Next <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </div>
  </nav>
</div>
{{< /demo >}}

## Compact

Condensed numeric variant — page numbers hidden, shows only "3 / 12" with prev/next arrows. Used in tight layouts like table footers or mobile.

{{< demo >}}
<div style="padding: 1rem;">
  <nav aria-label="Results">
    <div class="pagination-compact" role="group">
      <button class="compact-btn" aria-label="Previous page">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <div class="compact-divider"></div>
      <div class="compact-label"><strong>3</strong> / 12</div>
      <div class="compact-divider"></div>
      <button class="compact-btn" aria-label="Next page">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </div>
  </nav>
</div>
{{< /demo >}}

## Load More

A single "Load more" button appends the next page of results below existing content. Does not replace content — appends.

{{< demo >}}
<div style="padding: 1rem; max-width: 400px;">
  <button class="load-more-btn">
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
    Load more results
  </button>
  <p class="load-more-count">Showing 15 of 45 items — 30 remaining</p>
</div>
{{< /demo >}}

<script>
  // Add interactivity to Pagination demos
  document.addEventListener('DOMContentLoaded', () => {
    // Numeric pagination
    const pageBtns = document.querySelectorAll('.pagination .page-btn:not(.page-arrow)');
    pageBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (btn.getAttribute('aria-disabled') === 'true') return;
        pageBtns.forEach(b => b.removeAttribute('aria-current'));
        btn.setAttribute('aria-current', 'page');
      });
    });

    // Load More button
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => {
        const originalText = loadMoreBtn.innerHTML;
        loadMoreBtn.innerHTML = '<span style="display:inline-block; animation: spin 1s linear infinite;">↻</span> Loading...';
        loadMoreBtn.disabled = true;
        setTimeout(() => {
          loadMoreBtn.innerHTML = originalText;
          loadMoreBtn.disabled = false;
        }, 1000);
      });
    }
  });
</script>
