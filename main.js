window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
});




document.addEventListener('DOMContentLoaded', function() {
    var navbarToggle = document.getElementById('navbarToggle');
    var navbarMenu = document.getElementById('navbarMenu');
  
    navbarToggle.addEventListener('click', function() {
      navbarMenu.classList.toggle('active');
    });
  });
  

