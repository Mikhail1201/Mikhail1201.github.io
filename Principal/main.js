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
 

let currentIndex = 0;

const items = document.querySelectorAll('.DEMA-carousel-item-2');
const prevBtn = document.querySelector('.DEMA-prev-btn-2');
const nextBtn = document.querySelector('.DEMA-next-btn-2');


function updateCarousel(direction) {
    items.forEach((item, index) => {
        item.classList.remove('active', 'prev', 'next'); 

        if (index === currentIndex) {
            item.classList.add('active'); 
        } 

        else if (
            direction === 'next' &&
            index === (currentIndex - 1 + items.length) % items.length
        ) {
            item.classList.add('prev');
        } 

        else if (
            direction === 'prev' &&
            index === (currentIndex + 1) % items.length
        ) {
            item.classList.add('next');
        }
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length; 
    updateCarousel('prev'); 
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length; 
    updateCarousel('next');
});

updateCarousel();

function toggleInfo(id) {
    const info = document.getElementById(id);
    info.classList.toggle('open');
}