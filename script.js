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

    const swipercontainer = new Swiper('.swiper-container', {
        slidesPerView: 3, 
        spaceBetween: 50, 
        grabCursor: true, 
        loop: true,
        centeredSlides: true, 
        pagination: {
        delay: 0 
        },
    });

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxClose = document.querySelector('.lightbox-close-btn');
  

    document.querySelectorAll('.portfolio-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const imgSrc = item.getAttribute('href');
        lightboxImg.src = imgSrc;
        lightbox.style.display = 'flex';
      });
    });
  
    lightboxClose.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });
    });
