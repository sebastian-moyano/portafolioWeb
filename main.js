window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
});


document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("menu-toggle");
  const icon = document.getElementById("icon");
  const menu = document.getElementById("menu");

  let menuOpen = false;

  menuToggle.addEventListener("click", function() {
      menuOpen = !menuOpen;
      menu.classList.toggle("menu-open", menuOpen);
      icon.classList.toggle("open", menuOpen);
  });
});


