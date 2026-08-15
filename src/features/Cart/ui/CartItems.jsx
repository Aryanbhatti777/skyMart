import React from 'react'
import { useSelector } from 'react-redux';
import CartItemCard from './CartItemCard';

const CartItems = () => {
    const { cartItems } = useSelector(state => state.cart)
  return (
      <>
      {cartItems.map((item) => {
        return <CartItemCard item={item} key={item.id} />
      })}
      </>
  )
}

export default CartItems;