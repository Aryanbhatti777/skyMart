import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: localStorage.getItem("user"),
        isAuthenticated: false,
        isLoading: true
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
            state.isAuthenticated = true
            state.isLoading = false
        }
    }
})

export const { login } = authSlice.actions;
export default authSlice.reducer;