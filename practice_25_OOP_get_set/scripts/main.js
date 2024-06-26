class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}


/*
1. Пристрелочная. Создаем класс `Shape`. Он подразумевает геометрическую фигуру в двумерном пространстве. У него будут свойства `name`, `color`, которые зайдут в конструкторе. И также будет метод `describe`, который будет возвращать строку вида `Shape NAME, color COLOR`.
*/

class Shape {

  static instancesCounter = 0; // Static prop

  objProp = {}; // Defining non-static property
  static objProp1 = {};

  constructor(name, color) {
    this.name = name;
    this.color = color;
    Shape.instancesCounter = Shape.instancesCounter + 1;
  }

  describe() {
    return `Shape ${this.name}, color ${this.color}`;
  }
}

/*
2. Теперь нужно реализовать класс `Line` (то есть линия). Линия также является геометрической фигурой, но расширяет ее, т.к. имеет еще свойства `start`, `end`. Эти свойства - будут объектами класса `Point` (определен в скрипте `main.js`), и должны передаваться в конструкторе. Также, нужно реализовать метод `getLength`, который определит длину линии по координатам.
*/

class Line extends Shape {

  constructor(name, color, start, end) {
    super(name, color);
    this.start = start;
    this.end = end;
  }
}

/*
3. Реализуем класс `Circle`, он также является геометрической фигурой, у него есть координаты центра, и радиус, которые зайдут в конструкторе. И должны быть методы `getLength`, `getSquare`, которые будут считать длину окружности и площадь круга.
*/

class Circle extends Shape {

  constructor(name, color, center, radius) {
    super(name, color);
    this.center = center;
    this.radius = radius;
  }

  getLength() {
    return 2 * Math.PI * this.radius;
  }

  getSquare() {
    return Math.PI * this.radius ** 2;
  }
}

/*
4. Теперь предположим, что мы хотим сделать "счетчик" созданных геометрических фигур. Нам нужно сделать так, чтобы при каждом создании фигуры, у нас увеличивался бы счетчик. Этот счетчик нужно сделать на уровне класса, а не объектов.
*/

const circle = new Circle('Circle', 'Red', new Point(0,0), 5);
const line = new Line('Line', 'Green', new Point(0,0), new Point(1,1));
const shape = new Shape('Shape1', 'Blue');

console.log(shape.objProp === circle.objProp);