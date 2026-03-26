import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="10" cy="14" r="5" stroke="#6C63FF" strokeWidth="2" fill="none" />
            <circle cx="18" cy="14" r="5" stroke="#6C63FF" strokeWidth="2" fill="none" />
          </svg>
          <span className="text-xl font-bold text-primary">hobbyer</span>
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
