---
title: "Grouping & Layouts"
description: "Label positioning, field groups, and contextual help."
weight: 50
menu:
  main:
    parent: "forms-standard"
---

## 1. Label Positioning
Demonstrating different ways to align labels relative to the input.

{{< demo >}}
<div class="l-stack" style="gap: 2rem;">

  <div class="field">
    <label class="field__label">Top Aligned (Default)</label>
    <input type="text" class="input" placeholder="Standard layout">
  </div>

  <div class="field" style="--ds-field-layout: row;">
    <label class="field__label">Left Aligned (Variable)</label>
    <div class="field__body">
      <input type="text" class="input" placeholder="Set --ds-field-layout: row">
    </div>
  </div>

  <div class="field" style="--ds-field-layout: row; --ds-field-label-width: 8rem;">
    <label class="field__label">Custom Width</label>
    <div class="field__body">
      <input type="text" class="input" placeholder="Adjust label width via variable">
    </div>
  </div>

</div>
{{< /demo >}}

### Table Style Layout
You can set the layout variable on a parent container to align multiple fields at once.

{{< demo >}}
<form class="card" style="padding: 2rem; --ds-field-layout: row; --ds-field-label-width: 10rem;">
  <div class="field">
    <label class="field__label">Full Name</label>
    <div class="field__body"><input type="text" class="input"></div>
  </div>
  <div class="field">
    <label class="field__label">Email Address</label>
    <div class="field__body"><input type="email" class="input"></div>
  </div>
  <div class="field">
    <label class="field__label">Account Type</label>
    <div class="field__body">
      <select class="select">
        <option>Personal</option>
        <option>Business</option>
      </select>
    </div>
  </div>
</form>
{{< /demo >}}

## 2. Fieldsets & Grouping
Using `<fieldset>` to semantically and visually group related inputs.

{{< demo >}}
<form class="card" style="padding: 2rem;">
  
  <fieldset class="form-group">
    <legend>Personal Identity</legend>
    <div class="l-grid">
      <div class="field">
        <label class="field__label">First Name</label>
        <input type="text" class="input">
      </div>
      <div class="field">
        <label class="field__label">Last Name</label>
        <input type="text" class="input">
      </div>
    </div>
  </fieldset>

  <fieldset class="form-group">
    <legend>Notifications</legend>
    <div class="l-stack" style="gap: 0.5rem;">
      <label class="field--checkbox">
        <input type="checkbox" checked> <span>Email Digests</span>
      </label>
      <label class="field--checkbox">
        <input type="checkbox"> <span>SMS Alerts</span>
      </label>
    </div>
  </fieldset>

</form>


{{< /demo >}}

## 3. Indicators & Help
Handling mandatory fields and rich contextual tooltips.

{{< demo >}}
<div class="l-stack" style="gap: 2rem; padding-bottom: 100px;"> <div class="field">
    <label class="field__label required">Email Address</label>
    <input type="email" class="input" placeholder="user@example.com">
  </div>

  <div class="field">
    <div class="label-wrapper">
      <label class="field__label">API Key</label>
      
      <div class="tooltip-wrapper">
        <span class="material-symbols-outlined icon-help">help</span>
        <div class="tooltip-content">
          <strong>What is this?</strong>
          <p>Your unique secret key used to authenticate requests. Do not share this.</p>
          <a href="#">Read Documentation</a>
        </div>
      </div>
      
    </div>
    <input type="text" class="input" value="sk_test_4819..." readonly style="font-family:monospace; opacity:0.8;">
  </div>

</div>


{{< /demo >}}

## 4. Placeholders & Hints
Providing guidance inside and outside the input.

{{< demo >}}
<div class="l-grid">
  
  <div class="field">
    <label class="field__label">Search</label>
    <input type="text" class="input" placeholder="e.g. Order #12345">
  </div>

  <div class="field">
    <label class="field__label">Website</label>
    <input type="url" class="input" placeholder="https://">
    <div class="field__hint">Must include protocol (http:// or https://)</div>
  </div>

</div>
{{< /demo >}}

