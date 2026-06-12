import { Metadata } from "next";
import IndiceMorosidad from "./IndiceMorosidad";

export const metadata: Metadata = {
  title: "Índice de morosidad: cómo calcularlo y analizar la cartera",
  description:
    "Aprende qué es el índice de morosidad, cómo calcularlo y cómo utilizarlo para evaluar la salud financiera de tu cartera.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/indice-morosidad",
  },

  openGraph: {
    title: "Índice de morosidad: indicador clave para la gestión de cartera",
    description:
      "Guía completa para calcular el índice de morosidad y mejorar el control financiero de las cuentas por cobrar.",
    url: "https://cobrandoonline.com/blog/indice-morosidad",
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
              headline: "Índice de morosidad: cómo calcularlo y qué significa",
              description:
                "Aprende a calcular el índice de morosidad y evaluar la calidad de la cartera de clientes.",
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
                "@id": "https://cobrandoonline.com/blog/indice-morosidad",
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
                  name: "¿Qué es el índice de morosidad?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es un indicador financiero que mide el porcentaje de cartera vencida respecto al total de cuentas por cobrar.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo se calcula el índice de morosidad?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Se calcula dividiendo la cartera vencida entre la cartera total y multiplicando el resultado por 100.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es importante medir la morosidad?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Permite identificar riesgos financieros, evaluar la efectividad de la cobranza y mejorar la toma de decisiones empresariales.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <IndiceMorosidad />
    </>
  );
}
