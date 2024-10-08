# README

## Практическое занятие №34

### Тема:

Репозитарий содержит материалы по практическому занятию №35, посвященному обработке событий в React-компонентах, и работе с внутренним состоянием компонентов (хук `useState`).

### Цели занятия
- закрепление знаний, полученных на лекции;
- разбор практических примеров;
- практическое применение полученных знаний.

### Задачи занятия
1. Пристрелочная. Учимся обрабатывать события. В компоненте `App`, добавьте обычную кнопку с текстом `Add`, и сделайте так, чтобы при нажатии на нее, в консоль выводилось бы сообщение "Click!".
2. Еще пристрелочная. Теперь добавим в компонент `App` инпут, и научимся реагировать на событие изменения содержимого инпута. Нужно, чтобы при изменении инпута, в консоль выводилось бы сообщение `Input changed!`.
3. Усложним задачу 2. Нужно, чтобы в консоль теперь выводились бы слова `Input changed `, и текст из инпута. Тут нам нужно поработать с объектом события.
4. Теперь перейдем к внутреннему состоянию. Напишем простой счетчик кликов на кнопку. Нужно в компоненте `App`, добавить параграф, который будет содержать текст `Clicked _ times!`, то есть количество кликов по кнопке. Изначально - 0. И нужно увеличивать счетчик каждый раз при клике на кнопку.
5. Добавим кнопку `Delete`, которая будет уменьшать счетчик на 1.
6. Задача "со звездочкой". Сейчас, при кликании по кнопкам, у нас перерисовывается ВЕСЬ компонент `App`, а не только кнопки и параграф. Как мы могли бы решить эту проблему?
7. Пишем свой компонент `SimpleButton`, который будет рендерить нам кнопку. Текст кнопки заходит в пропсе `btnText`, класс - `simpleButton`. В пропсах также будет может строка `btnClasses` с дополнительными классами, которые нужно добавить нашей кнопке.
8. Задача "для размышления". Нужно сделать так, чтобы при клике на кнопку вызывался бы обработчик, который описан ВНЕ компонента `SimpleButton`. Как это можно реализовать?
9. Усложним задачу. Предположим, мы теперь хотим хранить в локальном стейте не-примитивный объект. Пусть это будет массив строк. Инициализируем его списком дел (`Learn HTML`, `Learn CSS`, `Learn JS`). Нужно его отрисовать с использованием компонента `SimpleList`.
10. Дадим возможность добавлять дела. Нужно добавить в наш компонент `App` инпут с кнопкой. В инпут будем вводить имя дела, которое надо добавить. При клике на кнопку, нужно добавлять наше дело в массив в локальном стейте.

### Полезные ссылки по занятию:
 - Обработка событий в [React](https://react.dev/learn/responding-to-events)
 - Что такое внутреннее состояние, и как с ним [работать](https://react.dev/learn/state-a-components-memory)