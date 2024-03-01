import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

import { Button } from "flowbite-react";
import Header from "./components/Header";
import ProductDetails from "./pages/ProductDetails";
import ProductContextProvider from "../context/ProductContextProvider";

function App() {
  return (
    <ProductContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </ProductContextProvider>
  );
}

export default App;
