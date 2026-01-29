import type { LandingPageContent, Service, Feature } from "@shared/schema";
import { wordPressPageSchema } from "@shared/schema";
import { z } from "zod";

const WORDPRESS_BASE_URL = "https://www.loodgieternijmegen.net";

function extractTextFromHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .trim();
}

function parseWordPressContent(content: string): LandingPageContent {
  const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  const heroTitle = h1Match ? extractTextFromHtml(h1Match[1]) : 
    "Expert Loodgieterservice in Nijmegen en Omgeving";
  
  const h1Pattern = /<h1[^>]*>[^<]+<\/h1>/i;
  const afterH1 = content.split(h1Pattern)[1] || "";
  const firstParagraphMatch = afterH1.match(/<p[^>]*>([^<]+)<\/p>/i);
  const heroSubtitle = firstParagraphMatch ? extractTextFromHtml(firstParagraphMatch[1]) :
    "Met 30 jaar ervaring bieden wij snelle en betrouwbare oplossingen voor lekkages, verwarmingsproblemen en verstoppingen.";

  const h2Matches = content.match(/<h2[^>]*>([^<]*Snelle en Betrouwbare[^<]*)<\/h2>/i);
  const aboutTitle = h2Matches ? extractTextFromHtml(h2Matches[1]) : 
    "Snelle en Betrouwbare Loodgietersservice in Nijmegen";
  
  const aboutDescMatch = content.match(/Loodgieter Nijmegen Spoed staat voor snelle, deskundige service[^<]*/i);
  const aboutDescription = aboutDescMatch ? extractTextFromHtml(aboutDescMatch[0]) :
    "Loodgieter Nijmegen Spoed staat voor snelle, deskundige service met 30 jaar ervaring. Wij streven ernaar om elk loodgietersprobleem vakkundig en efficiënt op te lossen, zodat u snel weer zorgeloos kunt genieten van uw woning.";

  const contactImageMatch = content.match(/src="([^"]*e44d4acab[^"]*\.jpg)"/i);
  const contactImage = contactImageMatch ? contactImageMatch[1] : 
    `${WORDPRESS_BASE_URL}/wp-content/uploads/2026/01/e44d4acab43039f35801b02933578ea9c43e4baf.jpg`;

  const services: Service[] = [
    {
      icon: "droplet",
      title: "Lekkage oplossen",
      description: "Wij verhelpen lekkages snel en efficiënt om verdere schade te voorkomen."
    },
    {
      icon: "thermometer",
      title: "CV-ketel onderhoud",
      description: "Professioneel onderhoud en reparaties van uw verwarmingssysteem voor optimaal comfort."
    },
    {
      icon: "pipette",
      title: "Verstoppingen verhelpen",
      description: "Snelle en grondige ontstoppingsservice voor afvoeren en rioleringen."
    },
    {
      icon: "clock",
      title: "Spoedservice",
      description: "24/7 beschikbaar voor noodsituaties met directe en deskundige hulp."
    }
  ];

  const features: Feature[] = [
    {
      icon: "zap",
      title: "Spoedservice 24/7",
      description: "Onze specialisten zijn direct beschikbaar voor dringende loodgietersproblemen, dag en nacht."
    },
    {
      icon: "flame",
      title: "Verwarming & CV Onderhoud",
      description: "Wij zorgen dat uw verwarmingssysteem efficiënt en storingsvrij blijft werken."
    },
    {
      icon: "search",
      title: "Lekkage Opsporing",
      description: "Professionele detectie en reparatie van lekkages om verdere schade te voorkomen."
    }
  ];

  return {
    heroTitle,
    heroSubtitle,
    aboutTitle,
    aboutDescription,
    services,
    features,
    contactImage
  };
}

export interface IStorage {
  getLandingPageContent(): Promise<LandingPageContent>;
}

export class WordPressStorage implements IStorage {
  private cache: LandingPageContent | null = null;
  private cacheTime: number = 0;
  private readonly cacheDuration = 5 * 60 * 1000;

  async getLandingPageContent(): Promise<LandingPageContent> {
    if (this.cache && Date.now() - this.cacheTime < this.cacheDuration) {
      return this.cache;
    }

    try {
      const response = await fetch(`${WORDPRESS_BASE_URL}/wp-json/wp/v2/pages?slug=startpagina`);
      
      if (!response.ok) {
        throw new Error(`WordPress API error: ${response.status}`);
      }

      const data = await response.json();
      
      const pagesSchema = z.array(wordPressPageSchema);
      const pages = pagesSchema.parse(data);
      
      if (pages.length === 0) {
        throw new Error("Homepage not found in WordPress");
      }

      const homepage = pages[0];
      const content = parseWordPressContent(homepage.content.rendered);
      
      this.cache = content;
      this.cacheTime = Date.now();
      
      return content;
    } catch (error) {
      console.error("Failed to fetch from WordPress:", error);
      
      if (this.cache) {
        return this.cache;
      }
      
      return this.getFallbackContent();
    }
  }

  private getFallbackContent(): LandingPageContent {
    return {
      heroTitle: "Expert Loodgieterservice in Nijmegen en Omgeving",
      heroSubtitle: "Met 30 jaar ervaring bieden wij snelle en betrouwbare oplossingen voor lekkages, verwarmingsproblemen en verstoppingen. Onze spoedservice staat dag en nacht voor u klaar met hoogwaardig vakwerk.",
      aboutTitle: "Snelle en Betrouwbare Loodgietersservice in Nijmegen",
      aboutDescription: "Loodgieter Nijmegen Spoed staat voor snelle, deskundige service met 30 jaar ervaring. Wij streven ernaar om elk loodgietersprobleem vakkundig en efficiënt op te lossen, zodat u snel weer zorgeloos kunt genieten van uw woning.",
      services: [
        { icon: "droplet", title: "Lekkage oplossen", description: "Wij verhelpen lekkages snel en efficiënt om verdere schade te voorkomen." },
        { icon: "thermometer", title: "CV-ketel onderhoud", description: "Professioneel onderhoud en reparaties van uw verwarmingssysteem voor optimaal comfort." },
        { icon: "pipette", title: "Verstoppingen verhelpen", description: "Snelle en grondige ontstoppingsservice voor afvoeren en rioleringen." },
        { icon: "clock", title: "Spoedservice", description: "24/7 beschikbaar voor noodsituaties met directe en deskundige hulp." }
      ],
      features: [
        { icon: "zap", title: "Spoedservice 24/7", description: "Onze specialisten zijn direct beschikbaar voor dringende loodgietersproblemen, dag en nacht." },
        { icon: "flame", title: "Verwarming & CV Onderhoud", description: "Wij zorgen dat uw verwarmingssysteem efficiënt en storingsvrij blijft werken." },
        { icon: "search", title: "Lekkage Opsporing", description: "Professionele detectie en reparatie van lekkages om verdere schade te voorkomen." }
      ],
      contactImage: `${WORDPRESS_BASE_URL}/wp-content/uploads/2026/01/e44d4acab43039f35801b02933578ea9c43e4baf.jpg`
    };
  }
}

export const storage = new WordPressStorage();
