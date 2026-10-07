# GRAVLOC Database Setup Guide

## Quick Start

### 1. Login to Supabase CLI
```bash
supabase login
```

### 2. Link to Gravloc Project
```bash
supabase link --project-ref siwogmtbaqwtovulogvg
```

### 3. Run Database Setup
```bash
# Option A: Run via Supabase CLI
supabase db push

# Option B: Run SQL manually in Supabase Dashboard
# 1. Go to https://supabase.com/dashboard/project/siwogmtbaqwtovulogvg/sql
# 2. Copy and paste contents of scripts/db/schema.sql
# 3. Copy and paste contents of scripts/db/rls-policies.sql
```

### 4. Verify Setup
```sql
-- Check tables created
SELECT tablename FROM pg_tables WHERE schemaname = 'public';

-- Check RLS enabled
SELECT tablename, rowsecurity FROM pg_tables WHERE schemaname = 'public';

-- Check policies created
SELECT policyname FROM pg_policies WHERE schemaname = 'public';
```

## Files

| File | Purpose |
|------|---------|
| `scripts/db/schema.sql` | Main database schema (tables, indexes) |
| `scripts/db/rls-policies.sql` | RLS policies and verification queries |
| `scripts/db/setup.sql` | Combined setup script |
| `scripts/db/migrations/` | Future migrations (create as needed) |

## Environment Variables (.env.local)

```env
# Supabase (for production)
NEXT_PUBLIC_SUPABASE_URL=https://db.siwogmtbaqwtovulogvg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here

# Supabase (for local development)
SUPABASE_DB_HOST=db.siwogmtbaqwtovulogvg.supabase.co
SUPABASE_DB_PORT=5432
SUPABASE_DB_NAME=postgres
SUPABASE_DB_USER=postgres
SUPABASE_DB_PASSWORD=your_password
```

## Database Schema (v1.0)

### Tables

| Table | Purpose |
|-------|---------|
| `users` | User profiles linked to auth.users |
| `waitlist_entries` | Waitlist sign-ups |
| `analytics_events` | Page views, form submissions |
| `api_logs` | API audit trail |

### RLS Summary

| Table | Authenticated | Admin | Anon |
|-------|---------------|-------|------|
| users | read/write own | all | none |
| waitlist_entries | insert own | all | insert only |
| analytics_events | all | read only | insert |
| api_logs | all | read only | insert |

## Next Steps

1. Create `.env.local` with Supabase credentials
2. Run database migrations
3. Test waitlist API endpoint
4. Deploy to Vercel

## Troubleshooting

### Error: "relation already exists"
- Run `schema.sql` only once
- Use migrations for future changes

### Error: "permission denied"
- Check RLS policies
- Verify user is authenticated

### Error: "extension not found"
- Run `CREATE EXTENSION "uuid-ossp";` first

---

**Created:** 2026-10-07  
**Author:** CTO_GRAVLOC  
**Status:** Ready for deployment