import { Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { productContext } from "../../context/ProductContextProvider";

export default function Header() {
  const path = useLocation().pathname;
  const { setProducts, products,allProducts } = useContext(productContext);
  const [searchProduct, setSearchProduct] = useState(null);

const filteredProduct=(e)=>{
  setSearchProduct(e.target.value)
  if(!searchProduct){
    return setProducts(products)
  }
  const items = allProducts.filter((item) =>
  item.title.toLowerCase().includes(searchProduct.toLowerCase())
);
setProducts(items)
}
  return (
    <Navbar className="border-b-2 px-3">
      {/* Logo */}
      <div>
        <Link to={"/"} className="text-3xl ml-4 font-semibold">
          <span className="text-green-700">E</span>
          -Commerce
        </Link>
      </div>
      <div>
        <TextInput
          placeholder="Search Product..."
          icon={AiOutlineSearch}
          className="hidden lg:block"
          onChange={(e) =>filteredProduct(e) }
        />
      </div>
      {/* hamburger */}
      <div className="lg:hidden">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="lg:mr-52">
        <Navbar.Link
          as={"div"}
          className="text-xl font-semibold"
          active={path == "/"}
        >
          <Link to={"/"}>
            <div className="flex flex-row items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span>Home</span>
            </div>
          </Link>
        </Navbar.Link>
        <Navbar.Link
          as={"div"}
          className="lg:ml-20 text-xl font-semibold"
          active={path == "/cart"}
        >
          <Link to={"/cart"}>
            <div className="flex flex-row items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <span>Cart</span>
            </div>{" "}
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
