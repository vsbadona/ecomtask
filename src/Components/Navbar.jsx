// src/components/Navbar.jsx
import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <Link to="/"><h1 className="text-2xl font-semibold">E-commerce Store</h1></Link>
      <div className="flex items-center">
        <Link to="/cart"><span className="mr-4">Cart ({totalItems})</span></Link>
        <button className="bg-blue-700 px-4 py-2 rounded-md hover:bg-blue-900">
          Checkout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
