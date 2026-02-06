# Loodgieter Nijmegen Spoed - Lead Generation Website

## Overview

A 3-page SEO-optimized lead generation website for a plumbing service company ("Loodgieter Nijmegen Spoed") in the Arnhem-Nijmegen region, Netherlands. Built with React frontend and Express backend. Designed for maximum search engine visibility targeting Dutch plumbing keywords.

## User Preferences

- Preferred communication style: Simple, everyday language
- WordPress is NOT used for hosting - pure static React site
- Extreme SEO optimization is a priority
- Target audience: Homeowners and businesses in Arnhem-Nijmegen needing plumbing services
- Language: Dutch (nl)

## Pages

1. **Homepage** (`/`) - Hero, services overview, trust signals, service areas, testimonials, CTA
2. **Diensten** (`/diensten`) - Detailed services with FAQ section and Schema.org Service markup
3. **Contact** (`/contact`) - Contact form, contact info cards, service area with response times, process steps

## SEO Implementation

- `react-helmet-async` for per-page meta tags
- Schema.org LocalBusiness structured data on all pages
- Schema.org Service markup on diensten page
- Schema.org BreadcrumbList on all pages
- Open Graph and Twitter Card meta tags
- `hreflang` tags for Dutch language
- Geo-targeting meta tags for Gelderland/Nijmegen
- Canonical URLs
- Semantic HTML with proper heading hierarchy (H1 > H2 > H3)
- Internal linking between all pages
- Service area mentions for local SEO (15 cities/towns)
- FAQ section targeting long-tail keywords

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router) - 3 pages
- **SEO**: react-helmet-async for meta tags and structured data
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite with React plugin
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend Architecture
- **Framework**: Express 5 running on Node.js
- **Language**: TypeScript (compiled with tsx for development)
- **API**: POST `/api/contact` for contact form submissions
- **Storage**: In-memory storage for form submissions

### Key Components
- `client/src/components/seo.tsx` - SEO component with Schema.org markup
- `client/src/components/layout.tsx` - Shared Header, Footer, Layout wrapper
- `client/src/pages/home.tsx` - Homepage
- `client/src/pages/diensten.tsx` - Services page
- `client/src/pages/contact.tsx` - Contact page

### Project Structure
```
├── client/           # React frontend
│   └── src/
│       ├── components/
│       │   ├── ui/          # shadcn/ui components
│       │   ├── layout.tsx   # Header, Footer, Layout
│       │   └── seo.tsx      # SEO meta tags + Schema.org
│       ├── hooks/           # Custom React hooks
│       ├── lib/             # Utilities and query client
│       └── pages/           # Page components (home, diensten, contact)
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions (contact form)
│   ├── storage.ts    # In-memory storage
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared types and schemas
│   └── schema.ts     # Zod contact form schema
└── wordpress-template/  # Legacy WordPress template files (not used)
```

### Build System
- **Development**: `npm run dev` runs tsx with Vite middleware
- **Production Build**: Custom build script using esbuild for server and Vite for client
- **Output**: Server bundles to `dist/index.cjs`, client builds to `dist/public`

## Key NPM Packages
- `react-helmet-async`: SEO meta tags management
- `@tanstack/react-query`: Server state management
- `express`: Web server framework
- `zod`: Runtime type validation
- `tailwindcss`: Utility-first CSS framework
- `lucide-react`: Icon library
