import Vimeo from '@vimeo/player';
const throttle = require('lodash.throttle');
// инициализация плеера
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

// именование ключа хранилища
const KEY_TO_VAULT = "videoplayer-current-time";

// функция,кот.создает в хранилище запись момента выхода юзера
const onPlay = function (data) {

    localStorage.setItem(KEY_TO_VAULT, data.seconds);
};
// возвращаем из хранилища это значение времени по ключу
const savedTime = localStorage.getItem(KEY_TO_VAULT);

// прослушиватель события из библиотеки
player.on('timeupdate', throttle(onPlay, 1000));
if (savedTime) {
    player.setCurrentTime(savedTime);
}
