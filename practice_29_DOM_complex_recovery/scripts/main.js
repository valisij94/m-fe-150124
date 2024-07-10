const modal = document.querySelector('.modalBackground');

function showModal() {
  modal.style.display = 'block';
}

function hideModal() {
  modal.style.display = 'none';
}

/*
1. В разметке есть блок `div.trackedBlock`. В нем есть инпуты и кнопка. Напишем функцию `trackBlur`, которая будет отслеживать событие ухода фокуса (`blur`) из инпутов. Она должна выводить в консоль сообщение вида "Blurred from input". И нужно чтобы эта функция вызывалась при событии `blur` на ВСЕХ инпутах из блока `trackedBlock`.
*/

const trackedBlock = document.querySelector('.trackedBlock');

function trackBlur(event) {
  //console.log(`Blurred from input! ID = ${event.target.id}, value = ${event.target.value}`);
}

trackedBlock.addEventListener('blur', trackBlur, true);


trackedBlock.addEventListener('click', function(event) {

  if (event.target === event.currentTarget) {
    console.log('Clicked on DIV');
  } else {
    console.log('Clicked on children');
  }
});

/*
2. Немного усложним. Теперь нужно в сообщении выводить `Blurred from input INPUT_ID, text is INPUT_VALUE`.
*/

/*
3. И еще немного усложним. Теперь, мы хотим отслеживать события клика по нашему `div.trackedBlock`, и его потомкам. Нам нужен обработчик, который будет выводить в консоль такое. Если кликнули по `div.trackedBlock` - то выводить в консоль `Clicked on DIV`, а иначе (если по кому-то из потомков) - то выводить `Clicked on children`. Здесь есть много путей решения. Предлагается вспомнить про `event.target`, `event.currentTarget`.
*/


/*
5. В разметке есть модальное окно, по умолчанию оно скрыто. В скрипте есть функции показа и скрытия модального окна. Нужно показывать модальное окно при клике на кнопку `#firstButton`. А скрывать его нужно при клике на сером фоне модального окна. Будьте внимательны - модалка должна скрываться только при клике по серому фону, но не при клике по самой модалке!
*/

const btn = document.querySelector('.trackedBlock > button');
btn.addEventListener('click', showModal);

const back = document.querySelector('.modalBackground');
back.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    hideModal();
  }
});