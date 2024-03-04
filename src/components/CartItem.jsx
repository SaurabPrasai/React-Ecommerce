import { useDispatch } from "react-redux"
import { decrementCountInCart, incrementCountInCart, removeFromCart } from "../redux/cart/cartSlice"



export default function CartItem({image,title,price,count,id}) {

    const dispatch=useDispatch()

    const handleRemoveFromCart=(id)=>{
        dispatch(removeFromCart(id))
    }

    const handleIncrementCount=(id)=>{
      dispatch(incrementCountInCart(id))
    }

    const handleDecrementCount=(id)=>{
        dispatch(decrementCountInCart(id))
    }

  return (
    <div className="border-b-2">
    <div className="flex flex-row items-center gap-5">
    <img src={image} alt="" className="max-w-20" />
    <div className="ml-5">
      <p className="text-2xl">{title}</p>
      <p className="mt-1 font-semibold">${price}</p>
    </div>
  </div>
  {/* increment decrement remove product */}

  <div className="flex flex-row gap-3 items-center my-4">
    <span className="border-2 font-semibold border-gray-400 rounded-full text-sm px-2 py-1" onClick={()=>handleDecrementCount(id)}>
      -
    </span>
    <button className="border-2 border-gray-400 px-3 py-1">
      {count}
    </button>
    <span className="border-2 font-semibold border-gray-400 rounded-full text-sm px-2 py-1" onClick={()=>handleIncrementCount(id)}>
      +
    </span>
    <span className="ml-5 hover:text-blue-900 cursor-pointer" onClick={()=>handleRemoveFromCart(id)}>
      Remove
    </span>
  </div>
  </div>
  )
}
