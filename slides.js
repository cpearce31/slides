window.onload = function () {
  let slides = document.querySelectorAll('.carousel-slide');
  let left = document.querySelector('#carousel-btn-left');
  let right = document.querySelector('#carousel-btn-right');
  let indicator = document.querySelector('#carousel-scroll-indicator');
  let wrapper = document.querySelector('#carousel-wrapper');

  // Add bullets to the scoll indicator section for each slide
  for (let i = 0; i < slides.length; i++) {
    let pip = document.createElement('i');
    pip.className = 'carousel-pip fa fa-square';
    pip.toggle = function () {
      this.classList.toggle('carousel-pip-active');
    };
    indicator.appendChild(pip);
  }
  let pips = document.querySelectorAll('.carousel-pip');

  let currentPip = 0;
  pips[currentPip].toggle();
  function changePip (direction) {
    pips[currentPip].toggle();
    if (direction === 'right') {
      if (currentPip === slides.length - 1) {
        currentPip = -1;
      }
      currentPip++;
      pips[currentPip].toggle();
    } else {
      if (currentPip === 0) {
        currentPip = slides.length - 1;
      }
      currentPip--;
      pips[currentPip].toggle();
    }
  }

  function nextSlide () {
    slides[0].classList.toggle('carousel-slide-left');
    slides[0].classList.toggle('carousel-slide-active');
    slides[1].classList.toggle('carousel-slide-active');
    changePip('right');
    let forwardTimeout = setTimeout(function () {
      wrapper.appendChild(slides[0]);
      slides[0].classList.toggle('carousel-slide-left');
      slides = document.querySelectorAll('.carousel-slide');
    }, 600);
  }

  function prevSlide () {
    wrapper.insertBefore(slides[slides.length - 1], slides[0]);
    slides = document.querySelectorAll('.carousel-slide');
    slides[0].classList.toggle('carousel-slide-left');
    window.getComputedStyle(wrapper);
    slides[0].classList.toggle('carousel-slide-left');
    slides[0].classList.toggle('carousel-slide-active');
    slides[1].classList.toggle('carousel-slide-active');
    changePip('left');

  }

  left.addEventListener('click', prevSlide);
  right.addEventListener('click', nextSlide);
};
