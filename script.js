// Funkcja do przełączania widocznego slajdu
function showSlide(id) {
  document.querySelectorAll('.slide').forEach(slide => slide.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// --- Przyciski między slajdami ---
document.getElementById('toSlide2')?.addEventListener('click', () => showSlide('slide2'));
document.getElementById('toSlide3')?.addEventListener('click', () => showSlide('slide3'));

// --- Przyciski WRÓĆ ---
document.getElementById('backTo1')?.addEventListener('click', () => showSlide('slide1'));
document.getElementById('backTo2')?.addEventListener('click', () => showSlide('slide2'));
document.getElementById('backToMain')?.addEventListener('click', () => showSlide('slide1'));
document.getElementById('backToVHS')?.addEventListener('click', () => showSlide('slide4'));

// --- Tutorial ---
document.getElementById('tutorial-btn')?.addEventListener('click', () => {
  window.open('https://www.youtube.com/watch?v=7RBzlzVCM8E', '_blank');
});

// --- Link VHS STUDIO otwiera nowy slide ---
document.getElementById('studioLink')?.addEventListener('click', () => showSlide('slide4'));

// --- Aktualizacje w School Night ---
document.getElementById('updates-btn')?.addEventListener('click', () => {
  alert("Brak nowych aktualizacji 😎");
});

// --- VHS Aktualizacje (otwiera slide 5) ---
document.getElementById('vhsUpdates')?.addEventListener('click', () => showSlide('slide5'));
