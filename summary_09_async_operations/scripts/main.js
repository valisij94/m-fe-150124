const racers = [
  { name: 'Racer1', car: 'Geely' },
  { name: 'Racer2', car: 'Haval' },
  { name: 'Racer3', car: 'Zeekr' },
  { name: 'Racer4', car: 'GreatWall'},
  { name: 'Racer5', car: 'SsangYong'}
];

const winners = [];


/*
8. Пишем свой "гоночный симулятор". У нас есть массив гонщиков, `racers`. И есть массив победителей, `winners`. Нашей первой задачей будет написать функцию `startRace`. В аргументах она будет принимать объект с данными гонщика. Она должна случайным образом определить время заезда (Math.random), домножить это время на 1000, и через это время завершить заезд. Задача к обсуждению.
*/

function startRace(racer) {
  const timeRace = Math.random() * 1000;
  return new Promise( (resolve) => {
    setTimeout( () => {
      resolve(racer);
    }, timeRace);
  });
}

/*
9. Далее, осталось написать функцию завершения заезда, `finishRace`. Она также примет в аргументах гонщика, и ее задача - проверить, если в массиве победителей уже есть 3 победителя, то вывести в консоль сообщение вида "Гонщик ИМЯ слишком медленный". Если же там еще нет трех победителей - вывести в консоль сообщение вида "Гонщик ИМЯ финишировал!", и добавить гонщика в массив победителей.
*/

function finishRace(racer) {
  if (winners.length >= 3) {
    console.log(`Racer ${racer.name} is too slow!`);
  }
  else {
    console.log(`Racer ${racer.name} finished!`);
    winners.push(racer);
  }
}

/*
10. И нужно написать функцию `startCompetition`, которая запустит заезд для всех гонщиков.
*/

function startCompetition() {
  racers.forEach( racer => {
    startRace(racer).then( finishRace );
  })
}

startCompetition();

// 1. Задача - каждые 5 секунд выводить в консоль сообщение "Прошло 5 секунд".
// const intervalId = setInterval( () => {
//   console.log(' 5 seconds! ');
// }, 5000);

/*
2. Добавляем на страницу текущие дату и время. Нужно добавить в разметку блок, в котором должны отображаться текущие дата и время, вида `01.01.2000 11:23:55`. Для получения даты в таком формате, используем конструкцию `new Date().toLocaleString()`. И нужно сделать так, чтобы дата и время отображались актуальные (т.е. обновлять текст ежесекундно).
*/

// const timerEl = document.querySelector('.simpleTimerContainer');

// function updateTime() {
//   timerEl.textContent = new Date().toLocaleString();
// }

// const intervalId = setInterval( updateTime, 1000);

/*
3. Реализуем простой секундомер. Нужно добавить в блок с id=`simpleTimerContainer` секундомер. В блоке будут:
 - параграф, в котором будем выводить текущее время секундомера
 - кнопка "Старт" - при нажатии запускаем секундомер
 - кнопка "Сброс" - при нажатии сбрасываем секундомер.
 */

//  const timrBlockEl = document.querySelector('.simpleTimerContainer');

//  const paragraphEl = document.createElement('p');
//  paragraphEl.textContent = 0;
//  const btnStartEl = document.createElement('button');
//  btnStartEl.textContent = 'Start';
//  const btnStopEl = document.createElement('button');
//  btnStopEl.textContent = 'Stop';

//  timrBlockEl.append(paragraphEl, btnStartEl, btnStopEl);

//  let timerId;

// btnStartEl.addEventListener('click', () => {
//   if (!timerId) {
//     timerId = setInterval( () => {
//       paragraphEl.textContent = +paragraphEl.textContent + 1;
//     }, 1000);
//   }
// });

// btnStopEl.addEventListener('click', () => {
//   if (timerId) {
//     clearInterval(timerId);
//     timerId = undefined;
//     paragraphEl.textContent = 0;
//   }
// });

/*
5. Написать функцию `delayedExecution`. Она должна принимать 2 аргумента. Первый - время задержки. Второй - функция-колбэк. Нужно, чтобы колбэк был вызван через время задержки. Пример:
```
const simpleFunction = () => { console.log('Hey there!'); }

delayedExecution(5, simpleFunction);
// Через 5 секунд в консоли будет выведено Hey there
```
*/
// function delayedExecution(delay, callback) {
//   setTimeout(callback, delay * 1000);
// }
// const simpleFunction = () => { console.log('Hey there!'); }

// delayedExecution(5, simpleFunction);

// 6. Написать промис, который будет завершен успехом через 3 секунды.
// const newPromise = new Promise( (resolve) => {
//   setTimeout( () => {
//     resolve('Something')
//   }, 3000 );
// });

/*
7. Написать функцию `createPromise`, которая будет "производить" промисы. Она будет принимать в аргументах время задержки и функцию-колбэк. Задачей функции будет вернуть промис, который будет успешно завершен через время задержки результатом вызова функции-колбэка.
*/

// function createPromise(delay, callback) {
//   return new Promise( (resolve, reject) => {
//     const delayInMillis = delay * 1000;
//     const result = callback();
//     setTimeout( () => {
//       resolve(result);
//     }, delayInMillis);
//   });
// }

// const newPromise = createPromise(2, () => 'Hey there!');
// newPromise.then( res => console.log(res))
