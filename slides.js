window.onload = function () {
  let slideNodes = document.querySelectorAll('.carousel-slide');
  let slides = Array.prototype.slice.call(slideNodes);
  let left = document.querySelector('#carousel-btn-left');
  let right = document.querySelector('#carousel-btn-right');
  let indicator = document.querySelector('#carousel-scroll-indicator');

  // Add bullets to the scoll indicator section for each slide
  for (let i = 0; i < slides.length; i++) {
    let pip = document.createElement('i');
    pip.className = 'carousel-pip fa fa-square';
    indicator.appendChild(pip);
  }
  let pips = document.querySelectorAll('.carousel-pip');
  pips[0].classList.toggle('carousel-pip-active');

  let currentSlideIndex = 0;

  function nextSlide () {
    if (currentSlideIndex < slides.length - 1) {
      slides[currentSlideIndex].className = 'carousel-slide carousel-slide-left';
      slides[currentSlideIndex + 1].className = 'carousel-slide carousel-slide-active';
      pips[currentSlideIndex].classList.toggle('carousel-pip-active');
      pips[currentSlideIndex + 1].classList.toggle('carousel-pip-active');
      currentSlideIndex++;
    }
  }

  function prevSlide () {
    if (currentSlideIndex > 0) {
      slides[currentSlideIndex].className = 'carousel-slide carousel-slide-right';
      slides[currentSlideIndex - 1].className = 'carousel-slide carousel-slide-active';
      pips[currentSlideIndex].classList.toggle('carousel-pip-active');
      pips[currentSlideIndex - 1].classList.toggle('carousel-pip-active');
      currentSlideIndex--;
    }
  }

  left.addEventListener('click', prevSlide);
  right.addEventListener('click', nextSlide);
};
