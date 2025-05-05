document.querySelectorAll('.tile').forEach(tile => {
  tile.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', tile.outerHTML);
    tile.classList.add('dragging');
  });

  tile.addEventListener('dragend', e => {
    tile.classList.remove('dragging');
  });
});

document.querySelectorAll('.tile-row').forEach(row => {
  row.addEventListener('dragover', e => {
    e.preventDefault();
  });

  row.addEventListener('drop', e => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    const temp = document.createElement('div');
    temp.innerHTML = data;
    const dropped = temp.firstChild;
    dropped.classList.remove('dragging');
    e.target.appendChild(dropped);
  });
});
