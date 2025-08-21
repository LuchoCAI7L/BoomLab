const menuhamburguesa = document.querySelector('.menuhamburguesa');
const menu = document.getElementById('menu');
const cierre = document.querySelector('.cierre');

menuhamburguesa.addEventListener('click', () => {
  menu.classList.toggle('active');

});

cierre.addEventListener('click', () => {
  menu.classList.remove('active');

});

let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;
changeSlide(0);

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  indicators.forEach(indicator => indicator.classList.remove('active'));

  slides[index].classList.add('active');
  indicators[index].classList.add('active');
}

function changeSlide(direction) {
  currentSlideIndex += direction;

  if (currentSlideIndex >= totalSlides) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = totalSlides - 1;
  }
  console.log(currentSlideIndex);
  showSlide(currentSlideIndex);
}

function currentSlide(index) {
  currentSlideIndex = index - 1;
  showSlide(currentSlideIndex);
}