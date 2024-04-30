// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];

// Массив строк (примитивы)
const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];


const ball = {
    name: "Ball",
    category: "Sport",
    img: "./assets/ball.jpeg",
    price: 100
};
const gloves = {
    name: "Gloves",
    category: "Sport",
    img: "./assets/gloves.jpg",
    price: 140
};
const shoes = {
    name: "Sport shoes",
    category: "Sport",
    discount: true,
    img: "./assets/shoes.png",
    price: 320
};
const hammer = {
    name: "Hammer",
    category: "Tools",
    img: "./assets/hammer.jpeg",
    price: 40
};
const saw = {
    name: "Saw",
    category: "Tools",
    discount: true,
    img: "./assets/saw.jpeg",
    price: 75
};
const shark = {
    name: "Shark toy",
    category: "Other",
    img: "./assets/shark.jpeg",
    price: 45
};

// Массив объектов
let products = [ball, gloves, shoes, hammer, saw];

const items = ['Knife', 'Wallet', 'Keys', 'Phone', 'Lighter', 'Passport'];

/*
1. Пристрелочная. Пишем функцию `filterOdds`. Она принимает на вход массив чисел `input`, и должна вернуть новый массив, который содержит только четные элементы массива `input`.
```
filterOdds( [1,2,3,4,5,6,7]); // [2,4,6]
```
*/

// function filterOdds( input ) {
//   let result = [];
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] % 2 === 0) {
//       result.push( input[i] );
//     }
//   }
//   return result;
// }

// console.log(filterOdds( [1,2,3,4,5,6,7] )); // [2,4,6]

/*
2. Еще пристрелочная. Пишем функцию `getShortWords`, она принимает на вход массив строк `strings` и максимальную длину `maxLength`. Нужно вернуть массив, который содержит только те строки массива `strings`, чья длина меньше либо равна `maxLength`.
```
getShortWords( ['this', 'is', 'an', 'array', 'of', 'strings'], 4 ); // ['this', 'is', 'an', 'of']
```
*/

// function getShortWords( strings, maxLength ) {
//   let result = [];
//   for (let i = 0; i < strings.length; i++) {
//     if (strings[i].length <= maxLength) {
//       result.push(strings[i]);
//     }
//   }
//   return result;
// }

// console.log( getShortWords( ['this', 'is', 'an', 'array', 'of', 'strings'], 3 ) );

/*
3. Пишем функцию `reverseString`. Она принимает на вход строку, и должна вернуть новую строку, которая содержит символы исходной в обратном порядке.
```
reverseString('timon'); // 'nomit'
```
*/
function reverseString(string) {
  const splitted = string.split(''); // массив из символов нашей строки
  splitted.reverse(); // массив из символов строки в обратном порядке
  return splitted.join(''); // склеить все обратно БЕЗ разделителя
  //return string.split('').reverse().join('');
}

// console.log( reverseString('timon  and pumba') );

/*
6. Теперь поработаем с объектами. Создать объект `cup`, который содержит свойство `name`, и его значение - `Just a cup`.
*/
const cup = {
  name: 'Just a cup',
  category: 'Other'
};

/*
7. Добавить объекту `cup` свойства `description` (Simple cup without any complexity), `category` (Other), `price` (25).
*/
cup.price = 25;
cup.description = 'Simple cup without any complexity';

/*
8. Добавить объект `cup` в массив `products`.
*/
products.push(cup);
// console.log(products)

/*
9. Вывести в консоль все товары из массива `products`, у которых цена больше 100.
*/
// for (let i = 0; i < products.length; i++) {
//   if (products[i].price > 100) {
//     console.log(products[i]);
//   }
// }

/*
10. Написать функцию `filterProductsByPrice`, которая примет в аргументе цену, и вернет массив товаров, у которых цена больше цены из аргумента.
*/

/**
 * Function does ...
 * @param {*} products Array with products
 * @param {*} maxPrice Maximum price
 * @returns Array with products ...
 */
function filterProductsByPrice(products, maxPrice) {
  // создать пустой массив для результатов
  // пройтись по массиву rpoducts циклом
  // положить в массив результата те товары, у которых цена больше maxPrice
  // вернуть массив с результатом
  let result = [];
  for (let i =0; i < products.length; i++) {
    if (products[i].price > maxPrice) {
      result.push(products[i]);
    }
  }
  return result;
}
console.log( filterProductsByPrice(products, 200) );

/*
11. Дорабатываем функцию из предыдущей задачи - теперь функция будет принимать 2 аргумента для определения диапазона цен. Нужно вернуть товары, цена которых попадает в данный диапазон.

12. Написать функцию `getProductNames`, которая пройдется по массиву товаров, и вернет массив имен товаров.
*/
