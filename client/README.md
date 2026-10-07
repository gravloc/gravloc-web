# GRAVLOC Landing Page

**Next.js 15 + Supabase MVP**

## Quick Start

### Prerequisites
- Node.js 18+ 
- Supabase CLI (optional, for local dev)
- Supabase project (siwogmtbaqwtovulogvg)

### Setup

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.local.example .env.local

# Edit .env.local with your Supabase credentials
# Get them from: https://supabase.com/dashboard/project/siwogmtbaqwtovulogvg/settings/api

# Run development server
npm run dev
```

## Project Structure

```
client/
├── app/
│   ├── page.tsx              # Main landing page
│   └── waitlist/
│       └── page.tsx          # Waitlist submission
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Solution.tsx
│   └── WaitlistForm.tsx
├── hooks/
│   └── useWaitlist.ts        # Custom hook for waitlist API
├── public/                   # Static assets
├── styles/
│   └── globals.css           # Tailwind + custom CSS
├── .env.local                # Supabase credentials (NOT COMMITTED)
├── next.config.js
├── package.json
└── tsconfig.json
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/waitlist` | Submit waitlist entry |

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | No | For server-side operations |

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Local Build

```bash
npm run build
npm start
```

## Testing

```bash
# Run lint
npm run lint

# Check types
npx tsc --noEmit
```

---

**Status:** MVP - Sprint 1  
**Owner:** AI_DEVELOPER_GRAVLOC  
**Last Updated:** 2026-10-07