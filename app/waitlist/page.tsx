"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-20 pt-28">
      <div className="w-full max-w-md text-center">
        {submitted ? (
          <div>
            <p className="text-3xl">📩</p>
            <h1 className="mt-4 text-2xl font-bold text-white">
              ¡Listo!
            </h1>
            <p className="mt-2 text-on-surface-variant">
              En los próximos días te llega un email de Firebase con el link
              para descargar la beta. Si no lo ves, revisá Spam 📩
            </p>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-white">
              Ser de los primeros
            </h1>
            <p className="mt-3 text-on-surface-variant">
              Hobbyer está en beta. Dejá tu email y te avisamos cuando podés
              descargarla.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
              <input
                type="email"
                required
                placeholder="tu@email.com"
                className="rounded-lg border border-outline bg-surface-container-high px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/80"
              >
                Anotarme
              </button>
            </form>
            <p className="mt-4 text-xs text-on-surface-variant">
              No spam. Solo te escribimos cuando la app esté lista.
            </p>
            <p className="mt-6 text-sm text-on-surface-variant">
              ¿Ya recibiste el email?{" "}
              <Link href="/beta" className="font-medium text-primary hover:underline">
                → Ver instrucciones de instalación
              </Link>
            </p>
          </>
        )}
      </div>
    </section>
  );
}
