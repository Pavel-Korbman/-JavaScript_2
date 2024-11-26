// Работа с медиа

// События HTMLMediaElement: когда они срабатывают 

// 1. abort — когда ресурс не был полностью загружен, однако не в результате ошибки. Например, в процессе загрузки ресурса вызван метода load. 
// 2. canplay — когда браузер может начать воспроизведение, но загружено недостаточно данных для воспроизведения без прерываний на буферизацию ещё не загруженного, исходя из скорости соединения. 
// 3. canplaythrough — когда браузер может начать воспроизведение и загружено достаточно данных для воспроизведения без прерываний на буферизацию. 
// 4. durationchange — в момент обновления атрибута duration. 
// 5. emptied — когда медиасодержимое удаляется. Например, медиаресурс полностью или частично загружен, а метод HTMLMediaElement.load() вызван для его перезагрузки.
// 6. ended — в момент окончания воспроизведения(<audio> или <video>) при достижении конца файла или по причине недоступности данных.
// 7. error — когда медиаресурс не может быть загружен из-за ошибки. 
// 8. loadeddata — когда первый блок (фрейм) загружен. 
// 9. loadedmetadata — в момент загрузки метаданных. 
// 10. loadstart — в момент начала загрузки медиаресурса. 
// 11. pause — когда запрос на остановку обработан, а воспроизведение остановлено. Как правило, при вызове метода pause
// 12. play — в момент изменения свойства paused из значения true в false, как результат вызова метода play или изменения значения свойства autoplay. 
// 13. playing — когда воспроизведение готово начаться после остановки на паузу или из-за задержки при получении недостающих данных. 
// 14. progress — срабатывает периодически в процессе загрузки браузером данных медиаресурса. 
// 15. ratechange — при изменении скорости воспроизведения. 
// 16. seeked — в момент завершения операции поиска, когда пользователь отпускает ползунок на шкале прогресса воспроизведения трека. 
// 17. seeking — в момент начала операции поиска.
// 18. stalled — когда браузер пытается получить данные медиаресурса, но данные не поступают. 
// 19. suspend — когда загрузка данных медиаресурса приостановлена. 
// 20. timeupdate — при обновлении текущего времени воспроизведения, представленного в атрибуте currentTime. 
// 21. volumechange — при изменении громкости. 
// 22. waiting — когда воспроизведение приостановлено из-за временной нехватки данных медиаресурса.

const audioEl = document.querySelector('.pleer-1');

const titre = document.createElement('p');
audioEl.parentNode.insertBefore(titre, audioEl.nextSibling);

audioEl.addEventListener('play', function () {
    titre.textContent = 'ХОЙ !';
});

audioEl.addEventListener('pause', function () {
    titre.textContent = '';
});


// Свойства и методы HTMLMediaElement

// 1. autoplay (Boolean) — отражает значение HTML-атрибута autoplay, указывающего, должно ли воспроизведение начинаться автоматически, как только будет доступно достаточно медиафайлов, чтобы сделать это без прерывания. 
// 2. buffered (TimeRanges), только для чтения — указатель на объект временных интервалов медиаресурса, который браузер буферизировал в момент обращения к свойству. 
// 3. controls (Boolean) — отражает значение HTML-атрибута controls, указывающего, должны ли отображаться элементы пользовательского интерфейса управления воспроизведением медиаресурса. 
// 4. controlsList (DOMTokenList), только для чтения — отражает значение HTML-атрибута. Свойство controlslist позволяет выбирать, какие элементы управления будут отображаться в интерфейсе медиапроигрывателя. DOMTokenList принимает одно или несколько из трёх возможных значений: nodownload, nofullscreen (только video) и noremoteplayback. 
// 5. crossOrigin (DOMString) — отражает значение HTML-атрибута crossorigin, указываюего настройку CORS для этого медиаэлемента. 
// 6. currentSrc (DOMString) только для чтения — возвращает абсолютный URL-адрес выбранного браузером медиаресурса. 
// 7. currentTime (Number) — время текущей позиции воспроизведения в секундах. Установка этого значения переместит точку воспроизведения в новую позицию. 
// 8. duration (Number) только для чтения — общая продолжительность медиаресурса в секундах. Если данные о медиаресурсе недоступны, поле получит значение NaN. А если медиаресурс неопределённой длины (в случае MediaStream), будет содержать значение +Infinity.
// 9. ended (Boolean), только для чтения — возвращает индикатор того, что воспроизведение медиаресурса завершено. 
// 10. error (MediaError), только для чтения — содержит указатель на объект ошибки или null, если ошибки не было. 
// 11. loop (Boolean) — отражает значение HTML-атрибута loop, указывающего, что воспроизведение медиа должно быть зациклено.
// 12.muted (Boolean) — отражает значение HTML-атрибута muted, указывающего, выключен ли звук у медиаресурса(true, если выключен, false— включён). 
// 13.networkState (Number), только для чтения—содержит целочисленную константу (enumeration),которая отражает текущее состояние получения медиаресурса по сети и может принимать следующие значения:
// NETWORK_EMPTY 0 Пока нет данных. При этом поле readyState содержит значение HTMLMediaElement HAVE_NOTHING 
// NETWORK_IDLE 1 Браузер выбрал источник медиаресурса, но загрузка ещё не начиналась 
// NETWORK_LOADING 2 Идёт загрузка данных медиаресурса
// NETWORK_NO_SOURCE 3 Браузер не нашёл источников медиаресурса
// 14.paused(Boolean),только для чтения — указывает,что воспроизведение медиаресурса остановлено. 
// 15.playbackRate(Number) — указывает скорость, с которой воспроизводится медиаресурс. 
// 16.played(TimeRanges)только для чтения — указатель на объект временных интервалов медиаресурса, который браузер воспроизвёл (если есть). 17.preload (DOMString)—отражает значениеHTML-атрибута preload, определяющего способ загрузки браузером данных медиаресурса. Возможные значения: none, metadata, auto.
// 18. readyState (Number), только для чтения — содержит целочисленную константу (enumeration), отражающую состояние готовности медиаресурса. Может принимать следующие значения:
// HAVE_NOTHING 0 Информация о медиаресурсе недоступна 
//HAVE_METADATA 1 Браузер загрузил достаточно информации о медиаресурсе для инициализации метаданных. Вызов поиска (seeking) больше не вызовет ошибки 
//HAVE_CURRENT_DATA 2 Доступны данные для текущей позиции воспроизведения, но недостаточно, чтобы воспроизвести больше одного кадра 
// HAVE_FUTURE_DATA 3 Доступны данные для текущей позиции воспроизведения, а также для как минимум двух кадров видео 
// HAVE_ENOUGH_DATA 4 Загружено достаточно данных для воспроизведения, и скорость загрузки стабильно высока для воспроизведения медиапотока без прерываний
// 19.seekable (TimeRanges), только для чтения — указатель на объект временных интервалов (если есть) медиаресурса, которые может выбрать пользователь. 
// 20.seeking(Boolean), только для чтения—индикатор того,что медиаресурс находится в состоянии выбора новой позиции воспроизведения. 
// 21.src(DOMString)—отражает значение HTML-атрибута src, определяющегоURL-адрес медиаресурса для использования.22. textTracks (TextTrackList), только для чтения — указатель на динамический список объектов TextTrack. 23. volume (Number) — значение громкости звука, от 0.0 (звук выключен) до 1.0 (максимальная громкость).

// Помимо методов, наследуемых от базовых классов HTMLElement, Element, Node, и EventTarget, HTMLMediaElement поддерживает следующие методы:

// 1. HTMLMediaElement.addTextTrack() — добавляет объект типа TextTrack, например, как трек для субтитров. 
// 2. HTMLMediaElement.captureStream() — возвращает MediaStream, захватывает media-поток медиасодержимого. 3. HTMLMediaElement.canPlayType() — принимает строку MIME-типа медиаресурса, может также включать параметры кодека. Вызов canPlayType() вернёт строку probably, если браузер способен воспроизвести этот формат, maybe, — если недостаточно информации для определения возможности воспроизведения, или пустую строку, если данный тип не поддерживается. 
// 4. HTMLMediaElement.load() — перезапускает процесс выбора оптимального источника медиаресурса из вариантов, указанных в элементах source или переданного в атрибуте src или единственном source-элементе. 
// 5. HTMLMediaElement.pause() — останавливает воспроизведение медиаресурса. 
// 6. HTMLMediaElement.play() — начинает воспроизведение медиаресурса. 
// 7. HTMLMediaElement.setMediaKeys() — возвращает Promise. Устанавливает MediaKeys для декодирования медиаресурса в процессе воспроизведения. 
// 8. HTMLMediaElement.setSinkId() — устанавливает ID медиаустройства для воспроизведения медиа и возвращает Promise. Требует получения разрешения на доступ к соответствующему устройству.






// Медиабуферизация, поиск и временные интервалы 

// Иногда полезно знать, какая именно часть аудио или видео была загружена или воспроизводится без задержки: например, для отображения в буферном индикаторе загрузки медиапроигрывателя. В этом разделе мы рассмотрим, как создать буфер-индикатор или панель поиска с помощью интерфейса TimeRanges и других методов медиа API

const title = document.querySelector('.title');
const newAudioEl = document.createElement('audio');
newAudioEl.src = 'img/Korol_i_SHut_Rom.mp3';
newAudioEl.controls = true;
title.parentNode.insertBefore(newAudioEl, title.nextSibling);

// const audio = document.querySelector('audio');
//const buffered = audio.buffered; // хранит ссылку на объект с данными о частях буферизованных участков медиафайла: один или более — сколько успело буферизоваться.
// const {buffered} = audio; 
// console.log(buffered.length) // Вернет 2 
// console.log(buffered.start(0)) // Вернет 0 
// console.log(buffered.end(0)) // Вернет 5 
// console.log(buffered.start(1)) // Вернет 15

// ИНДИКАТОР БУФЕРИЗАЦИИ

const audio = document.querySelector('audio')
const { buffered, duration } = audio;
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
context.fillStyle = 'lightgray';
context.fillRect(0, 0, canvas.width, canvas.height); context.fillStyle = 'red';
context.strokeStyle = 'white';
const coef = canvas.width / duration// Длина одной секунды в пикселях 

// отображение TimeRanges 
audio.addEventListener('seeked', () => {
    for (i = 0; i < buffered.length; i++) {
        const startX = buffered.start(i) * coef;
        const endX = buffered.end(i) * coef;
        const width = endX - startX;

        context.fillRect(startX, 0, width, canvas.height);
        context.rect(startX, 0, width, canvas.height); context.stroke();
    }
});

// Played 
// Свойство played содержит указатель на объект TimeRanges временных интервалов медиаресурса, которые браузер воспроизвёл полностью. Если суммировать все интервалы played, то получим долю прослушанного аудио, что может быть полезно для сбора метрик, например:

// const audioEl = document.querySelector('audio')
const { played } = audio; // объект TimeRanges 
const handlePlayed = () => {
    let totalPlayedSeconds = 0;
    for (i = 0; played.length; i++) { totalPlayedSeconds += played.end(i) - played.start(i); }

    console.log(totalPlayedSeconds);
}
audio.addEventListener('pause', handlePlayed, false); audio.addEventListener('ended', handlePlayed, false);

// MediaStream 
// Интерфейс MediaStream представляет поток медиаданных и может использоваться в качестве источника медиасодержимого в HTMLMediaElement. 
// Поток состоит из нескольких треков, таких как видео- и аудиотреки. Каждый трек — экземпляр MediaStreamTrack. Получить MediaStream можно либо посредством конструктора, либо вызовом MediaDevices.getUserMedia().

// Свойства и методы MediaStream 
// Интерфейс MediaStream наследует свойства своего родителя EventTarget: 
// 1. active (Boolean), только для чтения — возвращает true, если MediaStream активен, иначе — false. 
// 2. readyState (String), только для чтения — может принимать значение live, которое указывает, что поток подключён и делает всё возможное для предоставления данных в реальном времени. В этом случае получение данных можно включить или выключить посредством свойства enabled. Значение ended указывает, что поток завершён и больше не предоставляет новых данных. 
// 3. id (DOMString), только для чтения — строка, содержащая 36 символов универсального уникального идентификатора (UUID) потока.

// MediaStream добавляет следующие методы:

// 1. MediaStream.addTrack(track) — сохраняет копию объекта track (MediaStreamTrack). Если этот трек добавлялся в MediaStream ранее, он игнорируется. 
// 2. MediaStream.clone() — возвращает точную копию объекта MediaStream. Исключение составляет значение свойства id, которое изменится на новое уникальное. 
// 3. MediaStream.getAudioTracks() — возвращает список объектов MediaStreamTrack, хранимых в объекте MediaStream с атрибутом kind, имеющим значение audio. Порядок, в котором возвращаются элементы списка, не определён и может меняться между браузерами, а также между вызовами. 
// 4. MediaStream.getTrackById(trackId) — возвращает трек с trackId, соответствующем этому. Если в метод не передано аргументов или трека с этим trackId, возвращает null. А если несколько треков имеют одинаковый trackId, возвращает первый из них. 
// 5. MediaStream.getTracks() — возвращает список всех объектов MediaStreamTrack, сохранённых в объекте MediaStream, вне зависимости от значения их свойства kind. Порядок, в котором возвращаются элементы списка, не определён и может меняться между браузерами, а также между вызовами. 
// 6. MediaStream.getVideoTracks() — возвращает список объектов MediaStreamTrack, хранимых в объекте MediaStream с атрибутом kind, имеющим значение video. Порядок, в котором возвращаются элементы списка, не определён и может меняться между браузерами, а также между вызовами.
// 7. MediaStream.removeTrack() — удаляет объект MediaStreamTrack. Если этот трек не сохранён в объекте MediaStream, вызов игнорируется.

// Использование MediaStream в качестве источника Audio:

const recorder = document.getElementById('recorder'); 
const player = document.getElementById('player'); 
recorder.addEventListener('change', (event) => {
    const [file] = event.target.files;
    const url = URL.createObjectURL(file) // Добавление элементу потока в качестве источника
    player.src = url
});