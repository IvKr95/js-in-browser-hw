const arrows = document.querySelector('.slider__arrows');

const sliderDotsHolder = document.querySelector('.slider__dots'),
                sliderDots = [...document.querySelectorAll('.slider__dot')],
                        sliderDotsLength = sliderDots.length;   

const sliderItemsArr = [...document.querySelectorAll('.slider__item')],
        sliderItemsArrLength = sliderItemsArr.length;

let currentSlide = 0;

window.addEventListener('load', () => {
        sliderDots[currentSlide].classList.add('slider__dot_active');
});

arrows.addEventListener('click', (e) => {
        const arrow = e.target.classList;

        if (arrow.contains('slider__arrow')) {
                if (arrow.contains('slider__arrow_prev')) {
                        prevSlide();
                } else {
                        nextSlide();
                }; 
        };                          
});

function prevSlide () {
        if (sliderItemsArr[currentSlide].classList.contains('slider__item_active')) {

                removeActive();
                currentSlide--;
                if (currentSlide < 0) currentSlide = sliderItemsArrLength - 1;
                addActive();
        };
};

function nextSlide () {
        if (sliderItemsArr[currentSlide].classList.contains('slider__item_active')) {

                removeActive();
                currentSlide++;
                if (currentSlide > sliderItemsArrLength - 1) currentSlide = 0;
                addActive();
        };
};

sliderDotsHolder.addEventListener('click', (e) => {
        const dot = e.target.classList;
        if (!dot.contains('slider__dot_active') && dot.contains('slider__dot')) {
                
                removeActive();
                currentSlide = sliderDots.indexOf(e.target);
                addActive();
        }; 
});

function removeActive() {
        for ( let i = 0; i < sliderDotsLength; i++ ) {
                sliderItemsArr[currentSlide].classList.remove('slider__item_active');
                sliderDots[i].classList.remove('slider__dot_active');
        };
};

function addActive() {
        sliderItemsArr[currentSlide].classList.add('slider__item_active');
        sliderDots[currentSlide].classList.add('slider__dot_active');
};