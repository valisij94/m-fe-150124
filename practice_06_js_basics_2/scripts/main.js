/*
1. Реализовать цикл, который 10 раз выведет в консоль фразу "Я ничего 2 раза не повторяю, это " + номер итерации. Сделать это тремя вариантами: с предусловием, с постусловием, и с параметром.
*/

// for (let i = 1; i <= 10; i++ ) {
//   console.log(`Я ничего 2 раза не повторяю, это ${i}`);
// }

// let j = 1;
// while (j <= 10) {
//   console.log(`Я ничего 2 раза не повторяю, это ${j}`);
//   j++;
// }

// let k = 1;
// do {
//   console.log(`Я ничего 2 раза не повторяю, это ${k}`);
//   k++;
// } while (k <= 10);

/*
2. Написать функцию, которая считает среднее арифметическое массива чисел (т.е. сумма элементов разделить на количество элементов).
*/

// let array = [1,2,3,4,5];

// function getAvg(arg) {
//   let result = 0;

//   for (let i = 0; i < arg.length; i++) {
//     result = result + arg[i];
//   }
//   return result / arg.length;
// }

// const res = getAvg(array);
// console.log(res);

/*
3. Написать функцию, которая будет искать количество вхождений элемента в массиве.
*/
function findEntries(array, el) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === el) {
      count++;
    }
  }

  return count;
}

const res = findEntries( [1, 2, 3, 2], 2 );
console.log(res);

/*
5. Написать функцию поиска минимального элемента в массиве чисел.
*/
function findMin(array) {
  let minEl = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minEl) {
      minEl = array[i];
    }
  }
  return minEl;
}

console.log( findMin( [1, 2, 4, 6, 3, 10, -5, 100] ) )