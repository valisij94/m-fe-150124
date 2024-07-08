const frame = document.querySelector('.frame')
const cardsContainer = document.querySelector('.cards_container')


const images = [
    'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
]


for (let elem of images){
    const cardImage = document.createElement('img')
    cardImage.src = elem
    cardsContainer.append(cardImage)
}

const [leftBtn, rightBtn] = document.querySelectorAll('.triggers > button');

// По нажатию на кнопки реализовать изменение сво-ва left у cards_container на -400px
// Подсказка: реализуйте данный механизм создав переменные для:
// 1) Порядкого индекса слайда
// 2) Аккумулятор ширины (...0, ...400, ...800 и тд)

/*
1. С предыдущего занятия, есть разметка и стили для слайдера. Нам осталось только реализовать управление текущим слайдом, т.е. смену картинки. Для этого, нам понадобится управлять смещением контейнера `.cards_container` относительно "рамки" слайдера (`frame`). Задача к обсуждению.
*/

let currentIndex = 0;

leftBtn.addEventListener('click', () => {
  // if (currentIndex > 0) {
  //   currentIndex -= 1;
  // }
  // else {
  //   currentIndex = images.length - 1;
  // }
  dotsContainer.querySelector('.slider_dot.active').classList.remove('active');
  currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1
  cardsContainer.style.left = `-${currentIndex * 400}px`;
  dotsContainer.querySelector(`.slider_dot:nth-child(${currentIndex + 1})`).classList.add('active');
});

rightBtn.addEventListener('click', () => {
  // if (currentIndex < images.length - 1)  {
  //   currentIndex += 1;
  // }
  // else {
  //   currentIndex = 0;
  // }
  dotsContainer.querySelector('.slider_dot.active').classList.remove('active');
  currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0
  cardsContainer.style.left = `-${currentIndex * 400}px`;
  dotsContainer.querySelector(`.slider_dot:nth-child(${currentIndex + 1})`).classList.add('active');
});

/*
2. Реализуем то, что обсудили в первой задаче, добавляем обработчики на кнопки `.triggers > button`. Делаем плавный переход между слайдами.
3. Реализуем внизу иконки, отображающие текущий слайд. Нужно, чтобы внизу (под слайдером), отображалась бы панель с точками, которые показывали бы количество слайдов. Активный слайд нужно подсветить. Для этого, воспользуемся классами `slider_dot`, `active`, которые уже определены в стилях.
*/

const dotsContainer = document.querySelector('.dots_container');
images.forEach( el => {
  const btnEl = document.createElement('div');
  btnEl.classList.add('slider_dot');
  dotsContainer.append(btnEl);
});
dotsContainer.querySelector('.slider_dot:nth-child(1)').classList.add('active');

/*
4. Задача к обсуждению. Сделать так, чтобы при клике на точку, слайдер переходил бы на соответствующий слайд.
*/



//////////////////////// Всплытие и погружение ///////////////////////////

// function trackClick(event) {
//   //if (event.target.tagName === 'BUTTON') {
//     console.log('Clicked on');
//     console.log(event.target)
//   //}
// }

// document.addEventListener('click', trackClick);

// const div = document.querySelector('#bubblingDiv');
// const btn = document.querySelector('#testButton');

// div.addEventListener('click', (e) => {
//   console.log('Custom handler on DIV');
//   // Предотвратить распространение события (т.е. И погружение, И всплытие)
//   e.stopPropagation();
// }, true)

// btn.addEventListener('click', (e) => {
//   console.log('Custom handler on BUTTON');
// })

/* Нужно сделать так, чтобы эта функция вызывалась при клике на любую кнопку, в любом месте нашего div#buttonsBlock */
const btnClickHandler = (e) => {
  if (e.target.tagName === 'BUTTON') {
    console.log('Clicked on Button!');
  }
};

const divEl = document.querySelector('#buttonsBlock');
divEl.addEventListener('click', btnClickHandler);

/*
3. Давайте представим что мы злобные хакеры, и пишем кейлоггер, то есть хотим отслеживать события клавиатуры на сайте. Нам нужно написать функцию `trackKeyboard`, которая будет отслеживать нажатия клавиш (причем неважно, где фокус), и выводит в консоль, что же конкретно нажато. Нас будет интересовать свойство `key` объекта события. И нужно разместить обработчик в правильном месте.
*/
function trackKeyboard(event) {
  console.log('Pressed ' + event.key);
}

document.addEventListener('keydown', trackKeyboard);
