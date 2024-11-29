// Геолокация 
// API геолокации позволяет определять местоположение пользователя за счёт позиционирования его устройства. 
// В большинстве случаев позиционирование будет выполняться с использованием GPS, но также могут использоваться менее точные методы, такие как определение местоположения на основе Wi-Fi. 
// Для соблюдения конфиденциальности у пользователя будет запрошено разрешение на сбор данных о местоположении. 
// API геолокации доступен через объект navigator.geolocation. 
// Если объект существует, функции определения местоположения доступны. 
// Проверить это можно следующим образом:


if ('geolocation' in navigator) {
    console.log('местоположение доступно');
} else {
    console.log('местоположение не доступно');
}

// Яндекс карта:


let map;
function initMap() {
    map = new ymaps.Map("yandexmap", {
        center: [55.751732, 37.618215],
        zoom: 16
    });
}
ymaps.ready(initMap);


// Получение текущего местоположения:
// getCurrentPosition()

/*
let myCoords = {
    latitude: null,
    longitude: null
};
navigator.geolocation.getCurrentPosition((position) => {
    // console.log(position);
    myCoords.latitude = position.coords.latitude;
    myCoords.longitude = position.coords.longitude;

    // const { latitude, longitude } = position.coords;
    // console.log('Географические координаты устройства', latitude, longitude);    
});
console.log(myCoords);
*/


// Наблюдение за текущим местоположением watchPosition()

/*
let watchId = navigator.geolocation.watchPosition(({ coords }) => {
    console.log('Устройство обновило местоположение', coords.latitude, coords.longitude);
    //navigator.geolocation.clearWatch(watchId);
});
*/

// watchPosition() возвращает числовой идентификатор для использования вместе с 
// методом clearWatch(), чтобы отписаться от получения новых данных о местоположении.
// (можно использовать вместо getCurrentPosition) 


// Точная настройка позиционирования Методы getCurrentPosition() и watchPosition() 
// принимают третьим параметром необязательный объект PositionOptions со следующими полями: 
// 1. enableHighAccuracy (Boolean) —  точность определения позиции поле. 
// 2. maximumAge (Number) — максимальное время кеширования в миллисекундах. При повторных запросах, пока время не вышло, будет возвращаться кешированное значение, a после браузер будет запрашивать актуальные данные. 
// 3. timeout (Number) — максимальное время ожидания ответа при определении позиции. Число миллисекунд, спустя которое будет вызван обработчик ошибки. 
// Вызов watchPosition может выглядеть следующим образом:

/*
const handlePositionSuccess = ({ coords }) => {
    console.log('Устройство обновило местоположение', coords.latitude, coords.longitude)
}

const handlePositionError = (error) => {
    console.log('Извините, местоположение недоступно', error)
}

const positionOptions = {
    enableHighAccuracy: true,
    maximumAge: 3000,
    timeout: 1000 * 30,
}

const watchId = navigator.geolocation.watchPosition(handlePositionSuccess, handlePositionError, positionOptions);
*/

// Обработка ошибок 
// Callback-функция обработки ошибок, если она передана в getCurrentPosition() или watchPosition(), ожидает экземпляр объекта GeolocationPositionError в качестве первого аргумента. 
// Он будет содержать два свойства: 
// ● code— условное обозначение ошибки;
// ● message —понятное описание ошибки, названной в поле code.

// Функция выглядит примерно так:

const handlePositionError = (error) => {
    switch (error.code) {
        case 1:
            console.log('Пользователь ограничил доступ к местоположению')
            break
        case 2:
            console.log('Ошибка устройства определения местоположения')
            break
        case 3:
            console.log('Достигнут тайм-аут')
            break
        default:
            console.log('Извините, местоположение недоступно', error)
            break
    }
};

// Демонстрация
/*
let watchId = navigator.geolocation.watchPosition(({ coords }) => {
    console.log('Устройство обновило местоположение', coords.latitude, coords.longitude);
}, handlePositionError);
*/



// Работа со скроллом 

// DOM-интерфейсы Window и Element 
// содержат несколько полей и методов для работы с полосой прокрутки.

// Свойства Element.scrollTop и Element.scrollLeft 
//  возвращают или устанавливают расстояние от начальной точки содержимого элемента 

//  (padding-box элемента) до начальной точки его видимого контента. 
//  Когда контент элемента не создаёт полосу прокрутки, его scrollTop или scrollLeft равен нулю.

// Значения свойств Element.scrollTop и Element.scrollLeft могут быть любым целым числом, но с определёнными оговорками: 
// 1. Если элемент не прокручивается, у него нет переполнения или мы не прокручиваем элемент, scrollTop (scrollLeft) устанавливается в 0. 
// 2. Если значение меньше нуля, scrollTop (scrollLeft) устанавливается в 0. 
// 3. Если установленное значение больше максимума прокручиваемого контента, scrollTop (scrollLeft) устанавливается в максимум.

/*
const box = document.querySelector('#box');
console.log(box.scrollTop, box.scrollLeft); // Устанавливаем количество прокрученных пикселей box.
scrollTop = 500;
*/


// Свойства Element.scrollHeight и Element.scrollWidth (только чтение)
// 
// содержат высоту и ширину содержимого элемента соответственно, 
// включая содержимое, невидимое из-за прокрутки. 
// Значение scrollHeight (scrollWidth) равно минимальному clientHeight (clientWidth), 
// необходимому, чтобы поместить всё содержимое элемента в видимую область, 
// не используя полосу прокрутки. 
// Это значение включает в себя padding элемента, но не его margin.

// Код, который определяет, прочитал пользователь текст или нет.

const rulesElement = document.getElementById('rules');
const agreeCheckbox = document.getElementById('agree');
const nextStepButton = document.getElementById('nextstep');
const { scrollHeight, scrollTop, clientHeight } = rulesElement;
let isRead = false;

const handleCheckReading = () => {
    if (isRead) {
        return
    }
    isRead = scrollHeight - scrollTop === clientHeight;
    agreeCheckbox.disabled = nextStepButton.disabled = !isRead;
}
rulesElement.addEventListener('scroll', handleCheckReading, false);

// Методы scroll, scrollTo, scrollBy 

// Есть три основных метода, которые позволяют программно управлять полосой прокрутки.
// При использовании с объектом Window они позволяют управлять прокруткой всего документа, 
// а с DOM-элементами — регулировать прокрутку содержимого элемента. 
// Методы поддерживают два типа синтаксиса:
// scrollTo(x-coord,y-coord) и scrollTo(options): 
// 1. x-coord— координаты пикселя по горизонтальной оси документа или элемента, 
// который надо отобразить вверху слева. 
// 2. y-coord—координаты пикселя по вертикальной оси документа или элемента,
// который надо отобразить вверху слева.
// 3. options — объект с тремя возможными параметрами: 
// a. top — то же, что и y-coord; 
// b. left — то же, что и x-coord; 
// c. behavior — строка, содержащая либо smooth, instant, либо auto (по умолчанию —auto).

window.scrollTo(0, 1000); // Этот код меняет поведение прокрутки на smooth 
window.scrollTo({
    top: 1000,
    behavior: 'smooth',
});

// scroll и scrollTo идентичны — мы можем использовать любой из них.
// Отличие scrollBy в том, что он использует относительные координаты,
// в то время как scroll и scrollTo используют абсолютные.
// Последовательно вызывая scrollBy с одними и теми же параметрами,
// мы будем менять положение полосы прокрутки на значение, переданное в параметрах.
// В случае scroll и scrollTo изменения произойдут лишь при первом вызове.
// Чтобы переместить полосу прокрутки в контексте DOM-элемента,
// нужно присвоить значения полям Element.scrollTop и Element.scrollLeft.


// Метод Element.scrollIntoView 

// прокручивает текущий контейнер родителя элемента так, 
// чтобы элемент, на котором вызван scrollIntoView(), был видим пользователю. 
// Этот метод принимает два типа параметров: 

// 1. alignToTop — необязательный аргумент типа Boolean со следующими возможными значениями: 

// a. true — верхняя граница элемента выравнивается по верхней границе видимой части окна прокручиваемой области. 
// Соответствует scrollIntoViewOptions: {block: "start", inline: "nearest"}. Значение по умолчанию.  

// b. false — нижняя граница элемента выравнивается по нижней границе видимой части окна 
// прокручиваемой области. 
// Соответствует конфигурации scrollIntoViewOptions: {block: "end", inline: "nearest"}

// 2. scrollIntoViewOptions — необязательный аргумент типа Object со следующим набором полей:

// a. behavior — определяет анимацию скролла. Необязательный параметр. 
// Принимает значение auto или smooth. По умолчанию — auto. 

// b. block — вертикальное выравнивание. Необязательный параметр. Варианты значений:
// start, center, end или nearest. По умолчанию — start. 

// c. inline — горизонтальное выравнивание. Необязательный параметр. Варианты значений: 
// start, center, end или nearest. По умолчанию — nearest.

/*
const hiddenElement = document.getElementById('box');
const button = document.querySelector('button');
const handleButtonClick = () => {
    hiddenElement.scrollIntoView({ block: 'center', behavior: 'smooth' });
}
button.addEventListener('click', handleButtonClick);
*/

// Примеры работы с прокруткой в консоли см scrypt_1.js scrypt_2.js
