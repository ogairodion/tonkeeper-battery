import Swiper from 'swiper';
import { Pagination, EffectFade } from 'swiper/modules';

const startSlider = new Swiper('.start__slider', {
    modules: [EffectFade, Pagination],
    effect: 'fade',
    slidesPerView: 1,
    resistance: 0,
    resistanceRation: false,
    speed: 800,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});