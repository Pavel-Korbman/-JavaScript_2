/*Дан тег <div class="content"></div> 
Создайте новый элемент p
Добавьте в него текст “Новый текстовый элемент”
Добавьте созданный элемент внутри <div class="content"></div>
Удалите добавленный узел */

const contentEl = document.querySelector('.content');
// const pEl = document.createElement('p');
// pEl.textContent = 'Новый текстовый элемент';
// contentEl.appendChild(pEl);
// pEl.remove();

/* Создать элемент button, добавить в блок <div class="content"></div>
При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку */

const buttonEl = document.createElement('button');
buttonEl.textContent = 'счётчик кликов';
contentEl.appendChild(buttonEl);
let i = 1;
function clicksCount() {
console.log('Кликов: ' + i++);    
}

// buttonEl.onclick = clicksCount;
// buttonEl.addEventListener('click', clickCount);
buttonEl.addEventListener('click', function(){console.log('Кликов: ' + i++);});

/*Дан тег <div class="content"></div> 
Создайте с помощью javascript новый элемент button
Добавьте текст для кнопки “Отправить”
При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
*/

const sendEl = document.createElement('button');
sendEl.textContent = 'Отправить';
contentEl.appendChild(sendEl);
sendEl.onclick = function (){sendEl.textContent = 'Текст отправлен';}

