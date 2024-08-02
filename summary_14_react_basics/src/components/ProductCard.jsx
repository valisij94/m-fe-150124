/*
2. Теперь импортируем в наш компонент данные о товаре (пиле), из файла `data.js`. Это объект `sawData`. Воспользуемся им, чтобы заполнить данные о товаре.
*/

import { sawData } from "../data/data.js";

function ProductCard() {

  const imgUrl = sawData.image;
  return (
    <div className="productCard">
      <img src={imgUrl} alt="product image"></img>
      <h3>{sawData.name}</h3>
      <p>{sawData.description}</p>
      <p className="productPrice">{sawData.price}</p>
      <p className="productBrands">{sawData.brands.join(', ')}</p>
    </div>
  );
}

export default ProductCard;