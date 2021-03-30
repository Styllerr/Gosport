const visualBlock = document.querySelector('.visual-block');
if (visualBlock) {
    const anchors = document.querySelectorAll('a[href*="#"]');
    if (anchors || anchors.length > 0) {
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
if (btnName) {
    window.addEventListener('resize', (e) => {
        widthBrouser = window.innerWidth;
        (widthBrouser < 1051) ? btnName.innerText = 'Our catalogue'
            : btnName.innerHTML = 'Catalogue'
    })
}

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
const modalConteiner = document.querySelector('.packages__modal-conteiner');
if (modalConteiner) {
    const bronzeLink = document.getElementById('bronzePackageLink');
    const bronzeCross = document.getElementById('bronze-btn-cross');
    const bronzeClose = document.getElementById('bronze-btn-group');
    const bronzeBook = document.getElementById('bronze-btn-book');

    const silverLink = document.getElementById('silverPackageLink');
    const silverCross = document.getElementById('silver-btn-cross');
    const silverClose = document.getElementById('silver-btn-group');
    const silverBook = document.getElementById('silver-btn-book');

    const goldLink = document.getElementById('goldPackageLink');
    const goldCross = document.getElementById('gold-btn-cross');
    const goldClose = document.getElementById('gold-btn-group');
    const goldBook = document.getElementById('gold-btn-book');

    const platinumLink = document.getElementById('platinumPackageLink');
    const platinumCross = document.getElementById('platinum-btn-cross');
    const platinumClose = document.getElementById('platinum-btn-group');
    const platinumBook = document.getElementById('platinum-btn-book');


    bronzeLink.addEventListener('click', (e) => {
        showModal('bronzePackage');
        bronzeClose.addEventListener('click', handlerBronzeModal);
        bronzeCross.addEventListener('click', handlerBronzeModal);
        bronzeBook.addEventListener('click', handlerBronzeModal);
    })
    silverLink.addEventListener('click', (e) => {
        showModal('silverPackage');
        silverClose.addEventListener('click', handlerSilverModal);
        silverCross.addEventListener('click', handlerSilverModal);
        silverBook.addEventListener('click', handlerSilverModal);
    })
    goldLink.addEventListener('click', (e) => {
        showModal('goldPackage');
        goldClose.addEventListener('click', handlerGoldModal);
        goldCross.addEventListener('click', handlerGoldModal);
        goldBook.addEventListener('click', handlerGoldModal);
    })
    platinumLink.addEventListener('click', (e) => {
        showModal('platinumPackage');
        platinumClose.addEventListener('click', handlerPlatinumModal)
        platinumCross.addEventListener('click', handlerPlatinumModal)
        platinumBook.addEventListener('click', handlerPlatinumModal)
    })

    function handlerBronzeModal(e) {
        bronzeClose.removeEventListener('click', handlerBronzeModal)
        bronzeCross.removeEventListener('click', handlerBronzeModal)
        bronzeBook.removeEventListener('click', handlerBronzeModal)
        closeModal('bronzePackage');
    }
    function handlerSilverModal(e) {
        silverClose.removeEventListener('click', handlerSilverModal)
        silverCross.removeEventListener('click', handlerSilverModal)
        silverBook.removeEventListener('click', handlerSilverModal)
        closeModal('silverPackage');
    }
    function handlerGoldModal(e) {
        goldClose.removeEventListener('click', handlerGoldModal);
        goldCross.removeEventListener('click', handlerGoldModal);
        goldBook.removeEventListener('click', handlerGoldModal);
        closeModal('goldPackage');
    }
    function handlerPlatinumModal(e) {
        closeModal('platinumPackage');
        platinumClose.removeEventListener('click', handlerPlatinumModal)
        platinumCross.removeEventListener('click', handlerPlatinumModal)
        platinumBook.removeEventListener('click', handlerPlatinumModal)
    }
    function showModal(id) {
        modalConteiner.classList.add('packages__modal-conteiner_active');
        document.getElementById(id).classList.add('modal-card_active');
        document.body.style.overflow = 'hidden';
    }
    function closeModal(id) {
        modalConteiner.classList.remove('modal-card_active', 'packages__modal-conteiner_active');
        document.getElementById(id).classList.remove('modal-card_active');
        document.body.style.overflow = 'auto';
    }
}