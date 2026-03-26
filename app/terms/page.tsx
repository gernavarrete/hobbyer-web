import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones — Hobbyer",
};

export default function TermsPage() {
  return (
    <section className="px-4 py-16">
      <article className="prose prose-slate mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-text-main">
          Términos y Condiciones
        </h1>
        <p className="text-sm text-text-muted">
          Última actualización: marzo 2025
        </p>

        <h2 className="mt-10 text-xl font-semibold text-text-main">
          1. Aceptación
        </h2>
        <p className="mt-2 text-text-muted">
          Al usar Hobbyer aceptás estos términos. Si no estás de acuerdo, no
          uses la app.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-text-main">
          2. Elegibilidad
        </h2>
        <p className="mt-2 text-text-muted">
          Debés tener 18 años o más para usar Hobbyer.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-text-main">
          3. Uso aceptable
        </h2>
        <p className="mt-2 text-text-muted">No podés usar Hobbyer para:</p>
        <ul className="mt-2 list-disc space-y-2 pl-6 text-text-muted">
          <li>Acosar o intimidar a otros usuarios.</li>
          <li>Publicar contenido falso o engañoso.</li>
          <li>Usar la plataforma con fines comerciales no autorizados.</li>
          <li>Intentar acceder a cuentas de terceros.</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold text-text-main">
          4. Contenido del usuario
        </h2>
        <p className="mt-2 text-text-muted">
          Sos responsable del contenido que publicás (fotos, bio, mensajes).
          Hobbyer puede remover contenido que viole estas reglas.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-text-main">
          5. Privacidad
        </h2>
        <p className="mt-2 text-text-muted">
          El uso de tus datos está regulado por nuestra{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Política de Privacidad
          </Link>
          .
        </p>

        <h2 className="mt-10 text-xl font-semibold text-text-main">
          6. Matches y chat
        </h2>
        <p className="mt-2 text-text-muted">
          El chat solo se habilita entre usuarios que dieron like mutuamente.
          Hobbyer no es responsable por el contenido de los mensajes entre
          usuarios.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-text-main">
          7. Partners
        </h2>
        <p className="mt-2 text-text-muted">
          Las ofertas de partners son responsabilidad de cada negocio. Hobbyer no
          garantiza la disponibilidad o condiciones de las ofertas.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-text-main">
          8. Suspensión de cuentas
        </h2>
        <p className="mt-2 text-text-muted">
          Podemos suspender o eliminar cuentas que violen estos términos sin
          previo aviso.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-text-main">
          9. Limitación de responsabilidad
        </h2>
        <p className="mt-2 text-text-muted">
          Hobbyer se provee &ldquo;tal cual&rdquo;. No garantizamos
          disponibilidad continua del servicio.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-text-main">
          10. Ley aplicable
        </h2>
        <p className="mt-2 text-text-muted">
          Estos términos se rigen por la ley argentina.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-text-main">
          11. Contacto
        </h2>
        <p className="mt-2 text-text-muted">
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
