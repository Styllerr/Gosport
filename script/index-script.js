const visualBlock = document.querySelector('.visual-block') || null;
if(visualBlock) {
    const anchors = document.querySelectorAll('a[href*="#"]');
    if(anchors || anchors.length > 0) {
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
    }
}
const startScreenBtn = document.querySelector('.start-screen__btn-down');
if (startScreenBtn) {
    window.addEventListener('scroll', (e) => {
        if (window.scrollY > 10) {
            startScreenBtn.style.display = 'none';

        } else {
            startScreenBtn.style.display = 'block';
        }
    })
}
let widthBrouser = window.innerWidth;
const btnName = document.querySelector('.caption__link > a')
window.addEventListener('resize', (e) => {
    widthBrouser = window.innerWidth;
    (widthBrouser < 1051) ? btnName.innerText = 'Our catalogue'
        : btnName.innerHTML = 'Catalogue'
})

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

const bronzeLink = document.getElementById('bronzePackageLink');
const silverLink = document.getElementById('silverPackageLink');
const goldLink = document.getElementById('goldPackageLink');
const platinumLink = document.getElementById('platinumPackageLink');
bronzeLink.addEventListener('click', (e) => {
    document.querySelector('.packages__modal-conteiner').classList.add('packages__modal-conteiner_active');
    document.getElementById('bronzePackage').classList.add('modal-card_active');
})
silverLink.addEventListener('click', (e) => {
    document.querySelector('.packages__modal-conteiner').classList.add('packages__modal-conteiner_active');
})
goldLink.addEventListener('click', (e) => {
    document.querySelector('.packages__modal-conteiner').classList.add('packages__modal-conteiner_active');
})
platinumLink.addEventListener('click', (e) => {
    document.querySelector('.packages__modal-conteiner').classList.add('packages__modal-conteiner_active');
})