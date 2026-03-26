import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones — Hobbyer",
};

export default function TermsPage() {
  return (
    <section className="px-4 py-16 pt-28">
      <article className="prose prose-invert mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-white">
          Términos y Condiciones
        </h1>
        <p className="text-sm text-on-surface-variant">
          Última actualización: marzo 2025
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">
          1. Aceptación
        </h2>
        <p className="mt-2 text-on-surface-variant">
          Al usar Hobbyer aceptás estos términos. Si no estás de acuerdo, no
          uses la app.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">
          2. Elegibilidad
        </h2>
        <p className="mt-2 text-on-surface-variant">
          Debés tener 18 años o más para usar Hobbyer.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">
          3. Uso aceptable
        </h2>
        <p className="mt-2 text-on-surface-variant">No podés usar Hobbyer para:</p>
        <ul className="mt-2 list-disc space-y-2 pl-6 text-on-surface-variant">
          <li>Acosar o intimidar a otros usuarios.</li>
          <li>Publicar contenido falso o engañoso.</li>
          <li>Usar la plataforma con fines comerciales no autorizados.</li>
          <li>Intentar acceder a cuentas de terceros.</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold text-white">
          4. Contenido del usuario
        </h2>
        <p className="mt-2 text-on-surface-variant">
          Sos responsable del contenido que publicás (fotos, bio, mensajes).
          Hobbyer puede remover contenido que viole estas reglas.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">
          5. Privacidad
        </h2>
        <p className="mt-2 text-on-surface-variant">
          El uso de tus datos está regulado por nuestra{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Política de Privacidad
          </Link>
          .
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">
          6. Matches y chat
        </h2>
        <p className="mt-2 text-on-surface-variant">
          El chat solo se habilita entre usuarios que dieron like mutuamente.
          Hobbyer no es responsable por el contenido de los mensajes entre
          usuarios.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">
          7. Partners
        </h2>
        <p className="mt-2 text-on-surface-variant">
          Las ofertas de partners son responsabilidad de cada negocio. Hobbyer no
          garantiza la disponibilidad o condiciones de las ofertas.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">
          8. Suspensión de cuentas
        </h2>
        <p className="mt-2 text-on-surface-variant">
          Podemos suspender o eliminar cuentas que violen estos términos sin
          previo aviso.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">
          9. Limitación de responsabilidad
        </h2>
        <p className="mt-2 text-on-surface-variant">
          Hobbyer se provee &ldquo;tal cual&rdquo;. No garantizamos
          disponibilidad continua del servicio.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">
          10. Ley aplicable
        </h2>
        <p className="mt-2 text-on-surface-variant">
          Estos términos se rigen por la ley argentina.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">
          11. Contacto
        </h2>
        <p className="mt-2 text-on-surface-variant">
          <a
            href="mailto:legal@hobbyer.club"
            className="text-primary hover:underline"
          >
            legal@hobbyer.club
          </a>
        </p>
      </article>
    </section>
  );
}
