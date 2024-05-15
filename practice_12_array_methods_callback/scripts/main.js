// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];

/*
1. Пристрелочная. Пройтись по массиву чисел, для каждого числа выводить в консоль, является ли оно четным.
*/
/*
numbers.forEach( (elem) => elem % 2 === 0 ? console.log(`${elem} is even`) : console.log(`${elem} is odd`) );

numbers.forEach( elem => {
    if (elem % 2 === 0) {
        console.log('Even');
    }
    else {
        console.log('Odd');
    }
});
*/

/*
2. Пройтись по массиву строк, для каждой строки, если она меньше 4 символов, выводить в консоль `short`, иначе - `long`
*/
// strings.forEach( (elem) => console.log(elem.length < 4 ? `${elem} short` : `${elem} long`));

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

/*
3. Пройтись по массиву товаров, вывести в консоль названия всех товаров
*/
// products.forEach( product => console.log(product.name) );

/*
4. Из массива чисел, получить новый массив, который будет содержать квадраты чисел
*/
// const squares = numbers.map( num => num ** 2 );
// console.log(squares)

/*
5. Из массива строк получить новый массив, который будет содержать массив ОБЪЕКТОВ, у которых будут свойства:
     * value - сама строка
     * size - если длина строки меньше 4 символов, то `short`, иначе - `long`
*/
// Массив строк (примитивы)
const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];

// const objects = strings.map( elem => ({
//     value: elem,
//     size: elem.length >= 4 ? 'long' : 'short'
// }));
// console.log(objects);

// 6. Из массива товаров получить массив имен товаров
// let productNames = products.map( prod => prod.name);
// console.log(productNames);

// // REDUCE
// let productNamesFromReduce = products.reduce( ( acc, val) => {
//     acc.push(val.name);
//     return acc;
// }, [] );
// console.log(productNamesFromReduce);

/*
7. Из массива товаров получить массив "уцененных" товаров. В новом массиве должны быть объекты товаров, у которых цена вдвое меньше, чем у исходных товаров.
*/

const discountedProducts = products.map( (prod) => ({
    ...prod,
    price: prod.price / 2,
}));

console.log(discountedProducts);