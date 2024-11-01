// Дан блок <div class="block"></div>, 
// внутри него необходимо создать элемент div с классом item, 
// разместить текст “Элемент внутри” и задать стили:

// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)

const blockEl = document.querySelector('.block');
const itemEl = document.createElement('div');
itemEl.className = 'item';
blockEl.appendChild(itemEl);
itemEl.textContent = 'Элемент внутри';
itemEl.style.color = 'blue';
itemEl.style.backgroundColor = '#f8f8f8';
itemEl.style.border = 'solid 1px';
itemEl.style.borderColor = 'black';
itemEl.style.padding = '16px';

itemEl.setAttribute('class', 'item item_1'); 