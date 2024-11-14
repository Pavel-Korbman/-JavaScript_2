// Задачи: 

// 1. При изменении значения в <input> с id="from", значение, содержащееся в нем, должно моментально отображаться в <span>. 
// - Это значит, что при каждом изменении текста в инпуте, текст в <span> должен обновляться соответственно. 

// 2. При клике на кнопку с классом messageBtn необходимо выполнить следующие действия для элемента с классом message: 
// - Добавить два класса: animate_animated и animate_fadeInLeftBig. 
// - Установить стиль visibility в значение 'visible'. 

// 3. При отправке формы проверьте, заполнены ли все поля. 
// - Если какое-либо поле не заполнено, форма не должна отправляться. 
// - Незаполненные поля должны быть подсвечены (добавлен класс error). 
// - Как только пользователь начинает заполнять поле, выполните проверку: 
// ■ Если поле пустое, подсветите его (добавьте класс error). 
// ■ Если поле заполнено, уберите подсветку (удалите класс error).

const inText = document.querySelector('#from');
const outText = document.querySelector('span');
inText.addEventListener('input', function () {
    outText.textContent = inText.value;
});

// const messageBtn = document.querySelector('.messageBtn');
// const messageBlock = document.querySelector('.message');
// messageBtn.addEventListener('click', function (e) {
//     messageBlock.classList.add('animate_animated,animate_fadeInLeftBig');    
//     messageBlock.style.visibility = 'visible';
// });
const messageBtn = document.querySelector('.messageBtn'); const message = document.querySelector('.message'); 
messageBtn.addEventListener('click', () => {
    message.classList.add('animate_animated', 'animate_fadeInLeftBig');
    message.style.visibility = 'visible';
});
const form = document.querySelector('form');
const inputEls = document.querySelectorAll('.form-control');
let err = false;
form.addEventListener('submit', function (e) {
    inputEls.forEach(element => {
        if (element.value ==='') {
            element.classList.add('error');
            err = true;
            e.preventDefault();
        }         
    });
    if (err){e.preventDefault();}; 
});

form.addEventListener('input', function (e) {
    inputEls.forEach(element => {
        if (element.value ==='') {
            element.classList.add('error');            
        } else {element.classList.remove('error');}  
    });
});
