// Funkcja do pokazywania konkretnego slajdu
function showSlide(id) {
  document.querySelectorAll('.slide').forEach(slide => slide.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// === Przejścia do przodu ===
const toSlide2 = document.getElementById('toSlide2');
const toSlide3 = document.getElementById('toSlide3');
const tutorialBtn = document.getElementById('tutorial-btn');

if (toSlide2) {
  toSlide2.addEventListener('click', () => showSlide('slide2'));
}

if (toSlide3) {
  toSlide3.addEventListener('click', () => showSlide('slide3'));
}

// === Przyciski Wróć ===
const backTo1 = document.getElementById('backTo1');
const backTo2 = document.getElementById('backTo2');

if (backTo1) {
  backTo1.addEventListener('click', () => showSlide('slide1'));
}

if (backTo2) {
  backTo2.addEventListener('click', () => showSlide('slide2'));
}

// === Tutorial (YouTube) ===
if (tutorialBtn) {
  tutorialBtn.addEventListener('click', () => {
    window.open('https://www.youtube.com/watch?v=7RBzlzVCM8E', '_blank');
  });
}

// === Aktualizacje (dla przykładu otwiera stronę, można zmienić) ===
const updatesBtn = document.getElementById('updates-btn');
if (updatesBtn) {
  updatesBtn.addEventListener('click', () => {
    alert("Brak nowych aktualizacji 😎");
  });
}
