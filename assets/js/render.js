/* =========================================================
   FreshMart — reusable data-driven UI card renderers
   Deal cards, category cards, testimonials, blog cards,
   branch cards and stat counters — used across many pages
   so markup lives in exactly one place.
   ========================================================= */

const FmRender = {
  starIcons(rating) {
    const full = Math.round(rating);
    // amber-600, not amber-400: amber-400 against a white/light card only
    // reaches ~2:1 contrast (fails WCAG's 3:1 minimum for meaningful
    // icons); amber-600 clears it while still reading as gold.
    return Array.from({ length: 5 }, (_, i) =>
      `<i class="ri-star-${i < full ? 'fill text-amber-600' : 'line text-amber-600/40'}"></i>`
    ).join('');
  },

  dealCard(d, isotopeSized) {
    const sizing = isotopeSized ? 'w-full sm:w-1/2 lg:w-1/4 p-3' : '';
    const cat = FM_CATEGORIES.find(c => c.id === d.cat);
    const img = cat ? cat.img : '';
    return `
    <article class="fm-card fm-isotope-item ${d.cat} ${sizing}" data-cat="${d.cat}" data-aos="fade-up">
      <div class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[hsl(var(--fm-border))] bg-[hsl(var(--fm-surface))] p-5">
        ${d.badge ? `<span class="absolute left-4 top-4 z-10 rounded-full bg-amber-400 px-3 py-1 text-[11px] font-bold text-emerald-950">${d.badge}</span>` : ''}
        <span class="fm-ribbon absolute -right-1 -top-1 z-10 bg-rose-500 px-4 py-2 text-xs font-extrabold text-white">-${d.discount}%</span>
        <div class="relative mb-4 h-36 overflow-hidden rounded-xl bg-[hsl(var(--fm-surface-alt))]">
          <img data-src="${img}" alt="${d.name}" width="300" height="200" loading="lazy" decoding="async" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <span class="absolute bottom-2 right-2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-emerald-700 shadow-md">
            <i class="${d.icon} text-base"></i>
          </span>
        </div>
        <p class="text-xs font-semibold uppercase tracking-wide text-emerald-600">${d.catLabel}</p>
        <h3 class="mt-1 font-display text-base font-bold leading-snug">${d.name}</h3>
        <p class="mt-1 text-xs text-[hsl(var(--fm-ink))]/65">${d.unit}</p>
        <div class="mt-2 flex items-center gap-1 text-xs">${this.starIcons(d.rating)} <span class="ml-1 text-[hsl(var(--fm-ink))]/65">(${d.rating})</span></div>
        <div class="mt-4 flex items-center justify-between">
          <div class="flex items-baseline gap-2">
            <span class="font-display text-lg font-extrabold text-emerald-600">$${d.price.toFixed(2)}</span>
            <span class="text-sm text-[hsl(var(--fm-ink))]/65 line-through">$${d.oldPrice.toFixed(2)}</span>
          </div>
          <button aria-label="Add ${d.name} to cart" class="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white transition hover:scale-110 hover:bg-emerald-700">
            <i class="ri-shopping-basket-2-line"></i>
          </button>
        </div>
      </div>
    </article>`;
  },

  // Bento-style category tile: full-bleed photo, gradient scrim, name
  // overlaid at the bottom. `i` is the map index Array.map() passes
  // automatically (categoryCard is handed to FmRender.mount()/Array.map
  // unwrapped) — the first category renders as a larger 2x2 "hero" tile
  // so the grid reads as an intentional bento layout, not a plain
  // uniform grid of equal boxes.
  categoryCard(c, i) {
    const featured = i === 0;
    return `
    <a href="index.html#weekly-offers" data-cat="${c.id}" class="fm-cat-link fm-card group relative block overflow-hidden rounded-2xl shadow-sm ${featured ? 'col-span-2 row-span-2' : ''}" data-aos="zoom-in">
      <img data-src="${c.img}" alt="${c.name}" width="${featured ? 500 : 300}" height="${featured ? 500 : 300}" loading="lazy" decoding="async" class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-500 group-hover:from-black/90"></div>
      <span class="absolute right-3 top-3 flex ${featured ? 'h-11 w-11' : 'h-9 w-9'} items-center justify-center rounded-full bg-${c.color}-600 text-white shadow-md transition-transform duration-500 group-hover:rotate-12">
        <i class="${c.icon} ${featured ? 'text-lg' : 'text-sm'}"></i>
      </span>
      <span class="absolute inset-x-0 bottom-0 p-4">
        <span class="block font-display ${featured ? 'text-xl' : 'text-sm'} font-bold text-white">${c.name}</span>
        <span class="block text-xs text-white/75">${c.count} deals</span>
      </span>
    </a>`;
  },

  testimonialCard(t) {
    return `
    <div class="fm-card h-full rounded-2xl border border-[hsl(var(--fm-border))] bg-[hsl(var(--fm-surface))] p-7">
      <div class="mb-4 flex items-center gap-1">${this.starIcons(t.rating)}</div>
      <p class="text-sm leading-relaxed text-[hsl(var(--fm-ink))]/75">&ldquo;${t.quote}&rdquo;</p>
      <div class="mt-6 flex items-center gap-3">
        <span class="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${t.avatarBg} font-display text-sm font-bold text-white">${t.name.split(' ').map(n=>n[0]).join('')}</span>
        <div>
          <p class="font-display text-sm font-bold">${t.name}</p>
          <p class="text-xs text-[hsl(var(--fm-ink))]/65">${t.role}</p>
        </div>
      </div>
    </div>`;
  },

  blogCard(p) {
    return `
    <article class="fm-card group overflow-hidden rounded-2xl border border-[hsl(var(--fm-border))] bg-[hsl(var(--fm-surface))]" data-aos="fade-up">
      <a href="blog-details.html" class="relative block h-48 overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-700">
        <span class="absolute left-4 top-4 z-10 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-emerald-700">${p.category}</span>
        <img data-src="${p.img}" alt="${p.title}" width="600" height="400" loading="lazy" decoding="async" class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
      </a>
      <div class="p-6">
        <div class="flex items-center gap-3 text-xs text-[hsl(var(--fm-ink))]/65">
          <span><i class="ri-calendar-line"></i> ${p.date}</span>
          <span><i class="ri-time-line"></i> ${p.readTime}</span>
        </div>
        <h3 class="mt-3 font-display text-lg font-bold leading-snug"><a href="blog-details.html" class="hover:text-emerald-600">${p.title}</a></h3>
        <p class="mt-2 text-sm text-[hsl(var(--fm-ink))]/65">${p.excerpt}</p>
        <a href="blog-details.html" class="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 group-hover:gap-2.5 transition-all">Read Article <i class="ri-arrow-right-line"></i></a>
      </div>
    </article>`;
  },

  branchCard(b) {
    const statusColor = b.status === 'open' ? 'emerald' : 'rose';
    return `
    <div class="fm-card rounded-2xl border border-[hsl(var(--fm-border))] bg-[hsl(var(--fm-surface))] p-6" data-aos="fade-up">
      <div class="flex items-start justify-between gap-3">
        <h3 class="font-display text-base font-bold">${b.name}</h3>
        <span class="flex items-center gap-1.5 rounded-full bg-${statusColor}-500/10 px-2.5 py-1 text-[11px] font-bold text-${statusColor}-600"><span class="h-1.5 w-1.5 rounded-full bg-${statusColor}-500"></span>${b.status === 'open' ? 'Open Now' : 'Closed'}</span>
      </div>
      <ul class="mt-4 space-y-2 text-sm text-[hsl(var(--fm-ink))]/65">
        <li class="flex items-start gap-2"><i class="ri-map-pin-2-line mt-0.5 text-emerald-600"></i>${b.address}</li>
        <li class="flex items-start gap-2"><i class="ri-time-line mt-0.5 text-emerald-600"></i>${b.hours}</li>
        <li class="flex items-start gap-2"><i class="ri-phone-line mt-0.5 text-emerald-600"></i>${b.phone}</li>
        <li class="flex items-start gap-2"><i class="ri-route-line mt-0.5 text-emerald-600"></i>${b.distance} away</li>
      </ul>
      <a href="#" class="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600">Get Directions <i class="ri-arrow-right-line"></i></a>
    </div>`;
  },

  pricingCard(p) {
    return `
    <div class="fm-card relative flex h-full flex-col rounded-3xl border ${p.featured ? 'border-emerald-500 shadow-2xl shadow-emerald-600/20' : 'border-[hsl(var(--fm-border))]'} bg-[hsl(var(--fm-surface))] p-8" data-aos="fade-up">
      ${p.featured ? '<span class="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-1 text-xs font-bold text-emerald-950">Most Popular</span>' : ''}
      <h3 class="font-display text-lg font-bold">${p.name}</h3>
      <p class="mt-1 text-sm text-[hsl(var(--fm-ink))]/65">${p.tagline}</p>
      <div class="mt-5 flex items-baseline gap-1">
        <span class="font-display text-4xl font-extrabold">${p.price === 0 ? 'Free' : '$' + p.price}</span>
        <span class="text-sm text-[hsl(var(--fm-ink))]/65">${p.price === 0 ? '' : p.period}</span>
      </div>
      <ul class="mt-6 flex-1 space-y-3 text-sm">
        ${p.features.map(f => `<li class="flex items-start gap-2.5"><i class="ri-checkbox-circle-fill mt-0.5 text-emerald-500"></i>${f}</li>`).join('')}
      </ul>
      <a href="contact.html" class="fm-btn relative mt-8 flex items-center justify-center rounded-full ${p.featured ? 'bg-emerald-600 text-white' : 'border border-[hsl(var(--fm-border))]'} py-3 text-sm font-bold">Choose ${p.name}</a>
    </div>`;
  },

  mount(containerId, items, fn) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = items.map(fn.bind(this)).join('');
    // Stagger each card's AOS reveal so grids cascade in one-by-one
    // instead of every item appearing at the same instant. Cycles
    // modulo 4 (roughly one grid row) so long lists don't end up with
    // an absurdly long tail delay before the last items reveal.
    Array.from(el.children).forEach((child, i) => {
      if (child.hasAttribute('data-aos') && !child.hasAttribute('data-aos-delay')) {
        child.setAttribute('data-aos-delay', String((i % 4) * 90));
      }
    });
  },
};
