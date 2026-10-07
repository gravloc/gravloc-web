/**
 * Supabase client initialization
 * Use NEXT_PUBLIC_SUPABASE_ANON_KEY for client-side
 * Use SUPABASE_SERVICE_ROLE_KEY for server-side (NEVER commit)
 */

import { createClient } from '@supabase/supabase-js'

// Client-side (public) client
const supabasePublic = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
)

// Server-side (private) client - only use in server components/API routes
const supabaseServer = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
)

export { supabasePublic, supabaseServer }