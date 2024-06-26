/*
1. Написать блок кода, который спрашивает у пользователя его возраст (используем метод `prompt`). В зависимости от введенного возраста, если возраст больше либо равен 21, выводим в консоль сообщение "Доступ разрешен". Иначе - выводим сообщение "Есть ограничения".
*/

// const age = +prompt("Сколько вам лет?");
// if (ageNum >= 21) {
//     console.log("доступ разрешен");
// } else {
//     console.log('Есть ограничения');
// }

/*
2. Пишем блок проверки делимости числа на 2. Нужно запросить у пользователя число (метод `prompt`). Если число делится на 2 без остатка - выводим в консоль сообщение "Кратно двум", а если не делится - то выводим сообщение "Не кратно двум".  Проверить, делится ли число А на число В без остатка можно с использованием оператора `%`-  остаток от деления.
*/

// let num = +prompt('Enter a number:');
// if (num % 2 === 0) {
//   console.log('Kratno 2')
// }
// else {
//   console.log('Ne kratno 2')
// }

/*
3. Усложняем предыдущую задачу. Теперь проверяем на кратность 2 и 3. То есть, запрашиваем число вызовом `prompt`. Если число делится на 2 - выводим "Кратно двум". Если делится на 3 - выводим "Кратно трем". Если делится и на 2 и на 3 - выводим "Кратно 2 и 3". Если не делится ни на что - выводим "Не кратно 2 и 3".

ПОДСКАЗКА: здесь нам нужны вложенные условия (if внутри другого if/else). Или же можно использовать логические операторы, такие как && (логическое И), || (логическое ИЛИ).

*/

// const num1 = +prompt('Enterr a number');
// if (num1 % 2 === 0 && num1 % 3 === 0) {
//   console.log('Kratno 2, 3');
// }
// else if (num1 % 2 === 0) {
//   console.log('Kratno 2');
// }
// else if (num1 % 3 === 0) {
//   console.log('Kratno 3');
// }
// else {
//   console.log('Ne kratno 2,3');
// }


/*
4. Немного усложняем задачу про возраст. Теперь нам нужно спросить у пользователя его возраст (методом `prompt`), и рассматривать 3 случая:
     - возраст меньше 21 - выводим сообщение "Доступ запрещен".
     - возраст от 21 до 45 - выводим сообщение "Доступ открыт".
     - возраст больше 45 - выводим сообщение "Доступ ограничен".

    */

// let age = +prompt('How old are you?');
// if (age < 21) {
//   console.log('Access denied!');
// }
// else if (age <= 45) {
//   console.log('Access granted!');
// }
// else {
//   console.log('Access limited!');
// }

/*
6. Работаем с оператором отрицания `!` (логическое НЕ). Запросить у пользователя его возраст. Если он ВНЕ диапазона 21-45, то выводим "доступ запрещен", при этом надо использовать оператор отрицания..
*/

// const age = +prompt('Enter your age');

// if ( !(age >= 21 && age <= 45) ) {
//   console.log('Access denied!');
// }


/*
7. Пишем блок кода, который поприветствует пользователя на его родном языке. Запрашиваем у пользователя через метод `prompt` страну происхождения ("Откуда Вы родом?"). Если страна - Россия, то выводим в консоль "Добрый день!", если Украина - выводим "Доброго дня!", Беларусь - "Добры дзень!", Германия - "Guten Tag!".
*/

// const country = prompt('Enter your country!');
// switch (country) {
//   case 'Россия': { console.log('привет'); break; }
//   case 'Украина': { console.log('привіт'); break; }
//   case 'Беларусь': { console.log('добры дзень!'); break; }
//   case 'Германия': { console.log('Guten Tag!'); break; }
//   default: console.log('Hello!');
// }

/*
10. Написать цикл, который 10 раз выведет в консоль "Простая итерация". Написать с параметром (`for`).
*/

// for (let i = 0; i < 10; i++) {
//   console.log('Simple iteration!');
// }

/*
12. Пишем блок кода, который посчитает сумму чисел от 0 до числа, которое ввел пользователь, и выведет результат в консоль. Т.е. например, пользователь ввел 5 - считаем 1 + 2 + 3 + 4 + 5 = 15.
*/

const num = +prompt('Enter a number');
let sum = 0;
for (let i = 1; i <= num; i++) {
  // sum = sum + i;
  sum += i;
}
console.log(sum);