'use strict';

const menuLinks = [...document.querySelectorAll('.menu__link')],
            menuItems = document.querySelectorAll('.menu__item');

(() => {

    const menuLinksLength = menuLinks.length;

    for (let link = 0; link < menuLinksLength; link++) {

        menuLinks[link].addEventListener('click', (e) => {
    
            const dropdownMenus = document.querySelectorAll('.menu'),
                        dropdownMenu = menuItems[link].querySelectorAll('.menu');
    
            if (dropdownMenu) {
                hideDropdownMenus (dropdownMenus);
                showDropdownMenu (dropdownMenu);
                e.preventDefault();
            };  
        });
    };
})(menuLinks);

function hideDropdownMenus (dropdownMenus) {
    const dropdownMenusLength = dropdownMenus.length;

    for ( let i = 0; i < dropdownMenusLength; i++) {          
        dropdownMenus[i].classList.remove('menu_active');
    };
};

function showDropdownMenu (dropdownMenu) {
    dropdownMenu[0].classList.add('menu_active'); 
};