import { Metadata } from "next";
import QueEsLaRecuperacionDeCarteraContent from "./QueEsLaRecuperacionDeCarteraContent";

export const metadata: Metadata = {
  title:
    "¿Qué es la recuperación de cartera? Guía completa para empresas en Colombia (2026)",

  description:
    "Descubre qué es la recuperación de cartera, cómo funciona, sus etapas, beneficios, indicadores y estrategias para reducir la morosidad y mejorar el flujo de caja de tu empresa.",

  keywords: [
    "qué es recuperación de cartera",
    "recuperación de cartera",
    "recuperación de cartera Colombia",
    "gestión de cobranza",
    "gestión de cartera",
    "cobranza empresarial",
    "recuperar cartera vencida",
    "estrategias de recuperación de cartera",
    "proceso de recuperación de cartera",
    "recuperación de cuentas por cobrar",
    "reducción de morosidad",
    "cartera empresarial",
    "flujo de caja empresas",
    "servicio de recuperación de cartera",
    "outsourcing de cobranza",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/que-es-la-recuperacion-de-cartera",
  },

  openGraph: {
    title:
      "¿Qué es la recuperación de cartera? Cómo recuperar cuentas por cobrar de forma efectiva",

    description:
      "Aprende cómo funciona la recuperación de cartera, cuáles son sus etapas y qué estrategias permiten aumentar el recaudo sin deteriorar la relación con los clientes.",

    url: "https://cobrandoonline.com/blog/que-es-la-recuperacion-de-cartera",

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
                "¿Qué es la recuperación de cartera? Guía completa para empresas",

              description:
                "Conoce cómo funciona la recuperación de cartera, las etapas del proceso de cobranza, sus beneficios y las mejores estrategias para disminuir la morosidad empresarial.",

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
                  "https://cobrandoonline.com/blog/que-es-la-recuperacion-de-cartera",
              },

              datePublished: "2025-01-01",

              dateModified: "2026-07-29",

              inLanguage: "es",
            },

            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué es la recuperación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es el conjunto de estrategias preventivas, administrativas, prejurídicas y de negociación que permiten recuperar cuentas por cobrar y disminuir la cartera vencida de una empresa.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué es importante recuperar la cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Porque mejora el flujo de caja, reduce la morosidad, disminuye el riesgo financiero y permite que la empresa tenga mayor liquidez para operar e invertir.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuál es la diferencia entre recuperación de cartera y cobro jurídico?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La recuperación de cartera incluye todas las etapas de gestión de cobro, mientras que el cobro jurídico únicamente corresponde a la fase judicial cuando las gestiones anteriores no generan resultados.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo iniciar un proceso de recuperación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Lo recomendable es iniciar acciones preventivas desde antes del vencimiento de la factura y fortalecer la gestión durante los primeros días de mora para aumentar la probabilidad de recuperación.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué empresas necesitan recuperación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Cualquier empresa que otorgue crédito a clientes, venda a plazo o administre cuentas por cobrar puede beneficiarse de una estrategia profesional de recuperación de cartera.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <QueEsLaRecuperacionDeCarteraContent />
    </>
  );
}
