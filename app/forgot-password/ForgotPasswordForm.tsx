'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import OtpInput from '@/components/ui/OtpInput'

type Step = 1 | 2 | 3 | 4

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

export default function ForgotPasswordForm() {
  const [step, setStep] = useState<Step>(1)

  // Step 1
  const [contact, setContact] = useState('')
  const [step1Error, setStep1Error] = useState('')

  // Step 2
  const [otp, setOtp] = useState('')
  const [otpError, setOtpError] = useState('')
  const resend = useCountdown(30)

  // Step 3
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [step3Error, setStep3Error] = useState('')

  // ── Step 1: send reset code ──────────────────────────────────────────────
  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault()
    if (!contact.trim()) { setStep1Error('Please enter your email or phone number.'); return }
    setStep1Error('')
    setOtp('')
    setOtpError('')
    setStep(2)
    resend.begin()
  }

  // ── Step 2: verify OTP ───────────────────────────────────────────────────
  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (otp.length < 6) { setOtpError('Please enter the 6-digit code.'); return }
    setOtpError('')
    setStep(3)
  }

  // ── Step 3: set new password ─────────────────────────────────────────────
  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPassword.trim()) { setStep3Error('Please enter a new password.'); return }
    if (newPassword.length < 8) { setStep3Error('Password must be at least 8 characters.'); return }
    if (newPassword !== confirmPassword) { setStep3Error('Passwords do not match.'); return }

    // Update in localStorage (demo)
    const stored = typeof window !== 'undefined' ? localStorage.getItem('solearium_user') : null
    if (stored) {
      try {
        const user = JSON.parse(stored)
        localStorage.setItem('solearium_user', JSON.stringify({ ...user, password: newPassword }))
      } catch { /* ignore */ }
    }
    setStep3Error('')
    setStep(4)
  }

  const inputClass = 'w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-bone placeholder:text-bone-muted focus:outline-none focus:border-amber/60 transition-colors'

  // ── STEP 1 ───────────────────────────────────────────────────────────────
  if (step === 1) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-5 py-16" style={{ background: '#0D0D0D' }}>
        <div className="w-full max-w-[420px]">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-bone tracking-tight mb-3">Reset your password</h1>
            <p className="text-sm text-bone-muted leading-[1.75]">
              Enter the email or phone number linked to your profile.
            </p>
          </div>

          <form onSubmit={handleSendCode} className="space-y-3" noValidate>
            <input
              type="text"
              placeholder="Email or phone number"
              value={contact}
              onChange={e => { setContact(e.target.value); setStep1Error('') }}
              className={inputClass}
              autoFocus
            />
            {step1Error && <p className="text-sm text-red-400">{step1Error}</p>}
            <div className="pt-1">
              <Button type="submit" size="lg" className="w-full justify-center">Send reset code</Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <Link href="/login" className="text-xs text-bone-muted hover:text-bone-dim transition-colors">
              ← Back to sign in
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // ── STEP 2 ───────────────────────────────────────────────────────────────
  if (step === 2) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-5 py-16" style={{ background: '#0D0D0D' }}>
        <div className="w-full max-w-[420px]">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-bone tracking-tight mb-3">Enter verification code</h1>
            <p className="text-sm text-bone-muted leading-[1.75]">
              We sent a 6-digit code to <span className="text-bone">{contact}</span>
            </p>
          </div>

          <form onSubmit={handleVerifyOtp} className="space-y-5" noValidate>
            <OtpInput value={otp} onChange={v => { setOtp(v); setOtpError('') }} hasError={!!otpError} />

            {otpError && <p className="text-sm text-red-400">{otpError}</p>}

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
                onClick={() => setStep(1)}
                className="text-bone-muted hover:text-bone-dim transition-colors"
              >
                Try a different email or number
              </button>
            </div>

            <Button type="submit" size="lg" className="w-full justify-center" disabled={otp.length < 6}>
              Verify
            </Button>
          </form>
        </div>
      </div>
    )
  }

  // ── STEP 3 ───────────────────────────────────────────────────────────────
  if (step === 3) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-5 py-16" style={{ background: '#0D0D0D' }}>
        <div className="w-full max-w-[420px]">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-bone tracking-tight mb-3">Create a new password</h1>
            <p className="text-sm text-bone-muted leading-[1.75]">
              Choose something secure. Minimum 8 characters.
            </p>
          </div>

          <form onSubmit={handleUpdatePassword} className="space-y-3" noValidate>
            <input
              type="password"
              placeholder="New password"
              value={newPassword}
              onChange={e => { setNewPassword(e.target.value); setStep3Error('') }}
              className={inputClass}
              autoComplete="new-password"
              autoFocus
            />
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={e => { setConfirmPassword(e.target.value); setStep3Error('') }}
              className={inputClass}
              autoComplete="new-password"
            />
            {step3Error && <p className="text-sm text-red-400">{step3Error}</p>}
            <div className="pt-1">
              <Button type="submit" size="lg" className="w-full justify-center">Update password</Button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  // ── STEP 4: success ──────────────────────────────────────────────────────
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-5 py-16" style={{ background: '#0D0D0D' }}>
      <div className="w-full max-w-[420px]">
        <div className="mb-8">
          <div className="w-10 h-px bg-amber mb-6" />
          <h1 className="text-2xl font-bold text-bone tracking-tight mb-3">Password updated.</h1>
          <p className="text-sm text-bone-muted leading-[1.75]">
            Your password has been reset. You can now sign in with your new credentials.
          </p>
        </div>
        <Button href="/login" size="lg" className="w-full justify-center">
          Sign in →
        </Button>
      </div>
    </div>
  )
}
