const colors = ['siyah', 'sari', 'mavi', 'kirmizi'];
const tileImages = [];

colors.forEach(color => {
  for (let i = 1; i <= 13; i++) {
    const src = `/assets/taslar/${color}/${color}${i}.png`;
    tileImages.push({ src }, { src }); // çift sayıda
  }
});
tileImages.push({ src: '/assets/taslar/joker/joker.png' });
tileImages.push({ src: '/assets/taslar/joker/joker.png' });

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const playerTiles = shuffle([...tileImages]).slice(0, 15);

function createTileWrapper(tileData) {
  const wrapper = document.createElement("div");
  wrapper.className = "tile-wrapper";
  wrapper.draggable = true;

  const img = document.createElement("img");
  img.src = tileData.src;
  img.className = "tile";

  wrapper.appendChild(img);

  wrapper.addEventListener("dragstart", (e) => {
    wrapper.classList.add("dragging");
    e.dataTransfer.setData("text/plain", tileData.src);
  });

  wrapper.addEventListener("dragend", () => {
    wrapper.classList.remove("dragging");
  });

  return wrapper;
}

const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");

function dizTaslar() {
  row1.innerHTML = '';
  row2.innerHTML = '';
  playerTiles.forEach((tile, i) => {
    const el = createTileWrapper(tile);
    if (i < 8) row1.appendChild(el);
    else row2.appendChild(el);
  });
}

function tasAt() {
  const lastTile = row2.lastChild || row1.lastChild;
  if (lastTile) {
    document.getElementById("ortaya-atilan-taslar").appendChild(lastTile);
  }
}

function tasCek() {
  const random = tileImages[Math.floor(Math.random() * tileImages.length)];
  playerTiles.push(random);
  dizTaslar();
}

function ciftDiz() {
  const map = {};
  playerTiles.forEach(tile => {
    const name = tile.src.split('/').pop();
    map[name] = (map[name] || 0) + 1;
  });

  playerTiles.sort((a, b) => {
    const aName = a.src.split('/').pop();
    const bName = b.src.split('/').pop();
    return (map[bName] || 0) - (map[aName] || 0);
  });

  dizTaslar();
}

function seriDiz() {
  playerTiles.sort((a, b) => {
    const getNum = src => {
      const name = src.split('/').pop().replace('.png', '');
      return parseInt(name.replace(/\D/g, ''));
    };
    return getNum(a.src) - getNum(b.src);
  });

  dizTaslar();
}

dizTaslar();
