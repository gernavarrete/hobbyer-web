const steps = [
  {
    number: '01',
    icon: 'app_registration',
    title: 'Registrá tu negocio',
    description: 'Completá el formulario con los datos de tu negocio. El proceso toma menos de 2 minutos.',
  },
  {
    number: '02',
    icon: 'verified',
    title: 'Te contactamos',
    description: 'Nuestro equipo revisa tu solicitud y te escribe por WhatsApp o email en menos de 48hs.',
  },
  {
    number: '03',
    icon: 'storefront',
    title: 'Aparecés en Hobbyer',
    description: 'Tu negocio se muestra a usuarios según su hobby, ubicación e intereses específicos.',
  },
  {
    number: '04',
    icon: 'trending_up',
    title: 'Medís resultados',
    description: 'Dashboard con métricas reales: vistas, clics, consultas y conversiones desde la app.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-surface-container-low">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
            Proceso
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Cómo funciona
          </h2>
          <p className="text-on-secondary text-lg max-w-xl mx-auto">
            De cero a visibilidad en tu comunidad en cuatro pasos.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+2.5rem)] w-[calc(100%-2.5rem)] h-px bg-gradient-to-r from-white/10 to-transparent" />
              )}
              <div className="glass-card border border-white/10 rounded-[32px] p-8 text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="text-xs font-black text-primary/50 tracking-widest mb-4">{step.number}</div>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-lg font-extrabold text-white mb-3">{step.title}</h3>
                <p className="text-on-secondary text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
