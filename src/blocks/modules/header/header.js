import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let scrollTop = window.scrollY;

const header = document.querySelector('.header');
const mainContent = document.querySelector('.main-content-left');
const sections = mainContent.querySelectorAll('section');
const charge = document.querySelector('.charge');
const fulls = document.querySelectorAll('.full');

const menuBtn = document.querySelectorAll('.header__menu-item');

const sectionsArray = gsap.utils.toArray(sections);
const animations = gsap.utils.toArray('.js-animation-show');

window.addEventListener('scroll', () => {
    scrollTop = window.scrollY;

    if (scrollTop > header.offsetHeight) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});

sectionsArray.forEach((section, index) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,       
            start: 'top 80%',   
            end: 'bottom bottom',
            onEnter: () => {
                if (index > 0) {
                    showFulls(index);
                    charge.classList.add('hidden');
                } else {
                    hideFulls();
                }
            },

            onLeaveBack: () => {
                if (index === 0) {
                    charge.classList.remove('hidden');
                }
                if (index > 1) {
                    showFulls(index - 1);
                } else {
                    hideFulls();
                }
            },
        },
    })

    gsap.to(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',  
            end: 'bottom bottom',    
            onEnter: () => {
                if (index > 0) {
                    showFulls(index);
                    charge.classList.add('hidden');
                } else {        
                    hideFulls();
                }
            },

            onLeaveBack: () => {
                if (index === 0) {
                    charge.classList.remove('hidden');
                }
                if (index > 1) {
                    showFulls(index - 1);
                } else {
                    hideFulls();
                }
            },
        },
    })
});

function showFulls(id) {
    fulls.forEach((full, index) => {
        if (index <= id - 1) {
            full.classList.remove('hidden');
            full.classList.add('show');
        } else {
            full.classList.add('hidden');
            full.classList.remove('show');
        }
    });
}

function hideFulls() {
    fulls.forEach((full) => {
        full.classList.add('hidden');
        full.classList.remove('show');
        charge.classList.remove('hidden');
    });
}

animations.forEach((item) => {
    const parent = item.closest('section');

    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top +=500',
            onEnter: () => {
                item.classList.add('showing');
            },
        },
    });

    gsap.to(item, {
        scrollTrigger: {    
            trigger: item,
            start: 'top 50%',
            onEnter: () => {
                item.classList.add('showing');
            },
        },
    });
});
