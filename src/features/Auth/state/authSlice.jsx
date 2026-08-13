import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: localStorage.getItem("loggedInUser"),
        isAuthenticated: false,
        isLoading: true
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
            state.isAuthenticated = true
            state.isLoading = false
        },
        logout: (state) => {
            state.user = null
            state.isAuthenticated = false
            localStorage.removeItem("loggedInUser")
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;