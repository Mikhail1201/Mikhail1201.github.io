document.getElementById('hamburger-menu').addEventListener('click', () => {
    const navMenu = document.querySelector('nav');

    if (navMenu.classList.contains('DEMA-active')) {
        navMenu.classList.remove('DEMA-active');
        navMenu.classList.add('DEMA-close'); 
    } else {
        navMenu.classList.remove('DEMA-close'); 
        navMenu.classList.add('DEMA-active'); 
    }
});

let currentSlide1 = 0; 
function moveSlide(step) {
    const slides = document.querySelectorAll(".DEMA-carousel-item");
    const totalSlides = slides.length;
    
    currentSlide1 = (currentSlide1 + step + totalSlides) % totalSlides;
    
    const carouselContainer = document.querySelector(".DEMA-carousel-container");
    carouselContainer.style.transform = `translateX(-${currentSlide1 * 100}%)`;
}

setInterval(() => {
    moveSlide(1);
}, 5000);
 
let currentSlide2 = 0;
function moveSlide2(step) {
    const slides = document.querySelectorAll(".DEMA-carousel-item-2");
    const carouselContainer = document.querySelector(".DEMA-carousel-container-2");

    const totalSlides = slides.length;
    const containerWidth = carouselContainer.offsetWidth;
    const slideWidth = slides[0].offsetWidth + parseFloat(getComputedStyle(carouselContainer).gap);

    currentSlide2 = (currentSlide2 + step + totalSlides) % totalSlides;

    const offset = -(currentSlide2 * slideWidth - (containerWidth - slideWidth) / 4);
    carouselContainer.style.transform = `translateX(${offset}px)`;

    slides.forEach((slide, index) => {
        if (index === currentSlide2) {
            slide.classList.add("DEMA-active");
        } else {
            slide.classList.remove("DEMA-active");
        }
    });
}

window.addEventListener("resize", () => moveSlide2(0));
document.addEventListener("DOMContentLoaded", () => moveSlide2(0));


document.querySelectorAll('.DEMA-info-btn-2').forEach(button => {
    button.addEventListener('click', function() {
      const teamInfo = this.closest('.DEMA-carousel-item-2').querySelector('.DEMA-team-info-2');
      
    if (teamInfo.classList.contains('DEMA-active')) {
        teamInfo.classList.remove('DEMA-active'); 
        teamInfo.classList.add('DEMA-close'); 
    } else {
        teamInfo.classList.remove('DEMA-close');
        teamInfo.classList.add('DEMA-active');
    }});
});
