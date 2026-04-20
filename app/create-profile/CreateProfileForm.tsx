'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'
import OtpInput from '@/components/ui/OtpInput'

type Step = 'contact' | 'otp' | 'password'

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

const dotIndex: Record<Step, number> = { contact: 0, otp: 1, password: 2 }

function StepDots({ step }: { step: Step }) {
  const active = dotIndex[step]
  return (
    <div className="flex items-center gap-2 mb-8">
      {[0, 1, 2].map(i => (
        <span
          key={i}
          className={`w-2 h-2 rounded-full transition-colors ${i <= active ? 'bg-amber' : 'bg-ink-border'}`}
        />
      ))}
    </div>
  )
}

export default function CreateProfileForm() {
  const router = useRouter()
  const [step, setStep] = useState<Step>('contact')

  // Step 1 — contact
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [step1Error, setStep1Error] = useState('')

  // Step OTP
  const [otp, setOtp] = useState('')
  const [otpError, setOtpError] = useState('')
  const resend = useCountdown(30)

  // Step 2 — password
  const [secondContact, setSecondContact] = useState('')
  const [password, setPassword] = useState('')
  const [step2Error, setStep2Error] = useState('')

  const primaryIsEmail = email.trim() !== ''
  const contactDisplay = email.trim() || phone.trim()
  const missingPlaceholder = primaryIsEmail ? 'Phone number (optional)' : 'Email address (optional)'

  // ── Step 1: contact submit ──────────────────────────────────────────────
  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) { setStep1Error('Please enter your full name.'); return }
    if (!email.trim() && !phone.trim()) { setStep1Error('Please enter at least one contact method — email or phone.'); return }
    setStep1Error('')
    setOtp('')
    setOtpError('')
    setStep('otp')
    resend.begin()
  }

  // ── OTP verify ──────────────────────────────────────────────────────────
  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (otp.length < 6) { setOtpError('Please enter the 6-digit code.'); return }
    // Demo: any 6-digit code succeeds
    setOtpError('')
    setStep('password')
  }

  // ── Step 2: password submit ─────────────────────────────────────────────
  const handleStep2 = (e: React.FormEvent) => {
    e.preventDefault()
    if (!password.trim()) { setStep2Error('Please set a password.'); return }
    if (password.length < 8) { setStep2Error('Password must be at least 8 characters.'); return }

    const firstName = name.trim().split(' ')[0]
    const identifier = email.trim() || phone.trim()
    const resolvedEmail = primaryIsEmail ? email.trim() : secondContact.trim()
    const resolvedPhone = primaryIsEmail ? secondContact.trim() : phone.trim()

    localStorage.setItem(
      'solearium_user',
      JSON.stringify({ name: name.trim(), firstName, identifier, email: resolvedEmail, phone: resolvedPhone, password })
    )
    router.push('/dashboard')
  }

  // ── STEP 1: contact ─────────────────────────────────────────────────────
  if (step === 'contact') {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-5 py-16" style={{ background: '#0D0D0D' }}>
        <div className="w-full max-w-[420px]">
          <StepDots step={step} />
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-bone tracking-tight mb-3">Create your movement profile</h1>
            <p className="text-sm text-bone-muted leading-[1.75]">Your assessment builds it. This is where it begins.</p>
          </div>

          <form onSubmit={handleStep1} className="space-y-3" noValidate>
            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={e => { setName(e.target.value); setStep1Error('') }}
              className="w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-bone placeholder:text-bone-muted focus:outline-none focus:border-amber/60 transition-colors"
              autoComplete="name"
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={e => { setEmail(e.target.value); setStep1Error('') }}
              className="w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-bone placeholder:text-bone-muted focus:outline-none focus:border-amber/60 transition-colors"
              autoComplete="email"
            />
            <input
              type="tel"
              placeholder="Phone number"
              value={phone}
              onChange={e => { setPhone(e.target.value); setStep1Error('') }}
              className="w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-bone placeholder:text-bone-muted focus:outline-none focus:border-amber/60 transition-colors"
              autoComplete="tel"
            />
            <p className="text-xs text-bone-muted leading-[1.75] pt-1">
              We'll use this to link your assessments and send your reports.
            </p>
            {step1Error && <p className="text-sm text-red-400">{step1Error}</p>}
            <div className="pt-1">
              <Button type="submit" size="lg" className="w-full justify-center">Continue →</Button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-xs text-bone-muted">
              Already have a profile?{' '}
              <a href="/login" className="text-bone hover:text-amber transition-colors">Sign in</a>
            </p>
          </div>
        </div>
      </div>
    )
  }

  // ── STEP OTP: verify contact ─────────────────────────────────────────────
  if (step === 'otp') {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-5 py-16" style={{ background: '#0D0D0D' }}>
        <div className="w-full max-w-[420px]">
          <StepDots step={step} />
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-bone tracking-tight mb-3">Verify your contact</h1>
            <p className="text-sm text-bone-muted leading-[1.75]">
              We've sent a 6-digit code to <span className="text-bone">{contactDisplay}</span>
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
                onClick={() => setStep('contact')}
                className="text-bone-muted hover:text-bone-dim transition-colors"
              >
                Change contact
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

  // ── STEP 2: password ─────────────────────────────────────────────────────
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-5 py-16" style={{ background: '#0D0D0D' }}>
      <div className="w-full max-w-[420px]">
        <StepDots step={step} />
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-bone tracking-tight mb-3">Complete your profile</h1>
          <p className="text-sm text-bone-muted leading-[1.75]">This completes your profile.</p>
        </div>

        <form onSubmit={handleStep2} className="space-y-3" noValidate>
          <input
            type={primaryIsEmail ? 'tel' : 'email'}
            placeholder={missingPlaceholder}
            value={secondContact}
            onChange={e => { setSecondContact(e.target.value); setStep2Error('') }}
            className="w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-bone placeholder:text-bone-muted focus:outline-none focus:border-amber/60 transition-colors"
          />
          <div>
            <input
              type="password"
              placeholder="Set a password"
              value={password}
              onChange={e => { setPassword(e.target.value); setStep2Error('') }}
              className="w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-bone placeholder:text-bone-muted focus:outline-none focus:border-amber/60 transition-colors"
              autoComplete="new-password"
            />
            <p className="text-xs text-bone-muted mt-2 leading-[1.75]">You'll use this to access your reports.</p>
          </div>
          {step2Error && <p className="text-sm text-red-400">{step2Error}</p>}
          <div className="pt-1">
            <Button type="submit" size="lg" className="w-full justify-center">Activate my profile →</Button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <button type="button" onClick={() => setStep('otp')} className="text-xs text-bone-muted hover:text-bone-dim transition-colors">
            ← Back
          </button>
        </div>
      </div>
    </div>
  )
}
