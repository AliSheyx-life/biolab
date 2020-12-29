////////////////////////
// Burger Menu
document.querySelector('.header-nav__burger').onclick = () => document.querySelector('.header-nav').classList.toggle('open');

////////////////////////
// Making Header Slider
const headerSlides = document.querySelectorAll('.header-banner__slider-items');
document.querySelector('.header-banner__slider_arrow-next').onclick = nextHeaderSlide;
document.querySelector('.header-banner__slider_arrow-prev').onclick = prevHeaderSlide;

let slides = 0;
let timer; 
autoplay()

function nextHeaderSlide() {
    headerSlides[slides].classList.remove('active');
    slides++;
    if (slides == headerSlides.length) {
        slides = 0;
    };
    headerSlides[slides].classList.add('active');
    
    clearTimeout(timer);
    autoplay();
};

function prevHeaderSlide() {
    headerSlides[slides].classList.remove('active');
    slides--;
    if (slides < 0) {
        slides = headerSlides.length - 1;
    };
    headerSlides[slides].classList.add('active');
    
    clearTimeout(timer);
    autoplay();
};

function autoplay() {
    timer = setTimeout(nextHeaderSlide, 3000);
};