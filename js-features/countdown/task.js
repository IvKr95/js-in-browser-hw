"use strict";

const timer = document.getElementById("timer"),
        startTime = setTime(),
            url = document.createElement('a');

function setTime () {
    let hh = +window.prompt('Задайте часы', '10'),
            mm = +window.prompt('Задайте минуты', '0'),
                ss = +window.prompt('Задайте секунды', '0');

    return {hh,mm,ss};
};

let timerIntId = setInterval(() => {

    timer.textContent = `${zeroPad(startTime.hh)} :
                            ${zeroPad(startTime.mm)} :
                                ${zeroPad(startTime.ss)}`;

    clock(startTime);
}, 1000);

function zeroPad(time) {
    if (String(time).length < 2) {
        time = '0' + time;  
    };

    return time;
};

function clock(time) {
    isTimeOver(time);
    reduceSecs(time);
    reduceMins(time);
    reduceHours(time);
};

function reduceSecs (time) {
    if (time.ss !== 0) time.ss--;
};

function reduceMins (time) {

    if ( time.ss === 0 && time.mm !== 0 ) {

        time.ss = 59, time.mm--;

    };
};

function reduceHours (time) {

    if ( time.mm === 0 && time.ss === 0 && time.hh !== 0 ) {

        time.mm = 59, time.ss = 59, time.hh--;
    };
};

function isTimeOver (time) {

    if ( time.hh === 0 && time.mm === 0 && time.ss === 0 ) {

        clearInterval(timerIntId);
        window.alert("Вы победили в конкурсе!");
        testLoad();
        return true;
    };
};

function testLoad () {
    url.href = "https://www.youtube.com/watch?v=z3GfsqmyLew";
    document.location.assign(url);
};