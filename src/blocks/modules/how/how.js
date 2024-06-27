import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const itemsArray = gsap.utils.toArray('.how__item');

itemsArray.forEach((item) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top top',
            end: '+=500',
            onLeaveBack: () => {
                const shadow = item.querySelector('.shadow');
                shadow.classList.remove('show');
            },
        }
    });

    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top top',
            end: '+=500',
            toggleActions: 'none none none none',
            onEnter: () => {
                const shadow = item.querySelector('.shadow');
                shadow.classList.add('show');
            },
        }   
    });
});