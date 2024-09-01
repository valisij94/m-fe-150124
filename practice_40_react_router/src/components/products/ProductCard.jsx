function ProductCard( {product} ) {

  return (
    <div className="productCard">
      <img src={product.thumbnail} alt="product image"></img>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p className="productPrice">{ product.price }</p>
    </div>
  );
}

export default ProductCard;