-- GRAVLOC Database Schema v1.0
-- Project: gravloc (siwogmtbaqwtovulogvg)
-- Created: 2026-10-07

-- Enable extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ===========================================
-- TABLE: users
-- Stores user profiles linked to auth.users
-- ===========================================
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    role TEXT NOT NULL DEFAULT 'waitlist',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    waitlisted_at TIMESTAMPTZ
);

-- ===========================================
-- TABLE: waitlist_entries
-- Stores waitlist sign-ups
-- ===========================================
CREATE TABLE IF NOT EXISTS waitlist_entries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    email TEXT NOT NULL,
    affiliation TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending',
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ===========================================
-- TABLE: analytics_events
-- Stores page views, form submissions, etc.
-- ===========================================
CREATE TABLE IF NOT EXISTS analytics_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_name TEXT NOT NULL,
    session_id TEXT,
    metadata JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ===========================================
-- TABLE: api_logs
-- Logs API calls for audit trail
-- ===========================================
CREATE TABLE IF NOT EXISTS api_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    endpoint TEXT NOT NULL,
    method TEXT NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    ip_address INET,
    user_agent TEXT,
    status_code INTEGER,
    response_time_ms INTEGER,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ===========================================
-- INDEXES
-- ===========================================
CREATE INDEX IF NOT EXISTS idx_waitlist_entries_email ON waitlist_entries(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_entries_status ON waitlist_entries(status);
CREATE INDEX IF NOT EXISTS idx_waitlist_entries_affiliation ON waitlist_entries(affiliation);
CREATE INDEX IF NOT EXISTS idx_analytics_events_event_name ON analytics_events(event_name);
CREATE INDEX IF NOT EXISTS idx_analytics_events_created_at ON analytics_events(created_at);

-- ===========================================
-- ROW LEVEL SECURITY (RLS)
-- ===========================================

-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE waitlist_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE api_logs ENABLE ROW LEVEL SECURITY;

-- ===========================================
-- POLICIES: users
-- ===========================================
CREATE POLICY "Users can read own profile"
ON users FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
ON users FOR INSERT
WITH CHECK (auth.uid() = id);

CREATE POLICY "Admin can read all users"
ON users FOR SELECT
USING (auth.role() = 'admin');

CREATE POLICY "Admin can update all users"
ON users FOR UPDATE
USING (auth.role() = 'admin');

-- ===========================================
-- POLICIES: waitlist_entries
-- ===========================================
CREATE POLICY "Authenticated users can insert waitlist"
ON waitlist_entries FOR INSERT
WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Users can read own waitlist entries"
ON waitlist_entries FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Admin can read all waitlist"
ON waitlist_entries FOR SELECT
USING (auth.role() = 'admin');

CREATE POLICY "Admin can update waitlist"
ON waitlist_entries FOR UPDATE
USING (auth.role() = 'admin');

CREATE POLICY "Admin can delete waitlist"
ON waitlist_entries FOR DELETE
USING (auth.role() = 'admin');

-- ===========================================
-- POLICIES: analytics_events
-- ===========================================
CREATE POLICY "Allow insert analytics"
ON analytics_events FOR INSERT
WITH CHECK (true);

CREATE POLICY "Admin can read analytics"
ON analytics_events FOR SELECT
USING (auth.role() = 'admin');

-- ===========================================
-- POLICIES: api_logs
-- ===========================================
CREATE POLICY "Allow insert api_logs"
ON api_logs FOR INSERT
WITH CHECK (true);

CREATE POLICY "Admin can read api_logs"
ON api_logs FOR SELECT
USING (auth.role() = 'admin');

-- ===========================================
-- TRIGGER: updated_at
-- Automatically updates updated_at timestamp
-- ===========================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_waitlist_entries_updated
BEFORE UPDATE ON waitlist_entries
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- ===========================================
-- SAMPLE DATA (for testing)
-- ===========================================
INSERT INTO waitlist_entries (email, affiliation, status, notes)
VALUES 
    ('test@gravloc.dev', 'Test University', 'pending', 'Test entry for schema verification'),
    ('demo@gravloc.dev', 'Test CubeSat Team', 'pending', 'Test entry for schema verification');