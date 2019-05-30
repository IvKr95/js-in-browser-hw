const revealElements = [...document.querySelectorAll('.reveal')];


window.addEventListener('scroll', () => {
    getCoords();
});

function getCoords() {
    revealElements.forEach((revEl) => {
        const elTop = revEl.getBoundingClientRect().top;
        
        toggleElement(revEl, elTop);
    });    
};

function toggleElement(revEl, elTop) {
    if (elTop > window.innerHeight || elTop < 0) {
        revEl.classList.remove('reveal_active');
    } else {
        revEl.classList.add('reveal_active');
    };
};