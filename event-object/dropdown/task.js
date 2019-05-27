const dropDownValue = document.querySelector('.dropdown__value');

const dropDownList = document.querySelector('.dropdown__list');

const dropDownItem = [...document.querySelectorAll('.dropdown__item')],
        dropDownItemLength = dropDownItem.length;

dropDownValue.addEventListener('click', () => {
    showDropDown();
});

function showDropDown() {
    if(!dropDownList.classList.contains('dropdown__list_active')) {
        dropDownList.classList.add('dropdown__list_active');
    } else {
        dropDownList.classList.remove('dropdown__list_active');
    };
};


for ( let i = 0; i < dropDownItemLength; i++) {
    dropDownItem[i].addEventListener('click', (e) => {
        e.preventDefault();
        dropDownList.classList.remove('dropdown__list_active');
        dropDownValue.textContent = dropDownItem[i].textContent;
    });
};