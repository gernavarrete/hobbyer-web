import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import '@material-symbols/font-400/outlined.css'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hobbyer.club'),
  title: 'Hobbyer — Encontrá personas con tus mismos hobbies',
  description: 'Conectate con personas cercanas que comparten tus intereses. Pádel, running, música, gaming y más.',
  keywords: 'hobbies, social, argentina, mendoza, pádel, running, grupos',
  openGraph: {
    title: 'Hobbyer',
    description: 'Encontrá personas con tus mismos hobbies, cerca tuyo.',
    url: 'https://hobbyer.club',
    siteName: 'Hobbyer',
    locale: 'es_AR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`dark ${plusJakartaSans.variable}`}>
      <head />
      <body className="antialiased overflow-x-hidden">
        <div className="fixed top-0 right-0 -z-10 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="fixed bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  )
}
