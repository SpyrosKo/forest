let line = document.querySelectorAll('.line');
let hamburger = document.querySelector('#hamburger');
let link = document.querySelectorAll('.navigation__link');
let body = document.querySelector('#body');

document.querySelector('#hamburger').onclick = function () {
   for (let i = 0; i < link.length; i++) {
      link[i].classList.toggle('toggle-link-color');

      line[i].classList.toggle('medium-toggle-color');
   }
};

document.querySelector('#body').onclick = function () {

   for (let i = 0; i < line.length; i++) {
      // line[i].classList.toggle('medium-toggle-color');

      // line[i].classList.toggle('toggle-color');
   }
};