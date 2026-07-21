import { Metadata } from "next";
import CarteraFinanciero from "./CarteraFinanciero";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera en el sector financiero: estrategias para reducir la morosidad y mejorar el recaudo | Guía 2026",

  description:
    "Descubre cómo bancos, cooperativas, fintech y entidades financieras optimizan la recuperación de cartera mediante cobranza preventiva, automatización, análisis de riesgo y estrategias para reducir la morosidad.",

  keywords: [
    "recuperación de cartera sector financiero",
    "cartera financiera",
    "cobranza entidades financieras",
    "gestión de cartera financiera",
    "morosidad financiera",
    "recuperación de créditos",
    "administración de cartera",
    "software de cobranza",
    "automatización de cobranza",
    "cobranza preventiva",
    "recuperación de cartera Colombia",
    "gestión de créditos",
    "seguimiento de cartera",
    "fintech cartera",
    "cartera bancos",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cartera-financiero",
  },

  openGraph: {
    title:
      "Recuperación de cartera en entidades financieras: cómo reducir la morosidad y mejorar el recaudo",

    description:
      "Guía completa sobre administración de cartera financiera, análisis de riesgo, automatización de cobranza e indicadores para optimizar el recaudo.",

    url: "https://cobrandoonline.com/blog/cartera-financiero",

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
                "Recuperación de cartera en el sector financiero: estrategias para reducir la morosidad y optimizar el recaudo",

              description:
                "Guía completa sobre administración de cartera financiera, recuperación de créditos, análisis de riesgo, automatización de cobranza e indicadores financieros.",

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
                "@id": "https://cobrandoonline.com/blog/cartera-financiero",
              },

              datePublished: "2026-01-01",

              dateModified: "2026-07-21",

              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es la cartera en el sector financiero?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es el conjunto de créditos, préstamos y obligaciones que personas o empresas mantienen con bancos, cooperativas, fintech y demás entidades financieras.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo reducir la morosidad en una entidad financiera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La reducción de la morosidad requiere análisis de riesgo, cobranza preventiva, automatización de procesos, seguimiento permanente y acuerdos de pago oportunos.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué indicadores permiten medir la recuperación de cartera financiera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Los principales indicadores son porcentaje de recuperación, antigüedad de cartera, DSO, índice de mora, cumplimiento de acuerdos de pago y productividad del equipo de cobranza.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué es importante automatizar la cobranza financiera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La automatización reduce tareas manuales, mejora el seguimiento de clientes, optimiza la comunicación y aumenta la eficiencia del proceso de recuperación de cartera.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué beneficios obtiene una entidad financiera con una buena gestión de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Una gestión eficiente mejora el flujo de caja, reduce la morosidad, disminuye pérdidas por incumplimiento y fortalece la rentabilidad de la organización.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CarteraFinanciero />
    </>
  );
}
