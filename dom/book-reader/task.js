const book = document.getElementById('book'),
        bookControls = document.querySelector('.book__controls');

const fontSizes = [...bookControls.querySelectorAll('.font-size')],
        colors = [...bookControls.querySelectorAll('.color')];

bookControls.addEventListener('click', (e) => {

    changeFontSize (e.target);
        changeColour (e.target);
            changeBgColour (e.target);

    e.preventDefault();
});

function changeColour (colour) {
    
    if (colour.closest('.book__control_color') &&
        !colour.classList.contains('color_active') && 
            colour.tagName === 'A') {

        for ( const color of colors) {
            if (color.closest('.book__control_color')) {
                color.classList.remove('color_active');
            };
        };
        
        switch (colour.dataset.color) {
            case 'gray':
                book.classList.remove('book_color-whitesmoke');
                    book.classList.add('book_color-gray');
                        break;
            case 'whitesmoke':
                book.classList.remove('book_color-gray');
                    book.classList.add('book_color-whitesmoke');
                        break;
            default:
                book.classList.remove('book_color-whitesmoke', 'book_color-gray');
                    break;
        };
        
        colour.classList.add('color_active');
    };
};

function changeBgColour (colour) {
    if (colour.closest('.book__control_background') && 
            !colour.classList.contains('color_active') &&
                colour.tagName === 'A') {

        for ( const color of colors) {
            if (color.closest('.book__control_background')) {
                color.classList.remove('color_active');
            };
        };
        
        switch (colour.dataset.color) {
            case 'gray':
                book.classList.remove('color_black');
                    book.classList.add('color_gray');
                        break;
            case 'black':
                book.classList.remove('color_gray');
                    book.classList.add('color_black');
                        break;
            default:
                book.classList.remove('color_gray', 'color_black');
                    break;
        };
        
        colour.classList.add('color_active');
    };
};

function changeFontSize (font) {
    if (font.classList.contains('font-size') && !font.classList.contains('font-size_active')) {

        for ( const fs of fontSizes) {
            fs.classList.remove('font-size_active');
        };

        if (font.dataset.size === 'big') {

            book.classList.remove('book_fs-small');
                    book.classList.add('book_fs-big');

        } else if (font.dataset.size === 'small') {
            
            book.classList.remove('book_fs-big');
                    book.classList.add('book_fs-small');
        } else {
            book.classList.remove('book_fs-small', 'book_fs-big');
        };
        
        font.classList.add('font-size_active');
    };
};