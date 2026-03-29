import type { Metadata } from 'next'
import PartnersNav from './components/PartnersNav'
import PartnersHero from './components/PartnersHero'
import SocialProofBar from './components/SocialProofBar'
import HowItWorks from './components/HowItWorks'
import ValueProps from './components/ValueProps'
import PricingCards from './components/PricingCards'
import PartnerRegistrationForm from './components/PartnerRegistrationForm'
import PartnersFooter from './components/PartnersFooter'

export const metadata: Metadata = {
  title: 'Partners | Hobbyer — Conectá tu negocio con tu comunidad',
  description: 'Mostrá tu negocio a personas apasionadas por el mismo hobby. Gratis para empezar. Mendoza, Argentina.',
  openGraph: {
    title: 'Partners | Hobbyer — Conectá tu negocio con tu comunidad',
    description: 'Mostrá tu negocio a personas apasionadas por el mismo hobby. Gratis para empezar.',
    url: 'https://hobbyer.club/partners',
    siteName: 'Hobbyer',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partners | Hobbyer — Conectá tu negocio con tu comunidad',
    description: 'Mostrá tu negocio a personas apasionadas por el mismo hobby. Gratis para empezar.',
  },
}

export default function PartnersPage() {
  return (
    <>
      <PartnersNav />
      <main className="bg-mesh min-h-screen">
        <PartnersHero />
        <SocialProofBar />
        <HowItWorks />
        <ValueProps />
        <PricingCards />
        <section id="register" className="py-32 px-6">
          <div className="max-w-[600px] mx-auto">
            <div className="glass-card p-12 md:p-16 relative overflow-hidden border-white/10">
              <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/20 rounded-full blur-[100px]" />
              <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-brand-orange/10 rounded-full blur-[100px]" />
              <div className="relative z-10 text-center mb-16">
                <h2 className="text-4xl font-extrabold text-white mb-4">Postulá tu negocio</h2>
                <p className="text-on-secondary/85 font-medium">
                  Revisamos cada solicitud para asegurar la calidad de la comunidad.
                </p>
              </div>
              <PartnerRegistrationForm />
            </div>
          </div>
        </section>
      </main>
      <PartnersFooter />
    </>
  )
}
