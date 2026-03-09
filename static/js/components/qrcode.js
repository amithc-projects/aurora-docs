/**
 * Aurora QR Code Component Controller
 * 
 * Dynamically loads the `qrcode` library from a CDN only when a `.qr-code-canvas` 
 * element is detected on the page. Prevents bloating the global JS bundle.
 */

window.auroraQRCodeInit = function () {
    const qrElements = document.querySelectorAll('.qr-code-canvas');
    if (qrElements.length === 0) return;

    // Load library if not present
    if (typeof QRCode === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js';
        script.async = true;

        script.onload = () => {
            renderQRCodes(qrElements);
        };

        script.onerror = () => {
            console.error('Aurora: Failed to load external QR Code library.');
        };

        document.head.appendChild(script);
    } else {
        renderQRCodes(qrElements);
    }

    function renderQRCodes(elements) {
        elements.forEach(canvas => {
            // Prevent re-rendering
            if (canvas.hasAttribute('data-qr-rendered')) return;

            const text = canvas.getAttribute('data-qr-value');
            if (!text) {
                console.warn('Aurora QR Code: Missing data-qr-value');
                return;
            }

            // Get CSS Variables for theming
            const styles = getComputedStyle(document.documentElement);
            const primaryColor = styles.getPropertyValue('--ds-sys-color-primary').trim() || '#000000';
            const surfaceColor = styles.getPropertyValue('--ds-sys-color-surface').trim() || '#ffffff';

            const opts = {
                errorCorrectionLevel: canvas.getAttribute('data-qr-error') || 'M',
                margin: parseInt(canvas.getAttribute('data-qr-margin') || '2', 10),
                scale: parseInt(canvas.getAttribute('data-qr-scale') || '4', 10),
                width: canvas.getAttribute('data-qr-width') ? parseInt(canvas.getAttribute('data-qr-width'), 10) : undefined,
                color: {
                    dark: canvas.getAttribute('data-qr-color-dark') || primaryColor, // Use brand primary by default
                    light: canvas.getAttribute('data-qr-color-light') || surfaceColor // transparent back
                }
            };

            // For OKLCH or complex CSS colors that canvas can't parse easily in current browsers,
            // we might fallback to black/white if qrcode library complains, but modern browsers usually support it
            // if it's evaluated. However, light-dark() cannot be evaluated by Canvas fillstyle.
            // A robust solution for light-dark() is to read the *computed* color of a dummy element.
            if (opts.color.dark.includes('light-dark') || opts.color.dark.includes('var(')) {
                opts.color.dark = resolveColorToHex('--ds-sys-color-primary');
            }
            if (opts.color.light.includes('light-dark') || opts.color.light.includes('var(')) {
                opts.color.light = resolveColorToHex('--ds-sys-color-surface');
            }

            // Override with explicit defaults if requested
            if (canvas.hasAttribute('data-qr-color-dark')) opts.color.dark = canvas.getAttribute('data-qr-color-dark');
            if (canvas.hasAttribute('data-qr-color-light')) opts.color.light = canvas.getAttribute('data-qr-color-light');

            QRCode.toCanvas(canvas, text, opts, function (error) {
                if (error) console.error(error);
                else canvas.setAttribute('data-qr-rendered', 'true');
            });
        });
    }

    // Helper to extract computed color values (handles light-dark and oklch)
    function resolveColorToHex(cssVar) {
        const temp = document.createElement('div');
        temp.style.color = `var(${cssVar})`;
        temp.style.display = 'none';
        document.body.appendChild(temp);

        const computed = getComputedStyle(temp).color;
        document.body.removeChild(temp);

        // Convert rgb() or rgba() to hex for qrcode lib
        const match = computed.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
        if (!match) return '#000000'; // fallback

        const r = parseInt(match[1]).toString(16).padStart(2, '0');
        const g = parseInt(match[2]).toString(16).padStart(2, '0');
        const b = parseInt(match[3]).toString(16).padStart(2, '0');
        const a = match[4] ? Math.round(parseFloat(match[4]) * 255).toString(16).padStart(2, '0') : 'FF';

        return `#${r}${g}${b}${a}`;
    }
};

document.addEventListener('DOMContentLoaded', window.auroraQRCodeInit);
