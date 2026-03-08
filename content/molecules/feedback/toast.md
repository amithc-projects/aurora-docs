---
title: "Toast"
description: "Ephemeral feedback that appears outside the document flow to communicate action results and system events."
category: "Feedback"
menu:
  main:
    parent: "molecules"
    weight: 15
---

Toasts are brief, non-interruptive notifications that appear on the screen to provide feedback about an action the user has taken. They are designed to be ephemeral and disappear automatically without requiring user interaction.

---

## 1. CSS-Only Initialization (No-JS)

Aurora's Toast component features a pristine CSS architecture that manages the entire lifecycle of a toast purely through CSS keyframes (`toast-lifecycle`). If you are working in a server-rendered environment (like Django, Rails, or Laravel) where you render HTML directly from the server on page load, you can construct the DOM manually without touching JavaScript. 

{{< demo >}}
<div class="toast-container toast-container--bottom-left" style="position: relative; inset: auto; pointer-events: auto; padding: 0;">
  <div class="toast toast--success toast--persist">
    <span class="toast__icon material-symbols-outlined">check_circle</span>
    <div class="toast__body">
      <div class="toast__title">Changes saved</div>
      <div class="toast__message">Your profile has been updated successfully.</div>
    </div>
  </div>
</div>
{{< /demo >}}

```html
<div class="toast-container toast-container--bottom-right">
  <!-- This will automatically animate in, wait 5s, and animate out via CSS! -->
  <div class="toast toast--success">
    <span class="toast__icon material-symbols-outlined">check_circle</span>
    <div class="toast__body">
      <div class="toast__title">Changes saved</div>
      <div class="toast__message">Your profile has been updated successfully.</div>
    </div>
  </div>
</div>
```

---

## 2. JavaScript Programmatic API

For dynamic client-side applications, Aurora exposes a global `AuroraToast` controller. It handles:
- Dynamic DOM injection into a floating `.toast-container`
- Screen reader announcements via a dedicated `aria-live` region
- Pause-on-hover timers
- Progress bar animations

### Variants

{{< demo >}}
<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <button class="btn btn-primary" onclick="window.AuroraToast.show({ variant: 'success', title: 'Changes saved', description: 'Your profile has been updated successfully.' })">Success</button>
  <button class="btn btn-secondary" onclick="window.AuroraToast.show({ variant: 'warning', title: 'Session expiring', description: 'Your session will expire in 5 minutes. Save your work.' })">Warning</button>
  <button class="btn" style="background: var(--ds-sys-color-error); color: white;" onclick="window.AuroraToast.show({ variant: 'error', title: 'Upload failed', description: 'The file exceeds the 10 MB size limit.', isAlert: true })">Error</button>
  <button class="btn btn-secondary" onclick="window.AuroraToast.show({ variant: 'info', title: 'Link copied', description: 'Share this link with anyone who has access.' })">Info</button>
</div>
{{< /demo >}}

```html
<button onclick="window.AuroraToast.show({ 
  variant: 'success', 
  title: 'Changes saved', 
  description: 'Your profile has been updated successfully.' 
})">
  Success Toast
</button>
```

### Advanced Functionality

You can pass an interactive `action` callback directly to the toast API. You can also explicitly trigger `loading` states that do not automatically dismiss by setting `duration: 0` or using the `loading` variant.

{{< demo >}}
<div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  <button class="btn btn-secondary" onclick="
    window.AuroraToast.show({
      variant: 'warning',
      title: '3 items deleted',
      description: 'This action can be undone within 10 seconds.',
      duration: 10000,
      actionLabel: 'Undo',
      action: () => window.AuroraToast.show({ variant: 'success', title: 'Restored!' })
    })
  ">With Undo Action</button>

  <button class="btn btn-secondary" onclick="
    const tid = window.AuroraToast.show({ variant: 'loading', title: 'Uploading file…', description: 'Please wait' });
    setTimeout(() => {
      window.AuroraToast.dismiss(tid, true);
      window.AuroraToast.show({ variant: 'success', title: 'Upload complete', description: 'your-report.pdf was saved.' });
    }, 2500);
  ">Loading → Success</button>
</div>
{{< /demo >}}

### Positioning

The `window.AuroraToast.show()` API optionally accepts a `position` parameter mapped to the 9-point grid.

{{< demo >}}
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; max-width: 360px;">
  <button class="btn btn-secondary" style="font-size: 11px; padding: 0.5rem;" onclick="window.AuroraToast.show({title: 'Top Left', position: 'top-left'})">↖ Top left</button>
  <button class="btn btn-secondary" style="font-size: 11px; padding: 0.5rem;" onclick="window.AuroraToast.show({title: 'Top Center', position: 'top-center'})">↑ Top centre</button>
  <button class="btn btn-secondary" style="font-size: 11px; padding: 0.5rem;" onclick="window.AuroraToast.show({title: 'Top Right', position: 'top-right'})">↗ Top right</button>
  <button class="btn btn-secondary" style="font-size: 11px; padding: 0.5rem;" onclick="window.AuroraToast.show({title: 'Bottom Left', position: 'bottom-left'})">↙ Bottom left</button>
  <button class="btn btn-secondary" style="font-size: 11px; padding: 0.5rem;" onclick="window.AuroraToast.show({title: 'Bottom Center', position: 'bottom-center'})">↓ Bottom centre</button>
  <button class="btn btn-secondary" style="font-size: 11px; padding: 0.5rem;" onclick="window.AuroraToast.show({title: 'Bottom Right', position: 'bottom-right'})">↘ Bottom right</button>
</div>
<br>
<button class="btn btn-primary" onclick="window.AuroraToast.dismissAll()">Dismiss All Instances</button>
{{< /demo >}}

---

## Technical Specifications

### API Reference

`window.AuroraToast.show(options)` returns a unique `string` tracking ID.

| Property | Type | Default | Description |
|---|---|---|---|
| `variant` | `'success' \| 'error' \| 'warning' \| 'info' \| 'loading'` | `'info'` | The visual style of the toast. |
| `title` | `string` | `''` | Primary text content. |
| `description` | `string` | `''` | Secondary explanatory text. |
| `isAlert` | `boolean` | `false` | Sets `role="alert"` instead of `"status"` for critical errors. Auto-applied if variant is `error`. |
| `position` | `string` | `'bottom-right'` | Maps to `toast-container--${position}`. Supports 9-point grid (e.g. `top-center`, `middle-left`). |
| `duration` | `number` | *varies by variant* | Time in `ms` before auto-dismissal. Set to `0` to disable auto-dismiss. |
| `actionLabel` | `string` | `'Action'` | Text for the interactive callback button. |
| `action` | `Function(id)` | `null` | Callback executed when the action button is clicked. Automatically dismisses the toast unless prevented. |

### Accessibility

- The JavaScript controller provisions a hidden `aria-live="polite"` (`assertive` if `isAlert` is true) container and syncs visual toast text into it for Screen Reader consumption.
- Visual progress bars automatically pause when users hover over the Toast with their mouse, ensuring users have adequate time to read the contents before it disappears.
