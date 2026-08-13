import { api } from "../../../config/AxiosInstance"


export const getAllProducts = async() => {

    try {

        const res = await api.get("/products?limit=100")
        return res.data

    } catch (error) {
        console.log(error)
    }
}