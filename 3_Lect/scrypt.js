// Основы событий

// Подписка на событие заключается в добавлении слушателя (обработчика) события. Слушатель — функция или тело функции в виде строки.

const buttonEl = document.querySelector('.button');
let count = 0;

// buttonEl.onclick = function () {
//     console.log('Вы кликнули на кнопку');
//     count++;
//     console.log(`Кликов на кнопку: ${count}`);
// }

// Подписка на событие при помощи addEventListener()

buttonEl.addEventListener('click', function (e) {
    console.log('Вы кликнули');
    count++;
    console.log(`Кликов на кнопку: ${count}`);
});

// В addEventListener() можно добавлять и другие функции (обработчики события):

const hi = function () { console.log('Привет!'); }
buttonEl.addEventListener('click', hi);

// Для удаления обработчика используется опция {once:true} или метод removeEventListener()

const onceMethod = () => { console.log('Будет вызван только один раз с включённой опцией "once"') };

buttonEl.addEventListener('click', onceMethod, { once: true });

const removeMethod = () => {
    console.log('Будет вызван один раз и удалён removeEventListener()')
    buttonEl.removeEventListener('click', removeMethod);
};

buttonEl.addEventListener('click', removeMethod);



