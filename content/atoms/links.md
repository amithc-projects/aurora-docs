---
title: "Links"
description: "Guidelines for interactive text links, states, and semantics."
menu:
  main:
    parent: "components-simple"
---

## Overview

Links are foundational interactive elements used exclusively for **navigation**. If an action changes the state of the page (submitting a form, opening a modal, or deleting an item), use a [Button](/aurora-docs/atoms/buttons/) instead.

## Base Links (`<a>`)

By default, an unclassed `<a>` tag inherits the surrounding text color and applies an underline. It does not force a primary brand color, ensuring that links inside dark banners, warning alerts, or custom cards always match their parent context automatically.

{{< demo >}}
<p style="margin:0;">
  This is a standard paragraph of text that contains a <a href="#">standard hyperlink embedded inside</a>. Notice how it seamlessly integrates with the text flow.
</p>
{{< /demo >}}

## Primary Links

To explicitly color a link with the system's primary brand token, use the `.link-primary` subclass (if available in your theme) or apply standard text color utilities (`.text-primary`). 

{{< demo >}}
<p style="margin:0;">
  Read our <a href="#" style="color: var(--ds-sys-color-primary); font-weight: 600;">Terms of Service</a> to learn more.
</p>
{{< /demo >}}

## Interactive States

Aurora ensures all links have clearly defined interactive states for accessibility:

*   **Resting**: Baseline state. Should generally be underlined within body copy so colorblind users can identify them without hovering.
*   **Hover (`:hover`)**: The text color should dim or brighten slightly (using the `--text-link-hover` token) or the underline thickness may change.
*   **Focus (`:focus-visible`)**: Keyboard users navigating via `Tab` must see a clear, high-contrast outline ring (via the `--focus-ring-color` token) around the link.
*   **Active (`:active`)**: Triggered exactly when the mouse clicks down, providing immediate mechanical feedback.
*   **Visited (`:visited`)**: Reserved for search results or lists of articles. By default, Aurora minimizes styling differences on visited links for clean UI, but color contrast must remain AA compliant.

## Links vs. Buttons (Semantics)

It is a common anti-pattern to use an `<a>` tag styled as a `Button` to perform an action (like "Save"), or a `<button>` styled as a `Link` to navigate to a URL. 

*   **`<a href="/url">`**: Takes the user to a new document or anchor point. Safe to open in a "New Tab".
*   **`<button type="button">`**: Performs an in-page action. Cannot be opened in a "New Tab".

If you must style a link to look like a button for promotional reasons, use `<a class="btn btn-primary" href="...">`. 
