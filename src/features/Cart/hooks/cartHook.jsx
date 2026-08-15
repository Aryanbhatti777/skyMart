import { useDispatch } from "react-redux"
import { add, decrease, increase, remove, removeAll } from "../state/cartSlice"
import { toast } from "react-toastify"


export const useCart = () => {

    const dispatch = useDispatch()
    const useAddCart = (item) => {
        dispatch(add({...item, quantity: 1}))
        toast.success("Item added to cart")
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

    return {useAddCart, increaseQuantity, decreaseQuantity, removeItemFromCart, clearCart}
}