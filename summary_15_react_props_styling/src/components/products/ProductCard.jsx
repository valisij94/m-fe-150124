import { hasDiscount } from "../../data/data.js";

import { calculateDiscount } from "../../utils.js";

function ProductCard( { product } ) {

  const imgUrl = product.image;

  return (
    <div className="productCard">
      <img src={imgUrl} alt="product image"></img>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="productPrice">{ (hasDiscount) ? calculateDiscount(product.price) : product.price }</p>
      <p className="productBrands">{product.brands.join(', ')}</p>
      { hasDiscount ? <p>You have a discount!</p> : <button>Request discount</button>}
    </div>
  );
}

export default ProductCard;