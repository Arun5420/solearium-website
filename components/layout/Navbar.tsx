'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'

const navLinks = [
  { label: 'Platform', href: '/platform' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Products', href: '/products' },
  { label: 'Research', href: '/research' },
  { label: 'Company', href: '/company' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'bg-ink/95 backdrop-blur-md border-b border-ink-border' : 'bg-transparent'
        )}
      >
        <div className="container-wide px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <LogoMark />
              <span className="text-base font-bold tracking-tight text-bone group-hover:text-amber transition-colors duration-200">
                Sole-arium
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm px-3.5 py-2 rounded-full transition-colors duration-200',
                    pathname === link.href || (pathname?.startsWith(link.href + '/') ?? false)
                      ? 'text-amber'
                      : 'text-bone-dim hover:text-bone'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop right actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/login" className="text-sm text-bone-muted hover:text-bone-dim transition-colors duration-200">
                Login
              </Link>
              <Button href="/contact" size="sm">Book Assessment</Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-bone-dim hover:text-bone transition-colors"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-ink/95 backdrop-blur-md" onClick={() => setOpen(false)} />
          <nav className="relative flex flex-col h-full pt-20 px-6 pb-8" aria-label="Mobile navigation">
            <div className="flex-1 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'flex items-center text-lg font-medium py-3 border-b border-ink-border transition-colors duration-200',
                    pathname === link.href ? 'text-amber' : 'text-bone-dim hover:text-bone'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/login" className="flex items-center text-lg font-medium py-3 border-b border-ink-border text-bone-muted hover:text-bone-dim transition-colors">
                Login
              </Link>
            </div>
            <div className="pt-6">
              <Button href="/contact" size="lg" className="w-full justify-center">
                Book Assessment
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect width="28" height="28" rx="6" fill="#E8A020" fillOpacity="0.12" />
      <path
        d="M14 6C9.58 6 6 9.58 6 14C6 18.42 9.58 22 14 22C18.42 22 22 18.42 22 14"
        stroke="#E8A020"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 6L22 10M22 6L18 10"
        stroke="#E8A020"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="14" cy="14" r="3" fill="#E8A020" fillOpacity="0.6" />
    </svg>
  )
}
