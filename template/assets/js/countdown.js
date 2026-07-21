/* =========================================================
   FreshMart — reusable countdown timer
   Any element with [data-countdown="ISO_DATE"] gets a live
   D/H/M/S text render. Elements with [data-countdown-box]
   render into child .dd/.hh/.mm/.ss targets instead.
   ========================================================= */

function fmStartCountdowns() {
  const targets = document.querySelectorAll('[data-countdown]');
  if (!targets.length) return;

  function tick() {
    targets.forEach(el => {
      const deadline = new Date(el.dataset.countdown).getTime();
      const now = Date.now();
      let diff = Math.max(0, deadline - now);

      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);

      const box = el.closest('[data-countdown-box]') || el;
      const dd = box.querySelector('.fm-dd');
      const hh = box.querySelector('.fm-hh');
      const mm = box.querySelector('.fm-mm');
      const ss = box.querySelector('.fm-ss');

      if (dd || hh || mm || ss) {
        if (dd) dd.textContent = String(d).padStart(2, '0');
        if (hh) hh.textContent = String(h).padStart(2, '0');
        if (mm) mm.textContent = String(m).padStart(2, '0');
        if (ss) ss.textContent = String(s).padStart(2, '0');
      } else {
        el.textContent = `${String(d).padStart(2,'0')}d ${String(h).padStart(2,'0')}h ${String(m).padStart(2,'0')}m ${String(s).padStart(2,'0')}s`;
      }
    });
  }

  tick();
  setInterval(tick, 1000);
}

document.addEventListener('DOMContentLoaded', fmStartCountdowns);
