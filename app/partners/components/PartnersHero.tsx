export default function PartnersHero() {
  return (
    <section className="relative px-6 max-w-[1280px] mx-auto min-h-screen flex items-center">
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full pt-20">
        {/* Left column */}
        <div className="z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-8">
            Para negocios locales
          </span>
          <h1 className="text-6xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight text-white mb-8">
            Conectá tu negocio con personas que ya{' '}
            <span className="text-gradient-cobalt">aman lo que hacés</span>
          </h1>
          <p className="text-xl text-on-secondary-container/80 mb-12 max-w-lg leading-relaxed">
            Hobbyer es la plataforma que une a partners locales con comunidades activas en busca de nuevas experiencias.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="#register"
              className="w-full sm:w-auto bg-primary text-on-primary text-center px-10 py-5 rounded-full font-extrabold text-lg hover:shadow-cobalt-glow transition-all hover:-translate-y-1"
            >
              Comenzar ahora
            </a>
            <div className="flex items-center gap-3 px-6 py-4 glass-card border-white/10 rounded-full">
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full border-2 border-background bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-white">JD</div>
                <div className="w-8 h-8 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] font-bold text-white">AM</div>
                <div className="w-8 h-8 rounded-full border-2 border-background bg-brand-orange flex items-center justify-center text-[10px] font-bold text-white">LP</div>
              </div>
              <span className="text-sm font-semibold text-white/90">+500 en lista de espera</span>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="relative group hidden lg:block">
          <div className="absolute inset-0 bg-primary/20 blur-[150px] rounded-full group-hover:bg-brand-orange/10 transition-colors duration-1000" />
          <div className="relative glass-card aspect-square rounded-[3rem] overflow-hidden shadow-2xl flex items-center justify-center border-white/10">
            <div className="relative w-full h-full p-16">
              <svg className="w-full h-full opacity-90" fill="none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" opacity="0.4" r="140" stroke="#0d59f2" strokeDasharray="12 12" strokeWidth="1.5" />
                <circle cx="200" cy="200" opacity="0.3" r="100" stroke="#FF6B00" strokeDasharray="6 6" strokeWidth="1" />
                <circle className="animate-pulse" cx="120" cy="140" fill="#0d59f2" r="14" />
                <circle cx="280" cy="180" fill="#FF6B00" r="10" />
                <circle cx="180" cy="300" fill="#0d59f2" opacity="0.6" r="18" />
                <circle cx="240" cy="100" fill="#FF6B00" opacity="0.8" r="8" />
                <path d="M120 140L280 180M280 180L180 300M180 300L120 140M120 140L240 100M280 180L240 100" stroke="white" strokeOpacity="0.3" strokeWidth="2" />
                <g filter="url(#glow_hero)">
                  <circle cx="200" cy="200" fill="#0d59f2" fillOpacity="0.4" r="45" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="150" id="glow_hero" width="150" x="125" y="125">
                    <feGaussianBlur result="blur" stdDeviation="12" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
              </svg>
              <div className="absolute bottom-12 left-12 right-12 glass-card p-8 rounded-2xl border-white/20">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black uppercase tracking-widest text-on-secondary">Lanzamiento</span>
                  <span className="text-xs font-black text-brand-orange uppercase">Mendoza 2026</span>
                </div>
                <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-3/4 shadow-[0_0_15px_#0d59f2]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
