//navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}



// Dropdown
const dropdown = document.querySelector('#dropdown');
const navMenu = document.querySelector('#nav-menu');

dropdown.addEventListener('click', function() {
    dropdown.classList.toggle('dropdown-active');
    navMenu.classList.toggle('hidden');
});

//click luar dropdown
window.addEventListener('click',function(e) {
    if (e.target != dropdown && e.target != navMenu){
        dropdown.classList.remove('dropdown-active');
        navMenu.classList.add('hidden');
    }
});

//dark Mode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

//posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }