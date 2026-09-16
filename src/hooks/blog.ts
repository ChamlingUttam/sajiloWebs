import { useQuery } from "@tanstack/react-query"
import { getAllBlogs } from "../store/blogs.api"


export const useBlog = ()=>{
    return useQuery({
        queryKey:["Blogs"],
        queryFn:getAllBlogs,
    })
}