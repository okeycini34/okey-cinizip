
const colors = ['red', 'black', 'yellow', 'blue'];
const rack = document.getElementById('rack');

function createTile(color, number) {
  const tile = document.createElement('div');
  tile.classList.add('tile', color);
  tile.innerText = number;
  tile.draggable = true;

  tile.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', null); // some browsers require this
    tile.classList.add('dragging');
  });

  tile.addEventListener('dragend', () => {
    tile.classList.remove('dragging');
  });

  return tile;
}

// Taşları sıralı şekilde oluştur
let colorIndex = 0;
for (let i = 1; i <= 14; i++) {
  const number = (i % 13) + 1;
  const tile = createTile(colors[colorIndex], number);
  rack.appendChild(tile);
  if (i % 4 === 0) colorIndex++; // Her 4 taşta renk değiştir
}

// Sürükle-bırak desteği
rack.addEventListener('dragover', (e) => {
  e.preventDefault();
  const dragging = document.querySelector('.dragging');
  const afterElement = getDragAfterElement(rack, e.clientX);
  if (afterElement == null) {
    rack.appendChild(dragging);
  } else {
    rack.insertBefore(dragging, afterElement);
  }
});

function getDragAfterElement(container, x) {
  const draggableElements = [...container.querySelectorAll('.tile:not(.dragging)')];

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = x - box.left - box.width / 2;

    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}
