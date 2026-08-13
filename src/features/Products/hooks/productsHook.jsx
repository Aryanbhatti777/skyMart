import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getAllCategories, getAllProducts } from "../api/ProductsApi"
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
    console.log("hook called")
    const { data, isPending, error } = useQuery({
        queryKey: ["products", debounceSearch],
        queryFn: () => getAllProducts(debounceSearch),
        staleTime: 5 * 60 * 1000
    })
    const length = data?.products.length

    return { data, isPending, error, search, setSearch, length}
}

export const useAllCategories = () => {
    const { data, error } = useQuery({
        queryKey: ["categories"],
        queryFn: getAllCategories,
        staleTime: 5 * 60 * 1000
    })
    return {data, error}
}