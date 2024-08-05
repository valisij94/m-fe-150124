import ProductCard from "./ProductCard";

function ProductList() {

  return (
    <div>
      <h2>Tools</h2>
      <div className="productList">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <p>Time to buy!</p>
    </div>
  );
}

export default ProductList;