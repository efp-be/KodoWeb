/**
 * Open and close the burger menu on mobile
 */
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  // pas de menu burger sur cette page (ex : legal.html)
  if (!burger || !navLinks) {
    return;
  }

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    burger.classList.toggle('toggle');
    burger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });

  // referme le menu quand on clique sur un lien
  navLinks.addEventListener('click', (e) => {
        if (e.target.closest('a')) {
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        burger.classList.remove('toggle');
        burger.setAttribute('aria-expanded', 'false');
      }
    }
  });
});
