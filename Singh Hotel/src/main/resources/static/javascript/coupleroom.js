document.addEventListener("DOMContentLoaded", function() {
  let slides = document.getElementsByClassName("mySlides");

  if (slides.length > 0) {
    slides[0].style.display = "block";
  }

  let slideIndex = 1;

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let dots = document.getElementsByClassName("demo");

    if (slides.length === 0) {
      return; // No slides found, exit function
    }

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  showSlides(slideIndex);
});
