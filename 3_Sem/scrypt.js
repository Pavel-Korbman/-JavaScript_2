// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

/* window.addEventListener('load', function (e) {
   console.log('страница загрузилась');
});

const buttonEl = document.querySelector('.button1');
buttonEl.onclick = () => {console.log('событие onclick');};
buttonEl.addEventListener('mouseover', function (e) {
   console.log('событие addEventListener');
}); */

// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно )
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”

const buttonEls = document.querySelector('.buttons');
buttonEls.addEventListener('click', function (e) {
    console.log(e.target);
});

const buttonEl2 = document.querySelector('.button2');
let count = 1;
// buttonEl2.onclick = () => {console.log(`Кликов: ${count++}`);};
buttonEl2.addEventListener('click', function (e) {
    console.log(`Кликов: ${count++}`);
});

const buttonEl3 = document.querySelector('.button3');
buttonEl3.addEventListener('click', function (e) {
    e.target.textContent = 'Вы нажали на эту кнопку';
});

// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

const buttonEl4 = document.querySelector('.button4');
const title = document.createElement('h1');
title.className = 'title';
buttonEl4.parentNode.insertBefore(title, buttonEl4.nextSibling);
buttonEl4.addEventListener('click', function (e) {
    if (e.target.textContent === 'Создать заголовок') {
        title.textContent = 'Новый заголовок';
        e.target.textContent = 'Удалить заголовок'
    } else {
        title.textContent = '';
        e.target.textContent = 'Создать заголовок'
    }
});

const buttonEl5 = document.querySelector('.button5');

buttonEl5.addEventListener('mouseover', function (e) {
    console.log('Вы навели на данную кнопку');
});
buttonEl5.addEventListener('mouseout', function (e) {
    console.log('Наведения на кнопку больше нет');
});

// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”

const buttonEl6 = document.querySelector('.button6');
const liElFirst = document.querySelector('.liEl');
buttonEl6.addEventListener('click', function (e) {
    const liEl = document.createElement('li');
    liEl.textContent = 'Новый элемент списка';
    liElFirst.parentNode.insertBefore(liEl, liElFirst);
});

const buttonEl7 = document.querySelector('.button7');
buttonEl7.addEventListener('click', function (e) {  
    liElFirst.parentNode.firstChild.remove();
});

const buttonEl8 = document.querySelector('.button8');
buttonEl8.addEventListener('click', function (e) {  
    buttonEl8.classList.add('click');
});

// Дан тег <div class="content"></div> 
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

const content = document.querySelector('.content');
const buttonEl9 = document.createElement('button');
buttonEl9.textContent = 'Отправить';
content.insertAdjacentElement("afterbegin", buttonEl9);

buttonEl9.addEventListener('click', function (e) {  
    buttonEl9.textContent = 'Текст отправлен';
});
