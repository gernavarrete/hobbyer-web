import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full rounded-t-[32px] bg-[#101622] border-t border-slate-800/50">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 w-full max-w-7xl mx-auto">
        <div className="mb-6 md:mb-0">
          <svg fill="none" height="120" style={{height: '32px', width: 'auto'}} viewBox="0 0 600 120" width="600" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="iconGradFooter" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#2a6fff"/>
                <stop offset="50%" stopColor="#0d59f2"/>
                <stop offset="100%" stopColor="#0a3db5"/>
              </linearGradient>
              <linearGradient id="textGradFooter" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#2a6fff"/>
                <stop offset="60%" stopColor="#0d59f2"/>
                <stop offset="100%" stopColor="#0a3db5"/>
              </linearGradient>
            </defs>
            <rect fill="url(#iconGradFooter)" height="120" rx="27" width="120" x="0" y="0"/>
            <rect fill="white" height="88" rx="14" width="28" x="20" y="16"/>
            <rect fill="white" height="88" rx="14" width="28" x="72" y="16"/>
            <rect fill="white" height="24" rx="12" width="80" x="20" y="48"/>
            <text fill="url(#textGradFooter)" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="72" fontWeight="800" letterSpacing="-2" x="148" y="85">Hobbyer</text>
          </svg>
          <p className="text-sm text-slate-500 mt-2">Conectamos personas por lo que les apasiona.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
          <Link href="/privacy" className="text-slate-500 text-sm hover:text-[#0d59f2] transition-all hover:underline">Política de privacidad</Link>
          <Link href="/terms" className="text-slate-500 text-sm hover:text-[#0d59f2] transition-all hover:underline">Términos y condiciones</Link>
          <Link href="/waitlist" className="text-slate-500 text-sm hover:text-[#0d59f2] transition-all hover:underline">Waitlist</Link>
        </div>
        <div className="text-sm text-slate-500">© 2025 Hobbyer. Todos los derechos reservados.</div>
      </div>
    </footer>
  )
}
