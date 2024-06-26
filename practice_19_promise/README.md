## Практическое занятие №19

### Тема: Работа с асинхронными операциями в JS.

Репозитарий содержит материалы по практическому занятию №19, посвященному работе с Promise API.

### Цели занятия
- закрепление знаний, полученных на лекциях;
- практическое применение знаний, полученных на лекциях.

### Разогрев
1. Что выведет код?
```
console.log('First');
const myPromise = new Promise( (resolve, reject) => {
  resolve('Result');
}).then( result => {
  console.log(result);
});
console.log('Third');
```

2. Что выведет код?
```
console.log('First');
const myPromise = new Promise( (resolve, reject) => {
  console.log('Second');
  resolve('Result');
}).then( result => {
  console.log(result);
});
console.log('Third');
```

3. Что выведет код?
```
console.log('First');
const myPromise = new Promise( (resolve, reject) => {
  console.log('Second');
  reject('Result');
}).then( result => {
  console.log(result);
});
console.log('Third');
```

4. Что выведет код?
```
console.log('First');
const myPromise = new Promise( (resolve, reject) => {
  console.log('Second');
  reject('Result');
}).then( null, result => {
  console.log(result);
  throw new Error('WOW!');
})
.catch( err => console.log('From catch ' + err) );
console.log('Third');
```

### Задачи занятия
1. Пишем первый промис. Он должен быть успешно завершен числом 345.
2. Пишем промис, который должен быть завершен неуспехом, текстом `Error`.
3. Немного усложним. Напишем промис, который будет случайным образом завершаться успешно или неуспешно. В промисе, нужно взять случайное значение (используем `Math.random`). Если это значение больше либо равно 0.5 - завершаем промис успехом, текстом `Success`. Если меньше 0.5 - то завершаем ошибкой, с текстом `Error`.
4. Написать промис, который через 2 секунды будет успешно завершен текстом "Successfully finished!". Этот текст нужно вывести в консоль.
5. Теперь задача через 2 секунды завершить промис "неуспехом", с текстом "Something went wrong!", и вывести результат в консоль.
6. Задача, завершить промис неуспехом, и обработать эту ситуацию, двумя способами.
7. Обеспечить вывод в консоль текста "Will appear in all cases" после завершения/отвержения промиса (т.е. в любом случае).
8. В скрипте есть функция `asyncFunction`. Изначально задумывалось, что она вернет строку через одну секунду после вызова. Но что-то пошло не так.. Перепишите функцию, чтобы она возвращала значение через одну секунду после вызова, и чтобы этим результатом можно было бы воспользоваться. Задача к обсуждению.

### Полезные ссылки
 - [setTimeout, setInterval](https://learn.javascript.ru/settimeout-setinterval) - русскоязычный гайд по таймаутам и интервалам. Настоятельно рекомендуется к прочтению.
 - [Раздел про промисы](https://learn.javascript.ru/async) - это раздел учебника, посвященный промисам. Также настоятельно рекомендуется к прочтению - по этой теме стопроцентно будут вопросы на собеседованиях.
