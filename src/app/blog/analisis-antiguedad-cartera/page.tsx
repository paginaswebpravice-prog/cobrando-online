import { Metadata } from "next";
import AnalisisAntiguedadCartera from "./AnalisisAntiguedadCartera";

export const metadata: Metadata = {
  title:
    "Antigüedad de cartera: clasificación y análisis de cuentas por cobrar",
  description:
    "Aprende qué es la antigüedad de cartera, cómo se clasifica por días de mora y cómo utilizarla para mejorar la recuperación de cartera.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/analisis-antiguedad-cartera",
  },

  openGraph: {
    title: "Antigüedad de cartera: cómo clasificar cuentas por cobrar",
    description:
      "Guía completa para analizar la antigüedad de cartera y reducir riesgos financieros.",
    url: "https://cobrandoonline.com/blog/analisis-antiguedad-cartera",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline:
                "Antigüedad de cartera: clasificación y análisis de cuentas por cobrar",
              description:
                "Guía para entender la antigüedad de cartera y su impacto en la gestión financiera.",
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
                  "https://cobrandoonline.com/blog/analisis-antiguedad-cartera",
              },
              datePublished: "2026-01-01",
              dateModified: "2026-01-01",
              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es la antigüedad de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es la clasificación de las cuentas por cobrar según los días de mora transcurridos desde su vencimiento.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es importante medir la antigüedad de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque permite identificar riesgos de incobrabilidad y priorizar acciones de recuperación.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué rangos se utilizan normalmente?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Generalmente se utilizan rangos como 0-30, 31-60, 61-90, 91-180 y más de 180 días de mora.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <AnalisisAntiguedadCartera />
    </>
  );
}
