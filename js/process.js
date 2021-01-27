// Hamburger menu trigger
  
let hamBtn = document.querySelector('#mobile-menu-icon');
let mobileMenu = document.querySelector('.menu-mobile');


hamBtn.addEventListener('click', function(e) {
  hamBtn.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  e.preventDefault();

});