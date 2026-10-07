// Waitlist API Route
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { supabaseServer } from '@/lib/supabase'

// Zod schema for validation
const waitlistSchema = z.object({
  email: z.string().email('Invalid email format'),
  affiliation: z.string().min(1, 'Affiliation is required').max(255, 'Affiliation too long'),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    
    // Validate input
    const validated = waitlistSchema.safeParse(body)
    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: validated.error.errors.reduce((acc, curr) => {
            acc[curr.path[0] as string] = curr.message
            return acc
          }, {} as Record<string, string>)
        },
        { status: 400 }
      )
    }

    const { email, affiliation } = validated.data

    // Insert into Supabase
    const { data, error } = await supabaseServer
      .from('waitlist_entries')
      .insert([{ email, affiliation, status: 'pending' }])
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { success: false, error: 'Failed to submit waitlist entry' },
        { status: 500 }
      )
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'You\'ve been added to the waitlist!',
        data
      },
      { status: 201 }
    )
  } catch (err) {
    console.error('Unexpected error:', err)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}