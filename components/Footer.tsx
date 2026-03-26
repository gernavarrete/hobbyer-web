import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-text-main text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="text-xl font-bold text-primary">hobbyer</span>
            <p className="mt-2 max-w-xs text-sm text-gray-400">
              Conectamos personas por lo que les apasiona.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Política de privacidad
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Términos y condiciones
            </Link>
            <Link href="/waitlist" className="transition-colors hover:text-white">
              Waitlist
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          © 2025 Hobbyer. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
