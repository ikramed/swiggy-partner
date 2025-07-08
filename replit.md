# Swiggy Partner Application

## Overview

This is a full-stack web application built for Swiggy's partner onboarding system. It provides a platform for restaurant partners to register and manage their partnership with Swiggy. The application features a modern React frontend with a Node.js/Express backend, utilizing PostgreSQL for data persistence.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Styling**: Tailwind CSS with custom Swiggy branding
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: In-memory storage (development) with PostgreSQL session store capability
- **API Design**: RESTful API with JSON responses

### Database Design
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Located in `shared/schema.ts` for code sharing between frontend and backend
- **Migrations**: Handled through Drizzle Kit
- **Current Schema**: Basic user table with username/password fields

## Key Components

### Frontend Components
- **UI Library**: Comprehensive set of reusable components based on Radix UI
- **Pages**: Home page with partner registration form, 404 error handling
- **Hooks**: Custom hooks for mobile detection and toast notifications
- **Utilities**: Type-safe utility functions for styling and API requests

### Backend Components
- **Server**: Express.js server with middleware for logging, JSON parsing, and error handling
- **Routes**: Modular routing system with API prefix
- **Storage**: Abstracted storage interface supporting both in-memory and database implementations
- **Development Tools**: Vite integration for hot module replacement during development

### Shared Components
- **Schema**: Shared database schema and validation logic
- **Types**: TypeScript type definitions shared between frontend and backend

## Data Flow

1. **User Registration Flow**:
   - User submits registration form on frontend
   - Form validation occurs client-side using React Hook Form + Zod
   - API request sent to backend endpoints
   - Backend validates data and stores user information
   - Response sent back to frontend with success/error status

2. **API Communication**:
   - Frontend uses TanStack Query for server state management
   - Custom API request utilities handle authentication and error handling
   - Backend responds with structured JSON responses
   - Error handling includes proper HTTP status codes and user-friendly messages

3. **Development Workflow**:
   - Vite handles frontend development with hot reloading
   - Express server runs concurrently with TypeScript compilation
   - Database migrations managed through Drizzle Kit commands

## External Dependencies

### Frontend Dependencies
- **@radix-ui/***: Comprehensive UI primitive components
- **@tanstack/react-query**: Server state management
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight routing library
- **react-hook-form**: Form state management
- **zod**: Runtime type validation

### Backend Dependencies
- **express**: Web framework for Node.js
- **drizzle-orm**: Type-safe ORM for PostgreSQL
- **@neondatabase/serverless**: PostgreSQL database driver
- **connect-pg-simple**: PostgreSQL session store
- **tsx**: TypeScript execution environment

### Development Dependencies
- **vite**: Build tool and development server
- **@vitejs/plugin-react**: React integration for Vite
- **esbuild**: Fast JavaScript bundler for production builds
- **tailwindcss**: CSS framework with PostCSS integration

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to static assets
2. **Backend Build**: esbuild bundles server code into single file
3. **Database Setup**: Drizzle migrations ensure schema is up-to-date
4. **Production Bundle**: Combined frontend and backend ready for deployment

### Environment Configuration
- **Development**: Local development with hot reloading
- **Production**: Optimized builds with proper error handling
- **Database**: Environment-based database URL configuration
- **Session Storage**: Configurable between memory and PostgreSQL

### Deployment Requirements
- Node.js runtime environment
- PostgreSQL database instance
- Environment variable for `DATABASE_URL`
- Static file serving capability for frontend assets

## Changelog

```
Changelog:
- July 08, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```