// Подопытные данные

const ball = {
    name: "Ball",
    category: "Sport",
    img: "./assets/ball.jpeg",
    price: 100
};
const gloves = {
    name: "Gloves",
    category: "Sport",
    img: "./assets/gloves.jpg",
    price: 140
};
const shoes = {
    name: "Sport shoes",
    category: "Sport",
    discount: true,
    img: "./assets/shoes.png",
    price: 320
};
const hammer = {
    name: "Hammer",
    category: "Tools",
    img: "./assets/hammer.jpeg",
    price: 40
};
const saw = {
    name: "Saw",
    category: "Tools",
    discount: true,
    img: "./assets/saw.jpeg",
    price: 75
};
const shark = {
    name: "Shark toy",
    category: "Other",
    img: "./assets/shark.jpeg",
    price: 45
};

// Массив объектов
let products = [ball, gloves, shoes, hammer, saw, shark];

function renderProduct(product){
    const productCard = document.createElement('div');
    productCard.classList.add('productCard');

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

const container = document.querySelector('.productsContainer');
const mainContainer = document.querySelector('.mainContainer');

function renderProducts(products) {
    products.forEach( (prod) => {
        const productCard = renderProduct(prod);
        container.append(productCard);
    });
}
renderProducts(products);

/*
2. Делаем возможность фильтра товаров по категориям. Нужно средствами JavaScript, добавить на страницу выпадающее меню (используем тег `select`), с уникальными категориями товаров. Напишем функцию `renderCategoriesSelect`, которая будет находить уникальные категории товаров в массиве `products`, и рисовать нам `select` с этими категориями.
*/

function renderCategoriesSelect(products) {
    const categoriesArray = products.reduce( (acc, val) => {
        if (!acc.includes(val.category)) {
            acc.push(val.category);
        }
        return acc;
    }, []);

    const selectEl = document.createElement('select');
    categoriesArray.forEach( cat => {
        const optionEl = document.createElement('option');
        optionEl.value = cat;
        optionEl.textContent = cat;
        selectEl.append(optionEl);
    });
    mainContainer.prepend(selectEl);

    selectEl.addEventListener('change', (event) => {
        console.log(event.target.value);
    });
}

renderCategoriesSelect(products)