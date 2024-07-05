/*
1. Научим робота перемещаться. Нужно написать функцию `drive`, которая будет отправлять робота "вперед" (смещать его по вертикали вниз на длину его корпуса). Задача к обсуждению.
*/

const robot = document.querySelector('.robot');

const score = {
  apples: 0,
  steps: 0
}

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
    score.steps++;
    checkCross();
  }
}

const reverse = () => {
  if (robotTop > 0) {
    robotTop--;
    robot.style.top = `${robotTop * robotHeight}px`;
    score.steps++;
    checkCross();
  }
}

const left = () => {
  if (robotLeft < 9) {
    robotLeft++;
    robot.style.left = `${robotLeft * robotWidth}px`;
    score.steps++;
    checkCross();
  }
}

const right = () => {
  if (robotLeft > 0) {
    robotLeft--;
    robot.style.left = `${robotLeft * robotWidth}px`;
    score.steps++;
    checkCross();
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

/*
2. Все хорошо, но реализация такова, что яблоки могут лежать друг на друге. Нужно это исправить - сделать так, чтобы яблоки размещались не одно на другом. Также к обсуждению.
*/

const addTargets = (applesCount) => {

  const results = [];

  const _cnt = Math.min(applesCount, 10);
  while (results.length < _cnt) {
    const appleX = Math.floor(Math.random() * 10);
    const appleY = Math.floor(Math.random() * 10);
    // Create and add DOM element, apply appropriate class (apple), apply appleX, appleY

    // Check whether we have apple with such coordinates
    const hasApple = results.some( el => el.x === appleX && el.y === appleY );
    if (!hasApple && (appleX !== 0 && appleY !== 0) ) {
      const appleEl = document.createElement('div');
      appleEl.classList.add('apple');
      appleEl.style.top = `${appleY * 50}px`;
      appleEl.style.left = `${appleX * 50}px`;
      field.append(appleEl);
      results.push( { x: appleX, y: appleY, element: appleEl } );
    }
  }

  return results;
}

const applesArray = addTargets(8);

/*
3. Реализуем функцию `grabApple`. Она будет принимать в аргумент ссылку на DOM-узел с яблоком, и должна сделать так, чтобы яблоко плавно стало прозрачным.
*/

const grabApple = (appleEl) => {
  appleEl.style.opacity = 0;
}

/*
4. Реализуем функцию `checkCross` - которая должна проверять, не заходит ли наш робот на яблоко. Если заходит - то вызывать функцию `grabApple`. Функцию `checkCross` нам нужно вызывать в каждой функции, которая двигает робота.
*/

const checkCross = () => {
  const apple = applesArray.find( el => el.x === robotLeft && el.y === robotTop );
  if (apple) {
    grabApple(apple.element);
    score.apples++;
    if (score.apples === applesArray.length) {
      console.log('Wow, all apples are collected! Steps: ' + score.steps)
    }
  }
}

/*
5. Реализуем счет. Нужно подсчитывать количество яблок, собранных роботом, а также количество шагов, которые сделал робот. Как только собраны все яблоки - нужно выводить в консоль сообщение "Ура, яблоки собраны! Вам потребовалось Х шагов!".
*/
