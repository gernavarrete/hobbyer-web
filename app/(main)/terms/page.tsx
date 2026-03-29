import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Términos y Condiciones — Hobbyer',
  description: 'Términos y condiciones de uso de Hobbyer. Plataforma regulada bajo la ley argentina.',
}

export default function TermsPage() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
      {/* Sidebar */}
      <aside className="hidden md:block w-80 sticky top-32 h-fit space-y-2">
        <div className="bg-[#1b212d] rounded-r-[32px] p-6 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
          <h2 className="text-lg font-bold text-white mb-6 px-4">Documentos legales</h2>
          <nav className="flex flex-col gap-1">
            <Link
              href="/terms"
              className="bg-[#0d59f2] text-white rounded-full mx-2 px-4 py-3 flex items-center gap-3 transition-all"
            >
              <span className="material-symbols-outlined text-lg">description</span>
              <span className="text-sm font-medium">Términos y condiciones</span>
            </Link>
            <Link
              href="/privacy"
              className="text-slate-400 hover:text-white hover:bg-[#252b3b] rounded-full px-4 py-3 flex items-center gap-3 transition-all"
            >
              <span className="material-symbols-outlined text-lg">lock</span>
              <span className="text-sm font-medium">Política de Privacidad</span>
            </Link>
          </nav>
        </div>

        {/* Contextual Card */}
        <div className="mt-8 bg-surface-container-high rounded-lg p-6 relative overflow-hidden group">
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
            <img
              alt="Abstract tech networking"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf8pgngMowTrBUBuBEnHhyAKvYNljILuhvl8ZhpycntSCZn5Ez-gYxvuyR0BCPbYhAuktYxVEvD52hcQFDrRepc9i9wMj-Q1WsFSxmaAINq2yTuo658p3-KXnM3uMXWnXpex7EeAi3tuibAjd9el8W9yuqJUbIuwqvkNd4K6ujh6s_JgvroUONRVIqqAxxcPPuii_EMfk-j5JnrKnvn83zZAvaKspooME4tTGyb7ApMArthr65mqH9Q1vt4Dpd8K_PTdLoVO6yQSm6"
            />
          </div>
          <div className="relative z-10">
            <p className="text-[10px] font-bold uppercase tracking-widest text-tertiary mb-2">Soporte legal</p>
            <h4 className="text-lg font-bold text-white mb-4">¿Dudas sobre estos términos?</h4>
            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
              Nuestro equipo legal está disponible para aclarar cualquier consulta sobre la normativa argentina.
            </p>
            <a
              className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:translate-x-1 transition-transform"
              href="mailto:legal@hobbyer.club"
            >
              legal@hobbyer.club
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <article className="flex-1 space-y-12">
        <header className="mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 block">
            Última actualización: marzo 2025
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Términos y Condiciones
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Al usar Hobbyer aceptás estos términos. Leelos con atención antes de registrarte.
          </p>
        </header>

        {/* Bento Content Grid */}
        <section className="space-y-12" id="aceptacion">
          {/* 1. Aceptación */}
          <div className="group relative bg-surface-container rounded-lg p-8 border border-white/5 hover:border-primary/20 transition-all duration-300 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">verified</span>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-white tracking-tight">1. Aceptación de los términos</h2>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Al acceder o usar Hobbyer (la &ldquo;Plataforma&rdquo;), ya sea mediante la aplicación móvil o el
                  sitio web hobbyer.club, aceptás quedar vinculado por estos Términos y Condiciones y nuestra{' '}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Política de Privacidad
                  </Link>
                  . Si no estás de acuerdo con alguna parte, te pedimos que no uses la Plataforma.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Elegibilidad */}
          <div id="elegibilidad" className="group relative bg-surface-container rounded-lg p-8 border border-white/5 hover:border-primary/20 transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">person_celebrate</span>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-white tracking-tight">2. Elegibilidad</h2>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Para usar Hobbyer debés tener al menos 18 años de edad. Al crear una cuenta declarás que cumplís
                  con este requisito. Hobbyer se reserva el derecho de solicitar verificación de edad y de suspender
                  cuentas que no cumplan este requisito.
                </p>
              </div>
            </div>
          </div>

          {/* 3 & 4 Side by Side */}
          <div id="uso-aceptable" className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface-container-high rounded-lg p-8 relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <span className="material-symbols-outlined text-primary mb-4 block text-3xl">rule</span>
              <h2 className="text-2xl font-extrabold text-white mb-4">3. Uso aceptable</h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Queda estrictamente prohibido: acosar, intimidar o amenazar a otros usuarios; publicar contenido
                falso, engañoso o que infrinja derechos de terceros; usar la Plataforma con fines comerciales no
                autorizados; intentar acceder a cuentas ajenas; usar bots o scripts automatizados; publicar
                contenido sexual explícito o violento.
              </p>
            </div>
            <div id="contenido" className="bg-surface-container-high rounded-lg p-8 relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl" />
              <span className="material-symbols-outlined text-primary mb-4 block text-3xl">palette</span>
              <h2 className="text-2xl font-extrabold text-white mb-4">4. Contenido del usuario</h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Sos responsable del contenido que publicás (fotos, bio, mensajes). Conservás la titularidad de tu
                contenido, pero otorgás a Hobbyer una licencia no exclusiva para mostrarlo dentro de la Plataforma.
                Hobbyer puede remover sin previo aviso contenido que viole estos términos.
              </p>
            </div>
          </div>

          {/* 5. Privacidad */}
          <div id="privacidad" className="bg-gradient-to-br from-primary/20 to-transparent rounded-lg p-8 border border-primary/20">
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-white tracking-tight">
                5. Privacidad y protección de datos
              </h2>
              <div className="space-y-4 text-sm text-on-surface-variant leading-relaxed">
                <p>
                  El tratamiento de tus datos personales se rige por nuestra{' '}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Política de Privacidad
                  </Link>{' '}
                  y por la Ley N° 25.326 de Protección de Datos Personales de la República Argentina y sus normas
                  reglamentarias. Hobbyer está comprometido con los principios de licitud, lealtad, transparencia,
                  minimización de datos y seguridad establecidos en dicha ley.
                </p>
                <p>
                  Tus datos son almacenados en servidores de Amazon Web Services (AWS) ubicados en Brasil (sa-east-1).
                  Esta transferencia internacional se realiza bajo las garantías establecidas en el Art. 12 de la Ley
                  25.326, ya que AWS cuenta con certificaciones de seguridad reconocidas internacionalmente.
                </p>
                <p>
                  Podés ejercer tus derechos de Acceso, Rectificación, Cancelación y Oposición (derechos ARCO)
                  escribiendo a{' '}
                  <a href="mailto:privacidad@hobbyer.club" className="text-primary hover:underline">
                    privacidad@hobbyer.club
                  </a>
                  . Respondemos en un plazo máximo de 30 días hábiles conforme al Art. 14 de la Ley 25.326.
                </p>
                <p>
                  La AAIP (Agencia de Acceso a la Información Pública) es el organismo de control en materia de
                  protección de datos personales en Argentina. Podés presentar consultas o denuncias en
                  www.argentina.gob.ar/aaip.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/privacy"
                  className="inline-block px-8 py-4 bg-white text-[#101622] font-extrabold rounded-full hover:scale-105 transition-transform text-sm"
                >
                  Ver Política de Privacidad
                </Link>
              </div>
            </div>
          </div>

          {/* 6 & 7 Side by Side */}
          <div className="grid md:grid-cols-2 gap-8">
            <div id="matches" className="bg-surface-container rounded-lg p-8 space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <span className="material-symbols-outlined">forum</span>
                <h3 className="text-lg font-bold uppercase tracking-widest text-white">6. Matches y chat</h3>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                El chat se habilita únicamente entre usuarios que dieron like mutuamente. Hobbyer no es responsable
                por el contenido de los mensajes intercambiados entre usuarios. Los mensajes pueden ser revisados
                ante reportes de seguridad conforme a la normativa vigente.
              </p>
            </div>
            <div id="partners" className="bg-surface-container rounded-lg p-8 space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <span className="material-symbols-outlined">handshake</span>
                <h3 className="text-lg font-bold uppercase tracking-widest text-white">7. Partners comerciales</h3>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Las ofertas de partners son responsabilidad exclusiva de cada negocio. Hobbyer no garantiza la
                disponibilidad, calidad ni condiciones de las ofertas. La relación comercial es directamente entre
                el usuario y el partner.
              </p>
            </div>
          </div>

          {/* 8, 9, 10, 11 */}
          <div className="space-y-8">
            <div id="suspension" className="bg-surface-container rounded-lg p-8">
              <h2 className="text-2xl font-extrabold text-white mb-4">8. Suspensión y cancelación de cuentas</h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Hobbyer puede suspender o eliminar cuentas que violen estos términos, sin previo aviso. Los usuarios
                pueden solicitar la eliminación de su cuenta y datos en cualquier momento escribiendo a{' '}
                <a href="mailto:privacidad@hobbyer.club" className="text-primary hover:underline">
                  privacidad@hobbyer.club
                </a>
                . La eliminación de datos se realiza en un plazo máximo de 30 días conforme a la Ley 25.326.
              </p>
            </div>

            <div id="responsabilidad" className="bg-surface-container rounded-lg p-8 border-l-4 border-error/50">
              <h2 className="text-2xl font-extrabold text-white mb-4">9. Limitación de responsabilidad</h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Hobbyer se provee &ldquo;tal cual&rdquo; y &ldquo;según disponibilidad&rdquo;. No garantizamos
                disponibilidad ininterrumpida del servicio. No somos responsables por daños indirectos, incidentales
                o consecuentes derivados del uso de la Plataforma. Esta limitación aplica en la máxima medida
                permitida por la ley argentina.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div id="ley" className="flex-1 bg-surface-container rounded-lg p-8">
                <h2 className="text-2xl font-extrabold text-white mb-4">10. Ley aplicable y jurisdicción</h2>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Estos términos se rigen por las leyes de la República Argentina, en particular la Ley 25.326 de
                  Protección de Datos Personales y el Código Civil y Comercial de la Nación. Para cualquier disputa,
                  las partes se someten a la jurisdicción de los tribunales ordinarios de la Ciudad de Mendoza,
                  Argentina.
                </p>
              </div>
              <div id="contacto" className="flex-1 bg-primary rounded-lg p-8 shadow-xl shadow-primary/20">
                <h2 className="text-2xl font-extrabold text-white mb-4">11. Contacto</h2>
                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  Para consultas legales o reportes de infracciones escribí a{' '}
                  <a href="mailto:legal@hobbyer.club" className="text-white font-bold hover:underline">
                    legal@hobbyer.club
                  </a>
                  . Para cuestiones de privacidad y ejercicio de derechos ARCO:{' '}
                  <a href="mailto:privacidad@hobbyer.club" className="text-white font-bold hover:underline">
                    privacidad@hobbyer.club
                  </a>
                </p>
                <a
                  className="text-white font-black text-lg hover:underline decoration-2 underline-offset-4"
                  href="mailto:legal@hobbyer.club"
                >
                  legal@hobbyer.club
                </a>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
