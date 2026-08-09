import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./features/Auth/state/authSlice"

const store = cofigureStore({
    reducer: {
        auth: authReducer
    }
})