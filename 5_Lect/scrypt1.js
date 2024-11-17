// ШАБЛОНИЗАЦИЯ

const productData = [
    {
        img: 'img/1.jpg',
        name: 'Название товара 1',
        text: 'Описание товара, описание товара,  описание товара, описание товара, описание товара,',
        prise: 1700
    },
    {
        img: 'img/2.jpg',
        name: 'Название товара 2',
        text: 'Описание товара, описание товара,  описание товара, описание товара, описание товара,',
        prise: 1834
    },
    {
        img: 'img/3.jpg',
        name: 'Название товара 3',
        text: 'Описание товара, описание товара,  описание товара, описание товара, описание товара,',
        prise: 1900
    },
    {
        img: 'img/4.jpg',
        name: 'Название товара 4',
        text: 'Описание товара, описание товара,  описание товара, описание товара, описание товара,',
        prise: 2700
    },
    {
        img: 'img/5.jpg',
        name: 'Название товара 5',
        text: 'Описание товара, описание товара,  описание товара, описание товара, описание товара,',
        prise: 9999
    },
    {
        img: 'img/6.jpg',
        name: 'Название товара 6',
        text: 'Описание товара, описание товара,  описание товара, описание товара, описание товара,',
        prise: 99999
    }
];

// const element = productData[i];


const productBlock = document.querySelector('.product_block');

for (let i = 0; i < productData.length; i++) {

    const productEl = document.createElement('div');
    productEl.classList.add('product');
    productBlock.appendChild(productEl);

    const productImg = document.createElement('img');
    productImg.classList.add('product_img');
    productImg.setAttribute('alt', 'photo');
    productEl.appendChild(productImg);
    productImg.setAttribute('src', productData[i].img);

    const productContent = document.createElement('div');
    productContent.classList.add('product_content');
    productEl.appendChild(productContent);

    const productName = document.createElement('a');
    productName.classList.add('product_name');
    productName.setAttribute('href', 'product.html');
    productContent.appendChild(productName);
    productName.textContent = productData[i].name;

    const productText = document.createElement('p');
    productText.classList.add('product_text');
    productContent.appendChild(productText);
    productText.textContent = productData[i].text;

    const productPriseBlock = document.createElement('p');
    productPriseBlock.classList.add('product_prise_block');
    productContent.appendChild(productPriseBlock);
    
    const priseTitle = document.createElement('span');
    priseTitle.classList.add('prise_title');
    productPriseBlock.appendChild(priseTitle);
    priseTitle.textContent = 'Цена:';

    const productPrise = document.createElement('span');
    productPrise.classList.add('product_prise');
    productPriseBlock.appendChild(productPrise);
    productPrise.textContent = productData[i].prise;

    const priseCurrency = document.createElement('span');
    priseCurrency.classList.add('prise_currency');
    productPriseBlock.appendChild(priseCurrency);
    priseCurrency.textContent = 'руб';

}







