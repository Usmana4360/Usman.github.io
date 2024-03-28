let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  if (slideIndex >= slides.length) { slideIndex = 0; }
  if (slideIndex < 0) { slideIndex = slides.length - 1; }
  slides.forEach(slide => slide.style.display = 'none');
  slides[slideIndex].style.display = 'block';
}

document.querySelector('.prev').addEventListener('click', () => {
  slideIndex--;
  showSlides();
});

document.querySelector('.next').addEventListener('click', () => {
  slideIndex++;
  showSlides();
});
