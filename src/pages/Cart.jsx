import { useSelector } from "react-redux";
import EmptyCart from "../components/EmptyCart";
import { Button, Card } from "flowbite-react";
import CartItem from "../components/CartItem";
import CartPriceDetails from "../components/CartPriceDetails";

export default function Cart() {
  const cartProduct = useSelector((state) => state.cart.products);

  return (
    <div className="m-5 flex flex-row justify-center">
      {cartProduct.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex flex-row gap-5 flex-wrap">
          {/* left */}
          <div className="">
            <Card>
              <div className="flex flex-col gap-y-10">
                {cartProduct.map((product) => (
                  <CartItem
                  key={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    count={product.count}
                     id={product.id}
                  />
                ))}
              </div>
              <div className="flex flex-row justify-end ">
                <Button className="mt-3">PLACE ORDER</Button>
              </div>
            </Card>
          </div>
          {/* right */}
          <div className="">
                    <CartPriceDetails/>
          </div>
        </div>
      )}
    </div>
  );
}
