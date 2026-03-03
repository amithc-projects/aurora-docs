---
title: "Text & Value"
description: "Comprehensive text, numeric, and code inputs."
weight: 10
menu:
  main:
    parent: "forms"
---



## 1. Text Fields
Cleaner HTML: No need for `class="input"` or `class="field__label"` when inside a `.field`.

### A. Standard Variants
{{< demo >}}
<div class="l-grid-text">
  
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
<div class="l-grid-text">
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
The CSS now targets `.stepper > button` and `.stepper > input` automatically.

{{< demo >}}
<div class="l-grid-text">
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
<div class="l-grid-text">
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
