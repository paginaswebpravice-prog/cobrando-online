import { Metadata } from "next";
import AnalisisFinancieroCobranza from "./AnalisisFinancieroCobranza";

export const metadata: Metadata = {
  title: "Análisis financiero de cobranza: indicadores y gestión de cartera",
  description:
    "Aprende cómo realizar un análisis financiero de cobranza para interpretar indicadores, reducir riesgos y mejorar la recuperación de cartera.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/analisis-financiero-cobranza",
  },

  openGraph: {
    title: "Análisis financiero de cobranza: cómo interpretar datos de cartera",
    description:
      "Guía completa para utilizar indicadores financieros y optimizar la recuperación de cartera empresarial.",
    url: "https://cobrandoonline.com/blog/analisis-financiero-cobranza",
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
                "Análisis financiero de cobranza: cómo utilizar los datos para mejorar la recuperación de cartera",
              description:
                "Guía para interpretar indicadores financieros y optimizar la gestión de cobranza.",
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
                  "https://cobrandoonline.com/blog/analisis-financiero-cobranza",
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
                  name: "¿Qué es el análisis financiero de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es el proceso de interpretar indicadores y datos relacionados con las cuentas por cobrar para mejorar la recuperación de cartera.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué indicadores se utilizan en cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Los más comunes son DSO, rotación de cartera, porcentaje de cartera vencida, antigüedad de cartera e índice de recuperación.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es importante analizar la cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque permite detectar riesgos financieros, mejorar la liquidez y tomar decisiones estratégicas basadas en información confiable.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <AnalisisFinancieroCobranza />
    </>
  );
}
