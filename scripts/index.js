console.log('Hola 😊')

//Disposicion de los div

const width = 15;
const height = 15;

const cellCount = width * height;

const grid = document.querySelector('.grid');

const cells = [];

for (let i = 0; i < cellCount; i++) {
  const cell = document.createElement('div');
  cell.innerText = i;
  grid.appendChild(cell);
  cells.push(cell);

}

//Posicionamiento

//cannion

let cannionPosition = 202

const addCannion = (index) => cells[index].classList.add('cannion');
const removeCannion = (index) => cells[index].classList.remove('cannion');

addCannion(cannionPosition);

//invaders

for (let i = 48; i <= 116; i++) {

  if (i >= 45 && i <= 56) {
    cells[i].classList.add('invadersHigh');
  }
  if (i >= 63 && i <= 71) {
    cells[i].classList.add('invadersMedium');
  }
  if (i >= 78 && i <= 86) {
    cells[i].classList.add('invadersMedium');
  }
  if (i >= 93 && i <= 101) {
    cells[i].classList.add('invadersLow');
  }
  if (i >= 108 && i <= 116) {
    cells[i].classList.add('invadersLow');
  }

}