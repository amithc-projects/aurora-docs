#!/bin/bash

echo "🧹 Refactoring for Clean HTML (Classless Inputs & Labels)..."

# --- 1. UPDATE CSS (inputs.css) ---
# We integrate the Input Group & Stepper styles here, and add descendant selectors.
cat <<EOF > static/css/components/forms/inputs/inputs.css
@layer components {

  /* --- DEFINITIONS: The "Input" Look --- */
  /* We define the styles on the class .input, but also apply them 
     to bare elements when inside specific containers. */
  .input,
  .select,
  .textarea,
  /* Context: Inside a Field */
  .field > input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=color]),
  .field > select,
  .field > textarea,
  /* Context: Inside an Input Group */
  .input-group > input,
  .input-group > select,
  /* Context: Stepper */
  .stepper > input {
    width: 100%;
    height: var(--ds-cmp-input-height, 3rem);
    padding-inline: var(--ds-cmp-input-padding-x, 1rem);
    
    border-radius: var(--ds-cmp-input-radius, var(--ds-sys-radius-btn, 4px));
    border: 1px solid var(--ds-sys-color-border);
    
    background-color: var(--ds-sys-color-surface);
    color: var(--ds-sys-color-on-surface);
    
    font-family: inherit;
    font-size: 1rem;
    transition: border-color 0.2s, box-shadow 0.2s;
    appearance: none; 
  }

  /* Textarea Specifics */
  .textarea,
  .field > textarea {
    height: auto;
    min-height: 6rem;
    padding-block: 0.75rem;
    resize: vertical;
  }

  /* Focus State */
  :is(.input, .select, .textarea, .field > input, .input-group > input):focus-visible {
    outline: none;
    border-color: var(--ds-sys-color-primary);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--ds-sys-color-primary), transparent 85%);
    z-index: 2; /* Bring above siblings in groups */
  }

  /* --- FIELD CONTAINER --- */
  .field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    position: relative;
  }

  /* Clean Label Selector */
  .field > label,
  .field__label {
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--ds-sys-color-on-surface);
  }

  /* Clean Hint Selector */
  .field > small,
  .field .hint,
  .field__hint {
    font-size: 0.85rem;
    opacity: 0.7;
    margin-top: -0.25rem;
    display: block;
  }

  /* --- INPUT GROUPS (Merged from Inline) --- */
  .input-group {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
  }

  /* Addons (Prefix/Suffix) */
  .input-prefix, 
  .input-suffix {
    display: flex; 
    align-items: center; 
    justify-content: center;
    padding: 0 0.75rem;
    background: var(--ds-sys-color-surface-container);
    border: 1px solid var(--ds-sys-color-border);
    color: var(--ds-sys-color-on-surface);
    white-space: nowrap;
    height: 3rem; /* Match input height */
  }

  /* Border Radius Logic for Groups */
  .input-prefix { border-right: none; border-radius: 4px 0 0 4px; }
  .input-suffix { border-left: none; border-radius: 0 4px 4px 0; }
  
  .input-group > :first-child:not(:last-child) { border-top-right-radius: 0; border-bottom-right-radius: 0; }
  .input-group > :last-child:not(:first-child) { border-top-left-radius: 0; border-bottom-left-radius: 0; }
  .input-group > :not(:first-child):not(:last-child) { border-radius: 0; }

  /* Icons Overlay */
  .input-icon-overlay {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    z-index: 10;
    color: var(--ds-sys-color-on-surface-variant);
  }
  
  /* Utilities for padding when icons are present */
  .has-icon-left { padding-left: 2.5rem !important; }
  .has-icon-right { padding-right: 2.5rem !important; }

  /* --- STEPPER (Merged from Inline) --- */
  .stepper {
    display: inline-flex;
    border: 1px solid var(--ds-sys-color-border);
    border-radius: 6px;
    overflow: hidden;
  }
  
  .stepper > button {
    width: 40px;
    height: 3rem;
    border: none;
    background: var(--ds-sys-color-surface-container);
    cursor: pointer;
    font-size: 1.2rem;
    display: flex; align-items: center; justify-content: center;
  }
  .stepper > button:hover { background: var(--ds-sys-color-surface-variant); }
  
  /* Override standard input styles for stepper middle */
  .stepper > input {
    width: 60px;
    text-align: center;
    border: none;
    border-left: 1px solid var(--ds-sys-color-border);
    border-right: 1px solid var(--ds-sys-color-border);
    border-radius: 0;
    margin: 0;
    -moz-appearance: textfield;
  }
  .stepper > input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }

}
EOF

# --- 2. UPDATE HTML CONTENT (Clean Markup) ---
cat <<EOF > content/forms/text-value/_index.md
---
title: "Text & Value"
description: "Comprehensive text, numeric, and code inputs."
weight: 10
menu:
  main:
    parent: "forms"
---

<style>
  /* Local layout only - Component styles moved to inputs.css */
  .l-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; }
</style>

## 1. Text Fields
Cleaner HTML: No need for \`class="input"\` or \`class="field__label"\` when inside a \`.field\`.

### A. Standard Variants
{{< demo >}}
<div class="l-grid">
  
  <div class="field">
    <label>Full Name</label>
    <input type="text" placeholder="e.g. John Doe">
  </div>

  <div class="field">
    <label>Twitter (Prefix)</label>
    <div class="input-group">
      <span class="input-prefix">@</span>
      <input type="text" placeholder="username">
    </div>
  </div>

  <div class="field">
    <label>Weight (Suffix)</label>
    <div class="input-group">
      <input type="number" placeholder="0">
      <span class="input-suffix">kg</span>
    </div>
  </div>

</div>
{{< /demo >}}

### B. With Clear Button
{{< demo >}}
<div class="field">
  <label>Filter Items</label>
  <div class="input-group">
    <span class="material-symbols-outlined input-icon-overlay">filter_list</span>
    
    <input type="text" class="has-icon-left js-clearable" placeholder="Type to filter..." oninput="toggleClear(this)">
    
    <button class="material-symbols-outlined" onclick="clearInput(this)" 
      style="position:absolute; right:8px; top:50%; transform:translateY(-50%); border:none; background:transparent; cursor:pointer; display:none; opacity:0.6; z-index:20;">
      close
    </button>
  </div>
</div>
<script>
  function toggleClear(el) { 
    const btn = el.parentElement.querySelector('button');
    btn.style.display = el.value ? 'block' : 'none'; 
  }
  function clearInput(btn) { 
    const i = btn.parentElement.querySelector('input'); 
    i.value = ''; 
    i.focus(); 
    btn.style.display='none'; 
  }
</script>
{{< /demo >}}

## 2. Textareas
{{< demo >}}
<div class="l-grid">
  <div class="field">
    <label>Fixed Height</label>
    <textarea rows="3"></textarea>
  </div>

  <div class="field">
    <label>Auto-Growing + Counter</label>
    <div class="textarea-wrapper">
      <textarea rows="1" maxlength="100" style="overflow:hidden; resize:none;"
        oninput="this.style.height = 'auto'; this.style.height = this.scrollHeight + 'px'; this.nextElementSibling.innerText = this.value.length + '/100';"></textarea>
      <div style="text-align:right; font-size:0.8rem; opacity:0.7;">0/100</div>
    </div>
  </div>
</div>
{{< /demo >}}

## 3. Numbers (Steppers)
The CSS now targets \`.stepper > button\` and \`.stepper > input\` automatically.

{{< demo >}}
<div class="l-grid">
  <div class="field">
    <label>Integer Only</label>
    <input type="number" step="1" placeholder="Whole numbers">
  </div>

  <div class="field">
    <label>Stepper (+/-)</label>
    <div class="stepper">
      <button onclick="step(this, -1)">-</button>
      <input type="number" value="0">
      <button onclick="step(this, 1)">+</button>
    </div>
  </div>
</div>
<script>
  function step(btn, val) {
    const i = btn.parentElement.querySelector('input');
    i.value = Math.max(0, parseInt(i.value||0) + val);
  }
</script>
{{< /demo >}}

## 4. Telephones
{{< demo >}}
<div class="l-grid">
  <div class="field">
    <label>International</label>
    <div class="input-group">
      <select style="flex:0 0 100px;">
        <option>🇺🇸 +1</option><option>🇬🇧 +44</option><option>🇩🇪 +49</option>
      </select>
      <input type="tel" placeholder="Mobile Number">
    </div>
  </div>
</div>
{{< /demo >}}

## 5. Search
{{< demo >}}
<div class="field">
  <label>Product Search</label>
  <div class="input-group">
    <span class="material-symbols-outlined input-icon-overlay">search</span>
    <input type="search" class="has-icon-left" list="products" placeholder="Try typing 'A'...">
  </div>
  <datalist id="products">
    <option value="Analytics">
    <option value="API Docs">
    <option value="Account">
  </datalist>
</div>
{{< /demo >}}
EOF

echo "✅ Refactor Complete. Clean HTML enabled."