import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactFormSchema } from "@shared/schema";
import { storage } from "./storage";

const SITE_URL = "https://loodgieternijmegen.net";

function generateSitemap(): string {
  const pages = [
    { loc: "/", priority: "1.0", changefreq: "weekly" },
    { loc: "/diensten", priority: "0.9", changefreq: "monthly" },
    { loc: "/contact", priority: "0.8", changefreq: "monthly" },
  ];

  const today = new Date().toISOString().split("T")[0];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/sitemap.xml", (_req, res) => {
    res.set("Content-Type", "application/xml");
    res.send(generateSitemap());
  });

  app.get("/robots.txt", (_req, res) => {
    res.set("Content-Type", "text/plain");
    res.send(`User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`);
  });

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
