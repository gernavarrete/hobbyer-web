const testimonials = [
  {
    name: 'Martín Rodríguez',
    business: 'PadelStation Mendoza',
    category: 'Deportes',
    icon: 'sports_tennis',
    quote: 'En el primer mes tuvimos 40 reservas nuevas que vinieron directo desde Hobbyer. La comunidad de pádel es muy activa.',
  },
  {
    name: 'Lucía Fernández',
    business: 'Arte & Forma',
    category: 'Arte',
    icon: 'palette',
    quote: 'Mis talleres de cerámica se llenan con gente que realmente quiere aprender. Hobbyer me conecta con el público ideal.',
  },
  {
    name: 'Diego Peralta',
    business: 'Tecno Mendoza',
    category: 'Tecnología',
    icon: 'computer',
    quote: 'Los meetups de tecnología que organizamos crecieron 3x desde que estamos en la plataforma. Increíble el engagement.',
  },
]

const categories = [
  { label: 'Deportes', icon: 'fitness_center' },
  { label: 'Arte', icon: 'palette' },
  { label: 'Música', icon: 'music_note' },
  { label: 'Gastronomía', icon: 'restaurant' },
  { label: 'Tecnología', icon: 'computer' },
  { label: 'Otro', icon: 'category' },
]

export default function PartnersSocialProof() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Categories */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-bold tracking-widest uppercase mb-6">
            Categorías disponibles
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-10">
            ¿En qué rubro estás?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <div
                key={cat.label}
                className="glass-card border border-white/10 rounded-full px-6 py-3 flex items-center gap-2 hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>
                  {cat.icon}
                </span>
                <span className="text-white font-semibold text-sm">{cat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
            Testimonios
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-white">
            Lo que dicen nuestros partners
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass-card border border-white/10 rounded-[32px] p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">{t.icon}</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-on-secondary text-xs">{t.business}</p>
                </div>
                <span className="ml-auto text-[10px] font-bold uppercase tracking-widest text-primary/60 bg-primary/10 px-3 py-1 rounded-full">
                  {t.category}
                </span>
              </div>
              <p className="text-on-secondary text-sm leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-tertiary" style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
