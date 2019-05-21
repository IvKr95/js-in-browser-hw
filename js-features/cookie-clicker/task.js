"use strict";

const cookieImg = document.getElementById('cookie'),
        clickerCounter = document.getElementById('clicker__counter'),
            clickerSpeed = document.getElementById('clicker__speed'),
                initialHeight = cookie.style.height,
                    initialWidth = cookie.style.width;

let now = Date.now();
let diff = 0;
cookieImg.addEventListener('click', function() {
    diff = Date.now() - now;
    
    console.log(diff);
    cookieImg.style.width = '250px';
    cookieImg.style.height = '150px';

    setTimeout(() => {
        cookieImg.style.width = initialWidth;
        cookieImg.style.height = initialHeight;
    }, 100);

    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
});

