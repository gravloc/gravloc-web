# ADR-001: Supabase Project Setup

**Date:** 2026-10-07  
**Status:** In Progress  
**Author:** CTO_GRAVLOC

## Context

GRAVLOC needs a backend database for the MVP: landing page + waitlist. Supabase was selected for its Postgres foundation, built-in Auth, RLS, and minimal ops overhead.

## Decision

Create a new Supabase project named `gravloc` using the Supabase CLI.

### Project Details
- **Project Name:** gravloc
- **Region:** us-east-1 (US East, N. Virginia)
- **Database Password:** To be generated and stored securely
- **Free Tier:** Acceptable for pre-seed MVP (pauses after 7 days of inactivity)

## Implementation Steps

```bash
# 1. Install Supabase CLI
npm install -g supabase

# 2. Login to Supabase
supabase login

# 3. Create new project
supabase projects create gravloc --region us-east-1

# 4. Get project URL and anon key
supabase projects ls
```

## Alternatives Considered

| Option | Pros | Cons | Status |
|--------|------|------|--------|
| Supabase CLI | Official, free tier, easy setup | Requires local install | ✅ Chosen |
| Supabase Dashboard | No CLI needed, visual | Slower for automation | ⏳ Not chosen |
| Self-hosted Postgres | Full control | Ops overhead, time | ❌ Rejected |
| PlanetScale | MySQL, managed | Not Postgres, cost | ❌ Rejected |

## Next Steps

1. Run `supabase projects create gravloc`
2. Capture project URL and anon key
3. Create `.env.local` with Supabase credentials
4. Run database migrations (schema + RLS policies)

## Related Documents

- [Sprint 1 Plan](./sprint-1-plan.md) - Complete sprint scope
- [Supabase Schema (v1.0)](./sprint-1-plan.md#supabase-schema-v10) - Table definitions
- [Memory.md - Tech Stack](../../MEMORY.md) - Architecture decision record

---

*Status: Awaiting user to run `supabase login` before project creation can proceed.*