const book = document.getElementById('book');

const bookControlFontSize = book.querySelector('.book__control_font-size'),
        bookControlColour = book.querySelector('.book__control_color'),
            bookControlBg = book.querySelector('.book__control_background');

bookControlFontSize.addEventListener('click', changeFontSize);
bookControlColour.addEventListener('click', changeColour);
bookControlBg.addEventListener('click', changeBgColour);

function changeFontSize (e) {

        const fontSizes = [...bookControlFontSize.querySelectorAll('.font-size')];

        if (!e.target.classList.contains('font-size')) return;

        for ( const fs of fontSizes) {
            fs.classList.remove('font-size_active');
        };

        book.classList.remove('book_fs-small', 'book_fs-big');
        book.classList.add(`book_fs-${e.target.dataset.size}`);        
        e.target.classList.add('font-size_active');

        e.preventDefault();
};

function changeColour (e) {
    const colours = [...bookControlColour.querySelectorAll('.color')];

    if (!e.target.classList.contains('color')) return;

    removeActiveColours(colours);
    
    book.classList.remove('book_color-whitesmoke', 'book_color-gray');
    book.classList.add(`book_color-${e.target.dataset.color}`); 
    e.target.classList.add('color_active');

    e.preventDefault();
};

function changeBgColour (e) {
    const colours = [...bookControlBg.querySelectorAll('.color')];

    if (!e.target.classList.contains('color')) return;

    removeActiveColours(colours);
    
    book.classList.remove('color_gray', 'color_black');
    book.classList.add(`color_${e.target.dataset.color}`);        
    e.target.classList.add('color_active');

    e.preventDefault();
};

function removeActiveColours(colours) {
    for ( const colour of colours) {
        colour.classList.remove('color_active');
    };
};