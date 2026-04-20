'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'
import OtpInput from '@/components/ui/OtpInput'

type ErrorState = 'wrong_credentials' | 'no_account' | 'too_many_attempts' | null
type LoginMode = 'password' | 'otp'

// ── Resend countdown hook ─────────────────────────────────────────────────────
function useCountdown(start: number) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (count <= 0) return
    const t = setTimeout(() => setCount(c => c - 1), 1000)
    return () => clearTimeout(t)
  }, [count])
  const begin = () => setCount(start)
  return { count, canAct: count === 0, begin }
}

export default function LoginForm() {
  const router = useRouter()

  // ── Password login state ─────────────────────────────────────────────────
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<ErrorState>(null)
  const [attempts, setAttempts] = useState(0)

  // ── OTP login state ──────────────────────────────────────────────────────
  const [loginMode, setLoginMode] = useState<LoginMode>('password')
  const [otpStep, setOtpStep] = useState<1 | 2>(1)
  const [otpIdentifier, setOtpIdentifier] = useState('')
  const [otp, setOtp] = useState('')
  const [otpError, setOtpError] = useState('')
  const resend = useCountdown(30)

  // ── Password login submit ────────────────────────────────────────────────
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!identifier.trim() || !password.trim()) { setError('wrong_credentials'); return }
    const newAttempts = attempts + 1
    setAttempts(newAttempts)
    if (newAttempts >= 3) { setError('too_many_attempts'); return }
    const stored = typeof window !== 'undefined' ? localStorage.getItem('solearium_user') : null
    if (stored) {
      try {
        const user = JSON.parse(stored)
        if (user.identifier === identifier && user.password === password) { router.push('/dashboard'); return }
        setError('wrong_credentials'); return
      } catch { /* fall through */ }
    }
    setError('no_account')
  }

  // ── OTP: send code ───────────────────────────────────────────────────────
  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault()
    if (!otpIdentifier.trim()) { setOtpError('Please enter your email or phone number.'); return }
    setOtpError('')
    setOtp('')
    setOtpStep(2)
    resend.begin()
  }

  // ── OTP: verify ──────────────────────────────────────────────────────────
  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (otp.length < 6) { setOtpError('Please enter the 6-digit code.'); return }
    // Demo: any 6-digit code succeeds
    router.push('/dashboard')
  }

  const switchToOtp = () => {
    setLoginMode('otp')
    setOtpStep(1)
    setOtpIdentifier(identifier) // pre-fill if they already typed it
    setOtp('')
    setOtpError('')
    setError(null)
  }

  const switchToPassword = () => {
    setLoginMode('password')
    setOtpStep(1)
    setOtp('')
    setOtpError('')
  }

  // ── PASSWORD MODE ────────────────────────────────────────────────────────
  if (loginMode === 'password') {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-5 py-16" style={{ background: '#0D0D0D' }}>
        <div className="w-full max-w-[420px]">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-bone tracking-tight mb-3">Your movement profile</h1>
            <p className="text-sm text-bone-muted leading-[1.75]">
              Sign in to access your reports, assessments, and prescription history.
            </p>
          </div>

          <form onSubmit={handlePasswordSubmit} className="space-y-3" noValidate>
            <input
              type="text"
              placeholder="Email or phone number"
              value={identifier}
              onChange={e => { setIdentifier(e.target.value); setError(null) }}
              className="w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-bone placeholder:text-bone-muted focus:outline-none focus:border-amber/60 transition-colors"
              autoComplete="username"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => { setPassword(e.target.value); setError(null) }}
              className="w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-bone placeholder:text-bone-muted focus:outline-none focus:border-amber/60 transition-colors"
              autoComplete="current-password"
            />

            {/* OTP switch link */}
            <div className="pt-0.5">
              <button type="button" onClick={switchToOtp} className="text-xs text-bone-muted hover:text-bone-dim transition-colors">
                Sign in with OTP instead →
              </button>
            </div>

            {/* Error states */}
            {error === 'wrong_credentials' && (
              <p className="text-sm text-red-400 pt-1">Incorrect email or password.</p>
            )}
            {error === 'no_account' && (
              <div className="pt-1 space-y-1.5">
                <p className="text-sm text-bone-muted">No profile found with this email or number.</p>
                <Link href="/create-profile" className="text-sm font-medium text-amber hover:text-amber-dim transition-colors">
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
              <Button type="submit" size="lg" className="w-full justify-center">Continue</Button>
            </div>
          </form>

          <div className="mt-5 text-center">
            <Link href="/forgot-password" className="text-xs text-bone-muted hover:text-bone-dim transition-colors">
              Forgot password?
            </Link>
          </div>

          <div className="my-8 border-t border-ink-border" />

          <div className="text-center space-y-2">
            <p className="text-sm text-bone-muted">No profile yet?</p>
            <Link href="/create-profile" className="text-sm font-medium text-bone hover:text-amber transition-colors">
              Create your movement profile →
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // ── OTP MODE — STEP 1: enter contact ────────────────────────────────────
  if (otpStep === 1) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-5 py-16" style={{ background: '#0D0D0D' }}>
        <div className="w-full max-w-[420px]">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-bone tracking-tight mb-3">Sign in with OTP</h1>
            <p className="text-sm text-bone-muted leading-[1.75]">
              We'll send a 6-digit code to your email or phone.
            </p>
          </div>

          <form onSubmit={handleSendCode} className="space-y-3" noValidate>
            <input
              type="text"
              placeholder="Email or phone number"
              value={otpIdentifier}
              onChange={e => { setOtpIdentifier(e.target.value); setOtpError('') }}
              className="w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-bone placeholder:text-bone-muted focus:outline-none focus:border-amber/60 transition-colors"
              autoComplete="username"
              autoFocus
            />
            {otpError && <p className="text-sm text-red-400">{otpError}</p>}
            <div className="pt-1">
              <Button type="submit" size="lg" className="w-full justify-center">Send code</Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <button type="button" onClick={switchToPassword} className="text-xs text-bone-muted hover:text-bone-dim transition-colors">
              ← Use password instead
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── OTP MODE — STEP 2: enter code ────────────────────────────────────────
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-5 py-16" style={{ background: '#0D0D0D' }}>
      <div className="w-full max-w-[420px]">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-bone tracking-tight mb-3">Enter your code</h1>
          <p className="text-sm text-bone-muted leading-[1.75]">
            We sent a 6-digit code to <span className="text-bone">{otpIdentifier}</span>
          </p>
        </div>

        <form onSubmit={handleVerifyOtp} className="space-y-5" noValidate>
          <OtpInput value={otp} onChange={v => { setOtp(v); setOtpError('') }} hasError={!!otpError} />

          {otpError && <p className="text-sm text-red-400">{otpError}</p>}

          {/* Resend + change */}
          <div className="flex items-center justify-between text-xs">
            <button
              type="button"
              disabled={!resend.canAct}
              onClick={() => { resend.begin(); setOtp(''); setOtpError('') }}
              className="text-bone-muted hover:text-bone-dim transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {resend.canAct ? 'Resend code' : `Resend in ${resend.count}s`}
            </button>
            <button
              type="button"
              onClick={() => { setOtpStep(1); setOtp(''); setOtpError('') }}
              className="text-bone-muted hover:text-bone-dim transition-colors"
            >
              Change email / number
            </button>
          </div>

          <Button type="submit" size="lg" className="w-full justify-center" disabled={otp.length < 6}>
            Verify →
          </Button>
        </form>
      </div>
    </div>
  )
}
