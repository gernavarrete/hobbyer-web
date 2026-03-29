import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad — Hobbyer',
  description: 'Conocé cómo Hobbyer maneja y protege tus datos personales.',
}

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Hero Editorial Header */}
      <div className="mb-20 text-center md:text-left max-w-3xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
          <span className="material-symbols-outlined text-sm">gavel</span>
          Aviso Legal
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-6 leading-[1.1]">
          Política de <span className="text-primary">Privacidad.</span>
        </h1>
        <p className="text-xl text-on-surface-variant leading-relaxed">
          Última actualización: marzo 2025. Creemos en la total transparencia sobre cómo se manejan y protegen tus datos.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Side Anchor Navigation */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit">
          <nav className="flex flex-col gap-1 p-2 bg-surface-container rounded-lg">
            <a className="px-4 py-3 rounded-full text-white font-bold bg-primary shadow-lg shadow-primary/20 transition-all text-sm flex items-center gap-3" href="#introduccion">
              <span className="material-symbols-outlined">info</span>
              Introducción
            </a>
            <a className="px-4 py-3 rounded-full text-on-secondary font-medium hover:text-white hover:bg-white/5 transition-all text-sm flex items-center gap-3" href="#datos">
              <span className="material-symbols-outlined">dataset</span>
              Datos que recopilamos
            </a>
            <a className="px-4 py-3 rounded-full text-on-secondary font-medium hover:text-white hover:bg-white/5 transition-all text-sm flex items-center gap-3" href="#uso">
              <span className="material-symbols-outlined">insights</span>
              Cómo usamos tus datos
            </a>
            <a className="px-4 py-3 rounded-full text-on-secondary font-medium hover:text-white hover:bg-white/5 transition-all text-sm flex items-center gap-3" href="#seguridad">
              <span className="material-symbols-outlined">verified_user</span>
              Seguridad
            </a>
            <a className="px-4 py-3 rounded-full text-on-secondary font-medium hover:text-white hover:bg-white/5 transition-all text-sm flex items-center gap-3" href="#derechos">
              <span className="material-symbols-outlined">person_pin</span>
              Tus derechos
            </a>
            <a className="px-4 py-3 rounded-full text-on-secondary font-medium hover:text-white hover:bg-white/5 transition-all text-sm flex items-center gap-3" href="#contacto">
              <span className="material-symbols-outlined">mail</span>
              Contacto
            </a>
          </nav>

          {/* Summary Card */}
          <div className="mt-8 p-6 rounded-lg bg-primary-container/20 border border-primary/10">
            <h4 className="text-white font-bold mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">security</span>
              Resumen
            </h4>
            <p className="text-xs leading-relaxed text-on-secondary">
              No vendemos tus datos. Solo recopilamos lo necesario para conectarte con personas y comunidades afines.
            </p>
          </div>
        </aside>

        {/* Legal Editorial Content */}
        <div className="lg:col-span-9 space-y-12">
          {/* Introducción */}
          <section className="bg-surface-container p-8 md:p-12 rounded-lg shadow-2xl shadow-black/40" id="introduccion">
            <h2 className="text-3xl font-extrabold text-white mb-6">1. ¿Quién somos?</h2>
            <div className="prose prose-invert max-w-none text-on-secondary space-y-4">
              <p>
                Hobbyer es una aplicación móvil desarrollada en Argentina que conecta
                personas a través de intereses y hobbies compartidos. Operamos bajo la
                razón social [NOMBRE_EMPRESA] con domicilio en Argentina.
              </p>
              <p>
                Al acceder o usar el Servicio, aceptás que leíste, entendiste y estás de
                acuerdo con la recopilación, almacenamiento, uso y divulgación de tu
                información personal según se describe en esta Política de Privacidad.
              </p>
            </div>
          </section>

          {/* Datos que recopilamos */}
          <section className="bg-surface-container p-8 md:p-12 rounded-lg" id="datos">
            <h2 className="text-3xl font-extrabold text-white mb-8">2. ¿Qué datos recopilamos?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-surface-container-highest/50 border border-outline-variant">
                <span className="material-symbols-outlined text-primary mb-4 block text-3xl">account_circle</span>
                <h3 className="text-white font-bold text-lg mb-2">Datos de cuenta</h3>
                <p className="text-sm leading-relaxed">Nombre, dirección de email y datos de registro que proporcionás al crear tu cuenta.</p>
              </div>
              <div className="p-6 rounded-lg bg-surface-container-highest/50 border border-outline-variant">
                <span className="material-symbols-outlined text-primary mb-4 block text-3xl">interests</span>
                <h3 className="text-white font-bold text-lg mb-2">Datos de perfil</h3>
                <p className="text-sm leading-relaxed">Foto de perfil, biografía y hobbies seleccionados que elegís mostrar en la plataforma.</p>
              </div>
              <div className="p-6 rounded-lg bg-surface-container-highest/50 border border-outline-variant">
                <span className="material-symbols-outlined text-primary mb-4 block text-3xl">location_on</span>
                <h3 className="text-white font-bold text-lg mb-2">Datos de ubicación</h3>
                <p className="text-sm leading-relaxed">Coordenadas GPS aproximadas para mostrar personas y grupos cercanos (solo mientras usás la app).</p>
              </div>
              <div className="p-6 rounded-lg bg-surface-container-highest/50 border border-outline-variant">
                <span className="material-symbols-outlined text-primary mb-4 block text-3xl">chat</span>
                <h3 className="text-white font-bold text-lg mb-2">Mensajes y uso</h3>
                <p className="text-sm leading-relaxed">Contenido de los chats entre usuarios que hicieron match e interacciones con perfiles, grupos y partners.</p>
              </div>
            </div>
          </section>

          {/* Cómo usamos tus datos */}
          <section className="bg-surface-container p-8 md:p-12 rounded-lg" id="uso">
            <h2 className="text-3xl font-extrabold text-white mb-6">3. ¿Para qué usamos tus datos?</h2>
            <p className="mb-8 leading-relaxed">Usamos la información que recopilamos para los siguientes fines:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-primary/20 p-1 rounded-full">
                  <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                </div>
                <div>
                  <strong className="text-white block mb-1">Mostrarte personas cercanas</strong>
                  <span>Conectarte con personas que comparten tus hobbies según tu nivel de habilidad y ubicación geográfica.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-primary/20 p-1 rounded-full">
                  <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                </div>
                <div>
                  <strong className="text-white block mb-1">Sugerirte grupos y eventos</strong>
                  <span>Recomendarte comunidades y actividades en tu zona basadas en tus intereses.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-primary/20 p-1 rounded-full">
                  <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                </div>
                <div>
                  <strong className="text-white block mb-1">Ofrecerte descuentos de partners</strong>
                  <span>Beneficios exclusivos de negocios aliados relacionados con tus hobbies.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-primary/20 p-1 rounded-full">
                  <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                </div>
                <div>
                  <strong className="text-white block mb-1">Mejorar la plataforma</strong>
                  <span>Analizar patrones de uso para mejorar la experiencia y seguridad del servicio.</span>
                </div>
              </li>
            </ul>
          </section>

          {/* Seguridad */}
          <section className="relative overflow-hidden bg-primary p-8 md:p-12 rounded-lg text-white" id="seguridad">
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold mb-6">4. Seguridad</h2>
              <p className="text-white/80 max-w-2xl leading-relaxed mb-4">
                Tus datos se transmiten con cifrado TLS. Las contraseñas son gestionadas
                por AWS Cognito y nunca las almacenamos directamente.
              </p>
              <p className="text-white/80 max-w-2xl leading-relaxed mb-8">
                No vendemos ni compartimos tus datos personales con terceros con fines
                comerciales. Usamos Amazon Web Services (AWS) para almacenamiento y
                procesamiento, y Google Firebase para distribución y notificaciones.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">lock</span>
                  Cifrado TLS
                </span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">security</span>
                  AWS Cognito
                </span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">location_off</span>
                  Sin historial de ubicación
                </span>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 opacity-10">
              <span className="material-symbols-outlined text-[300px]" style={{fontVariationSettings: "'wght' 700"}}>shield</span>
            </div>
          </section>

          {/* Tus derechos */}
          <section className="bg-surface-container p-8 md:p-12 rounded-lg" id="derechos">
            <h2 className="text-3xl font-extrabold text-white mb-6">5. Tus derechos</h2>
            <div className="space-y-6 text-on-secondary">
              <p>
                Podés solicitar acceso, corrección o eliminación de tus datos en cualquier
                momento escribiendo a{' '}
                <a href="mailto:privacidad@hobbyer.club" className="text-primary hover:underline">
                  privacidad@hobbyer.club
                </a>
                . Respondemos en un plazo máximo de 30 días.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-surface-container-high">
                  <h4 className="text-white font-bold mb-1">Acceso</h4>
                  <p className="text-sm">Solicitá una copia de los datos que tenemos sobre vos.</p>
                </div>
                <div className="p-4 rounded-lg bg-surface-container-high">
                  <h4 className="text-white font-bold mb-1">Eliminación</h4>
                  <p className="text-sm">Pedí que eliminemos toda tu información y tu cuenta.</p>
                </div>
                <div className="p-4 rounded-lg bg-surface-container-high">
                  <h4 className="text-white font-bold mb-1">Corrección</h4>
                  <p className="text-sm">Modificá o corregí los datos personales de tu perfil.</p>
                </div>
                <div className="p-4 rounded-lg bg-surface-container-high">
                  <h4 className="text-white font-bold mb-1">Desuscripción</h4>
                  <p className="text-sm">Cancelá todas las comunicaciones no esenciales.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Cambios a esta política */}
          <section className="bg-surface-container p-8 md:p-12 rounded-lg">
            <h2 className="text-3xl font-extrabold text-white mb-6">6. Cambios a esta política</h2>
            <div className="prose prose-invert max-w-none text-on-secondary">
              <p>
                Te notificaremos por email si realizamos cambios significativos a esta
                Política de Privacidad.
              </p>
            </div>
          </section>

          {/* Contacto */}
          <section className="bg-surface-container p-8 md:p-12 rounded-lg text-center border-2 border-primary/20" id="contacto">
            <h2 className="text-3xl font-extrabold text-white mb-4">¿Consultas?</h2>
            <p className="text-on-secondary mb-8">Si tenés alguna pregunta sobre esta Política de Privacidad, contactá a nuestro equipo.</p>
            <a
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-background rounded-full font-bold hover:bg-primary hover:text-white transition-all transform hover:scale-105"
              href="mailto:privacidad@hobbyer.club"
            >
              <span className="material-symbols-outlined">send</span>
              privacidad@hobbyer.club
            </a>
          </section>
        </div>
      </div>
    </main>
  )
}
