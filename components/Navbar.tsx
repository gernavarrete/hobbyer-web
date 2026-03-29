'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#101622]/80 backdrop-blur-xl shadow-lg shadow-black/20">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <svg fill="none" height="120" style={{height: '40px', width: 'auto'}} viewBox="0 0 600 120" width="600" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="iconGradNav" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#2a6fff"/>
                <stop offset="50%" stopColor="#0d59f2"/>
                <stop offset="100%" stopColor="#0a3db5"/>
              </linearGradient>
              <radialGradient cx="30%" cy="25%" id="shineNav" r="60%">
                <stop offset="0%" stopColor="white" stopOpacity="0.18"/>
                <stop offset="100%" stopColor="white" stopOpacity="0"/>
              </radialGradient>
              <linearGradient id="textGradNav" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#2a6fff"/>
                <stop offset="60%" stopColor="#0d59f2"/>
                <stop offset="100%" stopColor="#0a3db5"/>
              </linearGradient>
            </defs>
            <rect fill="url(#iconGradNav)" height="120" rx="27" width="120" x="0" y="0"/>
            <rect fill="url(#shineNav)" height="120" rx="27" width="120" x="0" y="0"/>
            <rect fill="white" height="88" rx="14" width="28" x="20" y="16"/>
            <rect fill="white" height="88" rx="14" width="28" x="72" y="16"/>
            <rect fill="white" height="24" rx="12" width="80" x="20" y="48"/>
            <text fill="url(#textGradNav)" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="72" fontWeight="800" letterSpacing="-2" x="148" y="85">Hobbyer</text>
          </svg>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link href="/partners" className="text-slate-400 font-medium hover:text-white transition-colors px-3 py-1 hover:bg-white/10 rounded-full">
            Partners
          </Link>
          <Link href="/privacy" className="text-slate-400 font-medium hover:text-white transition-colors px-3 py-1 hover:bg-white/10 rounded-full">
            Privacidad
          </Link>
          <Link href="/terms" className="text-slate-400 font-medium hover:text-white transition-colors px-3 py-1 hover:bg-white/10 rounded-full">
            Términos
          </Link>
        </div>

        <Link
          href="/waitlist"
          className="bg-[#0d59f2] text-white px-6 py-2.5 rounded-full font-bold active:scale-95 duration-200 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40"
        >
          Unirme
        </Link>
      </div>
    </nav>
  )
}
