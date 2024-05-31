const ball = {
  id: 1,
  name: "Ball",
  category: "Sport",
  img: "./assets/ball.jpeg",
  price: 100
};
const gloves = {
  id: 2,
  name: "Gloves",
  category: "Sport",
  img: "./assets/gloves.jpg",
  price: 140
};
const shoes = {
  id: 3,
  name: "Sport shoes",
  category: "Sport",
  discount: true,
  img: "./assets/shoes.png",
  price: 320
};
const hammer = {
  id: 4,
  name: "Hammer",
  category: "Tools",
  img: "./assets/hammer.jpeg",
  price: 40
};
const saw = {
  id: 5,
  name: "Saw",
  category: "Tools",
  discount: true,
  img: "./assets/saw.jpeg",
  price: 75
};
const shark = {
  id: 6,
  name: "Shark toy",
  category: "Other",
  img: "./assets/shark.jpeg",
  price: 45
};

// Массив объектов
let products = [ball, gloves, shoes, hammer, saw, shark];


const basket = JSON.parse(localStorage.getItem('basketInstance')) || {};


const productsContainer = document.querySelector('.productsContainer');

const updateLS = () => {
  localStorage.setItem('basketInstance', JSON.stringify(basket));
  console.log(basket);
}

function renderProducts(productsArray) {

  productsContainer.innerHTML = '';
  productsArray.forEach( product => {
    const productCard = document.createElement('div');
    productCard.classList.add('productCard');

    const productNameEl = document.createElement('h3');
    productNameEl.textContent = product.name;

    const productPriceEl = document.createElement('p');
    productPriceEl.textContent = `Price: $${product.price}`;
    const productCategoryEl = document.createElement('p');
    productCategoryEl.textContent = product.category;

    const addBtn = document.createElement('button');
    addBtn.textContent = 'Add to Cart';
    addBtn.classList.add('addToCartBtn');
    const dropBtn = document.createElement('button');
    dropBtn.textContent = 'Remove from Cart';
    dropBtn.classList.add('removeFromCartBtn');

    addBtn.addEventListener('click', () => {
      if (basket[product.name]) {
        basket[product.name] += 1;
      }
      else {
        basket[product.name] = 1;
      }
      updateLS();
    });

    dropBtn.addEventListener('click', () => {
      const prodInBasket = basket[product.name];
      if (prodInBasket) {
        if (prodInBasket === 1) {
          delete basket[product.name];
        }
        else {
          basket[product.name] -= 1;
        }
      }
      updateLS();
    });

    productCard.append(productNameEl, productCategoryEl, productPriceEl, addBtn, dropBtn);

    productsContainer.appendChild(productCard);
  });
}

renderProducts(products);

/*
3. Сделаем возможность фильтрации товаров по категории. Напишем функцию `renderCategoriesSelect`. Она должна отрисовать на странице (НАД контейнером с товарами), выпадающее меню, где пользователь сможет выбирать категорию - чтобы отфильтровать товары по этой категории. Список категорий нужно взять из массива товаров - то есть, из массива товаров, нужно получить список уникальных категорий.
*/

function renderCategoriesSelect() {
  // 1. Получить из массива товаров МАССИВ с уникальными категориями товаров
  const categories = products.reduce( (acc, val) => {
    if (!acc.includes(val.category)) {
      acc.push(val.category);
    }
    return acc;
  }, []);

  // 2. отрисовать выпадающий список
  const selectEl = document.createElement('select');
  categories.forEach( category => {
    const optionEl = document.createElement('option');
    optionEl.value = category;
    optionEl.textContent = category;
    selectEl.append(optionEl);
  });

  selectEl.addEventListener('change', (event) => {
    const filteredProducts = products.filter( prod => prod.category === event.target.value );
    renderProducts(filteredProducts);
  });
  productsContainer.before(selectEl);
}

renderCategoriesSelect();

/*
4. Реализуем фильтрацию. Добавить на выпадающее меню обработчик события выбора (`change`). При наступлении этого события, нужно рендерить список товаров выбранной категории. Перед решением задачи, обсудим пути решения.
*/
