import { Template } from "@/app/components/TemplatesSection"
import { template } from "../api/api"
import { API_ENDPOINTS } from "../api/api-endpoint"


export const getAllTemplates = async ():Promise<Template[]>=>{
    const res = await template.get(`${API_ENDPOINTS.PUBLIC.TEMPLATE}`)
    return res.data.results ?? []
}