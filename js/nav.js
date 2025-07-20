// js/nav.js
// Alterna el menú móvil y la animación del icono hamburguesa

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.getElementById('mobileMenu');

  navToggle.addEventListener('click', () => {
    // Mostrar u ocultar el menú móvil
    mobileMenu.classList.toggle('open');
    // Cambiar estado del botón hamburguesa para animación
    navToggle.classList.toggle('open');
  });
});
