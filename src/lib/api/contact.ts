import { API_ROUTES } from "@/constants/site";
import type { ContactFormValues } from "@/schemas/contact";

export async function sendContactMessage(values: ContactFormValues): Promise<void> {
  const response = await fetch(API_ROUTES.contact, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    throw new Error(`Failed to send message (${response.status})`);
  }
}
