// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];

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

// Массив строк (примитивы)
const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings', 'abba', 'something', 'new', 'topot', 'lex'];

/*
1. Пристрелочная. С помощью метода reduce из массива строк, получить число, которое содержит количество символов во всех строках.
*/
// const result = strings.reduce( (acc, val) => acc + val.length , 0);
// console.log(result);
// const resultJoin = strings.join('').length;
// console.log(resultJoin);

/*
2. Пишем функцию `filterByPrice`. Она будет принимать в аргументах два числа, и должна вернуть массив с товарами, у которых цена находится между этими числами (т.е. фильтрует товары по диапазону цен).
*/
// function filterByPrice(sumFrom, sumTo) {
//     let _sumFrom = sumFrom, _sumTo = sumTo;
//     if (sumFrom > sumTo) {
//         _sumFrom = sumTo;
//         _sumTo = sumFrom;
//     }
//     return products.filter( (product) => product.price >= sumFrom && product.price <= sumTo);
// }

// const res = filterByPrice(10, 120);
// console.log(res);

// 3. Отсортировать массив `products` по возрастанию цены.
// products.sort( (a, b) => a.price - b.price );
// console.log(products)

// 4. Отсортировать массив `products` по возрастанию названия товара в алфавитном порядке.
// products.sort( (a, b) => {
//     return a.name < b.name ? -1 : 1; // Simple solution, case-sensitive
//     //return a.name.toLowerCase().localeCompare( b.name.toLowerCase() );
// });
// console.log(products);

/*
5. Из массива `products`, получить объект, у которого будут свойства `totalPrice`, `totalCount`. В первое свойство должна быть записана суммарная стоимость всех товаров, а во второе - их количество.
*/
// const result = products.reduce( (acc, val) => {
//     acc.totalCount += 1;
//     acc.totalPrice += val.price;
//     return acc;
// }, { totalPrice: 0, totalCount: 0 });
// console.log(result);

const propName = 'simpleProp';

const testObject = {
  foo: 'bar'
};

// testObject[propName] = 95; // testObject.simpleProp = 95
// console.log(testObject)

/*
1. Сделать так, чтобы у объекта `testObject` появилось свойство с ключом, равным значению переменной `propName`, со значением 95.
*/

/*
2. Запросить у пользователя имя нового свойства объекта через `prompt`. Добавить это свойство в объект `testObject`. В качестве значения - записать число 345.
*/
// const nameProp = prompt('Enter prop name:');
// testObject[nameProp] = 345;
// console.log(testObject);

/*
3. У нас есть объект `categoriesObject`. Нужно пройтись по массиву `products`, посчитать количество товаров разных категорий, и записать в соответствующие свойства объекта `categoriesObject`.
*/

const categoriesObject = {
    Sport: 0,
    Tools: 0
  };

// products.forEach(product => {
//     const category = product.category;
//     categoriesObject[category] += 1;
// });
// console.log(categoriesObject);

/*
4. Из массива товаров, получить объект, в котором ключами будут наименования товаров, а значениями - цены этих товаров.
*/
// const productsPrices = products.reduce( (acc, prod) => {
//     acc[prod.name] = prod.price;
//     return acc;
// }, {} );
// console.log(productsPrices);

/*
5. Из массива товаров, получить объект, в котором ключами будут категории товаров, а значениями - суммарная стоимость товаров этих категорий.
*/
const result = products.reduce( (acc, val) => {
    // acc[val.category] = acc[val.category] ? acc[val.category] + val.price : val.price;
    const { category, price } = val;
    if (acc[category]) {
        acc[category] += price;
    }
    else {
        acc[category] = price;
    }
    return acc;
}, {});
console.log(result);


// const myCart = {}
// function addToCart(product) {
//     //myCart[product.name] = myCart[product.name] ? myCart[product.name] + 1 : 1;
//     if (myCart[product.name]) {
//         myCart[product.name] += 1;
//     }
//     else {
//         myCart[product.name] = 1;
//     }
// }

// addToCart(ball);
// addToCart(shoes);
// addToCart(ball);
// console.log(myCart)



let r = 0;
r++; // r = r + 1; Increment

r--; // r = r - 1; Decrement
