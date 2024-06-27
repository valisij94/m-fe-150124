class Product {

  static categories = ['tools', 'beauty'];

  constructor(title, price, category, description) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.smartCategory = category;
  }

  get textDescription() {
    return `Product ${this.title}, price: ${this.price}`;
  }

  set smartPrice(newPrice) {
    if (typeof newPrice === 'number' && newPrice >= 0) {
      this.price = newPrice;
    }
    else {
      throw new Error('Cannot set negative price!');
    }
  }

  set smartCategory(newCategory) {
    if (Product.categories.includes(newCategory)) {
      this.category = newCategory;
    }
    else {
      throw new Error(`${newCategory} does not exist!`);
    }
  }

  static addCategory(newCategory) {
    if (!Product.categories.includes(newCategory)) {
      Product.categories.push(newCategory);
    }
  }
}

// const newProduct = new Product('Saw', 100, 'unknown', 'Something');
// console.log(newProduct);

Product.addCategory('toys');
const newProduct1 = new Product('Ball', 100, 'toys', 'Something');

// newProduct.smartPrice = -100;
// console.log(newProduct.price);
// newProduct.smartPrice = '100';
// console.log(newProduct.price);

/*
5. Предположим, у нас есть список категорий, `tools`, `beauty`. Нужно добавить классу `Product` массив с этими категориями, и сделать так, чтобы этот список был общим для всех экземпляров класса (т.е. был бы на уровне класса, а не объектов).
*/

/*
6. Реализуем сеттер `smartCategory`, нужно чтобы при установке категории контролировалось бы наличие такой категории (что она существует в нашем массиве из п.5).
*/

/*
7. Добавляем возможность расширения списка категорий. Добавим метод `addCategory`, который будет принимать название новой категории, и если такого названия (без учета регистра) нет в массиве категорий - то добавлять его в массив.
*/
