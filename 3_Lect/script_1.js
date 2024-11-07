// Делегирование событий

// Назначение одого обработчика события на множество однотипных нод, например, DOM-элементов списка <li>.
// Вместо получения ссылок на все <li>, перебора их в цикле и назначения каждому слушателя, можно назначить только одного слушателя на родительский элемент <ul>.

// Назначение слушателя в цикле

// const buttonEl = document.querySelector('.button');

// buttonEl.addEventListener('click', function (e) {
//     console.log(e);
// });

const buttonEls = document.querySelectorAll('.button');

buttonEls.forEach(element => {
    element.addEventListener('click', function (e) {
        const target = e.target;
        console.log(target);
    });
});

// Делегирование

const menu = document.querySelector('.menu');

const print = (e) => {
    console.log(e.target, e.currentTarget);
    e.target.style.color = 'blue';
}

menu.addEventListener('click', print);