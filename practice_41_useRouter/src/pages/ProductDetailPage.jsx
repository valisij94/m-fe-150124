import { useEffect, useState } from "react";

export default function ProductDetailPage() {

  const [productData, setProductData] = useState(null);

  useEffect( () => {
    // fetch('https://dummyjson.com/products/PROD_ID')
    //   .then( res => res.json())
    //   .then( data => setProductData(data));
  }, []);

  return (
    productData ? <div>
        <h1>{productData.title}</h1>
        <p>{productData.price}</p>
        <p>{productData.category}</p>
        <p>{productData.descrition}</p>
    </div> : "Please, wait.."
  )
}