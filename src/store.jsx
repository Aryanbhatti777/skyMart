
import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./features/Auth/state/authSlice"
import cartReducer from "./features/Cart/state/cartSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer
    }
})