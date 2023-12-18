const togglebtn = document.querySelector('.togglebtn');
const menu = document.querySelector('.header__nav')

togglebtn.addEventListener('click', ()=> {
    menu.classList.toggle('active')
});