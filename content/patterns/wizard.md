---
title: "Wizard Patterns"
description: "Optimized multi-step forms with rich inputs and validation."
category: "Patterns"
menu:
  main:
    parent: "patterns"
---

## Style 1: Circles (Registration Flow)
Standard registration with inputs, radio groups, and checkboxes.

{{< demo >}}
<div class="wizard">
  <div class="wizard__header">
    <ul class="wizard__steps wizard__steps--circles">
      <li class="is-active">
        <div class="wizard__marker">1</div>
        <span class="wizard__label">Identity</span>
      </li>
      <li>
        <div class="wizard__marker">2</div>
        <span class="wizard__label">Role</span>
      </li>
      <li>
        <div class="wizard__marker">3</div>
        <span class="wizard__label">Privacy</span>
      </li>
    </ul>
  </div>
  
  <form>
    <div class="wizard__content">
      
      <div class="is-active">
        <h2 style="margin-top:0">Let's get started</h2>
        <p>We need your basic account details.</p>
        <div style="display: grid; gap: 1rem;">
          <div>
            <label style="display:block; font-weight:bold; margin-bottom:0.5rem">Full Name</label>
            <input type="text" class="input" required placeholder="John Doe">
          </div>
          <div>
            <label style="display:block; font-weight:bold; margin-bottom:0.5rem">Email Address</label>
            <input type="email" class="input" required placeholder="john@example.com">
          </div>
        </div>
      </div>

      <div>
        <h2 style="margin-top:0">What do you do?</h2>
        <div class="l-grid" style="--col-min: 200px; gap: 1rem;">
          <label class="card card--interactive" style="cursor:pointer; display:block;">
            <div class="card__content">
              <input type="radio" name="role" required style="margin-bottom:0.5rem;">
              <strong>Developer</strong>
              <p style="font-size:0.85rem; opacity:0.7; margin-bottom:0">I write code.</p>
            </div>
          </label>
          <label class="card card--interactive" style="cursor:pointer; display:block;">
            <div class="card__content">
              <input type="radio" name="role">
              <strong>Designer</strong>
              <p style="font-size:0.85rem; opacity:0.7; margin-bottom:0">I make pixels.</p>
            </div>
          </label>
        </div>
      </div>

      <div>
        <h2 style="margin-top:0">Stay in the loop</h2>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <label style="display:flex; align-items:center; gap:0.5rem;">
            <input type="checkbox">
            Subscribe to the weekly newsletter
          </label>
          <label style="display:flex; align-items:center; gap:0.5rem;">
            <input type="checkbox" required>
            I agree to the <a href="#">Terms of Service</a>
          </label>
        </div>
      </div>

    </div>

    <div class="wizard__footer">
      <button class="btn btn-ghost" data-action="prev" disabled>Back</button>
      <button class="btn primary" data-action="next">Next</button>
    </div>
  </form>
</div>
{{< /demo >}}

## Style 2: Chevrons (Checkout Flow)
Sequential process with multi-column layouts and card details.

{{< demo >}}
<div class="wizard">
  <div class="wizard__header">
    <ul class="wizard__steps wizard__steps--chevrons">
      <li class="is-active">
        <span class="wizard__label">Step 1</span>
        <span class="wizard__sub">Shipping</span>
      </li>
      <li>
        <span class="wizard__label">Step 2</span>
        <span class="wizard__sub">Payment</span>
      </li>
      <li>
        <span class="wizard__label">Step 3</span>
        <span class="wizard__sub">Confirm</span>
      </li>
    </ul>
  </div>
  
  <form>
    <div class="wizard__content">
      
      <div class="is-active">
        <h2>Delivery Address</h2>
        <div style="display:grid; gap:1rem;">
          <label>
            <span style="display:block; font-weight:600; margin-bottom:0.25rem">Address Line 1</span>
            <input type="text" class="input" required>
          </label>
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem;">
            <label>
              <span style="display:block; font-weight:600; margin-bottom:0.25rem">City</span>
              <input type="text" class="input" required>
            </label>
            <label>
              <span style="display:block; font-weight:600; margin-bottom:0.25rem">Zip Code</span>
              <input type="text" class="input" required pattern="[0-9]*">
            </label>
          </div>
        </div>
      </div>

      <div>
        <h2>Payment Method</h2>
        <div style="background:var(--ds-sys-color-surface-variant); padding:1.5rem; border-radius:8px;">
          <label style="display:block; margin-bottom:1rem;">
            <span style="display:block; font-weight:600; margin-bottom:0.25rem">Card Number</span>
            <input type="text" class="input" placeholder="0000 0000 0000 0000" required>
          </label>
          <div style="display:flex; gap:1rem;">
            <label style="flex:1">
              <span style="display:block; font-weight:600; margin-bottom:0.25rem">Expiry</span>
              <input type="text" class="input" placeholder="MM/YY" required>
            </label>
            <label style="flex:1">
              <span style="display:block; font-weight:600; margin-bottom:0.25rem">CVC</span>
              <input type="text" class="input" placeholder="123" required>
            </label>
          </div>
        </div>
      </div>

      <div>
        <div style="text-align:center; padding:2rem;">
          <span style="font-size:3rem;">🎉</span>
          <h2>Ready to order?</h2>
          <p>Please review your details before clicking Pay.</p>
        </div>
      </div>

    </div>

    <div class="wizard__footer">
      <button class="btn btn-ghost" data-action="prev" disabled>Back</button>
      <button class="btn primary" data-action="next">Continue</button>
    </div>
  </form>
</div>
{{< /demo >}}

## Style 3: Text Tabs (Settings)
Simple configuration settings.

{{< demo >}}
<div class="wizard">
  <div class="wizard__header">
    <ul class="wizard__steps wizard__steps--tabs">
      <li class="is-active">
        <span class="wizard__label">1. Account</span>
      </li>
      <li>
        <span class="wizard__label">2. Profile</span>
      </li>
      <li>
        <span class="wizard__label">3. Billing</span>
      </li>
    </ul>
  </div>
  
  <form>
    <div class="wizard__content">
      
      <div class="is-active">
        <h2>Account Settings</h2>
        <label style="display:block; margin-bottom:1rem">
          Username
          <input class="input" required value="aurora_user">
        </label>
      </div>

      <div>
        <h2>Profile Data</h2>
        <label style="display:block; margin-bottom:1rem">
          Bio
          <textarea class="input" rows="3">I love design systems.</textarea>
        </label>
      </div>

      <div>
        <h2>Billing Info</h2>
        <div class="card">
          <div class="card__content">
            <strong>Current Plan: Pro</strong>
            <p>Next billing date: Jan 24, 2026</p>
            <button class="btn btn-sm">Update Card</button>
          </div>
        </div>
      </div>

    </div>

    <div class="wizard__footer">
      <button class="btn btn-ghost" data-action="prev" disabled>Back</button>
      <button class="btn primary" data-action="next">Next</button>
    </div>
  </form>
</div>
{{< /demo >}}
