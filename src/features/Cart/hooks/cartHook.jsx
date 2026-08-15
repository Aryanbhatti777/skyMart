import { useDispatch } from "react-redux"
import { add, decrease, increase } from "../state/cartSlice"
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

    return {useAddCart, increaseQuantity, decreaseQuantity}
}