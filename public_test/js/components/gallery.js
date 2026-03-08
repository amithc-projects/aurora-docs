/**
 * Aurora Gallery Engine
 * Supports Images, Native Video (MP4), and YouTube Embeds.
 */

export function initGallery() {
  const galleries = document.querySelectorAll('.gallery');
  if (!galleries.length) return;

  const modal = createModalDOM();
  document.body.appendChild(modal);

  const state = {
    isOpen: false,
    currentIndex: 0,
    items: [], 
    isPlaying: false,
    interval: null,
    activeGalleryLoop: false
  };

  const els = {
    container: modal.querySelector('.gallery-modal__container'),
    thumbs: modal.querySelector('.gallery-modal__thumbs'),
    counter: modal.querySelector('.js-counter'),
    metaPanel: modal.querySelector('.gallery-modal__meta'),
    // FIXED: Selector updated from .js-play-icon to .js-play to match HTML
    btnPlay: modal.querySelector('.js-play'), 
    loader: modal.querySelector('.gallery-loader')
  };

  galleries.forEach(gallery => {
    const links = gallery.querySelectorAll('a');
    const galleryItems = Array.from(links).map(link => {
      const href = link.getAttribute('href');
      let type = 'image';
      if (href.match(/\.(mp4|webm)$/i)) type = 'video';
      else if (href.match(/youtube\.com|youtu\.be/)) type = 'youtube';

      return {
        type: type,
        src: href,
        thumb: link.querySelector('img')?.currentSrc || link.querySelector('img')?.src,
        caption: link.dataset.caption || '',
        meta: link.dataset.meta ? JSON.parse(link.dataset.meta) : null,
        el: link
      };
    });

    gallery.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (link && gallery.contains(link)) {
        e.preventDefault();
        openLightbox(galleryItems, galleryItems.indexOf(galleryItems.find(i => i.el === link)));
      }
    });

    const launchBtn = gallery.querySelector('.js-launch-gallery');
    if (launchBtn) {
      launchBtn.addEventListener('click', () => openLightbox(galleryItems, 0));
    }
  });

  function openLightbox(items, index) {
    state.items = items;
    state.currentIndex = index;
    state.isOpen = true;
    state.activeGalleryLoop = true;
    
    modal.classList.add('is-open');
    renderThumbnails(); 
    loadItem(index);
    
    document.body.style.overflow = 'hidden'; 
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    state.isOpen = false;
    stopSlideshow();
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    modal.setAttribute('aria-hidden', 'true');
    els.container.innerHTML = '';
  }

  function loadItem(index) {
    const item = state.items[index];
    if (!item) return;

    els.container.innerHTML = '';
    els.loader.style.display = 'block';

    updateMeta(item);
    els.counter.textContent = `${index + 1} / ${state.items.length}`;
    state.currentIndex = index;

    // Highlight Thumb
    const thumbs = els.thumbs.querySelectorAll('.gallery-modal__thumb');
    thumbs.forEach((t, i) => t.classList.toggle('is-active', i === index));
    if(thumbs[index]) thumbs[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

    // Render Media
    if (item.type === 'image') {
      const img = document.createElement('img');
      img.className = 'gallery-modal__media';
      img.src = item.src;
      img.alt = item.caption;
      img.onload = () => {
        img.classList.add('is-loaded');
        els.loader.style.display = 'none';
      };
      els.container.appendChild(img);

      // Preload next
      const nextItem = state.items[(index + 1) % state.items.length];
      if (nextItem && nextItem.type === 'image') {
        new Image().src = nextItem.src;
      }

    } else if (item.type === 'video') {
      const video = document.createElement('video');
      video.className = 'gallery-modal__media';
      video.src = item.src;
      video.controls = true;
      video.autoplay = true;
      video.onloadeddata = () => {
        video.classList.add('is-loaded');
        els.loader.style.display = 'none';
      };
      els.container.appendChild(video);
      stopSlideshow();

    } else if (item.type === 'youtube') {
      let embedSrc = item.src;
      if (item.src.includes('watch?v=')) {
        embedSrc = item.src.replace('watch?v=', 'embed/');
      } else if (item.src.includes('youtu.be/')) {
        embedSrc = item.src.replace('youtu.be/', 'www.youtube.com/embed/');
      }
      
      const iframe = document.createElement('iframe');
      iframe.className = 'gallery-modal__media';
      iframe.src = embedSrc + '?autoplay=1';
      iframe.allow = "autoplay; encrypted-media";
      iframe.onload = () => {
        iframe.classList.add('is-loaded');
        els.loader.style.display = 'none';
      };
      els.container.appendChild(iframe);
      stopSlideshow();
    }
  }

  function nextSlide() {
    let newIndex = state.currentIndex + 1;
    if (newIndex >= state.items.length) {
      if (state.activeGalleryLoop) newIndex = 0;
      else return; 
    }
    loadItem(newIndex);
  }

  function prevSlide() {
    let newIndex = state.currentIndex - 1;
    if (newIndex < 0) {
      if (state.activeGalleryLoop) newIndex = state.items.length - 1;
      else return;
    }
    loadItem(newIndex);
  }

  function toggleSlideshow() {
    if (state.isPlaying) stopSlideshow();
    else startSlideshow();
  }

  function startSlideshow() {
    state.isPlaying = true;
    if (els.btnPlay) els.btnPlay.innerHTML = ICONS.pause;
    state.interval = setInterval(nextSlide, 3000);
  }

  function stopSlideshow() {
    state.isPlaying = false;
    // FIXED: Added check to ensure element exists before setting innerHTML
    if (els.btnPlay) els.btnPlay.innerHTML = ICONS.play;
    if (state.interval) clearInterval(state.interval);
  }

  function renderThumbnails() {
    els.thumbs.innerHTML = state.items.map((item, i) => `
      <img src="${item.thumb}" class="gallery-modal__thumb" data-index="${i}" alt="Thumbnail ${i+1}" loading="lazy">
    `).join('');
  }

  function updateMeta(item) {
    const title = els.metaPanel.querySelector('h3');
    const desc = els.metaPanel.querySelector('p');
    const list = els.metaPanel.querySelector('dl');

    title.textContent = item.caption || '';
    desc.textContent = ''; 
    list.innerHTML = '';
    if (item.meta) {
      Object.entries(item.meta).forEach(([key, val]) => {
        list.innerHTML += `<dt>${key}</dt><dd>${val}</dd>`;
      });
    }
  }

  // Event Listeners
  els.thumbs.addEventListener('click', (e) => {
    if (e.target.matches('.gallery-modal__thumb')) {
      stopSlideshow();
      loadItem(parseInt(e.target.dataset.index));
    }
  });

  modal.querySelector('.js-close').addEventListener('click', closeLightbox);
  modal.querySelector('.js-next').addEventListener('click', () => { stopSlideshow(); nextSlide(); });
  modal.querySelector('.js-prev').addEventListener('click', () => { stopSlideshow(); prevSlide(); });
  if (els.btnPlay) els.btnPlay.addEventListener('click', toggleSlideshow);
  modal.querySelector('.js-info').addEventListener('click', () => els.metaPanel.classList.toggle('is-visible'));

  document.addEventListener('keydown', (e) => {
    if (!state.isOpen) return;
    switch(e.key) {
      case 'Escape': closeLightbox(); break;
      case 'ArrowRight': stopSlideshow(); nextSlide(); break;
      case 'ArrowLeft': stopSlideshow(); prevSlide(); break;
      case ' ': e.preventDefault(); toggleSlideshow(); break;
    }
  });

  // Touch Swipe
  let touchStartX = 0;
  const stage = modal.querySelector('.gallery-modal__stage');
  stage.addEventListener('touchstart', e => touchStartX = e.changedTouches[0].screenX, {passive: true});
  stage.addEventListener('touchend', e => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) nextSlide();
    if (touchEndX - touchStartX > 50) prevSlide();
  }, {passive: true});
}

// ICONS
const ICONS = {
  close: '<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
  prev: '<svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>',
  next: '<svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>',
  play: '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>',
  info: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>'
};

function createModalDOM() {
  const div = document.createElement('div');
  div.className = 'gallery-modal';
  div.setAttribute('aria-modal', 'true');
  div.setAttribute('role', 'dialog');
  div.innerHTML = `
    <header class="gallery-modal__header">
      <div class="js-counter"></div>
      <div style="display:flex; gap:0.5rem">
        <button class="gallery-modal__btn js-play">${ICONS.play}</button>
        <button class="gallery-modal__btn js-info">${ICONS.info}</button>
        <button class="gallery-modal__btn js-close">${ICONS.close}</button>
      </div>
    </header>
    <div class="gallery-modal__stage">
      <div class="gallery-loader"></div>
      <button class="gallery-modal__btn gallery-modal__prev js-prev">${ICONS.prev}</button>
      
      <div class="gallery-modal__container" style="display:contents"></div>
      
      <button class="gallery-modal__btn gallery-modal__next js-next">${ICONS.next}</button>
      <div class="gallery-modal__meta">
        <h3></h3><p></p><dl style="display:grid; grid-template-columns: auto 1fr; gap:0.5rem; font-size:0.85rem; margin:0;"></dl>
      </div>
    </div>
    <footer class="gallery-modal__footer"><div class="gallery-modal__thumbs"></div></footer>
  `;
  return div;
}
