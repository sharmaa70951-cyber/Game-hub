function searchGames() {
  const search = document.getElementById("search").value.toLowerCase();
  const games = document.querySelectorAll(".game");

  games.forEach(game => {
    const name = game.querySelector("h3").textContent.toLowerCase();
    game.style.display = name.includes(search) ? "block" : "none";
  });
}

function showCategory(category) {
  const games = document.querySelectorAll(".game");

  games.forEach(game => {
    game.style.display =
      category === "all" || game.dataset.category === category
        ? "block"
        : "none";
  });
}

function playGame(gameName) {
  alert("🎮 " + gameName + " जल्द ही यहाँ playable होगा!");
}
