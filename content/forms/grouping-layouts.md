---
title: "Grouping & Layouts"
description: "Label positioning, field groups, and contextual help."
weight: 50
menu:
  main:
    parent: "forms"
---

## 1. Label Positioning
Demonstrating different ways to align labels relative to the input.

{{< demo >}}
<div class="l-stack" style="gap: 2rem;">

  <div class="field">
    <label class="field__label">Top Aligned (Default)</label>
    <input type="text" class="input" placeholder="Standard layout">
  </div>

  <div class="field form-horizontal">
    <label class="field__label">Left Aligned</label>
    <div class="field__body">
      <input type="text" class="input" placeholder="Label is on the left">
      <div class="field__hint">Good for dense data entry forms.</div>
    </div>
  </div>

  <div class="field form-horizontal form-horizontal--right">
    <label class="field__label">Right Aligned</label>
    <div class="field__body">
      <input type="text" class="input" placeholder="Label text aligns right">
    </div>
  </div>

</div>


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

