import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Droplet, 
  Phone,
  Mail,
  MapPin,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const SERVICE_AREAS = [
  "Nijmegen", "Arnhem", "Elst", "Bemmel", "Wijchen", 
  "Druten", "Beuningen", "Malden", "Groesbeek", "Lent"
];

function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/diensten", label: "Diensten" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-[999] bg-background/95 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex items-center gap-2" data-testid="link-logo">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <Droplet className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg hidden sm:block">Loodgieter Nijmegen</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`text-sm font-medium transition-opacity ${location === link.href ? 'text-primary' : 'text-muted-foreground hover:opacity-70'}`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-2">
            <a href="tel:+31241234567" data-testid="button-call-header">
              <Button size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Bel Nu</span>
              </Button>
            </a>
            
            <Button 
              size="icon" 
              variant="ghost" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border/50 pt-4" data-testid="nav-mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 text-sm font-medium ${location === link.href ? 'text-primary' : 'text-muted-foreground'}`}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <Droplet className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold">Loodgieter Nijmegen Spoed</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Al meer dan 30 jaar uw betrouwbare loodgieter in de regio Arnhem-Nijmegen. 
              24/7 spoedservice beschikbaar voor al uw loodgietersproblemen.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:+31241234567" className="flex items-center gap-2 text-muted-foreground hover:opacity-70" data-testid="link-footer-phone">
                <Phone className="w-4 h-4 text-primary" />
                024-123 4567
              </a>
              <a href="mailto:info@loodgieternijmegen.net" className="flex items-center gap-2 text-muted-foreground hover:opacity-70" data-testid="link-footer-email">
                <Mail className="w-4 h-4 text-primary" />
                info@loodgieternijmegen.net
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Onze Diensten</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/diensten" className="text-muted-foreground hover:opacity-70" data-testid="link-footer-lekkage">
                  Lekkage oplossen
                </Link>
              </li>
              <li>
                <Link href="/diensten" className="text-muted-foreground hover:opacity-70" data-testid="link-footer-cvketel">
                  CV-ketel onderhoud
                </Link>
              </li>
              <li>
                <Link href="/diensten" className="text-muted-foreground hover:opacity-70" data-testid="link-footer-verstoppingen">
                  Verstoppingen verhelpen
                </Link>
              </li>
              <li>
                <Link href="/diensten" className="text-muted-foreground hover:opacity-70" data-testid="link-footer-spoedservice">
                  24/7 Spoedservice
                </Link>
              </li>
              <li>
                <Link href="/diensten" className="text-muted-foreground hover:opacity-70" data-testid="link-footer-sanitair">
                  Sanitair installatie
                </Link>
              </li>
              <li>
                <Link href="/diensten" className="text-muted-foreground hover:opacity-70" data-testid="link-footer-riolering">
                  Rioolreparatie
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Werkgebied</h3>
            <div className="flex items-start gap-2 mb-3">
              <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">Regio Arnhem-Nijmegen, Gelderland</p>
            </div>
            <div className="flex flex-wrap gap-1">
              {SERVICE_AREAS.map((area) => (
                <span 
                  key={area} 
                  className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md"
                  data-testid={`badge-area-${area.toLowerCase()}`}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="py-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Loodgieter Nijmegen Spoed. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/" className="text-xs text-muted-foreground hover:opacity-70">Home</Link>
            <Link href="/diensten" className="text-xs text-muted-foreground hover:opacity-70">Diensten</Link>
            <Link href="/contact" className="text-xs text-muted-foreground hover:opacity-70">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
