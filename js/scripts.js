const container = document.querySelector('#container');

function gridSize(num) {
  num = num*num;
  for (let i = 0; i < num; i++) {
    const gridSquares = document.createElement('div');
    gridSquares.classList.add('gridSquares');
    container.appendChild(gridSquares);
  }
}

function removeAllChildNodes() {
  while (container.firstChild) {
      container.removeChild(container.firstChild);
  }
}

function evenSides(num) {
  let root = document.documentElement;
  root.style.setProperty('--sides', num);
}

const button = document.querySelector('#refresh');
button.addEventListener('click', () => {
  newNum = prompt("How many squares on each side?");
  removeAllChildNodes();
  gridSize(newNum);
  evenSides(newNum);
})


gridSize(16);