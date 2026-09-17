import api from "../api/api"
import { API_ENDPOINTS } from "../api/api-endpoint"

export const getAllPrice = async()=>{
    const res = await api.get(`${API_ENDPOINTS.PUBLIC.PRICE}`)

    return res.data.data.data
}