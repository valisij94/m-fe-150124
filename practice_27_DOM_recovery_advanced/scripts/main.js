/*
1. Научим робота перемещаться. Нужно написать функцию `drive`, которая будет отправлять робота "вперед" (смещать его по вертикали вниз на длину его корпуса). Задача к обсуждению.
*/

const robot = document.querySelector('.robot');

// Get robot width and height
const robotHeight = robot.clientHeight;
const robotWidth = robot.clientWidth;

// Actual robot coordinates
let robotTop = 0;
let robotLeft = 0;

// Get room dimensions
const field = document.querySelector('.field');
const fieldWidth = field.clientWidth;
const fieldHeight = field.clientHeight;

const drive = () => {
  console.log(fieldHeight, robotHeight)
  if (robotTop < fieldHeight - robotHeight) {
    robotTop += robotHeight;
    robot.style.top = `${robotTop}px`;
  }
}

const reverse = () => {
  if (robotTop > 0) {
    robotTop -= robotHeight;
    robot.style.top = `${robotTop}px`;
  }
}

const left = () => {
  if (robotLeft < fieldWidth - robotWidth) {
    robotLeft += robotWidth;
    robot.style.left = `${robotLeft}px`;
  }
}

const right = () => {
  if (robotLeft > 0) {
    robotLeft -= robotWidth;
    robot.style.left = `${robotLeft}px`;
  }
}

const btnDrive = document.querySelector('.drive');
const btnReverse = document.querySelector('.reverse');
const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');

btnDrive.addEventListener('click', drive);
btnReverse.addEventListener('click', reverse);
btnLeft.addEventListener('click', left);
btnRight.addEventListener('click', right);
