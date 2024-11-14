// Задание 1 
// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

const checkbox = document.querySelector('.checkbox');
const buttonSubmit = document.querySelector('.button_submit');
const checkStatus = document.querySelector('.check_status');

buttonSubmit.addEventListener('click', function (e) {
    if (!checkbox.checked) {
        checkStatus.textContent = 'Необходимо согласиться с условиями';
        e.preventDefault();
    } else { checkStatus.textContent = ''; }
});

// Задание 2
// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”

const radioEl = document.querySelectorAll('.radio');
const buttonEl = document.querySelector('.button1');
const radioStatus = document.querySelector('.radio_status');
const select = document.querySelector('.select');

// Сообщение при нажатии кнопки Выбрать
// buttonEl.addEventListener('click', function (e) {
//     radioEl.forEach(element => {
//         if(element.checked){radioStatus.textContent = `${element.value} закончился`;};        
//     });
// });

// Сообщение при выборе радиокнопками

select.addEventListener('click', function () {
    radioEl.forEach(element => {
        if(element.checked){radioStatus.textContent = `${element.value} закончился`;};        
    });
});

// Задание 3 
// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”
 
const passField = document.querySelector('.password');
const passButton = document.querySelector('.submit_pass');
const passLabel = document.querySelector('.pass_label');
passButton.addEventListener('click', function () {
    if (passField.value === 'пароль') {
        passField.classList.add('goodPass');
        passField.classList.remove('badPass');     
        passLabel.textContent = '';
    } else { 
        passField.classList.add('badPass');
        passField.classList.remove('goodPass');        
        passLabel.textContent = 'пароль неверный';
    }
});

// Задание 4 
// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода

const inputTitle = document.querySelector('.input_title');
const title = document.querySelector('.title');
inputTitle.addEventListener('input', function (e) {
    title.textContent = inputTitle.value;
});