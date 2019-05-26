const prevArrow = document.querySelectorAll('.slider__arrow').item(0),
        nextArrow = document.querySelectorAll('.slider__arrow').item(1);

const sliderDots = [...document.querySelectorAll('.slider__dot')],
        sliderDotsLength = sliderDots.length;   

const sliderItemsArr = [...document.querySelectorAll('.slider__item')],
        sliderItemsArrLength = sliderItemsArr.length;

let currentSlide = 0;

window.addEventListener('load', () => {
        sliderDots[currentSlide].classList.add('slider__dot_active');
});

prevArrow.addEventListener('click', () => {
        prevSlide();
});

nextArrow.addEventListener('click', () => {
        nextSlide();
});

function prevSlide () {
        if (sliderItemsArr[currentSlide].classList.contains('slider__item_active')) {

                sliderItemsArr[currentSlide].classList.remove('slider__item_active');
                sliderDots[currentSlide].classList.remove('slider__dot_active');

                currentSlide--;

                if (currentSlide < 0) currentSlide = sliderItemsArrLength - 1;

                sliderItemsArr[currentSlide].classList.add('slider__item_active');
                sliderDots[currentSlide].classList.add('slider__dot_active');
        };
};

function nextSlide () {
        if (sliderItemsArr[currentSlide].classList.contains('slider__item_active')) {

                sliderItemsArr[currentSlide].classList.remove('slider__item_active');
                sliderDots[currentSlide].classList.remove('slider__dot_active');

                currentSlide++;

                if (currentSlide > sliderItemsArrLength - 1) currentSlide = 0;

                sliderItemsArr[currentSlide].classList.add('slider__item_active');
                sliderDots[currentSlide].classList.add('slider__dot_active');
        };
};

function switchDot () {
        for (let idx = 0; idx < sliderDotsLength; idx++) {

                const dot = sliderDots[idx];
        
                dot.addEventListener('click', () => {
        
                        if (!dot.classList.contains('slider__dot_active')) {
                
                                for ( let i = 0; i < sliderDotsLength; i++ ) {
                                        sliderItemsArr[currentSlide].classList.remove('slider__item_active');
                                        sliderDots[i].classList.remove('slider__dot_active');
                                };
        
                                dot.classList.add('slider__dot_active');
                                currentSlide = idx;
                                sliderItemsArr[currentSlide].classList.add('slider__item_active');
                        }; 
                });
        };
};
switchDot();

