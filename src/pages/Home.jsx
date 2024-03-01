import { useEffect, useState } from "react";

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
        <div className="mx-20">
        {products && products.map((product)=>(
            <h1 key={product.title}>{product.title}</h1>
        ))}                   
        </div>
  </div>;
}
