import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
        cartLength: JSON.parse(localStorage.getItem("cartItems"))?.length || 0,
        grandTotal:( JSON.parse(localStorage.getItem("cartItems")) || []).reduce((acc, curr) => {
            return acc + curr.quantity * curr.price
        }, 0) || 0
    },
    reducers: {
        add: (state, action) => {
            state.cartItems.push(action.payload)
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            state.cartLength = state.cartItems.length
            state.grandTotal = state.cartItems.reduce((acc, curr) => {
                return acc + curr.quantity * curr.price
            }, 0)
        },
        increase: (state, action) => {
            state.cartItems = state.cartItems.map((item) => {
                if (item.id === action.payload) {
                    let quantity = item.quantity
                    return {
                        ...item, quantity: quantity+1 }
                } else {
                    console.log("returned")
                    return item
                }
            })

            state.grandTotal = state.cartItems.reduce((acc, curr) => {
                return acc + curr.quantity * curr.price
            }, 0)

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

        },
        decrease: (state, action) => {
            state.cartItems = state.cartItems.map((item) => {
                if (item.id === action.payload) {
                    let quantity = item.quantity
                    console.log(item.quantity)
                    return {
                        ...item, quantity: quantity - 1
                    }
                } else {
                    console.log("returned")
                    return item
                }
            })

            state.grandTotal = state.cartItems.reduce((acc, curr) => {
                return acc + curr.quantity * curr.price
            }, 0)
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

        }

    }
})

export const { add, increase, decrease } = cartSlice.actions
export default cartSlice.reducer