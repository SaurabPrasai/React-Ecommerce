import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchData()
  }, []);
  
  return <div className="min-h-screen mt-10">
        <div className="mx-20 flex flex-row flex-wrap justify-around gap-5">
        {products && products.map((product)=>(
           <ProductCard title={product.title} price={product.price} image={product.image} key={product.id}/>
        ))}                   
        </div>
  </div>;
}
