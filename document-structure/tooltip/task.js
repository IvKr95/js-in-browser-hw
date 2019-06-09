const aElements = document.querySelectorAll('.has-tooltip');

const tooltip = document.querySelector('.tooltip');



document.addEventListener('click', function(e) {

    const target = e.target;

    if (!target.classList.contains('has-tooltip')) return;

    e.preventDefault();

    tooltip.innerHTML = target.title; 

    tooltip.style.left = target.offsetLeft + 'px';
    tooltip.style.top = target.getBoundingClientRect().top + target.offsetHeight + 'px';
    
    tooltip.classList.toggle('tooltip_active');
});

console.log(tooltip.dataset.position)


