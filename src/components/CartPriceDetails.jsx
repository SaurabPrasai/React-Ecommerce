import { Card } from "flowbite-react";
import { useEffect, useReducer, useState } from "react";
import {  useSelector } from "react-redux";

export default function CartPriceDetails() {

const cartProduct=useSelector(state=>state.cart.products)
const [price,setPrice]=useState(null)
const [discount,SetDiscount]=useState(null)



useEffect(()=>{
 const totalPrice=cartProduct.reduce((acc,obj)=>acc+obj.price,0)
 const discountPrice=10/100*totalPrice;
setPrice(totalPrice)
SetDiscount(discountPrice.toFixed(2))
},[cartProduct])

  return (
    <Card>
      <h1>PRICE DETAILS</h1>
      <div className="border-t-2 pt-2 flex flex-col gap-y-5">
        <div className="flex flex-row gap-x-20 justify-between">
          <p>Price({cartProduct.length} items)</p>
          <span>{price}</span>
        </div>
        <div className="flex flex-row gap-x-20 justify-between">
          <p>Discount(10%)</p>
          <span>{discount}</span>
        </div>
        <div className="flex flex-row gap-x-20 justify-between">
          <p>Delivery Charges</p>
          <span>10</span>
        </div>
        <div className="border-y-2 py-2 flex flex-row gap-x-20 justify-between">
          <p>Total Amount</p>
          <span>${price-discount+10}</span>
        </div>
      </div>
    </Card>
  );
}
