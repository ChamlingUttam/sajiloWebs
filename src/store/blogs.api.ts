import api from "../api/api"
import { API_ENDPOINTS } from "../api/api-endpoint"


export const getAllBlogs = async ()=>{
    const res = await api.get(`${API_ENDPOINTS.PUBLIC.BLOG}`)

    return res.data.data.data
}

export const getBlogById = async(id:number|string)=>{

    const res = await api.get(`${API_ENDPOINTS.PUBLIC.BLOG_ID(id)}`)
    return res.data.data
 }
