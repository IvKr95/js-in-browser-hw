const prevArrow = document.querySelectorAll('.slider__arrow').item(0),
        nextArrow = document.querySelectorAll('.slider__arrow').item(1);


const sliderItemsArr = [...document.querySelectorAll('.slider__item')],
        sliderItemsArrLength = sliderItemsArr.length;

let currentSlide = 0;

prevArrow.addEventListener('click', () => {
        if (sliderItemsArr[currentSlide].classList.contains('slider__item_active')) {
                sliderItemsArr[currentSlide].classList.remove('slider__item_active');
                currentSlide--;

                if (currentSlide < 0) {
                        currentSlide = sliderItemsArrLength - 1;
                        sliderItemsArr[currentSlide].classList.add('slider__item_active');
                } else {
                        sliderItemsArr[currentSlide].classList.add('slider__item_active');
                };
        };
});

nextArrow.addEventListener('click', () => {

        if (sliderItemsArr[currentSlide].classList.contains('slider__item_active')) {
                sliderItemsArr[currentSlide].classList.remove('slider__item_active');
                currentSlide++;

                if (currentSlide > sliderItemsArrLength - 1) {
                        currentSlide = 0;
                        sliderItemsArr[currentSlide].classList.add('slider__item_active');
                } else {
                        sliderItemsArr[currentSlide].classList.add('slider__item_active');
                };
        };
});