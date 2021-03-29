const mobileMenuBtn = document.querySelector('.mobile-menu__btn');
const darkThema = document.querySelector('.header-dark-thema') || null;
const topHeader = document.querySelector('.top-header')
const topMenu = document.querySelector('.top-menu');
const mobileMenuIcon = document.querySelector('.mobile-menu__icon');
mobileMenuBtn.addEventListener('click', (e) => {
    darkThema ? topHeader.classList.toggle('header-dark-thema')
    : null
    topMenu.classList.toggle('top-menu_checked');
    mobileMenuIcon.classList.toggle('mobile-menu__icon_checked');
})

const subMenu = document.querySelector('.sub-menu');
const subMeluList = document.querySelector('.sub-menu__list');
subMenu.addEventListener('click', (e) => {
    subMenu.classList.toggle('sub-menu_show');
    subMeluList.classList.toggle('sub-menu__list_show');
})
