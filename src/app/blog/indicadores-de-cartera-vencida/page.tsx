import { Metadata } from "next";
import IndicadoresCarteraContent from "./IndicadoresCarteraContent";

export const metadata: Metadata = {
  title:
    "Indicadores de cartera vencida: 8 KPIs para medir la mora y mejorar el recaudo | Cobrando Online",

  description:
    "Aprende cuáles son los principales indicadores de cartera vencida, cómo calcularlos y cómo utilizarlos para reducir la mora, mejorar el flujo de caja y optimizar la gestión de cobranza empresarial.",

  keywords: [
    "indicadores de cartera vencida",
    "KPIs de cartera",
    "indicadores de cobranza",
    "índice de cartera vencida",
    "rotación de cartera",
    "edad de cartera",
    "DSO cartera",
    "índice de recaudo",
    "cómo medir cartera vencida",
    "gestión de cartera empresas",
    "seguimiento cartera",
    "recuperación de cartera",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/indicadores-de-cartera-vencida",
  },

  openGraph: {
    title:
      "Indicadores de cartera vencida: cómo medir la mora y mejorar el recaudo",

    description:
      "Descubre los indicadores financieros que utilizan las empresas para controlar la cartera vencida, reducir la mora y mejorar la recuperación de pagos.",

    url: "https://cobrandoonline.com/blog/indicadores-de-cartera-vencida",

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
      {/* SCHEMA SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",

              headline:
                "Indicadores de cartera vencida: 8 KPIs para medir la mora y mejorar el recaudo",

              description:
                "Guía completa sobre los indicadores de cartera vencida más importantes para evaluar la mora, el recaudo y la eficiencia de la gestión de cobranza empresarial.",

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
                  "https://cobrandoonline.com/blog/indicadores-de-cartera-vencida",
              },

              datePublished: "2025-01-01",

              dateModified: "2026-07-27",

              inLanguage: "es",

              keywords: [
                "indicadores de cartera vencida",
                "KPIs de cobranza",
                "índice de cartera",
                "edad de cartera",
                "rotación de cartera",
                "DSO",
                "índice de recaudo",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué son los indicadores de cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Son métricas utilizadas para medir el comportamiento de las cuentas por cobrar, el nivel de mora y la eficiencia de la gestión de cobranza de una empresa.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuál es el indicador más importante para medir la cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "El índice de cartera vencida suele ser el principal indicador porque muestra qué porcentaje de la cartera total se encuentra en mora.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cada cuánto deben medirse los indicadores de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Lo recomendable es realizar un seguimiento semanal o mensual para detectar aumentos en la mora y tomar decisiones antes de que afecten el flujo de caja.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué indicadores ayudan a mejorar la gestión de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Entre los más utilizados están el índice de cartera vencida, la rotación de cartera, el DSO, la antigüedad de cartera, el índice de recaudo y la tasa de recuperación.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué una empresa debe controlar estos indicadores?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Porque permiten reducir la mora, mejorar la liquidez, optimizar las estrategias de cobranza y tomar decisiones financieras basadas en información actualizada.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <IndicadoresCarteraContent />
    </>
  );
}
