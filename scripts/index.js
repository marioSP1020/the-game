console.log('Hola 😊')


const width = 16;
const height = width;

const cellCount = width * height;

const grid = document.querySelector('.grid');

const cells = [];

for (let i = 0; i < cellCount; i++) {
  const cell = document.createElement('div');
  cell.innerText = i;
  grid.appendChild(cell);
  cells.push(cell);

}

