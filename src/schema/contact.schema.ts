import { z } from "zod";

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name must be under 50 characters")
    .regex(/^[A-Za-z\s]+$/, "First name must not contain numbers"),

  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name must be under 50 characters")
    .regex(/^[A-Za-z\s]+$/, "Last name must not contain numbers"),

  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[0-9]+$/, "Phone number must contain digits only")
    .length(10, "Phone number must be exactly 10 digits"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be under 1000 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;