import React, { useContext } from "react";
import AppContext from "./Context/AppContext";
import ShowProduct from "./Component/Product/ShowProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./Component/Product/ProductDetails";
import Navbar from "./User/Navbar";
import SearchProduct from "./Component/Product/SearchProduct";
import Register from "./User/Register";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Login from "./User/Login";
import Profile from "./User/Profile";
import Cart from "./User/Cart";
import Shipping_Address from "./User/Shipping_Address";
import Checkout from "./User/Checkout";
import OrderConfirmation from "./User/OrderConfirmation";
const App = () => {

  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<ShowProduct />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/product/search/:term" element={<SearchProduct />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/shipping_Address" element={<Shipping_Address/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/orderConfirmation" element={<OrderConfirmation/>} />
      </Routes>
    </Router>
  )
}

export default App;