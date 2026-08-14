import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getAllCategories, getAllProducts, getProductByCategory } from "../api/ProductsApi"
import { useEffect, useState } from "react"


export const useAllProducts = () => {

    const [search, setSearch] = useState("")
    const [debounceSearch, setDebounceSearch] = useState("")


    useEffect(() => {
        let timeout = setTimeout(() => {
            setDebounceSearch(search)
        }, 700)
        
        return () => clearTimeout(timeout)
    },[search])

    const { data, isPending, error } = useQuery({
        queryKey: ["products", debounceSearch],
        queryFn: () => getAllProducts(debounceSearch),
        staleTime: 5 * 60 * 1000
    })

    return { data, isPending, error, search, setSearch}
}

export const useAllCategories = () => {
    const { data, error } = useQuery({
        queryKey: ["categories"],
        queryFn: getAllCategories,
        staleTime: 5 * 60 * 1000
    })
    return {data, error}
}

export const useProductByCategory = () => {
    const [category, setCategory] = useState("All products")
    
    const { data, isPending, error } = useQuery({
        queryKey: ["productsByCategory", category],
        queryFn: () => getProductByCategory(category),
        staleTime: 5 * 60 * 1000
    })

    return {category, setCategory, data, isPending, error}
    
}