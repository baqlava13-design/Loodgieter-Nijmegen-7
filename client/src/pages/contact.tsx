import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  Send
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactForm } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import heroContactImage from "@/assets/images/hero-contact.png";

const SERVICE_AREAS_DETAILED = [
  { name: "Nijmegen", distance: "Binnen 15 min" },
  { name: "Arnhem", distance: "Binnen 25 min" },
  { name: "Elst", distance: "Binnen 15 min" },
  { name: "Bemmel", distance: "Binnen 20 min" },
  { name: "Wijchen", distance: "Binnen 15 min" },
  { name: "Druten", distance: "Binnen 20 min" },
  { name: "Beuningen", distance: "Binnen 15 min" },
  { name: "Malden", distance: "Binnen 15 min" },
  { name: "Groesbeek", distance: "Binnen 20 min" },
  { name: "Lent", distance: "Binnen 10 min" },
  { name: "Huissen", distance: "Binnen 20 min" },
  { name: "Duiven", distance: "Binnen 25 min" },
  { name: "Westervoort", distance: "Binnen 25 min" },
  { name: "Velp", distance: "Binnen 30 min" },
  { name: "Oosterbeek", distance: "Binnen 30 min" },
];

export default function ContactPage() {
  const { toast } = useToast();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Bericht verzonden",
        description: "Wij nemen zo snel mogelijk contact met u op.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Er is iets misgegaan",
        description: "Probeer het opnieuw of bel ons direct.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactForm) => {
    mutation.mutate(data);
  };

  return (
    <Layout>
      <SEO
        title="Contact Loodgieter Nijmegen | Bel 024-123 4567 | 24/7 Bereikbaar"
        description="Neem contact op met Loodgieter Nijmegen Spoed. Bel 024-123 4567 voor directe hulp. 24/7 bereikbaar voor spoedklussen in Nijmegen, Arnhem en omgeving. Gratis offerte aanvragen."
        canonical="/contact"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" }
        ]}
      />

      <section className="relative min-h-[50vh] flex items-center">
        <img
          src={heroContactImage}
          alt="Loodgietersbusje klaar voor spoedservice in Nijmegen"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <nav className="text-sm text-white/70 mb-6" aria-label="Breadcrumb" data-testid="breadcrumb-contact">
              <Link href="/" className="hover:text-white/90">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Contact</span>
            </nav>
            
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-white drop-shadow-lg" data-testid="text-contact-title">
              Contact Opnemen met Loodgieter Nijmegen
            </h1>
            <p className="text-lg text-white/85 leading-relaxed">
              Heeft u een loodgietersprobleem of wilt u een offerte aanvragen? 
              Bel ons direct of vul het contactformulier in. Wij reageren binnen 30 minuten.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold mb-6">Stuur Ons een Bericht</h2>
              <Card className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Naam <span className="text-destructive">*</span></FormLabel>
                            <FormControl>
                              <Input placeholder="Uw volledige naam" {...field} data-testid="input-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefoonnummer</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="06-12345678" {...field} data-testid="input-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-mailadres <span className="text-destructive">*</span></FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="uw@email.nl" {...field} data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Type probleem</FormLabel>
                          <FormControl>
                            <Input placeholder="Bijv. lekkage, verstopping, cv-ketel storing" {...field} data-testid="input-subject" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Beschrijving <span className="text-destructive">*</span></FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Beschrijf uw probleem zo gedetailleerd mogelijk. Vermeld uw adres en of het om een spoedgeval gaat." 
                              rows={5}
                              {...field}
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full gap-2" 
                      size="lg" 
                      disabled={mutation.isPending}
                      data-testid="button-submit"
                    >
                      <Send className="w-4 h-4" />
                      {mutation.isPending ? "Verzenden..." : "Bericht Verzenden"}
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      Wij reageren doorgaans binnen 30 minuten tijdens werkuren. 
                      Voor spoed: bel direct <a href="tel:+31241234567" className="text-primary hover:underline">024-123 4567</a>.
                    </p>
                  </form>
                </Form>
              </Card>
            </div>
            
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold mb-6">Direct Contact</h2>
              
              <Card className="p-6" data-testid="card-contact-phone">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Bel Ons Direct</h3>
                    <a href="tel:+31241234567" className="text-lg font-bold text-primary hover:underline" data-testid="link-contact-phone">
                      024-123 4567
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">24/7 bereikbaar voor spoedgevallen</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6" data-testid="card-contact-email">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">E-mail</h3>
                    <a href="mailto:info@loodgieternijmegen.net" className="text-primary hover:underline" data-testid="link-contact-email">
                      info@loodgieternijmegen.net
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Reactie binnen 2 uur op werkdagen</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6" data-testid="card-contact-location">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Werkgebied</h3>
                    <p className="text-sm">Regio Arnhem-Nijmegen</p>
                    <p className="text-sm text-muted-foreground mt-1">Gelderland, Nederland</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6" data-testid="card-contact-hours">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Openingstijden</h3>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between gap-4">
                        <span>Spoedservice</span>
                        <span className="font-medium text-primary">24/7</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground">Ma - Vr</span>
                        <span>07:00 - 22:00</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground">Za - Zo</span>
                        <span>08:00 - 20:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Werkgebied en Aanrijtijden
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Onze loodgieters zijn actief in de gehele regio Arnhem-Nijmegen. 
                Hieronder vindt u de gemiddelde aanrijtijden per locatie.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {SERVICE_AREAS_DETAILED.map((area) => (
                <div 
                  key={area.name}
                  className="flex items-center justify-between gap-2 p-3 bg-muted/30 rounded-md"
                  data-testid={`area-${area.name.toLowerCase()}`}
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{area.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{area.distance}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Wat Kunt u Verwachten?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Neem Contact Op",
                  description: "Bel ons of vul het formulier in. Beschrijf uw probleem en wij geven direct advies."
                },
                {
                  step: "2",
                  title: "Snelle Afspraak",
                  description: "Wij plannen een afspraak op een moment dat u uitkomt, of komen direct bij spoed."
                },
                {
                  step: "3",
                  title: "Probleem Opgelost",
                  description: "Onze vakman lost het probleem op, geeft garantie en laat alles netjes achter."
                }
              ].map((item, index) => (
                <div key={index} className="text-center" data-testid={`step-${index}`}>
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Spoed? Bel Nu Direct!
            </h2>
            <p className="text-muted-foreground mb-8">
              Bij waterlekkages, verstoppingen of andere spoedgevallen zijn wij binnen 30 minuten 
              bij u in Nijmegen, Arnhem en omgeving.
            </p>
            <a href="tel:+31241234567" data-testid="button-contact-cta-call">
              <Button size="lg" className="gap-2">
                <Phone className="w-5 h-5" />
                Bel Nu: 024-123 4567
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
