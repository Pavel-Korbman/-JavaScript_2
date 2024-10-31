const liElOne = document.querySelector('.menu__list');
const linkEl = document.querySelector('.menu__link');
const menuEl = document.querySelector('.menu');

// console.log(liElOne); // <li class="menu__list"><a href="#" class="menu__link">Link-1</a></li>
// console.log(liElOne.lastElementChild); // <a href="#" class="menu__link">Link-1</a>
// console.log(liElOne.lastChild); // <a href="#" class="menu__link">Link-1</a>

console.log(liElOne.parentElement.lastElementChild); // <li class="menu__list"><a href="#" class="menu__link">Link-4</a></li> - лучший метод
console.log(liElOne.parentElement.lastChild); // #text

console.log(liElOne.parentElement.firstElementChild); // <li class="menu__list"><a href="#" class="menu__link">Link-1</a></li>

console.log(liElOne.nextElementSibling); // <li class="menu__list"><a href="#" class="menu__link">Link-2</a></li>




