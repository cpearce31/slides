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
};
