var menuToggle = document.getElementById('menu-toggle');
menuToggle.addEventListener('click', function toggleMenu(event){
    var sideBar = document.getElementById('side-bar');
    sideBar.classList.toggle('short-menu');
});
