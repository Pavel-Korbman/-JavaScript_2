"use strict";
document.addEventListener('DOMContentLoaded', () => {
    console.log('все теги прогрузились');
});

window.addEventListener('load', () => {
    console.log('страница загрузилась');
});

document.body.addEventListener('click', (event) => {
    const target = event.target;
    const tagName = target.tagName.toLowerCase();
    const hasSuperClass = target.classList.contains('super_element');

    if (hasSuperClass) {
        console.log(`Класс "super_element" присутствует в элементе "${tagName}".`);
    } else {
        console.log(`Класс "super_element" отсутствует в элементе "${tagName}".`);
    }
});

const textarea = document.querySelector('textarea');
textarea.addEventListener('mouseover', () => {
    console.log('Вы навели на textarea.');
});

const ulElement = document.querySelector('ul');
ulElement.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') { console.log(event.target.textContent); }
});

const liElements = document.querySelectorAll('ul li'); liElements.forEach((li, index) => {
    if (index % 2 === 1) {
        li.style.backgroundColor = 'lightgrey';
    }
});