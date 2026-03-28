let currentSlide = 0;
const slides = document.querySelectorAll('.first-slideshow img');

function showSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentSlide].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide();
}

setInterval(nextSlide, 4000); 


const slider = document.querySelector(".slider");
const cards = document.querySelectorAll(".card");
const nextBtn = document.querySelector(".right");
const prevBtn = document.querySelector(".left");

let index = 0;

function getCardsPerView() {
  if (window.innerWidth <= 480) return 2;   // 📱 mobile
  if (window.innerWidth <= 768) return 3;   // tablet
  return 5;                                 // desktop
}

function updateSlider() {
  const card = cards[0];

  const cardWidth = card.offsetWidth;
  const gap = parseInt(window.getComputedStyle(slider).gap) || 0;

  const totalMove = index * (cardWidth + gap);

  slider.style.transform = `translateX(-${totalMove}px)`;
}

nextBtn.addEventListener("click", () => {
  const cardsPerView = getCardsPerView();
  const maxIndex = cards.length - cardsPerView;

  index += cardsPerView;

  if (index > maxIndex) {
    index = maxIndex;
  }

  updateSlider();
});

prevBtn.addEventListener("click", () => {
  const cardsPerView = getCardsPerView();

  index -= cardsPerView;

  if (index < 0) {
    index = 0;
  }

  updateSlider();
});

/* 🔄 Reset on resize */
window.addEventListener("resize", () => {
  index = 0;
  updateSlider();
});