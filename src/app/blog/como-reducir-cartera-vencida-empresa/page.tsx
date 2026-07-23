import { Metadata } from "next";
import ReducirCarteraVencidaEmpresa from "./ReducirCarteraVencidaEmpresa";

export const metadata: Metadata = {
  title:
    "Cómo reducir la cartera vencida en una empresa en Colombia: 12 estrategias para mejorar el flujo de caja (Guía 2026)",

  description:
    "Descubre cómo reducir la cartera vencida en tu empresa mediante estrategias de cobranza preventiva, seguimiento de clientes, indicadores financieros y procesos de recuperación que fortalecen el flujo de caja en Colombia.",

  keywords: [
    "cómo reducir cartera vencida",
    "reducir cartera vencida empresa",
    "disminuir cartera morosa",
    "gestión de cartera empresarial",
    "seguimiento de cartera",
    "cómo mejorar flujo de caja",
    "recuperación de cartera",
    "estrategias de cobranza",
    "indicadores de cartera",
    "cartera vencida empresas Colombia",
    "cuentas por cobrar",
    "mora empresarial",
    "cobranza preventiva",
    "software de cartera",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/como-reducir-cartera-vencida-empresa",
  },

  openGraph: {
    title:
      "Cómo reducir la cartera vencida en una empresa | Estrategias para mejorar el recaudo y el flujo de caja",

    description:
      "Aprende cómo disminuir la cartera vencida con políticas de crédito, seguimiento de clientes, indicadores financieros y procesos de cobranza más eficientes.",

    url: "https://cobrandoonline.com/blog/como-reducir-cartera-vencida-empresa",

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
                "Cómo reducir la cartera vencida en una empresa en Colombia: estrategias para mejorar el flujo de caja",

              description:
                "Guía completa para disminuir la cartera vencida mediante estrategias preventivas, seguimiento de clientes, indicadores de cartera y recuperación eficiente.",

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
                  "https://cobrandoonline.com/blog/como-reducir-cartera-vencida-empresa",
              },

              datePublished: "2025-01-01",

              dateModified: "2026-07-22",

              inLanguage: "es",

              keywords: [
                "cartera vencida",
                "reducir cartera vencida",
                "gestión de cartera",
                "flujo de caja",
                "cobranza empresarial",
                "seguimiento de cartera",
                "indicadores financieros",
              ],
            },

            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Cómo reducir la cartera vencida en una empresa?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Reducir la cartera vencida requiere combinar políticas de crédito, seguimiento oportuno, automatización de recordatorios, negociación de acuerdos de pago y una estrategia de recuperación estructurada.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué causa el aumento de la cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Las causas más frecuentes son la falta de seguimiento, procesos manuales de cobranza, políticas débiles de crédito, demoras en iniciar el cobro y ausencia de indicadores financieros.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo mejorar el flujo de caja mediante la recuperación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Reduciendo los tiempos de recaudo, clasificando la cartera por antigüedad, automatizando recordatorios y realizando seguimiento permanente a los clientes.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué indicadores ayudan a controlar la cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Indicadores como porcentaje de cartera vencida, días promedio de recaudo (DSO), índice de recuperación y antigüedad de cartera permiten evaluar la efectividad de la gestión.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo iniciar un proceso prejurídico?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Cuando las gestiones iniciales de cobranza no generan resultados y el cliente presenta incumplimientos reiterados en sus obligaciones.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo evitar que aumente nuevamente la cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Implementando políticas claras de crédito, monitoreo permanente, segmentación de clientes según riesgo y procesos preventivos de cobranza desde antes del vencimiento.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ReducirCarteraVencidaEmpresa />
    </>
  );
}
