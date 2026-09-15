import { z } from "zod";

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(3, "First name must be at least 2 characters"),

  lastName: z
    .string()
    .min(3, "Last name must be at least 2 characters"),

  phone: z
    .string()
    .min(7, "Please enter a valid phone number"),

  email: z
    .string()
    .email("Please enter a valid email address"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;