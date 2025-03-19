let slideIndex = 0;

function moveSlide(step) {
  let slides = document.querySelectorAll(".carousel-images img");
  slideIndex += step;

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;  // Go to the last slide
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;  // Go back to the first slide
  }

  // Hide all slides and display the current one
  slides.forEach((slide, index) => {
    slide.style.display = (index === slideIndex) ? "block" : "none";
  });
}

// Initialize carousel by showing the first image
document.addEventListener('DOMContentLoaded', () => {
  moveSlide(0); // Show the first slide
});
