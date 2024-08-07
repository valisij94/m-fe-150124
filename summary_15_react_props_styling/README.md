# README

# Итоговое занятие №15

## Тема:

Репозитарий содержит материалы по итоговому занятию №15, посвященному ознакомлению с фреймворком React.js: работа с пропсами и инлайн-стилями.

## Цели занятия
- закрепление знаний, полученных на лекции;
- разбор практических примеров;
- практическое применение полученных знаний.

## Задачи занятия
1. Пристрелочная. Пишем компонент `InfoBlock`. Это будет компонент, который должен отображать блок с заголовком и текстом (типа сообщение). Разметка ожидается следующая:
```
<div class="infoBlock">
  <h3 class="infoBlockHeader">Header</h3>
  <p class="infoBlockContent">Content</p>
</div>
```

Заголовок и текст заходят через пропсы `headerText`, `contentText` соответственно.

2. Теперь реализуем дополнительно тип сообщения. Нужно "научить" компонент принимать проп `dialogType`. Это будет строка, которая содержит одно из значений `info | warning | error`. Значение этого пропа нужно "приклеить" к классам контейнера (т.е. кроме `infoBlock` еще должен добавиться этот класс из пропа).
3. Вспоминаем условный рендеринг. Нужно сделать так, чтобы при отрисовке диалога `error`, под параграфом `infoBlockContent` рендерился бы параграф с текстом "You cannot dismiss this message!".
4. Усложним условный рендеринг. Теперь, если у нас тип диалога - не `error`, то рисуем кнопку с текстом "Okej!".
5. Вспоминаем пропсы по умолчанию. Нужно сделать так, чтобы при отсутствии пропсов `headerText`, `contentText`, использовались бы тексты `Default header`, `Default text` соответственно.
6. В компоненте `SimpleList` сделать так, чтобы если массив из пропа `items` пустой или не задан - то вместо элементов списка рендерился бы параграф с текстом `There are no items here!`.
7. Усложним компонент `SimpleList`. Нужно выделить элемент списка в отдельный компонент, а именно - `SimpleListItem`. В пропсах он будет принимать содержимое элемента списка.
8. В компоненте `ProductCard`, нужно внести изменения, чтобы компонент принимал проп `product` (это будет объект с данными товара), и воспользоваться этими данными. А компонент `ProductList` теперь будет принимать проп `products`, в котором будет массив с товарами, и нужно их отрендерить. Также, компонент `ProductList` будет принимать проп `emptyProductList`, в котором будет строка. Ее нужно рисовать вместо списка товаров, если список пустой.