//"use strict";
const data = JSON.parse(dataInfo);
const goodsEl = document.querySelector('.goods');
let count = 0;
data.forEach(e => {
    const item = document.createElement('div');
    goodsEl.appendChild(item);
    item.classList.add('item');


    const aEl = document.createElement('a');
    item.appendChild(aEl);
    aEl.href = '#';

    const itemPhoto = document.createElement('div');
    aEl.appendChild(itemPhoto);
    itemPhoto.classList.add('item__foto');

    const imgEl = document.createElement('img');
    imgEl.src = e.img;
    imgEl.alt = 'photo';
    itemPhoto.appendChild(imgEl);

    const hooverEl = document.createElement('img');
    hooverEl.src = 'img/hover.svg';
    hooverEl.alt = 'card';
    itemPhoto.appendChild(hooverEl);
    hooverEl.classList.add('hoover__on');
    hooverEl.id = count;

    const itemName = document.createElement('h3');
    aEl.appendChild(itemName);
    itemName.textContent = e.name;

    const itemText = document.createElement('p');
    aEl.appendChild(itemText);
    itemText.textContent = e.text;

    const itemPrice = document.createElement('h4');
    aEl.appendChild(itemPrice);
    itemPrice.textContent = `$${e.price}`;

    count++;
});

const dataCard = [];
const ulEl = document.querySelector('.list');

goodsEl.addEventListener('click', function (element) {
    if (dataCard.includes(data[element.target.id])) {
        dataCard[dataCard.indexOf(data[element.target.id])].quantity++;
    } else {
        dataCard.push(data[element.target.id]);
        dataCard[dataCard.length - 1].quantity = 1;
    }

    ulEl.innerHTML = "";
    let count = 0;
    dataCard.forEach(e => {
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.classList.add('product_card');
        liEl.id = count;

        const imgEl = document.createElement('img');
        imgEl.src = e.img;
        imgEl.alt = 'photo';
        liEl.appendChild(imgEl);
        imgEl.classList.add('img_card');

        const contentEl = document.createElement('div');
        liEl.appendChild(contentEl);
        contentEl.classList.add('content_card');

        const nameEl = document.createElement('h2');
        contentEl.appendChild(nameEl);
        nameEl.textContent = 'MANGO PEOPLE T-SHIRT';

        const priceEl = document.createElement('p');
        contentEl.appendChild(priceEl);
        priceEl.textContent = 'Price: ';
        const price = document.createElement('span');
        priceEl.appendChild(price);
        price.classList.add('price');
        price.textContent = `$${e.price}`;

        const colorEl = document.createElement('p');
        contentEl.appendChild(colorEl);
        colorEl.textContent = 'Color: ';
        const color = document.createElement('span');
        colorEl.appendChild(color);
        color.classList.add('color');
        color.textContent = `${e.color}`;

        const sizeEl = document.createElement('p');
        contentEl.appendChild(sizeEl);
        sizeEl.textContent = 'Size: ';
        const size = document.createElement('span');
        sizeEl.appendChild(size);
        size.classList.add('color');
        size.textContent = `${e.size}`;

        const quantityEl = document.createElement('p');
        contentEl.appendChild(quantityEl);
        quantityEl.textContent = 'Quantity:';
        const quantity = document.createElement('span');
        quantityEl.appendChild(quantity);
        quantity.classList.add('quantity');
        quantity.textContent = `${e.quantity}`;

        const closeEl = document.createElement('a');
        liEl.appendChild(closeEl);
        closeEl.classList.add('close');
        closeEl.href = '#';

        const closeIcon = document.createElement('img');
        closeIcon.src = 'img/close.svg';
        closeIcon.alt = 'close';
        closeEl.appendChild(closeIcon);
        closeIcon.classList.add('close_img');

        count++;

        closeEl.addEventListener('click', function () {
            dataCard.splice(closeEl.parentNode.id, 1);
            closeEl.parentNode.remove();
        });

    });

});




