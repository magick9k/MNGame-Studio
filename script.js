// script.js - bezpieczna i debugowalna wersja
document.addEventListener('DOMContentLoaded', () => {
  const historyStack = [];

  function showSlide(id, pushHistory = true) {
    const current = document.querySelector('.slide.active');
    const next = document.getElementById(id);
    if (!next) {
      console.warn(`showSlide: nie znaleziono slajdu o id="${id}"`);
      return;
    }

    if (pushHistory && current && current.id !== id) {
      historyStack.push(current.id);
      // ograniczenie rozmiaru stosu (opcjonalne)
      if (historyStack.length > 50) historyStack.shift();
    }

    document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
    next.classList.add('active');
    console.log(`Pokazano slajd: ${id}`);
  }

  function goBack() {
    const prev = historyStack.pop();
    if (prev && document.getElementById(prev)) {
      showSlide(prev, false);
      console.log(`Cofnięto do: ${prev}`);
    } else {
      showSlide('slide1', false);
      console.log('Cofnięto do: slide1 (domyślny)');
    }
  }

  // helper — pobiera element i loguje jeśli nie ma
  function getEl(id) {
    const el = document.getElementById(id);
    if (!el) console.warn(`Brak elementu z id="${id}" — upewnij się, że jest w HTML.`);
    return el;
  }

  // --- Podstawowe przyciski ---
  const downloadBtn = getEl('download-btn');
  if (downloadBtn) downloadBtn.addEventListener('click', () => showSlide('slide2'));

  const tutorialBtn = getEl('tutorial-btn');
  if (tutorialBtn) tutorialBtn.addEventListener('click', () => {
    window.open('https://www.youtube.com/watch?v=7RBzlzVCM8E', '_blank');
  });

  // --- School Night (slide2 -> slide3) ---
  const schoolNightBtn = getEl('schoolNightBtn');
  if (schoolNightBtn) schoolNightBtn.addEventListener('click', () => showSlide('slide3'));

  const schoolDownload = getEl('schoolDownload');
  if (schoolDownload) schoolDownload.addEventListener('click', () => {
    window.open('https://mega.nz/fm/PVM0DDKC', '_blank');
  });

  const updatesBtn = getEl('updates-btn');
  if (updatesBtn) updatesBtn.addEventListener('click', () => {
    // jeśli chcesz inny behavior niż alert - zmień tutaj
    alert('Brak nowych aktualizacji dla School Night.');
  });

  // --- VHS Night (slide4 & slide5) ---
  const studioLink = getEl('studioLink');
  if (studioLink) {
    // Jeżeli element jest <a href="..."> - zapobiegamy domyślnej akcji
    studioLink.addEventListener('click', (e) => {
      if (e && typeof e.preventDefault === 'function') e.preventDefault();
      showSlide('slide4');
    });
  }

  const vhsDownload = getEl('vhsDownload');
  if (vhsDownload) vhsDownload.addEventListener('click', () => {
    window.open('https://mega.nz/folder/JFxWmBYR#vl3CXHMW_NCAP0Fcw7NVcw', '_blank');
  });

  const vhsUpdates = getEl('vhsUpdates');
  if (vhsUpdates) vhsUpdates.addEventListener('click', () => showSlide('slide5'));

  // --- Back buttons (wszystkie) ---
  const backButtons = document.querySelectorAll('.back-btn');
  if (!backButtons || backButtons.length === 0) {
    console.warn('Nie znaleziono przycisków .back-btn w HTML.');
  } else {
    backButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (e && typeof e.preventDefault === 'function') e.preventDefault();
        goBack();
      });
    });
  }

  // --- Drobne sprawdzenia sanity ---
  // Upewnij się, że slide1 istnieje i ma klasę active
  const s1 = document.getElementById('slide1');
  if (!s1) {
    console.error('Brak slide1 w HTML! Skrypt oczekuje elementu <section id="slide1" class="slide active">');
  } else if (!s1.classList.contains('active')) {
    // ustawiamy domyślny slide jeśli nic nie ma active
    const anyActive = document.querySelector('.slide.active');
    if (!anyActive) {
      s1.classList.add('active');
      console.log('Ustawiono slide1 jako domyślny (active).');
    }
  }

  console.log('script.js załadowany — eventy przypięte.');
});
