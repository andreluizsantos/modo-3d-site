# Modo 3D — Site Institucional

## Overview
Site institucional e de marketing da empresa Modo 3D, focado em conversão e experiência premium. O site comunica a filosofia de "design como estratégia para facilitar a vida e criar conexão" — não apenas estética.

## Recent Changes
- 2026-02-15: Criação do site completo com Home, Conceito e Contato
- Design tokens baseados na paleta da marca (#222839, #3D6DA9)
- Imagens geradas para hero, produtos, texturas e packaging
- Formulário de contato funcional com API backend
- SEO implementado com useEffect (document.title + meta tags OG) — evitamos react-helmet-async por problemas de HMR
- Navegação usa wouter com smooth scroll para hash links
- Formulário de contato usa shadcn Form + react-hook-form + zodResolver

## User Preferences
- Copywriting em português Brasil
- Tom calmo, preciso, direto — sem hype ou superlativos
- Foco na intenção e função dos produtos, não no acabamento técnico
- Acabamento é consequência, não objetivo principal
- Design minimalista seguindo o Design System Guide da Modo 3D

## Project Architecture
- Frontend: React SPA com Vite + Tailwind CSS + shadcn/ui + Framer Motion
- Backend: Express.js com API de contato
- Routing: wouter (/, /conceito, /contato)
- Fonte: Inter
- Paleta: brand-900 (#222839), brand-500 (#3D6DA9), neutrals

### Key Files
- `client/src/App.tsx` - Router principal com Header/Footer
- `client/src/pages/home.tsx` - Página inicial com todas as seções
- `client/src/pages/conceito.tsx` - Filosofia de design
- `client/src/pages/contato.tsx` - Formulário de contato
- `client/src/components/SEO.tsx` - SEO via useEffect (title, meta description, OG tags)
- `client/src/components/sections/` - Seções reutilizáveis (Hero, Precision, Pillars, Process, Collection, Arrival, FinalCTA)
- `client/src/components/layout/` - Header e Footer
- `server/routes.ts` - API POST /api/contact
- `shared/schema.ts` - Schema de dados (contactMessages)
