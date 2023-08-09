import { Route, Routes } from "react-router-dom"

import Header from "./components/Header"
import Cart from "./pages/Cart"
import Home from "./pages/Home"

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}
