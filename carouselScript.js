<script>
  let slideIndex = 0;

  function moveSlide(step) {
    const slides = document.querySelectorAll('#certification-carousel .carousel-images img');
    slideIndex += step;

    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
      slideIndex = 0;
    }

    const newTransform = -slideIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${newTransform}%)`;
  }
</script>
