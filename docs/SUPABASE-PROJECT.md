# Supabase Project: gravloc (Existing)
# Status: Already exists, using existing credentials

## Project Details
- **Project Name:** Gravloc
- **Project Ref:** siwogmtbaqwtovulogvg
- **Region:** ap-northeast-1 (Asia Pacific - Tokyo)
- **Status:** ACTIVE_HEALTHY
- **Database Host:** db.siwogmtbaqwtovulogvg.supabase.co
- **PostgreSQL Version:** 17.11.0.002

## Setup Instructions

### 1. Get API Keys from Supabase Dashboard
1. Go to: https://supabase.com/dashboard/project/siwogmtbaqwtovulogvg/settings/api
2. Copy the anon/public key (starts with `eyJ...`)
3. Copy the project URL

### 2. Create `.env.local`
```bash
# Copy the example file
cp .env.local.example .env.local

# Edit with your values
nano .env.local  # or your preferred editor
```

### 3. Link Project (if not already done)
```bash
supabase link --project-ref siwogmtbaqwtovulogvg
```

## Database Credentials (for local development only)
⚠️ **SECURITY NOTICE:** Never commit database passwords to version control.

To get your database password:
1. Go to: https://supabase.com/dashboard/project/siwogmtbaqwtovulogvg/settings/database
2. Copy the connection string
3. Extract the password (use connection string instead of password in `.env.local`)

## Next Steps
1. Create `.env.local` with Supabase credentials from your dashboard
2. Run database migrations (schema + RLS policies)
3. Test waitlist API endpoint

## Reference
- **Project Dashboard:** https://supabase.com/dashboard/project/siwogmtbaqwtovulogvg
- **SQL Editor:** https://supabase.com/dashboard/project/siwogmtbaqwtovulogvg/sql

## Warning
⚠️ This is an existing project. Verify with the team before making schema changes.