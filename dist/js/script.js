let line = document.querySelectorAll('.line');
let hamburger = document.querySelector('#hamburger');
let link = document.querySelectorAll('.navigation__link');

// document.querySelector('#hamburger').onclick = function () {
//    for (let i = 0; line.length; i++) {
//       line[i].classList.toggle('toggle-color');
//    }
// };

// document.querySelector('#hamburger').onclick = function () {
//    for (let i = 0; line.length; i++) {
//       line[i].classList.toggle('medium-toggle-color');
//    }
// };


document.querySelector('#hamburger').onclick = function () {
   for (let i = 0; i < link.length; i++) {
      link[i].classList.toggle('toggle-link-color');

      line[i].classList.toggle('medium-toggle-color');

      line[i].classList.toggle('toggle-color');
   }
};