
const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
  const gridSquares = document.createElement('div');
  gridSquares.classList.add('gridSquares');
  container.appendChild(gridSquares);
}

