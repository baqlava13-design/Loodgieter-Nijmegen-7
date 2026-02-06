import type { ContactForm } from "@shared/schema";

export interface IStorage {
  saveContactForm(data: ContactForm): Promise<void>;
}

export class MemStorage implements IStorage {
  private submissions: ContactForm[] = [];

  async saveContactForm(data: ContactForm): Promise<void> {
    this.submissions.push(data);
    console.log(`Contact form submission from ${data.name} (${data.email})`);
  }
}

export const storage = new MemStorage();
