---
title: "Checkout Flow"
description: "A child page demonstrating a streamlined Ecommerce checkout experience."
---

This is a demonstration of a child page within the **E-commerce Store** archetype.

{{< demo >}}
<div style="padding: 3rem 2rem; background: var(--ds-sys-color-surface-container-lowest); font-family: var(--ds-sys-font-family-base); border: 1px solid var(--ds-sys-color-border); border-radius: 8px;">
  
  <div class="l-grid" style="grid-template-columns: 2fr 1fr; gap: 4rem;">
    
    <div>
      <h2 style="font-size: 1.5rem; font-weight: 700; border-bottom: 1px solid var(--ds-sys-color-border); padding-bottom: 1rem; margin-bottom: 2rem;">Shipping Information</h2>
      
      <div style="display: grid; gap: 1rem; margin-bottom: 3rem;">
        <input type="text" placeholder="First Name" style="padding: 0.75rem; border: 1px solid var(--ds-sys-color-border); border-radius: 4px;">
        <input type="text" placeholder="Last Name" style="padding: 0.75rem; border: 1px solid var(--ds-sys-color-border); border-radius: 4px;">
        <input type="text" placeholder="Address" style="padding: 0.75rem; border: 1px solid var(--ds-sys-color-border); border-radius: 4px;">
      </div>

       <h2 style="font-size: 1.5rem; font-weight: 700; border-bottom: 1px solid var(--ds-sys-color-border); padding-bottom: 1rem; margin-bottom: 2rem;">Payment</h2>
       <div style="background: var(--ds-sys-color-surface-container-low); padding: 1.5rem; border-radius: 4px;">
         <input type="text" placeholder="Card Number" style="width: 100%; padding: 0.75rem; border: 1px solid var(--ds-sys-color-border); border-radius: 4px; margin-bottom: 1rem;">
         <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <input type="text" placeholder="MM / YY" style="padding: 0.75rem; border: 1px solid var(--ds-sys-color-border); border-radius: 4px;">
            <input type="text" placeholder="CVC" style="padding: 0.75rem; border: 1px solid var(--ds-sys-color-border); border-radius: 4px;">
         </div>
       </div>
    </div>

    <!-- Order Summary sidebar -->
    <div style="background: var(--ds-sys-color-surface-container-low); padding: 2rem; border-radius: 8px; height: fit-content;">
      <h3 style="font-size: 1.25rem; font-weight: 700; margin: 0 0 1.5rem 0;">Order Summary</h3>
      <div style="display: flex; justify-content: space-between; margin-bottom: 1rem; color: var(--ds-sys-color-on-surface-variant);">
        <span>Aero Invincible 3</span>
        <span>$180.00</span>
      </div>
      <div style="display: flex; justify-content: space-between; margin-bottom: 1rem; color: var(--ds-sys-color-on-surface-variant);">
        <span>Express Shipping</span>
        <span>$15.00</span>
      </div>
      <div style="display: flex; justify-content: space-between; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--ds-sys-color-border); font-weight: 700; font-size: 1.25rem;">
        <span>Total</span>
        <span>$195.00</span>
      </div>
      <button style="width: 100%; background: black; color: white; padding: 1rem; border: none; border-radius: 4px; font-weight: 700; margin-top: 2rem; cursor: pointer;">Pay $195.00</button>
    </div>

  </div>

</div>
{{< /demo >}}
