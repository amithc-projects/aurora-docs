---
title: "Modals"
category: "Overlays"
description: "Dialog overlays for critical actions."
menu:
  main:
    parent: "overlays"
---

## Standard Modal
Using the native `<dialog>` element with data attributes.

{{< demo >}}
 <section class="section">
  <div class="l-grid">
    
    <article class="card">
      <div class="card__content">
        <h3>Standard Modal</h3>
        <p>The workhorse for forms and information.</p>
        <button class="btn primary" data-open-modal="modalStandard">Open Standard</button>
      </div>
    </article>

    <article class="card">
      <div class="card__content">
        <h3>Confirmation</h3>
        <p>Small, centered, high-focus for destructive actions.</p>
        <button class="btn primary" data-open-modal="modalAlert">Open Alert</button>
      </div>
    </article>

    <article class="card">
      <div class="card__content">
        <h3>Mobile Sheet</h3>
        <p>Slides from the bottom on mobile, centers on desktop.</p>
        <button class="btn primary" data-open-modal="modalSheet">Open Sheet</button>
      </div>
    </article>

  </div>
</section>
<section>
  <dialog id="modalStandard" class="modal">
    <header class="modal__header">
      <h2 class="modal__title">Edit Profile</h2>
      <form method="dialog">
        <button class="modal__close"><span class="material-symbols-outlined">close</span></button>
      </form>
    </header>  
    <div class="modal__body">
      <p>Make changes to your profile here. Click save when you're done.</p>
      <div class="l-stack" style="margin-top: 1rem;">
        <label class="input-group">
          <span>Username</span>
          <input type="text" class="input" value="@jdoe">
        </label>
        <label class="input-group">
          <span>Bio</span>
          <textarea class="input" rows="3">Product Designer based in London.</textarea>
        </label>
      </div>
    </div>
    <footer class="modal__footer">
      <form method="dialog">
        <button class="btn secondary">Cancel</button>
        <button class="btn primary" value="save">Save Changes</button>
      </form>
    </footer>
  </dialog>

  <dialog id="modalAlert" class="modal modal--small">
    <div class="modal__body" style="padding-top: 2rem;">
      <div style="font-size: 3rem; margin-bottom: 1rem;">🗑️</div>
      <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">Delete Account?</h2>
      <p>This action cannot be undone. All your data will be permanently removed.</p>
    </div>
    <footer class="modal__footer">
      <form method="dialog" style="display: flex; gap: 1rem; width: 100%;">
        <button class="btn secondary" style="flex:1">Cancel</button>
        <button class="btn primary" style="flex:1; background: #ef4444; border-color: #ef4444;" value="confirm">Delete</button>
      </form>
    </footer>
  </dialog>

  <dialog id="modalSheet" class="modal modal--sheet">
    <header class="modal__header">
      <h2 class="modal__title">Filter Results</h2>
      <form method="dialog">
        <button class="modal__close"><span class="material-symbols-outlined">close</span></button>
      </form>
    </header>
    <div class="modal__body" style="height: 300px;">
      <p>Sheet content is perfect for mobile filters or menus.</p>
      <hr style="margin: 1rem 0; border: 0; border-top: 1px solid var(--ds-sys-color-border);">
      <div class="l-stack">
        <label style="display: flex; gap: 0.5rem;"><input type="checkbox"> In Stock Only</label>
        <label style="display: flex; gap: 0.5rem;"><input type="checkbox"> On Sale</label>
        <label style="display: flex; gap: 0.5rem;"><input type="checkbox"> Free Shipping</label>
      </div>
    </div>
    <footer class="modal__footer">
      <form method="dialog" style="width: 100%;">
        <button class="btn primary full-width">Show 24 Results</button>
      </form>
    </footer>
  </dialog>
  </section>
{{< /demo >}}
