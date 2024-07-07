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
