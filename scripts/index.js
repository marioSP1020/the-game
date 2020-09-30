console.log('Hola 😊')

//////////////////////////////////////////      Variables      //////////////////////////////////////////

// const points = {

//   HIGH = 150,
//   MEDIUM = 100,
//   LOW = 50,
//   MOTHERSHIP = 300

// }

const HIGH = 150;
const MEDIUM = 100;
const LOW = 50;
const MOTHERSHIP = 300;


let pointsHigh = [];
let pointsMedium = [];
let pointsLow = [];
let pointsMotherShip = [];





//////////////////////////////////////////      Disposicion de los div      //////////////////////////////////////////

const width = 15;
const height = 15;

const cellCount = width * height;

const grid = document.querySelector('.grid');

const cells = [];

for (let i = 0; i < cellCount; i++) {
  const cell = document.createElement('div');
  cell.innerText = i;
  cell.setAttribute("id", i);
  grid.appendChild(cell);
  cells.push(cell);

}

//////////////////////////////////////////      Posicionamiento      //////////////////////////////////////////

//cannion

let cannionPosition = 202


const addCannion = (index) => cells[index].classList.add('cannion');
const removeCannion = (index) => cells[index].classList.remove('cannion');

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

//////////////////////////////////////////      Movimientos      //////////////////////////////////////////
//cannion

const handleKeyPress = (event) => {
  const { key, keyCode } = event;

  console.log(key);

  const x = cannionPosition % 15;
  const y = Math.floor(cannionPosition / 15);

  // Mover al cannion de un cuadro otro

  removeCannion(cannionPosition);

  switch (key) {
    case 'ArrowRight':
      if (x < width - 1) {
        cannionPosition++;
      }
      break;

    case 'ArrowLeft':
      if (x > 0) {
        cannionPosition--;
      }
      break;

    default:
      console.log(keyCode);
      break;
  }
  addCannion(cannionPosition);
}

addCannion(cannionPosition);


//////////////////////////////////////////      Mover el bloque de invaders      //////////////////////////////////////////


document.getElementById(0).innerHTML = '<img src="../assets/invaderBlue11.png" />';

const position = [48, 49, 50, 51, 52, 53, 54, 55, 56];

function movimiento(position) {


  let aux = position

  for (let j = 0; j < 3; j++) {

    for (let i = 0; i < aux.length; i++) {

      cells[aux[i] - 1].classList.add('invadersHigh');
      cells[aux[i]].classList.remove('invadersHigh');

    }

    aux = aux.map((el) => {
      return el - 1;
    })


  }

}



setInterval(movimiento(position), 100);



//////////////////////////////////////////      Disparos      //////////////////////////////////////////

let positionBala;
let animacionBala;

const addBala = (index) => cells[index].classList.add('bala');
const removeBala = (index) => cells[index].classList.remove('bala');

const handleKeyPressShooting = (event) => {

  const { keyCode } = event;

  const x = cannionPosition % 15;
  const y = Math.floor(cannionPosition / 15);

  if (keyCode === 32) {

    console.log('aqui')
    //addBala(cannionPosition - width);

    positionBala = cannionPosition;
    animacionBala = setInterval(animateDisparos, 500);

  }
}

function animateDisparos() {

  console.log(positionBala)
  removeBala(positionBala);

  positionBala -= width;

  console.log(positionBala);

  addBala(positionBala)

  if (cells[positionBala].classList.contains('invadersLow') || cells[positionBala].classList.contains('invadersMedium') ||
    cells[positionBala].classList.contains('invadersHigh')) {

    cells.slice(positionBala, 1);
    cells[positionBala].classList.remove('bala');

    //Eliminacion de los 3 tipos de invaders

    if (cells[positionBala].classList.contains('invadersLow')) {
      cells[positionBala].classList.remove('invadersLow');
      pointsLow.push(LOW);
      calculatePoints();
    }

    if (cells[positionBala].classList.contains('invadersMedium')) {
      cells[positionBala].classList.remove('invadersMedium');
      pointsMedium.push(MEDIUM);
      calculatePoints();
    }

    if (cells[positionBala].classList.contains('invadersHigh')) {
      cells[positionBala].classList.remove('invadersHigh');
      pointsHigh.push(HIGH);
      calculatePoints();
    }

    console.log(`elimina ${positionBala}`)

    //Detengo el setInterval

    clearInterval(animacionBala);
  }
  if (positionBala < width) {
    cells[positionBala].classList.remove('bala');
    clearInterval(animacionBala);
  }

}

//////////////////////////////////////////      Puntuacion      //////////////////////////////////////////

// const points = {

//   HIGH = 150,
//   MEDIUM = 100,
//   LOW = 50,
//   MOTHERSHIP = 300

// }

// let pointsHigh = [];
// let pointsMedium = [];
// let pointsLow = [];
// let pointsMotherShip = [];

function calculatePoints() {

  let sumHigh = 0;
  let sumMedium = 0;
  let sumLow = 0;
  let sumMotherShip = 0;
  let sumPoints = 0;

  if (pointsHigh.length > 0) {
    for (let i = 0; i < pointsHigh.length; i++) {
      sumHigh += pointsHigh[i];
    }
  }
  if (pointsMedium.length > 0) {
    for (let i = 0; i < pointsMedium.length; i++) {
      sumMedium += pointsMedium[i];
    }
  }
  if (pointsLow.length > 0) {
    for (let i = 0; i < pointsLow.length; i++) {
      sumLow += pointsLow[i];
    }
  }
  if (pointsMotherShip.length > 0) {
    for (let i = 0; i < pointsMotherShip.length; i++) {
      sumMotherShip += pointsMotherShip[i];
    }
  }

  sumPoints = sumHigh + sumMedium + sumLow;

  const scoreLabel = document.querySelector('.score');
  scoreLabel.innerText = sumPoints

  //return sumPoints;

}









window.addEventListener('keyup', handleKeyPress);
window.addEventListener('keyup', handleKeyPressShooting);
