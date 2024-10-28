// 1. Найдите элемент по id, используя getElementById, элемент с id равным "super_link" и выведите этот элемент в консоль.

const superLink = document.querySelector('#super_link');
console.log(superLink);

// 2. Внутри всех элементов на странице, которые имеют класс card-link, поменяйте текст внутри элемента на "ссылка".

const cardLink = document.querySelectorAll('.card-link');
cardLink.forEach(element => {
    element.textContent = 'ссылка';
});

// 3. Найдите все элементы на странице с классом card-link, которые лежат в элементе с классом card-body, и выведите полученную коллекцию в консоль.

const linkBodyList = document.querySelectorAll('.card-body .card-link');
console.log(linkBodyList);

// 4. Найдите первый попавшийся элемент на странице, у которого есть атрибут data-number со значением 50, и выведите его в консоль.