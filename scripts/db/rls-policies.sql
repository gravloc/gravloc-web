-- GRAVLOC Row Level Security (RLS) Policies
-- Project: gravloc (siwogmtbaqwtovulogvg)
-- Created: 2026-10-07
-- This file contains detailed RLS policy documentation and verification

-- ===========================================
-- RLS POLICY SUMMARY
-- ===========================================

-- Table: users
-- - Users can read/write their own profile
-- - Admins can read/write all users

-- Table: waitlist_entries
-- - Authenticated users can insert
-- - Users can read their own entries (if user_id set)
-- - Admins can read/write/delete all entries

-- Table: analytics_events
-- - Anyone can insert (for page views, etc.)
-- - Admins can read

-- Table: api_logs
-- - Anyone can insert (for audit trail)
-- - Admins can read

-- ===========================================
-- VERIFICATION QUERIES
-- ===========================================

-- Check RLS is enabled on all tables
SELECT 
    tablename,
    rowsecurity as rls_enabled
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename IN ('users', 'waitlist_entries', 'analytics_events', 'api_logs');

-- List all policies
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd as command_type
FROM pg_policies
WHERE schemaname = 'public'
ORDER BY tablename, policyname;

-- Test policy enforcement (run as anon user)
-- SELECT * FROM users; -- Should return empty or own record only
-- SELECT * FROM waitlist_entries; -- Should return empty or own records only
-- SELECT * FROM analytics_events; -- Should allow insert only