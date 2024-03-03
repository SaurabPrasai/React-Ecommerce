import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { productContext } from "../../context/ProductContextProvider";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice";

export default function Home() {
  // all products
  const { products } = useContext(productContext);

  const dispatch = useDispatch();

  const addProductToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="min-h-screen mt-10">
      <div className="mx-20 flex flex-row flex-wrap justify-around gap-5">
        {products &&
          products.map((product) => (
            <ProductCard
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              key={product.id}
              addProductToCart={addProductToCart}
            />
          ))}
      </div>
    </div>
  );
}
