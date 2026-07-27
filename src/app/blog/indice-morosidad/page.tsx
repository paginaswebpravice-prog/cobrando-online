import { Metadata } from "next";
import IndiceMorosidad from "./IndiceMorosidad";

export const metadata: Metadata = {
  title:
    "Índice de morosidad: qué es, cómo calcularlo y cómo reducir la cartera vencida en tu empresa (Guía 2026)",

  description:
    "Aprende qué es el índice de morosidad, cómo calcularlo paso a paso, qué porcentaje se considera alto y cómo reducir la cartera vencida para mejorar el flujo de caja de tu empresa.",

  keywords: [
    "índice de morosidad",
    "qué es índice de morosidad",
    "cómo calcular índice de morosidad",
    "fórmula índice de morosidad",
    "cartera vencida",
    "indicadores de cartera",
    "indicadores financieros cartera",
    "gestión de cobranza",
    "recuperación de cartera",
    "disminuir cartera vencida",
    "mora empresarial",
    "empresas colombia",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/indice-morosidad",
  },

  openGraph: {
    title: "Índice de morosidad: cómo calcularlo y reducir la cartera vencida",

    description:
      "Descubre cómo interpretar el índice de morosidad, qué porcentaje representa un riesgo para tu empresa y qué acciones ayudan a disminuir la cartera vencida.",

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

              headline:
                "Índice de morosidad: qué es, cómo calcularlo y cómo reducir la cartera vencida",

              alternativeHeadline:
                "Guía completa para calcular el índice de morosidad empresarial",

              description:
                "Aprende qué significa el índice de morosidad, cómo calcularlo correctamente, cómo interpretarlo y qué estrategias ayudan a disminuir la cartera vencida.",

              keywords:
                "índice de morosidad, cartera vencida, indicadores de cartera, recuperación de cartera, cobranza empresarial",

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

              dateModified: "2026-07-27",

              inLanguage: "es",

              articleSection: "Gestión de cartera",

              wordCount: "3200",
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
                    text: "Es un indicador financiero que muestra qué porcentaje de la cartera total se encuentra vencido y pendiente de pago. Permite medir el riesgo de incumplimiento y evaluar la eficiencia de la gestión de cobranza.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cómo se calcula el índice de morosidad?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Se obtiene dividiendo el valor de la cartera vencida entre la cartera total y multiplicando el resultado por cien para obtener un porcentaje.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cuál es un buen índice de morosidad?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No existe un porcentaje único para todas las empresas, ya que depende del sector económico. Sin embargo, mientras menor sea el índice, menor será el riesgo financiero asociado a las cuentas por cobrar.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué factores aumentan el índice de morosidad?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Las principales causas son una evaluación deficiente del cliente, políticas de crédito poco claras, seguimiento insuficiente a las facturas, errores de facturación y procesos de cobranza tardíos.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cómo reducir el índice de morosidad?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La mejor estrategia consiste en evaluar el riesgo antes de otorgar crédito, realizar seguimiento preventivo, automatizar recordatorios de pago, negociar oportunamente con los clientes y monitorear permanentemente los indicadores de cartera.",
                  },
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",

              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Inicio",
                  item: "https://cobrandoonline.com",
                },

                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: "https://cobrandoonline.com/blog",
                },

                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Índice de morosidad",
                  item: "https://cobrandoonline.com/blog/indice-morosidad",
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
