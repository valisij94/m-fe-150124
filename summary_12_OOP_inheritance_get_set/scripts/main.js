
// class Object2 {
//   static entries(obj) {
//     const result = [];
//     for (let key in obj) {
//       result.push( [ key, obj[key] ] );
//     }
//     return result;
//   }

//   static assign(target, ...source) {
//     source.forEach( el => {
//       for (let key in el) {
//         target[key] = el[key];
//       }
//     });
//     return target;
//   }
// }

/*
1. Реализуем класс `CoffeeRecipe`, который хранит в себе данные о рецепте кофе (то есть о соотношении ингредиентов). В конструкторе, он принимает название рецепта, и пропорции ингредиентов - от 1 до 3 чисел. Первое - это доля воды, второе - доля зерен, и третье - доля молока. Нужно реализовать в конструкторе контроль того, что соотношение пропорций в сумме равно 1 (т.е доля воды + доля зерен + доля молока = 1).*/

class CoffeeRecipe {

  constructor(name, water, beans, milk) {
    this.checkProportions(water, beans, milk);
    this.name = name;
    this.water = water;
    this.beans = beans;
    this.milk = milk;
  }

  get description() {
    return `Recipe: ${this.name}, water: ${this.water}, beans: ${this.beans}, milk: ${this.milk}`;
  }

  checkProportions(water, beans, milk) {
    if (water + beans + milk !== 1) {
      throw new Error('Incorrect proportions!');
    }
  }

  setNewProportions(water = this.water, beans = this.beans, milk = this.milk) {
    this.checkProportions(water, beans, milk);
    this.water = water;
    this.beans = beans;
    this.milk = milk;
  }
}

/*
3. Сделаем свойства сеттеры для воды, молока и зерен - нужно чтобы при изменении этих свойств сумма долей равнялась 1.
*/

const espresso = new CoffeeRecipe('espresso', 0.3, 0.3, 0.4);

/*
4. Теперь сделаем программное обеспечение для самой кофемашины. У кофемашины есть модель (строка), и объемы отсеков для воды, зерен и молока (числа). Это мы будем передавать в конструкторе. Для хранения, используем свойства `waterLimit`, `beansLimit`, `milkLimit`. Нам понадобится остлеживать состояние кофемашины, т.е. сколько у нас молока, воды и кофе соответственно. Реализуем это через свойства `water`, `beans`, `milk`.
*/

class CoffeeMachine {

  static recipes = [
    new CoffeeRecipe('espresso', 0.6, 0.4, 0),
    new CoffeeRecipe('americano', 0.8, 0.2, 0),
    new CoffeeRecipe('latte', 0.4, 0.2, 0.4),
    new CoffeeRecipe('cappuccino', 0.3, 0.2, 0.5)
  ];

  constructor(model, waterLimit, beansLimit, milkLimit) {
    this.model = model;
    this.waterLimit = waterLimit;
    this.beansLimit = beansLimit;
    this.milkLimit = milkLimit;
    this.water = 0;
    this.beans = 0;
    this.milk = 0;
  }

  set waterStorage(value) {
    if (value < 0 || value + this.water > this.waterLimit ) {
      throw new Error('Too much water!');
    }
    this.water += value;
  }

  set beansStorage(value) {
    if (value < 0 || value + this.beans > this.beansLimit ) {
      throw new Error('Too much beans!');
    }
    this.beans += value;
  }

  set milkStorage(value) {
    if (value < 0 || value + this.milk > this.milkLimit ) {
      throw new Error('Too much milk!');
    }
    this.milk += value;
  }

  makeCofee(coffeeName) {
    const recipe = CoffeeMachine.recipes.find( el => el.name === coffeeName );
    if (!recipe) {
      throw new Error(`Unknown coffee ${coffeeName}!`);
    }
    const {water, beans, milk} = recipe;
    if (this.water < water || this.beans < beans || this.milk < milk) {
      throw new Error('Insufficient resources!');
    }
    this.water -= water;
    this.beans -= beans;
    this.milk -= milk;
    return { name: coffeeName };
  }
}

class CofeeAutomat extends CoffeeMachine {

  static coins = [5,10,25,50];

  constructor(model, waterLimit, beansLimit, milkLimit) {
    super(model, waterLimit, beansLimit, milkLimit);
    this.deposit = 0;
  }
}

/*
7. Теперь осталось реализовать приготовление кофе. Реализуем метод `makeCoffee`, который будет принимать в аргументе название кофе. Он будет возвращать объект, у которого будет свойство с названием напитка. Но при этом, нужно контролировать, что:
 - кофемашина умеет делать такой напиток - т.е. такой кофе есть в списке рецептов.
 - что у нас достаточно ингредиентов для приготовления кофе.
 - если эти условия выполняются - то мы готовим кофе, и уменьшаем кол-во ингредиентов в кофемашине.
 */
