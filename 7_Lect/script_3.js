// Использование Drag and Drop API

// Для превращения элемента в перетаскиваемый ему устанавливают атрибут draggable=true. Практически всё может быть со включённым перетаскиванием:
// изображения, файлы, ссылкии любая разметка на странице.

// Прослушивание событий перетаскивания 
// Есть ряд событий, к которым можно привязать мониторинг всего процесса перетаскивания. 
// Когда срабатывают эти события:

// 1. dragstart— когда пользователь начал перетаскивать элемент.
// 2. drag — каждые несколько сотен миллисекунд, пока длится перетаскивание элемента или выделение текста. 
// 3. dragenter — когда перетаскиваемый элемент попадает в допустимую цель сброса. 
// 4. dragleave — когда перетаскиваемый элемент покидает допустимую цель сброса. 
// 5. dragover — когда элемент перетаскивается над допустимой целью сброса каждые несколько сотен миллисекунд. 
// 6. drop — когда элемент сбрасывается в допустимую зону сброса. 
// 7. dragend — в момент завершения перетаскивания, например, при отпускании кнопки мыши или при нажатии Escape.

// Чтобы корректно обрабатывать DnD-процесс, нам потребуется: 
// ● исходный элемент (source element) — откуда начинается перетаскивание; 
// ● объект с данными (data payload) — структура, которую мы перетаскиваем; 
// ● целевой элемент (target) — область, в которой мы «ловим» отпускаемый объект. 

// Исходный элемент может быть изображением, списком, ссылкой, файловым объектом, блоком HTML и т. д. Целевой элемент — зона перетаскивания (drop zone) или набор таких зон для приёма данных, которые пользователь пытается «бросить». 
// Не все элементы могут быть целями: например, изображение не может.

// Обработка начала и завершения перетаскивания 
// После того как мы указали для нашего контента атрибуты draggable="true", 
// надо подписаться на событие dragstart, чтобы запустить последовательность DnD для каждого столбца. 
// Этот код установит прозрачность столбца на 40%, когда пользователь начнёт его перетаскивать, а затем вернёт её на 100% по окончании события перетаскивания:

/*
const items = document.querySelectorAll('.container .box');
const handleDragStart = ({ target }) => {
    target.style.opacity = '0.4'
};
const handleDragEnd = ({ target }) => {
    target.style.opacity = '1'
};
items.forEach((item) => {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
});
*/

// Настроим обработчики событий:


// // ● для добавления класса over,когда столбец перетаскивается над областью, занимаемой элементом; 
// // ● для удаления класса при покидании области. 

// // В обработчике dragend мы также убираем классы в конце перетаскивания:

// const items = document.querySelectorAll('.container.box');

// const handleDragStart = ({ target }) => {
//     target.style.opacity = '0.4';
// }

// const handleDragEnd = ({ target }) => {
//     target.style.opacity = '1';
//     items.forEach((item) => {
//         item.classList.remove('over');
//     });
// }

// const handleDragOver = (event) => {
//     if (event.cancelable) { event.preventDefault(); }
//     return false
// }

// const handleDragEnter = ({ target }) => {
//     target.classList.add('over');
// }

// const handleDragLeave = ({ target }) => {
//     target.classList.remove('over');
// }

// items.forEach((item) => {
//     item.addEventListener('dragstart', handleDragStart);
//     item.addEventListener('dragover', handleDragOver);
//     item.addEventListener('dragenter', handleDragEnter);
//     item.addEventListener('dragleave', handleDragLeave);
//     item.addEventListener('dragend', handleDragEnd);
// });

// // Обработка завершения перетаскивания 
// // Чтобы обработать момент, когда пользователь отпускает перетаскиваемый объект над целевым элементом, надо подписаться на событие drop. В обработчике события drop нам потребуется предотвратить поведение браузера по умолчанию, которое обычно представляет собой перенаправление. 
// // Предотвратим это поведение, вызвав event.stopPropagation().

// const handleDrop = (event) => {
//     event.stopPropagation();
//     return false
// }
// items.forEach((item) => {
//     item.addEventListener('dragstart', handleDragStart);
//     item.addEventListener('dragover', handleDragOver);
//     item.addEventListener('dragenter', handleDragEnter);
//     item.addEventListener('dragleave', handleDragLeave);
//     item.addEventListener('dragend', handleDragEnd);
//     item.addEventListener('drop', handleDrop)
// });

document.addEventListener('DOMContentLoaded', (event) => { // при загрузке страницы

    let drugScrEl = 0; // переменная элемента

    function handleDragStart(e) { // сделаем прозрачность элемента при перетаскивании
        this.style.opacity = '0.4';
    }

    function handleDragOver(e) {
        if (event.preventDefault) {
            event.preventDefault(); // остановим включение события (переход), если это ссылка
        }
        return false
    }

    function handleDragEnter(e) { // Пунктир элнменту над которым перетаскиваем
        this.classList.add('over'); // Добавляем класс over элементу над которым перетаскиваем        
    }

    function handleDragLeave(e) {
        this.classList.remove('over'); // Убираем класс over после перетаскивания
    }

    function handleDrop(e) {
        if (e.stopPropagation) { e.stopPropagation() }; // Останавливаем перенаправление браузера
        return false;
    }

    function handleDragEnd(e) {
        this.style.opacity = '1';
        
        items.forEach(function (item) {
            item.classList.remove('over')
        });
    }



    let items = document.querySelectorAll('.box');
    items.forEach(function (item) {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragenter', handleDragEnter);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('dragleave', handleDragLeave);
        item.addEventListener('drop', handleDrop);
        item.addEventListener('dragend', handleDragEnd);
    });
});



