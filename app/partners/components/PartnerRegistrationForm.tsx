'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function PartnerRegistrationForm() {
  const [businessName, setBusinessName] = useState('')
  const [category, setCategory] = useState('Gastronomía')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [source, setSource] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!businessName.trim()) { setErrorMsg('Ingresá el nombre de tu negocio.'); return }
    if (!email || !email.includes('@')) { setErrorMsg('Ingresá un email válido.'); return }
    if (!city.trim()) { setErrorMsg('Ingresá tu ciudad.'); return }

    setStatus('loading')
    setErrorMsg('')

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
          source: source.trim() || null,
        }),
      })

      if (res.ok || res.status === 501) {
        setStatus('success')
      } else {
        const data = await res.json().catch(() => ({}))
        setErrorMsg(data.error || 'Algo salió mal. Intentá de nuevo.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Sin conexión. Revisá tu internet e intentá de nuevo.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="relative z-10 text-center py-8">
        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: '"FILL" 1' }}>
            check_circle
          </span>
        </div>
        <h3 className="text-2xl font-extrabold text-white mb-3">¡Solicitud recibida!</h3>
        <p className="text-on-secondary/70 font-medium">
          Revisamos cada solicitud para asegurar la calidad de la comunidad.<br />
          Te contactamos pronto.
        </p>
      </div>
    )
  }

  const inputClass = "w-full bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
  const labelClass = "text-[10px] font-black uppercase tracking-[0.2em] text-on-secondary/40 px-1"

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label className={labelClass}>Nombre del Negocio</label>
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Ej: Café de la Esquina"
            className={inputClass}
          />
        </div>
        <div className="space-y-3">
          <label className={labelClass}>Categoría</label>
          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={`${inputClass} appearance-none cursor-pointer`}
            >
              <option className="bg-surface-container">Gastronomía</option>
              <option className="bg-surface-container">Deportes &amp; Wellness</option>
              <option className="bg-surface-container">Arte &amp; Cultura</option>
              <option className="bg-surface-container">Outdoor &amp; Aventura</option>
            </select>
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">
              expand_more
            </span>
          </div>
        </div>
        <div className="space-y-3">
          <label className={labelClass}>Email de Contacto</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="hola@tunegocio.com"
            className={inputClass}
          />
        </div>
        <div className="space-y-3">
          <label className={labelClass}>WhatsApp</label>
          <input
            type="tel"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="+54 261 000 0000"
            className={inputClass}
          />
        </div>
        <div className="space-y-3">
          <label className={labelClass}>Ciudad</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Ej: Mendoza Capital"
            className={inputClass}
          />
        </div>
        <div className="space-y-3">
          <label className={labelClass}>¿Cómo nos conociste?</label>
          <input
            type="text"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            placeholder="Instagram, etc."
            className={inputClass}
          />
        </div>
      </div>
      <div className="pt-6">
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`w-full bg-primary py-5 rounded-full text-white font-extrabold text-xl hover:shadow-cobalt-glow transition-all active:scale-[0.98] hover:brightness-110 flex items-center justify-center gap-3 ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {status === 'loading' ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Enviando...
            </>
          ) : (
            'Enviar solicitud'
          )}
        </button>
        {(status === 'error' || errorMsg) && (
          <p className="text-error text-sm text-center mt-3">{errorMsg}</p>
        )}
      </div>
    </form>
  )
}
