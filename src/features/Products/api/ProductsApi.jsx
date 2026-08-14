import { api } from "../../../config/AxiosInstance"


export const getAllProducts = async(search) => {

    try {

        const URL = !search ? `/products?limit=100` : `/products/search?q=${search}`

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

export const getProductByCategory = async (cat) => {
    
    try {
        const category = cat.split(" ").join("-").toLowerCase()
        const URL = cat === "All products" ? "/products?limit=100" : `/products/category/${category}`
        
        const res = await api.get(URL)
        return res.data
    } catch (error) {
        console.log(error)
    }
}