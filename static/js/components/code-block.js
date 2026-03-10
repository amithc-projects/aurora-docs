// static/js/components/code-block.js

export function initCodeBlocks() {
    const blocks = document.querySelectorAll('.code-block');

    blocks.forEach(block => {
        if (block.dataset.codeInit === 'true') return;
        block.dataset.codeInit = 'true';

        const copyBtn = block.querySelector('.code-block__copy');
        const content = block.querySelector('.code-block__content');

        if (!copyBtn || !content) return;

        copyBtn.addEventListener('click', async () => {
            try {
                // Read text content natively (preserves line breaks formatting from pre blocks)
                await navigator.clipboard.writeText(content.textContent || content.innerText);

                // Visual Feedback
                const originalText = copyBtn.innerHTML;
                copyBtn.classList.add('is-copied');
                copyBtn.innerHTML = '<span class="material-symbols-outlined" style="font-size:14px;">check</span> Copied!';

                // Reset after 2s
                setTimeout(() => {
                    copyBtn.classList.remove('is-copied');
                    copyBtn.innerHTML = originalText;
                }, 2000);

            } catch (err) {
                console.error('Failed to copy code: ', err);
            }
        });
    });
}
