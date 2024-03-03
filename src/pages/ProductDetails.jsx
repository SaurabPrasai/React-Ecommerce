import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../../context/ProductContextProvider";
import { Button, Card } from "flowbite-react";
import RatingProduct from "../components/RatingProduct";
import {  useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice";


export default function ProductDetails() {
  const { products } = useContext(productContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [rating, setRating] = useState(null);
  const dispatch=useDispatch();
  // const cart=useSelector(state=>state.products)

  useEffect(() => {
      const filterProduct = products.find((prod) => prod.id === +id);
      if (filterProduct) {
        setProduct(filterProduct);
        setRating(filterProduct.rating);
      } 
  }, [products,id]);

  const addProductToCart=(product)=>{
      dispatch(addToCart(product))
  }

  // console.log(cart);


  return (
    <div className="min-h-screen">
      <div className="m-20 flex flex-col lg:flex-row">
        {/* left */}
        <div className="flex-1">
          <Card className="max-w-sm m-auto cursor-pointer">
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
          <Button className="my-2" onClick={()=>addProductToCart(product)}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}
