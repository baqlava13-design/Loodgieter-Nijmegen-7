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
  Shield,
  Award,
  Users,
  CheckCircle,
  MapPin,
  Star
} from "lucide-react";

const SERVICES = [
  {
    icon: Droplet,
    title: "Lekkage Oplossen",
    description: "Snelle opsporing en reparatie van lekkages aan leidingen, kranen en verwarmingssystemen in Nijmegen en Arnhem.",
    slug: "lekkage-oplossen"
  },
  {
    icon: Thermometer,
    title: "CV-ketel Onderhoud",
    description: "Professioneel onderhoud, reparatie en installatie van cv-ketels. Voorkom storingen en bespaar op energiekosten.",
    slug: "cv-ketel-onderhoud"
  },
  {
    icon: Wrench,
    title: "Verstoppingen Verhelpen",
    description: "Grondige ontstopping van afvoeren, toiletten en rioleringen met moderne apparatuur en technieken.",
    slug: "verstoppingen-verhelpen"
  },
  {
    icon: Clock,
    title: "24/7 Spoedservice",
    description: "Direct een loodgieter nodig? Wij zijn dag en nacht bereikbaar voor spoedreparaties in de regio Arnhem-Nijmegen.",
    slug: "spoedservice"
  }
];

const SERVICE_AREAS = [
  "Nijmegen", "Arnhem", "Elst", "Bemmel", "Wijchen", 
  "Druten", "Beuningen", "Malden", "Groesbeek", "Lent",
  "Huissen", "Duiven", "Westervoort", "Velp", "Oosterbeek"
];

const TRUST_POINTS = [
  "Gecertificeerd en verzekerd",
  "Transparante prijzen, geen verrassingen",
  "Binnen 30 minuten ter plaatse bij spoed",
  "Gratis telefonisch advies",
  "Garantie op uitgevoerd werk",
  "Schoon en netjes werken"
];

export default function HomePage() {
  return (
    <Layout>
      <SEO
        title="Loodgieter Nijmegen Spoed | 24/7 Spoedservice | 30+ Jaar Ervaring"
        description="Professionele loodgieter in Nijmegen en Arnhem. 24/7 spoedservice voor lekkages, CV-ketel onderhoud en verstoppingen. 30+ jaar ervaring. Bel direct: 024-123 4567."
        canonical="/"
        breadcrumbs={[
          { name: "Home", url: "/" }
        ]}
      />

      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Clock className="w-4 h-4" />
              <span>24/7 Spoedservice Beschikbaar</span>
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              data-testid="text-hero-title"
            >
              Loodgieter Nijmegen &amp; Arnhem - Snel ter Plaatse
            </h1>
            
            <p 
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
              data-testid="text-hero-subtitle"
            >
              Al meer dan 30 jaar uw betrouwbare loodgieter in de regio Arnhem-Nijmegen. 
              Spoedservice, lekkage reparatie, CV-ketel onderhoud en ontstoppingen. 
              Vakkundig en snel geholpen.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+31241234567" data-testid="button-hero-call">
                <Button size="lg" className="gap-2 min-w-[200px]">
                  <Phone className="w-5 h-5" />
                  Bel Direct: 024-123 4567
                </Button>
              </a>
              <Link href="/diensten" data-testid="button-hero-services">
                <Button size="lg" variant="outline" className="gap-2 min-w-[200px]">
                  Bekijk Onze Diensten
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-border/50 flex-wrap">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Gecertificeerd</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">30+ Jaar Ervaring</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">1000+ Klanten</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-card" id="over">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-testid="text-about-title">
              Betrouwbare Loodgieter in Nijmegen en Arnhem
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-description">
              Loodgieter Nijmegen Spoed is al meer dan 30 jaar actief in de regio Arnhem-Nijmegen. 
              Wij zijn gespecialiseerd in het snel en vakkundig oplossen van loodgietersproblemen. 
              Of het nu gaat om een lekkende kraan, een kapotte CV-ketel of een verstopte afvoer: 
              onze ervaren monteurs staan dag en nacht voor u klaar. Wij garanderen transparante prijzen, 
              schoon werk en een snelle reactietijd.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28" id="diensten">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Onze Loodgietersdiensten in Arnhem-Nijmegen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Van spoedklussen tot gepland onderhoud: wij bieden een compleet pakket loodgietersdiensten voor particulieren en bedrijven.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => (
              <Link href="/diensten" key={index}>
                <Card 
                  className="p-6 text-center hover-elevate transition-all duration-300 h-full cursor-pointer"
                  data-testid={`card-service-${index}`}
                >
                  <div className="w-14 h-14 mx-auto mb-5 bg-primary/10 rounded-md flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/diensten" data-testid="link-all-services">
              <Button variant="outline" className="gap-2">
                Alle diensten bekijken
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Waarom Kiezen voor Loodgieter Nijmegen Spoed?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Wij onderscheiden ons door onze snelle reactietijd, transparante werkwijze en jarenlange ervaring. 
                Onze klanten in Nijmegen, Arnhem en omgeving vertrouwen op onze vakkennis en betrouwbaarheid.
              </p>
              <ul className="space-y-4">
                {TRUST_POINTS.map((point, index) => (
                  <li key={index} className="flex items-start gap-3" data-testid={`text-trust-${index}`}>
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-1">30+</p>
                <p className="text-sm text-muted-foreground">Jaar Ervaring</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-1">24/7</p>
                <p className="text-sm text-muted-foreground">Beschikbaar</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-1">1000+</p>
                <p className="text-sm text-muted-foreground">Tevreden Klanten</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-1">30 min</p>
                <p className="text-sm text-muted-foreground">Reactietijd Spoed</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ons Werkgebied: Regio Arnhem-Nijmegen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wij bedienen de gehele regio Arnhem-Nijmegen en omliggende gemeenten in Gelderland. 
              Snelle service, ook in uw plaats.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {SERVICE_AREAS.map((area) => (
                <span 
                  key={area}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-card border border-border/50 rounded-md text-sm font-medium"
                  data-testid={`badge-service-area-${area.toLowerCase()}`}
                >
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  {area}
                </span>
              ))}
            </div>
            
            <p className="text-center text-sm text-muted-foreground mt-6">
              Uw plaats niet gevonden? <Link href="/contact" className="text-primary hover:underline">Neem contact op</Link> - 
              wij helpen u graag als wij in uw regio werkzaam zijn.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Wat Onze Klanten Zeggen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lees de ervaringen van klanten in Nijmegen en Arnhem over onze loodgietersdiensten.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Jan de Vries",
                location: "Nijmegen",
                text: "Binnen een half uur was de loodgieter er. De lekkage was snel verholpen en alles netjes achtergelaten. Zeer tevreden!",
                rating: 5
              },
              {
                name: "Maria Jansen",
                location: "Arnhem",
                text: "Uitstekende service voor ons CV-ketel onderhoud. Duidelijke uitleg over wat er gedaan is en een eerlijke prijs.",
                rating: 5
              },
              {
                name: "Peter Bakker",
                location: "Wijchen",
                text: "Op zondagavond een verstopt riool. Binnen 45 minuten was het probleem opgelost. Vakkundige en vriendelijke monteur.",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="p-6" data-testid={`card-review-${index}`}>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{review.text}"</p>
                <div>
                  <p className="text-sm font-semibold">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Loodgietersprobleem? Bel Nu voor Directe Hulp
            </h2>
            <p className="text-muted-foreground mb-8">
              Onze vakmensen staan 24/7 klaar om u te helpen in Nijmegen, Arnhem en omgeving. 
              Bel direct of vraag online een offerte aan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+31241234567" data-testid="button-cta-call">
                <Button size="lg" className="gap-2">
                  <Phone className="w-5 h-5" />
                  024-123 4567
                </Button>
              </a>
              <Link href="/contact" data-testid="button-cta-contact">
                <Button size="lg" variant="outline" className="gap-2">
                  Contact Opnemen
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
