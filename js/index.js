let hamburger = document.querySelector('#hamburger');
let sideNav = document.querySelector('#mySidenav');


hamburger.addEventListener('click', function(event) {
  event.preventDefault();
  hamburger.classList.toggle('no-hamburger');
  sideNav.classList.toggle('sidenav--open');
});
