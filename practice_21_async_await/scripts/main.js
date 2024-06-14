/*
1. Пристрелочная задача. Написать асинхронную функцию, которая будет обращаться за списком товаров по адресу `https://dummyjson.com/products`, и выводит результат консоль. Использовать синтаксис async/await.
*/

// async function getProducts() {
//   try {
//     const resp = await fetch('https://dummyjson.com/products');
//     if (resp.ok) {
//       const data = await resp.json();
//       console.log(data);
//     }
//     else {
//       throw new Error('Something went wrong ' + resp.status)
//     }
//   }
//   catch (err) {
//     console.log(err);
//   }
// }

// getProducts();

/*
2. Создать промис, который будет зарезолвлен через 3 секунды словом 'Success'. Используя синтаксис async/await, дождаться успешного выполнения промиса, и вывести результат в консоль. ВАЖНО! Слово `await` мы можем использовать только внутри `async`-функций, а следовательно, создадим для этих целей функцию `asyncFunction`, в которой будем работать с await.
*/

// function makePromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Success')
//     }, 3000)
//   } )
// }

// async function asyncFunction() {
//   try {
//     const response = await makePromise()
//     console.log(response);
//   } catch (error) {
//     console.log('Something is not good', error)
//   }
// }
// asyncFunction()

/*
3. Освежаем промисы. Написать функцию `promiseFactory`, которая будет создавать промисы. В аргументах она принимает `isSuccess`, `timeout`, `promiseResult`. Функция должна создать промис. Если `isSuccess = true`, то через `timeout` секунд промис должен быть зарезолвлен аргументом `promiseResult`. А если `isSuccess = false`, то через `timeout` секунд нужно вызвать `reject` с `promiseResult`.
*/

function promiseFactory(isSuccess, timeout, promiseResult) {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve(promiseResult);
      }
      else {
        reject(promiseResult);
      }
    }, timeout);
  });
}

/*
4. Теперь работаем с нештатными ситуациями. Вызвать функцию `promiseFactory(false, 3, 'Something went wrong!');`. То есть, нужно имитировать нештатную ситуацию. И нам нужно, используя синтаксис async/await, обработать эту нештатную ситуацию - вывести причину в консоль.
*/

async function wrapper() {
  try {
    const res = await promiseFactory(false, 3, 'Something went wrong!');
  }
  catch (err) {
    console.log(err);
  }
}

wrapper();