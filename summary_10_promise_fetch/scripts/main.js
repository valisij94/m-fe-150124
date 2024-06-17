const asyncNumbers = [
  new Promise(resolve => resolve(5)),
  new Promise(resolve => resolve(3)),
  new Promise(resolve => resolve(7)),
  new Promise(resolve => resolve(4)),
  new Promise(resolve => resolve(8)),
];

/*
8. У нас есть массив `asyncNumbers` - это массив, который содержит несколько промисов, которые будут зарезолвлены числами. Нужно посчитать сумму этих чисел.
*/
async function getCount() {
  let result = 0;
  for (let i = 0; i < asyncNumbers.length; i++) {
    result += await asyncNumbers[i];
  }
  return result;
}

getCount().then(res => console.log(res));



// Для задачи 9
const workers = [
  { name: 'Petr', work: () => new Promise( resolve => setTimeout(() => resolve('Corpus'), 700)) },
  { name: 'Vasilij', work: () => new Promise( resolve => setTimeout(() => resolve('Doors'), 1500)) },
  { name: 'Sergey', work: () => new Promise( resolve => setTimeout(() => resolve('Engine'), 3000)) },
  { name: 'Ivan', work: () => new Promise( resolve => setTimeout(() => resolve('Wheels'), 1000)) },
];

// Для задачи 10
const badWorkers = [
  { name: 'Worker1',
    work: () => new Promise( (resolve, reject) => setTimeout(() => Math.random() < 0.5 ? resolve('Corpus') : reject('Fail'), 700))
  },
  { name: 'Worker2',
    work: () => new Promise( (resolve, reject) => setTimeout(() => Math.random() < 0.5 ? resolve('Doors') : reject('Fail'), 1000))
  },
  { name: 'Worker3',
    work: () => new Promise( (resolve, reject) => setTimeout(() => Math.random() < 0.5 ? resolve('Engine') : reject('Fail'), 3000))
  },
  { name: 'Worker4',
    work: () => new Promise( (resolve, reject) => setTimeout(() => Math.random() < 0.5 ? resolve('Wheels') : reject('Fail'), 2000))
  },
];

/*
1. Пишем универсальную функцию отправки GET-запроса, которая будет запрашивать данные с указанного УРЛ, и возвращать JSON. Назовем ее `jsonRequest`. В аргументах она принимает URL, к которому надо обратиться. Она должна сделать запрос по этому адресу, затем преобразовать результат в JSON, и вернуть "готовый к употреблению" результат. Используем синтаксис async/await.
*/


/*
7. Усложним нашу функцию `jsonRequest`. Мы хотим, чтобы в случае ошибки при запросе, функция делала бы повторнубю попытку. Не более 3 попыток.
*/

async function jsonRequest(url) {
  if (!url) {
    throw new Error('Please provide the URL!');
  }

  let retries = 0;
  do {
    retries++;
    try {
      const resp = await fetch(url);
      if (resp.ok) {
        const data = await resp.json();
        // returns PROMISE which will be resolved by data
        return data;
      }
      else {
        throw new Error('Something went wrong: ' + resp.status);
      }
    }
    catch (err) {
      console.log('Error', err.message);
    }
  }
  while (retries < 3);
}

/*
2. С помощью нашей функции, обратимся к адресу `https://dummyjson.com/products`, в ответе посчитать общую стоимость товаров в массиве `products`.
*/

jsonRequest('https://dummyjsadsfwon.com/products')
  .then( res => console.log(res))
  .catch( err => console.log(err));

/*
3. Дорабатываем нашу функцию `jsonRequest`. Теперь, если в функцию передан пустой url, то нужно генерировать свое исключение с текстом "Please, provide the URL!".
*/

/*
4. Напишем функцию проверки URL-адреса, `checkUrl`. Она будет принимать в аргументах адрес, и должна проверить, доступен ли он. То есть, обратиться к этому адресу, и если запрос успешный (статус от 200 до 299) - то вернуть true, иначе - false.
*/

async function checkUrl(url) {
  try {
    let response = await fetch(url);
    return response.ok;
  }
  catch (err) {
    return false;
  }
}



const select = document.querySelector('#dummy');

select.addEventListener('change', (e) =>{
  console.log(e.target.value)
})