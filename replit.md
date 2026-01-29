# Loodgieter Nijmegen Spoed - Landing Page

## Overview

This is a landing page website for a plumbing service company ("Loodgieter Nijmegen Spoed") based in Nijmegen, Netherlands. The application is a full-stack TypeScript project with a React frontend and Express backend. It displays service information, company features, and contact details for a 24/7 emergency plumbing service with 30 years of experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite with React plugin
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend Architecture
- **Framework**: Express 5 running on Node.js
- **Language**: TypeScript (compiled with tsx for development)
- **API Pattern**: RESTful endpoints under `/api/` prefix
- **Static Serving**: Production serves built files from `dist/public`
- **Development**: Vite dev server with HMR integration

### Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` (shared between frontend and backend)
- **Validation**: Zod schemas with drizzle-zod integration
- **Current Storage**: In-memory storage (`MemStorage` class) returning static content
- **Database Ready**: Drizzle configuration expects `DATABASE_URL` environment variable

### Project Structure
```
├── client/           # React frontend
│   └── src/
│       ├── components/ui/  # shadcn/ui components
│       ├── hooks/          # Custom React hooks
│       ├── lib/            # Utilities and query client
│       └── pages/          # Page components
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data access layer
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared types and schemas
│   └── schema.ts     # Zod schemas and TypeScript types
└── migrations/       # Drizzle database migrations
```

### Build System
- **Development**: `npm run dev` runs tsx with Vite middleware
- **Production Build**: Custom build script using esbuild for server and Vite for client
- **Output**: Server bundles to `dist/index.cjs`, client builds to `dist/public`

## External Dependencies

### Database
- **PostgreSQL**: Required for production (via `DATABASE_URL` environment variable)
- **Drizzle Kit**: Database schema push with `npm run db:push`

### UI Component Library
- **shadcn/ui**: Pre-configured with "new-york" style
- **Radix UI**: Headless component primitives for accessibility
- **Lucide React**: Icon library

### Key NPM Packages
- `@tanstack/react-query`: Server state management
- `drizzle-orm` / `drizzle-zod`: Database ORM and validation
- `express`: Web server framework
- `zod`: Runtime type validation
- `tailwindcss`: Utility-first CSS framework

### Replit-Specific Integrations
- `@replit/vite-plugin-runtime-error-modal`: Error overlay in development
- `@replit/vite-plugin-cartographer`: Development tooling
- `@replit/vite-plugin-dev-banner`: Development banner