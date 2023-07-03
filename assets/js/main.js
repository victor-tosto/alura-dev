// Menu Hamburger
const btnHamburger = document.querySelector('.menu-hamburger__button');
const navMobile = document.querySelector('.nav-mobile');
const suppressScroll = document.querySelector('body');

// Search Mobile
const btnSearch = document.querySelector('.search-area__button');
const searchAreaMobile = document.querySelector('.search-area-mobile');
const btnX = document.querySelector('.search-area-mobile__button');
const overlay = document.querySelector('#overlay');

// Background Code Editor
const codeEditorBackground = document.querySelector('.code__editor');
const changeBackgroundColor = document.querySelector('.container__color-picker');
const inputColor = document.querySelector('.color-picker__invisible');

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
    suppressScroll.classList.add('suppress-scroll');

    verifyMenu();

});

// Close search mobile
btnX.addEventListener("click", () => {
    searchAreaMobile.classList.remove('open');
    overlay.classList.remove('open');
    suppressScroll.classList.remove('suppress-scroll');
});

// Change background color of code editor
inputColor.addEventListener("input", (e) => {
    changeBackgroundColor.style.backgroundColor = e.target.value;
    codeEditorBackground.style.backgroundColor = e.target.value;
});



// Checks if the mobile menu is open 
function verifyMenu() {

    if (btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open');
        navMobile.classList.remove('open');
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
