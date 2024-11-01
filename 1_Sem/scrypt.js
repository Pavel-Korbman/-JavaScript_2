// Присвоение переменной значений из тэгов с querySelector, querySelectorAll

// const heading = document.querySelector('.title');
// const text = document.querySelectorAll('.text');
// // for (const element of text) {
// //     console.log(element);
// // }
// text.forEach(element => {
//     console.log(element);
// });
// //console.log(heading);
// //console.log(text);

// Присвоение переменной значений из тэгов с getElementById, getElementsByClassName, getElementsByTagName

// const heading_1 = document.getElementById('subTitle');
// const heading_2 = document.querySelector('#subTitle');
// const list_1 = document.getElementsByClassName('list');
// const list_QS = document.querySelectorAll('.list');
// const list_TN = document.getElementsByTagName('li');
// // console.log(heading_1);
// // console.log(heading_2);
// console.log(list_1);
// console.log(list_QS);
// console.log(list_TN);

// heading_1.textContent = 'Заголовок сайта';

// Создание элементов createElement

// Добавление элементов в HTML

const titlesElements = document.querySelector('.titles');

const newElement = document.createElement('h3');
newElement.textContent = 'Новый подзаголовок';

titlesElements.appendChild(newElement);

// Добавление текста к элементу

// const newText = document.createTextNode(' (Дополнительный текст подзаголовка)');
// newElement.appendChild(newText);

newElement.appendChild(document.createTextNode(' (Дополнительный текст подзаголовка)'));

// Удаление элемента

const oldHeading = document.querySelector('#subTitle');
oldHeading.remove();

// Клонирование элемента

// Node.cloneNode(); //- без дочерних узлов
// Node.cloneNode(true); //- c дочерними узлами

// Замена элемента

// parentNode.replaceChild(newChild, oldChild);

// const divElement = document.createElement('div'); 
// const paragraphElement = document.createElement('p'); 
// divElement.appendChild(paragraphElement);

// const spanElement = document.createElement('span'); 
// const strongElement = document.createElement('strong'); 
// paragraphElement.replaceWith(spanElement, strongElement);


// Привязка к клику

const buttonElement = document.querySelector('.btn');
const textCont = document.querySelector('.content');
const photoEl = document.querySelector('.product__img');

const textEl = document.createElement('p');
textEl.textContent = ' Тут любой текст и его много';

photoEl.onclick = function() {
    photoEl.src = 'img/2.jpg';
}

buttonElement.onclick = function() {    
    buttonElement.textContent = 'Товар в корзине';
    textCont.appendChild(textEl);    
}



