
import { Rating } from "flowbite-react";
import { useEffect, useState } from "react";


export default function RatingProduct({rating}) {
const rate=Math.floor(rating.rate)

//rendering rating star
const renderStars=()=>{
  let stars=[];
  for(let i=1;i<=5;i++){
    stars.push(
      <Rating.Star key={i} filled={i<=rate?true:false}/>
    )
  }
  return stars;
}
  return (
    <Rating>
       {renderStars()} <span className="ml-2">{rating.rate} ({rating.count})</span>
    </Rating>
  )
}
