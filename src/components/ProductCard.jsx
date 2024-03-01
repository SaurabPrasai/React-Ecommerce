import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";

export default function ProductCard({ title, price, image }) {

    const handleClick=(e)=>{
            console.log(e);
    }
  return (
    <Card className="max-w-sm">

      <div className="w-64 m-auto">
      <img src={image} alt={title} className="w-full" />

      </div>
      <div>
        <h1>{title}</h1>
        <h1>${price}</h1>
      </div>
      <div className="flex flex-row justify-between items-center">
        <Button className="bg-green-700" onClick={handleClick}>Add to Cart</Button>
        <Link className="text-green-700">See more..</Link>
      </div>
    </Card>
  );
}
