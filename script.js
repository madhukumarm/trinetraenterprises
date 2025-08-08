// Trinetra Enterprises - JS

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Scroll reveal
const revealItems = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  }
}, { threshold: 0.15 });
revealItems.forEach(el => io.observe(el));

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Gallery data - Update paths to your own media in assets/images and assets/videos
const galleryItems = [
  // Images
  { type: 'image', src: 'https://images.unsplash.com/photo-1556329484-84e0d8c311a3?q=80&w=1200&auto=format&fit=crop', caption: 'Outdoor bullet camera' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1596399497691-857f4f9f955f?q=80&w=1200&auto=format&fit=crop', caption: 'Dome camera in office' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1558616172-02878aab4b29?q=80&w=1200&auto=format&fit=crop', caption: 'NVR/DVR setup' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1584916201218-ccef12197f20?q=80&w=1200&auto=format&fit=crop', caption: 'Neat wiring' },
  // Videos (replace with local files: assets/videos/demo.mp4)
  // { type: 'video', src: 'assets/videos/demo.mp4', caption: 'Sample footage' },
];

// Render gallery
const grid = document.getElementById('galleryGrid');
if (grid) {
  for (const item of galleryItems) {
    const wrapper = document.createElement('button');
    wrapper.className = 'gallery-item';
    wrapper.setAttribute('aria-label', item.caption || 'Open media');
    wrapper.style.cursor = 'pointer';

    if (item.type === 'image') {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.caption || '';
      img.loading = 'lazy';
      wrapper.appendChild(img);
    } else if (item.type === 'video') {
      const vid = document.createElement('video');
      vid.src = item.src;
      vid.muted = true;
      vid.playsInline = true;
      vid.preload = 'metadata';
      wrapper.appendChild(vid);
    }

    const cap = document.createElement('div');
    cap.className = 'caption';
    cap.textContent = item.caption || '';
    wrapper.appendChild(cap);

    wrapper.addEventListener('click', () => openLightbox(item));
    grid.appendChild(wrapper);
  }
}

// Lightbox
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lightboxImage');
const lbVid = document.getElementById('lightboxVideo');
const lbCap = document.getElementById('lightboxCaption');
const lbClose = document.querySelector('.lightbox-close');
const lbBackdrop = document.querySelector('.lightbox-backdrop');

function openLightbox(item) {
  if (!lightbox || !lbImg || !lbVid || !lbCap) return;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');

  lbImg.style.display = 'none';
  lbVid.style.display = 'none';

  lbCap.textContent = item.caption || '';

  if (item.type === 'image') {
    lbImg.src = item.src;
    lbImg.alt = item.caption || '';
    lbImg.style.display = 'block';
  } else if (item.type === 'video') {
    lbVid.src = item.src;
    lbVid.currentTime = 0;
    lbVid.style.display = 'block';
    lbVid.play().catch(() => {});
  }
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox || !lbImg || !lbVid) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lbVid.pause();
  lbVid.removeAttribute('src');
  lbImg.removeAttribute('src');
  document.body.style.overflow = '';
}

lbClose && lbClose.addEventListener('click', closeLightbox);
lbBackdrop && lbBackdrop.addEventListener('click', closeLightbox);
window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); }); 