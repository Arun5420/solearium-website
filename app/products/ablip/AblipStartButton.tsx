'use client'

import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

interface Props {
  size?: 'sm' | 'md' | 'lg'
}

export default function AblipStartButton({ size = 'lg' }: Props) {
  const router = useRouter()

  const handleClick = () => {
    try {
      const stored = typeof window !== 'undefined' ? localStorage.getItem('solearium_user') : null
      router.push(stored ? '/dashboard' : '/login?redirect=/dashboard')
    } catch {
      router.push('/login?redirect=/dashboard')
    }
  }

  return (
    <Button size={size} onClick={handleClick}>
      Start assessment <ArrowRight size={18} />
    </Button>
  )
}
