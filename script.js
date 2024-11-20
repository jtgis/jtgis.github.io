const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
    slides[currentSlide].classList.add('active');
}

// Automatically change slides every 5 seconds
setInterval(showNextSlide, 5000);

// Show the first slide initially
slides[currentSlide].classList.add('active');
