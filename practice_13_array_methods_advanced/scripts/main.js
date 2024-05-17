// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];

/*
1. Пристрелочная. Из массива чисел, получить новый массив, который будет содержать только числа, которые делятся на 3 без остатка.
*/
// const dividableByThree = numbers.filter( num => num % 3 === 0);
// console.log(dividableByThree);

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
2. Получить из массива строк `strings` другой массив, который содержит только строки-палиндромы. Пример - `abba`, `topot`.
 - Array.prototype.filter
 - split + reverse + join - для разворота строки
*/

// let palindroms = strings.filter( str => str === str.split('').reverse().join('') );
// console.log(palindroms)

/*
3. Проверить, есть ли в массиве строк хотя бы одна строка с длиной больше 5 символов.
*/
// const hasLong = strings.some( str => str.length > 5);
// console.log(hasLong)

// 4. Проверить, есть ли в массиве товаров хотя бы один товар с ценой больше 100.
// const hasExpensive = products.some( prod => prod.price > 100 );
// console.log(hasExpensive);

/*
5. Посчитать суммарную стоимость товаров в массиве товаров. Сделать с использованием метода `reduce`.
*/
// const totalPrice = products.reduce( (acc, val) => acc += val.price, 0 );
// console.log(totalPrice);

/*
6. Получить массив категорий товаров (т.е. нужно пройтись по массиву товаров методом reduce, и добавлять в "аккумулятор" свойство category рассматриваемого товара)
*/
// const categories = products.reduce( (acc, val) => {
//     if (!acc.includes(val.category)) {
//         acc.push(val.category);
//     }
//     return acc;
// }, []);

// console.log(categories);


/*
8. Написать функцию `getNamesByCategory`. Она будет принимать в аргументах название категории. И должна вернуть массив с именами товаров этой категории. Рекомендуется использовать метод `reduce`, но это необязательно.
*/
function getNamesByCategory(categoryName) {
    const result = products.reduce( (acc, product) => {
        if (product.category === categoryName) {
            acc.push(product.name);
        }
        return acc;
    }, [] );

    return result;
}

const results = getNamesByCategory('Sport'); // [ Ball, Shoes ]
console.log(results)