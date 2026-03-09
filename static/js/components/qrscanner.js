/**
 * Aurora QR Scanner Component Controller
 * 
 * Dynamically loads the `html5-qrcode` library from a CDN only when a `.qr-scanner-container` 
 * element is detected on the page. Prevents bloating the global JS bundle.
 */

window.auroraQRScannerInit = function () {
    const scannerContainers = document.querySelectorAll('.qr-scanner-container');
    if (scannerContainers.length === 0) return;

    // Load library if not present
    if (typeof Html5QrcodeScanner === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js';
        script.async = true;

        script.onload = () => {
            initScanners(scannerContainers);
        };

        script.onerror = () => {
            console.error('Aurora: Failed to load external html5-qrcode library.');
        };

        document.head.appendChild(script);
    } else {
        initScanners(scannerContainers);
    }

    function initScanners(containers) {
        containers.forEach(container => {
            if (container.hasAttribute('data-qr-scanner-init')) return;
            container.setAttribute('data-qr-scanner-init', 'true');

            // Give the container an ID if it doesn't have one, as Html5QrcodeScanner requires an ID
            if (!container.id) {
                container.id = 'qr-reader-' + Math.random().toString(36).substr(2, 9);
            }

            // Find the result output element if provided inside the parent card
            const wrapper = container.closest('.qr-scanner-card');
            let outputEl = null;
            if (wrapper) {
                outputEl = wrapper.querySelector('.qr-scanner-result');
            }

            const fps = parseInt(container.getAttribute('data-qr-fps') || '10', 10);
            const qrbox = parseInt(container.getAttribute('data-qr-box') || '250', 10);
            const disableFlip = container.getAttribute('data-qr-disable-flip') === 'true';

            let html5QrcodeScanner = new Html5QrcodeScanner(
                container.id,
                { fps: fps, qrbox: qrbox, disableFlip: disableFlip },
                /* verbose= */ false
            );

            html5QrcodeScanner.render(onScanSuccess, onScanFailure);

            function onScanSuccess(decodedText, decodedResult) {
                // handle the scanned code as you like, for example:
                console.log(`Code matched = ${decodedText}`, decodedResult);

                if (outputEl) {
                    outputEl.innerHTML = `<strong>Scan Result:</strong> <br><a href="${decodedText}" target="_blank">${decodedText}</a>`;
                    outputEl.classList.add('has-data');
                }

                // Optional: Stop scanning after successful scan
                if (container.getAttribute('data-qr-stop-on-scan') === 'true') {
                    html5QrcodeScanner.clear().catch(error => {
                        console.error("Failed to clear html5QrcodeScanner. ", error);
                    });
                }
            }

            function onScanFailure(error) {
                // handle scan failure, usually better to ignore and keep scanning
                // console.warn(`Code scan error = ${error}`);
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', window.auroraQRScannerInit);
