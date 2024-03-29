const carousel = document.querySelector('.Carousel');
const slides = document.querySelectorAll('.Carousel-slider');
let currentIndex = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

// Automatic slide change
let intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds

