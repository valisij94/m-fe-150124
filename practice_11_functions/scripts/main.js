/*
1. Function Expression, Function Declaration
 - создать функцию разворота строки (вывести слова в строке в обратном порядке). Использовать Function Declaration.
  - пример работы: reverseString("This is a string") -> "string a is This".
 - попробовать вызвать функцию ДО ее объявления.
 - переписать задание 1, использовать Function Expression.
 - попробовать вызвать результат задания 3 ДО Function Expression
 */


// function reverseStringDeclaration(str) {
//     return str.split(' ').reverse().join(' ');
// }

// const reverseStringExpression = (str) => str.split(' ').reverse().join(' ');

// console.log(reverseStringDeclaration('This is a srting'))
// console.log(reverseStringExpression('This is a srting'))

// const button = document.querySelector('.simpleButton');
// const input = document.querySelector('.simpleInput');

// button.addEventListener('click', (event) => {
//     alert(input.value);
// });

/*
3. Пристрелочная задача на колбэки. Написать функцию `doHomework`. Она принимает 2 аргумента: название предмета, по которому выполняем домашку, и функцию, которая решает ДЗ по предмету. Задача функции - вывести в консоль сообщение вида "starting {subject} homework", и вызвать функцию-колбэк. В аргументах функции-колбэка передаем предмет.
```

doHomework('math', homeworkCallback);
// Expected output:
//  - starting math homework;
//  - I finished my math homework!
```
*/

// Колбэк-функция
function homeworkCallback(subject) {
    // ...
    console.log(`I finished my ${subject} homework!`);
}

  // Функция, которая ожидает колбэк
function doHomework(subject, callback) {
    // Add implementation here
    console.log(`Starting ${subject} homework`);
    callback(subject);
}

/*
4. Реализовать свой метод map для массивов. Использовать стрелочные функции. То есть, нужно написать функцию map(array, callback), которая принимает в аргументах массив и другую функцию. Результатом выполнения будет новый массив, элементы которого - это результаты вызова функции callback для элементов исходного массива.
*/

function map(array, callback) {
    let result = [];
    for (let elem of array) {
        result.push(callback(elem))
    }
    return result;
}

function duplicate(num) {
    return num * 2;
}

const result = map(
    [1,2,3], // array
    duplicate // callback function which creates elemets for result array
);

console.log(result)

/**
 * const result = map( [1,2,3], (el) => el * 2 ); // [2, 4, 6]
 */