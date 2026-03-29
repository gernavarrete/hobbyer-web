'use client'

import { useState } from 'react'

type Category = 'DEPORTES' | 'ARTE' | 'MUSICA' | 'GASTRONOMIA' | 'TECNOLOGIA' | 'OTRO'
type Source = 'INSTAGRAM' | 'GOOGLE' | 'AMIGO' | 'OTRO'

const categories: { value: Category; label: string; icon: string }[] = [
  { value: 'DEPORTES', label: 'Deportes', icon: 'fitness_center' },
  { value: 'ARTE', label: 'Arte', icon: 'palette' },
  { value: 'MUSICA', label: 'Música', icon: 'music_note' },
  { value: 'GASTRONOMIA', label: 'Gastronomía', icon: 'restaurant' },
  { value: 'TECNOLOGIA', label: 'Tecnología', icon: 'computer' },
  { value: 'OTRO', label: 'Otro', icon: 'category' },
]

const sources: { value: Source; label: string }[] = [
  { value: 'INSTAGRAM', label: 'Instagram' },
  { value: 'GOOGLE', label: 'Google' },
  { value: 'AMIGO', label: 'Un amigo / colega' },
  { value: 'OTRO', label: 'Otro' },
]

export default function PartnerRegistrationForm() {
  const [businessName, setBusinessName] = useState('')
  const [category, setCategory] = useState<Category | ''>('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [source, setSource] = useState<Source | ''>('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!businessName.trim()) { setError('Ingresá el nombre de tu negocio.'); return }
    if (!category) { setError('Seleccioná una categoría.'); return }
    if (!email || !email.includes('@')) { setError('Ingresá un email válido.'); return }
    if (!city.trim()) { setError('Ingresá tu ciudad.'); return }

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/partners', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessName: businessName.trim(),
          category,
          email: email.trim(),
          whatsapp: whatsapp.trim() || null,
          city: city.trim(),
          source: source || null,
        }),
      })

      if (res.ok) {
        setSuccess(true)
      } else {
        const data = await res.json().catch(() => ({}))
        setError(data.error || 'Algo salió mal. Intentá de nuevo.')
      }
    } catch {
      setError('Sin conexión. Revisá tu internet e intentá de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8">
        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            check_circle
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-white mb-3">
          ¡Solicitud recibida!
        </h3>
        <p className="text-on-secondary max-w-sm">
          Te contactamos pronto por WhatsApp o email para darte acceso y ayudarte a configurar tu perfil.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Business name */}
      <div className="space-y-1.5">
        <label className="text-[12px] font-semibold text-on-surface-variant ml-4 uppercase tracking-wider">
          Nombre del negocio *
        </label>
        <input
          type="text"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          placeholder="Ej. PadelStation Mendoza"
          className="w-full bg-surface-container-highest border-none rounded-full px-6 py-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary transition-all"
        />
      </div>

      {/* Category */}
      <div className="space-y-1.5">
        <label className="text-[12px] font-semibold text-on-surface-variant ml-4 uppercase tracking-wider">
          Categoría *
        </label>
        <div className="grid grid-cols-3 gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setCategory(cat.value)}
              className={`flex flex-col items-center justify-center gap-1.5 py-3 rounded-2xl font-semibold text-xs transition-all
                ${category === cat.value
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-surface-container-highest text-on-surface-variant hover:text-white hover:bg-surface-container-high'
                }`}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label className="text-[12px] font-semibold text-on-surface-variant ml-4 uppercase tracking-wider">
          Email de contacto *
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="hola@minegocio.com"
          className="w-full bg-surface-container-highest border-none rounded-full px-6 py-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary transition-all"
        />
      </div>

      {/* WhatsApp */}
      <div className="space-y-1.5">
        <label className="text-[12px] font-semibold text-on-surface-variant ml-4 uppercase tracking-wider">
          WhatsApp <span className="normal-case font-normal">(opcional)</span>
        </label>
        <input
          type="tel"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder="+54 261 000 0000"
          className="w-full bg-surface-container-highest border-none rounded-full px-6 py-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary transition-all"
        />
      </div>

      {/* City */}
      <div className="space-y-1.5">
        <label className="text-[12px] font-semibold text-on-surface-variant ml-4 uppercase tracking-wider">
          Ciudad *
        </label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Ej. Mendoza, Buenos Aires..."
          className="w-full bg-surface-container-highest border-none rounded-full px-6 py-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary transition-all"
        />
      </div>

      {/* Source */}
      <div className="space-y-1.5">
        <label className="text-[12px] font-semibold text-on-surface-variant ml-4 uppercase tracking-wider">
          ¿Cómo nos conociste?
        </label>
        <div className="relative">
          <select
            value={source}
            onChange={(e) => setSource(e.target.value as Source | '')}
            className="w-full bg-surface-container-highest border-none rounded-full px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary transition-all appearance-none cursor-pointer"
          >
            <option value="" className="bg-surface-container">Seleccioná una opción</option>
            {sources.map((s) => (
              <option key={s.value} value={s.value} className="bg-surface-container">
                {s.label}
              </option>
            ))}
          </select>
          <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-outline pointer-events-none">
            expand_more
          </span>
        </div>
      </div>

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-primary text-on-primary font-bold py-5 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98] transition-all text-lg flex items-center justify-center gap-3
            ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Enviando...
            </>
          ) : (
            'Registrá mi negocio'
          )}
        </button>
        {error && (
          <p className="text-red-400 text-sm text-center mt-3">{error}</p>
        )}
        <p className="text-center text-xs text-on-surface-variant mt-4">
          Sin tarjeta de crédito. Sin compromiso. Empezás gratis.
        </p>
      </div>
    </form>
  )
}
