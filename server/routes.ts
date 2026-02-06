import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactFormSchema } from "@shared/schema";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);
      await storage.saveContactForm(data);
      res.json({ success: true, message: "Bericht ontvangen" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ error: "Ongeldige gegevens" });
    }
  });

  return httpServer;
}
