'use client'

import { useState } from 'react'
import { supabasePublic } from '@/lib/supabase'

interface WaitlistResult {
  success: boolean
  message?: string
  error?: string
  details?: Record<string, string>
}

export function useWaitlist() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<WaitlistResult | null>(null)

  const submit = async (email: string, affiliation: string) => {
    setLoading(true)
    setResult(null)

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, affiliation }),
      })

      const data = await response.json()

      if (response.ok) {
        setResult({
          success: true,
          message: data.message,
        })
      } else {
        setResult({
          success: false,
          error: data.error,
          details: data.details,
        })
      }
    } catch (err) {
      setResult({
        success: false,
        error: 'Network error. Please try again.',
      })
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setResult(null)
    setLoading(false)
  }

  return { submit, loading, result, reset }
}