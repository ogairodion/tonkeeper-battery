window.addEventListener('load', () => {
    const animations = document.querySelectorAll('.js-main-animation');
    let counter = 0;
    
    animations.forEach((animation) => {
        setTimeout(() => {
            animation.classList.add('showing');
        }, counter);

        counter += 200;
    });
});