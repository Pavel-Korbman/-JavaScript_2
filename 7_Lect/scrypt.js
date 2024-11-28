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
