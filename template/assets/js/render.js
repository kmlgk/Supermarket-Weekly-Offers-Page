/* =========================================================
   FreshMart — reusable data-driven UI card renderers
   Deal cards, category cards, testimonials, blog cards,
   branch cards and stat counters — used across many pages
   so markup lives in exactly one place.
   ========================================================= */

const FmRender = {
  starIcons(rating) {
    const full = Math.round(rating);
    return Array.from({ length: 5 }, (_, i) =>
      `<i class="ri-star-${i < full ? 'fill text-amber-400' : 'line text-amber-400/40'}"></i>`
    ).join('');
  },

  dealCard(d, isotopeSized) {
    const sizing = isotopeSized ? 'w-full sm:w-1/2 lg:w-1/4 p-3' : '';
    return `
    <article class="fm-card fm-isotope-item ${d.cat} ${sizing}" data-cat="${d.cat}" data-aos="fade-up">
      <div class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[hsl(var(--fm-border))] bg-[hsl(var(--fm-surface))] p-5">
        ${d.badge ? `<span class="absolute left-4 top-4 z-10 rounded-full bg-amber-400 px-3 py-1 text-[11px] font-bold text-emerald-950">${d.badge}</span>` : ''}
        <span class="fm-ribbon absolute -right-1 -top-1 z-10 bg-rose-500 px-4 py-2 text-xs font-extrabold text-white">-${d.discount}%</span>
        <div class="relative mb-4 flex h-36 items-center justify-center rounded-xl bg-[hsl(var(--fm-surface-alt))]">
          <i class="${d.icon} text-6xl text-emerald-600/70 transition-transform duration-500 group-hover:scale-110"></i>
        </div>
        <p class="text-xs font-semibold uppercase tracking-wide text-emerald-600">${d.catLabel}</p>
        <h3 class="mt-1 font-display text-base font-bold leading-snug">${d.name}</h3>
        <p class="mt-1 text-xs text-[hsl(var(--fm-ink))]/55">${d.unit}</p>
        <div class="mt-2 flex items-center gap-1 text-xs">${this.starIcons(d.rating)} <span class="ml-1 text-[hsl(var(--fm-ink))]/50">(${d.rating})</span></div>
        <div class="mt-4 flex items-center justify-between">
          <div class="flex items-baseline gap-2">
            <span class="font-display text-lg font-extrabold text-emerald-600">$${d.price.toFixed(2)}</span>
            <span class="text-sm text-[hsl(var(--fm-ink))]/40 line-through">$${d.oldPrice.toFixed(2)}</span>
          </div>
          <button aria-label="Add ${d.name} to cart" class="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white transition hover:scale-110 hover:bg-emerald-700">
            <i class="ri-shopping-basket-2-line"></i>
          </button>
        </div>
      </div>
    </article>`;
  },

  categoryCard(c) {
    return `
    <a href="index.html#weekly-offers" data-cat="${c.id}" class="fm-cat-link fm-card group flex flex-col items-center gap-3 rounded-2xl border border-[hsl(var(--fm-border))] bg-[hsl(var(--fm-surface))] p-6 text-center" data-aos="zoom-in">
      <span class="flex h-16 w-16 items-center justify-center rounded-2xl bg-${c.color}-500/10 text-${c.color}-600 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 dark:text-${c.color}-400">
        <i class="${c.icon} text-3xl"></i>
      </span>
      <span class="font-display text-sm font-bold">${c.name}</span>
      <span class="text-xs text-[hsl(var(--fm-ink))]/50">${c.count} deals</span>
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
          <p class="text-xs text-[hsl(var(--fm-ink))]/50">${t.role}</p>
        </div>
      </div>
    </div>`;
  },

  blogCard(p) {
    return `
    <article class="fm-card group overflow-hidden rounded-2xl border border-[hsl(var(--fm-border))] bg-[hsl(var(--fm-surface))]" data-aos="fade-up">
      <a href="blog-details.html" class="relative block h-48 overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-700">
        <span class="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-emerald-700">${p.category}</span>
        <i class="ri-image-2-line absolute inset-0 m-auto flex h-full w-full items-center justify-center text-6xl text-white/25"></i>
      </a>
      <div class="p-6">
        <div class="flex items-center gap-3 text-xs text-[hsl(var(--fm-ink))]/50">
          <span><i class="ri-calendar-line"></i> ${p.date}</span>
          <span><i class="ri-time-line"></i> ${p.readTime}</span>
        </div>
        <h3 class="mt-3 font-display text-lg font-bold leading-snug"><a href="blog-details.html" class="hover:text-emerald-600">${p.title}</a></h3>
        <p class="mt-2 text-sm text-[hsl(var(--fm-ink))]/60">${p.excerpt}</p>
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
      <p class="mt-1 text-sm text-[hsl(var(--fm-ink))]/55">${p.tagline}</p>
      <div class="mt-5 flex items-baseline gap-1">
        <span class="font-display text-4xl font-extrabold">${p.price === 0 ? 'Free' : '$' + p.price}</span>
        <span class="text-sm text-[hsl(var(--fm-ink))]/50">${p.price === 0 ? '' : p.period}</span>
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
  },
};
