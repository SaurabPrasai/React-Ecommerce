import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../../context/ProductContextProvider";
import { Button, Card } from "flowbite-react";
import { Rating } from "flowbite-react";
import RatingProduct from "../components/RatingProduct";

export default function ProductDetails() {
  const { products } = useContext(productContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [rating, setRating] = useState(null);
  useEffect(() => {
      const filterProduct = products.find((prod) => prod.id === +id);
      if (filterProduct) {
        setProduct(filterProduct);
        setRating(filterProduct.rating);
      } else {
        console.log(`product with ${id} not found`);
      }
  }, [products,id]);

  return (
    <div className="min-h-screen">
      <div className="m-20 flex flex-col lg:flex-row">
        {/* left */}
        <div className="flex-1">
          <Card className="max-w-sm m-auto">
            <img src={product.image} alt="" />
          </Card>
        </div>
        {/* right */}
        <div className="flex-1 mt-4">
          <div>
            <h1 className="text-2xl">{product.title}</h1>
            <p className="my-2 font-semibold">${product.price}</p>
          </div>
          <p className="text-md my-2">{product.description}</p>
          {rating && <RatingProduct rating={rating} />}
          <Button className="my-2">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}
