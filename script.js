// script.js

// Pobranie przycisku "Pobierz"
const downloadBtn = document.querySelector('.download-btn');

// Nasłuchiwanie kliknięcia
downloadBtn.addEventListener('click', () => {
  // Otwórz link w nowej karcie
  window.open('https://mega.nz/folder/TUsmWabK#tjWlbCpj6KZ1aykJGIee1Q', '_blank');
});
