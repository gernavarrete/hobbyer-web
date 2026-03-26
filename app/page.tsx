import Link from "next/link";

const features = [
  {
    icon: "🎯",
    title: "Personas afines",
    description:
      "Ves personas cercanas ordenadas por cuántos hobbies tienen en común con vos.",
  },
  {
    icon: "👥",
    title: "Grupos activos",
    description:
      "Unite a comunidades reales organizadas alrededor de un hobby en tu zona.",
  },
  {
    icon: "🏪",
    title: "Descuentos exclusivos",
    description:
      "Negocios locales te ofrecen beneficios por tus intereses.",
  },
];

const hobbies = [
  "Pádel",
  "Fútbol 5",
  "Running",
  "Ciclismo",
  "Natación",
  "Guitarra",
  "Piano",
  "Canto",
  "DJ/Electrónica",
  "Fotografía",
  "Pintura",
  "Teatro",
  "Lectura",
  "Videojuegos",
  "Juegos de Mesa",
  "Escape Rooms",
  "Programación",
  "Yoga",
  "Meditación",
  "Senderismo",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface px-4 py-20 text-center sm:py-28">
        <div className="mx-auto max-w-3xl">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Disponible próximamente en Android
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-text-main sm:text-5xl">
            Encontrá personas con tus mismos hobbies, cerca tuyo.
          </h1>
          <p className="mt-6 text-lg text-text-muted">
            Conectate con gente real que comparte tus intereses. En tu barrio, en
            tu ciudad.
          </p>
          <Link
            href="/waitlist"
            className="mt-8 inline-block rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Quiero probarlo
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-gray-100 bg-white p-8 text-center"
            >
              <span className="text-4xl">{f.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-text-main">{f.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies showcase */}
      <section className="bg-surface px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-text-main">
            Algunos de los hobbies en Hobbyer
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {hobbies.map((h) => (
              <span
                key={h}
                className="rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-medium text-text-main"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-primary px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-white">
          ¿Querés ser de los primeros?
        </h2>
        <Link
          href="/waitlist"
          className="mt-8 inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-primary transition-colors hover:bg-gray-100"
        >
          Quiero probarlo
        </Link>
      </section>
    </>
  );
}
