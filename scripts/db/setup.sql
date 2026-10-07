-- GRAVLOC Database Setup
-- Project: gravloc (siwogmtbaqwtovulogvg)
-- Created: 2026-10-07

-- ===========================================
-- 1. Create schema (if not exists)
-- ===========================================
CREATE SCHEMA IF NOT EXISTS public;

-- ===========================================
-- 2. Enable extensions
-- ===========================================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ===========================================
-- 3. Run main schema
-- ===========================================
\i /scripts/db/schema.sql

-- ===========================================
-- 4. Run RLS policies
-- ===========================================
\i /scripts/db/rls-policies.sql

-- ===========================================
-- 5. Verify setup
-- ===========================================
SELECT 'Schema setup complete' as status;
SELECT COUNT(*) as table_count FROM pg_tables WHERE schemaname = 'public';
SELECT COUNT(*) as policy_count FROM pg_policies WHERE schemaname = 'public';