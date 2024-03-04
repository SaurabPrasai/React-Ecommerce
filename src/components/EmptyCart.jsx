import { Button, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <Card className="w-2/3 flex flex-col justify-center items-center mx-auto mt-5">
      <img
        src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
        alt=""
        className="max-w-sm"
      />

      <p className="text-center">Missing Cart items?</p>
      <Link to={"/"} className="flex flex-row justify-center">
        {" "}
        <Button>click here</Button>
      </Link>
    </Card>
  );
}
