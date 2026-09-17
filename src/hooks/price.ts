import { useQuery } from "@tanstack/react-query"
import { getAllPrice } from "../store/pricing"


export const usePrice = ()=>{
    return useQuery({
        queryKey:["price"],
        queryFn:getAllPrice
    })
}