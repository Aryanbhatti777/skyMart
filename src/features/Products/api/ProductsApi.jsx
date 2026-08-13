import { api } from "../../../config/AxiosInstance"


export const getAllProducts = async(search) => {

    try {

        const URL = search.trim !== "" ? `/products/search?q=${search}` : "/products?limit=100"

        const res = await api.get(URL)
        return res.data

    } catch (error) {
        console.log(error)
    }
}

export const getAllCategories = async () => {
    try {
        
        const res = await api.get("/products/categories")
        return res.data
    } catch (error) {
        console.log(error)
    }
}