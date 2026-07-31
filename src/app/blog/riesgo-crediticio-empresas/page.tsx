import { Metadata } from "next";
import RiesgoCrediticio from "./RiesgoCrediticio";

export const metadata: Metadata = {
  title:
    "Riesgo crediticio en empresas: cómo evaluar clientes y reducir la cartera vencida (Guía 2026)",

  description:
    "Aprende qué es el riesgo crediticio en empresas, cómo evaluar clientes antes de otorgar crédito, qué indicadores analizar y qué estrategias reducen la morosidad y la cartera vencida.",

  keywords: [
    "riesgo crediticio empresas",
    "riesgo crediticio",
    "evaluación riesgo crediticio",
    "cómo evaluar clientes",
    "análisis crediticio empresas",
    "políticas de crédito",
    "gestión de cartera",
    "cartera vencida",
    "morosidad empresarial",
    "evaluación financiera clientes",
    "scoring crediticio",
    "riesgo de cartera",
    "cuentas por cobrar",
    "prevención cartera vencida",
    "cobrando online",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/riesgo-crediticio-empresas",
  },

  openGraph: {
    title:
      "Riesgo crediticio en empresas: cómo evaluar clientes y disminuir la morosidad",

    description:
      "Descubre cómo realizar un análisis crediticio empresarial, identificar clientes de alto riesgo y reducir pérdidas por cartera vencida mediante políticas de crédito efectivas.",

    url: "https://cobrandoonline.com/blog/riesgo-crediticio-empresas",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "Cómo evaluar el riesgo crediticio y evitar clientes morosos",

    description:
      "Guía completa para empresas sobre evaluación crediticia, scoring, análisis financiero y reducción del riesgo de cartera.",
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
                "Riesgo crediticio en empresas: cómo evaluar clientes y reducir la cartera vencida",

              description:
                "Guía completa para comprender el riesgo crediticio empresarial, implementar procesos de evaluación de clientes y disminuir el riesgo de incumplimiento en ventas a crédito.",

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
                  "https://cobrandoonline.com/blog/riesgo-crediticio-empresas",
              },

              datePublished: "2025-01-01",

              dateModified: "2026-07-31",

              inLanguage: "es",

              keywords: [
                "riesgo crediticio",
                "evaluación crediticia",
                "análisis financiero",
                "riesgo de cartera",
                "clientes morosos",
                "cartera vencida",
              ],
            },

            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué es el riesgo crediticio en una empresa?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es la probabilidad de que un cliente incumpla el pago de una obligación adquirida después de recibir productos o servicios a crédito.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo se evalúa el riesgo crediticio de un cliente?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Se analiza el historial de pagos, la capacidad financiera, el nivel de endeudamiento, las referencias comerciales, el flujo de caja y otros indicadores financieros antes de aprobar una venta a crédito.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué indicadores ayudan a medir el riesgo crediticio?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Entre los indicadores más utilizados se encuentran el nivel de endeudamiento, liquidez, DSO, porcentaje de cartera vencida, rotación de cartera, índice de morosidad y comportamiento histórico de pago.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo disminuir el riesgo crediticio empresarial?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Implementando políticas de crédito claras, análisis financieros periódicos, límites de crédito, seguimiento permanente de cartera y procesos preventivos de cobranza.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuál es la diferencia entre riesgo crediticio y riesgo de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "El riesgo crediticio se evalúa antes de otorgar el crédito para estimar la probabilidad de incumplimiento, mientras que el riesgo de cartera analiza el comportamiento de las cuentas por cobrar una vez el crédito ya fue otorgado.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <RiesgoCrediticio />
    </>
  );
}
