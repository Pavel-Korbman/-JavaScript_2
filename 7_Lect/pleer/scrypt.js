const videoEl = document.querySelector('video');
const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');
const volumeEl = document.querySelector('.volume');
const timingEl = document.querySelector('.timing');
const currentTimeEl = document.querySelector('.currentTime');

playBtn.addEventListener('click', function () {
    videoEl.play();
});

pauseBtn.addEventListener('click', function () {
    videoEl.pause();
});

videoEl.addEventListener('timeupdate', () => {
    currentTimeEl.innerText = videoEl.currentTime;
    timingEl.value = videoEl.currentTime / videoEl.duration * 100;
});

volumeEl.addEventListener('input', () => {
    videoEl.volume = volumeEl.value;
});

timingEl.addEventListener('input', () => {
    videoEl.currentTime = timingEl.value / videoEl.duration * 100;
});