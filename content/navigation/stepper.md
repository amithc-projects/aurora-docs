---
title: "Stepper"
description: "A navigation component that shows the user's position within a multi-step flow."
menu:
  main:
    parent: "navigation"
---

A Stepper is a navigation component that shows the user's position within a multi-step flow and communicates which steps are complete, current, and upcoming.

## Horizontal Stepper

Best for short flows (2–5 steps) placed vertically across the page, like a checkout process.

{{< demo >}}
<div style="padding: 1rem;">
  <nav aria-label="Checkout progress">
    <ol class="stepper">
      <li class="step step-complete">
        <div class="step-row">
          <div class="step-indicator"><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div class="step-connector complete"></div>
        </div>
        <div class="step-labels"><div class="step-label">Cart</div></div>
      </li>
      <li class="step step-complete">
        <div class="step-row">
          <div class="step-indicator"><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div class="step-connector complete"></div>
        </div>
        <div class="step-labels"><div class="step-label">Details</div></div>
      </li>
      <li class="step step-current">
        <div class="step-row">
          <div class="step-indicator">3</div>
          <div class="step-connector"></div>
        </div>
        <div class="step-labels"><div class="step-label">Payment</div></div>
      </li>
      <li class="step step-upcoming">
        <div class="step-row">
          <div class="step-indicator">4</div>
        </div>
        <div class="step-labels"><div class="step-label">Review</div></div>
      </li>
    </ol>
  </nav>
</div>
{{< /demo >}}

## Error States

Steppers can communicate validation errors within specific steps.

{{< demo >}}
<div style="padding: 1rem;">
  <nav aria-label="Form progress">
    <ol class="stepper">
      <li class="step step-complete">
        <div class="step-row">
          <div class="step-indicator"><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div class="step-connector complete"></div>
        </div>
        <div class="step-labels"><div class="step-label">Account</div></div>
      </li>
      <li class="step step-error">
        <div class="step-row">
          <div class="step-indicator"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 2l8 8M10 2L2 10" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg></div>
          <div class="step-connector"></div>
        </div>
        <div class="step-labels">
          <div class="step-label">Profile</div>
          <div class="step-sublabel">Fix errors</div>
        </div>
      </li>
      <li class="step step-upcoming">
        <div class="step-row"><div class="step-indicator">3</div></div>
        <div class="step-labels"><div class="step-label">Confirm</div></div>
      </li>
    </ol>
  </nav>
</div>
{{< /demo >}}

## Vertical Stepper

Best for longer flows with rich descriptions, often placed in a sidebar next to the main form content.

{{< demo >}}
<div style="padding: 1rem; max-width: 400px;">
  <nav aria-label="Programme setup">
    <ol class="stepper-v">
      <li class="step-v">
        <div class="step-v-left">
          <div class="step-indicator step-complete"><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div class="step-v-connector complete"></div>
        </div>
        <div class="step-v-content">
          <div class="step-v-title">Choose goal</div>
          <div class="step-v-desc">Build strength &middot; completed</div>
        </div>
      </li>
      <li class="step-v">
        <div class="step-v-left">
          <div class="step-indicator step-current">2</div>
          <div class="step-v-connector"></div>
        </div>
        <div class="step-v-content">
          <div class="step-v-title">Configure schedule</div>
          <div class="step-v-desc">Choose days and session length</div>
        </div>
      </li>
      <li class="step-v">
        <div class="step-v-left">
          <div class="step-indicator step-upcoming">3</div>
        </div>
        <div class="step-v-content">
          <div class="step-v-title" style="color: var(--ds-sys-color-on-surface-subtle);">Review & start</div>
          <div class="step-v-desc">Confirm and begin programme</div>
        </div>
      </li>
    </ol>
  </nav>
</div>
{{< /demo >}}

## Dot Stepper

A compact variant common in mobile apps, carousels, or simple multi-step flows where descriptions aren't needed.

{{< demo >}}
<div style="padding: 1rem; display: flex; flex-direction: column; align-items: center; gap: 0.625rem;">
  <nav aria-label="Slide progress" class="stepper-dot">
    <div class="step-dot complete"></div><div class="step-dot-connector"></div>
    <div class="step-dot complete"></div><div class="step-dot-connector"></div>
    <div class="step-dot current"></div><div class="step-dot-connector"></div>
    <div class="step-dot"></div><div class="step-dot-connector"></div>
    <div class="step-dot"></div>
  </nav>
  <div style="font-size: 0.75rem; color: var(--ds-sys-color-on-surface-subtle);">Step 3 of 5</div>
</div>
{{< /demo >}}
