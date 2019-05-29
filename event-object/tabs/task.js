const tabNav = document.querySelector('.tab__navigation'),
        tabs = [...tabNav.querySelectorAll('.tab')],
            tabsNumber = tabs.length;

const tabsContent = [...document.querySelectorAll('.tab__content')];


tabNav.addEventListener('click', switchTab);

function switchTab (e) {
    if(!e.target.classList.contains('tab_active') && e.target.classList.contains('tab')) {
        
        removeActiveTabs ();
        
        e.target.classList.add('tab_active');
        tabsContent[tabs.indexOf(e.target)].classList.add('tab__content_active');
    };
};

function removeActiveTabs () {
    for ( let tab = 0; tab < tabsNumber; tab++) {
        tabs[tab].classList.remove('tab_active');
        tabsContent[tab].classList.remove('tab__content_active');
    };
};