/* =========================================================
   FreshMart — Dark/Light mode + RTL direction manager
   The critical "apply early" step also runs inline in <head>
   of every page (see fm-theme-init snippet) to avoid FOUC.
   This file wires up the toggle buttons once components.js
   has injected the header/mobile menu into the DOM.
   ========================================================= */

const FmTheme = {
  KEY_THEME: 'fm-theme',
  KEY_DIR: 'fm-dir',

  getTheme() {
    return localStorage.getItem(this.KEY_THEME) ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  },
  getDir() {
    return localStorage.getItem(this.KEY_DIR) || 'ltr';
  },
  setTheme(mode) {
    localStorage.setItem(this.KEY_THEME, mode);
    document.documentElement.classList.toggle('dark', mode === 'dark');
  },
  setDir(dir) {
    localStorage.setItem(this.KEY_DIR, dir);
    document.documentElement.setAttribute('dir', dir);
    // Note: `lang` intentionally stays as authored (e.g. "en") — this
    // toggle only mirrors the layout for RTL languages, it doesn't
    // translate content. Flipping `lang` to "ar" while the text is
    // still English is what triggers Chrome's "Translate this page?"
    // popup the moment RTL is switched on.
  },
  toggleTheme() {
    this.setTheme(this.getTheme() === 'dark' ? 'light' : 'dark');
  },
  toggleDir() {
    this.setDir(this.getDir() === 'rtl' ? 'ltr' : 'rtl');
  },
  init() {
    this.setTheme(this.getTheme());
    this.setDir(this.getDir());
  },
};

document.addEventListener('DOMContentLoaded', () => {
  FmTheme.init();

  const wire = (id, fn) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', fn);
  };
  wire('theme-toggle', () => FmTheme.toggleTheme());
  wire('mobile-theme-toggle', () => FmTheme.toggleTheme());
  wire('rtl-toggle', () => FmTheme.toggleDir());
  wire('mobile-rtl-toggle', () => FmTheme.toggleDir());
});
