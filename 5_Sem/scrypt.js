// Задание 1 
const data = JSON.parse(dataInfo);
console.log(data);
const divEl = document.querySelector('.content');
data.forEach(e => {
    const imgEl = document.createElement('img');
    imgEl.src = e.url;
    imgEl.style = `width: ${e.width}px`;
    imgEl.style = `height: ${e.height}px`;
    divEl.appendChild(imgEl);


    //console.log(e.url);
});