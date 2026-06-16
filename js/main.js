/* ============================================
   EdumyVietNam - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ----- Loading Screen -----
  const loadingScreen = document.querySelector('.loading-screen');
  if (loadingScreen) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loadingScreen.classList.add('hide');
        document.body.style.overflow = '';
      }, 800);
    });
  }

  // ----- Dark Mode -----
  const themeToggle = document.querySelector('.theme-toggle');
  const storedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', storedTheme);
  if (themeToggle) {
    const updateIcon = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      themeToggle.innerHTML = theme === 'dark'
        ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
        : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    };
    updateIcon();
    themeToggle.addEventListener('click', () => {
      const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      updateIcon();
    });
  }

  // ----- Mobile Menu -----
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('open');
      document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    });
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ----- Sticky Header -----
  const nav = document.querySelector('.nav');
  if (nav) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
      lastScroll = scrollY;
    }, { passive: true });
  }

  // ----- Back To Top -----
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ----- Smooth Scroll for Anchor Links -----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ----- Scroll Animations (Intersection Observer) -----
  const animateElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-scale');
  if (animateElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    animateElements.forEach(el => observer.observe(el));
  }

  // ----- Counter Animation -----
  const counters = document.querySelectorAll('.count-num');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'));
          if (!target || el.dataset.counted) return;
          el.dataset.counted = 'true';
          const duration = 2000;
          const start = performance.now();
          const step = (timestamp) => {
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target).toLocaleString();
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              el.textContent = target.toLocaleString();
            }
          };
          requestAnimationFrame(step);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.3 });
    counters.forEach(c => counterObserver.observe(c));
  }

  // ----- FAQ Accordion -----
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const item = question.closest('.faq-item');
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item.active').forEach(active => {
        active.classList.remove('active');
        active.querySelector('.faq-answer').style.maxHeight = '0';
      });
      if (!isActive) {
        item.classList.add('active');
        const answer = item.querySelector('.faq-answer');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // ----- Contact Form Validation -----
  const contactForm = document.querySelector('#contactForm');
  if (contactForm) {
    const validateField = (field) => {
      const group = field.closest('.form-group');
      const error = group.querySelector('.form-error');
      const value = field.value.trim();
      let valid = true;
      if (field.hasAttribute('required') && !value) {
        valid = false;
        if (error) error.textContent = 'Vui lòng điền thông tin này';
      } else if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        valid = false;
        if (error) error.textContent = 'Email không hợp lệ';
      } else if (field.type === 'tel' && value && !/(\+84|0)[0-9]{9,10}/.test(value.replace(/\s/g, ''))) {
        valid = false;
        if (error) error.textContent = 'Số điện thoại không hợp lệ';
      }
      group.classList.toggle('error', !valid);
      return valid;
    };
    contactForm.querySelectorAll('input, textarea').forEach(field => {
      field.addEventListener('blur', () => validateField(field));
      field.addEventListener('input', () => {
        const group = field.closest('.form-group');
        if (group.classList.contains('error')) validateField(field);
      });
    });
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let allValid = true;
      contactForm.querySelectorAll('input[required], textarea[required]').forEach(field => {
        if (!validateField(field)) allValid = false;
      });
      const emailField = contactForm.querySelector('input[type="email"]');
      if (emailField && emailField.value && !validateField(emailField)) allValid = false;
      const telField = contactForm.querySelector('input[type="tel"]');
      if (telField && telField.value && !validateField(telField)) allValid = false;
      if (allValid) {
        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = 'Đã gửi ✓';
        btn.disabled = true;
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.disabled = false;
          contactForm.reset();
        }, 3000);
      }
    });
  }

  // ----- Pricing Toggle (Monthly/Yearly) -----
  const toggleSwitch = document.querySelector('.toggle-switch');
  const monthlyPrices = document.querySelectorAll('.price-monthly');
  const yearlyPrices = document.querySelectorAll('.price-yearly');
  if (toggleSwitch) {
    const updatePricing = (isYearly) => {
      monthlyPrices.forEach(el => el.style.display = isYearly ? 'none' : '');
      yearlyPrices.forEach(el => el.style.display = isYearly ? '' : 'none');
      toggleSwitch.classList.toggle('active', isYearly);
    };
    toggleSwitch.addEventListener('click', () => {
      const isYearly = !toggleSwitch.classList.contains('active');
      updatePricing(isYearly);
    });
    updatePricing(false);
  }

  // ----- Course Filtering -----
  const filterBtns = document.querySelectorAll('.filter-btn');
  const courseCards = document.querySelectorAll('.course-card');
  if (filterBtns.length > 0 && courseCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        courseCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ----- Testimonial Slider (Auto-rotate) -----
  const testimonialGrid = document.querySelector('.testimonials-grid');
  if (testimonialGrid && testimonialGrid.children.length > 3) {
    // Simple dots navigation for testimonials if needed
  }

  // ----- Lazy Loading for Images -----
  if ('loading' in HTMLImageElement.prototype) {
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      img.src = img.dataset.src || img.src;
    });
  }
});
