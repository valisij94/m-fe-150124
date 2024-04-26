// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];

// 1-б
//numbers.push(45, 68, 23);
// 1-г удалить последний элемент из массива чисел.
//numbers.pop();
//  1 - д) добавить элемент в начало массива чисел (число 9)
//numbers.unshift(9);
// 1 - е) удалить первый элемент из массива чисел
//numbers.unshift();
// 1 -ж) получить "срез" массива чисел - это должен быть новый массив, который содержит элементы массива `numbers` с позиции 2 по позицию 5.
// const result = numbers.slice(2, 5);
// console.log(result);

// Массив строк (примитивы)
const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];

// 1 - з) добавить в массив строк новые элементы. Нужно добавить после строки 'simple' две строки: 'and', 'lowercased'. То есть вставляем элементы в середину массива.
// const idx = strings.indexOf('simple');
// strings.splice(idx + 1, 0, 'and', 'lowercased');
// console.log(strings);
// 1  - и) заменить в массиве элементы: вместо строк 'simple', 'and', 'lowercased', теперь должна быть строка 'tiny'. Здесь нам пригодится метод `splice`
// this is an array of tiny strings
// const simpleIdx = strings.indexOf('simple');
// strings.splice(simpleIdx, 3, 'tiny');
// console.log(strings);

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

// 2 - а) проверить, содержит ли массив строк строку 'array'.
console.log( strings.includes('array') );
// 2 - в) найти индекс числа 0  в массиве чисел
const zeroIndex = numbers.indexOf(0);
console.log(zeroIndex);
// 2 - д) найти индекс последнего вхождения числа 9 в массиве чисел
const lastIndexOf9 = numbers.lastIndexOf(9);
console.log(lastIndexOf9);


// 3 - а) объединить наш массив строк strings в одно предложение. Результатом должна быть строка, разделенная пробелами.
console.log( strings.join(' ') );
// 3 - б) объединить наш массив чисел numbers в одно большое число (т.е. без разделителей). Подсказка - используем тот же метод, что и в предыдущей задаче.
console.log( numbers.join('') );
