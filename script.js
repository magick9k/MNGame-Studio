// --- FUNKCJA PRZEŁĄCZANIA SLIDE ---
function showSlide(id) {
  document.querySelectorAll(".slide").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// --- SLIDE 1 > POBIERZ ---
document.getElementById("download-btn").onclick = () => showSlide("slide2");

// --- SLIDE 2 (School Night) ---
document.getElementById("schoolNightBtn").onclick = () => showSlide("slide3");

// --- SLIDE 3 (School Night – Aktualności) ---
document.getElementById("updates-btn").onclick = () => {
  document.getElementById("updatesBox").innerHTML = `
    <h2>Aktualności — School Night</h2>
    <ul>
      <li>Nowy system AI potwora.</li>
      <li>Poprawiona optymalizacja.</li>
      <li>Dodano nowe modele 3D.</li>
    </ul>
  `;
};

// --- SLIDE 3 (School Night – Pobierz) ---
document.getElementById("schoolDownload").onclick = () => {
  document.getElementById("updatesBox").innerHTML = `
    <h2>Pobierz School Night</h2>
    <p>Kliknij poniżej aby pobrać:</p>
    <a href="#" class="download-btn">Pobierz grę</a>
  `;
};

// --- WSZYSTKIE POWROTY NA SLIDE 1 ---
document.querySelectorAll(".back-btn, .sideBack").forEach(btn => {
  btn.addEventListener("click", () => showSlide("slide1"));
});
