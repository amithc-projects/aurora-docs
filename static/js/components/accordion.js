export function initAccordions() {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(acc => {
    const allowMultiple = acc.hasAttribute('data-multiple');
    const isHorizontal = acc.classList.contains('accordion--horizontal');

    if (isHorizontal) {
      if (!allowMultiple) setupExclusiveListeners(acc);
      return;
    }

    const summaries = acc.querySelectorAll('summary');
    
    summaries.forEach(summary => {
      summary.addEventListener('click', (e) => {
        e.preventDefault();
        const detail = summary.parentElement;
        
        // Exclusive Logic
        if (!allowMultiple && !detail.open) {
          const others = acc.querySelectorAll('details[open]');
          others.forEach(other => {
            if (other !== detail) closeAccordion(other);
          });
        }

        // Toggle
        if (detail.open) {
          closeAccordion(detail);
        } else {
          openAccordion(detail);
        }
      });
    });
  });
}

function openAccordion(detail) {
  // Target the element immediately after summary (Content)
  const content = detail.querySelector('summary + *');
  if (!content) return; 

  detail.open = true;
  
  const startHeight = content.offsetHeight;
  content.style.height = 'auto'; 
  content.style.paddingTop = '1.5rem';
  content.style.paddingBottom = '1.5rem';
  const endHeight = content.scrollHeight;
  
  content.style.height = startHeight + 'px';
  content.style.paddingTop = '0';
  content.style.paddingBottom = '0';
  
  content.offsetHeight; // Force reflow
  
  content.style.height = endHeight + 'px';
  content.style.paddingTop = '1.5rem';
  content.style.paddingBottom = '1.5rem';
  
  content.addEventListener('transitionend', function onEnd() {
    content.removeEventListener('transitionend', onEnd);
    content.style.height = 'auto';
  });
}

function closeAccordion(detail) {
  const content = detail.querySelector('summary + *');
  if (!content) return;

  content.style.height = content.offsetHeight + 'px';
  content.offsetHeight;
  
  content.style.height = '0px';
  content.style.paddingTop = '0';
  content.style.paddingBottom = '0';
  
  content.addEventListener('transitionend', function onEnd() {
    content.removeEventListener('transitionend', onEnd);
    if (content.style.height === '0px') {
      detail.open = false;
      content.style.height = null;
      content.style.paddingTop = null;
      content.style.paddingBottom = null;
    }
  });
}

function setupExclusiveListeners(acc) {
  const details = acc.querySelectorAll('details');
  details.forEach(target => {
    target.addEventListener('toggle', () => {
      if (target.open) {
        details.forEach(d => { if (d !== target) d.removeAttribute('open'); });
      }
    });
  });
}
