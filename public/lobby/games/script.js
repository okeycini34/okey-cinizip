const tiles = document.querySelectorAll('.tile');
const rack = document.getElementById('rack');

tiles.forEach(tile => {
  tile.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', tile.outerHTML);
    tile.classList.add('dragging');
  });

  tile.addEventListener('dragend', () => {
    tile.classList.remove('dragging');
  });
});

rack.addEventListener('dragover', e => {
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
      return { offset: offset, element: child }
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}
