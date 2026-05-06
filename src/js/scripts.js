// ==========================================
// STO iPhone Catalão - JavaScript
// ==========================================

// NAV STUCK
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (scrollY > 60) {
    nav.classList.add('stuck');
  } else {
    nav.classList.remove('stuck');
  }
}, { passive: true });

// MOBILE MENU
function toggleMenu() {
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('mobMenu').classList.toggle('open');
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (document.getElementById('mobMenu').classList.contains('open')) {
        toggleMenu();
      }
    }
  });
});

// MARQUEE ANIMATION
(function() {
  const items = [
    'iPhones Originais',
    'MacBook Pro',
    'AirPods Pro',
    'Apple Watch',
    'Acessórios Apple',
    'Garantia Incluída',
    'Entrega Rápida',
    'Parcelamento Fácil',
    'Grupo VIP',
    'Atendimento Premium',
    'STO iPhone Catalão'
  ];
  
  const track = document.getElementById('mtrack');
  if (!track) return;
  
  const html = items.map(item => `<div class="mitem"><span class="mdot"></span>${item}</div>`).join('');
  track.innerHTML = html + html;
})();

// SCROLL REVEAL ANIMATION
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.rv, .rl, .rr').forEach(el => observer.observe(el));

// CONSOLE LOG
console.log('%c✓ STO iPhone Catalão - Projeto VS Code', 'color: #00b8e6; font-size: 14px; font-weight: bold;');
