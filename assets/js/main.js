const btnHamburger = document.querySelector('.menu-hamburger__button');
const navMobile = document.querySelector('.nav-mobile');

btnHamburger.addEventListener("click", () => {
    btnHamburger.classList.toggle('open');
    navMobile.classList.toggle('open')
});