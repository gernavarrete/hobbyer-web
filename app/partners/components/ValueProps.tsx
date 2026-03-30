const props = [
  {
    icon: 'target',
    title: 'Audiencia ultra-segmentada',
    description: 'Llegá solo a personas interesadas en tu nicho específico, optimizando tu alcance.',
  },
  {
    icon: 'loyalty',
    title: 'Ofertas exclusivas',
    description: 'Publicá promociones flash para llenar horarios de baja demanda con usuarios activos.',
  },
  {
    icon: 'bar_chart',
    title: 'Métricas reales',
    description: 'Entendé quiénes interactúan con tu negocio y cómo evoluciona tu visibilidad en la ciudad.',
  },
  {
    icon: 'payments',
    title: 'Costo mínimo',
    description: 'Un modelo de negocio diseñado para que tu retorno de inversión sea inmediato y escalable.',
  },
]

export default function ValueProps() {
  return (
    <section className="py-32 px-6 bg-surface-container-low/50">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {props.map((p) => (
            <div
              key={p.title}
              className="p-10 rounded-[2rem] bg-surface-container-high border border-white/5 hover:border-primary/40 transition-all group hover:-translate-y-1"
            >
              <span className="material-symbols-outlined text-brand-orange mb-8 text-5xl transition-transform group-hover:scale-110 w-12 h-12 inline-flex items-center justify-center">
                {p.icon}
              </span>
              <h4 className="text-2xl font-bold text-white mb-4">{p.title}</h4>
              <p className="text-on-secondary/90 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
