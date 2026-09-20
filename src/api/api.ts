import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SAJILO_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;






export const template = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TEMPLATE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
