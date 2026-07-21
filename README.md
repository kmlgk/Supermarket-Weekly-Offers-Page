# FreshMart — Supermarket Weekly Offers HTML Template

A premium, production-ready HTML5 template for supermarkets and grocery brands, built with **Tailwind CSS (CDN)** and **vanilla JavaScript (ES6)**. No Node.js, npm, or build step required — open any `.html` file directly in a browser and it works.

## Features

- 11 fully-built pages: Home 1, Home 2, About, Services, Service Details, Blog, Blog Details, Pricing, Contact, 404, Coming Soon
- Practical, offer-led sections: weekly deals by category (produce, dairy, bakery, snacks, meat, beverages, frozen, household), store timings, loyalty card / membership tiers, branch locator with a stylised map
- Mobile-first, fully responsive (phones, tablets, laptops, large desktops)
- Dark / light mode with `localStorage` persistence, no flash-of-incorrect-theme
- RTL / LTR direction toggle, persisted per visitor
- Sticky glassmorphism header, mega menu (desktop) + accordion menu (mobile)
- Reusable shared components: header, footer, mobile menu, breadcrumb, CTA band, product/deal cards, category cards, testimonial cards, blog cards, branch cards, pricing cards — all rendered from **one** source (`assets/js/components.js` + `assets/js/render.js`), so there is zero duplicated markup across pages
- Animation stack: GSAP + ScrollTrigger, Lenis smooth scroll, Swiper sliders, SplitType text reveal, AOS scroll reveal, CountUp counters, GLightbox lightbox, Isotope filtering, Typed.js, magnetic buttons, animated gradients, SVG-style blob shapes, premium preloader, scroll progress bar, page-transition wipe
- SEO-friendly semantic HTML, meta tags, accessible focus states, skip-to-content link, `aria-label`s throughout
- Lazy-loaded images (`data-src` + `IntersectionObserver`) and CDN-only dependencies for fast loading

## Getting Started

1. Unzip the template.
2. Double-click any page (start with `index.html`) — it opens straight in your browser. An internet connection is required the first time, since fonts, icons and JS libraries load from CDNs.
3. To deploy, upload the whole `template/` folder to any static host (Netlify, Vercel, GitHub Pages, S3, or a normal web server).

## Project Structure

```
template/
├── index.html            Home 1 — grocery deals homepage
├── home-2.html            Home 2 — weekly catalog homepage
├── about.html
├── services.html
├── service-details.html
├── blog.html
├── blog-details.html
├── pricing.html           Loyalty membership plans
├── contact.html           Contact form + branch locator
├── 404.html
├── coming-soon.html
├── assets/
│   ├── css/style.css       Custom styles layered on Tailwind CDN utilities
│   ├── js/
│   │   ├── data.js          Sample deals, categories, branches, blog, pricing data
│   │   ├── components.js    Header, mega menu, mobile menu, footer, breadcrumb, CTA
│   │   ├── theme.js          Dark/light + RTL/LTR manager
│   │   ├── render.js         Reusable card renderers (deal, category, testimonial, blog, branch, pricing)
│   │   ├── countdown.js      Reusable countdown timer
│   │   └── main.js           Preloader, Lenis, GSAP/AOS/Swiper/Isotope/GLightbox/CountUp init
│   ├── vendor/, images/, icons/, fonts/, videos/   (empty — ready for your own assets)
├── documentation/index.html
├── README.md
└── LICENSE.txt
```

## Customizing Content

All dynamic sections (weekly deals, categories, branches, testimonials, blog posts, pricing tiers) are driven by plain JS arrays in `assets/js/data.js`. Edit the arrays and every page that references them updates automatically — no need to touch HTML.

## Customizing Design

- Brand colors: template uses Tailwind's built-in `emerald` / `amber` palette plus CSS variables in `assets/css/style.css` (`--fm-primary`, `--fm-accent`, etc.) — change the HSL values to re-theme instantly in both light and dark mode.
- Fonts: loaded from Google Fonts (`Inter` + `Plus Jakarta Sans`) in the `<head>` of every page; swap the `<link>` and `tailwind.config` `fontFamily` block.
- Every page shares one `tailwind.config` snippet in `<head>` — keep it consistent across pages you duplicate.

## Adding a New Page

1. Duplicate `about.html` as a starting point.
2. Update `<title>`, meta description, canonical link and `data-page` attribute on `<body>` (used to highlight the active nav link).
3. Set `#breadcrumb`'s `data-title` / `data-subtitle` / `data-crumbs` attributes.
4. Add the page to the `FM_NAV` array in `assets/js/components.js` if it should appear in the main menu.

## Third-Party Libraries (CDN)

Tailwind CSS, RemixIcon, GSAP + ScrollTrigger, Lenis, Swiper, SplitType, AOS, Typed.js, CountUp.js, GLightbox, Isotope. All loaded via CDN — see the bottom of any HTML page for exact versions/URLs. Replace with local files in `assets/vendor/` if you need an offline build.

## Support

See `documentation/index.html` for a more detailed component reference.

## License

See `LICENSE.txt`.
