document.addEventListener("DOMContentLoaded", function () {
  var accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach(function (header) {
    header.addEventListener("click", function () {
      var accordionItem = this.parentNode;
      var content = accordionItem.querySelector(".accordion-content");

      accordionItem.classList.toggle("active");

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var carouselTrack = document.querySelector(".carousel-track");
  var carouselSlides = Array.from(document.querySelectorAll(".carousel-slide"));
  var prevButton = document.querySelector(".carousel-prev");
  var nextButton = document.querySelector(".carousel-next");

  var slideWidth = carouselSlides[0].getBoundingClientRect().width;
  var slideIndex = 0;

  function moveToSlide(index) {
    carouselTrack.style.transform = "translateX(-" + slideWidth * index + "px)";
    slideIndex = index;
  }

  prevButton.addEventListener("click", function () {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = carouselSlides.length - 1;
    }
    moveToSlide(slideIndex);
  });

  nextButton.addEventListener("click", function () {
    slideIndex++;
    if (slideIndex >= carouselSlides.length) {
      slideIndex = 0;
    }
    moveToSlide(slideIndex);
  });
});
