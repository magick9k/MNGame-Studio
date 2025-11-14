// funkcja do przełączania slajdów
function showSlide(id) {
  document.querySelectorAll(".slide").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// kliknięcie "Pobierz" w slajdzie 1 → przejście do wyboru gry
document.getElementById("download-btn").onclick = () => {
  showSlide("slide2");
};

// dane gier
const gameData = {
  school: {
    title: "School Night",
    news: `
      <h2>Aktualności — School Night</h2>
      <ul>
        <li>Nowy system AI.</li>
        <li>Poprawiona optymalizacja.</li>
      </ul>
    `,
    download: `
      <h2>Pobierz — School Night</h2>
      <a class="download-btn" href="#">Pobierz grę</a>
    `
  },

  vhs: {
    title: "VHS Night",
    news: `
      <h2>VHS Night — Aktualności</h2>
      <ul>
        <li>Wersja 0.4.0 — mądrzejsze NPC</li>
        <li>Naprawiono strzelanie</li>
      </ul>
    `,
    download: `
      <h2>Pobierz — VHS Night</h2>
      <a class="download-btn" href="#">Pobierz grę</a>
    `
  }
};

let currentGame = null;

// kliknięcie gry na slajdzie 2
document.querySelectorAll(".gameSelect").forEach(btn => {
  btn.onclick = () => {
    const id = btn.getAttribute("data-game");
    currentGame = gameData[id];

    document.getElementById("gameTitle").textContent = currentGame.title;
    document.getElementById("gameContent").innerHTML = "Wybierz opcję po lewej.";

    showSlide("slide3");
  };
});

// kliknięcie "Aktualności"
document.getElementById("gameNews").onclick = () => {
  document.getElementById("gameContent").innerHTML = currentGame.news;
};

// kliknięcie "Pobierz"
document.getElementById("gameDownload").onclick = () => {
  document.getElementById("gameContent").innerHTML = currentGame.download;
};

// powrót
document.querySelectorAll(".back-btn, .sideBack").forEach(btn => {
  btn.onclick = () => showSlide("slide1");
});
