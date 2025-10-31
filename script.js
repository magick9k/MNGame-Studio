// Funkcja do przełączania slajdów
function showSlide(id) {
  document.querySelectorAll('.slide').forEach(slide => {
    slide.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

// Obsługa przycisków przejścia między slajdami
const toSlide2 = document.getElementById('toSlide2');
const toSlide3 = document.getElementById('toSlide3');
const tutorialBtn = document.getElementById('tutorial-btn');

if (toSlide2) {
  toSlide2.addEventListener('click', () => showSlide('slide2'));
}

if (toSlide3) {
  toSlide3.addEventListener('click', () => showSlide('slide3'));
}

// Tutorial — otwiera film w nowej karcie
if (tutorialBtn) {
  tutorialBtn.addEventListener('click', () => {
    window.open('https://www.youtube.com/watch?v=7RBzlzVCM8E', '_blank');
  });
}
