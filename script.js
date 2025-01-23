document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM completamente caricato!');

    const buttonclick = () => {
        console.log('Button clicked');
    };

    const button = document.getElementById('cta-button');
    if (button) { 
        button.addEventListener('click', buttonclick);
    }

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
         });
    });
});

    //  Swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3, 
    spaceBetween: 50, 
    grabCursor: true, 
    loop: true,
    centeredSlides: true, 
    pagination: {
        delay: 3000, 
        },
    });
});
