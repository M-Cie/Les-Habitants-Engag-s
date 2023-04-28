// const btnMenu = document.querySelector('.menu-burger');
// const menu = document.querySelector('.liste-nav');
// btnMenu.addEventListener('click', () => {
//     menu.classList.toggle('active')
// })

const menuParent = document.querySelectorAll('.liste-nav li.item-nav');
const menuItems = document.querySelectorAll('.line');

menuParent.forEach((parent, index) => {
  let menuState = false;

  parent.addEventListener('click', () => {
    if (!menuState) {
      menuItems[index].classList.add('active');
      menuState = true;
    } else {
      menuItems[index].classList.remove('active');
      menuState = false;
    }
  });
});
