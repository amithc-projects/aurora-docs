#!/bin/bash

echo "🪗 Installing Accordion Component..."

# --- 1. CREATE CSS ---
mkdir -p static/css/components

cat <<EOF > static/css/components/accordion.css
/* ACCORDION COMPONENT
   Structure: ul.accordion > li > details > summary + .accordion__content
*/

.accordion {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  border: 1px solid var(--ds-sys-color-border);
  border-radius: var(--ds-sys-radius-card);
  overflow: hidden;
  background: var(--ds-sys-color-surface);
}

.accordion__item {
  border-bottom: 1px solid var(--ds-sys-color-border);
}

.accordion__item:last-child {
  border-bottom: none;
}

/* The Interactive Header */
.accordion details > summary {
  padding: 1rem 1.5rem;
  cursor: pointer;
  font-weight: 600;
  list-style: none; /* Hide default triangle */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--ds-sys-color-surface);
  transition: background 0.2s;
  color: var(--ds-sys-color-on-surface);
}

.accordion details > summary:hover {
  background: var(--ds-sys-color-surface-variant);
}

/* Custom Marker Icon (Plus/Minus or Chevron) */
.accordion details > summary::after {
  content: '+';
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 1;
  transition: transform 0.2s;
}

/* Open State */
.accordion details[open] > summary {
  background: var(--ds-sys-color-surface-variant);
  border-bottom: 1px solid var(--ds-sys-color-border);
}

.accordion details[open] > summary::after {
  transform: rotate(45deg); /* Turn + into x */
}

/* Content Area */
.accordion__content {
  padding: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
  background: var(--ds-sys-color-surface);
  color: var(--ds-sys-color-on-surface-variant);
  
  /* Animation Hook */
  animation: slide-down 0.3s ease-out;
}

@keyframes slide-down {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* --- HORIZONTAL VARIANT --- */
/* Good for "Features" or "Gallery" accordions */
.accordion--horizontal {
  display: flex;
  flex-direction: row;
  height: 400px; /* Needs fixed height to work well */
}

.accordion--horizontal .accordion__item {
  border-bottom: none;
  border-right: 1px solid var(--ds-sys-color-border);
  flex: 0 0 auto; /* Start closed (width of header) */
  display: flex;
  transition: flex 0.4s ease;
}

.accordion--horizontal .accordion__item:last-child {
  border-right: none;
}

.accordion--horizontal details {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.accordion--horizontal summary {
  writing-mode: vertical-rl; /* Vertical Text */
  transform: rotate(180deg); /* Flip it so it reads bottom-up */
  width: 3rem; /* Fixed width header */
  padding: 1.5rem 0.5rem;
  text-align: center;
  border-bottom: none;
}

/* Remove borders applied by default style */
.accordion--horizontal details[open] > summary {
  border-bottom: none;
  border-left: 1px solid var(--ds-sys-color-border);
}

/* When open, item expands to take available space */
.accordion--horizontal .accordion__item:has(details[open]) {
  flex: 1 1 auto;
}

.accordion--horizontal .accordion__content {
  width: 100%; /* Fill the expanded area */
  min-width: 300px; /* Prevent crushing content */
  overflow-y: auto;
}

EOF

# --- 2. CREATE JS (Controller) ---
mkdir -p static/js/components

cat <<'EOF' > static/js/components/accordion.js
/**
 * Aurora Accordion Controller
 * Handles "Single Open" logic.
 */

export function initAccordions() {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(acc => {
    // Check if it allows multiple items open
    const allowMultiple = acc.hasAttribute('data-multiple');

    if (!allowMultiple) {
      const details = acc.querySelectorAll('details');
      
      details.forEach(targetDetail => {
        targetDetail.addEventListener('toggle', () => {
          // If this one just opened...
          if (targetDetail.open) {
            // Close all others in this specific accordion
            details.forEach(d => {
              if (d !== targetDetail) {
                d.removeAttribute('open');
              }
            });
          }
        });
      });
    }
  });
}
EOF

# --- 3. UPDATE MANIFEST ---
MANIFEST="static/css/aurora.css"
IMPORT_LINE='@import "components/accordion.css";'

if grep -q "$IMPORT_LINE" "$MANIFEST"; then
    echo " -> Accordion CSS is already imported."
else
    echo "$IMPORT_LINE" >> "$MANIFEST"
    echo " -> Added import to $MANIFEST"
fi

# --- 4. INJECT JS ---
FILE="layouts/_default/baseof.html"
if ! grep -q "accordion.js" "$FILE"; then
  # Insert before the closing body tag
  sed -i.bak 's|</body>|  <script type="module">import { initAccordions } from "/js/components/accordion.js"; initAccordions();</script>\n</body>|' "$FILE"
  rm "${FILE}.bak"
fi

# --- 5. CREATE DOCS PAGE ---
cat <<EOF > content/components/accordion.md
---
title: "Accordion"
description: "Expandable sections for organizing content."
category: "Components"
---

## Vertical (Default)
By default, only **one item** can be open at a time (Exclusive mode).

{{< demo >}}
<ul class="accordion">
  <li class="accordion__item">
    <details>
      <summary>What is Aurora?</summary>
      <div class="accordion__content">
        Aurora is a lightweight, semantic design system built for speed and clarity.
      </div>
    </details>
  </li>
  <li class="accordion__item">
    <details>
      <summary>How do I install it?</summary>
      <div class="accordion__content">
        Simply include the \`aurora.css\` file in your head and import the JS modules.
      </div>
    </details>
  </li>
  <li class="accordion__item">
    <details>
      <summary>Is it accessible?</summary>
      <div class="accordion__content">
        Yes! It uses native HTML \`<details>\` elements which are fully keyboard accessible by default.
      </div>
    </details>
  </li>
</ul>
{{< /demo >}}

## Allow Multiple
Add \`data-multiple\` to allow multiple sections to be open at once.

{{< demo >}}
<ul class="accordion" data-multiple>
  <li class="accordion__item">
    <details open>
      <summary>Settings</summary>
      <div class="accordion__content">
        Profile settings and preferences.
      </div>
    </details>
  </li>
  <li class="accordion__item">
    <details open>
      <summary>Notifications</summary>
      <div class="accordion__content">
        Email and push notification controls.
      </div>
    </details>
  </li>
</ul>
{{< /demo >}}

## Horizontal Accordion
Great for features or galleries. Use \`class="accordion accordion--horizontal"\`.

{{< demo >}}
<ul class="accordion accordion--horizontal">
  <li class="accordion__item">
    <details open>
      <summary>Design</summary>
      <div class="accordion__content">
        <h3>Design Principles</h3>
        <p>We focus on clarity, efficiency, and beauty.</p>
        <img src="https://picsum.photos/id/1/200/100" style="width:100%; margin-top:1rem; border-radius:4px;">
      </div>
    </details>
  </li>
  <li class="accordion__item">
    <details>
      <summary>Code</summary>
      <div class="accordion__content">
        <h3>Clean Code</h3>
        <p>Semantic HTML and minimal CSS ensure fast load times.</p>
      </div>
    </details>
  </li>
  <li class="accordion__item">
    <details>
      <summary>Deploy</summary>
      <div class="accordion__content">
        <h3>Instant Deploy</h3>
        <p>Push to git and go live in seconds.</p>
      </div>
    </details>
  </li>
</ul>
{{< /demo >}}
EOF

echo "✅ Accordion System Installed."
echo "👉 Check content/components/accordion.md"

