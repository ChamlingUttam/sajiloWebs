import { useQuery } from "@tanstack/react-query"
import { getAllBlogs, getBlogById } from "../store/blogs.api"


export const useBlog = ()=>{
    return useQuery({
        queryKey:["Blogs"],
        queryFn:getAllBlogs,
    })
}

export const useBlogById = (id:string|number)=>{
    return useQuery({
        queryKey:["BlogsId",id],
        queryFn:()=>getBlogById(id)
    })
}