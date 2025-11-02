const navbarMenu = document.querySelector('.navbar_menu');
const hamburgerBtn = document.querySelector('.navbar_hamburger');
const overlay = document.querySelector('.overlay');
const hamburgerImg = hamburgerBtn.querySelector('img');

function toggleMenu() {
    const isActive = hamburgerBtn.dataset.mobile === 'active';
    hamburgerBtn.dataset.mobile = isActive ? 'inactive' : 'active';
    overlay.style.visibility = isActive ? 'visible' : 'hidden';
    navbarMenu.style.display = isActive ? 'flex' : 'none';
}

hamburgerBtn.addEventListener('click', toggleMenu);