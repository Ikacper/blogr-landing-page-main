const burger = document.querySelector(".header__burger");
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav--active')
    burger.classList.toggle('burger--close')
})

const nav__arrows = document.querySelectorAll('.nav__title');

nav__arrows.forEach(arrow => arrow.addEventListener('click',() => {
    
    if(arrow.firstElementChild.classList.contains('arrow__path--active')){
        arrow.firstElementChild.classList.remove('arrow__path--active');
        arrow.nextElementSibling.classList.remove('nav__list--active');
    }else{
        nav__arrows.forEach(element => {
            element.firstElementChild.classList.remove('arrow__path--active');
            element.nextElementSibling.classList.remove('nav__list--active');
        });
        arrow.firstElementChild.classList.toggle('arrow__path--active')
        arrow.nextElementSibling.classList.toggle('nav__list--active')
    } 
}))

