// 1. Ко всем элементам, имеющим класс dropdown-item, добавьте еще один класс super-dropdown. Используйте методы forEach и querySelectorAll, а также свойство classList у элементов.

const dropdownItems = document.querySelectorAll('.dropdown-item');
console.log(dropdownItems);
dropdownItems.forEach(element => {
    element.classList.add('super-dropdown')
});

// 2. Уэлемента с классом btn необходимо убрать класс btn-secondary, если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const btnItem = document.querySelector('.btn');
(btnItem.classList.contains('btn-secondary')) ? btnItem.classList.remove('btn-secondary') : btnItem.classList.add('btn-secondary'); 

// 3. Необходимо удалить класс dropdown-menu у элемента, у которого присутствует класс menu.

const menuEl = document.querySelectorAll('.menu');
menuEl.forEach(element => {
    element.classList.remove('dropdown-menu')
});

// 4. Используя метод insertAdjacentHTML, добавьте после div с классом dropdown следующую разметку: <a href="#">link</a>.

const dropdownEl = document.querySelectorAll('.dropdown');
dropdownEl[1].insertAdjacentHTML('afterend', '<a href="#">link</a>');

// 5. Уэлемента с id="dropdownMenuButton" замените id на superDropdown.

const menuButtonEl = document.querySelector('#dropdownMenuButton');
menuButtonEl.setAttribute('id', 'superDropdown');
console.log(menuButtonEl);

// 6. Добавьте атрибут data-dd со значением 3 элементу, у которого существует атрибут aria-labelledby, равный dropdownMenuButton, используя dataset.

const ariaEl = document.querySelector('[aria-labelledby = "dropdownMenuButton"]');
ariaEl.dataset.dd = 3;
console.log(ariaEl);

// 7. Удалите атрибут type у элемента с классом dropdown-toggle.

const toggleEl = document.querySelector('.dropdown-toggle');
toggleEl.removeAttribute('type');
console.log(toggleEl);