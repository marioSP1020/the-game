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
let cannionPositionY = Math.floor(cannionPosition / 15);


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


//document.getElementById(0).innerHTML = '<img src="../assets/invaderBlue11.png" />';

let positionHigh = [48, 49, 50, 51, 52, 53, 54, 55, 56];
let positionMedium1 = [63, 64, 65, 66, 67, 68, 69, 70, 71];
let positionMedium2 = [78, 79, 80, 81, 82, 83, 84, 85, 86];
let positionLow1 = [93, 94, 95, 96, 97, 98, 99, 100, 101];
let positionLow2 = [108, 109, 110, 111, 112, 113, 114, 115, 116];
let abajo = false;
let izquierda = true;
let derecha = false;
let aux = [];
let posX;
let posXEnd;
let posYH, posYM1, posYM2, posYL1, posYL2;
let animationInvaders;

function moveBlock() {

  animationInvaders = setInterval(motionAnimation, 1000);

}

function motionAnimation() {

  let auxHigh = positionHigh;
  let auxMedium1 = positionMedium1;
  let auxMedium2 = positionMedium2;
  let auxLow1 = positionLow1;
  let auxLow2 = positionLow2;

  const posX = auxHigh[0] % width;
  const posXEnd = (auxHigh[auxHigh.length - 1] + 1) % width;

  console.log(`inicio ${posXEnd}`);
  console.log(`abajo ${abajo}`);
  console.log(`derecha ${derecha}`);
  console.log(`izquierda ${izquierda}`);

  ///////////////      Movimiento izquierda      ///////////////
  if (posX > 0 && abajo === false && izquierda === true) {

    //line High
    for (let i = 0; i < auxHigh.length; i++) {
      cells[auxHigh[i] - 1].classList.add('invadersHigh');
      cells[auxHigh[i]].classList.remove('invadersHigh');
    }

    //Line Medium
    for (let i = 0; i < auxMedium1.length; i++) {
      cells[auxMedium1[i] - 1].classList.add('invadersMedium');
      cells[auxMedium1[i]].classList.remove('invadersMedium');
    }
    for (let i = 0; i < auxMedium2.length; i++) {
      cells[auxMedium2[i] - 1].classList.add('invadersMedium');
      cells[auxMedium2[i]].classList.remove('invadersMedium');
    }

    //line Low
    for (let i = 0; i < auxLow1.length; i++) {
      cells[auxLow1[i] - 1].classList.add('invadersLow');
      cells[auxLow1[i]].classList.remove('invadersLow');
    }
    for (let i = 0; i < auxLow2.length; i++) {
      cells[auxLow2[i] - 1].classList.add('invadersLow');
      cells[auxLow2[i]].classList.remove('invadersLow');
    }

    if (posX - 1 <= 0) {
      abajo = true;
      //izquierda = false;
      //derecha = true;
      console.log(abajo);
    }

    positionHigh = auxHigh.map((el) => {
      return el - 1;
    })

    positionMedium1 = auxMedium1.map((el) => {
      return el - 1;
    })

    positionMedium2 = auxMedium2.map((el) => {
      return el - 1;
    })

    positionLow1 = auxLow1.map((el) => {
      return el - 1;
    })

    positionLow2 = auxLow2.map((el) => {
      return el - 1;
    })

  }
  ///////////////      Movimiento abajo      ///////////////
  /*

  else if (abajo) {

    //line Low

    for (let i = 0; i < auxLow2.length; i++) {
      cells[auxLow2[i] + width].classList.add('invadersLow');
      cells[auxLow2[i]].classList.remove('invadersLow');
      posYL2 = Math.floor(auxLow2[i] / width) + 1;
    }
    for (let i = 0; i < auxLow1.length; i++) {
      cells[auxLow1[i] + width].classList.add('invadersLow');
      cells[auxLow1[i]].classList.remove('invadersLow');
      posYL1 = Math.floor(auxLow1[i] / width) + 1;
    }

    //Line Medium

    for (let i = 0; i < auxMedium2.length; i++) {
      cells[auxMedium2[i] + width].classList.add('invadersMedium');
      cells[auxMedium2[i]].classList.remove('invadersMedium');
      posYM2 = Math.floor(auxMedium2[i] / width) + 1;
    }
    for (let i = 0; i < auxMedium1.length; i++) {
      cells[auxMedium1[i] + width].classList.add('invadersMedium');
      cells[auxMedium1[i]].classList.remove('invadersMedium');
      posYM1 = Math.floor(auxMedium1[i] / width) + 1;
    }

    //line High
    for (let i = 0; i < auxHigh.length; i++) {
      cells[auxHigh[i] + width].classList.add('invadersHigh');
      cells[auxHigh[i]].classList.remove('invadersHigh');
      posYH = Math.floor(auxHigh[i] / width) + 1;
    }


    abajo = false;

    if (izquierda === true) {
      izquierda = false;
      derecha = true;
    }
    else {
      derecha = false;
      izquierda = true;
    }

    positionHigh = auxHigh.map((el) => {
      return el + width;
    })

    positionMedium1 = auxMedium1.map((el) => {
      return el + width;
    })

    positionMedium2 = auxMedium2.map((el) => {
      return el + width;
    })

    positionLow1 = auxLow1.map((el) => {
      return el + width;
    })

    positionLow2 = auxLow2.map((el) => {
      return el + width;
    })

  }

  ///////////////      Movimiento derecha      ///////////////


  else if (posXEnd < width && abajo === false && derecha === true) {

    console.log(`derecha ${posXEnd}`);

    //line High 
    for (let i = auxHigh.length - 1; i >= 0; i--) {
      cells[auxHigh[i] + 1].classList.add('invadersHigh');
      cells[auxHigh[i]].classList.remove('invadersHigh');
    }

    //Line Medium
    for (let i = auxMedium1.length - 1; i >= 0; i--) {
      cells[auxMedium1[i] + 1].classList.add('invadersMedium');
      cells[auxMedium1[i]].classList.remove('invadersMedium');
    }
    for (let i = auxMedium2.length - 1; i >= 0; i--) {
      cells[auxMedium2[i] + 1].classList.add('invadersMedium');
      cells[auxMedium2[i]].classList.remove('invadersMedium');
    }

    //line Low
    for (let i = auxLow1.length - 1; i >= 0; i--) {
      cells[auxLow1[i] + 1].classList.add('invadersLow');
      cells[auxLow1[i]].classList.remove('invadersLow');
    }
    for (let i = auxLow2.length - 1; i >= 0; i--) {
      cells[auxLow2[i] + 1].classList.add('invadersLow');
      cells[auxLow2[i]].classList.remove('invadersLow');
    }

    if (posXEnd + 1 >= width) {
      abajo = true;
      //izquierda = true
      //derecha = false
      console.log(abajo);
    }

    positionHigh = auxHigh.map((el) => {
      return el + 1;
    })

    positionMedium1 = auxMedium1.map((el) => {
      return el + 1;
    })

    positionMedium2 = auxMedium2.map((el) => {
      return el + 1;
    })

    positionLow1 = auxLow1.map((el) => {
      return el + 1;
    })

    positionLow2 = auxLow2.map((el) => {
      return el + 1;
    })

  }

  else {

    clearInterval(animationInvaders);

  }
  */
  console.log(cannionPositionY);
  console.log(posYL2);
  console.log(posYL1);
  console.log(posYM2);
  console.log(posYM1);
  console.log(posYH);


  if (cannionPositionY === posYL2 || cannionPositionY === posYL1 || cannionPositionY === posYM2 || cannionPositionY === posYM1 || cannionPositionY === posYH) {

    clearInterval(animationInvaders);

    const labelGameOver = document.getElementById('7');
    labelGameOver.innerText = 'GAME OVER';
    divGameOver.style.display = 'block';

  }


}

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

  //Cuando se da la colisión

  /*
  let positionHigh = [48, 49, 50, 51, 52, 53, 54, 55, 56];
  let positionMedium1 = [63, 64, 65, 66, 67, 68, 69, 70, 71];
  let positionMedium2 = [78, 79, 80, 81, 82, 83, 84, 85, 86];
  let positionLow1 = [93, 94, 95, 96, 97, 98, 99, 100, 101];
  let positionLow2 = [108, 109, 110, 111, 112, 113, 114, 115, 116];
  */

  if (cells[positionBala].classList.contains('invadersLow') || cells[positionBala].classList.contains('invadersMedium') ||
    cells[positionBala].classList.contains('invadersHigh')) {

    cells.slice(positionBala, 1);
    cells[positionBala].classList.remove('bala');

    //Eliminacion de los 3 tipos de invaders

    if (cells[positionBala].classList.contains('invadersLow')) {
      cells[positionBala].classList.remove('invadersLow');

      const posLow2 = positionLow2.indexOf(cells[positionBala]);
      const posLow1 = positionLow1.indexOf(cells[positionBala]);

      console.log(`Low2 ${posLow2}`);
      console.log(`Low1 ${posLow1}`);

      if (posLow2 !== -1) {
        positionLow2.slice(posLow2, 1);
      }
      if (posLow1 !== -1) {
        positionLow1.slice(posLow1, 1);
      }

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
  //Cuando no existe colisión y llega al final/limite del area del grid

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

//////////////////////////////////////////      Animaciones      //////////////////////////////////////////

const divGameOver = document.getElementById('game-over');
divGameOver.style.display = 'none';

const divPoints = document.getElementById('points');
divPoints.style.display = 'none';

function hidePoints() {
  divPoints.style.display = 'none';
}

function displayPoints() {
  divPoints.style.display = 'block';
}




/*
setTimeout(function () {
  nuevo_elemento = document.createElement("div");
  container.appendChild(nuevo_elemento);
}, 1000);
*/







window.addEventListener('keyup', handleKeyPress);
window.addEventListener('keyup', handleKeyPressShooting);
window.addEventListener('DOMContentLoaded', moveBlock);
