import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — Hobbyer",
};

export default function PrivacyPage() {
  return (
    <section className="px-4 py-16 pt-28">
      <article className="prose prose-invert mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-white">
          Política de Privacidad
        </h1>
        <p className="text-sm text-on-surface-variant">
          Última actualización: marzo 2025
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">
          1. ¿Quién somos?
        </h2>
        <p className="mt-2 text-on-surface-variant">
          Hobbyer es una aplicación móvil desarrollada en Argentina que conecta
          personas a través de intereses y hobbies compartidos. Operamos bajo la
          razón social [NOMBRE_EMPRESA] con domicilio en Argentina.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">
          2. ¿Qué datos recopilamos?
        </h2>
        <ul className="mt-2 list-disc space-y-2 pl-6 text-on-surface-variant">
          <li>
            <strong>Datos de cuenta:</strong> nombre, dirección de email.
          </li>
          <li>
            <strong>Datos de perfil:</strong> foto de perfil, biografía, hobbies
            seleccionados.
          </li>
          <li>
            <strong>Datos de ubicación:</strong> coordenadas GPS aproximadas para
            mostrar personas y grupos cercanos (solo mientras usás la app).
          </li>
          <li>
            <strong>Datos de uso:</strong> interacciones con perfiles, grupos y
            partners.
          </li>
          <li>
            <strong>Mensajes:</strong> el contenido de los chats entre usuarios
            que hicieron match.
          </li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold text-white">
          3. ¿Para qué usamos tus datos?
        </h2>
        <ul className="mt-2 list-disc space-y-2 pl-6 text-on-surface-variant">
          <li>Mostrarte personas cercanas con hobbies en común.</li>
          <li>Sugerirte grupos y eventos en tu zona.</li>
          <li>
            Ofrecerte descuentos de partners relacionados con tus hobbies.
          </li>
          <li>Mejorar la experiencia y seguridad de la plataforma.</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold text-white">
          4. ¿Con quién compartimos tus datos?
        </h2>
        <p className="mt-2 text-on-surface-variant">
          No vendemos ni compartimos tus datos personales con terceros con fines
          comerciales. Usamos los siguientes proveedores de infraestructura:
          Amazon Web Services (AWS) para almacenamiento y procesamiento, y Google
          Firebase para distribución y notificaciones.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">
          5. Ubicación
        </h2>
        <p className="mt-2 text-on-surface-variant">
          Solo accedemos a tu ubicación cuando la app está en uso y con tu
          permiso explícito. No almacenamos el historial de ubicaciones.
          Guardamos únicamente tus coordenadas actuales para el servicio de
          discovery.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">
          6. Tus derechos
        </h2>
        <p className="mt-2 text-on-surface-variant">
          Podés solicitar acceso, corrección o eliminación de tus datos en
          cualquier momento escribiendo a{" "}
          <a
            href="mailto:privacidad@hobbyer.club"
            className="text-primary hover:underline"
          >
            privacidad@hobbyer.club
          </a>
          . Respondemos en un plazo máximo de 30 días.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">
          7. Seguridad
        </h2>
        <p className="mt-2 text-on-surface-variant">
          Tus datos se transmiten con cifrado TLS. Las contraseñas son
          gestionadas por AWS Cognito y nunca las almacenamos directamente.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">
          8. Cambios a esta política
        </h2>
        <p className="mt-2 text-on-surface-variant">
          Te notificaremos por email si realizamos cambios significativos.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">
          9. Contacto
        </h2>
        <p className="mt-2 text-on-surface-variant">
          <a
            href="mailto:privacidad@hobbyer.club"
            className="text-primary hover:underline"
          >
            privacidad@hobbyer.club
          </a>
        </p>
      </article>
    </section>
  );
}
