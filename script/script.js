const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
    anchor.addEventListener('click', (e) =>{
        e.preventDefault();
        const blockName = anchor.getAttribute('href').slice(1);
        document.querySelector(`a[id*=${blockName}]`).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    } )
}