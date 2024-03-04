import { useSelector } from "react-redux"
import EmptyCart from "../components/EmptyCart";


export default function Cart() {

  const cartProduct=useSelector(state=>state.cart.products)

  console.log(cartProduct);

  return (
    <div>
      
      {
        cartProduct.length==0 && <EmptyCart/>
      }
      <div>
           {/* left */}
           <div>
              
           </div>
           {/* right */}
           <div>

           </div>
      </div>
    </div>
  )
}
