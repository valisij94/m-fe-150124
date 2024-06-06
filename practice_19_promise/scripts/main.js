/*
8. В скрипте есть функция `asyncFunction`. Изначально задумывалось, что она вернет строку через одну секунду после вызова. Но что-то пошло не так.. Перепишите функцию, чтобы она возвращала значение через одну секунду после вызова, и чтобы этим результатом можно было бы воспользоваться. Задача к обсуждению.
*/
function asyncFunction() {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve('Hey there!');
    }, 1000);
  });
}

// 1. Пишем первый промис. Он должен быть успешно завершен числом 345.
//const firstPromise = new Promise( (resolve, reject) => resolve(345));

// 2. Пишем промис, который должен быть завершен неуспехом, текстом `Error`.
//const secondPromise = new Promise( (resolve, reject) => reject('Error'));

/* 3. Немного усложним. Напишем промис, который будет случайным образом завершаться успешно или неуспешно. В промисе, нужно взять случайное значение (используем `Math.random`). Если это значение больше либо равно 0.5 - завершаем промис успехом, текстом `Success`. Если меньше 0.5 - то завершаем ошибкой, с текстом `Error`.
*/
// const thirdPromise = new Promise( (resolve, reject) => {
//   if (Math.random() >= 0.5) {
//     resolve('Success');
//   }
//   else {
//     reject('Error');
//   }
// }).then( res => console.log(res))
//   .catch( err => console.log(err));

/* 4. Написать промис, который через 2 секунды будет успешно завершен текстом "Successfully finished!". Этот текст нужно вывести в консоль.
*/
// const delayed1 = new Promise( (resolve, reject) => {
//   setTimeout( () => {
//     resolve('Successfully finished!');
//   }, 2000);
// });
// delayed1.then( res => console.log(res));

/*
5. Теперь задача через 2 секунды завершить промис "неуспехом", с текстом "Something went wrong!", и вывести результат в консоль.
*/
// const delayed2 = new Promise( (resolve, reject) => {
//   setTimeout( () => {
//     reject('Something went wrong!');
//   }, 2000);
// });
// delayed2.catch( err => console.log(err));

/*
6. Задача, завершить промис неуспехом, и обработать эту ситуацию, двумя способами.
*/
// const delayed2 = new Promise( (resolve, reject) => {
//   setTimeout( () => {
//     reject('Something went wrong!');
//   }, 2000);
// }).then( null, (error) => {
//   console.log(error);
// }).catch( err => console.log('From catch' + err));

/*
7. Обеспечить вывод в консоль текста "Will appear in all cases" после завершения/отвержения промиса (т.е. в любом случае).
*/
// const delayed3 = new Promise( (resolve, reject) => {
//   setTimeout( () => {
//     reject('Something went wrong!');
//   }, 2000);
// }).then( null, (error) => {
//   console.log(error);
// }).catch( err => console.log('From catch' + err)
// ) .finally( () => {
//   console.log('Will appear in all cases!');
// });