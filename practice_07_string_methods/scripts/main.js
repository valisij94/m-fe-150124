/*1. Пристрелочная. Написать функцию, которая принимает на вход строку и символ, который нужно найти в строке. Если символ в строке есть - то функция возвращает текст "Contains on N-th index", где N - это индекс первого вхождения в строке. Если нет - возвращает текст "Does not contain".
*/

// function checkEntrance(str, symb) {
//   const index = str.indexOf(symb);
//   if (index < 0) {
//     return 'Does not contain!'
//   }
//   else {
//     return `Contains on ${index}-th position!`;
//   }
// }

// console.log(checkEntrance('timon', 'i')); // 'Contains on 1-th index'
// console.log(checkEntrance('pumba', 'i')); // 'Does not contain'

/*
2. Еще пристрелочная. Написать функцию `countWords`, которая принимает на вход строку, и возвращает количество слов в строке. По возможности, не использовать циклы при решении (необязательно).
*/

// function countWords(str) {
//   // 1. получить массив слов строки (т.е. разбить строку по пробелам - split)
//   // 2. вернуть длину этого массива
//   const arr = str.split(' ');
//   return arr.length;
// }

// console.log( countWords('check this please and return it') );

/*
3. К нам "с сервера" приходит строка с параметрами запроса. Параметры передаются в виде пар ключ=значение, разделенных символом `&`. Нужно написать функцию `parseRequestString`, которая примет на вход такую строку, и вернет массив значений.
```


parseRequestString('color=red&type=serial&value=5); // ['red', 'serial', '5']
```
*/

function parseRequestString(str) {
  // color=red&type=serial&value=5
  // 1. split('&'); [ 'color=red', 'type=serial', 'value=5']
  const splitted = str.split('&');
  // 2. пройтись по массиву циклом for
  // 3. на каждой итерации - split('='). ['color', 'red']
  for (let i = 0; i < splitted.length; i++) {
    const keyValue = splitted[i].split('=');
    // ['color', 'red']
    console.log(keyValue[1]);
  }
  // 4. ввыести в консоль 1-й элемент этого массива с шага 3
}

parseRequestString('color=red&type=serial&value=5');

// вытащить из даты в формате ДД.ММ.ГГГГ значение месяца
const currentDate = '23.04.2024';
console.log(currentDate.split('.')[1]);

const ingredients = 'sugar:100g,milk:1l,potato:2kg,butter:150g';
/*
sugar:100g
milk:1l
potato:2kg
butter:150g
*/
const arrayOfProducts = ingredients.split(',');
for (let i = 0; i < arrayOfProducts.length; i++) {
  //console.log(arrayOfProducts[i]);
  const data = arrayOfProducts[i].split(':');
  console.log(data[0]);
}