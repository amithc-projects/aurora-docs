---
title: "QR Code"
description: "Dynamically generated, theme-aware QR codes for quick data sharing."
category: "Components"
menu:
  main:
    parent: "components"
    weight: 120
---

The `QR Code` component generates scan-able codes directly on the client side without needing a server trip. It dynamically loads a lightweight script *only* when a QR code exists on the page, keeping the global Aurora JS bundle extremely fast.

By default, the QR Code reads the active `[data-theme]` to seamlessly blend its Dark and Light colors into the Aurora framework.

## Basic Usage

The most robust way to use the QR code is within an Aurora `.qr-container` which yields an elevated card, padding, and an optional caption. Give a `<div>` element the `.qr-code` class and pass your data via `data-qr-value`.

{{< demo >}}
<div class="qr-container">
    <div class="qr-code" 
            data-qr-value="https://aurora.design/system" 
            data-qr-width="200">
    </div>
    <p class="qr-caption">Scan to view Design System</p>
</div>
{{< /demo >}}

## Configuration

You can configure the generated QR code directly through `data-*` attributes on the canvas.

| Attribute | Description | Default |
|---|---|---|
| `data-qr-value` | **Required.** The text or URI to encode. | - |
| `data-qr-width` | Explicit pixel width of the generated canvas. | Auto |
| `data-qr-margin`| Quiet zone around the code (in modules). | `2` |
| `data-qr-error` | Error correction level (`L`, `M`, `Q`, `H`). | `M` |

{{< demo >}}
<div class="qr-container">
    <div class="qr-code" 
            data-qr-value="WIFI:S:MyNetwork;T:WPA;P:SuperSecret123;;" 
            data-qr-width="150"
            data-qr-error="H"
            data-qr-margin="0">
    </div>
    <p class="qr-caption">Zero Margin (Level H)</p>
</div>
{{< /demo >}}

## Unstyled (Inline)

If you just need raw generation without the Aurora Card padding, you can omit the `.qr-container` or attach the `.no-style` class.

{{< demo >}}
<div class="qr-code" 
        data-qr-value="https://example.com"
        data-qr-width="128">
</div>
{{< /demo >}}

## Hardcoded Custom Colors

While Aurora automatically resolves your current `--ds-sys-color-primary` as the dark tone and `--ds-sys-color-surface` as the light tone, you can aggressively override them with hex values using `data-qr-color-dark` and `data-qr-color-light`. Hex colors must include the 8-bit alpha channel if transparency is needed (e.g., `#00000000` for pure transparency).

{{< demo >}}
<div class="l-cluster gap-4">
    <!-- Brand Specific -->
    <div class="qr-container">
        <div class="qr-code" 
                data-qr-value="https://instagram.com" 
                data-qr-width="128"
                data-qr-color-dark="#E1306Cff"
                data-qr-color-light="#ffffff00">
        </div>
    </div>

    <!-- Warning Override -->
    <div class="qr-container">
         <div class="qr-code" 
                data-qr-value="SECURITY_ALERT_92A" 
                data-qr-width="128"
                data-qr-color-dark="#dc2626ff"
                data-qr-color-light="#fee2e2ff">
        </canvas>
    </div>
</div>
{{< /demo >}}
