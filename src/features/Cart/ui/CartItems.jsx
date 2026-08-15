import React from "react";
import { useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";

const CartItems = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <CartItemCard item={item} key={item.id} />
        ))
      ) : (
        <h1 className="text-white">No Items found.</h1>
      )}
    </>
  );
};

export default CartItems;