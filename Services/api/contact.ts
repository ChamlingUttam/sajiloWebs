import api from "@/src/api/api";
import { ContactFormData } from "@/src/schema/contact.schema";

export const submitContactUs = (data: ContactFormData) =>
  api.post("api/v1/public/contact_us", {
    first_name: data.firstName,
    last_name: data.lastName,
    phone_number: data.phone,
    email: data.email,
    message: data.message,
  });