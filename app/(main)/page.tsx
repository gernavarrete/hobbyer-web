import type { Metadata } from 'next'
import Image from 'next/image'
import CtaButton from '@/components/CtaButton'

export const metadata: Metadata = {
  title: 'Hobbyer — Encontrá personas con tus mismos hobbies',
  description: 'Conectate con personas cercanas que comparten tus intereses. Pádel, running, música, gaming y más. Lanzamos en Mendoza.',
  openGraph: {
    title: 'Hobbyer — Encontrá personas con tus mismos hobbies',
    description: 'Conectate con personas cercanas que comparten tus intereses. Pádel, running, música, gaming y más.',
    url: 'https://hobbyer.club',
    siteName: 'Hobbyer',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hobbyer — Encontrá personas con tus mismos hobbies',
    description: 'Conectate con personas cercanas que comparten tus intereses.',
  },
}

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              Discovery Reimagined
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-white">
              Tu círculo cercano no comparte tus hobbies.{' '}
              <span className="text-primary">Nosotros sí.</span>
            </h1>
            <p className="text-lg md:text-xl text-on-secondary mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Conectá con personas que vibran en tu misma frecuencia. Deporte, arte, gaming o lo que te apasione, encontralo en Hobbyer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <CtaButton
                href="/waitlist"
                label="home_hero_waitlist"
                className="bg-primary text-white px-10 py-5 rounded-full text-lg font-extrabold shadow-2xl shadow-primary/30 active:scale-95 transition-all text-center"
              >
                Unite a la Waitlist
              </CtaButton>
              <CtaButton
                href="/waitlist"
                label="home_hero_comunidad"
                className="glass-card text-white px-10 py-5 rounded-full text-lg font-bold border border-white/10 hover:bg-white/10 active:scale-95 transition-all text-center"
              >
                Ver Comunidad
              </CtaButton>
            </div>
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-3">
                <Image
                  className="w-10 h-10 rounded-full border-2 border-background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnKv2VOB_vEWXAlR5qCFCezoNlWzxcygeqOB88JO2MPISGlPQfZKAx4umInokZ-YTkeJjdVQzy337M-n4WyRSk0k_7Tmml0uS_uPMm20xiKY-A6JRt1AcHlbcaNCsk2ODjwIoBweRM0mPouqwwtIMldyvvUxcIVpZAAF2UB5DmEPqO273ubHspGml73OGnSUbcNQP48AwtfguXa3XQGj8afUh9S66oSTC1YhFxG4DpEi0Y3rQ7GL4-9fx1dcaV5wn75kXJvjldp2_T"
                  alt="Usuaria de Hobbyer sonriendo"
                  width={40}
                  height={40}
                  priority
                />
                <Image
                  className="w-10 h-10 rounded-full border-2 border-background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKgcGT7wVGXGy0OhRVS5KZCFF94IpJEb2ludehketGCxwbzxpDc0PDleFf9-EsOOFisBJ3AH5GmoVSotOIAFBgcIQlYoU1vI4Dk1MlQBg_RDKGU1M_4nxbRn4h3UDQYJhFEtbhq9Cj21kjckpqj_096KaG1BIPqx0BUX0hNH_BJwzRBFzVyxnD0k0VwLSkzSHK5qbZHOmnla2b2NpxrLQijelRK9C_nuYYzUZWrkmyFjA60ZueRROxbJ0xDDcFhUupPPAbugIhGN3f"
                  alt="Usuario de Hobbyer sonriendo"
                  width={40}
                  height={40}
                  priority
                />
                <Image
                  className="w-10 h-10 rounded-full border-2 border-background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIXV6hmOVSdHefd-MaiOTEKEuXuu7fZwRyT2xpqdOoIMVDYtx_iogNXnBiGA0lhwZUIiq1ArfqwsgJn5x4SRqw71TkDLlhtILKbuUn1IKN234uWPiJmTS7dSt6UXtQc96y7vqfyPHIVKUeeobszV5eWKpOgaRs3MOXdR10OcTlk5t_TzjU-AeFN6ozQVnfgowl03HRQFQdrOL0X2vNYML0IjWxOsvviUNooz0SAwjkV6guxBmgCYlGNtpBMUINE5u08QtTEuJRoRSK"
                  alt="Usuario de Hobbyer con lentes"
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <p className="text-sm text-slate-400 font-medium">
                <span className="text-white font-bold">+2,400</span> ya se unieron
              </p>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            {/* App Mockup */}
            <div className="relative w-full max-w-[320px] aspect-[9/19.5] bg-surface-container-highest rounded-[3rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] border-[6px] border-slate-800">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative bg-background">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-8">
                    <div className="w-10 h-10 rounded-full bg-slate-800" />
                    <span className="material-symbols-outlined text-white">notifications</span>
                  </div>
                  <div className="space-y-6">
                    <div className="h-4 w-3/4 bg-slate-800 rounded-full" />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="aspect-square rounded-2xl bg-primary/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-3xl">sports_tennis</span>
                      </div>
                      <div className="aspect-square rounded-2xl bg-surface-container-high flex items-center justify-center">
                        <span className="material-symbols-outlined text-slate-400 text-3xl">palette</span>
                      </div>
                    </div>
                    <div className="p-4 rounded-3xl bg-surface-container-high space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/40" />
                        <div className="h-3 w-1/2 bg-slate-700 rounded-full" />
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full" />
                      <div className="h-2 w-2/3 bg-slate-800 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating badges */}
            <div className="absolute top-20 -left-12 glass-card p-4 rounded-2xl shadow-xl border border-white/10 hidden md:block">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary">local_fire_department</span>
                <span className="text-xs font-bold text-white">Match! Tenis Club</span>
              </div>
            </div>
            <div className="absolute bottom-32 -right-8 glass-card p-4 rounded-2xl shadow-xl border border-white/10 hidden md:block">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-green-400">check_circle</span>
                <span className="text-xs font-bold text-white">Beneficio: -20% Nike</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Layers Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              The Three Layers
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
              Nuestra infraestructura está diseñada para que nunca más tengas que hacer lo que amas solo.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Find Partners */}
            <div className="group relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-4">
              <Image
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCApSUcbTkyoLXflB_3EPqwnT6FjInTQ_VWQWv1G_S51jfXUrnJNGPwBzREh5vEoEweImFexizBOFTeAYii1m8EdzowUqNtBGeHOByQZqG44h6iI0ivQkMnMpRiHlnHdLi11fYnxTzJjUiTPY6nXOplh0ltTkJuMwGVpeaQuvKrToTspX2JrmC5YNnfpEJmr3xNlJRUQL2A5jOzeH-UP7oRvIVCCauHn6s_aXrhdEsolxe0hgTjQr-bEj7NmHuu5qcNivh2FtdEtjtp"
                alt="Dos personas chocando los cinco durante una carrera matutina en un parque"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 p-8 w-full">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/30">
                  <span className="material-symbols-outlined text-white">person_search</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-3">1. Find Partners</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Conexiones 1:1 basadas en nivel de habilidad, ubicación y disponibilidad. Tu compañero perfecto de entrenamiento o estudio.
                </p>
                <span className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                  Descubrir <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </div>

            {/* Card 2: Join Tribes */}
            <div className="group relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-4">
              <Image
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8PNuUlXD-6Wm7ZUZqZNsQqfXYuqtL7BPtHQY1iZlJF9YHaSEWvZPrLF3J2XGvX9UNbZDw7btxyQCCT9HOxaNs6EnAByTxkbByBOX0Lmy_MUjG-8Mg0Q3UK0p2QCNzi2oXRTG3frg71wi0KslIZPtMOASO35T5ZW39wZ5ok5neLSuZm5siZ1vSffJfoqvS2LLm8pCnAu3OvOjQp6eSmfcBMqsjOAppwl3KHDge3SEqeMePcJe__gcAB1_kGDHLieDidd-PL9McL2Vg"
                alt="Grupo de personas creativas trabajando juntas en un proyecto en una oficina moderna"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 p-8 w-full">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/30">
                  <span className="material-symbols-outlined text-white">groups_3</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-3">2. Join Tribes</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Unite a comunidades organizadas. Eventos semanales, chats grupales y una red de apoyo para llevar tu hobby al siguiente nivel.
                </p>
                <span className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                  Explorar Tribus <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </div>

            {/* Card 3: Real Benefits */}
            <div className="group relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-4">
              <Image
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCNbUk9D2348Jssrv2l30sL6M96tkHhNUGtY9WkSmYPVIJayHxkVsV4EFiwW7GouHcT0D-izYZZeXSrZms30jHPg8W8RV7L_E01kMnMfRxegGG4q3Z4MX-zzNPI_eBDusCP-GcTNtJ4Isp6Ekh_WPxfh4sJJyFTWxRncqvALfJNXREUgZr4-pFzGywUSnJu3ataJgxSAPJNhzKKvapcXdG4xvATICDUb1WpRWDTjeNtfVtn9PeVAUqdXy-wevQPH6TMtJaPQn2ae45"
                alt="Primer plano de una tarjeta de crédito premium siendo usada para un pago sin contacto"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 p-8 w-full">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/30">
                  <span className="material-symbols-outlined text-white">loyalty</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-3">3. Real Benefits</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Descuentos exclusivos en marcas aliadas, gimnasios, tiendas de arte y espacios de coworking por ser parte de la comunidad.
                </p>
                <span className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                  Ver Alianzas <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass-card border border-white/5 rounded-lg p-12 md:p-20 relative overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-8">
              ¿Listo para encontrar tu lugar?
            </h2>
            <p className="text-on-secondary mb-12 text-lg">
              Estamos lanzando pronto por invitación. Asegurá tu lugar en la primera ola de Hobbyer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CtaButton
                href="/waitlist"
                label="home_cta_bottom_waitlist"
                className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-full text-lg font-extrabold shadow-xl shadow-primary/20 active:scale-95 transition-all"
              >
                Unite a la Waitlist
              </CtaButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
