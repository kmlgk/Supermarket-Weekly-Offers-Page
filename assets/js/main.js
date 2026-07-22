/* =========================================================
   FreshMart — main.js
   Preloader, smooth scroll (Lenis), scroll progress, sticky
   header, mobile menu, magnetic buttons, GSAP reveals,
   AOS, SplitType text reveal, Swiper sliders, CountUp,
   GLightbox, Isotope filters, Typed.js, back-to-top.

   Everything below runs on DOMContentLoaded so that it always
   fires after components.js (header/footer injection) and
   after each page's own inline script (which renders dynamic
   content like deal/category/testimonial cards) — both are
   registered on the same event earlier in the document, and
   listeners for one event fire in registration order.
   ========================================================= */

(function () {
  'use strict';

  /* ---------- Preloader ---------- */
  // Hides on window `load` (all CDN scripts/stylesheets/fonts fetched),
  // but never later than 4s regardless — a slow/blocked CDN request
  // shouldn't leave a loading screen on-screen indefinitely. The
  // overlay itself is pointer-events:none (see style.css) so scrolling
  // works immediately either way; this only affects how long the
  // loading animation stays visible.
  (() => {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    let hidden = false;
    const hide = () => {
      if (hidden) return;
      hidden = true;
      preloader.classList.add('fm-loaded');
    };
    window.addEventListener('load', () => setTimeout(hide, 350));
    setTimeout(hide, 4000);
  })();

  document.addEventListener('DOMContentLoaded', () => {
    /* ---------- Lenis smooth scroll ---------- */
    let lenis;
    if (window.Lenis && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      lenis = new Lenis({ duration: 1.1, smoothWheel: true });

      // Drive Lenis from exactly one rAF loop — never two at once (that
      // was the original bug: a manual loop AND gsap.ticker both calling
      // lenis.raf() per frame). Between the two single-driver options,
      // a plain requestAnimationFrame loop is used here rather than
      // gsap.ticker: measured side-by-side, routing lenis.raf() through
      // gsap.ticker introduced a very noticeable ~500-600ms dead zone
      // before the very first scroll input produced any movement at all
      // (gsap.ticker's `time` argument is seconds elapsed since the
      // ticker itself started, not since Lenis started listening, and
      // that skew apparently confuses Lenis's own delta-time handling
      // on its first few frames) — a plain rAF loop responds within a
      // single frame instead. ScrollTrigger sync below still works
      // fine; it doesn't need gsap.ticker to be the *driver*.
      function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);
      if (window.gsap && window.gsap.ticker) {
        gsap.ticker.lagSmoothing(0);
      }

      // Keep GSAP ScrollTrigger's scroll position in sync with Lenis's
      // virtual scroll, otherwise scroll-triggered reveals drift/stutter.
      if (window.ScrollTrigger) {
        lenis.on('scroll', ScrollTrigger.update);
      }
    }

    /* ---------- Scroll progress + sticky header + back to top ---------- */
    const progressBar = document.getElementById('scroll-progress');
    const header = document.getElementById('site-header');
    const backToTop = document.getElementById('back-to-top');

    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (progressBar) progressBar.style.width = pct + '%';
      if (header) header.classList.toggle('fm-scrolled', scrollTop > 40);
      if (backToTop) backToTop.classList.toggle('fm-show', scrollTop > 500);
    }
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (backToTop) {
      backToTop.addEventListener('click', () => {
        if (lenis) lenis.scrollTo(0); else window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    /* ---------- Mobile menu ---------- */
    document.addEventListener('click', (e) => {
      const toggle = e.target.closest('#mobile-menu-toggle');
      const close = e.target.closest('#mobile-menu-close');
      const overlay = e.target.closest('#mobile-menu-overlay');
      const panel = document.getElementById('mobile-menu-panel');
      const ov = document.getElementById('mobile-menu-overlay');
      if (toggle) {
        panel && panel.classList.add('fm-open');
        ov && ov.classList.remove('hidden');
        document.documentElement.style.overflow = 'hidden';
      }
      if (close || overlay) {
        panel && panel.classList.remove('fm-open');
        ov && ov.classList.add('hidden');
        document.documentElement.style.overflow = '';
      }
      const accToggle = e.target.closest('.fm-accordion-toggle');
      if (accToggle) {
        const item = accToggle.closest('.fm-accordion-item');
        const wasOpen = item.classList.contains('fm-open');
        item.parentElement.querySelectorAll('.fm-accordion-item').forEach(i => i.classList.remove('fm-open'));
        if (!wasOpen) item.classList.add('fm-open');
      }
      const searchToggle = e.target.closest('#search-toggle');
      if (searchToggle) {
        document.getElementById('search-panel')?.classList.toggle('hidden');
      }
    });

    /* ---------- Magnetic buttons ---------- */
    document.querySelectorAll('.fm-magnetic').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        if (window.gsap) {
          gsap.to(btn, { x: x * 0.35, y: y * 0.5, duration: 0.4, ease: 'power3.out' });
        }
      });
      btn.addEventListener('mouseleave', () => {
        if (window.gsap) gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1,0.4)' });
      });
    });

    /* ---------- AOS ---------- */
    if (window.AOS) {
      AOS.init({ duration: 700, once: true, offset: 60, easing: 'ease-out-cubic' });
    }

    /* ---------- GSAP reveals + SplitType text reveal ---------- */
    if (window.gsap) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray('.fm-reveal').forEach((el, i) => {
        gsap.to(el, {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: i * 0.05,
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });

      if (window.SplitType) {
        document.querySelectorAll('[data-split-text]').forEach(el => {
          const split = new SplitType(el, { types: 'lines,words' });
          gsap.set(split.words, { yPercent: 120, opacity: 0 });
          gsap.to(split.words, {
            yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.03, ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          });
        });
      }

      document.querySelectorAll('[data-parallax]').forEach(el => {
        const speed = parseFloat(el.dataset.parallax) || 0.3;
        gsap.to(el, {
          yPercent: speed * 100, ease: 'none',
          scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });

      // Cinematic clip-path wipe-reveal for feature photography as it
      // scrolls into view (pairs with the .fm-img-reveal starting state
      // in style.css: clip-path: inset(0 0 0 100%)).
      gsap.utils.toArray('.fm-img-reveal').forEach((el, i) => {
        gsap.to(el, {
          clipPath: 'inset(0 0 0 0%)', duration: 1.1, ease: 'power4.out', delay: i * 0.08,
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });

      initHero3D();
    }

    /* ---------- Hero 3D showcase: mouse-parallax tilt + entrance ---------- */
    // Skipped on touch devices (no real cursor to drive it) and for
    // prefers-reduced-motion. Depth-tagged elements ([data-depth]) get
    // their own outer wrapper purely for GSAP's translate — the actual
    // floating "bob" animation lives on an *inner* element via the
    // existing .fm-float CSS keyframes. Splitting them like this
    // matters: a CSS @keyframes animation and a GSAP tween both
    // targeting `transform` on the very same element fight each other
    // (the keyframe wins every frame, since running animations take
    // cascade priority over an inline style), which would make the
    // parallax invisible/jittery if it shared the .fm-float element.
    function initHero3D() {
      const stage = document.getElementById('hero-visual');
      if (!stage) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const tiltTarget = stage.querySelector('[data-hero-tilt]');
      const depthEls = Array.from(stage.querySelectorAll('[data-depth]'));

      // Entrance: showcase image scales/rotates in, cards fly in with a
      // staggered bounce once the hero is on screen.
      if (tiltTarget) gsap.set(tiltTarget, { opacity: 0, scale: 0.7, rotationY: -28, transformPerspective: 1000 });
      gsap.set(depthEls, { opacity: 0, y: 36, scale: 0.85 });
      const tl = gsap.timeline({ delay: 0.35 });
      if (tiltTarget) tl.to(tiltTarget, { opacity: 1, scale: 1, rotationY: 0, duration: 1.1, ease: 'power4.out' });
      tl.to(depthEls, { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12, ease: 'back.out(1.6)' }, tiltTarget ? '-=0.65' : 0);

      // Mouse-driven 3D parallax — desktop/fine-pointer only.
      if (!window.matchMedia('(pointer: fine)').matches) return;

      const quickRotX = tiltTarget ? gsap.quickTo(tiltTarget, 'rotationX', { duration: 0.6, ease: 'power3.out' }) : null;
      const quickRotY = tiltTarget ? gsap.quickTo(tiltTarget, 'rotationY', { duration: 0.6, ease: 'power3.out' }) : null;
      const depthQuicks = depthEls.map(el => ({
        depth: parseFloat(el.dataset.depth) || 20,
        x: gsap.quickTo(el, 'x', { duration: 0.7, ease: 'power3.out' }),
        y: gsap.quickTo(el, 'y', { duration: 0.7, ease: 'power3.out' }),
      }));

      stage.addEventListener('mousemove', (e) => {
        const r = stage.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        if (quickRotX && quickRotY) { quickRotX(py * -14); quickRotY(px * 14); }
        depthQuicks.forEach(({ depth, x, y }) => { x(px * depth); y(py * depth); });
      });
      stage.addEventListener('mouseleave', () => {
        if (quickRotX && quickRotY) { quickRotX(0); quickRotY(0); }
        depthQuicks.forEach(({ x, y }) => { x(0); y(0); });
      });
    }

    /* ---------- Typed.js ---------- */
    if (window.Typed) {
      document.querySelectorAll('[data-typed]').forEach(el => {
        let strings = [];
        try { strings = JSON.parse(el.dataset.typed); } catch (e) { strings = [el.dataset.typed]; }
        new Typed(el, { strings, typeSpeed: 45, backSpeed: 25, backDelay: 1600, loop: true, smartBackspace: true });
      });
    }

    /* ---------- CountUp ---------- */
    function initCountUps() {
      if (!window.countUp) return;
      document.querySelectorAll('[data-countup]').forEach(el => {
        const end = parseFloat(el.dataset.countup);
        const suffix = el.dataset.suffix || '';
        const counter = new window.countUp.CountUp(el, end, { duration: 2.2, suffix });
        if (!counter.error) {
          const trigger = () => { counter.start(); };
          if (window.ScrollTrigger) {
            ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: trigger });
          } else {
            trigger();
          }
        }
      });
    }
    initCountUps();

    /* ---------- GLightbox ---------- */
    if (window.GLightbox) {
      GLightbox({ selector: '.fm-glightbox' });
    }

    /* ---------- Swiper generic init ---------- */
    function initSwipers() {
      if (!window.Swiper) return;
      document.querySelectorAll('.fm-swiper').forEach(el => {
        let cfg = {};
        try { cfg = JSON.parse(el.dataset.swiperConfig || '{}'); } catch (e) {}
        new Swiper(el, Object.assign({
          loop: true,
          spaceBetween: 24,
          pagination: { el: el.querySelector('.swiper-pagination'), clickable: true },
          navigation: { nextEl: el.querySelector('.fm-swiper-next'), prevEl: el.querySelector('.fm-swiper-prev') },
          autoplay: { delay: 4500, disableOnInteraction: false },
          slidesPerView: 1,
        }, cfg));
      });
    }
    initSwipers();

    /* ---------- Isotope filters ---------- */
    function initIsotope() {
      if (!window.Isotope) return;
      document.querySelectorAll('[data-isotope-container]').forEach(container => {
        const iso = new Isotope(container, { itemSelector: '.fm-isotope-item', layoutMode: 'fitRows', transitionDuration: '0.5s' });
        const filterGroup = document.querySelector(`[data-isotope-filters="${container.id}"]`);
        if (filterGroup) {
          filterGroup.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-filter]');
            if (!btn) return;
            filterGroup.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('is-active', 'bg-emerald-600', 'text-white'));
            btn.classList.add('is-active', 'bg-emerald-600', 'text-white');
            const val = btn.dataset.filter;
            iso.arrange({ filter: val === '*' ? '*' : `.${val}` });
          });
        }
      });
    }
    initIsotope();

    /* ---------- 3D tilt on hover ---------- */
    document.querySelectorAll('.fm-tilt').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(800px) rotateX(${py * -8}deg) rotateY(${px * 8}deg) translateY(-4px)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });

    /* ---------- Lazy image loader ---------- */
    const lazyImgs = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window && lazyImgs.length) {
      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.addEventListener('load', () => img.classList.add('fm-loaded'));
            obs.unobserve(img);
          }
        });
      }, { rootMargin: '200px' });
      lazyImgs.forEach(img => io.observe(img));
    }

    /* ---------- Smooth in-page anchor scrolling ---------- */
    // Handles both href="#section" and href="thispage.html#section" (the
    // mega menu / footer links use the latter even when already on that
    // page). Routes through Lenis so it doesn't fight the library's own
    // virtual scroll position — a native anchor jump while Lenis is
    // active is what caused "smooth scroll" to feel broken/instant.
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href*="#"]');
      if (!link) return;
      let url;
      try { url = new URL(link.getAttribute('href'), window.location.href); } catch (err) { return; }
      if (url.pathname !== window.location.pathname || !url.hash) return;
      const target = document.querySelector(url.hash);
      if (!target) return;

      e.preventDefault();
      e.stopImmediatePropagation();

      // Close the mobile menu first so the target section is visible.
      document.getElementById('mobile-menu-panel')?.classList.remove('fm-open');
      document.getElementById('mobile-menu-overlay')?.classList.add('hidden');
      document.documentElement.style.overflow = '';

      // Category cards (Shop by Category) carry data-cat and point at
      // #weekly-offers — activate the matching Isotope filter button so
      // the section doesn't just scroll into view but also shows only
      // that category. The click() (not a direct arrange() call) is
      // deliberate: it's a real synthetic click that bubbles up through
      // the filter button's own ancestors, so it runs through the exact
      // same listener initIsotope() already wires up on the filter
      // group — same active-state toggling, same arrange() call, one
      // source of truth instead of a second copy of that logic here.
      if (link.dataset.cat) {
        const filterBtn = document.querySelector(`[data-filter="${link.dataset.cat}"]`);
        if (filterBtn) filterBtn.click();
      }

      const headerOffset = document.getElementById('site-header')?.offsetHeight || 84;
      if (lenis) {
        lenis.scrollTo(target, { offset: -headerOffset, duration: 1.3 });
      } else {
        const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });

    /* ---------- Newsletter / contact form demo handling ---------- */
    document.querySelectorAll('form[data-demo-form]').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="ri-check-line"></i> Sent!';
        btn.disabled = true;
        setTimeout(() => { btn.innerHTML = original; btn.disabled = false; form.reset(); }, 2200);
      });
    });
  });
})();
