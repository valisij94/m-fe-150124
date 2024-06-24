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
  constructor() {
    console.log('First constructor');
  }
}

class Second extends First {
  constructor() {
    super();
    console.log('Second constructor');
  }
}

let instance = new Second();
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

  simpleMethod() {
    console.log('Second Method');
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

  simpleMethod() {
    console.log('First Method');
  }

  complexMethod() {
    console.log('Complex method');
  }
}

class Second extends First {
  constructor() {
    super();
    console.log('Second constructor');
  }

  simpleMethod() {
    super.simpleMethod();
    console.log('Second Method');
  }
}

let instance = new Second();
instance.simpleMethod();
```

4. Что выведет код:
```
class Clazz {
  static staticProp = 'Static';

  constructor(nonStaticProp) {
    this.nonStaticProp = nonStaticProp;
  }

  static simpleMethod() {
    Clazz.staticProp = 'SuperStatic';
  }

  static complexMethod() {
    Clazz.staticProp = 'ExtremelyStatic';
    this.nonStaticProp = 'Nothing';
  }
}

let value = new Clazz('NonStaticProp');
console.log( value.nonStaticProp );
Clazz.simpleMethod();
console.log(Clazz.staticProp);
Clazz.complexMethod();
console.log(Clazz.staticProp, value.nonStaticProp);
```

### Задачи занятия
1. Пристрелочная. Создаем класс `Shape`. Он подразумевает геометрическую фигуру в двумерном пространстве. У него будут свойства `name`, `color`, которые зайдут в конструкторе. И также будет метод `describe`, который будет возвращать строку вида `Shape NAME, color COLOR`.
2. Теперь нужно реализовать класс `Line` (то есть линия). Линия также является геометрической фигурой, но расширяет ее, т.к. имеет еще свойства `start`, `end`. Эти свойства - будут объектами класса `Point` (определен в скрипте `main.js`), и должны передаваться в конструкторе. Также, нужно реализовать метод `getLength`, который определит длину линии по координатам.
3. Реализуем класс `Circle`, он также является геометрической фигурой, у него есть координаты центра, и радиус, которые зайдут в конструкторе. И должны быть методы `getLength`, `getSquare`, которые будут считать длину окружности и площадь круга.
4. Теперь предположим, что мы хотим сделать "счетчик" созданных геометрических фигур. Нам нужно сделать так, чтобы при каждом создании фигуры, у нас увеличивался бы счетчик. Этот счетчик нужно сделать на уровне класса, а не объектов.
5. Немного усложним задачу. Сделаем так, чтобы теперь был еще счетчик, который будет считать разные фигуры. Это будет объект со свойствами `line`, `circle`, и значения этих свойств надо увеличивать при создании соответствующих объектов.
6. Еще немного усложним. Предположим, что наша программа имеет максимальное количество фигур, которые она может одновременно разместить на экране. Добавим в класс `Shape` статическое свойство `MAX_INSTANCES`, которое будет равно 3. То есть не более 3 фигур. И нам нужно сделать так, чтобы программа не давала создавать более 3 объектов - геометрических фигур. Задача к обсуждению.
7. И еще усложним. Попробуем реализовать паттерн "синглтон", то есть одииночка. Создаем класс `Singleton`, и нужно гарантировать, что можно создать только один его экземпляр. Тоже задача к обсуждению.

### Полезные ссылки по занятию:
 - Русскоязычный гайд по основам [ООП](https://learn.javascript.ru/class).
 - Еще один гайд по [ООП](https://proglib.io/p/uchebnik-po-javascript-oop-na-prostyh-primerah-2022-06-26). Можно читать до раздела про наследование (для базового понимания классов).