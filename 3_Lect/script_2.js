// Примеры с разными событиями

const imgs = document.querySelectorAll('img');
imgs.forEach(element => {
    element.style.height = '200px';
});

document.addEventListener('DOMContentLoaded', function (e) {
    console.log('DOMContentLoaded');
}); // возникает при загрузке структуры страницы

window.addEventListener('load', function (e) {
    console.log('Всё загрузилось');
}); // возникает при загрузке всего контента страницы

const buttonEl = document.querySelector('.button');
buttonEl.addEventListener('mouseover', function (e) {
    console.log('Навёл - нажимай!');
    //alert('Навёл - нажимай!');
}, { once: true }); // {once:true} - обработка события только один раз при наведении на кнопку

buttonEl.addEventListener('mouseleave', function (e) {
    console.log('Не уходи - нажимай!');
    //alert('Навёл - нажимай!');
});

// Обработка нажатия кнопок на клавиатуре

// window.addEventListener('keydown', function (e) {
//     console.log(e); // KeyboardEvent {isTrusted: true, key: 'ф', code: 'KeyA', location: 0, ctrlKey: false, …}
//     console.log(e.key); // ф
// }); 

// Остановка перехода по ссылке

const link1 = document.querySelector('.link');
link1.addEventListener('click', function (e) {
    e.preventDefault(); // Останавливаем переход
    alert('ВЫ УВЕРЕННЫ ?');
}, { once: true });

// Копирование
document.addEventListener('copy', function (e) {
    const copyText = document.getSelection().toString(); // сохраняет скопированный текст
    console.log(copyText);
});

// Изменение размера

window.addEventListener('resize', function (e) {
    console.log('Изменён размер окна браузера');
});

// Ввод значений

const inputEl = document.querySelector('.input_1');

inputEl.addEventListener('input', function (e) {
    console.log(e.target.value);
    (Number(e.target.value) === 123) ? console.log('Верно') : console.log('НЕ верно');
});

// Подтверждение

const inputText = document.querySelector('.input');
const formRun = document.querySelector('form');
const errorEl = document.querySelector('.error');

formRun.addEventListener('submit', function (e) {
    if (inputText.value==='') {
        e.preventDefault();
        errorEl.textContent = 'Поле не должно быть пустым';
    }
});