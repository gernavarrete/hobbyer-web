export default function PartnersNav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="flex justify-between items-center px-6 py-4 max-w-[1280px] mx-auto tracking-tight">
        <div className="flex items-center gap-3">
          <svg className="h-8 w-8 md:h-10 md:w-10" fill="none" height="1024" viewBox="0 0 1024 1024" width="1024" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bgGradPartners" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#2a6fff" />
                <stop offset="50%" stopColor="#0d59f2" />
                <stop offset="100%" stopColor="#0a3db5" />
              </linearGradient>
              <radialGradient cx="30%" cy="25%" id="shinePartners" r="60%">
                <stop offset="0%" stopColor="white" stopOpacity="0.18" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect fill="url(#bgGradPartners)" height="1024" rx="230" width="1024" />
            <rect fill="url(#shinePartners)" height="1024" rx="230" width="1024" />
            <rect fill="white" height="756" rx="120" width="240" x="168" y="134" />
            <rect fill="white" height="756" rx="120" width="240" x="616" y="134" />
            <rect fill="white" height="208" rx="104" width="688" x="168" y="408" />
          </svg>
          <span className="text-2xl font-extrabold text-white">Hobbyer Partners</span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <a className="text-slate-400 font-medium hover:text-white transition-colors px-3 py-1 hover:bg-white/10 rounded-full" href="#">Features</a>
          <a className="text-slate-400 font-medium hover:text-white transition-colors px-3 py-1 hover:bg-white/10 rounded-full" href="#">Pricing</a>
          <a className="text-slate-400 font-medium hover:text-white transition-colors px-3 py-1 hover:bg-white/10 rounded-full" href="#">Success Stories</a>
          <a className="text-slate-400 font-medium hover:text-white transition-colors px-3 py-1 hover:bg-white/10 rounded-full" href="/">Para usuarios</a>
        </div>

        <a
          href="#register"
          className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:scale-105 active:scale-95 transition-all duration-300 shadow-cobalt-glow"
        >
          Sumate como partner
        </a>
      </div>
    </nav>
  )
}
