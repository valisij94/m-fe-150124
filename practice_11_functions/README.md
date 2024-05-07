
# README

## Практическое занятие №11

### Тема: Функции. Колбэки.

Репозитарий содержит материалы по практическому занятию №1, посвященному работе с колбэками.

### Цели занятия
- закрепление знаний, полученных на лекции;
- решение задач.

### Задачи занятия
1. Function Expression, Function Declaration
 - создать функцию разворота строки (вывести слова в строке в обратном порядке). Использовать Function Declaration.
  - пример работы: reverseString("This is a string") -> "string a is This".
 - попробовать вызвать функцию ДО ее объявления.
 - переписать задание 1, использовать Function Expression.
 - попробовать вызвать результат задания 3 ДО Function Expression
2. Добавить в разметку кнопку и текстовое поле (инпут). Реализовать обработчик события на кнопку. При клике, нужно показать alert с текстом, который введен в текстовое поле.
3. Пристрелочная задача на колбэки. Написать функцию `doHomework`. Она принимает 2 аргумента: название предмета, по которому выполняем домашку, и функцию, которая решает ДЗ по предмету. Задача функции - вывести в консоль сообщение вида "starting {subject} homework", и вызвать функцию-колбэк. В аргументах функции-колбэка передаем предмет.
```
// Колбэк-функция
function homeworkCallback(subject) {
  console.log(`I finished my ${subject} homework!`);
}

// Функция, которая ожидает колбэк
function doHomework(subject, callback) {
  // Add implementation here
}

doHomework('math', homeworkCallback);
// Expected output:
//  - starting math homework;
//  - I finished my math homework!
```
4. Реализовать свой метод map для массивов. Использовать стрелочные функции. То есть, нужно написать функцию map(array, callback), которая принимает в аргументах массив и другую функцию. Результатом выполнения будет новый массив, элементы которого - это результаты вызова функции callback для элементов исходного массива.
5. Пишем свою реализацию метода `filter`, назовем ее `customFilter`. Функция принимает 2 аргумента, массив `srcArray` и критерий отбора (колбэк). Функция должна вернуть новый массив, который включает только те элементы массива `srcArray`, для которых колбэк возвращает `true`.
6. Пишем функцию `firstFail`. Она примет на вход массив, и функцию-проверку `checker`. Функция должна вернуть первый элемент массива, для которого функция-проверка `checker` вернет false. Если такого элемента не найдено - вернуть null.
```
const checker = (el) => el % 2 === 0;
firstFail( [2,8,10,7,6,4,31], checker ); // 7
firstFail( [1,2,8,10,34,2], checker ); // null
```
7. Пишем функцию `thisOrThat`. Она должна принять на вход два колбэка. В самой функции, нужно взять случайное значение (`Math.random`), и если это значение меньше 0.5 - выполняем первый колбэк, иначе - второй.

### Полезные ссылки
- [Что такое колбэк](https://developer.mozilla.org/ru/docs/Glossary/Callback_function) - пояснение, что такое функция обратного вызова, с примерами. Русскоязычная.
- [Русскоязычный гайд](https://learn.javascript.ru/function-expressions) по понятиям "Function Expression", "Function Declaration". Здесь же - немного о колбэках.