let line = document.querySelectorAll('.line');
let hamburger = document.querySelector('#hamburger');

document.querySelector('#hamburger').onclick = function () {
   for (let i = 0; line.length; i++) {
      line[i].classList.toggle('toggle-color');
   }
};