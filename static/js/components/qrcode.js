/**
 * Aurora QR Code Component Controller
 * 
 * Dynamically loads the `qrcode` library from a CDN only when a `.qr-code-canvas` 
 * element is detected on the page. Prevents bloating the global JS bundle.
 */

window.auroraQRCodeInit = function () {
    const qrElements = document.querySelectorAll('.qr-code');
    if (qrElements.length === 0) return;

    // Load library if not present
    if (typeof QRCode === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/easyqrcodejs@4.6.2/dist/easy.qrcode.min.js';
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

            const width = parseInt(canvas.getAttribute('data-qr-width') || '128', 10);
            const errorLvl = canvas.getAttribute('data-qr-error') || 'M';

            const opts = {
                text: text,
                width: width,
                height: width, // Default to square
                quietZone: parseInt(canvas.getAttribute('data-qr-margin') || '10', 10),
                colorDark: canvas.getAttribute('data-qr-color-dark') || primaryColor,
                colorLight: canvas.getAttribute('data-qr-color-light') || surfaceColor,
                correctLevel: typeof QRCode !== 'undefined' && QRCode.CorrectLevel ? QRCode.CorrectLevel[errorLvl] : 1
            };

            // For OKLCH or complex CSS colors that canvas can't parse easily in current browsers,
            // we might fallback to black/white if qrcode library complains, but modern browsers usually support it
            // if it's evaluated. However, light-dark() cannot be evaluated by Canvas fillstyle.
            // A robust solution for light-dark() is to read the *computed* color of a dummy element.
            if (opts.colorDark.includes('light-dark') || opts.colorDark.includes('var(')) {
                opts.colorDark = resolveColorToHex('--ds-sys-color-primary');
            }
            if (opts.colorLight.includes('light-dark') || opts.colorLight.includes('var(')) {
                opts.colorLight = resolveColorToHex('--ds-sys-color-surface');
            }

            // Override with explicit defaults if requested
            if (canvas.hasAttribute('data-qr-color-dark')) opts.colorDark = canvas.getAttribute('data-qr-color-dark');
            if (canvas.hasAttribute('data-qr-color-light')) opts.colorLight = canvas.getAttribute('data-qr-color-light');

            try {
                new QRCode(canvas, opts);
                canvas.setAttribute('data-qr-rendered', 'true');
            } catch (error) {
                console.error(error);
            }
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
