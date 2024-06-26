## Итоговое занятие №10

### Тема: JavaScript. Асинхронные операции.
Репозитарий содержит материалы по итоговому занятию №10, посвященному работе с асинхронными операциями в JavaScript.

### Цели занятия
- закрепление знаний, полученных на лекциях;
- практическое применение знаний, полученных на лекциях.

### Разогрев
1. Что выведет код?
```
console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log('first');
  resolve('result');
  console.log('second');
})

promise1.then(res => {
  console.log(res)
});

console.log('end');
```

2. Что выведет код?
```
console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log('Promise');
  resolve('Result');
})

async function asyncFunction() {
  console.log('Async');
  const res = await promise1;
  console.log(res);
}

asyncFunction();

console.log('End');
```

3. Что выведет код?
```
async function anotherFunction() {
  const promise = new Promise( resolve => {
    resolve('Promise');
  });

  console.log('Before');
  const result = await promise;
  console.log('After');
  return result; // Promise
}

console.log('First');
const functionResult = anotherFunction();
functionResult.then( data => console.log(data));
console.log('Third');
```

4. Что выведет код?
```
async function test() {

  const successPromise = new Promise( resolve => resolve('Success'));

  try {
    console.log('SafeCode');
    const res = await successPromise;
    console.log(res);
    throw new Error('Fail!');
    // После throw код НЕ БУДЕТ выполнен!
    console.log('After throw');
  }
  catch(err) { console.log(err.message) }
}

console.log('Start');
test();
console.log('End');
```

### Задачи занятия

1. Пишем универсальную функцию отправки GET-запроса, которая будет запрашивать данные с указанного УРЛ, и возвращать JSON. Назовем ее `jsonRequest`. В аргументах она принимает URL, к которому надо обратиться. Она должна сделать запрос по этому адресу, затем преобразовать результат в JSON, и вернуть "готовый к употреблению" результат. Используем синтаксис async/await.
2. С помощью нашей функции, обратимся к адресу `https://dummyjson.com/products`, в ответе посчитать общую стоимость товаров в массиве `products`.
3. Дорабатываем нашу функцию `jsonRequest`. Теперь, если в функцию передан пустой url, то нужно генерировать свое исключение с текстом "Please, provide the URL!".
4. Напишем функцию проверки URL-адреса, `checkUrl`. Она будет принимать в аргументах адрес, и должна проверить, доступен ли он. То есть, обратиться к этому адресу, и если запрос успешный (статус от 200 до 299) - то вернуть true, иначе - false.
5. У нас на странице есть выпадающий список. Нужно написать функцию `renderCategories`, которая с помощью нашей функции `jsonRequest` обратится по адресу `https://dummyjson.com/products/categories`, и отрендерит список категорий товаров.
6. Добавляем обработчик на событие `change` нашего `select` - при этом событии, нужно отправлять запрос товаров соответствующих категорий по адресу `https://dummyjson.com/products/category/КАТЕГОРИЯ`. Результат выводить в консоль.
7. Усложним нашу функцию `jsonRequest`. Мы хотим, чтобы в случае ошибки при запросе, функция делала бы повторнубю попытку. Не более 3 попыток.
8. У нас есть массив `asyncNumbers` - это массив, который содержит несколько промисов, которые будут зарезолвлены числами. Нужно посчитать сумму этих чисел.
9. У нас есть массив с рабочими предприятия, которые работают на конвейере и собирают машины. Работы ведутся последовательно, то есть одна за другой. У каждого объекта с данными рабочего, есть функция `work` - рабочий выполняет свою часть работы. Эта функция возвращает промис, который будет зарезолвлен той деталью, которую делает этот рабочий. Нужно написать функцию `assembleCar`, которая будет принимать на вход массив рабочих. Она пройдется по массиву рабочих, запустит для каждого его функцию `work`, соберет результаты в массив, и вернет этот массив.
10. Открыли новый цех, и на него набрали рабочих меньшей квалификации - они иногда косячат. Нужно, чтобы конвейер продолжал работу, несмотря на их "косяки". То есть, нужно добавить обработку исключительных ситуаций - предусмотреть неуспешные завершения промисов.
11. Задача "со звездочкой". Сделать так, чтобы при косяке рабочего, его работа запускалась бы по новой, пока он не сделает свою часть успешно. Задача к обсуждению.