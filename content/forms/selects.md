---
title: "Selects"
category: "Forms"
description: "Dropdown menus and pickers."
menu:
  main:
    parent: "forms-standard"
---

## Native Select
The browser default, styled to match our inputs.

{{< demo >}}
<div class="field">
  <label class="field__label">Choose Country</label>
  <select class="input">
    <option>United States</option>
    <option>Canada</option>
    <option>United Kingdom</option>
  </select>
</div>
{{< /demo >}}

## Custom Select (Visual)
Allows for icons and flags inside the trigger.

{{< demo >}}
<div class="base-select">
  <button class="base-select__trigger" type="button">
    <span class="material-symbols-outlined">language</span>
    <span>English (US)</span>
    <span class="base-select__arrow material-symbols-outlined">expand_more</span>
  </button>
  </div>
{{< /demo >}}

## Combobox (Native)
An input combined with a dropdown list. Users can type to filter predefined options or enter their own custom value.

{{< demo >}}
<div class="field">
  <label>Choose Product</label>
  <div class="input-group">
    <input type="text" class="input" list="products-list" placeholder="Choose or type a product name...">
  </div>
  <datalist id="products-list">
    <option value="Analytics">
    <option value="API Docs">
    <option value="Account">
    <option value="Billing">
    <option value="Dashboard">
  </datalist>
</div>
{{< /demo >}}

