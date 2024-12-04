import React, { useState } from "react";

const ProductCard = ({ product, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    onAddToCart(product);
    setTimeout(() => setIsAdded(false), 2000); // Reset animation after 2 seconds
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="font-semibold text-xl">&#8377;{product.price}</span>
        <button
          onClick={handleAddToCart}
          className={`px-4 py-2 rounded-md transition-all duration-300 flex items-center justify-center ${
            isAdded
              ? "bg-green-500 text-white"
              : "bg-blue-500 text-white hover:bg-blue-700"
          }`}
        >
          {isAdded ? (
            <>
              <span className="material-icons mr-1">Added</span>
            </>
          ) : (
            "Add to Cart"
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
