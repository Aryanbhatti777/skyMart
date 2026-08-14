import { useDispatch } from "react-redux"
import { add } from "../state/cartSlice"
import { toast } from "react-toastify"


export const useCart = () => {

    const dispatch = useDispatch()
    const useAddCart = (item) => {
        console.log(item)
        dispatch(add(item))
        toast.success("Item added to cart")
    }

    return {useAddCart}
}