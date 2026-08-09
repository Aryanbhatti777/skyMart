import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { toast } from "react-toastify";
import { useDispatch } from "react-router"
import { login } from "../state/authSlice";

export const useAuth = (data) => {

    let { register, handleSubmit, reset, formState: { errors } } = useForm()
    let navigate = useNavigate()
    const arr = JSON.parse(localStorage.getItem("users")) || []
    
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

    

    return { register, handleSubmit, reset, errors, navigate, registerForm }
}