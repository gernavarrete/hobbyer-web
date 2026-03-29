export default function PricingCards() {
  return (
    <section className="py-32 px-6 max-w-[1280px] mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-5xl font-extrabold text-white mb-6">Planes para cada etapa</h2>
        <p className="text-on-secondary-container/70 text-lg">Elegí la forma en que querés potenciar tu visibilidad.</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 items-stretch">
        {/* Starter */}
        <div className="p-12 glass-card flex flex-col h-full border-white/10 hover:border-white/20 transition-all">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-white mb-3">Starter</h3>
            <div className="text-5xl font-extrabold text-white mb-4">Gratis</div>
            <p className="text-on-secondary/60">Para empezar a darte a conocer.</p>
          </div>
          <ul className="space-y-6 mb-12 flex-grow">
            <li className="flex items-center gap-4 text-on-secondary">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              Perfil básico de negocio
            </li>
            <li className="flex items-center gap-4 text-on-secondary">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              1 Publicación mensual
            </li>
            <li className="flex items-center gap-4 text-on-secondary">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              Métricas de visualización
            </li>
          </ul>
          <button className="w-full py-5 rounded-full border border-white/20 font-bold hover:bg-white/5 transition-all active:scale-95 text-white">
            Seleccionar
          </button>
        </div>

        {/* Pro */}
        <div className="p-12 glass-card flex flex-col h-full border-brand-orange/50 shadow-orange-glow relative overflow-hidden scale-[1.03] z-10 bg-white/[0.08]">
          <div className="absolute top-0 right-0 bg-brand-orange text-gray-900 text-[11px] font-black px-6 py-2 uppercase tracking-tighter rounded-bl-2xl">
            Más Popular
          </div>
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-white mb-3">Pro</h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-5xl font-extrabold text-white">$15.000</span>
              <span className="text-on-secondary/60 text-lg">/mes</span>
            </div>
            <p className="text-on-secondary/60">Potenciá tus visitas al máximo.</p>
          </div>
          <ul className="space-y-6 mb-12 flex-grow">
            <li className="flex items-center gap-4 text-white font-semibold">
              <span className="material-symbols-outlined text-brand-orange" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
              Perfil verificado
            </li>
            <li className="flex items-center gap-4 text-white font-semibold">
              <span className="material-symbols-outlined text-brand-orange" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
              Publicaciones ilimitadas
            </li>
            <li className="flex items-center gap-4 text-white font-semibold">
              <span className="material-symbols-outlined text-brand-orange" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
              Destacado en el feed
            </li>
            <li className="flex items-center gap-4 text-white font-semibold">
              <span className="material-symbols-outlined text-brand-orange" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
              Soporte prioritario
            </li>
          </ul>
          <button className="w-full py-5 rounded-full bg-brand-orange text-gray-900 font-extrabold text-lg hover:brightness-110 hover:shadow-lg transition-all active:scale-95">
            Sumarme Pro
          </button>
        </div>

        {/* Business */}
        <div className="p-12 glass-card flex flex-col h-full border-white/10 hover:border-white/20 transition-all">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-white mb-3">Business</h3>
            <div className="text-5xl font-extrabold text-white mb-4">Consultar</div>
            <p className="text-on-secondary/60">Para franquicias o redes.</p>
          </div>
          <ul className="space-y-6 mb-12 flex-grow">
            <li className="flex items-center gap-4 text-on-secondary">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              Gestión de múltiples locales
            </li>
            <li className="flex items-center gap-4 text-on-secondary">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              API de integración
            </li>
            <li className="flex items-center gap-4 text-on-secondary">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              Manager de cuenta dedicado
            </li>
          </ul>
          <button className="w-full py-5 rounded-full border border-white/20 font-bold hover:bg-white/5 transition-all active:scale-95 text-white">
            Hablar con ventas
          </button>
        </div>
      </div>
    </section>
  )
}
