import type { Metadata } from 'next'
import PartnersHero from './components/PartnersHero'
import HowItWorks from './components/HowItWorks'
import ValueProps from './components/ValueProps'
import PricingCards from './components/PricingCards'
import PartnerRegistrationForm from './components/PartnerRegistrationForm'
import PartnersSocialProof from './components/PartnersSocialProof'

export const metadata: Metadata = {
  title: 'Partners | Hobbyer — Conectá tu negocio con tu comunidad',
  description: 'Mostrá tu negocio a personas apasionadas por el mismo hobby. Gratis para empezar.',
}

export default function PartnersPage() {
  return (
    <main>
      <PartnersHero />
      <HowItWorks />
      <ValueProps />
      <PricingCards />
      <PartnersSocialProof />

      {/* Registration Section */}
      <section id="registro" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="max-w-xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-bold tracking-widest uppercase mb-4">
              Registro
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Empezá hoy, gratis
            </h2>
            <p className="text-on-secondary text-lg">
              Completá el formulario y te contactamos en menos de 48 horas.
            </p>
          </div>

          <div className="glass-card border border-white/10 rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] relative">
            <PartnerRegistrationForm />
          </div>
        </div>
      </section>
    </main>
  )
}
