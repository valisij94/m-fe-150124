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