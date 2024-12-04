// src/components/CartSummary.jsx
import React from "react";

const CartSummary = ({ totalPrice, discount, finalPrice }) => {
  return (
    <div className="p-4 mt-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>&#8377;{totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Discount</span>
        <span>{discount ? `-₹${discount.toFixed(2)}` : "₹0.00"}</span>
      </div>
      <div className="flex justify-between font-semibold mt-2 border-t pt-2">
        <span>Total</span>
        <span>&#8377;{finalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartSummary;
