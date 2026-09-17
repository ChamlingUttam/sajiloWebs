import { useQuery } from "@tanstack/react-query"
import { getFaq } from "../store/faq"


export const useFaq = ()=>{
    return useQuery({
        queryKey:["faqs"],
        queryFn:getFaq
    })
}