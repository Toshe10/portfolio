const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-nav');
const navLogo = document.querySelector('.navbar-brand');

// Display Mobile Menu
function mobileMenu()  {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

}

menu.addEventListener('click', mobileMenu);

// Close mobile Menu when clicking on a menu item 
function hideMobileMenu() {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 960 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);