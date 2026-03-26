import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hobbyer — Encontrá personas con tus mismos hobbies",
  description:
    "Conectate con personas cercanas que comparten tus intereses. Pádel, running, música, gaming y más. Disponible próximamente en Android.",
  keywords: "hobbies, social, argentina, pádel, running, grupos",
  openGraph: {
    title: "Hobbyer",
    description: "Encontrá personas con tus mismos hobbies, cerca tuyo.",
    url: "https://hobbyer.club",
    siteName: "Hobbyer",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
