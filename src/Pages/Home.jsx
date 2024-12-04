// src/pages/Home.jsx
import React, { useContext } from "react";
import ProductCard from "../Components/ProductCard";
import { CartContext } from "../Context/CartContext";

const products = [
  { id: 1, name: "Grocery", price: 100, image: "https://images.unsplash.com/photo-1499096382193-ebb232527fee?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Food" },
  { id: 2, name: "Headphone", price: 120, image: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Black and Pink Color" },
  { id: 3, name: "Mug", price: 140, image: "https://plus.unsplash.com/premium_photo-1719289799376-d3de0ca4ddbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "White Color and Two Pieces" },
  { id: 4, name: "Bag", price: 260, image: "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Brown Color" },
  { id: 5, name: "Chairs", price: 350, image: "https://plus.unsplash.com/premium_photo-1705169612592-32610774a5d0?q=80&w=2040&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Chairs and Lamp" },
  { id: 6, name: "Watch", price: 700, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "White Watch front and Back view" },
];

const Home = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
      ))}
    </div>
  );
};

export default Home;
