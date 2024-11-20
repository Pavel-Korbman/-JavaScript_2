const data = JSON.parse(dataInfo);
const goodsEl = document.querySelector('.goods');

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

    const itemName = document.createElement('h3');
    aEl.appendChild(itemName);
    itemName.textContent = e.name;

    const itemText = document.createElement('p');
    aEl.appendChild(itemText);
    itemText.textContent = e.text;

    const itemPrice = document.createElement('h4');
    aEl.appendChild(itemPrice);
    itemPrice.textContent = `$${e.price}`;






    // const imgEl = document.createElement('img');
    // imgEl.src = e.img;
    // imgEl.alt = 'photo';
    // liEl.appendChild(imgEl);
    // imgEl.classList.add('img');

    // const contentEl = document.createElement('div');
    // liEl.appendChild(contentEl);
    // contentEl.classList.add('content');

    // const nameEl = document.createElement('h2');
    // contentEl.appendChild(nameEl);
    // nameEl.textContent = 'MANGO PEOPLE T-SHIRT';

    // const priceEl = document.createElement('p');
    // contentEl.appendChild(priceEl);
    // priceEl.textContent = 'Price: ';
    // const price = document.createElement('span');
    // priceEl.appendChild(price);
    // price.classList.add('price');
    // price.textContent = `$${e.price}`;

    // const colorEl = document.createElement('p');
    // contentEl.appendChild(colorEl);
    // colorEl.textContent = 'Color: ';
    // const color = document.createElement('span');
    // colorEl.appendChild(color);
    // color.classList.add('color');
    // color.textContent = `${e.color}`;

    // const sizeEl = document.createElement('p');
    // contentEl.appendChild(sizeEl);
    // sizeEl.textContent = 'Size: ';
    // const size = document.createElement('span');
    // sizeEl.appendChild(size);
    // size.classList.add('color');
    // size.textContent = `${e.size}`;

    // const quantityEl = document.createElement('p');
    // contentEl.appendChild(quantityEl);
    // quantityEl.textContent = 'Quantity:';
    // const quantity = document.createElement('span');
    // quantityEl.appendChild(quantity);
    // quantity.classList.add('quantity');
    // quantity.textContent = `${e.quantity}`;

    // const closeIcon = document.createElement('img');
    // closeIcon.src = '../img/close.svg';
    // closeIcon.alt = 'close';
    // liEl.appendChild(closeIcon);
    // closeIcon.classList.add('close');
    
});