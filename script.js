const games = [
  {
    title: "Legend Of Zaruto",
    image: "assets/legendofzaruto.png",
    tags: "Stencyl . HTML5",
    link: "games/legend-of-zaruto/play.html"
  },
  {
    title: "Undecided title",
    image: "assets/comingsoon.jpg",
    tags: "Unity · Mobile · Single Player",
    link: "https://your-game-link.com"
  },
  {
    title: "Undecided title",
    image: "assets/comingsoon.jpg",
    tags: "Unreal Engine · PC",
    link: "https://your-game-link.com"
  }
];

const container = document.getElementById("games");

games.forEach(game => {
  const card = document.createElement("div");
  card.className = "game-card";
  card.onclick = () => window.open(game.link, "_blank");

  card.innerHTML = `
    <img src="${game.image}">
    <div class="game-info">
      <div class="game-title">${game.title}</div>
      <div class="tags">${game.tags}</div>
    </div>
  `;

  container.appendChild(card);
});
