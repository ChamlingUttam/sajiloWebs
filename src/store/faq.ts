import api from "../api/api"
import { API_ENDPOINTS } from "../api/api-endpoint"

export const getFaq = async()=>{

    const res = await api.get(`${API_ENDPOINTS.PUBLIC.FAQ}`)

    return res.data.data.data

}