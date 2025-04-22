let currentIndex = 0;
const slides = document.querySelectorAll('.hero img');

function changeSlide() {
  const currentSlide = slides[currentIndex];
  const nextIndex = (currentIndex + 1) % slides.length;
  const nextSlide = slides[nextIndex];

  currentSlide.classList.remove('active');
  nextSlide.classList.add('active');

  currentSlide.classList.add('prev');
  nextSlide.classList.remove('prev');

  currentIndex = nextIndex;
}

setInterval(changeSlide, 3000);  // 3秒ごとにスライドを切り替え
