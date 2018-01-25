let hamburger = document.querySelector('#hamburger');
let mySideNav = document.querySelector('#mySidenav');

hamburger.addEventListener('click', function(event) {
  event.preventDefault();
  hamburger.classList.toggle('no-hamburger');
  mySideNav.classList.toggle('sidenav--open');
});
