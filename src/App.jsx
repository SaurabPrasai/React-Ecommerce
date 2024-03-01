import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"

import { Button } from "flowbite-react"
import Header from "./components/Header"

function App() {
  

  return (
    <BrowserRouter>
    <Header/>
        <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
