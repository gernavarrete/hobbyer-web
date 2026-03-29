import Link from 'next/link'

const WHATSAPP_NUMBER = '549XXXXXXXXXX'

export default function BetaPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Mini Header — específico de beta */}
      <header className="sticky top-0 z-50 bg-[#101622]/80 backdrop-blur-xl shadow-lg shadow-black/20">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center">
            <svg className="h-8 w-auto" fill="none" viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="iconGradBeta" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2a6fff" />
                  <stop offset="50%" stopColor="#0d59f2" />
                  <stop offset="100%" stopColor="#0a3db5" />
                </linearGradient>
                <radialGradient id="shineBeta" cx="30%" cy="25%" r="60%">
                  <stop offset="0%" stopColor="white" stopOpacity={0.18} />
                  <stop offset="100%" stopColor="white" stopOpacity={0} />
                </radialGradient>
                <linearGradient id="textGradBeta" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2a6fff" />
                  <stop offset="60%" stopColor="#0d59f2" />
                  <stop offset="100%" stopColor="#0a3db5" />
                </linearGradient>
              </defs>
              <rect fill="url(#iconGradBeta)" width="120" height="120" rx="27" />
              <rect fill="url(#shineBeta)" width="120" height="120" rx="27" />
              <rect fill="white" x="20" y="16" width="28" height="88" rx="14" />
              <rect fill="white" x="72" y="16" width="28" height="88" rx="14" />
              <rect fill="white" x="20" y="48" width="80" height="24" rx="12" />
              <text
                fill="url(#textGradBeta)"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontSize={72}
                fontWeight={800}
                letterSpacing={-2}
                x="148"
                y="85"
              >
                Hobbyer
              </text>
            </svg>
          </Link>
          <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
            Tester Access Only
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-[640px] w-full mx-auto px-6 pt-12 pb-32 flex-1">
        {/* Floating Hobby Icons */}
        <div className="absolute text-[#0d59f2]/15 pointer-events-none z-0 top-[5%] left-[5%] rotate-12">
          <span className="material-symbols-outlined" style={{ fontSize: '64px' }}>fitness_center</span>
        </div>
        <div className="absolute text-[#0d59f2]/15 pointer-events-none z-0 top-[10%] right-[5%] -rotate-12">
          <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>palette</span>
        </div>
        <div className="absolute text-[#0d59f2]/15 pointer-events-none z-0 bottom-[15%] left-[3%] rotate-45">
          <span className="material-symbols-outlined" style={{ fontSize: '80px' }}>sports_tennis</span>
        </div>
        <div className="absolute text-[#0d59f2]/15 pointer-events-none z-0 bottom-[10%] right-[3%] -rotate-6">
          <span className="material-symbols-outlined" style={{ fontSize: '56px' }}>auto_stories</span>
        </div>

        {/* Hero */}
        <div className="relative z-10 text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
            Mendoza Beta
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Bienvenido a la Beta
          </h1>
          <p className="text-on-secondary text-lg font-medium">
            Seguí estos pasos para instalar la app en tu Android.
          </p>
        </div>

        {/* Installation Steps */}
        <div className="relative z-10 glass-card rounded-lg p-8 md:p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] mb-8">
          <h2 className="text-xl font-extrabold text-white mb-8 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">install_mobile</span>
            Cómo instalar
          </h2>

          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-white shrink-0">
                1
              </div>
              <div className="mt-1 w-0.5 flex-1 bg-primary/20" />
            </div>
            <div className="pb-8">
              <p className="font-bold text-white">Revisá tu email</p>
              <p className="mt-1 text-sm text-on-surface-variant">
                Buscá el email de Firebase App Distribution. Puede estar en Promociones o Spam.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-white shrink-0">
                2
              </div>
              <div className="mt-1 w-0.5 flex-1 bg-primary/20" />
            </div>
            <div className="pb-8">
              <p className="font-bold text-white">Abrilo desde tu Android</p>
              <p className="mt-1 text-sm text-on-surface-variant">
                Es importante abrirlo directamente desde el celular donde vas a instalar la app.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-white shrink-0">
                3
              </div>
              <div className="mt-1 w-0.5 flex-1 bg-primary/20" />
            </div>
            <div className="pb-8">
              <p className="font-bold text-white">Descargá el APK</p>
              <p className="mt-1 text-sm text-on-surface-variant">
                Tocá &ldquo;Download latest release&rdquo;. Android puede pedir que habilites instalación de fuentes
                externas — es normal.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-white shrink-0">
                4
              </div>
            </div>
            <div>
              <p className="font-bold text-white">¡Listo para testear!</p>
              <p className="mt-1 text-sm text-on-surface-variant">
                Abrí Hobbyer, creá tu cuenta y explorá. Tu feedback es muy valioso para nosotros.
              </p>
            </div>
          </div>
        </div>

        {/* ¿Qué probamos? */}
        <div className="relative z-10 glass-card rounded-lg p-8 md:p-10 shadow-lg mb-8">
          <h2 className="text-xl font-extrabold text-white mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">science</span>
            ¿Qué probamos?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 bg-surface-container-highest/50 rounded-lg p-4 flex items-center gap-3 border border-white/5">
              <span className="material-symbols-outlined text-primary">person_search</span>
              <span className="text-sm text-on-surface">Discovery de personas y grupos</span>
            </div>
            <div className="flex-1 bg-surface-container-highest/50 rounded-lg p-4 flex items-center gap-3 border border-white/5">
              <span className="material-symbols-outlined text-primary">chat</span>
              <span className="text-sm text-on-surface">Chat con matches</span>
            </div>
            <div className="flex-1 bg-surface-container-highest/50 rounded-lg p-4 flex items-center gap-3 border border-white/5">
              <span className="material-symbols-outlined text-primary">interests</span>
              <span className="text-sm text-on-surface">Registro y onboarding</span>
            </div>
          </div>
        </div>

        {/* Reportar problema */}
        <div className="relative z-10 glass-card rounded-lg p-8 md:p-10 shadow-lg text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-primary text-3xl">support_agent</span>
          </div>
          <h2 className="text-xl font-extrabold text-white mb-2">¿Problemas con la instalación?</h2>
          <p className="text-on-surface-variant mb-6">Nuestro equipo te ayuda.</p>

          <a
            href="mailto:beta@hobbyer.club"
            className="block w-full bg-primary text-on-primary font-bold py-4 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98] transition-all text-lg mb-4"
          >
            beta@hobbyer.club
          </a>
          <p className="text-xs text-on-secondary text-center -mt-2">
            Respondemos en menos de 24 horas
          </p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C+tuve+un+problema+instalando+Hobbyer+beta`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#25D366] text-white font-bold py-4 rounded-full active:scale-[0.98] transition-all text-lg mt-6"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </main>

      {/* Footer simplificado de beta */}
      <footer className="bg-[#101622] flex flex-col items-center gap-4 py-8 px-6 w-full border-t border-[#1b212d] mt-auto">
        <svg className="h-8 w-auto" fill="none" viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="iconGradBetaFoot" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2a6fff" />
              <stop offset="50%" stopColor="#0d59f2" />
              <stop offset="100%" stopColor="#0a3db5" />
            </linearGradient>
            <radialGradient id="shineBetaFoot" cx="30%" cy="25%" r="60%">
              <stop offset="0%" stopColor="white" stopOpacity={0.18} />
              <stop offset="100%" stopColor="white" stopOpacity={0} />
            </radialGradient>
          </defs>
          <rect fill="url(#iconGradBetaFoot)" width="120" height="120" rx="27" />
          <rect fill="url(#shineBetaFoot)" width="120" height="120" rx="27" />
          <rect fill="white" x="20" y="16" width="28" height="88" rx="14" />
          <rect fill="white" x="72" y="16" width="28" height="88" rx="14" />
          <rect fill="white" x="20" y="48" width="80" height="24" rx="12" />
          <text
            fill="#0d59f2"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize={72}
            fontWeight={800}
            letterSpacing={-2}
            x="148"
            y="85"
          >
            Hobbyer
          </text>
        </svg>
        <div className="flex gap-8">
          <Link href="/privacy" className="text-sm text-slate-500 hover:text-[#0d59f2] transition-all">
            Privacidad
          </Link>
          <Link href="/terms" className="text-sm text-slate-500 hover:text-[#0d59f2] transition-all">
            Términos
          </Link>
          <a href="mailto:beta@hobbyer.club" className="text-sm text-slate-500 hover:text-[#0d59f2] transition-all">
            Soporte
          </a>
        </div>
        <p className="text-sm text-slate-500">© 2025 Hobbyer. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
