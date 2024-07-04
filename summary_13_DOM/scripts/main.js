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
  if (robotTop < 9) {
    robotTop++;
    robot.style.top = `${robotTop * robotHeight}px`;
  }
  checkCross();
}

const reverse = () => {
  if (robotTop > 0) {
    robotTop--;
    robot.style.top = `${robotTop * robotHeight}px`;
  }
  checkCross();
}

const left = () => {
  if (robotLeft < 9) {
    robotLeft++;
    robot.style.left = `${robotLeft * robotWidth}px`;
  }
  checkCross();
}

const right = () => {
  if (robotLeft > 0) {
    robotLeft--;
    robot.style.left = `${robotLeft * robotWidth}px`;
  }
  checkCross();
}

const btnDrive = document.querySelector('.drive');
const btnReverse = document.querySelector('.reverse');
const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');

btnDrive.addEventListener('click', drive);
btnReverse.addEventListener('click', reverse);
btnLeft.addEventListener('click', left);
btnRight.addEventListener('click', right);


const addApples = (applesCount) => {
  const result = [];
  while (result.length < applesCount) {
    let rand1 = Math.min(Math.round(Math.random() * 10), 9);
    let rand2 = Math.min(Math.round(Math.random() * 10), 9);
    const exists = result.some( el => el.x === rand1 && el.y === rand2 );
    if (!exists) {
      result.push( { x: rand1, y: rand2 } );
    }
  }
  for (let apple of result) {
    const appleEl = document.createElement('div');
    appleEl.classList.add('apple');
    appleEl.style.top = `${apple.y * 50}px`;
    appleEl.style.left = `${apple.x * 50}px`;
    apple.element = appleEl;
    field.append(appleEl);
  }
  return result;
}


let apples = addApples(10);

const checkCross = () => {
  const apple = apples.find( el => el.x === robotLeft && el.y === robotTop);
  if (apple) {
    console.log(apple)
    apple.element.style.opacity = 0;
    apples = apples.filter( el => el !== apple);
  }
}
