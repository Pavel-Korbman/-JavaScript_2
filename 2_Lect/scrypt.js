// Управление стилями

const body = document.querySelector('body');
const divElement = document.createElement('div');
const paragraphElement = document.createElement('p');

divElement.appendChild(paragraphElement);
paragraphElement.textContent = 'Текст параграфа';
body.insertBefore(divElement, body.firstChild);


// Добавляем инлайн-стили

// paragraphElement.style.color = 'white';
// paragraphElement.style.backgroundColor = 'black';
// paragraphElement.style.padding = '10px';
// paragraphElement.style.width = '250px';
// paragraphElement.style.textAlign = 'center';

// Добавляем стили в head
/* 
<style>
.paragraph {
    color: 'white';
    background-color:'black';
    padding:10px;
    width: 250px;
    text-align: center;
}
</style> */

// Добавляем класс к тегу параграф

// paragraphElement.className += 'paragraph';
paragraphElement.setAttribute('class', 'paragraph');

// Ещё пример

const content = document.querySelector('.content');
const titleEl = document.createElement('h1');
titleEl.textContent = 'Заголовок';
titleEl.setAttribute('class', 'heading');
// content.insertBefore(titleEl, content.firstChild);
content.appendChild(titleEl);

const imgEl = document.createElement('img');
imgEl.setAttribute('class', 'img1');
imgEl.src = 'img/2.jpg';
imgEl.setAttribute('alt', 'фото-1');
imgEl.style.width = '50vw';
content.appendChild(imgEl);

// Интерфейсы коллекций в DOM

const liElement = document.querySelectorAll('.menu__list');
const liElementOne = document.querySelector('.menu__list');
const linkEl = document.querySelector('.menu__link');
const menuEl = document.querySelector('.menu');
// console.log(liElement); // NodeList(4) [li.menu__list, li.menu__list, li.menu__list, li.menu__list]
// console.log(liElementOne); // <li class="menu__list"><a href="#" class="menu__link">Link-1</a></li>
// console.log(liElementOne.parentNode.children); // HTMLCollection(4) [li.menu__list, li.menu__list, li.menu__list, li.menu__list]
// console.log(linkEl.childNodes); // NodeList [text]
// console.log(menuEl.children); // HTMLCollection(4) [li.menu__list, li.menu__list, li.menu__list, li.menu__list]
// console.log(menuEl.childNodes); // [text, li.menu__list, text, li.menu__list, text, li.menu__list, text, li.menu__list, text]

// menuEl.childNodes.forEach(element => {
//     console.log(element);
// });

// Spread operator 
// Spread - распространение данных из массива в атомарные элементы. Мы можем взять массив и вытащить все его элементы как отдельные переменные.

const studentsGroup1PracticeTime = [
    { firstName: "Ivanov", practiceTime: 56 },
    { firstName: "Petrov", practiceTime: 120 },
    { firstName: "Sidorov", practiceTime: 148 },
    { firstName: "Belkin", practiceTime: 20 },
    { firstName: "Avdeev", practiceTime: 160 }
];
const studentsGroup2PracticeTime = [
    { firstName: "Mankov", practiceTime: 87 },
    { firstName: "Kistin", practiceTime: 133 },
    { firstName: "Kotlyarov", practiceTime: 140 },
    { firstName: "Peskov", practiceTime: 10 },
];

function findMax() {            // нахождение max
    const values = arguments;
    let maxValue = -Infinity;
    for (let index = 0; index < values.length; index++) {
        if (values[index] > maxValue) maxValue = values[index];
    }
    return maxValue;
};

const group1PracticeTime = studentsGroup1PracticeTime.map((student) => student.practiceTime); // создание массива из значений practiceTime:
const group2PracticeTime = studentsGroup2PracticeTime.map((student) => student.practiceTime);

// const maxTimeFromGroup1 = findMax(...group1PracticeTime); // ...group1PracticeTime вытянет из массива все элементы и передаст их в функцию как отдельные переменные.
// console.log(`Максимальное время практики: ${maxTimeFromGroup1} часов`); // 160

// const maxTimeFromGroup2 = findMax(...group2PracticeTime);
// console.log(maxTimeFromGroup2); // 140

const groupsPracticeTime = [...group1PracticeTime, ...group2PracticeTime]; // массив из обеих групп
// console.log(findMax(...groupsPracticeTime)); // 160

// Rest-operator 
// Оператор Rest («оставшиеся») позволяет собрать оставшиеся аргументы функции в массив. Оператор позволяет не перечислять все аргументы функции как отдельные переменные, а получить их все одним массивом. Для его использования необходимо в функции, принимающей несколько аргументов, перечислить необходимые аргументы, а все оставшиеся, которые мы хотим собрать в один массив, — записать как …<имя массива>. Часто пишут ...rest

function findMax1(...values) { // принимаем все аргументы и с помощью rest-оператора упаковываем их в массив values.
    return values.reduce(
        (acc, value) => {
            if (value > acc) return value; 
            return acc;
        },
        -Infinity);
}

const maxTimeFromGroup1 = findMax1(...group1PracticeTime); 
console.log(maxTimeFromGroup1); // 160 
const maxTimeFromGroup2 = findMax1(...group2PracticeTime); 
console.log(maxTimeFromGroup2); // 140
const maxTimeFromGroups = findMax1(...groupsPracticeTime);
console.log(maxTimeFromGroups); // 160





