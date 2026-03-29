export default function PartnersHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#FF6B00]/10 rounded-full blur-[100px] -z-10" />

      {/* Floating icons */}
      <div className="absolute text-primary/10 pointer-events-none top-[15%] left-[8%] rotate-12">
        <span className="material-symbols-outlined" style={{ fontSize: '72px' }}>storefront</span>
      </div>
      <div className="absolute text-primary/10 pointer-events-none top-[20%] right-[10%] -rotate-12">
        <span className="material-symbols-outlined" style={{ fontSize: '56px' }}>fitness_center</span>
      </div>
      <div className="absolute text-[#FF6B00]/10 pointer-events-none bottom-[20%] left-[12%] rotate-45">
        <span className="material-symbols-outlined" style={{ fontSize: '64px' }}>palette</span>
      </div>
      <div className="absolute text-primary/10 pointer-events-none bottom-[18%] right-[8%] -rotate-6">
        <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>restaurant</span>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-bold tracking-widest uppercase mb-6">
          Para Negocios
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-white">
          Conectá tu negocio{' '}
          <span className="text-primary">con tu comunidad.</span>
        </h1>
        <p className="text-lg md:text-xl text-on-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
          Mostrá tu negocio a personas apasionadas por el mismo hobby. Llegá a tu cliente ideal antes que la competencia. Gratis para empezar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#registro"
            className="bg-primary text-white px-10 py-5 rounded-full text-lg font-extrabold shadow-2xl shadow-primary/30 active:scale-95 transition-all"
          >
            Registrá tu negocio
          </a>
          <a
            href="#como-funciona"
            className="glass-card text-white px-10 py-5 rounded-full text-lg font-bold border border-white/10 hover:bg-white/10 active:scale-95 transition-all"
          >
            Cómo funciona
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto">
          <div className="text-center">
            <p className="text-3xl font-extrabold text-white">+2.4K</p>
            <p className="text-xs text-on-secondary mt-1">Usuarios activos</p>
          </div>
          <div className="text-center border-x border-white/10">
            <p className="text-3xl font-extrabold text-[#FF6B00]">Gratis</p>
            <p className="text-xs text-on-secondary mt-1">Para empezar</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-extrabold text-white">5</p>
            <p className="text-xs text-on-secondary mt-1">Ciudades en lanzamiento</p>
          </div>
        </div>
      </div>
    </section>
  )
}
