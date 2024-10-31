// Работа с коллекциями

const divElement = document.querySelector('.content');
console.log(divElement.childNodes.length); // 7 
console.log(divElement.children.length); // 3
console.log(divElement.childNodes); //
console.log(divElement.children); //
// Посмотрим, какие элементы содержатся в каждой коллекции. Чтобы перебрать элементы, сначала преобразуем коллекции в массивы с помощью статического методаArray.from или оператора spread.

// Array.from(divElement.childNodes).forEach((childNode) => {
//     console.log('childNode "%s" типа "%d"', childNode.nodeName, childNode.nodeType)
// });

[...divElement.children].forEach((element) => {
    console.log(element)
});

[...divElement.children].forEach((element) => {
    console.log('child "%s" типа "%d"', element.nodeName, element.nodeType)
});


