import { api } from "../../../config/AxiosInstance"


export const getAllProducts = async(search) => {

    try {

        console.log("api triggered")
        // console.log(search.trim() !== "")
        // console.log(search)
        // console.log(`https://dummyjson.com/products/search?q=${search}`)
        const URL = search.trim !== "" ? `/products/search?q=${search}` : "/products?limit=100"
        const res = await api.get(URL)
        console.log(res.data.products)
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