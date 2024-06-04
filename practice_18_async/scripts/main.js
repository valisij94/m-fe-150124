/* 1. Работаем с отложенным выполнением кода. Нужно вывести в консоль сообщение "Delayed message", через 5 секунд после запуска скрипта.
*/

// setTimeout( () => {
//   console.log('Delayed message')
// }, 5000 );

/*
2. Делаем блок на странице, который будет запускать отложенное выполнение. Нужно написать функцию `renderDelayedBlock`. Она должна будет сделать инпут, в который будем вводить задержку в секундах, и кнопку "Запуск". При нажатии на кнопку "Запуск", нужно через N секунд вывести сообщение "Delayed message". N - это кол-во секунд, введенное в инпуте.
*/

const mainContainer = document.querySelector('.mainContainer');

function renderDelayedBlock() {
  const inputEl = document.createElement('input');
  inputEl.placeholder = 'Delay time';
  const btnEl = document.createElement('button');
  btnEl.textContent = 'Start';
  const btnCancelEl = document.createElement('button');
  btnCancelEl.textContent = 'Cancel';

  let timerId;

  btnEl.onclick = function() {
    const inputValue = +inputEl.value;
    if (!Number.isNaN(inputValue) && inputValue > 0) {
      timerId = setTimeout( () => {
        console.log('Delayed message');
      }, inputValue * 1000 );
    }
    else {
      console.log('Wrong value!')
    }
  }

  btnCancelEl.addEventListener('click', () => {
    clearTimeout(timerId);
  });

  mainContainer.append(inputEl, btnEl, btnCancelEl);
}

renderDelayedBlock();

/*
3. Дорабатываем наш блок. Добавляем кнопку "Отмена". Изначально она должна быть скрыта (рекомендуется воспользоваться CSS).
 - когда мы нажимаем на кнопку "Запуск", мы показываем кнопку "Отмена".
 - при нажатии на кнопку "Отмена", нам нужно отменить запланированное в `setTimeout` выполнение.
 - если выполнение все же произошло (т.е. функциональность внутри `setTimeout` выполнилась), то кнопку "Отмена" скрываем.
 */
