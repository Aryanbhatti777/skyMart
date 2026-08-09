import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { toast } from "react-toastify";
import { useDispatch } from "react-redux"
import { login } from "../state/authSlice";

export const useAuth = (data) => {

    let { register, handleSubmit, reset, formState: { errors } } = useForm()
    let navigate = useNavigate()
    const arr = JSON.parse(localStorage.getItem("users")) || []
    const dispatch = useDispatch()
    
    const registerForm = (data) => {

        if (data.password !== data.confirmPassword) {
            toast.error("Passwords do not match")
            return
        }

        arr.push(data)

        localStorage.setItem("users", JSON.stringify(arr))
        reset()
        navigate("/")
    }

    const loginForm = (data) => {

        let user = arr.find((user) => user.email === data.email && user.password === data.password)
        console.log(user)
        
        if (!user) {
            toast.error("Login failed")
            return
        }

        
        toast.success("Login successfull")
        localStorage.setItem("loggedInUser", JSON.stringify(user.name))
        reset();
        dispatch(login(data.email))
        navigate("/main")
        
    }

    return { register, handleSubmit, reset, errors, navigate, registerForm, loginForm}
}