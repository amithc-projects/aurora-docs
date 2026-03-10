export function initSteppers() {
    const wrappers = document.querySelectorAll('.stepper-wrapper');

    wrappers.forEach(wrapper => {
        let domSteps;
        let type;

        if (wrapper.querySelector('.stepper')) {
            type = 'horizontal';
            domSteps = wrapper.querySelectorAll('.stepper > .step');
        } else if (wrapper.querySelector('.stepper-v')) {
            type = 'vertical';
            domSteps = wrapper.querySelectorAll('.stepper-v > .step-v');
        } else if (wrapper.querySelector('.stepper-dot')) {
            type = 'dot';
            domSteps = wrapper.querySelectorAll('.stepper-dot > .step-dot');
        } else {
            return;
        }

        const panels = wrapper.querySelectorAll('.stepper-panel');
        if (!panels.length) return;

        let currentStep = 0;

        function updateState() {
            // Update UI panels
            panels.forEach((panel, idx) => {
                const isActive = idx === currentStep;
                panel.style.display = isActive ? 'block' : 'none';
                if (isActive) {
                    panel.dispatchEvent(new CustomEvent('panel-active', { bubbles: true }));
                }
            });

            // Update Stepper UI depending on type
            domSteps.forEach((step, idx) => {
                const isComplete = idx < currentStep;
                const isCurrent = idx === currentStep;
                const isUpcoming = idx > currentStep;

                if (type === 'horizontal') {
                    step.classList.remove('step-complete', 'step-current', 'step-upcoming', 'step-error');
                    if (isComplete) step.classList.add('step-complete');
                    if (isCurrent) step.classList.add('step-current');
                    if (isUpcoming) step.classList.add('step-upcoming');

                    const connector = step.querySelector('.step-connector');
                    if (connector) {
                        if (isComplete) connector.classList.add('complete');
                        else connector.classList.remove('complete');
                    }

                    const indicator = step.querySelector('.step-indicator');
                    if (indicator) {
                        if (isComplete) {
                            indicator.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
                        } else {
                            indicator.textContent = idx + 1;
                        }
                    }

                } else if (type === 'vertical') {
                    const indicator = step.querySelector('.step-indicator');
                    if (indicator) {
                        indicator.classList.remove('step-complete', 'step-current', 'step-upcoming', 'step-error');
                        if (isComplete) indicator.classList.add('step-complete');
                        if (isCurrent) indicator.classList.add('step-current');
                        if (isUpcoming) indicator.classList.add('step-upcoming');

                        if (isComplete) {
                            indicator.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
                        } else {
                            indicator.textContent = idx + 1;
                        }
                    }

                    const connector = step.querySelector('.step-v-connector');
                    if (connector) {
                        if (isComplete) connector.classList.add('complete');
                        else connector.classList.remove('complete');
                    }

                    const title = step.querySelector('.step-v-title');
                    if (title) {
                        if (isUpcoming) title.style.color = 'var(--ds-sys-color-on-surface-subtle)';
                        else title.style.color = 'var(--ds-sys-color-on-surface, #111827)';
                    }

                    const desc = step.querySelector('.step-v-desc');
                    if (desc && desc.hasAttribute('data-complete-text')) {
                        if (isComplete) {
                            desc.dataset.original = desc.dataset.original || desc.innerHTML;
                            desc.innerHTML = desc.dataset.completeText;
                        } else {
                            if (desc.dataset.original) desc.innerHTML = desc.dataset.original;
                        }
                    }

                } else if (type === 'dot') {
                    step.classList.remove('complete', 'current');
                    if (isComplete) step.classList.add('complete');
                    if (isCurrent) step.classList.add('current');
                }
            });

            // update form progress text if it exists
            const progressText = wrapper.querySelector('.stepper-progress-text');
            if (progressText) {
                progressText.textContent = `Step ${currentStep + 1} of ${domSteps.length}`;
            }
        }

        const btnNexts = wrapper.querySelectorAll('[data-stepper-next]');
        const btnPrevs = wrapper.querySelectorAll('[data-stepper-prev]');
        const btnThrows = wrapper.querySelectorAll('[data-stepper-goto]');

        btnNexts.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                // Validate required inputs in the current panel
                const panel = btn.closest('.stepper-panel');
                if (panel) {
                    const inputs = panel.querySelectorAll('input, select, textarea');
                    let valid = true;
                    inputs.forEach(i => {
                        if (i.checkValidity && !i.checkValidity()) {
                            valid = false;
                            i.reportValidity();
                        }
                    });
                    if (!valid) return;
                }

                if (currentStep < domSteps.length - 1) {
                    currentStep++;
                    updateState();
                }
            });
        });

        btnPrevs.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (currentStep > 0) {
                    currentStep--;
                    updateState();
                }
            });
        });

        btnThrows.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const target = parseInt(btn.getAttribute('data-stepper-goto'), 10);
                if (!isNaN(target) && target >= 0 && target < domSteps.length) {
                    currentStep = target;
                    updateState();
                }
            });
        });

        // Initialize state identically
        updateState();
    });
}
