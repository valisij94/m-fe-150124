const racers = [
  { name: 'Dominic Toretto', car: 'Dodge Charger' },
  { name: 'Brian O\'Connor', car: 'Nissan Skyline' },
  { name: 'Daniel Morales', car: 'Peugeot 308' },
  { name: 'Frankenstein', car: 'Chevrolet Camaro' }
]

const categoriesSelect = document.querySelector('.categoriesSelect');
const productsContainer = document.querySelector('.productsContainer');

const renderCategories = (categories) => {
  categories.forEach( cat => {
    const categoryEl = document.createElement('option');
    categoryEl.value = cat.slug;
    categoryEl.textContent = cat.name;
    categoriesSelect.append(categoryEl);
  });
}

function renderProduct(product){
  const productCard = document.createElement('div');
  productCard.classList.add('productCard');

  const productTitle = document.createElement('h3');
  productTitle.textContent = product.title;
  productTitle.classList.add('productTitle');

  const productPrice = document.createElement('p');
  productPrice.textContent = product.price;
  productPrice.classList.add('productPrice');

  const productCategory = document.createElement('p');
  productCategory.textContent = product.category;
  productCategory.classList.add('productCategory');

  const productImg = document.createElement('img');
  productImg.src = !!product.thumbnail ? product.thumbnail : '';
  productImg.classList.add('productImg');

  const productDescription = document.createElement('p');
  productDescription.textContent = product.description;
  productDescription.classList.add('productDescription');

  productCard.append(productImg, productTitle, productPrice, productCategory, productDescription);

  return productCard;
}

const renderProducts = (products) => {
  products.forEach( (prod) => {
      const productCard = renderProduct(prod);
      container.append(productCard);
  })
};

/*
1. Пристрелочная. Создать 2 промиса. Первый должен быть зарезолвлен через 1 секунду числом 10, второй - через 2 секунды, числом 15. И нужно вывести сумму результатов этих двух промисов - т.е. дождаться выполнения, и вывести в консоль.
*/

// const promise1 = new Promise(resolve => {
//   setTimeout(() => {
//     resolve(10);
//   }, 1000);
// });
// const promise2 = new Promise(resolve => {
//   setTimeout(() => {
//     resolve(15);
//   }, 2000);
// });
// Promise.all( [promise1, promise2] )
//   .then( res => {
//     const sum = res.reduce( (acc, val) => acc + val, 0 );
//     console.log(sum);
//   });

// async function makePromises() {
//   const promise1 = new Promise(resolve => {
//     setTimeout(() => {
//       resolve(10);
//     }, 1000);
//   });
//   const promise2 = new Promise(resolve => {
//     setTimeout(() => {
//       resolve(15);
//     }, 2000);
//   });
//   const res = await Promise.all([promise1, promise2]);
//   const sum = res.reduce( (acc, val) => acc + val, 0);
//   console.log(sum);
// }

// makePromises();

/*
2. Пишем функцию `makeRacer`. Она будет нам создавать объект-гонщика, который будет участвовать в заезде. Функция будет принимать объект с двумя свойствами: имя гонщика, и название машины. Задача - вернуть промис, который будет зарезолвлен спустя случайное количество секунд объектом с данными гонщика. Для вычисления времени, воспользуйтесь формулой `Math.random() * 2000`.
*/

function makeRacer(racer) {
  return new Promise (resolve =>{
    const delay = Math.random() * 2000;
    setTimeout(() => {
      resolve( {...racer, delay} );
    }, delay);
  });
}

/*
3. Пишем асинхронную функцию `startTraining`. Она должна принять в аргументах массив гонщиков (`racers`), пройтись по массиву, и запустить заезд для каждого гонщика. Нужно дождаться, пока все доберутся до фииниша, и вывести гонщиков в порядке прихода к финишу (например, "1 - Daniel Morales, Peugeot 308").
*/

async function startTraining(racers) {
  const racerPromises = racers.map( makeRacer );
  const result = await Promise.all( racerPromises );
  result.forEach( (elem, index) => {
    console.log(`${index + 1} - ${elem.name}, ${elem.car}, ${elem.delay}`);
  });
}

startTraining(racers);