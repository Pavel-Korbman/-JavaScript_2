// Управление стилями

const body = document.querySelector('body');
const divElement = document.createElement('div');
const paragraphElement = document.createElement('p');

divElement.appendChild(paragraphElement);
paragraphElement.textContent = 'Текст параграфа';
body.insertBefore(divElement, body.firstChild);


// Добавляем инлайн-стили

// paragraphElement.style.color = 'white';
// paragraphElement.style.backgroundColor = 'black';
// paragraphElement.style.padding = '10px';
// paragraphElement.style.width = '250px';
// paragraphElement.style.textAlign = 'center';

// Добавляем стили в head
/* 
<style>
.paragraph {
    color: 'white';
    background-color:'black';
    padding:10px;
    width: 250px;
    text-align: center;
}
</style> */

// Добавляем класс к тегу параграф

// paragraphElement.className += 'paragraph';
paragraphElement.setAttribute('class', 'paragraph');

// Ещё пример

const content = document.querySelector('.content');
const titleEl = document.createElement('h1');
titleEl.textContent = 'Заголовок';
titleEl.setAttribute('class', 'heading');
// content.insertBefore(titleEl, content.firstChild);
content.appendChild(titleEl);

const imgEl = document.createElement('img');
imgEl.setAttribute('class', 'img1');
imgEl.src = 'img/2.jpg';
imgEl.setAttribute('alt', 'фото-1');
imgEl.style.width = '50vw';
content.appendChild(imgEl);
