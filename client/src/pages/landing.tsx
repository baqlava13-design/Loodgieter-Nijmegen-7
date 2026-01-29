import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import type { LandingPageContent } from "@shared/schema";
import { 
  Droplet, 
  Thermometer, 
  Pipette, 
  Clock, 
  Zap, 
  Flame, 
  Search,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Shield,
  Award,
  Users
} from "lucide-react";

const iconMap: Record<string, typeof Droplet> = {
  droplet: Droplet,
  thermometer: Thermometer,
  pipette: Pipette,
  clock: Clock,
  zap: Zap,
  flame: Flame,
  search: Search,
};

function HeroSection({ content }: { content: LandingPageContent }) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/10">
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
            {content.heroTitle}
          </h1>
          
          <p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            data-testid="text-hero-subtitle"
          >
            {content.heroSubtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2 min-w-[200px]" data-testid="button-contact">
              <Phone className="w-5 h-5" />
              Bel Direct
            </Button>
            <Button size="lg" variant="outline" className="gap-2 min-w-[200px]" data-testid="button-services">
              Onze Diensten
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-border/50">
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
  );
}

function AboutSection({ content }: { content: LandingPageContent }) {
  return (
    <section className="py-20 sm:py-28 bg-card" id="over">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="text-3xl sm:text-4xl font-bold mb-6"
            data-testid="text-about-title"
          >
            {content.aboutTitle}
          </h2>
          <p 
            className="text-lg text-muted-foreground leading-relaxed"
            data-testid="text-about-description"
          >
            {content.aboutDescription}
          </p>
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ content }: { content: LandingPageContent }) {
  return (
    <section className="py-20 sm:py-28" id="diensten">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Loodgieter Nijmegen Spoed met 30 jaar ervaring
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wij bieden snelle en betrouwbare loodgietersdiensten, van lekkage herstel tot cv-ketel reparatie en ontstoppingen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.services.map((service, index) => {
            const Icon = iconMap[service.icon] || Droplet;
            return (
              <Card 
                key={index} 
                className="p-6 text-center hover-elevate transition-all duration-300"
                data-testid={`card-service-${index}`}
              >
                <div className="w-14 h-14 mx-auto mb-5 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection({ content }: { content: LandingPageContent }) {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-card to-background" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Betrouwbare Loodgietersdienst in Nijmegen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Met meer dan 30 jaar ervaring bieden wij snelle en vakkundige oplossingen voor lekkages, cv-werk en verstoppingen in Nijmegen en omgeving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Zap;
            return (
              <div 
                key={index}
                className="relative p-8 rounded-2xl bg-card border border-border/50 hover-elevate transition-all duration-300"
                data-testid={`card-feature-${index}`}
              >
                <div className="absolute top-0 left-8 w-20 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
                <div className="w-12 h-12 mb-5 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ content }: { content: LandingPageContent }) {
  return (
    <section className="py-20 sm:py-28 bg-muted/30" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Loodgieter Nijmegen Spoed: Direct en Deskundig
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plan eenvoudig uw spoedklus met ons, vermeld uw probleem en wij zorgen voor snelle, professionele hulp zonder vertraging.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <Card className="p-8">
            <form className="space-y-6" data-testid="form-contact">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Naam <span className="text-destructive">*</span>
                </label>
                <Input 
                  id="name" 
                  placeholder="Uw naam" 
                  required 
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-mail <span className="text-destructive">*</span>
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="uw@email.nl" 
                  required 
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Onderwerp
                </label>
                <Input 
                  id="subject" 
                  placeholder="Waar kunnen wij u mee helpen?" 
                  data-testid="input-subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Bericht <span className="text-destructive">*</span>
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Beschrijf uw probleem..." 
                  rows={5}
                  required 
                  data-testid="input-message"
                />
              </div>
              
              <Button type="submit" className="w-full" size="lg" data-testid="button-submit">
                Verzend
              </Button>
            </form>
          </Card>
          
          <div className="space-y-8">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img 
                src={content.contactImage}
                alt="Loodgieter aan het werk"
                className="w-full h-full object-cover"
                data-testid="img-contact"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Bel ons direct</p>
                  <p className="font-semibold">024-123 4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="font-semibold">info@loodgieternijmegen.net</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Locatie</p>
                  <p className="font-semibold">Nijmegen en omgeving</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <a href="/" className="flex items-center gap-2" data-testid="link-logo">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Droplet className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg hidden sm:block">Loodgieter Nijmegen</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#over" className="text-sm font-medium text-muted-foreground hover:opacity-70 transition-opacity" data-testid="link-about">
              Over Ons
            </a>
            <a href="#diensten" className="text-sm font-medium text-muted-foreground hover:opacity-70 transition-opacity" data-testid="link-services">
              Diensten
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:opacity-70 transition-opacity" data-testid="link-contact">
              Contact
            </a>
          </nav>
          
          <Button size="sm" className="gap-2" data-testid="button-call">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Bel Nu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Droplet className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold">Loodgieter Nijmegen Spoed</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            30+ jaar ervaring in Nijmegen en omgeving
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>24/7 Beschikbaar</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function LoadingSkeleton() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Skeleton className="h-10 w-48" />
            <Skeleton className="h-9 w-24" />
          </div>
        </div>
      </header>
      
      <section className="min-h-[90vh] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <Skeleton className="h-8 w-48 mx-auto mb-8" />
          <Skeleton className="h-16 w-full max-w-2xl mx-auto mb-6" />
          <Skeleton className="h-6 w-full max-w-xl mx-auto mb-10" />
          <div className="flex justify-center gap-4">
            <Skeleton className="h-12 w-40" />
            <Skeleton className="h-12 w-40" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default function LandingPage() {
  const { data: content, isLoading, error } = useQuery<LandingPageContent>({
    queryKey: ["/api/content"],
  });

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (error || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Er is iets misgegaan</h1>
          <p className="text-muted-foreground">Probeer de pagina opnieuw te laden.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection content={content} />
        <AboutSection content={content} />
        <ServicesSection content={content} />
        <FeaturesSection content={content} />
        <ContactSection content={content} />
      </main>
      <Footer />
    </div>
  );
}
