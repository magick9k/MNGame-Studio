// Przycisk Tutorial otwiera YouTube
const tutorialBtn = document.getElementById('tutorial-btn');
if (tutorialBtn) {
  tutorialBtn.addEventListener('click', () => {
    window.open('https://www.youtube.com/watch?v=7RBzlzVCM8E', '_blank');
  });
}

// Przycisk Pobierz otwiera link do Mega
const downloadBtn = document.getElementById('download-btn');
if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    window.open('https://mega.nz/folder/JFxWmBYR#vl3CXHMW_NCAP0Fcw7NVcw', '_blank');
  });
}
