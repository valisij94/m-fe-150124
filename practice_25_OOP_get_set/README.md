## Практическое занятие №24

### Тема: Основы объектно-ориентированного программирования в JavaScript. Классы и объекты.

Репозитарий содержит материалы по практическому занятию №24, посвященному основам ООП. Статические свойства и методы. Наследование.

### Цели занятия
- закрепление знаний, полученных на лекции;
- разбор практических примеров;
- практическое применение полученных знаний.

### Разогрев
1. Что выведет код:
```
class First {

  static myProp = 'Static Prop';
  constructor() {
    console.log('First constructor');
  }
}

const instance = new First();
console.log(instance.myProp);
```

2. Что выведет код:
```
class First {
  constructor() {
    console.log('First constructor');
  }

  simpleMethod() {
    console.log('First Method');
  }
}

class Second extends First {
  constructor() {
    super();
    console.log('Second constructor');
  }
}

let instance = new Second();
instance.simpleMethod();

```

3. Что выведет код:
```
class First {
  constructor() {
    console.log('First constructor');
  }
}

class Second extends First {
  get getterProp() {
    return this.prop;
  }
  set setterProp(value) {
    this.prop = value;
  }

  constructor() {
    super();
    this.prop = 'Nothing';
    console.log('Second constructor');
  }
}

class Third extends Second {
  constructor() {
    super();
    console.log('Third constructor');
  }
}

let instance = new Third();
console.log(instance.getterProp);
instance.setterProp = 'Something';
console.log(instance.prop);

```

### Задачи занятия
1. Пристрелочная. У нас определен класс `Product`, то есть данные о товаре интернет-магазина. Добавьте ему свойство-геттер, `description`, которое должно возвращать строку вида `Product - ..., price ...`. То есть выведет строку с названием и ценой товара. Значения названия и цены взять из свойств `title`, `price` соответственно.
2. Теперь добавим свойство-сеттер `smartPrice`, которое будет "умно" управлять ценой товара. Оно должно менять цену товара.
3. Добавим немного логики. Сделать так, чтобы цена товара не была меньше 0 (то есть реализовать в сеттере логику: если новая цена - больше 0, то ставим эту цену, а если меньше - то ничего не делаем).
4. Сделать так, чтобы при попытке установить отрицательную цену, генерировалась ошибка "Нельзя установить отрицательную цену!".
5. Предположим, у нас есть список категорий, `tools`, `beauty`. Нужно добавить классу `Product` массив с этими категориями, и сделать так, чтобы этот список был общим для всех экземпляров класса (т.е. был бы на уровне класса, а не объектов).
6. Реализуем сеттер `smartCategory`, нужно чтобы при установке категории контролировалось бы наличие такой категории (что она существует в нашем массиве из п.5).
7. Добавляем возможность расширения списка категорий. Добавим метод `addCategory`, который будет принимать название новой категории, и если такого названия (без учета регистра) нет в массиве категорий - то добавлять его в массив.

### Полезные ссылки по занятию:
 - Русскоязычный гайд по основам [ООП](https://learn.javascript.ru/class).
 - Еще один гайд по [ООП](https://proglib.io/p/uchebnik-po-javascript-oop-na-prostyh-primerah-2022-06-26). Можно читать до раздела про наследование (для базового понимания классов).