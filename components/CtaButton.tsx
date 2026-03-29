'use client'

import Link from 'next/link'
import { Analytics } from '@/app/lib/analytics'

interface CtaButtonProps {
  href: string
  label: string
  className?: string
  children: React.ReactNode
}

export default function CtaButton({ href, label, className, children }: CtaButtonProps) {
  return (
    <Link
      href={href}
      onClick={() => Analytics.ctaClick(label)}
      className={className}
    >
      {children}
    </Link>
  )
}
