import { useDispatch } from "react-redux"
import { add, checkout, decrease, increase, remove, removeAll } from "../state/cartSlice"
import { toast } from "react-toastify"


export const useCart = () => {

    const dispatch = useDispatch()

    const useAddCart = (item) => {
        dispatch(add({...item, quantity: 1}))
        
    }

    const increaseQuantity = (item) => {
        dispatch(increase(item))

    }

    const decreaseQuantity = (item) => {
        dispatch(decrease(item))
    }

    const removeItemFromCart = (item) => {
        dispatch(remove(item))
    }

    const clearCart = () => {
        dispatch(removeAll())
    }

    const placeOrder = () => {
        dispatch(checkout())
    }

    return {useAddCart, increaseQuantity, decreaseQuantity, removeItemFromCart, clearCart, placeOrder}
}