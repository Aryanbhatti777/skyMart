import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getAllProducts } from "../api/ProductsApi"


export const useAllProducts = () => {

    const { data, isPending, error } = useQuery({
        queryKey: ["products"],
        queryFn: getAllProducts,
        staleTime: 5 * 60 * 1000
    })

    return { data, isPending, error}
}
