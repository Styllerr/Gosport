const mobileMenuBtn = document.querySelector('.mobile-menu__btn');

const topHeader = document.querySelector('.top-header')
const topMenu = document.querySelector('.top-menu');
const mobileMenuIcon = document.querySelector('.mobile-menu__icon');
mobileMenuBtn.addEventListener('click', (e) => {
    // topHeader.classList.toggle('header-dark-thema');
    topMenu.classList.toggle('top-menu_checked');
    mobileMenuIcon.classList.toggle('mobile-menu__icon_checked');
})