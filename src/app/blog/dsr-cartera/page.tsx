import { Metadata } from "next";
import DsrCartera from "./DsrCartera";

export const metadata: Metadata = {
  title:
    "¿Qué es el DSR en recuperación de cartera? Cómo medir el desempeño de cobranza y mejorar este KPI | Guía 2026",

  description:
    "Descubre qué es el DSR en recuperación de cartera, cómo interpretar este indicador, cómo medir la efectividad de la cobranza y qué estrategias ayudan a mejorar este KPI financiero.",

  keywords: [
    "DSR",
    "DSR cartera",
    "DSR recuperación de cartera",
    "indicador DSR",
    "qué es DSR",
    "DSR cobranza",
    "KPI recuperación cartera",
    "indicadores de cobranza",
    "indicadores recuperación cartera",
    "métricas de cobranza",
    "gestión de cartera",
    "eficiencia recuperación cartera",
    "indicadores financieros cartera",
    "cobranza empresarial",
    "KPI cartera",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/dsr-cartera",
  },

  openGraph: {
    title:
      "DSR en recuperación de cartera: qué es, cómo medirlo y cómo mejorar este indicador",

    description:
      "Aprende qué significa el DSR, cómo interpretar este KPI de recuperación de cartera y qué acciones ayudan a mejorar la eficiencia de la cobranza empresarial.",

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
                "¿Qué es el DSR en recuperación de cartera? Cómo interpretar este indicador y mejorar la cobranza empresarial",

              description:
                "Guía completa para entender el DSR, medir el desempeño de recuperación de cartera, interpretar este KPI financiero y optimizar la gestión de cobranza.",

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

              dateModified: "2026-07-23",

              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué significa DSR en recuperación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "El DSR es un indicador utilizado por muchas organizaciones para medir la efectividad de la recuperación de cartera durante un período determinado y evaluar el desempeño de las estrategias de cobranza.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo se interpreta un DSR alto?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Generalmente un DSR alto indica que la empresa está recuperando una mayor proporción de la cartera gestionada, aunque siempre debe analizarse junto con otros indicadores financieros.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué significa tener un DSR bajo?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Un DSR bajo puede evidenciar problemas en la gestión de cobranza, dificultades de pago por parte de los clientes o procesos internos que requieren optimización.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué indicadores complementan el DSR?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Indicadores como DSO, rotación de cartera, porcentaje de recuperación, antigüedad de cartera, índice de morosidad y cartera vencida permiten obtener una visión mucho más completa del desempeño financiero.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo mejorar el DSR?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Implementando procesos preventivos de cobranza, automatización, seguimiento continuo, segmentación de clientes y análisis permanente de los indicadores de recuperación.",
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
