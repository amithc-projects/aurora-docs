#!/bin/bash

echo "🔍 Installing Pure CSS Content Filter..."

# --- 1. CREATE FILTER CSS ---
mkdir -p static/css/patterns

cat <<EOF > static/css/patterns/filter.css
/* PURE CSS CONTENT FILTER 
   Logic: Uses Radio Buttons to toggle visibility of siblings.
   Caveat: Requires hardcoded CSS rules for each category.
*/

/* 1. Hide the actual radio inputs */
.filter-control {
  display: none;
}

/* 2. Style the Labels (The "Buttons") */
.filter-label {
  display: inline-block;
  cursor: pointer;
  margin-right: 0.5rem;
  opacity: 0.6;
  transition: all 0.2s;
  
  /* Reuse Badge Styles if available, or simpler fallback */
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: var(--ds-sys-color-surface-variant, #eee);
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid transparent;
}

.filter-label:hover {
  opacity: 0.8;
  background: var(--ds-sys-color-surface-inverse, #333);
  color: var(--ds-sys-color-on-surface-inverse, white);
}

/* 3. Active State (When associated radio is checked) */
/* We rely on ID/For matching. 
   input#filter-X:checked ~ .filter-nav label[for="filter-X"] */

#filter-all:checked ~ .filter-nav label[for="filter-all"],
#filter-news:checked ~ .filter-nav label[for="filter-news"],
#filter-sport:checked ~ .filter-nav label[for="filter-sport"],
#filter-tech:checked ~ .filter-nav label[for="filter-tech"] {
  opacity: 1;
  background: var(--ds-sys-color-primary);
  color: var(--ds-sys-color-on-primary);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}


/* 4. THE FILTERING LOGIC */
/* Selector Translation:
   "When #filter-news is checked, look at siblings (~) that have class .l-masonry,
    find children (.card) that do NOT have data-category='news',
    and set them to display: none."
*/

#filter-news:checked ~ .l-masonry .card:not([data-category="news"]),
#filter-sport:checked ~ .l-masonry .card:not([data-category="sport"]),
#filter-tech:checked ~ .l-masonry .card:not([data-category="tech"]) {
  display: none;
}

/* Note: Masonry Grid (dense) handles the reflow automatically when items hide! */
EOF

# --- 2. UPDATE MANIFEST ---
MANIFEST="static/css/aurora.css"
IMPORT_LINE='@import "patterns/filter.css";'

if grep -q "$IMPORT_LINE" "$MANIFEST"; then
    echo " -> Filter CSS is already imported."
else
    echo "$IMPORT_LINE" >> "$MANIFEST"
    echo " -> Added import to $MANIFEST"
fi

# --- 3. CREATE DEMO PAGE ---
cat <<EOF > content/patterns/content-filter.md
---
title: "Content Filter"
description: "Zero-JavaScript filtering using the Checkbox Hack."
category: "Patterns"
---

## Pure CSS Filtering
Click the badges below. The Masonry grid will automatically reflow to show only the matching items.

**Note:** This works by toggling \`display: none\` on the non-matching items. Because we are using the \`l-masonry\` layout with \`grid-auto-flow: dense\`, the remaining items snap perfectly into place to fill the gaps.

{{< demo >}}
<input type="radio" id="filter-all" name="filter" class="filter-control" checked>
<input type="radio" id="filter-news" name="filter" class="filter-control">
<input type="radio" id="filter-sport" name="filter" class="filter-control">
<input type="radio" id="filter-tech" name="filter" class="filter-control">

<div class="filter-nav" style="margin-bottom: 2rem;">
  <span style="font-size: 0.9rem; margin-right: 0.5rem; font-weight: bold;">Filter by:</span>
  <label for="filter-all" class="filter-label">All</label>
  <label for="filter-news" class="filter-label">News</label>
  <label for="filter-sport" class="filter-label">Sport</label>
  <label for="filter-tech" class="filter-label">Tech</label>
</div>

<div class="l-masonry">

  <article class="card" data-category="news">
    <div class="card__content">
      <span class="badge badge--soft badge--primary" style="margin-bottom:0.5rem">News</span>
      <h4>Local Election Results</h4>
    </div>
  </article>
  
  <article class="card span-v-2" data-category="news">
    <img src="https://picsum.photos/id/11/400/300" class="card__media" style="height: 150px;">
    <div class="card__content">
      <span class="badge badge--soft badge--primary" style="margin-bottom:0.5rem">News</span>
      <h4>Markets hit all time high</h4>
      <p>The economy is booming according to recent reports from the city.</p>
    </div>
  </article>

  <article class="card" data-category="sport">
    <div class="card__content">
      <span class="badge badge--soft badge--success" style="margin-bottom:0.5rem">Sport</span>
      <h4>United win 3-0</h4>
    </div>
  </article>

  <article class="card span-h-2" data-category="sport">
    <div class="card__content">
      <span class="badge badge--soft badge--success" style="margin-bottom:0.5rem">Sport</span>
      <h4>Olympic Bid Announced</h4>
      <p>The committee has decided to put forward a bid for the 2036 games.</p>
    </div>
  </article>

  <article class="card" data-category="tech">
    <div class="card__content">
      <span class="badge badge--soft badge--warning" style="margin-bottom:0.5rem">Tech</span>
      <h4>New AI Chip Revealed</h4>
    </div>
  </article>

  <article class="card span-block card--overlay" data-category="tech">
    <img src="https://picsum.photos/id/60/600/600" class="card__media">
    <div class="card__content">
      <span class="badge badge--solid badge--warning" style="margin-bottom:0.5rem">Tech</span>
      <h2 style="color:white">VR Headset Review</h2>
    </div>
  </article>

</div>
{{< /demo >}}
EOF

echo "✅ CSS Filter Installed."
echo "👉 Check content/patterns/content-filter.md"

