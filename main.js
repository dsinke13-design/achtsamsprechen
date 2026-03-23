/* AchtsamSprechen – main.js */

// ─── SCROLL REVEAL ───────────────────────────────────────────────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// ─── NAV SHADOW ON SCROLL ────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav && nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ─── MOBILE MENU ─────────────────────────────────────────────────
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');

function toggleMenu() {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
}

if (hamburger) {
  hamburger.addEventListener('click', toggleMenu);
}

// Close mobile menu on link click
if (mobileMenu) {
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

// ─── CONTACT FORM ────────────────────────────────────────────────
function handleSubmit(e) {
  e.preventDefault();
  const btn     = document.getElementById('submitBtn');
  const btnText = document.getElementById('btnText');
  const success = document.getElementById('successMsg');

  if (btn) {
    btn.disabled = true;
    if (btnText) btnText.textContent = 'Wird gesendet…';
  }

  // Simulate async send (replace with your actual form handler / mailto)
  setTimeout(() => {
    if (btn)     btn.style.display = 'none';
    if (success) success.style.display = 'block';
    e.target.reset();
  }, 900);
}

// Make it globally accessible for inline onsubmit
window.handleSubmit = handleSubmit;
