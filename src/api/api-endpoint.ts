export const API_ENDPOINTS = {
    PUBLIC:{
        BLOG: `api/v1/public/blog`,
        BLOG_ID:(id:number|string) => `api/v1/public/blog/${id}`,
        FAQ:`api/v1/public/faq`,
        PRICE:`api/v1/public/pricing`,
        TEMPLATE:`api/v1/public/templates/`
    }
}