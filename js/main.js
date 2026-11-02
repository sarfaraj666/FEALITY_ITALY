/**
 * FEALITY ITALY — Luxury Italian Interior Experience
 * High-performance UI interactions, filter engine & modal dialogs
 */
'use strict';

(() => {
  const root = document.documentElement;
  const header = document.getElementById('site-header');
  const toggle = document.querySelector('.menu-toggle');
  const panel = document.getElementById('mobile-nav');

  // Header Scroll State
  const syncHeader = () => {
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }
  };
  syncHeader();
  window.addEventListener('scroll', syncHeader, { passive: true });

  // Mobile Navigation Handling
  const setMenu = (open) => {
    if (!toggle || !panel) return;
    panel.classList.toggle('open', open);
    panel.inert = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    document.body.classList.toggle('nav-open', open);
  };

  toggle?.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    setMenu(!isOpen);
  });

  panel?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenu(false));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1100) setMenu(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (toggle?.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
      }
    }
  });

  // Refined Scroll Reveal Observer
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    root.classList.add('has-js');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  }

  // Catalogue Filtering Engine
  const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
  const cards = Array.from(document.querySelectorAll('.design-card'));

  if (filterButtons.length && cards.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetCategory = btn.dataset.filter;

        filterButtons.forEach((b) => {
          const isActive = b === btn;
          b.classList.toggle('active', isActive);
          b.setAttribute('aria-pressed', String(isActive));
        });

        cards.forEach((card) => {
          const cardStyle = card.dataset.style;
          const match = targetCategory === 'All' || cardStyle === targetCategory;
          card.hidden = !match;
          if (match) {
            card.classList.add('is-visible');
          }
        });
      });
    });
  }

  // Product Inspection Modal Dialog
  const dialog = document.getElementById('product-dialog');
  const setText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val || '';
  };

  document.querySelectorAll('[data-product]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!dialog || typeof dialog.showModal !== 'function') return;
      const data = btn.dataset;

      setText('dialog-title', data.title);
      setText('dialog-desc', data.desc);
      setText('dialog-style', data.style);
      setText('dialog-finish', data.finish);

      const photo = document.getElementById('dialog-img');
      if (photo) {
        photo.src = data.image || '';
        photo.alt = `${data.title || 'Collection'} — Italian luxury interior design`;
      }

      dialog.showModal();
      document.body.classList.add('dialog-open');
    });
  });

  const closeDialog = () => {
    if (dialog && typeof dialog.close === 'function') {
      dialog.close();
    }
  };

  document.querySelectorAll('[data-close-dialog]').forEach((btn) => {
    btn.addEventListener('click', closeDialog);
  });

  dialog?.addEventListener('click', (e) => {
    if (e.target === dialog) {
      closeDialog();
    }
  });

  dialog?.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
  });

  // Dynamic Copyright Year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
