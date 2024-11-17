// Работа с JSON

// Вот так выглядит JSON-объект:
// {
// "first_name": "Sammy",
// "last_name": "Shark",
// "location": "Ocean",
// "online": true,
// "followers": 987
// }

// Создание карточки товара через переменные:

// let productName = 'Новое название товара'; // новые данные
// let productPrise = 1500;  

// const productNameLink = document.querySelector('.product_name');
// const productPriseLink = document.querySelector('.product_prise');
// productNameLink.textContent = productName;
// productPriseLink.textContent = productPrise;


// Создание карточек товаров через объекты:

// const productData = {               // Обект товара
//     name: 'Название товара Obj',
//     prise: 1700

// };

// const productNameLink = document.querySelector('.product_name');
// const productPriseLink = document.querySelector('.product_prise');
// productNameLink.textContent = productData.name;
// productPriseLink.textContent = productData.prise;


const productData = [               // Массив обектов товара
    {
        name: 'Название товара 1',
        prise: 1700
    },
    {
        name: 'Название товара 2',
        prise: 1834
    }
];

const products = document.querySelectorAll('.product');
// const productNameLink = document.querySelectorAll('.product_name');
// const productPriseLink = document.querySelectorAll('.product_prise');
// productNameLink.textContent = productData.name;
// productPriseLink.textContent = productData.prise;
let i = 0;
products.forEach(e => {
    const productName = e.querySelector('.product_name');
    productName.textContent = productData[i].name;
    const productPrise = e.querySelector('.product_prise');
    productPrise.textContent = productData[i].prise;
    i++;
});


// Работа с JSON

// Функция JSON.stringify()
// Эта функция преобразовывает объекты JSON в строки

const obj = {
    "first_name": "John",
    "last_name": "Smith",
    "location": "London"
};
const s = JSON.stringify(obj);

console.log(obj); // {
//     "first_name": "John",
//     "last_name": "Smith",
//     "location": "London"
// }

console.log(s + ' -это строка'); // {"first_name":"John","last_name":"Smith","location":"London"} -это строка


// Функция JSON.parse()

// Строки удобны при обмене данными, но потом их нужно снова преобразовать в объекты. Для
// этого используется функция JSON.parse().

const data = JSON.parse(s); //data - снова объект

console.log(data); // {
//     "first_name": "John",
//     "last_name": "Smith",
//     "location": "London"
// }

// Функция eval(). - Чтобы преобразовать текст в объект, используйте функцию eval().

// ШАБЛОНИЗАЦИЯ scrypt1.js
