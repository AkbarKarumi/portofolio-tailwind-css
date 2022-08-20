//navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}



// Dropdown
const dropdown = document.querySelector('#dropdown');
const navMenu = document.querySelector('#nav-menu');

dropdown.addEventListener('click', function() {
    dropdown.classList.toggle('dropdown-active');
    navMenu.classList.toggle('hidden');
});