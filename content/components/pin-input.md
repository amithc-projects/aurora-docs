---
title: "PIN Input"
description: "A split-digit input wrapper designed to securely accept One Time Passwords (OTPs), PINs, or verification codes."
category: "Forms"
menu:
  main:
    parent: "components-simple"
---

The Aurora PIN Input dynamically generates multiple `<input maxlength="1">` elements and manages their complex interaction states—including auto-advancing focus as you type, hopping backwards on backspace, and instantly distributing copy/pasted codes across all boxes.

---

## 6-Digit Numeric OTP (Default)
By default, placing `data-pin-input` creates a 6-digit numeric verification code. This component binds to `type="tel"` and `inputMode="numeric"` to ensure mobile users receive the large iOS Numpad keyboard rather than the QWERTY keyboard.

{{< demo >}}
<div style="max-width: 400px; margin: 0 auto; padding: 2rem 0;">
    <div style="text-align: center; margin-bottom: 2rem;">
        <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">Enter Verification Code</h3>
        <p style="color: var(--ds-sys-color-on-surface-variant); font-size: 0.875rem;">
            We've sent a 6-digit code to your device.
        </p>
    </div>

    <div data-pin-input data-length="6" data-type="numeric" id="demo-pin-1"></div>

    <div style="text-align: center; margin-top: 2rem; color: var(--ds-sys-color-success); font-weight: 600; opacity: 0; transition: opacity 0.3s ease;" id="demo-pin-success-1">
        ✓ Code Accepted: <span id="demo-pin-val-1"></span>
    </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('demo-pin-1');
    const successMsg = document.getElementById('demo-pin-success-1');
    const valDisplay = document.getElementById('demo-pin-val-1');

    container.addEventListener('pin:complete', (e) => {
        // Emitted the moment the 6th box is filled!
        valDisplay.textContent = e.detail.value;
        successMsg.style.opacity = '1';

        // Example: Optional programmatic hook
        console.log("Submitting PIN to API:", e.detail.value);
    });
});
</script>
{{< /demo >}}

---

## 4-Digit Alphanumeric Code & Error Handling
You can constrain the inputs to generic passwords (A-Z, 0-9) using `data-type="alphanumeric"`, or pure alphabet games via `data-type="alpha"`. 

This demo showcases how to catch the `pin:complete` event, simulate server validation, and trigger the component's internal `is-error` CSS shake animation.

{{< demo >}}
<div style="max-width: 400px; margin: 0 auto; padding: 2rem 0;">
    <div style="text-align: center; margin-bottom: 2rem;">
        <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">Match Code</h3>
        <p style="color: var(--ds-sys-color-on-surface-variant); font-size: 0.875rem;">
            Try guessing the 4-digit code. (Hint: It's 'TEST').
        </p>
    </div>

    <!-- Generates exactly 4 boxes, allowing numbers and letters -->
    <div data-pin-input data-length="4" data-type="alphanumeric" id="demo-pin-2"></div>

    <p style="text-align: center; margin-top: 1rem; color: var(--ds-sys-color-error); font-size: 0.875rem; display: none;" id="demo-pin-error">
        Incorrect code. Please try again.
    </p>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('demo-pin-2');
    const errorMsg = document.getElementById('demo-pin-error');

    container.addEventListener('pin:complete', (e) => {
        errorMsg.style.display = 'none';
        
        const guess = e.detail.value.toUpperCase();
        
        if (guess === 'TEST') {
            // The component's CSS will naturally turn green via .is-complete
            alert("Success!");
        } else {
            // Apply error shake animation via the API (or classList)
            container.classList.add('is-error');
            container.classList.remove('is-complete');
            errorMsg.style.display = 'block';

            // Empty the boxes so they can try again
            setTimeout(() => {
                const inputs = container.querySelectorAll('input');
                inputs.forEach(i => i.value = '');
                inputs[0].focus();
                container.classList.remove('is-error');
            }, 1000);
        }
    });
});
</script>
{{< /demo >}}
