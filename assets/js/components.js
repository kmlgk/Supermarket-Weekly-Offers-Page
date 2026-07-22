/* =========================================================
   FreshMart — Shared UI components
   Injects Header (topbar + glass nav + mega menu), Mobile
   Menu, Footer, CTA band and Breadcrumb into every page from
   one single source of truth (no duplicated markup per page).
   ========================================================= */

const FM_NAV = [
  {
    label: 'Home',
    children: [
      { label: 'Home — Grocery Deals', href: 'index.html' },
      { label: 'Home — Weekly Catalog', href: 'home-2.html' },
    ],
  },
  { label: 'Weekly Offers', href: 'index.html#weekly-offers' },
  { label: 'About', href: 'about.html' },
  {
    label: 'Services',
    children: [
      { label: 'All Services', href: 'services.html' },
      { label: 'Service Details', href: 'service-details.html' },
    ],
  },
  {
    label: 'Blog',
    children: [
      { label: 'Blog Grid', href: 'blog.html' },
      { label: 'Blog Details', href: 'blog-details.html' },
    ],
  },
  { label: 'Pricing', href: 'pricing.html' },
  { label: 'Contact', href: 'contact.html' },
];

function fmHeaderHTML(activePage) {
  const navItems = FM_NAV.map(item => {
    const isActive = item.href && item.href.split('#')[0] === activePage;
    const activeChild = item.children && item.children.some(c => c.href.split('#')[0] === activePage);
    const activeCls = (isActive || activeChild) ? 'text-emerald-600 dark:text-emerald-400' : '';
    if (item.children) {
      return `
      <div class="group relative">
        <button class="fm-nav-link ${activeCls} flex items-center gap-1 py-2 text-sm font-semibold hover:text-emerald-600 dark:hover:text-emerald-400">
          ${item.label} <i class="ri-arrow-down-s-line text-base transition group-hover:rotate-180"></i>
        </button>
        <div class="fm-mega-panel absolute left-0 top-full z-40 mt-3 w-56 rounded-xl border border-[hsl(var(--fm-border))] bg-[hsl(var(--fm-surface))] p-2 shadow-2xl shadow-black/10">
          ${item.children.map(c => `<a href="${c.href}" class="block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-[hsl(var(--fm-surface-alt))] hover:text-emerald-600">${c.label}</a>`).join('')}
        </div>
      </div>`;
    }
    return `<a href="${item.href}" class="fm-nav-link ${activeCls} py-2 text-sm font-semibold hover:text-emerald-600 dark:hover:text-emerald-400">${item.label}</a>`;
  }).join('');

  return `
  <div class="hidden border-b border-[hsl(var(--fm-border))]/70 bg-emerald-700 text-white lg:block">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
      <div class="flex items-center gap-5">
        <span class="flex items-center gap-1.5"><span class="fm-status-dot h-2 w-2 rounded-full bg-emerald-300"></span> Open Now — 7:00 AM to 11:00 PM</span>
        <span class="flex items-center gap-1.5"><i class="ri-map-pin-2-line"></i> Find your nearest branch</span>
      </div>
      <div class="flex items-center gap-4">
        <a href="tel:+15550102200" class="flex items-center gap-1.5 hover:text-amber-300"><i class="ri-phone-line"></i> +1 (555) 010-2200</a>
        <span class="flex items-center gap-3">
          <a href="#" aria-label="Facebook" class="hover:text-amber-300"><i class="ri-facebook-fill"></i></a>
          <a href="#" aria-label="Instagram" class="hover:text-amber-300"><i class="ri-instagram-line"></i></a>
          <a href="#" aria-label="X" class="hover:text-amber-300"><i class="ri-twitter-x-line"></i></a>
        </span>
      </div>
    </div>
  </div>
  <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
    <a href="index.html" class="flex items-center gap-2.5" aria-label="FreshMart home">
      <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/30">
        <i class="ri-shopping-basket-2-fill text-2xl"></i>
      </span>
      <span class="font-display text-xl font-extrabold tracking-tight">Fresh<span class="text-emerald-600">Mart</span></span>
    </a>

    <nav class="hidden items-center gap-7 lg:flex" aria-label="Primary">
      ${navItems}
    </nav>

    <div class="flex items-center gap-2">
      
      <button id="rtl-toggle" aria-label="Toggle direction" title="Toggle LTR / RTL" class="hidden h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--fm-border))] transition hover:border-emerald-500 hover:text-emerald-600 sm:flex">
        <i class="ri-text-direction-r text-lg"></i>
      </button>
      <button id="theme-toggle" aria-label="Toggle dark mode" class="flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--fm-border))] transition hover:border-emerald-500 hover:text-emerald-600">
        <i class="ri-moon-line text-lg dark:hidden"></i>
        <i class="ri-sun-line hidden text-lg dark:block"></i>
      </button>
      <a href="pricing.html" class="fm-btn fm-magnetic relative ml-1 hidden items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 md:flex">
        <i class="ri-vip-crown-2-line"></i> Loyalty Card
      </a>
      <button id="mobile-menu-toggle" aria-label="Open menu" class="ml-1 flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--fm-border))] lg:hidden">
        <i class="ri-menu-3-line text-xl"></i>
      </button>
    </div>
  </div>
  <div id="search-panel" class="hidden border-t border-[hsl(var(--fm-border))] px-6 py-4">
    <div class="mx-auto flex max-w-2xl items-center gap-3 rounded-full border border-[hsl(var(--fm-border))] px-5 py-3">
      <i class="ri-search-line text-lg text-[hsl(var(--fm-ink))]/65"></i>
      <input type="search" placeholder="Search products, categories, deals..." class="w-full bg-transparent text-sm outline-none" />
      <button class="rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white">Search</button>
    </div>
  </div>`;
}

function fmMobileMenuHTML(activePage) {
  const items = FM_NAV.map((item, idx) => {
    if (item.children) {
      return `
      <div class="fm-accordion-item border-b border-[hsl(var(--fm-border))]">
        <button class="fm-accordion-toggle flex w-full items-center justify-between py-4 text-left text-sm font-semibold">
          ${item.label} <i class="ri-arrow-down-s-line fm-accordion-icon text-lg"></i>
        </button>
        <div class="fm-accordion-body">
          <div class="flex flex-col gap-1 pb-4 pl-3">
            ${item.children.map(c => `<a href="${c.href}" class="rounded-lg px-3 py-2 text-sm text-[hsl(var(--fm-ink))]/75 hover:bg-[hsl(var(--fm-surface-alt))]">${c.label}</a>`).join('')}
          </div>
        </div>
      </div>`;
    }
    return `<a href="${item.href}" class="block border-b border-[hsl(var(--fm-border))] py-4 text-sm font-semibold">${item.label}</a>`;
  }).join('');

  return `
  <div id="mobile-menu-overlay" class="fixed inset-0 z-[60] hidden bg-black/50 backdrop-blur-sm"></div>
  <aside id="mobile-menu-panel" class="fixed inset-y-0 right-0 z-[70] w-full overflow-y-auto bg-[hsl(var(--fm-surface))] p-6 shadow-2xl" aria-label="Mobile menu">
    <div class="mb-6 flex items-center justify-between">
      <a href="index.html" class="flex items-center gap-2">
        <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white"><i class="ri-shopping-basket-2-fill"></i></span>
        <span class="font-display text-lg font-extrabold">Fresh<span class="text-emerald-600">Mart</span></span>
      </a>
      <button id="mobile-menu-close" aria-label="Close menu" class="flex h-9 w-9 items-center justify-center rounded-full border border-[hsl(var(--fm-border))]">
        <i class="ri-close-line text-lg"></i>
      </button>
    </div>
    
    <nav aria-label="Mobile primary">${items}</nav>
    <div class="mt-6 flex items-center gap-3">
      <button id="mobile-theme-toggle" class="flex flex-1 items-center justify-center gap-2 rounded-full border border-[hsl(var(--fm-border))] py-2.5 text-sm font-semibold">
        <i class="ri-contrast-2-line"></i> Theme
      </button>
      <button id="mobile-rtl-toggle" class="flex flex-1 items-center justify-center gap-2 rounded-full border border-[hsl(var(--fm-border))] py-2.5 text-sm font-semibold">
        <i class="ri-text-direction-r"></i> RTL
      </button>
    </div>
    <a href="pricing.html" class="fm-btn relative mt-4 flex items-center justify-center gap-2 rounded-full bg-emerald-600 py-3 text-sm font-semibold text-white">
      <i class="ri-vip-crown-2-line"></i> Get Loyalty Card
    </a>
    <div class="mt-6 flex items-center justify-center gap-4 text-lg">
      <a href="#" aria-label="Facebook" class="text-[hsl(var(--fm-ink))]/65 hover:text-emerald-600"><i class="ri-facebook-fill"></i></a>
      <a href="#" aria-label="Instagram" class="text-[hsl(var(--fm-ink))]/65 hover:text-emerald-600"><i class="ri-instagram-line"></i></a>
      <a href="#" aria-label="X" class="text-[hsl(var(--fm-ink))]/65 hover:text-emerald-600"><i class="ri-twitter-x-line"></i></a>
    </div>
  </aside>`;
}

function fmFooterHTML() {
  return `
  <div class="fm-animated-bg relative overflow-hidden py-14 text-white">
    <div class="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
      <div>
        <h3 class="font-display text-2xl font-extrabold md:text-3xl">Never miss a weekly offer again.</h3>
        <p class="mt-1 text-white/80">Join 320,000+ subscribers getting fresh deals every Monday morning.</p>
      </div>
      <form class="flex w-full max-w-md items-center gap-2 rounded-full bg-white/15 p-1.5 backdrop-blur-md md:w-auto" onsubmit="return false;">
        <label for="footer-newsletter-email" class="sr-only">Email address</label>
        <input id="footer-newsletter-email" type="email" required placeholder="Enter your email" class="w-full flex-1 rounded-full bg-transparent px-4 py-2.5 text-sm text-white placeholder-white/70 outline-none" />
        <button type="submit" class="fm-btn relative shrink-0 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-emerald-900">Subscribe</button>
      </form>
    </div>
  </div>
  <div class="bg-[#0b1c14] text-slate-300">
    <div class="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-5">
      <div class="lg:col-span-2">
        <a href="index.html" class="flex items-center gap-2.5">
          <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white"><i class="ri-shopping-basket-2-fill text-2xl"></i></span>
          <span class="font-display text-xl font-extrabold text-white">Fresh<span class="text-emerald-400">Mart</span></span>
        </a>
        <p class="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">Your neighborhood supermarket bringing farm-fresh produce, everyday essentials and unbeatable weekly offers to 48+ branches nationwide.</p>
        <div class="mt-5 flex items-center gap-3">
          <a href="#" aria-label="Facebook" class="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-emerald-400 hover:text-emerald-400"><i class="ri-facebook-fill"></i></a>
          <a href="#" aria-label="Instagram" class="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-emerald-400 hover:text-emerald-400"><i class="ri-instagram-line"></i></a>
          <a href="#" aria-label="X" class="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-emerald-400 hover:text-emerald-400"><i class="ri-twitter-x-line"></i></a>
          <a href="#" aria-label="YouTube" class="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-emerald-400 hover:text-emerald-400"><i class="ri-youtube-line"></i></a>
        </div>
      </div>
      <div>
        <h4 class="font-display text-sm font-bold uppercase tracking-wide text-white">Explore</h4>
        <ul class="mt-4 space-y-2.5 text-sm">
          <li><a href="index.html" class="hover:text-emerald-400">Home</a></li>
          <li><a href="about.html" class="hover:text-emerald-400">About Us</a></li>
          <li><a href="services.html" class="hover:text-emerald-400">Services</a></li>
          <li><a href="blog.html" class="hover:text-emerald-400">Blog</a></li>
          <li><a href="pricing.html" class="hover:text-emerald-400">Loyalty Pricing</a></li>
          <li><a href="contact.html" class="hover:text-emerald-400">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-display text-sm font-bold uppercase tracking-wide text-white">Categories</h4>
        <ul class="mt-4 space-y-2.5 text-sm">
          ${FM_CATEGORIES.slice(0, 6).map(c => `<li><a href="index.html#weekly-offers" class="hover:text-emerald-400">${c.name}</a></li>`).join('')}
        </ul>
      </div>
      <div>
        <h4 class="font-display text-sm font-bold uppercase tracking-wide text-white">Get in Touch</h4>
        <ul class="mt-4 space-y-3 text-sm">
          <li class="flex items-start gap-2.5"><i class="ri-map-pin-2-line mt-0.5 text-emerald-400"></i> 221 Market Street, City Center</li>
          <li class="flex items-start gap-2.5"><i class="ri-phone-line mt-0.5 text-emerald-400"></i> +1 (555) 010-2200</li>
          <li class="flex items-start gap-2.5"><i class="ri-mail-line mt-0.5 text-emerald-400"></i> hello@freshmart.example</li>
          <li class="flex items-start gap-2.5"><i class="ri-time-line mt-0.5 text-emerald-400"></i> Mon–Sun: 7:00 AM – 11:00 PM</li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-slate-400 md:flex-row">
        <p>&copy; <span id="fm-year"></span> FreshMart. All rights reserved. Built for ThemeForest.</p>
        <div class="flex items-center gap-5">
          <a href="#" class="hover:text-emerald-400">Privacy Policy</a>
          <a href="#" class="hover:text-emerald-400">Terms of Service</a>
          <a href="#" class="hover:text-emerald-400">Sitemap</a>
        </div>
      </div>
    </div>
  </div>`;
}

function fmBreadcrumbHTML(title, crumbs, subtitle) {
  const crumbHTML = crumbs.map((c, i) => {
    const isLast = i === crumbs.length - 1;
    return isLast
      ? `<li class="text-white/90" aria-current="page">${c.label}</li>`
      : `<li class="flex items-center gap-2"><a href="${c.href}" class="text-white/70 hover:text-white">${c.label}</a><i class="ri-arrow-right-s-line text-white/50"></i></li>`;
  }).join('');

  return `
  <div class="fm-animated-bg relative overflow-hidden py-24 text-white md:py-28">
    <div class="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 fm-blob"></div>
    <div class="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-amber-400/20 fm-blob"></div>
    <div class="relative mx-auto max-w-7xl px-6 text-center">
      <p class="fm-reveal mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold backdrop-blur-md"><i class="ri-shopping-basket-2-line"></i> FreshMart</p>
      <h1 class="fm-reveal font-display text-4xl font-extrabold tracking-tight md:text-5xl">${title}</h1>
      ${subtitle ? `<p class="fm-reveal mx-auto mt-3 max-w-2xl text-white/80">${subtitle}</p>` : ''}
      <ol class="fm-reveal mt-6 flex flex-wrap items-center justify-center gap-2 text-sm">${crumbHTML}</ol>
    </div>
  </div>`;
}

/* CTA band — reusable across pages (variant: 'app' | 'branch' | 'loyalty') */
function fmCtaHTML(variant = 'app') {
  const content = {
    app: {
      icon: 'ri-smartphone-line',
      title: 'Get the FreshMart app for exclusive mobile-only deals',
      text: 'Scan weekly offers, clip digital coupons and track loyalty points on the go.',
      primary: { label: 'Download for iOS', icon: 'ri-apple-fill' },
      secondary: { label: 'Get it on Android', icon: 'ri-android-fill' },
    },
    branch: {
      icon: 'ri-map-pin-2-line',
      title: 'Find your nearest FreshMart branch in seconds',
      text: '48+ locations with live store hours, directions and stock availability.',
      primary: { label: 'Locate a Store', icon: 'ri-navigation-line', href: 'contact.html#branch-locator' },
      secondary: { label: 'View All Branches', icon: 'ri-store-2-line', href: 'contact.html#branch-locator' },
    },
    loyalty: {
      icon: 'ri-vip-crown-2-line',
      title: 'Unlock bigger savings with a FreshMart Loyalty Card',
      text: 'Earn points on every purchase and redeem them for instant discounts.',
      primary: { label: 'Compare Plans', icon: 'ri-price-tag-3-line', href: 'pricing.html' },
      secondary: { label: 'Learn More', icon: 'ri-information-line', href: 'about.html' },
    },
  }[variant];

  return `
  <div class="relative overflow-hidden rounded-3xl bg-emerald-950 px-6 py-14 text-white sm:px-12">
    <div class="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/30 blur-3xl"></div>
    <div class="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl"></div>
    <div class="relative flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
      <div class="flex items-center gap-5">
        <span class="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-3xl text-amber-300 sm:flex"><i class="${content.icon}"></i></span>
        <div>
          <h3 class="font-display text-2xl font-extrabold sm:text-3xl">${content.title}</h3>
          <p class="mt-2 max-w-xl text-white/70">${content.text}</p>
        </div>
      </div>
      <div class="flex shrink-0 flex-col gap-3 sm:flex-row">
        <a href="${content.primary.href || '#'}" class="fm-btn fm-magnetic relative flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-emerald-950"><i class="${content.primary.icon}"></i>${content.primary.label}</a>
        <a href="${content.secondary.href || '#'}" class="flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white hover:bg-white/10"><i class="${content.secondary.icon}"></i>${content.secondary.label}</a>
      </div>
    </div>
  </div>`;
}

function fmInitComponents() {
  const page = document.body.dataset.page || '';
  const headerEl = document.getElementById('site-header');
  if (headerEl) headerEl.innerHTML = fmHeaderHTML(page);

  document.body.insertAdjacentHTML('beforeend', fmMobileMenuHTML(page));

  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.innerHTML = fmFooterHTML();

  const bcEl = document.getElementById('breadcrumb');
  if (bcEl) {
    const title = bcEl.dataset.title || '';
    const subtitle = bcEl.dataset.subtitle || '';
    let crumbs = [{ label: 'Home', href: 'index.html' }];
    try { crumbs = crumbs.concat(JSON.parse(bcEl.dataset.crumbs || '[]')); } catch (e) {}
    bcEl.innerHTML = fmBreadcrumbHTML(title, crumbs, subtitle);
  }

  document.querySelectorAll('[data-cta]').forEach(el => {
    el.innerHTML = fmCtaHTML(el.dataset.cta);
  });

  const yearEl = document.getElementById('fm-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', fmInitComponents);
