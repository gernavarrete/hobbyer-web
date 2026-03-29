import Link from 'next/link'

export default function PartnersFooter() {
  return (
    <footer className="w-full bg-[#101622] border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-20 gap-12 max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-6 items-center md:items-start">
          <div className="text-2xl font-black text-white flex items-center gap-2">
            <svg fill="none" height="32" viewBox="0 0 1024 1024" width="32" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bgGradPartnersFooter" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#2a6fff" />
                  <stop offset="50%" stopColor="#0d59f2" />
                  <stop offset="100%" stopColor="#0a3db5" />
                </linearGradient>
                <radialGradient cx="30%" cy="25%" id="shinePartnersFooter" r="60%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect fill="url(#bgGradPartnersFooter)" height="1024" rx="230" width="1024" />
              <rect fill="url(#shinePartnersFooter)" height="1024" rx="230" width="1024" />
              <rect fill="white" height="756" rx="120" width="240" x="168" y="134" />
              <rect fill="white" height="756" rx="120" width="240" x="616" y="134" />
              <rect fill="white" height="208" rx="104" width="688" x="168" y="408" />
            </svg>
            Hobbyer Partners
          </div>
          <p className="text-gray-400 max-w-xs text-center md:text-left leading-relaxed font-medium">
            Uniendo negocios locales con personas que buscan vivir nuevas experiencias cada día.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-6 justify-center">
          <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 font-semibold">Features</a>
          <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 font-semibold">Pricing</a>
          <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 font-semibold">Success Stories</a>
          <Link href="/privacy" className="text-gray-400 hover:text-white transition-all duration-300 font-semibold">Privacy Policy</Link>
          <Link href="/terms" className="text-gray-400 hover:text-white transition-all duration-300 font-semibold">Terms of Service</Link>
        </div>

        <div className="text-gray-400 text-sm text-center md:text-right space-y-3">
          <p>© 2025 Hobbyer Partners.</p>
          <p className="text-blue-400 font-black uppercase tracking-widest text-[10px]">MENDOZA, 2026</p>
        </div>
      </div>
    </footer>
  )
}
