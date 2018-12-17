var hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', toggleMenu);

function toggleMenu(event) {
    var sideBar = document.getElementById('side-bar');
    //var main = document.getElementById('main');
    sideBar.classList.toggle('menu-collapsed');
    sideBar.classList.toggle('menu-sm-expanded');
}
