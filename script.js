'use strict';

const labelClock = document.querySelector('.box');
const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');


let timer;

const startTime = function() {
    const tick = function() {
        const now = new Date();
        const hour = `${now.getHours()}`.padStart(2, 0);
        const min = `${now.getMinutes()}`.padStart(2, 0);
        const sec = `${now.getSeconds()}`.padStart(2, 0);
        const displayTime = `${hour} : ${min} : ${sec}`;
        labelClock.textContent = displayTime;
    }
    tick();
    timer = setInterval(tick, 1000);
    return timer;
}

const stopTime = function() {
    // labelClock.textContent = `00 : 00 : 00`;
    clearInterval(timer);
}

btnStart.addEventListener('click', startTime);

btnStop.addEventListener('click', stopTime);