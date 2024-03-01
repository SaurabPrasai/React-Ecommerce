import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { productContext } from "../../context/ProductContextProvider";



export default function Home() {

    const {products}=useContext(productContext)

  
  return <productContext.Provider value={{products}}>
     <div className="min-h-screen mt-10">
        <div className="mx-20 flex flex-row flex-wrap justify-around gap-5">
        {products && products.map((product)=>(
           <ProductCard id={product.id} title={product.title} price={product.price} image={product.image} key={product.id}/>
        ))}                   
        </div>
  </div>;
  </productContext.Provider>
 
}
