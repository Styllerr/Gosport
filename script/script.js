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
    console.log(widthBrouser, btnName);
    (widthBrouser < 769) ? btnName.innerHTML('Our catalogue')
    : btnName.innerHTML('Catalogue')
})
console.log(widthBrouser);