import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SimpleHeader from "../../inputViews/SimpleHeader";
import { SettingsContext } from "../../context/SettingsContext";
import { ThemeContext } from "../../context/ThemeContext";

function ProductList() {

  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  const themeContext = useContext(ThemeContext);
  const settingsContext = useContext(SettingsContext);

  const paragraphStyle = {
    fontSize: settingsContext.fontSize
  }

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
      <button onClick={themeContext.changeTheme}>Change Theme</button>
      { load ? <p>Please, wait...</p> :
      <div className="productList">
        { products.map( prod => <ProductCard key={prod.id} product={prod} />)}
      </div> }
      <p style={paragraphStyle}>Time to buy!</p>
    </div>
  );
}

export default ProductList;