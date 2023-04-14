const btnMenu = document.querySelector('.menu-burger');
const menu = document.querySelector('.liste-nav');
btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active')
})