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
console.log(liElOne.nextElementSibling.nextElementSibling); // <li class="menu__list"><a href="#" class="menu__link">Link-3</a></li>
console.log(liElOne.nextElementSibling.nextElementSibling.previousElementSibling); // <li class="menu__list"><a href="#" class="menu__link">Link-2</a></li>
console.log(liElOne.previousElementSibling); // null
console.log(liElOne.parentElement.lastElementChild.previousElementSibling); // <li class="menu__list"><a href="#" class="menu__link">Link-3</a></li>

// Для родительского элемента parentNode и parentElement практически всегда возвращают один и тот же элемент, за исключением случаев, когда parentNode элемента — не DOM Element. В таком случае parentElement возвращает null.

document.body.parentNode // Элемент <html> 
document.body.parentElement // Элемент <html> 
document.documentElement.parentNode // Нода document 
document.documentElement.parentElement // null 
(document.documentElement.parentNode === document) // true 
(document.documentElement.parentElement === document) // false








