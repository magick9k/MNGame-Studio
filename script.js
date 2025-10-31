// ------------------------------
//  SYSTEM SLIDE’ÓW I HISTORII
// ------------------------------

const historyStack = [];

// Pokazuje wybrany slajd
function showSlide(id, pushHistory = true) {
  const current = document.querySelector(".slide.active");
  const next = document.getElementById(id);

  if (!next) {
    console.error(`Nie znaleziono slajdu o id: ${id}`);
    return;
  }

  if (pushHistory && current) {
    historyStack.push(current.id);
  }

  document.querySelectorAll(".slide").forEach(slide => slide.classList.remove("active"));
  next.classList.add("active");
}

// Wróć do poprzedniego slajdu
function goBack() {
  const prev = historyStack.pop();
  if (prev) {
    showSlide(prev, false);
  } else {
    showSlide("slide1", false);
  }
}

// ------------------------------
//  PODSTAWOWE PRZYCISKI
// ------------------------------

// Przycisk "Pobierz" z pierwszego slajdu → przejście do School Night
const downloadBtn = document.getElementById("download-btn");
if (downloadBtn) {
  downloadBtn.addEventListener("click", () => showSlide("slide2"));
}

// Przycisk "Tutorial"
const tutorialBtn = document.getElementById("tutorial-btn");
if (tutorialBtn) {
  tutorialBtn.addEventListener("click", () => {
    window.open("https://www.youtube.com/watch?v=7RBzlzVCM8E", "_blank");
  });
}

// Link "VHS Night od SHABY STUDIO" → przejście do slide4
const studioLink = document.getElementById("studioLink");
if (studioLink) {
  studioLink.addEventListener("click", (e) => {
    e.preventDefault();
    showSlide("slide4");
  });
}

// ------------------------------
//  SCHOOL NIGHT — SLIDE 2
// ------------------------------

// Przycisk "Pobierz School Night" → otwiera Mega
const schoolDownloadBtn = document.getElementById("schoolDownload");
if (schoolDownloadBtn) {
  schoolDownloadBtn.addEventListener("click", () => {
    window.open("https://mega.nz/fm/PVM0DDKC", "_blank");
  });
}

// Przycisk "Aktualizacje" → przejście do slide3
const updatesBtn = document.getElementById("updates-btn");
if (updatesBtn) {
  updatesBtn.addEventListener("click", () => showSlide("slide3"));
}

// ------------------------------
//  VHS NIGHT — SLIDE 4
// ------------------------------

// Przycisk "Pobierz VHS Night" → otwiera Mega
const vhsDownloadBtn = document.getElementById("vhsDownload");
if (vhsDownloadBtn) {
  vhsDownloadBtn.addEventListener("click", () => {
    window.open("https://mega.nz/folder/JFxWmBYR#vl3CXHMW_NCAP0Fcw7NVcw", "_blank");
  });
}

// Przycisk "Aktualizacje" → slide5
const vhsUpdatesBtn = document.getElementById("vhsUpdates");
if (vhsUpdatesBtn) {
  vhsUpdatesBtn.addEventListener("click", () => showSlide("slide5"));
}

// ------------------------------
//  PRZYCISKI WRÓĆ (DZIAŁAJĄ WSZĘDZIE)
// ------------------------------
document.querySelectorAll(".back-btn").forEach(btn => {
  btn.addEventListener("click", () => goBack());
});
