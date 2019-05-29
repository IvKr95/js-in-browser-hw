const tabs = [...document.querySelectorAll('.tab')],
        tabsArrLength = tabs.length;

const tabsContent = [...document.querySelectorAll('.tab__content')];

for ( let i = 0; i < tabsArrLength; i++ ) {
    tabs[i].addEventListener('click', () => {
        switchTab(tabs[i]);
    });
};

function switchTab (tab) {
    if(!tab.classList.contains('tab_active')) {
        removeActiveTabs();
        tab.classList.add('tab_active');
        tabsContent[tabs.indexOf(tab)].classList.add('tab__content_active');
    };
};

function removeActiveTabs () {
    for ( let tab = 0; tab < tabsArrLength; tab++) {
        tabs[tab].classList.remove('tab_active');
        tabsContent[tab].classList.remove('tab__content_active');
    };
};