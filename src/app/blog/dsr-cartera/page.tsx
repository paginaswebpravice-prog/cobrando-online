import { Metadata } from "next";
import DsrCartera from "./DsrCartera";

export const metadata: Metadata = {
  title: "DSR en cartera: indicador para medir el desempeño de recuperación",
  description:
    "Conoce qué es el DSR en cartera, cómo interpretarlo y cómo utilizarlo para mejorar la gestión de cobranza y recuperación de cartera.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/dsr-cartera",
  },

  openGraph: {
    title: "DSR en cartera: análisis del desempeño de recuperación",
    description:
      "Aprende cómo funciona el indicador DSR y cómo utilizarlo para evaluar la efectividad de la gestión de cobranza.",
    url: "https://cobrandoonline.com/blog/dsr-cartera",
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
                "DSR en cartera: indicador para medir el desempeño de recuperación",
              description:
                "Guía para entender el DSR y utilizarlo en la gestión financiera de cartera.",
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
                "@id": "https://cobrandoonline.com/blog/dsr-cartera",
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
                  name: "¿Qué es el DSR en cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es un indicador utilizado para medir la efectividad de la recuperación de cartera y el desempeño de los procesos de cobranza.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Para qué sirve el DSR?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Permite evaluar resultados de cobranza, comparar periodos y detectar oportunidades de mejora en la gestión de cartera.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué indicadores complementan el DSR?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Indicadores como DSO, rotación de cartera, antigüedad de cartera y porcentaje de cartera vencida complementan su análisis.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <DsrCartera />
    </>
  );
}
