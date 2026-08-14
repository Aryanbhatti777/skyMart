import React from 'react'
import { useSelector } from 'react-redux';
import CartItemCard from './CartItemCard';

const CartItems = () => {
    const { cartItems } = useSelector(state => state.cart)
    console.log(cartItems)
  return (
      <>
          {cartItems.map((item) => {
            return <CartItemCard item={item } />
      })}
      </>
  )
}

export default CartItems;