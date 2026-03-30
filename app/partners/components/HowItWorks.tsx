const steps = [
  {
    number: '1',
    icon: 'storefront',
    title: 'Creá tu perfil',
    description: 'Personalizá la presencia de tu negocio con fotos, horarios y la esencia única de lo que ofrecés a la comunidad.',
  },
  {
    number: '2',
    icon: 'dynamic_feed',
    title: 'Aparecé en el feed',
    description: 'Nuestro algoritmo inteligente te muestra prioritariamente a los usuarios con intereses compatibles.',
  },
  {
    number: '3',
    icon: 'chat_bubble',
    title: 'Conectá directo',
    description: 'Recibí consultas directas y generá tráfico real a tu local sin intermediarios ni comisiones abusivas.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-48 px-12 max-w-[1280px] mx-auto">
      <div className="text-center mb-32">
        <h2 className="text-6xl md:text-7xl font-extrabold text-white mb-10 tracking-tight">
          Cómo funciona Hobbyer
        </h2>
        <p className="text-on-secondary-container/70 max-w-3xl mx-auto text-2xl leading-relaxed font-medium">
          En tres simples pasos, empezá a traccionar clientes calificados a tu establecimiento de forma automatizada.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-16">
        {steps.map((step) => (
          <div
            key={step.number}
            className="relative group p-16 glass-card border-none hover:translate-y-[-16px] transition-all duration-500 bg-white/[0.03]"
          >
            <div className="text-9xl font-black text-electric-cobalt/5 absolute -top-12 left-12 select-none group-hover:text-electric-cobalt/10 transition-colors">
              {step.number}
            </div>
            <div className="relative z-10">
              <div className="w-24 h-24 bg-electric-cobalt/10 rounded-2xl flex items-center justify-center mb-12 border border-electric-cobalt/20 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-electric-cobalt text-5xl w-12 h-12 inline-flex items-center justify-center">{step.icon}</span>
              </div>
              <h3 className="text-4xl font-bold text-white mb-8">{step.title}</h3>
              <p className="text-on-secondary/85 leading-relaxed text-xl">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
