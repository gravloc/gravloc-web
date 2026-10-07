# GRAVLOC Web Application

**B2B Marketplace for Space-Grade Components**

## Overview

GRAVLOC is building a B2B marketplace for space-grade components, targeting CubeSat/University teams as our beachhead market. This repository contains the main web application for the MVP: AI Datasheet Pipeline + Comparison Tool.

## Tech Stack (MERN)

- **Frontend:** React (Next.js App Router) + Tailwind CSS
- **Backend:** Node.js + Express
- **Database:** Supabase (PostgreSQL + Auth + Realtime)
- **Deployment:** Vercel (frontend) + Supabase (backend)

## Architecture

```
gravloc-web/
├── client/           # Next.js frontend application
├── server/           # Node.js/Express backend API
├── docs/             # Architecture docs and specifications
├── .github/          # GitHub workflows and templates
└── scripts/          # Utility scripts
```

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure environment variables (see `.env.example`)
4. Run development servers: `npm run dev`

## Branch Protection

- `main` branch requires PR review before merging
- All changes must go through pull requests

## License

MIT License - See LICENSE file for details.

## Team

- CTO: GRAVLOC CTO Agent
- AI Developer: GRAVLOC AI Developer Agent  
- CEO: GRAVLOC CEO Agent

## Current Status

**Stage:** Pre-seed MVP development  
**Target:** CubeSat/University teams  
**MVP Features:** AI Datasheet Pipeline + Comparison Tool