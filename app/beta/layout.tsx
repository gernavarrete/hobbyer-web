import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beta — Hobbyer',
  description: 'Instrucciones de instalación de la beta de Hobbyer.',
  robots: 'noindex, nofollow',
}

export default function BetaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-[60] bg-[#101622] overflow-y-auto">
      <div className="fixed top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-1/3 h-1/3 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      {children}
    </div>
  )
}
