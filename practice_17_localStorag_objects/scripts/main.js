// код пишем здесь!

const testObject = {
    name: 'Vasilij',
    lastName: 'Ivanov'
}

const ball = {
    id: 1,
    name: "Ball",
    category: "Sport",
    img: "./assets/ball.jpeg",
    price: 100
  };
  const gloves = {
    id: 2,
    name: "Gloves",
    category: "Sport",
    img: "./assets/gloves.jpg",
    price: 140
  };
  const shoes = {
    id: 3,
    name: "Sport shoes",
    category: "Sport",
    discount: true,
    img: "./assets/shoes.png",
    price: 320
  };
  const hammer = {
    id: 4,
    name: "Hammer",
    category: "Tools",
    img: "./assets/hammer.jpeg",
    price: 40
  };
  const saw = {
    id: 5,
    name: "Saw",
    category: "Tools",
    discount: true,
    img: "./assets/saw.jpeg",
    price: 75
  };
  const shark = {
    id: 6,
    name: "Shark toy",
    category: "Other",
    img: "./assets/shark.jpeg",
    price: 45
  };

  // Массив объектов
  let products = [ball, gloves, shoes, hammer, saw, shark];

  /*
  1. Пристрелочная задача. Освежаем в памяти сериализацию/десериализацию объектов, и обработчики событий. В файле `main.js` есть объект `testObject`, который содержит поля. Задача - его сериализовать и записать в `localStorage`, с ключом `testObject`.
  */

  localStorage.setItem('testObject', JSON.stringify(testObject));

  /*
  2. В разметке есть кнопка `saveTestBtn`, у нее есть ID. Добавляем обработчик события на эту кнопку. При клике нужно:
 - достать из `localStorage` значение по ключу `testObject`.
 - десериализовать его
 - вывести результат десериализации в консоль
 - вывести в консоль значение свойства `name` десериализованного объекта.
 */

const saveTestBtn = document.querySelector('#saveTestBtn');

saveTestBtn.addEventListener('click', () => {
  let stored = localStorage.getItem('testObject');
  console.log(JSON.parse(stored).name);
});


/*
3. Обеспечить сохранение данных всех инпутов в блоке "Блок для второй задачи". У блока есть ID: `inputsBlock`. В блоке есть несколько инпутов. У каждого инпута есть свой ID.
 - Написать функцию `saveInputsData`, которая будет запоминать все значения инпутов в `localStorage`. Функция должна создать объект, в который запишет значения всех инпутов в блоке, при этом в качестве ключей используем идентификаторы (ID). И этот объект записать в `localStorage`. Эта функция должна вызываться при клике на кнопку "Save Inputs".
  - Далее написать функцию `restoreInputsData` - она должна восстановить значения в инпутах из `localStorage`. Эта функция должна вызываться при клике на кнопку "Restore Inputs".
  - написать функцию `clearInputsData` - очистка объекта с данными инпутов в `localStorage`. Вызывается при клике на кнопку "Clear Inputs".
*/

function saveInputsData() {
  const inputs = document.querySelectorAll('#inputsBlock input');
  const inputsData = {};
  inputs.forEach( inputEl => {
    const id = inputEl.id;
    const val = inputEl.value;
    inputsData[id] = val;
  });
  localStorage.setItem('inputsData', JSON.stringify(inputsData));
}

const saveInputsBtn = document.querySelector('#saveInputsBtn');
saveInputsBtn.addEventListener('click', saveInputsData);

function restoreInputsData() {
  const restored = localStorage.getItem('inputsData');
  const parsed = JSON.parse(restored);
  for (let key in parsed) {
    const input = document.querySelector(`#inputsBlock input#${key}`);
    if (input) {
      input.value = parsed[key];
    }
  }
}

const restoreInputsBtn = document.querySelector('#restoreInputsBtn');
restoreInputsBtn.addEventListener('click', restoreInputsData);