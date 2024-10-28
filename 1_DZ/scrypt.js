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

const dataNum50 = document.querySelector('[data-number="50"]');
console.log(dataNum50);

// 5. Выведите содержимое тега title в консоль.

console.log(document.querySelector('title').textContent);

// 6. Получить элемент с классом "card-title" и вывести его родительский узел в консоль

console.log(document.querySelector('.card-title').parentNode);

// 7. Создайте тег <p>, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс card.

const hiTag = document.createElement('p');
hiTag.textContent = 'Привет';
const cardEl = document.querySelector(".card");
cardEl.insertBefore(hiTag, cardEl.firstChild);

// 8. Удалите тег h6 на странице.

const h6El = document.querySelector('h6');
(h6El) ? h6El.remove() : console.log("Тэг не найден");