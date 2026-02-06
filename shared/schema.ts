import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Naam is verplicht"),
  email: z.string().email("Ongeldig e-mailadres"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(1, "Bericht is verplicht"),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
