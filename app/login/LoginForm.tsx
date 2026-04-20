'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'

type ErrorState = 'wrong_credentials' | 'no_account' | 'too_many_attempts' | null

export default function LoginForm() {
  const router = useRouter()
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<ErrorState>(null)
  const [attempts, setAttempts] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!identifier.trim() || !password.trim()) {
      setError('wrong_credentials')
      return
    }

    const newAttempts = attempts + 1
    setAttempts(newAttempts)

    if (newAttempts >= 3) {
      setError('too_many_attempts')
      return
    }

    // Check against locally stored profile (demo flow)
    const stored = typeof window !== 'undefined' ? localStorage.getItem('solearium_user') : null
    if (stored) {
      try {
        const user = JSON.parse(stored)
        if (user.identifier === identifier && user.password === password) {
          router.push('/dashboard')
          return
        }
        setError('wrong_credentials')
        return
      } catch { /* fall through */ }
    }

    setError('no_account')
  }

  const clearError = () => setError(null)

  return (
    <div
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-5 py-16"
      style={{ background: '#0D0D0D' }}
    >
      <div className="w-full max-w-[420px]">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-bone tracking-tight mb-3">
            Your movement profile
          </h1>
          <p className="text-sm text-bone-muted leading-[1.75]">
            Sign in to access your reports, assessments, and prescription history.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3" noValidate>
          <input
            type="text"
            placeholder="Email or phone number"
            value={identifier}
            onChange={e => { setIdentifier(e.target.value); clearError() }}
            className="w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-bone placeholder:text-bone-muted focus:outline-none focus:border-amber/60 transition-colors"
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => { setPassword(e.target.value); clearError() }}
            className="w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-bone placeholder:text-bone-muted focus:outline-none focus:border-amber/60 transition-colors"
            autoComplete="current-password"
          />

          {/* Error states */}
          {error === 'wrong_credentials' && (
            <p className="text-sm text-red-400 pt-1">Incorrect email or password.</p>
          )}
          {error === 'no_account' && (
            <div className="pt-1 space-y-1.5">
              <p className="text-sm text-bone-muted">
                No profile found with this email or number.
              </p>
              <Link
                href="/create-profile"
                className="text-sm font-medium text-amber hover:text-amber-dim transition-colors"
              >
                Create your movement profile to get started →
              </Link>
            </div>
          )}
          {error === 'too_many_attempts' && (
            <p className="text-sm text-bone-muted pt-1">
              Access temporarily paused. Check your email for a reset link.
            </p>
          )}

          <div className="pt-1">
            <Button type="submit" size="lg" className="w-full justify-center">
              Continue
            </Button>
          </div>
        </form>

        {/* Forgot password */}
        <div className="mt-5 text-center">
          <button
            type="button"
            className="text-xs text-bone-muted hover:text-bone-dim transition-colors"
          >
            Forgot password?
          </button>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-ink-border" />

        {/* Sign up CTA */}
        <div className="text-center space-y-2">
          <p className="text-sm text-bone-muted">No profile yet?</p>
          <Link
            href="/create-profile"
            className="text-sm font-medium text-bone hover:text-amber transition-colors"
          >
            Create your movement profile →
          </Link>
        </div>
      </div>
    </div>
  )
}
