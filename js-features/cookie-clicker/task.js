"use strict";

const cookieImg = document.getElementById('cookie'),
        clickerCounter = document.getElementById('clicker__counter'),
            clickerSpeed = document.getElementById('clicker__speed'),
                initialHeight = cookie.style.height,
                    initialWidth = cookie.style.width;


const click = {
    isFirst: true,
};

cookieImg.addEventListener('click', function() {

    calcClickSpeed(click);
    changeSizes(cookieImg, '250px', '150px');
    increaseCounter(clickerCounter);
    
});

function calcClickSpeed (click) {

    if(click.isFirst) {
        click.isFirst = false;
        click.time = Date.now();
        clickerSpeed.textContent = 'Сделайте еще один клик для высчитывания скорости!';
    } else {
        const newClickTime = Date.now();
        const timeDiff = (newClickTime - click.time) / 1000;

        clickerSpeed.textContent = (1 / timeDiff).toFixed(2);
    
        click.time = newClickTime;
    };
};

function changeSizes (img, toWidth, toHeight) {
    img.style.width = toWidth;
    img.style.height = toHeight;

    setTimeout(() => {
        img.style.width = initialWidth;
        img.style.height = initialHeight;
    }, 100);
};

function increaseCounter (counter) {
    counter.textContent = Number(counter.textContent) + 1;
};