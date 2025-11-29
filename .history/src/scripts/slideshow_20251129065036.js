document.addEventListener("DOMContentLoaded", () => {
    // 1. Select all slide items using querySelectorAll
    const slides = document.querySelectorAll(".slide-item");
    // 2. Select buttons correctly by getting the first element of the collection
    const prevButton = document.getElementsByClassName("prev")[0];
    const nextButton = document.getElementsByClassName("next")[0];
    let currentSlide = 0;

    export function showSlide(index) {
        slides.forEach((slide) => {
            // FIX 1: 'none' must be a string 'none'
            slide.style.display = 'none';
        });

        if (slides.length > 0) {
            // Display the current slide as flex (to respect Tailwind classes)
            slides[index].style.display = "flex";
        }
    }

    function nextSlide() {
        // FIX 2: Use slides.length instead of the undefined slide.length
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        // FIX 3: Define prevSlide and handle the wrap-around correctly
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Attach listeners to the button elements
    if (nextButton) {
        nextButton.addEventListener("click", nextSlide);
    }
    if (prevButton) {
        prevButton.addEventListener("click", prevSlide);
    }

    // Initialize: show the first slide
    showSlide(currentSlide);
});