function searchGames() {
  const search = document.getElementById("search").value.toLowerCase();
  const games = document.querySelectorAll(".game");

  games.forEach(game => {
    const name = game.querySelector("h3").textContent.toLowerCase();

    if (name.includes(search)) {
      game.style.display = "block";
    } else {
      game.style.display = "none";
    }
  });
}

function showCategory(category) {
  const games = document.querySelectorAll(".game");

  games.forEach(game => {
    if (
      category === "all" ||
      game.dataset.category === category
    ) {
      game.style.display = "block";
    } else {
      game.style.display = "none";
    }
  });
}

function playGame(gameName) {

  if (gameName === "Ludo") {
    window.location.href = "ludo.html";
    return;
  }

  alert("🎮 " + gameName + " जल्द ही playable होगा!");
}
