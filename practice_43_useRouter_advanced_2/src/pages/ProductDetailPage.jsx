import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetailPage() {

  const [productData, setProductData] = useState(null);

  const { id } = useParams();

  useEffect( () => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then( res => res.json())
      .then( data => setProductData(data));
  }, [id]);

  return (
    productData ? <div>
        <h1>{productData.title}</h1>
        <p>{productData.price}</p>
        <p>{productData.category}</p>
        <p>{productData.descrition}</p>
    </div> : "Please, wait.."
  )
}