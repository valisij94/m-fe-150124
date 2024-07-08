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
  currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1
  cardsContainer.style.left = `-${currentIndex * 400}px`;
});

rightBtn.addEventListener('click', () => {
  // if (currentIndex < images.length - 1)  {
  //   currentIndex += 1;
  // }
  // else {
  //   currentIndex = 0;
  // }
  currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0
  cardsContainer.style.left = `-${currentIndex * 400}px`;
});

/*
2. Реализуем то, что обсудили в первой задаче, добавляем обработчики на кнопки `.triggers > button`. Делаем плавный переход между слайдами.
3. Реализуем внизу иконки, отображающие текущий слайд. Нужно, чтобы внизу (под слайдером), отображалась бы панель с точками, которые показывали бы количество слайдов. Активный слайд нужно подсветить. Для этого, воспользуемся классами `slider_dot`, `active`, которые уже определены в стилях.
4. Задача к обсуждению. Сделать так, чтобы при клике на точку, слайдер переходил бы на соответствующий слайд.
*/
