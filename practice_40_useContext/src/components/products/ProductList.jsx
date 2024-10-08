import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function ProductList() {

  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  const {login} = useContext(UserContext);

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

  const headerText = login ? 'Tools for you, ' + login : 'Tools';
  return (
    <div>
      <h1>{headerText}</h1>
      { load ? <p>Please, wait...</p> :
      <div className="productList">
        { products.map( prod => <ProductCard key={prod.id} product={prod} />)}
      </div> }
      <p>Time to buy!</p>
    </div>
  );
}

export default ProductList;