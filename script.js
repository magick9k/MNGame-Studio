document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const historyStack = [];

  function showSlide(id, push = true) {
    slides.forEach(s => s.classList.remove('active'));
    const next = document.getElementById(id);
    if (next) {
      next.classList.add('active');
      if (push) historyStack.push(id);
    }
  }

  function goBack() {
    historyStack.pop(); // usuń obecny
    const prev = historyStack.pop(); // pobierz poprzedni
    if (prev) showSlide(prev, false);
    else showSlide('slide1', false);
  }

  // ====== School Night ======
  document.getElementById('download-btn').addEventListener('click', () => showSlide('slide2'));
  document.getElementById('tutorial-btn').addEventListener('click', () => {
    window.open('https://www.youtube.com/watch?v=7RBzlzVCM8E', '_blank');
  });
  document.getElementById('schoolNightBtn').addEventListener('click', () => showSlide('slide3'));
  document.getElementById('schoolDownload').addEventListener('click', () => {
    window.open('https://mega.nz/fm/PVM0DDKC', '_blank');
  });

  document.getElementById('updates-btn').addEventListener('click', () => {
    const box = document.getElementById('updatesBox');
    box.innerHTML = `
      <div class="desc">
        <h3>Aktualizacje School Night</h3>
        <p>Brak nowych aktualizacji.</p>
      </div>`;
  });

  // ====== VHS Night ======
  document.getElementById('studioLink').addEventListener('click', (e) => {
    e.preventDefault();
    showSlide('slide4');
  });
  document.getElementById('vhsDownload').addEventListener('click', () => {
    window.open('https://mega.nz/folder/JFxWmBYR#vl3CXHMW_NCAP0Fcw7NVcw', '_blank');
  });
  document.getElementById('vhsUpdates').addEventListener('click', () => showSlide('slide5'));

  // ====== Back Buttons ======
  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => goBack());
  });
});
