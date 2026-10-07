# GRAVLOC Web Server

**Express + Supabase API Layer**

## Setup

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.local.example .env.local

# Edit .env.local with your Supabase credentials

# Run development server
npm run dev
```

## API Endpoints

### POST `/api/waitlist`

Submit a waitlist entry.

**Request Body:**
```json
{
  "email": "user@example.com",
  "affiliation": "CubeSat Team Name"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "You've been added to the waitlist!",
  "data": { "id": "uuid", ... }
}
```

---

**Status:** MVP - Sprint 1  
**Owner:** AI_DEVELOPER_GRAVLOC  
**Last Updated:** 2026-10-07