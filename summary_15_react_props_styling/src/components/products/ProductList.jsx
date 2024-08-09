import ProductCard from "./ProductCard";

function ProductList( { products, emptyProductList } ) {

  return (
    <div>
      <h2>Tools</h2>
      <div className="productList">
        {
          products && products.length > 0 ? (
            products.map(prod => {
              return <ProductCard product={prod} key={prod.id}/>
            })
          ) : <p>{emptyProductList}</p>
        }
      </div>
      <p>Time to buy!</p>
    </div>
  );
}

export default ProductList;