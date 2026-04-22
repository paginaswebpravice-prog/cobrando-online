import { Metadata } from "next";
import ErroresComunesRecuperacionDeCarteraContent from "./ErroresComunesRecuperacionDeCarteraContent";

export const metadata: Metadata = {
  title:
    "7 errores en la recuperación de cartera en Colombia que te hacen perder dinero (y cómo evitarlos)",
  description:
    "Descubre los errores más comunes en la recuperación de cartera en Colombia y aprende cómo evitarlos para mejorar la efectividad del cobro.",

  keywords: [
    "errores recuperación de cartera",
    "cobro de cartera Colombia",
    "errores cobranza",
    "gestión de cartera vencida",
    "cómo recuperar cartera",
    "problemas en cobranza",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/errores-comunes-recuperacion-de-cartera",
  },

  openGraph: {
    title:
      "Errores en la recuperación de cartera que reducen tus ingresos (y cómo evitarlos)",
    description:
      "Evita errores frecuentes en la gestión de cobranza y mejora la recuperación de cartera en tu empresa.",
    url: "https://cobrandoonline.com/blog/errores-comunes-recuperacion-de-cartera",
    siteName: "Cobrando Online",
    locale: "es_CO",
    type: "article",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      {/* SCHEMA SEO AVANZADO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline:
                "Errores en la recuperación de cartera que reducen tus ingresos y cómo evitarlos",
              description:
                "Conoce los errores más comunes en la recuperación de cartera y cómo evitarlos para mejorar la efectividad del cobro.",
              author: {
                "@type": "Organization",
                name: "Cobrando Online",
              },
              publisher: {
                "@type": "Organization",
                name: "Cobrando Online",
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id":
                  "https://cobrandoonline.com/blog/errores-comunes-recuperacion-de-cartera",
              },
              datePublished: "2025-01-01",
              dateModified: "2026-01-01",
              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Por qué es importante documentar los acuerdos?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque sirven como respaldo legal en caso de incumplimiento y fortalecen la posición de la empresa.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo externalizar la recuperación de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cuando la empresa no cuenta con recursos suficientes o la cartera vencida afecta la liquidez.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ErroresComunesRecuperacionDeCarteraContent />
    </>
  );
}
