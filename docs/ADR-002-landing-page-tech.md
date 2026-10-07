# ADR-002: Landing Page + Waitlist MVP Tech Stack

**Date:** 2026-10-07  
**Status:** Approved  
**Author:** CTO_GRAVLOC  
**Context:** Sprint 1 - Landing Page + Waitlist Validation

## Context

GRAVLOC needs to launch a landing page to validate our beachhead market (CubeSat/University teams) with a waitlist feature. The page should collect email addresses and affiliation data for early interest.

## Decision

**Tech Stack:** Next.js 15 (App Router) + Tailwind CSS + Supabase

### Frontend (client/)
| Layer | Technology | Rationale |
|-------|------------|-----------|
| Framework | Next.js 15 (App Router) | SSR/SSG for SEO, API routes for backend, Vercel deployment ready |
| Styling | Tailwind CSS | Utility-first, consistent design system, minimal CSS overhead |
| Forms | React Hook Form + Zod | Type-safe forms, validation, minimal boilerplate |
| Styling Animation | Framer Motion (optional) | Smooth transitions for CTA sections |

### Backend (server/)
| Layer | Technology | Rationale |
|-------|------------|-----------|
| API Layer | Next.js API Routes (server/api/*) | No separate server needed, same codebase deployment |
| Database Client | @supabase/supabase-js | Official Supabase client, lightweight |
| Validation | Zod | Type-safe schema validation, shared between client/server |

### Deployment
| Service | Configuration |
|---------|---------------|
| Hosting | Vercel (preview + production) |
| Domain | `gravloc.dev` (pending) |
| Analytics | Vercel Analytics (free tier) |

## Alternative Considered

**Separate Express Server**
- Pros: Full control over API, easier to add authentication later
- Cons: Extra infrastructure, separate deployment, overkill for MVP
- **Decision:** Rejected - Next.js API routes are sufficient for MVP

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    GRAVLOC LANDING PAGE                      │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────┐        ┌───────────────────────────┐  │
│  │  client/         │        │  server/                  │  │
│  │  - app/page.tsx  │        │  - api/waitlist/route.ts  │  │
│  │  - components/   │        │  - lib/supabase.ts        │  │
│  │  - hooks/        │        │                           │  │
│  └────────┬─────────┘        └──────────────┬────────────┘  │
│           │                                  │               │
│           ▼                                  ▼               │
│  ┌──────────────────┐        ┌───────────────────────────┐  │
│  │  Tailwind CSS    │        │  Supabase Auth            │  │
│  │  React Hook Form │        │  RLS Policies             │  │
│  └──────────────────┘        └───────────────────────────┘  │
│                                              │               │
│                                              ▼               │
│                                      ┌──────────────────┐    │
│                                      │  Supabase DB     │    │
│                                      │  - waitlist_entries│   │
│                                      │  - analytics_events│   │
│                                      └──────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

## Files Structure

```
gravloc-web/
├── app/
│   ├── page.tsx              # Main landing page (hero, problem, solution, CTA)
│   └── waitlist/
│       └── page.tsx          # Waitlist submission page
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Solution.tsx
│   ├── WaitlistForm.tsx
│   └── Metrics.tsx
├── hooks/
│   └── useWaitlist.ts        # Custom hook for waitlist API
├── server/
│   └── api/
│       └── waitlist/
│           └── route.ts      # API endpoint for waitlist submissions
├── scripts/
│   └── db/
│       ├── schema.sql        # Database tables
│       └── rls-policies.sql  # RLS policies
├── public/                   # Static assets (favicon, images)
├── .env.local                # Supabase credentials (user-provided)
└── package.json
```

## API Endpoint Specification

### POST `/api/waitlist`

**Request Body:**
```json
{
  "email": "user@example.com",
  "affiliation": "CubeSat Team Name or University"
}
```

**Validation Rules:**
- Email: Must be valid email format
- Affiliation: Required, max 255 characters

**Response (201 Created):**
```json
{
  "success": true,
  "message": "You've been added to the waitlist!",
  "data": {
    "id": "uuid",
    "email": "user@example.com",
    "affiliation": "CubeSat Team Name",
    "status": "pending",
    "created_at": "2026-10-07T12:00:00Z"
  }
}
```

**Response (400 Bad Request):**
```json
{
  "success": false,
  "error": "Validation failed",
  "details": {
    "email": "Invalid email format",
    "affiliation": "Affiliation is required"
  }
}
```

## Acceptance Criteria

| Criteria | Test |
|----------|------|
| Landing page loads | Visit `/`, see hero + sections |
| Waitlist form displays | Visit `/waitlist`, see form with email + affiliation |
| Form validates | Invalid email rejected, empty affiliation rejected |
| Data persists | New row in `waitlist_entries` table |
| Analytics tracks | `form_submit` event in `analytics_events` |
| No console errors | DevTools console clean |

## Security Considerations

1. **RLS on waitlist_entries:** Authenticated users can only insert (no read/write other users' data)
2. **Email validation:** Prevents injection, stores raw email for now
3. **No PII beyond email + affiliation:** Minimize data collected
4. **Rate limiting:** Future enhancement (not MVP)

## Deployment Checklist

- [ ] Create Vercel project linked to `gravloc/gravloc-web`
- [ ] Add environment variables in Vercel dashboard
- [ ] Deploy to preview branch
- [ ] Test with real email + affiliation
- [ ] Verify row in Supabase `waitlist_entries` table

## Timeline

| Day | Task |
|-----|------|
| Day 1 | Setup Next.js structure, basic pages |
| Day 2 | Implement landing page sections |
| Day 3 | Implement waitlist form |
| Day 4 | Connect to Supabase API |
| Day 5 | Testing, polish, deploy |

---

**Status:** Approved for implementation  
**Owner:** CTO_GRAVLOC / AI_DEVELOPER_GRAVLOC  
**Next:** AI Developer to implement Next.js structure