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