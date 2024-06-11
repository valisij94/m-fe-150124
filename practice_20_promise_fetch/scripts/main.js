function renderProduct(product){
  const productCard = document.createElement('div');
  productCard.classList.add('productCard');

  productCard.addEventListener('click', (event) => {
      productCard.classList.toggle('productCardHighlighted');
  });

  const productTitle = document.createElement('h3');
  productTitle.textContent = product.name;
  productTitle.classList.add('productTitle');

  const productPrice = document.createElement('p');
  productPrice.textContent = product.price;
  productPrice.classList.add('productPrice');

  const productCategory = document.createElement('p');
  productCategory.textContent = product.category;
  productCategory.classList.add('productCategory');

  const productImg = document.createElement('img');
  productImg.src = !!product.img ? product.img : '';
  productImg.classList.add('productImg');

  const productDescription = document.createElement('p');
  productDescription.textContent = product.description;
  productDescription.classList.add('productDescription');

  productCard.append(productImg, productTitle, productPrice, productCategory, productDescription);

  return productCard;
}

/*
1. Пишем сетевой запрос. Наша задача - обратиться к "бэку" по адресу `https://dummyjson.com/products/categories` GET-запросом, и вывести в консоль результат в "удобоваримом" виде (результат нам возвращается в виде JSON). Этот запрос нам вернет массив с категориями товаров.
*/

const selectEl = document.createElement('select');
const productsContainer = document.querySelector('.productsContainer')
productsContainer.before(selectEl);

fetch(`https://dummyjson.com/products/categories`)
  .then( result => {
    return result.json();
  })
  .then( data => {
    data.forEach( category => {
      const optionEl = document.createElement('option');
      optionEl.value = category.slug;
      optionEl.textContent = category.name;
      selectEl.append(optionEl);
    });
  } );


/*
2. Добавляем в разметку ПЕРЕД блоком `.productsContainer` компонент `select` (выпадающее меню). Нужно заполнить этот `select` опциями (`<option value=slug>name</option>`), которые нам пришли с "бэка" в предыдущей задаче. То есть, пройтись по массиву результатов, для каждого создать элемент `option`, и добавить его в наш `select`. В качестве `value` используем значение, в качестве `option_text` используем то же.
*/

/*
3. Пишем функцию `getProducts`. В качестве аргумента, она принимает категорию товаров. Она должна сделать запрос по адресу `https://dummyjson.com/products/category/ИМЯ_КАТЕГОРИИ`. В ответ нам придет список товаров этой категории. Наша задача - отрендерить их в списке товаров (`div.productsContainer`).  ВАЖНО! Список товаров перед рендерингом надо очистить! Товары рендерим с помощью функции `renderProduct`, она умеет создавать DOM-элемент, но нужно его еще добавить в контейнер.
*/

function getProducts(categoryName) {
  let productsUrl = `https://dummyjson.com/products/category/${categoryName}`;
  fetch(productsUrl)
    .then(resp => resp.json())
    .then(data => {
      productsContainer.innerHTML = "";
      data.products.forEach((product) => {
        const productCard = renderProduct(product);
        productsContainer.append(productCard);
      });
    });
}

getProducts('beauty')
