---
title: "QR Scanner"
description: "Client-side webcam capability for detecting and reading QR codes natively."
category: "Components"
menu:
  main:
    parent: "components-simple"
---

The `QR Scanner` component activates the user's local web camera to continuously read and decode QR data streams without needing a backend server or proprietary native app. Like the QR generator, it dynamically fetches the engine script from a CDN *only* when the component is actively present on the page.

> [!WARNING]
> This component relies on the [html5-qrcode Library](https://github.com/mebjas/html5-qrcode). The JavaScript asynchronously fetches `https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js` from cdnjs. Be aware of this external network dependency. Web browsers also require the page to be served over `https://` (or `localhost`) in order to prompt the user for Camera permissions.

## Basic Usage

The `.qr-scanner-card` wrapper provides Aurora-themed padding, borders, and shadowing. Inside, create a `.qr-scanner-container` `<div>`. The Javascript controller will automatically inject the video feed and the "Request Permissions" button into this container.

An optional `.qr-scanner-result` `<div>` can be included to organically display the resulting decrypted text on success.

{{< demo >}}
<div class="qr-scanner-card">
    <div class="qr-scanner-container" 
         data-qr-fps="10" 
         data-qr-box="250">
    </div>
    
    <div class="qr-scanner-result">
        <!-- Javascript injects the decoded text here -->
    </div>
</div>
{{< /demo >}}

## Configuration

You can configure the scanning engine by modifying `data-*` attributes on the `.qr-scanner-container`.

| Attribute | Description | Default |
|---|---|---|
| `data-qr-fps` | Scans per second. Higher values require more CPU. | `10` |
| `data-qr-box` | The dimension (width/height) of the scanning bounding box overhead in pixels. | `250` |
| `data-qr-disable-flip` | Disables mirroring of the front-facing camera. | `false` |
| `data-qr-stop-on-scan` | If set to `true`, the video feed will actively terminate the camera hardware and destroy the session after a successful scan. | `false` |

## Single Scan Mode

If you only need exactly one reading (for example, authenticating a ticket), set `data-qr-stop-on-scan="true"`. The camera light will turn off immediately upon reading the first valid data frame.

{{< demo >}}
<div class="qr-scanner-card">
    <div class="qr-scanner-container" 
         data-qr-stop-on-scan="true"
         data-qr-box="200">
    </div>
    <div class="qr-scanner-result mt-4"></div>
</div>
{{< /demo >}}
