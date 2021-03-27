const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const blockName = anchor.getAttribute('href').slice(1);
        document.querySelector(`a[id*=${blockName}]`).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

window.addEventListener('scroll', (e) => {
    if(window.scrollY > 10) {
        document.querySelector('.start-screen__btn-down').style.display = 'none';
        
    } else {
        document.querySelector('.start-screen__btn-down').style.display = 'block';
    }
})
let widthBrouser = window.innerWidth;
const btnName = document.querySelector('.caption__link > a')
window.addEventListener('resize', (e) => {
    widthBrouser = window.innerWidth;
    (widthBrouser < 1051) ? btnName.innerText = 'Our catalogue'
    : btnName.innerHTML = 'Catalogue'
})

const mobileMenuBtn = document.querySelector('.mobile-menu__btn');

const topHeader = document.querySelector('.top-header')
const topMenu = document.querySelector('.top-menu');
const mobileMenuIcon = document.querySelector('.mobile-menu__icon');

mobileMenuBtn.addEventListener('click', (e) => {
    topHeader.classList.toggle('header-dark-thema');
    topMenu.classList.toggle('top-menu_checked');
    mobileMenuIcon.classList.toggle('mobile-menu__icon_checked');
})

