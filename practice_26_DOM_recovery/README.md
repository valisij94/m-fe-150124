## Практическое занятие №26

### Тема: Повторение методов работы с DOM в JavaScript.

Репозитарий содержит материалы по практическому занятию №26, посвященному работе с DOM.

### Цели занятия
- закрепление знаний, полученных на лекции;
- разбор практических примеров;
- практическое применение полученных знаний.

### Разогрев
1. Предположим, есть разметка, в которой есть кнопка с ИД = buttonId. Что будет в консоли после нажатия на кнопку?
```
const btn = document.querySelector('#buttonId');

btn.onclick = () => { console.log('First'); }
btn.addEventListener('click', () => { console.log('Second'); });
btn.onclick = () => { console.log('Third'); }
btn.addEventListener('click', () => { console.log('Fourth'); });
```

2. Есть разметка:
```
<div id="container">
  <div id="inner">
    <button id="button">Button</button>
  </div>
</div>
```
Что выведет код:
```
const divEl = document.querySelector('#inner');
const button = document.querySelector('#button');
divEl.addEventListener('click', () => console.log('Hey there!') );
button.onclick = () => console.log('Click on the button!');
```

### Задачи занятия

Сегодня верстаем форму обратной связи (типа "перезвоните мне"). Ее нужно рисовать как модальное окно. Макет представлен по [ссылке](https://www.figma.com/design/vZH9KSQgQfifJbwUm17arv/Sign-Up-Form-(Community)?node-id=3-17&t=5NksdiI8soStj0ZK-0). Не нужно делать pixel-perfect верстку, это можно сделать самостоятельно. Цель - реализовать логику из задач. Каркас верстки уже реализован.

1. В скрипте есть массив с категориями. Нужно заполнить выпадающий список `#categorySelect` данными из этого массива.
2. Сейчас в форме постоянно видно текстовое поле "Опишите Ваш вопрос здесь!". Нужно, чтобы по умолчанию это поле было бы скрыто, и показывалось при выборе категории "Другое" в `#categorySelect`.
3. Реализуем первичную валидацию. Нужно, чтобы при утере фокуса (событие `blur`), для инпутов "Фамилия", "Имя", "Эл.почта", осуществлялась бы проверка, что они непустые. Если пустые - применять класс `errorField`. Если нет - этот класс не применять.
4. Сейчас форма видна постоянно. Нужно сделать так, чтобы форма была по умолчанию скрыта, и показывалась при нажатии на кнопку `Show Callback Form`.
5. Теперь, сделаем форму модальным окном. Нужно, чтобы она показывалась поверх основного контента. В идеале - выровнять ее по центру.
6. Реализуем "подложку". Нужно, чтобы фон "за" модальным окном становился бы размытым. Задача к обсуждению. Чтобы реализовать размытый фон, используем свойство `backdrop-filter: blur(2px);`.
7. Реализуем закрытие модального окна. При нажатии на кнопку "Отправить!", реализовать закрытие модалки и вывод в консоль данных всех инпутов.
8. Освежаем в памяти `localStorage`. Реализовать сохранение данных формы в localStorage. Это нужно делать на каждое изменение инпутов/выпадающего списка.

### Полезные ссылки по занятию:
 - [Селекторы](https://learn.javascript.ru/searching-elements-dom) - отличный и наглядный русскоязычный материал по поиску элементов в DOM.
 - [Продвинутые селекторы](https://learn.javascript.ru/css-selectors) - рекомендуется как "дополнительная информация", после усвоения материала из ссылки "Селекторы".
 - [Всплытие событий](https://learn.javascript.ru/bubbling-and-capturing) - максимально полезная информация по всплытию событий, настоятельно рекомендуется к прочтению.