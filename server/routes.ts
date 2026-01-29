import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const landingPageContentSchema = z.object({
  heroTitle: z.string(),
  heroSubtitle: z.string(),
  aboutTitle: z.string(),
  aboutDescription: z.string(),
  services: z.array(z.object({
    icon: z.string(),
    title: z.string(),
    description: z.string(),
  })),
  features: z.array(z.object({
    icon: z.string(),
    title: z.string(),
    description: z.string(),
  })),
  contactImage: z.string(),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/content", async (_req, res) => {
    try {
      const content = await storage.getLandingPageContent();
      const validated = landingPageContentSchema.parse(content);
      res.json(validated);
    } catch (error) {
      console.error("Content API error:", error);
      res.status(500).json({ error: "Failed to fetch content" });
    }
  });

  return httpServer;
}
