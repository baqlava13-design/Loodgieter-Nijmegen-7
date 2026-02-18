import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { 
  Droplet, 
  Thermometer, 
  Wrench, 
  Clock, 
  Phone,
  ChevronRight,
  ShowerHead,
  Flame,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/images/hero-diensten.png";
import bgToolsPattern from "@/assets/images/bg-tools-pattern.png";

const DETAILED_SERVICES = [
  {
    icon: Droplet,
    title: "Lekkage Reparatie en Vervanging in Nijmegen en Arnhem",
    shortTitle: "Lekkage Reparatie",
    description: "Een lekkage kan grote schade veroorzaken aan uw woning als deze niet snel wordt verholpen. Onze ervaren loodgieters in Nijmegen en Arnhem repareren en vervangen alle soorten lekkende leidingen en kranen.",
    details: [
      "Lekkende kranen en leidingen repareren",
      "Waterleidingen vervangen en vernieuwen",
      "Lekkage aan cv-leidingen en radiatoren",
      "Gasleidingen repareren en vervangen",
      "Leidingwerk vernieuwen en renoveren",
      "Noodservice bij wateroverlast"
    ],
    cta: "Heeft u een lekkage? Bel direct voor snelle hulp in Nijmegen en omgeving."
  },
  {
    icon: Thermometer,
    title: "CV-ketel Reparatie en Vervanging",
    shortTitle: "CV-ketel Reparatie",
    description: "Onze loodgieters in de regio Arnhem-Nijmegen verzorgen reparaties aan uw cv-ketel, vervangen onderdelen en plaatsen nieuwe ketels. Wij werken aan alle merken cv-ketels.",
    details: [
      "Cv-ketel onderdelen vervangen",
      "Storingen en foutcodes verhelpen",
      "Cv-ketel vervangen en installeren (renovatie)",
      "Radiatoren bijvullen en ontluchten",
      "Cv-leidingen repareren en vervangen",
      "Rookgasafvoer plaatsen en repareren"
    ],
    cta: "Problemen met uw cv-ketel? Bel ons voor snelle reparatie of vervanging."
  },
  {
    icon: Wrench,
    title: "Verstoppingen Verhelpen",
    shortTitle: "Ontstopping",
    description: "Een verstopte afvoer of riool is hinderlijk en kan tot grotere problemen leiden. Onze loodgieters in Nijmegen en Arnhem verhelpen verstoppingen op elke plek in en om het huis.",
    details: [
      "Afvoer en gootsteen ontstoppen",
      "Toilet en badkamer verstoppingen",
      "Riool ontstoppen",
      "Regenpijp en dakgoot verstoppingen",
      "Buitenriolering ontstoppen",
      "Alle locaties in en om het huis"
    ],
    cta: "Last van een verstopping? Onze loodgieters zijn snel ter plaatse in de regio Arnhem-Nijmegen."
  },
  {
    icon: Clock,
    title: "24/7 Spoed Loodgieter Nijmegen",
    shortTitle: "Spoedservice",
    description: "Bij een loodgietersnoodgeval kunt u ons dag en nacht bereiken. Onze spoed loodgieters zijn binnen 30 minuten ter plaatse in Nijmegen, Arnhem en omliggende plaatsen.",
    details: [
      "Dag en nacht bereikbaar, 7 dagen per week",
      "Gemiddeld binnen 30 minuten ter plaatse",
      "Gesprongen waterleidingen",
      "Gaslekkages (bel eerst 0800-9009)",
      "Overstromingen en wateroverlast"
    ],
    cta: "Spoed? Bel nu direct: 024-123 4567. Wij zijn 24/7 bereikbaar."
  },
  {
    icon: ShowerHead,
    title: "Sanitair Reparatie en Vervanging",
    shortTitle: "Sanitair",
    description: "Onze loodgieters verzorgen reparaties en vervanging van sanitair voor woningen en bedrijfspanden in de regio Arnhem-Nijmegen. Van toilet tot keuken en douche.",
    details: [
      "Toilet reparatie en vervanging",
      "Douche reparatie en aansluiting",
      "Keuken kranen en aansluitingen vervangen",
      "Wasmachine en vaatwasser aansluiting",
      "Dakdoorvoeren plaatsen en repareren",
      "Rookgasafvoer installatie en reparatie"
    ],
    cta: "Sanitair reparatie of vervanging nodig? Vraag een vrijblijvende offerte aan."
  }
];

export default function DienstenPage() {
  const serviceSchemas = DETAILED_SERVICES.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.shortTitle,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Loodgieter Nijmegen Spoed"
    },
    "areaServed": [
      { "@type": "City", "name": "Nijmegen" },
      { "@type": "City", "name": "Arnhem" }
    ]
  }));

  return (
    <Layout>
      <SEO
        title="Loodgietersdiensten Nijmegen & Arnhem | Lekkage, CV-ketel, Ontstopping"
        description="Alle loodgietersdiensten in Nijmegen en Arnhem: lekkage reparatie, CV-ketel reparatie en vervanging, verstoppingen verhelpen, sanitair en 24/7 spoedservice. 30+ jaar ervaring. Bel: 024-123 4567."
        canonical="/diensten"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Diensten", url: "/diensten" }
        ]}
        schemaMarkup={serviceSchemas}
      />

      <section className="relative min-h-[50vh] flex items-center">
        <img
          src={heroImage}
          alt="Alle loodgietersdiensten Nijmegen - professionele loodgieter voert reparatie uit aan waterleiding in Arnhem-Nijmegen regio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <nav className="text-sm text-white/70 mb-6" aria-label="Breadcrumb" data-testid="breadcrumb">
              <Link href="/" className="hover:text-white/90">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Diensten</span>
            </nav>
            
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-white drop-shadow-lg" data-testid="text-diensten-title">
              Loodgietersdiensten in Nijmegen en Arnhem
            </h1>
            <p className="text-lg text-white/85 leading-relaxed">
              Wij bieden een compleet pakket professionele loodgietersdiensten voor particulieren en bedrijven 
              in de regio Arnhem-Nijmegen. Van spoedklussen tot reparaties en vervangingen - altijd vakkundig en betrouwbaar.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{ backgroundImage: `url(${bgToolsPattern})`, backgroundSize: '400px 400px', backgroundRepeat: 'repeat' }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-16">
            {DETAILED_SERVICES.map((service, index) => (
              <div 
                key={index}
                id={service.shortTitle.toLowerCase().replace(/\s+/g, '-')}
                className="scroll-mt-20"
              >
                <Card className="p-0 overflow-visible" data-testid={`card-detailed-service-${index}`}>
                  <div className="p-8 sm:p-10">
                    <div className="flex items-start gap-5 mb-6 flex-wrap">
                      <div className="w-14 h-14 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3">{service.title}</h2>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 border-t border-border/50">
                      <p className="text-sm text-muted-foreground flex-1">{service.cta}</p>
                      <div className="flex gap-2">
                        <a href="tel:+31241234567">
                          <Button size="sm" className="gap-2">
                            <Phone className="w-4 h-4" />
                            Bel Nu
                          </Button>
                        </a>
                        <Link href="/contact">
                          <Button size="sm" variant="outline" className="gap-2">
                            Offerte
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Veelgestelde Vragen over Loodgietersdiensten
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "Hoe snel kan een loodgieter ter plaatse zijn in Nijmegen?",
                  a: "Bij spoedgevallen zijn onze loodgieters gemiddeld binnen 30 minuten ter plaatse in Nijmegen en directe omgeving. Voor Arnhem en verder gelegen plaatsen is dit doorgaans binnen 45 minuten."
                },
                {
                  q: "Wat kost een loodgieter in Nijmegen?",
                  a: "De kosten zijn afhankelijk van het type werkzaamheden. Wij werken met transparante tarieven en geven vooraf een prijsindicatie. Er zijn geen verborgen kosten. Neem contact op voor een vrijblijvende offerte."
                },
                {
                  q: "Werken jullie ook in het weekend en 's avonds?",
                  a: "Ja, onze spoedservice is 24/7 beschikbaar, ook in het weekend en op feestdagen."
                },
                {
                  q: "Welke gebieden bedienen jullie naast Nijmegen?",
                  a: "Wij zijn actief in de gehele regio Arnhem-Nijmegen, waaronder Elst, Bemmel, Wijchen, Druten, Beuningen, Malden, Groesbeek, Lent, Huissen, Duiven, Westervoort, Velp en Oosterbeek."
                }
              ].map((faq, index) => (
                <Card key={index} className="p-6" data-testid={`card-faq-${index}`}>
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Hulp Nodig van een Vakkundige Loodgieter?
            </h2>
            <p className="text-muted-foreground mb-8">
              Bel ons direct of vraag online een offerte aan. Onze loodgieters staan 24/7 klaar 
              voor particulieren en bedrijven in Nijmegen, Arnhem en omgeving.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+31241234567" data-testid="button-diensten-call">
                <Button size="lg" className="gap-2">
                  <Phone className="w-5 h-5" />
                  024-123 4567
                </Button>
              </a>
              <Link href="/contact" data-testid="button-diensten-contact">
                <Button size="lg" variant="outline" className="gap-2">
                  Offerte Aanvragen
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
