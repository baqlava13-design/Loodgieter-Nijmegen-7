import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogType?: string;
  breadcrumbs?: { name: string; url: string }[];
  schemaMarkup?: object[];
}

const SITE_NAME = "Loodgieter Nijmegen Spoed";
const BASE_URL = "https://www.loodgieternijmegen.net";

export function SEO({ title, description, canonical, ogType = "website", breadcrumbs, schemaMarkup = [] }: SEOProps) {
  const fullUrl = `${BASE_URL}${canonical}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#organization`,
    "name": "Loodgieter Nijmegen Spoed",
    "description": "Professionele loodgieterservice in Nijmegen en Arnhem. 24/7 spoedservice, lekkage reparatie, CV-ketel reparatie en vervanging, en verstoppingen verhelpen. 30+ jaar ervaring.",
    "url": BASE_URL,
    "telephone": "+31-6-22308923",
    "email": "contact@loodgieternijmegen.net",
    "priceRange": "$$",
    "areaServed": [
      { "@type": "City", "name": "Nijmegen" },
      { "@type": "City", "name": "Arnhem" },
      { "@type": "City", "name": "Elst" },
      { "@type": "City", "name": "Bemmel" },
      { "@type": "City", "name": "Wijchen" },
      { "@type": "City", "name": "Druten" },
      { "@type": "City", "name": "Beuningen" },
      { "@type": "City", "name": "Malden" },
      { "@type": "City", "name": "Groesbeek" },
      { "@type": "City", "name": "Lent" }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nijmegen",
      "addressRegion": "Gelderland",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.8426",
      "longitude": "5.8546"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": []
  };

  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${BASE_URL}${crumb.url}`
    }))
  } : null;

  const allSchemas = [localBusinessSchema, ...(breadcrumbSchema ? [breadcrumbSchema] : []), ...schemaMarkup];

  return (
    <Helmet>
      <html lang="nl" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="geo.region" content="NL-GE" />
      <meta name="geo.placename" content="Nijmegen" />

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="nl_NL" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <link rel="alternate" hrefLang="nl" href={fullUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />

      {allSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

export { SITE_NAME, BASE_URL };
