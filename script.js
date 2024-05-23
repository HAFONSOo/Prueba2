let currentSlide = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const totalItems = document.querySelectorAll('.carousel-item').length;

    currentSlide += direction;

    if (currentSlide >= totalItems) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalItems - 1;
    }

    const newTransformValue = -currentSlide * 100;
    carousel.style.transform = `translateX(${newTransformValue}%)`;
}