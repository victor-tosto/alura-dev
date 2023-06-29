// Menu Hamburger
const btnHamburger = document.querySelector('.menu-hamburger__button');
const navMobile = document.querySelector('.nav-mobile');
const suppressScroll = document.querySelector('body');

// Search Mobile
const btnSearch = document.querySelector('.search-area__button');
const searchAreaMobile = document.querySelector('.search-area-mobile');
const btnX = document.querySelector('.search-area-mobile__button');
const overlay = document.querySelector('#overlay');

// Menu Hamburger
btnHamburger.addEventListener("click", () => {
    btnHamburger.classList.toggle('open');
    navMobile.classList.toggle('open');
    suppressScroll.classList.toggle('suppress-scroll');

    verifySearch();

});

// Search Mobile
btnSearch.addEventListener("click", () => {
    searchAreaMobile.classList.toggle('open');
    overlay.classList.add('open');

    verifyMenu();

});

btnX.addEventListener("click", () => {
    searchAreaMobile.classList.remove('open');
    overlay.classList.remove('open');
});

// Checks if the mobile menu is open 
function verifyMenu() {

    if (btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open');
        navMobile.classList.remove('open');
        suppressScroll.classList.remove('suppress-scroll');
    } else {
        return
    }
}

// Checks if search mobile is open
function verifySearch() {

    if (searchAreaMobile.classList.contains('open')) {
        searchAreaMobile.classList.remove('open');

    } else {
        return
    }

}
