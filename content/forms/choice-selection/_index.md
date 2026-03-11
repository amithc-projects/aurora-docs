---
title: "Choice & Selection"
description: "Rich controls for selection, tagging, and survey inputs."
weight: 20
---

## 1. Dropdowns
### Native vs Custom Styled
{{< demo >}}
<div class="l-grid-choice">
  <div class="field">
    <label class="field__label">Native Select</label>
    <select class="input"><option>Option A</option><option>Option B</option></select>
  </div>
  
  <div class="field">
    <label class="field__label">CSS Styled (Custom Arrow)</label>
    <select class="input input--custom-base">
      <button>
        <selectedcontent></selectedcontent>
      </button>
      <option value="custom">Custom Look</option>
      <option value="opt2">Option 2</option>
    </select>
  </div>
</div>
{{< /demo >}}

## 2. Multi-Select (Chips)
Select items to add them as chips. Click chip to remove.

{{< demo >}}
<div class="field" style="max-width:400px; margin-bottom:180px;">
  <label class="field__label">Assign Roles</label>
  <div class="multi-select" id="ms-1" onclick="this.classList.toggle('is-open')">
    
    <div class="ms-trigger">
      <div class="ms-chips">
        <span class="ms-placeholder">Select roles...</span>
      </div>
      <span class="material-symbols-outlined">expand_more</span>
    </div>
    
    <ul class="ms-dropdown">
      <li onclick="toggleRole('Admin', this)">Admin</li>
      <li onclick="toggleRole('Editor', this)">Editor</li>
      <li onclick="toggleRole('Viewer', this)">Viewer</li>
      <li onclick="toggleRole('Billing', this)">Billing</li>
    </ul>
  </div>
</div>

<script>
  function toggleRole(val, li) {
    const container = li.closest('.multi-select').querySelector('.ms-chips');
    
    // Check if already selected
    if (li.classList.contains('is-selected')) {
      // Deselect
      li.classList.remove('is-selected');
      const chip = Array.from(container.children).find(c => c.textContent.trim().startsWith(val));
      if (chip) chip.remove();
    } else {
      // Select
      li.classList.add('is-selected');
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.innerHTML = `${val} <span onclick="event.stopPropagation(); toggleRole('${val}', this.closest('.multi-select').querySelectorAll('li')[Array.from(this.closest('.multi-select').querySelectorAll('li')).findIndex(i => i.textContent === '${val}')])" style="cursor:pointer;">&times;</span>`;
      
      // Remove placeholder
      const ph = container.querySelector('.ms-placeholder');
      if(ph) ph.remove();
      
      container.appendChild(chip);
    }
  }
</script>
{{< /demo >}}

## 3. Toggles & Segmented
Functioning toggle switches and segmented controls using Radio logic.

{{< demo >}}
<div class="l-grid-choice">

<div class="field">
  <label class="field__label">Toggle</label>
  <label class="field--checkbox">
    <input type="checkbox" class="toggle">
    <span>Airplane Mode</span>
  </label>
</div>

<div class="field">
  <label class="field__label">Checked</label>
  <label class="field--checkbox">
    <input type="checkbox" checked class="toggle">
    <span>Airplane Mode</span>
  </label>
</div>

<div class="field">
  <label class="field__label">Disabled</label>
  <label class="field--checkbox">
    <input type="checkbox" disabled checked class="toggle">
    <span>Airplane Mode</span>
  </label>
</div>

</div>
{{< /demo >}}

## 4. Rich Selection (Button Group)
Radio buttons styled as a merged button group.

{{< demo >}}
<div class="field"> <label class="field__label">Alignment Preference</label> <div class="rich-group">

<label class="rich-option">
  <input type="radio" name="align_pref" checked>
  <span class="rich-card">
    <span class="material-symbols-outlined">format_align_left</span>
    <span>Left</span>
  </span>
</label>

<label class="rich-option">
  <input type="radio" name="align_pref">
  <span class="rich-card">
    <span class="material-symbols-outlined">format_align_center</span>
    <span>Center</span>
  </span>
</label>

<label class="rich-option">
  <input type="radio" name="align_pref">
  <span class="rich-card">
    <span class="material-symbols-outlined">format_align_right</span>
    <span>Right</span>
  </span>
</label>
</div> </div>
{{< /demo >}}


## 5. Tags & Ratings
Interactive examples.

{{< demo >}}
<div class="l-grid-choice">
  <div class="field">
    <label class="field__label">Tags (Type & Enter)</label>
    <div class="tag-box" onclick="this.querySelector('input').focus()">
      <span class="chip">Design <span onclick="this.parentElement.remove()">&times;</span></span>
      <input class="input" type="text" placeholder="Add..." onkeydown="if(event.key==='Enter'&&this.value){ 
        const s=document.createElement('span'); s.className='chip'; s.innerHTML=this.value+' <span onclick=\'this.parentElement.remove()\'>&times;</span>'; 
        this.before(s); this.value=''; }">
    </div>
  </div>

  <div class="field">
    <label class="field__label">Rating (Interactive)</label>
    <div class="rating-input" title="Tap a star to rate">
      <input type="radio" name="star" id="s5"><label for="s5">★</label>
      <input type="radio" name="star" id="s4"><label for="s4">★</label>
      <input type="radio" name="star" id="s3"><label for="s3">★</label>
      <input type="radio" name="star" id="s2"><label for="s2">★</label>
      <input type="radio" name="star" id="s1"><label for="s1">★</label>
    </div>
  </div>

  <div class="field">
    <label class="field__label">Satisfaction</label>
    <div class="emoji-group">
      <input type="radio" name="mood" id="e1"><label for="e1">😠</label>
      <input type="radio" name="mood" id="e2"><label for="e2">🙁</label>
      <input type="radio" name="mood" id="e3"><label for="e3">😐</label>
      <input type="radio" name="mood" id="e4"><label for="e4">🙂</label>
      <input type="radio" name="mood" id="e5"><label for="e5">😍</label>
    </div>
  </div>

</div>
{{< /demo >}}

## 6. Matrix (Survey)
Fixed layout to spread columns evenly.

{{< demo >}}
<div style="overflow-x:auto;">
  <table class="matrix-grid">
    <thead>
      <tr>
        <th style="width: 30%;">Topic</th>
        <th>Bad</th>
        <th>OK</th>
        <th>Good</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="topic">Speed</td>
        <td><input type="radio" name="m1"></td>
        <td><input type="radio" name="m1"></td>
        <td><input type="radio" name="m1"></td>
      </tr>
      <tr>
        <td class="topic">Quality</td>
        <td><input type="radio" name="m2"></td>
        <td><input type="radio" name="m2"></td>
        <td><input type="radio" name="m2"></td>
      </tr>
      <tr>
        <td class="topic">General Enthusiasm </td>
        <td><input type="radio" name="m3"></td>
        <td><input type="radio" name="m3"></td>
        <td><input type="radio" name="m3"></td>
      </tr>
    </tbody>
  </table>
</div>
{{< /demo >}}
