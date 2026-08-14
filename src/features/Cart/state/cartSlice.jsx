import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
        cartLength: JSON.parse(localStorage.getItem("cartItems")).length,
    },
    reducers: {
        add: (state, action) => {
            state.cartItems.push(action.payload)
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            state.cartLength = state.cartItems.length
        }
    }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer