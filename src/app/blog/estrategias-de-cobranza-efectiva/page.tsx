import { Metadata } from "next";
import EstrategiasCobranzaContent from "./EstrategiasCobranzaContent";

export const metadata: Metadata = {
  title:
    "10 estrategias de cobranza efectiva para recuperar cartera y reducir la mora en Colombia (Guía 2026)",

  description:
    "Descubre las estrategias de cobranza más efectivas para empresas en Colombia. Aprende cómo reducir la cartera vencida, mejorar el recaudo y aumentar el flujo de caja mediante una gestión profesional.",

  keywords: [
    "estrategias de cobranza",
    "cobranza efectiva",
    "gestión de cobranza",
    "recuperación de cartera",
    "recuperar cartera",
    "cartera vencida",
    "disminuir cartera vencida",
    "seguimiento de cartera",
    "cobranza preventiva",
    "cobranza administrativa",
    "cobro prejurídico",
    "cobro jurídico",
    "flujo de caja empresas",
    "software de cobranza",
    "gestión de cuentas por cobrar",
    "proceso de cobranza",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/estrategias-de-cobranza-efectiva",
  },

  openGraph: {
    title:
      "10 estrategias de cobranza efectiva para recuperar cartera más rápido",

    description:
      "Conoce las mejores estrategias de cobranza utilizadas por empresas para reducir la mora, mejorar la recuperación de cartera y fortalecer el flujo de caja.",

    url: "https://cobrandoonline.com/blog/estrategias-de-cobranza-efectiva",

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
      {/* SCHEMA SEO AVANZADO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",

              "@type": "BlogPosting",

              headline:
                "10 estrategias de cobranza efectiva para recuperar cartera y reducir la mora en Colombia",

              alternativeHeadline:
                "Cómo implementar una estrategia de cobranza efectiva en empresas colombianas",

              description:
                "Guía completa sobre estrategias de cobranza preventiva, administrativa, prejurídica y jurídica para mejorar la recuperación de cartera en empresas colombianas.",

              keywords: [
                "estrategias de cobranza",
                "cobranza efectiva",
                "recuperación de cartera",
                "cartera vencida",
                "gestión de cobranza",
                "seguimiento de cartera",
                "cobranza administrativa",
                "cobro prejurídico",
              ],

              articleSection: "Gestión de Cartera",

              wordCount: "4200",

              inLanguage: "es",

              datePublished: "2025-01-01",

              dateModified: "2026-07-24",

              mainEntityOfPage: {
                "@type": "WebPage",
                "@id":
                  "https://cobrandoonline.com/blog/estrategias-de-cobranza-efectiva",
              },

              author: {
                "@type": "Organization",
                name: "Cobrando Online",
              },

              publisher: {
                "@type": "Organization",
                name: "Cobrando Online",
              },

              about: {
                "@type": "Thing",
                name: "Estrategias de cobranza",
              },
            },
            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es una estrategia de cobranza efectiva?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es un conjunto de políticas, procesos y acciones diseñadas para recuperar oportunamente las cuentas por cobrar, reducir la morosidad y mejorar el flujo de caja de una empresa.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cuál es la mejor estrategia para recuperar cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La estrategia más efectiva combina seguimiento oportuno, segmentación de clientes, acuerdos de pago, automatización de recordatorios y escalamiento a etapas prejurídicas o jurídicas cuando sea necesario.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cuándo debe iniciarse la gestión de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La gestión de cobranza debe comenzar antes del vencimiento mediante recordatorios preventivos y continuar inmediatamente después del incumplimiento para aumentar la probabilidad de recuperación.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cómo reducir la cartera vencida en una empresa?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Definiendo políticas claras de crédito, realizando seguimiento constante, automatizando procesos y aplicando estrategias diferenciadas según el nivel de riesgo del cliente.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué indicadores permiten medir la efectividad de la cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Los indicadores más utilizados son el porcentaje de recuperación, días promedio de mora, rotación de cartera, acuerdos cumplidos y valor recuperado mensualmente.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cuándo pasar de la cobranza administrativa al cobro prejurídico?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Cuando el cliente incumple reiteradamente los compromisos adquiridos o deja de responder a las gestiones administrativas realizadas por la empresa.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué beneficios tiene utilizar un software de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Permite automatizar recordatorios, organizar la cartera, generar indicadores, optimizar el seguimiento y aumentar la productividad del equipo encargado de la recuperación.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cómo recuperar cartera sin afectar la relación con el cliente?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Manteniendo una comunicación profesional, ofreciendo acuerdos de pago realistas, realizando seguimiento oportuno y utilizando procesos de negociación estructurados.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <EstrategiasCobranzaContent />
    </>
  );
}
