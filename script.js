// script.js
// Link do folderu MEGA
const MEGA_LINK = 'https://mega.nz/folder/TUsmWabK#tjWlbCpj6KZ1aykJGIee1Q';

// Znajdź element przycisku (musisz mieć element z klasą .download-btn w HTML)
const btn = document.querySelector('.download-btn');

if (btn) {
  btn.addEventListener('click', (ev) => {
    // Zapobiegamy domyślnej akcji jeśli to <a> – ale spodziewamy się tu buttona
    ev.preventDefault?.();

    // Tworzymy tymczasowy element <a>, by otworzyć link w nowej karcie
    const a = document.createElement('a');
    a.href = MEGA_LINK;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';

    // Dodajemy do DOM, klikamy programowo i usuwamy
    document.body.appendChild(a);
    a.click();
    a.remove();
  });
} else {
  // Debug: jeśli elementu nie ma, wypisz info do konsoli
  console.warn('Brak elementu .download-btn — sprawdź, czy masz przycisk w HTML.');
}
