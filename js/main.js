const hamburguer = document.getElementById('hamburguer');
const navLinks = document.getElementById('nav-links');

hamburguer.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});