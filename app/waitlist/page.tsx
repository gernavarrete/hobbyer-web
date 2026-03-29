'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function WaitlistPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [hobby, setHobby] = useState('')
  const [platform, setPlatform] = useState<'android' | 'ios' | ''>('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) {
      setError('Ingresá un email válido.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, hobby, platform: platform || null, source: 'waitlist' }),
      })
      if (res.ok) {
        setSuccess(true)
      } else {
        setError('Algo salió mal. Intentá de nuevo.')
      }
    } catch {
      setError('Sin conexión. Intentá de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20 pb-12">
      {/* Floating Hobby Icons Background Decor */}
      <div className="absolute text-[#0d59f2]/15 pointer-events-none z-0 top-[15%] left-[10%] rotate-12">
        <span className="material-symbols-outlined" style={{fontSize: '64px'}}>fitness_center</span>
      </div>
      <div className="absolute text-[#0d59f2]/15 pointer-events-none z-0 top-[20%] right-[15%] -rotate-12">
        <span className="material-symbols-outlined" style={{fontSize: '48px'}}>palette</span>
      </div>
      <div className="absolute text-[#0d59f2]/15 pointer-events-none z-0 bottom-[20%] left-[12%] rotate-45">
        <span className="material-symbols-outlined" style={{fontSize: '80px'}}>sports_tennis</span>
      </div>
      <div className="absolute text-[#0d59f2]/15 pointer-events-none z-0 bottom-[15%] right-[10%] -rotate-6">
        <span className="material-symbols-outlined" style={{fontSize: '56px'}}>auto_stories</span>
      </div>
      <div className="absolute text-[#0d59f2]/15 pointer-events-none z-0 top-[50%] left-[5%] opacity-50">
        <span className="material-symbols-outlined" style={{fontSize: '32px'}}>music_note</span>
      </div>
      <div className="absolute text-[#0d59f2]/15 pointer-events-none z-0 top-[60%] right-[5%] opacity-50">
        <span className="material-symbols-outlined" style={{fontSize: '32px'}}>camera</span>
      </div>

      {/* Waitlist Container */}
      <section className="relative z-10 w-full max-w-xl">
        <div className="glass-card rounded-lg p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
              Mendoza Beta Access
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Se parte del origen.
            </h1>
            <p className="text-on-secondary text-lg font-medium">
              Acceso exclusivo a la Beta en Mendoza.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <div className="space-y-1.5">
              <label className="text-[12px] font-semibold text-on-surface-variant ml-4 uppercase tracking-wider">
                Nombre Completo
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. Julian Perez"
                className="w-full bg-surface-container-highest border-none rounded-full px-6 py-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[12px] font-semibold text-on-surface-variant ml-4 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hola@ejemplo.com"
                className="w-full bg-surface-container-highest border-none rounded-full px-6 py-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[12px] font-semibold text-on-surface-variant ml-4 uppercase tracking-wider">
                ¿Cuál es tu hobby principal?
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={hobby}
                  onChange={(e) => setHobby(e.target.value)}
                  placeholder="Ej. Trekking, Yoga, Fotografía..."
                  className="w-full bg-surface-container-highest border-none rounded-full px-6 py-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary transition-all"
                />
                <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-outline">search</span>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[12px] font-semibold text-on-surface-variant ml-4 uppercase tracking-wider">
                ¿Qué celular tenés?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPlatform('android')}
                  className={`flex items-center justify-center gap-2 py-4 rounded-full font-bold text-sm transition-all
                    ${platform === 'android'
                      ? 'bg-primary text-white shadow-lg shadow-primary/30'
                      : 'bg-surface-container-highest text-on-surface-variant hover:text-white hover:bg-surface-container-high'
                    }`}
                >
                  <span className="material-symbols-outlined text-lg">android</span>
                  Android
                </button>
                <button
                  type="button"
                  onClick={() => setPlatform('ios')}
                  className={`flex items-center justify-center gap-2 py-4 rounded-full font-bold text-sm transition-all
                    ${platform === 'ios'
                      ? 'bg-primary text-white shadow-lg shadow-primary/30'
                      : 'bg-surface-container-highest text-on-surface-variant hover:text-white hover:bg-surface-container-high'
                    }`}
                >
                  <span className="material-symbols-outlined text-lg">apple</span>
                  iOS
                </button>
              </div>
            </div>
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`w-full bg-primary text-on-primary font-bold py-5 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98] transition-all text-lg ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Guardando...' : 'Unirme'}
              </button>
              {error && (
                <p className="text-red-400 text-sm text-center mt-3">{error}</p>
              )}
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex -space-x-3">
              <img
                className="w-10 h-10 rounded-full border-2 border-surface-container-high object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOpriRB7Othf5j2e7Vn9eqGTqtRJ2frAxltV_JyY7tnWP9xPsO9bPf2aMmoRNtVAq7JLzwhVPgeGbLZURB5WuFOFyhI9vWVYZevH8Cfu7Y9cGpLV9AhM22EXX_slWKxrnGTHFu9vIL21ebZMf_WrXUFrKoLnUbDUzSIpFNDg_NMHOEsX6CEZpwq8DfgDpfkKpO_2Toa8mxRmC7YzRFlB9zAtmj2MewJ3Rg7sCr8MCno2UBouG7jRVMAwHq0zLyevVvfy_eH_O1JPEs"
                alt="Tester 1"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-surface-container-high object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5ZzfRnSsm7T0_VuwGSHaAjJ0mUssujhxEv3aCFjbo2SJYWIvZPS8beH4MhYspoph76NdHG4RP--Bb76i7l528SfhtZXq491nqUjRDv_ieosDmhKHjVDRo83ujWBkdprGG5-VTtHov4_53t_l6BFy7GE0v8bYnYQERtuAaigwvpAgBxy5YhXH3eCksZ5hRZgQXFN9RN5wOlNU45Z7rYHEnl9t00MJcxf_JfVH9UeZb8FLgVafgAuCpiEwAX9SyVeUSSEkjlnmOWvD-"
                alt="Tester 2"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-surface-container-high object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlDh7GfXW_78QYPF59A68xNv28DqSESg3C1zqG0GdxuC2mrsRVIb7x4UWKnxH946ne4jloxaSCtW6eOGIlrK5SRlyGyBombRLex9yls7o_9yOLXBhp8_i_83DcDY-BDRG05FPXQIUW47ihvDldE-ZbnSC09StcdhBvnxJTL9lz8gL-u92oY60bKxBRPOj-xNXDvYkKSYNhzzIcQgMfVKtcuPVuXfFYr9NJqIStV9Bi72WGQvrYN9OvZhOe0xrxKNZGZ_i1_Oi5d8kS"
                alt="Tester 3"
              />
            </div>
            <p className="text-[12px] text-on-secondary font-medium">
              <span className="text-white font-bold">+120 hobbistas</span> ya se unieron en Mendoza
            </p>
          </div>

          {/* Success State Overlay */}
          {success && (
            <div className="absolute inset-0 bg-surface-container-high/95 backdrop-blur-xl rounded-lg flex flex-col items-center justify-center text-center p-8 z-20">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-4xl">check_circle</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white mb-2">
                Ya sos parte de la tribu.
              </h2>
              <p className="text-on-secondary">
                En los próximos días te llega un email de Firebase con el link
                para descargar la beta. Si no lo ves, revisá Spam 📩
              </p>
              <Link
                href="/beta"
                className="mt-6 text-primary text-sm font-medium hover:underline"
              >
                ¿Ya recibiste el email? → Ver instrucciones de instalación
              </Link>
            </div>
          )}
        </div>

        {/* Contextual Social Proof Card */}
        <div className="mt-8 relative opacity-60 flex justify-center scale-95 pointer-events-none">
          <div className="glass-card rounded-lg p-4 flex items-center gap-4 w-full max-w-sm">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh_kwR1IExCX2TIyNw8msib0CR7gmO_OMwirpr-DgenMGRheycQBfyxIUzuxyIIeXAMqc-XM_2eJ6Y-pU12s3pZnPNOMWlIE6wqpnNRHulISKjDiLiVdQSaRWR6upvjoARbRLe-FV6LCweIN6NxS3EKNQ74l130uEhWJZivzMNx9MXtOIMe-fJ4OdMMvIbqFsnT27eRyL-GnRLIE34O00FJWDt-PkBnRSwrF51ccuKic1Y5_wQqVLsOHLNkUexr73-3jjougVG1-0q"
                alt="Mendoza Argentina"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Próximo Encuentro</p>
              <p className="text-[10px] text-on-secondary">Trekking &amp; Wine - Valle de Uco</p>
            </div>
            <div className="ml-auto">
              <span className="material-symbols-outlined text-primary text-sm">trending_up</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
