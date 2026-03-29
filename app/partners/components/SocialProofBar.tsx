export default function SocialProofBar() {
  return (
    <section className="bg-surface-container py-12 border-y border-white/5">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-8 text-on-secondary/80 font-semibold uppercase tracking-widest text-xs">
          <span className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-xl">verified</span>
            Más de 500 usuarios en lista de espera
          </span>
          <span className="hidden lg:block h-6 w-px bg-white/10" />
          <span className="flex items-center gap-3">
            <span className="material-symbols-outlined text-brand-orange text-xl">location_on</span>
            Lanzamiento en Mendoza
          </span>
          <span className="hidden lg:block h-6 w-px bg-white/10" />
          <span className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-xl">groups</span>
            Comunidad activa y creciente
          </span>
        </div>
      </div>
    </section>
  )
}
