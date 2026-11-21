import { z } from "zod";

/** Shared by the client form (React Hook Form) AND the API route. */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80, "Name is too long"),
  email: z.string().trim().min(1, "Please enter your email").email("Please enter a valid email"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long (max 1000 characters)"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
