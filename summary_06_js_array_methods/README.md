## Итоговое занятие №6

### Тема: JavaScript. Повторение изученного ранее.
Репозитарий содержит материалы по итоговому занятию №6, посвященному методам массивов и работе с объектами.

### Цели занятия
- закрепление знаний, полученных на лекциях;
- практическое применение знаний, полученных на лекциях.

### Задачи занятия

1. Пристрелочная. С помощью метода reduce из массива строк, получить число, которое содержит количество символов во всех строках.
2. Пишем функцию `filterByPrice`. Она будет принимать в аргументах два числа, и должна вернуть массив с товарами, у которых цена находится между этими числами (т.е. фильтрует товары по диапазону цен).
3. Отсортировать массив `products` по возрастанию цены.
4. Отсортировать массив `products` по возрастанию названия товара в алфавитном порядке, без учета регистра.
5. Из массива `products`, получить объект, у которого будут свойства `totalPrice`, `totalCount`. В первое свойство должна быть записана суммарная стоимость всех товаров, а во второе - их количество.

### Работа с датами
1. Пишем функцию `getDifference`. Она будет принимать две даты (`Date`), и должна возвращать разницу между ними в миллисекундах. Считаем, что у обоих дат время - 0:00.
2. Пишем функцию `getDaysDifference` - она также примет две даты, и должна вернуть разницу в полных днях между ними.

### Динамическое обращение к свойствам объектов
Ранее, мы работали со свойствами объектов только через "точечную" нотацию. То есть:
```
const myObj = {
  name: 'Timon',
  kind: 'Suricate'
}

myObj.weight = 3.4; // добавляем свойство weight нашему объекту
const timonName = myObj.name; // обращаемся к свойству name нашего объекта.
```

Такой способ годится, когда мы значем название (ключ) свойства объекта на этапе написания кода. Но бывают ситуации, когда это значение появится только при выполнении этого кода. Например, у нас есть объект, который подразумевает корзину товаров. Мы хотим в качестве ключей использовать названия товаров, а в качестве значений - количество товаров, добавленных в корзину.
```
const cartInstance = {
  ball : 1,
  shoes: 4
}
```

На этапе написания кода, мы еще не знаем, какие у нас имена товаров - это будет определено только на этапе выполнения кода. То есть, в момент добавления товара в корзину (например, когда пользователь нажмет на кнопку "В корзину"). И нам нужно сказать, что объекту `cartInstance` нужно добавить (или изменить) то свойство, у которого ключ равен названию выбранного товара.

Для этого нам поможет запись с квадратными скобками.

```
const addToCartHandler = (product) => {
  const productName = product.name;
  cartInstance[productName] += 1;
}
```

То есть, мы как бы говорим: возьми то, что записано в квадратные скобки, вычисли значение, и обратись к такому свойству объекта `cartInstance`, у которого ключ будет равен этому значению.

### Задачи по объектам
1. Сделать так, чтобы у объекта `testObject` появилось свойство с ключом, равным значению переменной `propName`, со значением 95.
2. Запросить у пользователя имя нового свойства объекта через `prompt`. Добавить это свойство в объект `testObject`. В качестве значения - записать число 345.
3. У нас есть объект `categoriesObject`. Нужно пройтись по массиву `products`, посчитать количество товаров разных категорий, и записать в соответствующие свойства объекта `categoriesObject`.
4. Из массива товаров, получить объект, в котором ключами будут наименования товаров, а значениями - цены этих товаров.
5. Из массива товаров, получить объект, в котором ключами будут категории товаров, а значениями - суммарная стоимость товаров этих категорий.