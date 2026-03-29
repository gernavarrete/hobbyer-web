const values = [
  {
    icon: 'target',
    color: 'text-primary',
    bg: 'bg-primary/10',
    title: 'Audiencia ultra segmentada',
    description: 'No pagás por impresiones al azar. Llegás exactamente a quienes ya tienen el hobby relacionado a tu negocio.',
  },
  {
    icon: 'location_on',
    color: 'text-[#FF6B00]',
    bg: 'bg-[#FF6B00]/10',
    title: 'Alcance local',
    description: 'Tus anuncios y perfil aparecen prioritariamente a usuarios cercanos a tu negocio. Ideal para comercios físicos.',
  },
  {
    icon: 'volunteer_activism',
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    title: 'Comunidad comprometida',
    description: 'Los usuarios de Hobbyer tienen alta intención de compra. Buscan activamente productos y servicios para su hobby.',
  },
  {
    icon: 'bar_chart',
    color: 'text-primary',
    bg: 'bg-primary/10',
    title: 'Métricas en tiempo real',
    description: 'Dashboard completo con visitas, clics e interacciones. Sabés exactamente qué funciona y qué ajustar.',
  },
  {
    icon: 'payments',
    color: 'text-[#FF6B00]',
    bg: 'bg-[#FF6B00]/10',
    title: 'Sin costo de entrada',
    description: 'El plan básico es gratuito para siempre. Empezá a ganar visibilidad sin invertir nada hasta ver resultados.',
  },
  {
    icon: 'support_agent',
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    title: 'Soporte dedicado',
    description: 'Te asignamos un representante que te ayuda a optimizar tu perfil y sacarle el máximo provecho a la plataforma.',
  },
]

export default function ValueProps() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-bold tracking-widest uppercase mb-4">
            Beneficios
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Por qué Hobbyer
          </h2>
          <p className="text-on-secondary text-lg max-w-xl mx-auto">
            Una plataforma diseñada para que tu negocio crezca con la comunidad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="glass-card border border-white/10 rounded-[32px] p-8 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className={`w-12 h-12 rounded-2xl ${v.bg} flex items-center justify-center mb-6`}>
                <span className={`material-symbols-outlined ${v.color}`}>{v.icon}</span>
              </div>
              <h3 className="text-lg font-extrabold text-white mb-3">{v.title}</h3>
              <p className="text-on-secondary text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
