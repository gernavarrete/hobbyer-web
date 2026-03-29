import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '¡Solicitud recibida! | Hobbyer Partners',
  description: 'Tu negocio está en la lista de Hobbyer Partners.',
  robots: 'noindex',
}

export default function PartnersGraciasPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden bg-[#101622]">
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-brand-orange/10 rounded-full blur-[100px] -z-10" />

      <div className="text-center max-w-lg w-full">
        <span className="inline-block px-5 py-2 rounded-full bg-brand-orange/20 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-widest mb-10">
          ¡Solicitud recibida!
        </span>

        <div className="w-28 h-28 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mx-auto mb-10">
          <span
            className="material-symbols-outlined text-brand-orange"
            style={{ fontSize: '72px', fontVariationSettings: '"FILL" 1' }}
          >
            storefront
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
          ¡Tu negocio está en la lista!
        </h1>
        <p className="text-on-secondary text-lg leading-relaxed mb-12">
          Revisamos cada solicitud para asegurar la calidad de la comunidad Hobbyer.
          Te contactamos en los próximos días.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/partners#pricing"
            className="bg-primary text-white px-10 py-4 rounded-full font-extrabold text-lg hover:shadow-cobalt-glow transition-all hover:-translate-y-0.5 active:scale-[0.98] text-center"
          >
            Ver nuestros planes
          </Link>
          <Link
            href="/"
            className="glass-card text-white px-10 py-4 rounded-full font-bold border border-white/10 hover:bg-white/10 transition-all active:scale-[0.98] text-center"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  )
}
