import { useSelector } from "react-redux"


export default function Cart() {

  const cartProduct=useSelector(state=>state.cart.products)

  console.log(cartProduct);

  return (
    <div>
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
