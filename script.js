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


  // Floating contact buttons behavior
  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    // fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
    return Promise.resolve();
  }

  function showTempLabel(el, msg = 'Copied') {
    const label = document.createElement('div');
    label.textContent = msg;
    label.style.position = 'absolute';
    label.style.right = '64px';
    label.style.top = '50%';
    label.style.transform = 'translateY(-50%)';
    label.style.background = 'rgba(0,0,0,0.85)';
    label.style.color = '#fff';
    label.style.padding = '6px 8px';
    label.style.borderRadius = '6px';
    label.style.zIndex = 2000;
    el.parentElement.appendChild(label);
    setTimeout(() => label.remove(), 1400);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const emailBtn = document.getElementById('fab-email');
    const phoneBtn = document.getElementById('fab-phone');

    if (emailBtn) {
      emailBtn.addEventListener('click', (e) => {
        const email = emailBtn.dataset.contact;
        // copy to clipboard and open mail client
        copyToClipboard(email).then(() => showTempLabel(emailBtn, 'Email copied'));
        // also open mailto in a new window (user can cancel)
        window.location.href = `mailto:${email}`;
      });
    }

    if (phoneBtn) {
      phoneBtn.addEventListener('click', (e) => {
        const phone = phoneBtn.dataset.contact;
        copyToClipboard(phone).then(() => showTempLabel(phoneBtn, 'Number copied'));
        // open WhatsApp chat in a new tab using wa.me
        const wa = `https://wa.me/${phone}`;
        window.open(wa, '_blank');
      });
    }
  });
