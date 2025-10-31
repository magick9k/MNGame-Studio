// System slajdów
const historyStack = [];

function showSlide(id, pushHistory = true) {
  const current = document.querySelector('.slide.active');
  const next = document.getElementById(id);
  if (!next) return;

  if (pushHistory && current) historyStack.push(current.id);

  document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
  next.classList.add('active');
}

function goBack() {
  const prev = historyStack.pop();
  if (prev) showSlide(prev, false);
  else showSlide('slide1', false);
}

// --- Główne przyciski ---
document.getElementById('download-btn').addEventListener('click', () => showSlide('slide2'));
document.getElementById('tutorial-btn').addEventListener('click', () => {
  window.open('https://www.youtube.com/watch?v=7RBzlzVCM8E', '_blank');
});

// --- School Night ---
document.getElementById('schoolNightBtn').addEventListener('click', () => showSlide('slide3'));
document.getElementById('schoolDownload').addEventListener('click', () => {
  window.open('https://mega.nz/fm/PVM0DDKC', '_blank');
});
document.getElementById('updates-btn').addEventListener('click', () => {
  alert('Brak nowych aktualizacji dla School Night.');
});

// --- VHS Night ---
document.getElementById('studioLink').addEventListener('click', (e) => {
  e.preventDefault();
  showSlide('slide4');
});
document.getElementById('vhsDownload').addEventListener('click', () => {
  window.open('https://mega.nz/folder/JFxWmBYR#vl3CXHMW_NCAP0Fcw7NVcw', '_blank');
});
document.getElementById('vhsUpdates').addEventListener('click', () => showSlide('slide5'));

// --- Back Buttons ---
document.querySelectorAll('.back-btn').forEach(btn => {
  btn.addEventListener('click', () => goBack());
});
