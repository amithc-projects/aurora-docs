---
title: "Accordion"
description: "Expandable sections with clean HTML."
category: "Components"
menu:
  main:
    parent: "components"
    weight: 20
---

## Clean Markup
No extra classes needed on `li` or content divs. Just standard HTML.

{{< demo >}}
<ul class="accordion">
  <li>
    <details>
      <summary>What is Aurora?</summary>
      <div>
        Aurora is a lightweight, semantic design system.
      </div>
    </details>
  </li>
  <li>
    <details>
      <summary>How do I install it?</summary>
      <div>
        Simply include the `aurora.css` file.
      </div>
    </details>
  </li>
  <li>
    <details>
      <summary>Is it accessible?</summary>
      <div>
        Yes! It uses native HTML `<details>` tags.
      </div>
    </details>
  </li>
</ul>
{{< /demo >}}

## Allow Multiple (5 Items)
Add `data-multiple` to the container.

{{< demo >}}
<ul class="accordion" data-multiple>
  <li>
    <details open>
      <summary>1. Profile</summary>
      <div>Manage your avatar and bio.</div>
    </details>
  </li>
  <li>
    <details>
      <summary>2. Notifications</summary>
      <div>Email and push settings.</div>
    </details>
  </li>
  <li>
    <details>
      <summary>3. Security</summary>
      <div>2FA and password control.</div>
    </details>
  </li>
  <li>
    <details>
      <summary>4. Billing</summary>
      <div>Invoices and payment methods.</div>
    </details>
  </li>
  <li>
    <details>
      <summary>5. API</summary>
      <div>Developer keys and webhooks.</div>
    </details>
  </li>
</ul>
{{< /demo >}}

## Horizontal Accordion
Works automatically with the same clean HTML structure.

{{< demo >}}
<ul class="accordion accordion--horizontal">
  <li>
    <details open>
      <summary>Design</summary>
      <div>
        <h3>Design</h3>
        <p>Focus on clarity and efficiency.</p>
      </div>
    </details>
  </li>
  <li>
    <details>
      <summary>Code</summary>
      <div>
        <h3>Code</h3>
        <p>Semantic HTML ensures speed.</p>
      </div>
    </details>
  </li>
  <li>
    <details>
      <summary>Deploy</summary>
      <div>
        <h3>Deploy</h3>
        <p>Go live in seconds.</p>
      </div>
    </details>
  </li>
</ul>
{{< /demo >}}
