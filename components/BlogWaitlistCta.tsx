'use client'

import Link from 'next/link'
import { Analytics } from '@/app/lib/analytics'

export default function BlogWaitlistCta() {
  return (
    <div className="glass-card p-8 mt-16 text-center">
      <h3 className="text-2xl font-extrabold text-white mb-3">
        ¿Querés ser de los primeros en Mendoza?
      </h3>
      <p className="text-on-secondary/80 mb-8">
        Sumate a la lista de espera de Hobbyer — gratis, sin compromiso.
      </p>
      <Link
        href="/waitlist"
        onClick={() => Analytics.ctaClick('blog_waitlist_cta')}
        className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold hover:shadow-cobalt-glow hover:brightness-110 transition-all active:scale-95"
      >
        Unirme a la lista
      </Link>
    </div>
  )
}
