import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SimpleHeader from "../../inputViews/SimpleHeader";

function ProductList() {

  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(()=> {
    const fetchProducts = async() => {
      try {
        setLoad(true);
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json()
        setProducts(data.products);
      }catch(error) {
        console.error('error', error);
      }
      finally {
        setLoad(false);
      }
    }
    fetchProducts()

  },[])

  return (
    <div>
      <SimpleHeader
        textContent="Tools"
      />
      { load ? <p>Please, wait...</p> :
      <div className="productList">
        { products.map( prod => <ProductCard key={prod.id} product={prod} />)}
      </div> }
      <p>Time to buy!</p>
    </div>
  );
}

export default ProductList;