import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../../context/ProductContextProvider";
import { Card } from "flowbite-react";

export default function ProductDetails() {
  const { products } = useContext(productContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const filterProduct = products.find((prod) => prod.id === +id);
    if (filterProduct) {
      setProduct(filterProduct);
    } else {
      console.log(`product with ${id} not found`);
    }
  }, [id]);

  return (
    <div className="min-h-screen">
      <div>
        {/* left */}
        <div></div>
        {/* right */}
        <div></div>
      </div>
    </div>
  );
}
