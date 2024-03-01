import { createContext, useEffect, useState } from "react";

export const productContext=createContext([]);

export default function ProductContextProvider({children}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      };
      fetchData()
    }, []);
  return (
    <productContext.Provider value={{products}}>
    {children}
    </productContext.Provider>
  )
}
