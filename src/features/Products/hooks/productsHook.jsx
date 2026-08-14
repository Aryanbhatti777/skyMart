import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getAllCategories, getAllProducts, getProductByCategory } from "../api/ProductsApi"
import { useEffect, useState } from "react"


export const useAllProducts = () => {

    const [search, setSearch] = useState("")
    const [debounceSearch, setDebounceSearch] = useState("")
    const [sortItem, setSortItem] = useState("")


    useEffect(() => {
        let timeout = setTimeout(() => {
            setDebounceSearch(search)
        }, 700)
        
        return () => clearTimeout(timeout)
    },[search])

    const { data, isPending, error } = useQuery({
        queryKey: ["products",debounceSearch, sortItem],
        queryFn: () => getAllProducts(debounceSearch, sortItem),
        staleTime: 5 * 60 * 1000
    })
// console.log(data?.products)
    return { data, isPending, error, search, setSearch, sortItem, setSortItem}
}

export const useAllCategories = () => {
    const { data, error } = useQuery({
        queryKey: ["categories"],
        queryFn: getAllCategories,
        staleTime: 5 * 60 * 1000
    })
    return {data, error}
}

export const useProductByCategory = (sortItem) => {
    const [category, setCategory] = useState("")
    
    const { data, isPending, error } = useQuery({
        queryKey: ["productsByCategory", category, sortItem],
        queryFn: () => getProductByCategory(category, sortItem),
        staleTime: 5 * 60 * 1000
    })

    return {category, setCategory, data, isPending, error}
    
}