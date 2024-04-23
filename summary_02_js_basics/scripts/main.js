
// INCLUDES
// const testString = 'My Test String!';

/**
 * Ищи в строке testString наличие подстроки test
 */
// const hasT = testString.includes('test'); // false
//console.log(hasT);

/**
 * Ищи в строке testString наличие подстроки t,
 * начиная с индекса 7
 */
// const hasSmallT = testString.includes('t', 7); // true
// console.log(hasSmallT);

/* 9. Задача "со звездочкой". Написать функцию, которая считает количество гласных в строке. Гласные - a, o, e, i, u, y.
*/

// function countVovels(str) {
//   let count = 0;
//   let vovelsTemplate = 'aAoOeEiIuUyY';
//   for (let i = 0; i < str.length; i++) {
//     if ( vovelsTemplate.includes( str[i] ) ) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log( countVovels('Timon And Pumba') );

/*
1. Пристрелочная. Написать функцию `repeat`, она будет принимать 2 аргумента: число `n` и строку `str`. Задача функции - `n` раз вывести в консоль строку `str`.
*/

// function repeat(n, str) {
//   for (let i = 0; i < n; i++) {
//     console.log(str);
//   }
// }
// repeat(5, 'string');

/*
2. Еще пристрелка. Написать функцию `customPow`, которая будет возводить число в степень и выводить в консоль. Она будет принимать 2 аргумента: основание и показатель степени. При этом НЕ использовать Math.pow.
*/

// function customPow(n, p) {
//   let result = 1;
//   for (let i = 0; i < p; i++) {
//     result *= n;
//   }
//   console.log(result);
// }

// console.log(window);
// customPow(5, 2); // 5 * 5 = 25
// customPow(3, 4); // 3 * 3 * 3 *3 = 81

/*
3. Пишем функцию `multiplyString`. Она принимает строку, и число. Должна ввыести в консоль строку, повторенную n раз.
```
multiplyString('str', 3); // strstrstr
multiplyString('pumba', 2); // pumbapumba
```
*/

// function multiplyString(str, n) {
//   let result = str;
//   for (let i = 1; i < n; i++) {
//     result = result + str;
//   }
//   console.log(result);
// }

// multiplyString('str', 3); // strstrstr
// multiplyString('pumba', 2); // pumbapumba
// multiplyString('timon', 5);

/*
4. Усложняем предыдущую функцию. Добавляем проверку, что переданное число больше 0. Если нет - просто выводим в консоль нашу строку из аргумента.
*/

// function multiplyString(str, n) {
//   let result = str;

//   if (n > 0) {
//     for (let i = 1; i < n; i++) {
//       result = result + str;
//     }
//   }

//   console.log(result);
// }
// multiplyString('str', 3); // strstrstr
// multiplyString('pumba', 1); // pumbapumba
// multiplyString('timon', -2);

/*
5. Пишем функцию `getSquares`. Она будет принимать в аргументе массив чисел. Нужно пройтись по массиву и вывести в консоль квадраты чисел.
*/

// function getSquares(array) {
//   for (let i = 0; i< array.length; i++) {
//     console.log(array[i] ** 2);
//   }
// }

// getSquares( [1,2,3,4,5] );

/*
7. Написать функцию, которая примет аргумент (строку), и будет выводить ее в консоль посимвольно.
*/

// function logString(str) {
//   for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
//   }
// }

// logString('Timon');

/*
6. Пишем функцию `countWords`. Она должна подсчитать количество слов в строке. Строка содержит слова, разделенные пробелами. Считаем, что в строке нет "лишних" пробелов.
```
countWords('Timon and Pumba!'); // 3
```
*/

// function countWords(str) {
//   let count = 1;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ' ') {
//       count++;
//     }
//   }
//   console.log(count);
// }

// countWords('Timon');

/*
8. Написать функцию, которая примет строку, и будет выводить в консоль ее символы, пока не достигнет первого символа `Q`.
*/
// function checkQ(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'Q') {
//       break;
//     }

//     console.log(str[i]);
//   }
// }

// checkQ('Timon Pumba');

/*
9. Написать БЛОК КОДА, который будет запрашивать у пользователя ввод чего-то в `prompt` до тех пор, пока он не введет строку `stop`.
*/

// let userInput = '';
// do {
//   userInput = prompt('Enter something!');
// }
// while ( userInput !== 'stop' );
