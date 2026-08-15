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
            let contain = state.cartItems.find(item => item.id === action.payload.id)
            if (contain) {
                toast.error("Item already in cart")
                return
            }
            state.cartItems.push(action.payload)
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            toast.success("Item added to cart")
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

        },
        remove: (state, action) => {
            const updated = state.cartItems.filter((item) => item.id !== action.payload)
            state.cartItems = updated;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            state.cartLength = state.cartItems.length
            state.grandTotal = state.cartItems.reduce((acc, curr) => {
                return acc + curr.quantity * curr.price
            }, 0)
        },
        removeAll: (state) => {
            state.cartItems = []
            localStorage.removeItem("cartItems")
            state.cartLength = state.cartItems.length
            state.grandTotal = state.cartItems.reduce((acc, curr) => {
                return acc + curr.quantity * curr.price
            }, 0)
        },
        checkout: (state) => {
            toast.success("Order placed (demo)")
            state.cartItems = []
            localStorage.removeItem("cartItems")
            state.cartLength = state.cartItems.length
            state.grandTotal = state.cartItems.reduce((acc, curr) => {
                return acc + curr.quantity * curr.price
            }, 0)
        }

    }
})

export const { add, increase, decrease, remove, removeAll, checkout } = cartSlice.actions
export default cartSlice.reducer