// Управление стилями

const body = document.querySelector('body');
const divElement = document.createElement('div');
const paragraphElement = document.createElement('p');

divElement.appendChild(paragraphElement);
paragraphElement.textContent = 'Текст параграфа';
body.insertBefore(divElement, body.firstChild);

// paragraphElement.className += 'paragraph';
paragraphElement.setAttribute('class', 'paragraph');

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