// Задание 1 
// 1. Получите данные по адресу https://fakestoreapi.com/products. 
// 2. Создайте файл data.js. 
// 3. В файле data.js создайте переменную dataJSON, которая будет хранить эти данные в формате JSON. 
// 4. Создайте вторую переменную data, в которой сохраните данные в формате массива на основе dataJSON. 
// 5. Создайте файл index.html. 
// 6. Подключите data.js в index.html. 
// 7. Сформируйте контент из данных (картинка, заголовок, описание, цена и кнопка “Add to Cart”). 
// 8. Добавьте данный контент в верстку в виде списка ul и li. 
// 9. Добавьте стили при необходимости (по желанию).

const data = JSON.parse(dataJSON);
const ulEl = document.querySelector('#product-list');

data.forEach(e => {
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);

    const imgEl = document.createElement('img');
    imgEl.src = e.image;
    liEl.appendChild(imgEl);

    const title = document.createElement('h2');
    title.textContent = e.title;
    liEl.appendChild(title);

    const description = document.createElement('p');
    description.textContent = e.description;
    liEl.appendChild(description);

    const price = document.createElement('p');
    price.textContent = `Цена: ${e.price}руб`;
    liEl.appendChild(price);

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    liEl.appendChild(button);

});
