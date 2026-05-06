// STO iPhone Catalão

// NAV STUCK
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('stuck', scrollY > 60);
}, { passive: true });

// MOBILE MENU
function toggleMenu() {
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('mobMenu').classList.toggle('open');
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const menu = document.getElementById('mobMenu');
    if (menu.classList.contains('open')) toggleMenu();
  });
});

// MARQUEE
(function () {
  const items = [
    'iPhones Originais', 'MacBook Pro', 'AirPods Pro', 'Apple Watch', 'iPad',
    'Garantia de Fábrica', 'Entrega em 24h', 'Parcelamento Fácil',
    'Grupo VIP WhatsApp', 'Atendimento Premium', 'STO iPhone Catalão'
  ];
  const track = document.getElementById('mtrack');
  if (!track) return;
  const html = items.map(i => `<div class="mitem"><span class="mdot"></span>${i}</div>`).join('');
  track.innerHTML = html + html;
})();

// SCROLL REVEAL
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.rv, .rl, .rr').forEach(el => observer.observe(el));

// STAGGER phone cards
document.querySelectorAll('.phone-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 80}ms`;
});

// STAGGER cat cards
document.querySelectorAll('.cat-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 80}ms`;
});
