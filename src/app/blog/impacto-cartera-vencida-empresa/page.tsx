import { Metadata } from "next";
import ImpactoCarteraVencidaEmpresa from "./ImpactoCarteraVencidaEmpresa";

export const metadata: Metadata = {
  title:
    "Impacto de la cartera vencida en una empresa: cómo afecta la liquidez, el flujo de caja y la rentabilidad",

  description:
    "Descubre cómo la cartera vencida afecta la liquidez, el flujo de caja, la rentabilidad y el crecimiento de una empresa. Aprende cómo reducir sus efectos con una gestión de cobranza eficiente.",

  keywords: [
    "impacto de la cartera vencida",
    "cartera vencida empresa",
    "cómo afecta la cartera vencida",
    "efectos de la cartera vencida",
    "problemas de cartera vencida",
    "liquidez empresarial",
    "flujo de caja",
    "recuperación de cartera",
    "gestión de cartera",
    "gestión de cobranza",
    "morosidad empresas",
    "cuentas por cobrar",
    "cartera morosa",
    "riesgo financiero empresas",
    "cobranza empresarial",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/impacto-cartera-vencida-empresa",
  },

  openGraph: {
    title:
      "Impacto de la cartera vencida: cómo afecta la liquidez, rentabilidad y crecimiento empresarial",

    description:
      "Conoce las consecuencias financieras de una cartera vencida elevada y las mejores estrategias para reducir su impacto en las empresas.",

    url: "https://cobrandoonline.com/blog/impacto-cartera-vencida-empresa",

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
                "Impacto de la cartera vencida en una empresa: cómo afecta la liquidez, el flujo de caja y la rentabilidad",

              alternativeHeadline:
                "Consecuencias de una cartera vencida elevada y cómo reducir sus efectos",

              description:
                "Guía completa sobre el impacto de la cartera vencida en las empresas, sus consecuencias financieras y las estrategias para disminuir el riesgo mediante una adecuada gestión de cobranza.",

              keywords:
                "impacto cartera vencida, liquidez empresarial, flujo de caja, recuperación de cartera, gestión de cobranza",

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
                  "https://cobrandoonline.com/blog/impacto-cartera-vencida-empresa",
              },

              wordCount: 3300,

              articleSection: "Recuperación de Cartera",

              inLanguage: "es",

              datePublished: "2026-06-11",

              dateModified: "2026-07-27",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Cómo afecta la cartera vencida a la liquidez de una empresa?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La cartera vencida reduce el dinero disponible para cubrir gastos operativos, nómina, proveedores e inversiones, afectando directamente la liquidez y el flujo de caja.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué riesgos genera una cartera vencida elevada?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Incrementa el riesgo financiero, reduce la rentabilidad, aumenta los costos de cobranza, obliga a crear provisiones contables y disminuye la capacidad de crecimiento empresarial.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cómo disminuir el impacto de la cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Implementando políticas de crédito, seguimiento permanente, automatización de recordatorios, análisis de indicadores y estrategias de cobranza preventivas, prejurídicas y jurídicas.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cuál es la diferencia entre cartera corriente y cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La cartera corriente corresponde a obligaciones dentro del plazo de pago, mientras que la cartera vencida reúne aquellas facturas cuyo vencimiento ya expiró sin que el cliente haya realizado el pago.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿La cartera vencida afecta la rentabilidad de una empresa?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Una cartera vencida elevada incrementa los costos administrativos y jurídicos de recuperación, disminuye el flujo de caja y limita la capacidad para generar nuevas utilidades.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cuándo debe iniciarse una gestión de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La gestión de cobranza debe comenzar desde la etapa preventiva, antes del vencimiento de la factura, y continuar con acciones oportunas en los primeros días de mora para aumentar las probabilidades de recuperación.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ImpactoCarteraVencidaEmpresa />
    </>
  );
}
