/*
1. Первая - пристрелочная, написать класс `Circle`. У него должны быть координаты центра (x,y), и радиус. Конструктор должен принимать эти три параметра.
*/

class Circle {

  constructor(centerX, centerY, radius) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
  }

  getLength() {
    return 2 * Math.PI * this.radius;
  }

  getSquare() {
    return Math.PI * (this.radius ** 2);
  }

  move(newX, newY) {
    this.centerX = newX;
    this.centerY = newY;
  }

  scale(coeff) {
    this.radius *= coeff;
  }
}

// const circle1 = new Circle(0,0, 10);
// console.log(circle1.getLength(), circle1.getSquare())

// circle1.move(10,10);
// console.log(circle1)

// circle1.scale(2);
// console.log(circle1);

/*
5.  Реализуем класс `VersionsControl`. Он должен реализовать логику работы системы контроля версий. Класс принимает в конструкторе строку с начальной версией программного продукта, и название программного продукта. Строка с начальной версией имеет вид "1.0.0". Первое число - это Major-версия, второе - Minor-версия, и третье - Patch. Нужно сохранить имя программного продукта в поле класса `productName`, а major, minor, patch - в соответствующие поля.

Также реализуем метод `getCurrentVersion`, который должен возвращать строку вида "Software PRODUCT_NAME, release MAJOR.MINOR.PATCH. All rights reserved."
*/

class VersionsControl {

  constructor(initialRevision, productName) {
    this.productName = productName;
    let [ major, minor, patch ] = initialRevision.split('.');
    this.major = major;
    this.minor = minor;
    this.patch = patch;
  }

  getCurrentRevision() {
    return `Software ${this.productName}, release ${this.major}.${this.minor}.${this.patch}. All right reserved.`;
  }
}


const newProduct = new VersionsControl('1.5.10', 'Timon');

console.log(newProduct.getCurrentRevision());