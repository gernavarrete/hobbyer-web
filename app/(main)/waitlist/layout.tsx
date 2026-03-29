import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Waitlist — Hobbyer',
  description: 'Anotate en la lista de espera de Hobbyer. Acceso exclusivo a la beta en Mendoza.',
  openGraph: {
    title: 'Waitlist — Hobbyer',
    description: 'Anotate en la lista de espera. Acceso exclusivo a la beta en Mendoza.',
    url: 'https://hobbyer.club/waitlist',
    siteName: 'Hobbyer',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waitlist — Hobbyer',
    description: 'Anotate en la lista de espera. Acceso exclusivo a la beta en Mendoza.',
  },
}

export default function WaitlistLayout({ children }: { children: React.ReactNode }) {
  return children
}
