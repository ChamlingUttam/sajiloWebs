export const API_ENDPOINTS = {
    PUBLIC:{
        BLOG: `/public/blog`,
        BLOG_ID:(id:number|string) => `/public/blog/${id}`,
        FAQ:`/public/faq`,
        PRICE:`/public/pricing`,
        TEMPLATE:`/public/templates/`
    }
}