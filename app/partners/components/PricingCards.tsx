const plans = [
  {
    name: 'Gratis',
    price: '$0',
    period: 'para siempre',
    description: 'Para empezar a ganar visibilidad sin riesgo.',
    accent: false,
    features: [
      { icon: 'check', text: 'Perfil de negocio básico' },
      { icon: 'check', text: 'Aparecés en búsquedas por categoría' },
      { icon: 'check', text: 'Hasta 3 fotos del negocio' },
      { icon: 'check', text: 'Contacto por WhatsApp o email' },
      { icon: 'check', text: 'Métricas básicas de visitas' },
      { icon: 'close', text: 'Destacado en la app', disabled: true },
      { icon: 'close', text: 'Promociones y descuentos', disabled: true },
      { icon: 'close', text: 'Reportes avanzados', disabled: true },
    ],
    cta: 'Empezar gratis',
    href: '#registro',
  },
  {
    name: 'Pro',
    price: '$9.900',
    period: 'por mes',
    description: 'Para negocios que quieren destacar y crecer.',
    accent: true,
    badge: 'Más popular',
    features: [
      { icon: 'check', text: 'Todo lo del plan Gratis' },
      { icon: 'check', text: 'Perfil destacado en búsquedas' },
      { icon: 'check', text: 'Fotos y videos ilimitados' },
      { icon: 'check', text: 'Publicar promociones y descuentos' },
      { icon: 'check', text: 'Notificaciones push a usuarios cercanos' },
      { icon: 'check', text: 'Dashboard con métricas avanzadas' },
      { icon: 'check', text: 'Soporte prioritario' },
      { icon: 'check', text: 'Badge "Partner Verificado"' },
    ],
    cta: 'Empezar con Pro',
    href: '#registro',
  },
  {
    name: 'Enterprise',
    price: 'A medida',
    period: '',
    description: 'Para cadenas y marcas con múltiples sucursales.',
    accent: false,
    features: [
      { icon: 'check', text: 'Todo lo del plan Pro' },
      { icon: 'check', text: 'Múltiples sucursales' },
      { icon: 'check', text: 'API de integración' },
      { icon: 'check', text: 'Campañas de alcance nacional' },
      { icon: 'check', text: 'Account manager dedicado' },
      { icon: 'check', text: 'SLA garantizado' },
      { icon: 'check', text: 'Facturación personalizada' },
      { icon: 'check', text: 'Onboarding asistido' },
    ],
    cta: 'Hablar con ventas',
    href: '#registro',
  },
]

export default function PricingCards() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
            Planes
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Precios simples, sin sorpresas
          </h2>
          <p className="text-on-secondary text-lg max-w-xl mx-auto">
            Empezá gratis y escalá cuando veas los resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-[32px] p-8 border transition-transform duration-300 hover:-translate-y-1
                ${plan.accent
                  ? 'bg-primary border-primary/50 shadow-2xl shadow-primary/20'
                  : 'glass-card border-white/10'
                }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#FF6B00] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-8">
                <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${plan.accent ? 'text-white/70' : 'text-on-surface-variant'}`}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`text-4xl font-extrabold ${plan.accent ? 'text-white' : 'text-white'}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm mb-1 ${plan.accent ? 'text-white/70' : 'text-on-secondary'}`}>
                      /{plan.period}
                    </span>
                  )}
                </div>
                <p className={`text-sm ${plan.accent ? 'text-white/80' : 'text-on-secondary'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-3">
                    <span
                      className={`material-symbols-outlined text-base flex-shrink-0
                        ${feature.disabled
                          ? 'text-white/20'
                          : plan.accent ? 'text-white' : 'text-green-400'
                        }`}
                      style={{ fontSize: '18px' }}
                    >
                      {feature.icon}
                    </span>
                    <span
                      className={`text-sm ${
                        feature.disabled
                          ? 'text-white/20 line-through'
                          : plan.accent ? 'text-white/90' : 'text-on-secondary'
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={`block text-center py-4 rounded-full font-bold text-base transition-all active:scale-95
                  ${plan.accent
                    ? 'bg-white text-primary hover:bg-white/90 shadow-lg'
                    : 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20'
                  }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
