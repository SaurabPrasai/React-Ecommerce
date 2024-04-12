import { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";

export const productContext=createContext([]);

export default function ProductContextProvider({children}) {
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    

    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        setAllProducts(data);
      };
      fetchData()
    }, []);
  return (
    <productContext.Provider value={{products,setProducts,allProducts}}>
    {children}
    </productContext.Provider>
  )
}
