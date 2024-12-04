// src/pages/Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartItem from "../Components/CartItem";
import CartSummary from "../Components/CartSummary";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = 0; // Optional, can add discount logic
  const finalPrice = totalPrice - discount;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={removeFromCart}
              onUpdateQuantity={updateQuantity}
            />
          ))}
          <CartSummary totalPrice={totalPrice} discount={discount} finalPrice={finalPrice} />
        </div>
      )}
    </div>
  );
};

export default Cart;
