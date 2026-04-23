'use client'

import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function AblipHeroCTAs() {
  const router = useRouter()

  const handleStartAssessment = () => {
    try {
      const stored = typeof window !== 'undefined' ? localStorage.getItem('solearium_user') : null
      if (stored) {
        router.push('/dashboard')
      } else {
        router.push('/login?redirect=/dashboard')
      }
    } catch {
      router.push('/login?redirect=/dashboard')
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <Button size="lg" onClick={handleStartAssessment}>
        Start assessment <ArrowRight size={18} />
      </Button>
      <Button href="#ablip-features" variant="secondary" size="lg">
        See How It Works
      </Button>
    </div>
  )
}
