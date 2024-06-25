import { gsap } from 'gsap';

const header = document.querySelector('.header');
const infoTop = document.querySelector('.info');

const charge = document.querySelector('.charge');
const fulls = document.querySelectorAll('.full');

let scrollTop = window.scrollY;

window.addEventListener('scroll', () => {
    scrollTop = window.scrollY;

    if (scrollTop > header.offsetHeight) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});