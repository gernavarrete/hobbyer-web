import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-text-main text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            {/* Solo el ícono cuadrado del logo (primeros 120px del SVG 600x120) */}
            <div className="overflow-hidden" style={{ width: 40, height: 40 }}>
              <Image
                src="/hobbyer-logo.svg"
                alt="Hobbyer"
                width={200}
                height={40}
                style={{ maxWidth: "none" }}
              />
            </div>
            <p className="mt-3 max-w-xs text-sm text-gray-400">
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
