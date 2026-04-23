'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'

type Tab = 'overview' | 'ablip' | 'full-assessment' | 'prescriptions' | 'orders'

const tabs: { id: Tab; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'ablip', label: 'ABLIP Assessment' },
  { id: 'full-assessment', label: 'Full Assessment' },
  { id: 'prescriptions', label: 'Prescriptions' },
  { id: 'orders', label: 'Orders' },
]

function EmptyState({ message, cta }: { message: string; cta?: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl border border-ink-border px-6 py-10 text-center"
      style={{ background: '#111111' }}
    >
      <p className="text-sm text-bone-muted mb-4">{message}</p>
      {cta}
    </div>
  )
}

export default function DashboardView() {
  const router = useRouter()
  const [firstName, setFirstName] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<Tab>('overview')

  useEffect(() => {
    try {
      const stored = localStorage.getItem('solearium_user')
      if (stored) {
        const user = JSON.parse(stored)
        setFirstName(user.firstName || user.name?.split(' ')[0] || null)
      }
    } catch { /* ignore */ }
  }, [])

  const displayName = firstName ? `${firstName}'s` : 'Your'

  return (
    <div className="min-h-[calc(100vh-4rem)] py-16 px-5" style={{ background: '#0D0D0D' }}>
      <div className="container-tight">

        {/* Page heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-bone tracking-tight">
            {displayName} Movement Profile
          </h1>
        </div>

        {/* Tab navigation */}
        <div className="mb-8 -mx-1">
          <div className="flex overflow-x-auto gap-1 pb-px scrollbar-hide">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={[
                    'flex-shrink-0 px-4 py-2.5 text-sm font-medium rounded-full transition-all duration-150',
                    isActive
                      ? 'bg-amber text-ink'
                      : 'text-bone-muted hover:text-bone hover:bg-ink-card',
                  ].join(' ')}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab content */}

        {/* ── OVERVIEW ─────────────────────────────────────────────────────── */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Status card */}
            <div
              className="rounded-2xl border border-ink-border p-7"
              style={{ background: '#161616' }}
            >
              <p className="text-base font-semibold text-bone mb-2">
                Your profile is active.
              </p>
              <p className="text-sm text-bone-muted leading-[1.75] mb-5">
                Start with a gait analysis to generate your first movement data.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/products/ablip" size="md">
                  Start Your Gait Analysis
                </Button>
                <Button href="/contact" variant="outline" size="md">
                  Book Full Assessment
                </Button>
              </div>
            </div>

            {/* Section status summary */}
            <div className="space-y-px border border-ink-border rounded-2xl overflow-hidden">
              {[
                { label: 'ABLIP Assessments', status: 'No data' },
                { label: 'Full Assessments', status: 'No data' },
                { label: 'Prescriptions', status: 'No data' },
                { label: 'Orders', status: 'No data' },
              ].map((row, i, arr) => (
                <div
                  key={row.label}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-6 py-4"
                  style={{
                    background: '#111111',
                    borderBottom: i < arr.length - 1 ? '1px solid #383838' : 'none',
                  }}
                >
                  <p className="text-sm font-semibold text-bone">{row.label}</p>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-ink-card border border-ink-border text-bone-muted">
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── ABLIP ASSESSMENT ─────────────────────────────────────────────── */}
        {activeTab === 'ablip' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-bone mb-1">ABLIP Assessments</h2>
              <p className="text-sm text-bone-muted">Phone-based gait analysis history.</p>
            </div>
            <EmptyState
              message="No assessments yet. Start your first gait analysis."
              cta={
                <Button href="/products/ablip" size="md">
                  Start Your Gait Analysis
                </Button>
              }
            />
          </div>
        )}

        {/* ── FULL ASSESSMENT ──────────────────────────────────────────────── */}
        {activeTab === 'full-assessment' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-bone mb-1">Full Assessments</h2>
              <p className="text-sm text-bone-muted">Clinical and in-person assessment reports.</p>
            </div>
            <EmptyState
              message="No full assessments yet. Book your first clinical assessment."
              cta={
                <Button href="/contact" variant="outline" size="md">
                  Book Full Assessment
                </Button>
              }
            />
          </div>
        )}

        {/* ── PRESCRIPTIONS ────────────────────────────────────────────────── */}
        {activeTab === 'prescriptions' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-bone mb-1">Prescriptions</h2>
              <p className="text-sm text-bone-muted">Active and past insole prescriptions.</p>
            </div>
            <EmptyState message="No prescriptions yet." />
          </div>
        )}

        {/* ── ORDERS ───────────────────────────────────────────────────────── */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-bone mb-1">Orders</h2>
              <p className="text-sm text-bone-muted">Your order history and status.</p>
            </div>
            <EmptyState message="No orders placed yet." />
          </div>
        )}

        {/* Sign out */}
        <div className="mt-10 pt-8 border-t border-ink-border">
          <button
            type="button"
            onClick={() => {
              localStorage.removeItem('solearium_user')
              router.push('/login')
            }}
            className="text-xs text-bone-muted hover:text-bone-dim transition-colors"
          >
            Sign out
          </button>
        </div>

      </div>
    </div>
  )
}
