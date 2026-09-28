import { useQuery } from "@tanstack/react-query"
import { getAllTemplates } from "../store/templates"


export const useTemplates =()=>{
    return useQuery({
        queryKey:["template"],
        queryFn:getAllTemplates,
    })
}