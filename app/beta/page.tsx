import type { Metadata } from "next";
import Link from "next/link";

// Número de WhatsApp para reportar bugs — reemplazar con el número real
const WHATSAPP_NUMBER = "549XXXXXXXXXX";

export const metadata: Metadata = {
  title: "Beta — Hobbyer",
  description: "Instalación de la beta de Hobbyer",
  robots: "noindex, nofollow",
};

const steps = [
  {
    number: 1,
    title: "Revisá tu email",
    description:
      "Buscá el email de Firebase App Distribution. Puede estar en Promociones o Spam.",
  },
  {
    number: 2,
    title: "Abrilo desde tu Android",
    description:
      "Es importante abrirlo directamente desde el celular donde vas a instalar la app.",
  },
  {
    number: 3,
    title: "Descargá el APK",
    description:
      "Tocá \"Download latest release\". Android puede pedir que habilites instalación de fuentes externas — es normal.",
  },
  {
    number: 4,
    title: "¡Listo para testear!",
    description:
      "Abrí Hobbyer, creá tu cuenta y explorá. Tu feedback es muy valioso para nosotros.",
  },
];

const features = [
  "Registro y onboarding de hobbies",
  "Discovery de personas y grupos cercanos",
  "Chat con matches",
];

export default function BetaPage() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-2xl">

        {/* Hero */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-text-main sm:text-4xl">
            Bienvenido a la beta de Hobbyer 👋
          </h1>
          <p className="mt-4 text-lg text-text-muted">
            Gracias por ser parte de los primeros testers. Seguí estos pasos
            para instalar la app.
          </p>
        </div>

        {/* Pasos */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-text-main">Cómo instalar</h2>
          <div className="mt-6 flex flex-col gap-0">
            {steps.map((step, index) => (
              <div key={step.number} className="flex gap-4">
                {/* Número + línea conectora */}
                <div className="flex flex-col items-center">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="mt-1 w-0.5 flex-1 bg-primary/20" />
                  )}
                </div>
                {/* Contenido */}
                <div className={`pb-8 ${index === steps.length - 1 ? "pb-0" : ""}`}>
                  <p className="font-semibold text-text-main">{step.title}</p>
                  <p className="mt-1 text-sm text-text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Qué probamos */}
        <div className="mt-12 rounded-xl bg-surface p-6">
          <h2 className="text-xl font-bold text-text-main">¿Qué probamos?</h2>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-2 rounded-lg bg-white p-4 text-sm text-text-main shadow-sm"
              >
                <span className="mt-0.5 text-green-500 font-bold">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reportar problema */}
        <div className="mt-12 text-center">
          <h2 className="text-xl font-bold text-text-main">
            Reportar un problema
          </h2>
          <p className="mt-3 text-text-muted">
            Si encontrás algo raro, mandanos un mensaje a{" "}
            <a
              href="mailto:beta@hobbyer.club"
              className="font-medium text-primary hover:underline"
            >
              beta@hobbyer.club
            </a>
          </p>
          <p className="mt-2 text-text-muted">o por WhatsApp</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C+encontré+un+bug+en+Hobbyer+beta`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-lg bg-green-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-600"
          >
            Escribir por WhatsApp
          </a>
        </div>

        {/* Link a privacy/terms */}
        <div className="mt-16 flex justify-center gap-6 text-sm text-text-muted">
          <Link href="/privacy" className="hover:text-text-main">
            Privacidad
          </Link>
          <Link href="/terms" className="hover:text-text-main">
            Términos
          </Link>
        </div>

      </div>
    </section>
  );
}
