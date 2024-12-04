// src/components/CartItem.jsx
import React from "react";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
      <div className="flex flex-col flex-grow ml-4">
        <span className="text-lg font-semibold">{item.name}</span>
        <span className="text-sm text-gray-500">&#8377;{item.price}</span>
        <div className="flex items-center mt-2">
          <button
            onClick={() => onUpdateQuantity(item, item.quantity - 1)}
            className="bg-gray-200 px-2 py-1 rounded-md text-sm"
          >
            -
          </button>
          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) => onUpdateQuantity(item, parseInt(e.target.value))}
            className="mx-2 w-12 text-center border border-gray-300 rounded-md"
          />
          <button
            onClick={() => onUpdateQuantity(item, item.quantity + 1)}
            className="bg-gray-200 px-2 py-1 rounded-md text-sm"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
