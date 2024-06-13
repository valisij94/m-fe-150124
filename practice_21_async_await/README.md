## Практическое занятие №20

### Тема: Работа с асинхронными операциями в JS.

Репозитарий содержит материалы по практическому занятию №21, посвященному работе с синтаксисом async/await.

### Цели занятия
- закрепление знаний, полученных на лекциях;
- практическое применение знаний, полученных на лекциях.

### Разогрев
1. Что выведет код?
```
async function firstFunction() {
  console.log('Start');
  const myPromise = new Promise( (resolve, reject) => {
    resolve('Result');
  });
  const result = await myPromise;
  console.log(result);
  console.log('Finish');
}

firstFunction();
console.log('After');
```

2. Что выведет код?
```
async function firstFunction() {
  console.log('Start');
  const myPromise = new Promise( (resolve, reject) => {
    console.log('In Promise');
    resolve('Result');
  });
  const result = await myPromise;
  console.log(result);
}

firstFunction();
console.log('After');
```

3. Что выведет код?
```
async function firstFunction() {
  console.log('Start');
  const myPromise = new Promise( (resolve, reject) => {
    console.log('In Promise');
    resolve('Result');
  });
  const result = await myPromise;
  console.log(result);
  return 'Function Result';
}

const res = firstFunction();
console.log(res);
console.log('After');
```

### Задачи занятия
1. Пристрелочная задача. Написать асинхронную функцию, которая будет обращаться за списком товаров по адресу `https://dummyjson.com/products`, и выводит результат консоль. Использовать синтаксис async/await.
2. Создать промис, который будет зарезолвлен через 3 секунды словом 'Success'. Используя синтаксис async/await, дождаться успешного выполнения промиса, и вывести результат в консоль. ВАЖНО! Слово `await` мы можем использовать только внутри `async`-функций, а следовательно, создадим для этих целей функцию `asyncFunction`, в которой будем работать с await.
3. Освежаем промисы. Написать функцию `promiseFactory`, которая будет создавать промисы. В аргументах она принимает `isSuccess`, `timeout`, `promiseResult`. Функция должна создать промис. Если `isSuccess = true`, то через `timeout` секунд промис должен быть зарезолвлен аргументом `promiseResult`. А если `isSuccess = false`, то через `timeout` секунд нужно вызвать `reject` с `promiseResult`.
4. Теперь работаем с нештатными ситуациями. Вызвать функцию `promiseFactory(false, 3, 'Something went wrong!');`. То есть, нужно имитировать нештатную ситуацию. И нам нужно, используя синтаксис async/await, обработать эту нештатную ситуацию - вывести причину в консоль.
5. Пишем универсальную функцию отправки GET-запроса, которая будет возвращать JSON. Назовем ее `jsonRequest`. В аргументах она принимает URL, к которому надо обратиться. Она должна сделать запрос по этому адресу, затем преобразовать результат в JSON, и вернуть "готовый к употреблению" результат. Используем синтаксис async/await.
6. С помощью нашей функции, обратимся к адресу `https://dummyjson.com/products`, в ответе посчитать общую стоимость товаров в массиве `products`.
7. Дорабатываем нашу функцию `jsonRequest`. Теперь, если в функцию передан пустой url, то нужно генерировать свое исключение с текстом "Please, provide the URL!".

### Полезные ссылки
 - Русскоязычный гайд [async/await](https://learn.javascript.ru/async-await).