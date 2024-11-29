const contentEl = document.querySelector('.content');

document.addEventListener('scroll', function (e) {
    // Потребуется знать высоту документа и высоту экрана
    const height = document.documentElement.offsetHeight;
    console.log(`_____________Высота документа ${height}`);
    const screenHight = document.documentElement.clientHeight;
    console.log(`_____________Высота видимой области ${screenHight}`);

    // Если много контента - появиться scroll

    // Выводим сколько пикселей пользователь уже проскролил
    const scrolled = window.scrollY;
    console.log(`Уже проскролено ${scrolled}`);

    // Обозначим порог при приближении к которому производим действие:
    // обозначим четверть экрана до конца страницы
    const threshold = height - screenHight / 4;

    // отслеживаем - где находится низ экрана относительно верха всего документа
    const position = scrolled + screenHight;
    console.log(`Низ экрана находится в ${position} пикселях от начала документа`);

    // Достигаем порога и добавляем новый контент
    if (position >= threshold) {
        console.log('Добавляем новый контент на стр');

        const newText = document.createElement('p');
        newText.textContent = 'НОВАЯ ПОРЦИЯ КОНТЕНТА НОВАЯ ПОРЦИЯ КОНТЕНТА НОВАЯ ПОРЦИЯ КОНТЕНТ НОВАЯ ПОРЦИЯ КОНТЕНТА НОВАЯ ПОРЦИЯ КОНТЕНТА НОВАЯ ПОРЦИЯ КОНТЕНТА НОВАЯ ПОРЦИЯ КОНТЕНТ НОВАЯ ПОРЦИЯ КОНТЕНТА НОВАЯ ПОРЦИЯ КОНТЕНТА НОВАЯ ПОРЦИЯ КОНТЕНТА НОВАЯ ПОРЦИЯ КОНТЕНТ НОВАЯ ПОРЦИЯ КОНТЕНТА НОВАЯ ПОРЦИЯ КОНТЕНТА НОВАЯ ПОРЦИЯ КОНТЕНТА НОВАЯ ПОРЦИЯ КОНТЕНТ НОВАЯ ПОРЦИЯ КОНТЕНТА НОВАЯ ПОРЦИЯ КОНТЕНТА НОВАЯ ПОРЦИЯ КОНТЕНТА НОВАЯ ПОРЦИЯ КОНТЕНТ НОВАЯ ПОРЦИЯ КОНТЕНТА НОВАЯ ПОРЦИЯ КОНТЕНТА'; // Будет добавляться бесконечно 
        contentEl.appendChild(newText);
    }


});