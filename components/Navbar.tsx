import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/hobbyer-logo.svg"
            alt="Hobbyer"
            width={160}
            height={32}
            priority
          />
        </Link>
        <div className="hidden gap-6 sm:flex">
          <Link
            href="/privacy"
            className="text-sm text-text-muted transition-colors hover:text-text-main"
          >
            Privacidad
          </Link>
          <Link
            href="/terms"
            className="text-sm text-text-muted transition-colors hover:text-text-main"
          >
            Términos
          </Link>
        </div>
      </div>
    </nav>
  );
}
