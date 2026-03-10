// static/js/components/alert-banner.js

export function initAlertBanners() {
    const banners = document.querySelectorAll('.alert-banner');

    banners.forEach(banner => {
        if (banner.dataset.bannerInit === 'true') return;
        banner.dataset.bannerInit = 'true';

        // Check if this specific banner ID was previously dismissed
        const bannerId = banner.id;
        if (bannerId) {
            const isDismissed = localStorage.getItem(`aurora-dismissed-${bannerId}`);
            if (isDismissed === 'true') {
                banner.style.display = 'none'; // Instantly hide on load without animating
                return;
            }
        }

        const closeBtn = banner.querySelector('.alert-banner__close');
        if (!closeBtn) return;

        closeBtn.addEventListener('click', () => {
            // 1. Visually animate out
            banner.classList.add('is-hidden');

            // 2. Wait for CSS transition to finish, then remove from DOM entirely
            banner.addEventListener('transitionend', () => {
                banner.remove();
            }, { once: true });

            // 3. Save state to localStorage if ID exists
            if (bannerId) {
                localStorage.setItem(`aurora-dismissed-${bannerId}`, 'true');
            }
        });
    });
}
