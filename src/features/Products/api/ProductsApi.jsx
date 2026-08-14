import { api } from "../../../config/AxiosInstance"


export const getAllProducts = async(search, sortVal) => {

    try {

        let URL = !search ? `/products?limit=0` : `/products/search?q=${search}`

         if (sortVal === "lowtohigh") {
            URL += "&sortBy=price&order=asc"
        } else if (sortVal === "hightolow") {
            URL += "&sortBy=price&order=desc"
         } else if (sortVal === "highestrated") {
             URL += "&sortBy=rating&order=desc"
        }

        // console.log(URL)
        const res = await api.get(URL)
        // console.log(res.data)
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

export const getProductByCategory = async (cat, sortVal) => {
    
    try {
        const category = cat.split(" ").join("-").toLowerCase()
        if (cat === "All Categories") {
            cat = ""
        }
        let URL = (cat === "") ? "/products?limit=0" : `/products/category/${category}`

        if (sortVal === "lowtohigh") {
            URL += cat === "" ? `&sortBy=price&order=asc` : `?sortBy=price&order=asc`
        } else if (sortVal === "hightolow") {
            URL += cat === ""? `&sortBy=price&order=desc` : `?sortBy=price&order=desc`
        } else if (sortVal === "highestrated") {
            URL += cat === "" ? `&sortBy=rating&order=desc` : `?sortBy=rating&order=desc`
        }

        let res = await api.get(URL)
        return res.data

    } catch (error) {
        console.log(error)
    }
}

export const getProductDetails = async (id) => {

    try {
        
        const URL = `/products/${id}`
        const res = await api.get(URL)
        return res.data
    } catch (error) {
        console.log(error)
    }
}