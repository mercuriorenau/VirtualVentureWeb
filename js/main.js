import './includes.js';

function initApp() {
  const nav = document.querySelector('nav');
  const hero = document.querySelector('.hero');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!nav || !hero) return;

  const darkSections = document.querySelectorAll('.section--dark, .marquee-band, .tour-contact-card');

  const updateNav = () => {
    const pastHero = window.scrollY > hero.offsetHeight - nav.offsetHeight - 20;
    nav.classList.toggle('is-scrolled', pastHero);
    const onDark = [...darkSections].some((sec) => {
      const r = sec.getBoundingClientRect();
      return r.top <= nav.offsetHeight + 4 && r.bottom > nav.offsetHeight + 4;
    });
    nav.classList.toggle('is-dark', onDark);
  };

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  const navAnchors = navLinks ? [...navLinks.querySelectorAll('a[href^="#"]')] : [];
  const sections = [...document.querySelectorAll('section[id]')];

  const updateActiveNav = () => {
    if (!navAnchors.length || !sections.length) return;
    const offset = nav.offsetHeight + 48;
    let current = sections[0].id;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= offset) {
        current = section.id;
      }
    }
    navAnchors.forEach((link) => {
      const match = link.getAttribute('href') === `#${current}`;
      link.classList.toggle('is-active', match);
    });
  };

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', open);
      navToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const fadeEls = document.querySelectorAll('.fade-in');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    fadeEls.forEach((el) => el.classList.add('is-visible'));
  } else {
    const fadeObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            fadeObs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 }
    );
    fadeEls.forEach((el) => fadeObs.observe(el));
  }
}

initApp();
