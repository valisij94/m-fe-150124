// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];

// Массив строк (примитивы)
const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];

/*
1. Пристрелочная задача. У нас есть массив строк `strings`. Создать переменные `first`, `second`, и записать в них первый и второй элементы массива.
*/
//const first = strings[0], second = strings[1];
const [first, second] = strings;
console.log(first, second);

/* 2. Еще пристрелка. Аналогичным образом, определить переменные `one`, `three`, и в них записать 1 и 3 элементы массива `strings` с использованием деструктуризации.
*/
const [one, , three] = strings;
console.log(one, three);

const ball = {
    name: "Ball",
    category: "Sport",
    img: "./assets/ball.jpeg",
    price: 100
};

/*
3. С помощью деструктуризации, записать в переменные название и цену объекта `ball`.
*/
// const { name, price } = ball;
// console.log(name, price);

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
4. Написать функцию `getTotalPrice`, она будет принимать в аргументе массив товаров, и должна вернуть их суммарную стоимость.
*/
function getTotalPrice( ...productsArray ) {
    let sum = 0;
    // With destructuring
    // for (let { price } of productsArray) {
    //     sum += price;
    // }
    for (let i = 0; i < productsArray.length; i++) {
        sum += productsArray[i].price;
        // let { price } = productsArray[i];
        // sum += price;
    }
    return sum;
}
const sumOfProds = getTotalPrice( ...products );
console.log(sumOfProds);

/*
6. Создать глубокую копию объекта `shark`. В этом нам также поможет `spread`-оператор.
*/

// Shallow copy - копируем ссылку, и при изменении страого объекта
// поменяется и новый, и наоборот
const shallowSharkCopy = shark;

// Deep copy
let sharkCopy = {...shark};
console.log(sharkCopy);


const complexObject = {
    name: 'Vasilij',
    lasName: 'Ivanov',
    address: {
        street: 'Street',
        house: 10
    }
};

/*
7. Создать глубокую копию объекта `complexObject`. Обратите внимание на наличие вложенности!
*/
let complexObjectCopy = {
    ...complexObject,
    address: { ...complexObject.address }
}

complexObjectCopy.address.street = 555;
console.log(complexObject, complexObjectCopy)


const testString = `Hello programmer, welcome to JavaScript world!`;
