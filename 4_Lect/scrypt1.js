// Генерация событий, пользовательские события

// Генерация встроенных событий
// Мы можем сами создавать уникальные пользовательские и встроенные события на DOM-элементе.
// Объект события создаётся с применением конструктора Event или одного из конструкторов из иерархии классов событий например mouseEvent, HTMLElement.click(), HTMLElement.focus() ...

const eventOptions = {bubbles: true, cancelable: true}; // набор опций: bubbles: true - событие распространяется к родительскому эл и cancelable: true - событие распространяется к дочернему эл
const eClick = new Event('click', eventOptions); // используем конструктор Event
eClick.view = window;

const mouseEvent = new MouseEvent('click', { // используем конструктор MouseEvent
...eventOptions, // Оператор расширения. Hазбивает объект eventOptions на набор его элементов
view: window,
});

document.addEventListener('click', (e) => { // Применяем ко всему документу встроенное событие click
console.log(e.isTrusted); // true
});



const button = document.querySelector('button');
button.dispatchEvent(eClick); // присваиваем событие eClick кнопке - без клика выводит false при загрузке true при клике
button.dispatchEvent(mouseEvent); // присваиваем событие mouseEvent кнопке - без клика выводит false при загрузке true при клике
button.click(); // встроенное событие без клика выводит false при загрузке