---
title: "Inputs"
category: "Forms"
description: "Comprehensive guide to data entry fields."
menu:
  main:
    parent: "forms-standard"
---

## Checkboxes

{{< demo >}}
  <section class="card" style="padding: 2rem;">
        <h3 style="margin-bottom: 1rem;">Checkboxes</h3>
        <div class="l-stack" style="gap: 1rem;">
          
          <label class="field--checkbox">
            <input type="checkbox" name="opt1">
            <span>Standard Checkbox</span>
          </label>

          <label class="field--checkbox">
            <input type="checkbox" name="opt2" checked>
            <span>Pre-selected</span>
          </label>

          <label class="field--checkbox">
            <input type="checkbox" disabled>
            <span>Disabled State</span>
          </label>
          
        </div>
      </section>
{{< /demo >}}
## Radio Buttons

{{< demo >}}
      <section class="card" style="padding: 2rem;">
        <h3 style="margin-bottom: 1rem;">Radio Buttons</h3>
        <div class="l-stack" style="gap: 1rem;">
          
          <label class="field--radio">
            <input type="radio" name="plan" value="free">
            <span>Free Tier</span>
          </label>

          <label class="field--radio">
            <input type="radio" name="plan" value="pro" checked>
            <span>Pro Tier</span>
          </label>

          <label class="field--radio">
            <input type="radio" name="plan" value="ent" disabled>
            <span>Enterprise (Locked)</span>
          </label>

        </div>
      </section>
{{< /demo >}}

## Switches


{{< demo >}}
      <section class="card" style="padding: 2rem;">
        <h3 style="margin-bottom: 1rem;">Switches</h3>
        <div class="l-stack" style="gap: 1rem;">
          
          <label class="field--checkbox">
            <input type="checkbox" class="toggle">
            <span>Notifications</span>
          </label>

          <label class="field--checkbox">
            <input type="checkbox" class="toggle" checked>
            <span>Dark Mode (checked)</span>
          </label>

        </div>
      </section>

{{< /demo >}}
## Text Fields
Standard text inputs.

{{< demo >}}
<div class="l-stack">
  
  <div class="field">
    <label class="field__label">Full Name</label>
    <input type="text" class="input" placeholder="e.g. Jane Doe">
  </div>

  <div class="field">
    <label class="field__label">Email</label>
    <input type="email" class="input" placeholder="name@company.com">
    <div class="field__hint">We will never share your email.</div>
  </div>

  <div class="field">
    <label class="field__label">Password</label>
    <input type="password" class="input" value="123456">
  </div>

</div>
{{< /demo >}}

## Date Time
{{< demo >}}
 <section class="card" style="padding: 2rem;">
        <h3>Date & Time</h3>
        <p>Native pickers styled to match the theme.</p>
        
        <div class="l-stack" style="margin-top: 1rem;">
          <div class="form-row">
            <div class="field">
              <label class="field__label">Start Date</label>
              <input type="date">
            </div>
            <div class="field">
              <label class="field__label">Start Time</label>
              <input type="time">
            </div>
          </div>
        </div>
      </section>
{{< /demo >}}

## File Upload

{{< demo >}}
 <section class="card" style="padding: 2rem;">
        <h3>File Upload</h3>
        <p>Custom styling for the native file input.</p>
        
        <div class="field" style="margin-top: 1rem;">
          <label class="field__label">Profile Picture</label>
          
          <label class="file-input-wrapper">
            <input type="file" onchange="updateFileName(this)">
            <span class="file-input-button">
              <span class="material-symbols-outlined">cloud_upload</span>
              Choose Image...
            </span>
          </label>
          <span id="file-name" style="margin-left: 1rem; opacity: 0.6; font-size: 0.9rem;">No file chosen</span>
        </div>
      </section>
        <script>
    (function() {
      const storedTheme = localStorage.getItem('aurora-theme') || 'corporate';
      document.body.setAttribute('data-theme', storedTheme);
    })();

    // Simple JS for the file upload text update
    function updateFileName(input) {
      const display = document.getElementById('file-name');
      if (input.files && input.files.length > 0) {
        display.textContent = input.files[0].name;
      } else {
        display.textContent = "No file chosen";
      }
    }
  </script>
{{< /demo >}}
## Text Area
For longer form content.

{{< demo >}}
<div class="field">
  <label class="field__label">Biography</label>
  <textarea class="input" rows="4" placeholder="Tell us about yourself..."></textarea>
</div>
{{< /demo >}}

## Special Types
Date, File, and Color pickers.

{{< demo >}}
<div class="l-grid" style="--col-min: 200px;">
  
  <div class="field">
    <label class="field__label">Date</label>
    <input type="date" class="input">
  </div>

  <div class="field">
    <label class="field__label">File Upload</label>
    <input type="file" class="input">
  </div>

  <div class="field">
    <label class="field__label">Color</label>
    <input type="color" class="input" style="height: 3rem; padding: 0.25rem;">
  </div>

</div>
{{< /demo >}}

## Validation States
Visual feedback for user interactions.

{{< demo >}}
<div class="l-stack">
  
  <div class="field">
    <label class="field__label" style="color: var(--ds-sys-color-success);">Valid Input</label>
    <input type="text" class="input" value="Correct Value" style="border-color: var(--ds-sys-color-success);">
  </div>

  <div class="field">
    <label class="field__label" style="color: var(--ds-sys-color-error);">Error Input</label>
    <input type="text" class="input" value="Wrong Value" style="border-color: var(--ds-sys-color-error);">
    <div class="field__hint" style="color: var(--ds-sys-color-error);">Username is already taken.</div>
  </div>

</div>
{{< /demo >}}
