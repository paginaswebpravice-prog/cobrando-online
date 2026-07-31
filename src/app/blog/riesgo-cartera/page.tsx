import { Metadata } from "next";
import RiesgoCartera from "./RiesgoCartera";

export const metadata: Metadata = {
  title:
    "Riesgo de cartera: cómo identificar, medir y reducir el riesgo de crédito en empresas | Guía 2026",

  description:
    "Aprende qué es el riesgo de cartera, cómo evaluar el riesgo de crédito de tus clientes, qué indicadores utilizar y cómo reducir la cartera vencida antes de afectar el flujo de caja.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/riesgo-cartera",
  },

  openGraph: {
    title:
      "Riesgo de cartera: cómo evaluar el riesgo de crédito y reducir la morosidad",

    description:
      "Guía completa para identificar clientes de alto riesgo, medir la cartera vencida y proteger la liquidez empresarial.",

    url: "https://cobrandoonline.com/blog/riesgo-cartera",

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
                "Riesgo de cartera: cómo identificar, medir y disminuir el riesgo de crédito en las empresas colombianas",
              description:
                "Guía completa para evaluar el riesgo de cartera, prevenir la morosidad y mejorar la recuperación de cuentas por cobrar.",
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
                "@id": "https://cobrandoonline.com/blog/riesgo-cartera",
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
                  name: "¿Qué es el riesgo de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es la probabilidad de que una empresa no logre recuperar total o parcialmente las cuentas por cobrar de sus clientes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo se mide el riesgo de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Se puede medir mediante indicadores como porcentaje de cartera vencida, antigüedad de cartera, DSO y nivel de morosidad.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo reducir el riesgo de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Implementando análisis crediticios, monitoreo constante, políticas de crédito claras y procesos efectivos de cobranza.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué empresas deben medir el riesgo de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Toda empresa que venda a crédito debería medir periódicamente el riesgo de cartera para prevenir pérdidas y mejorar la recuperación de cuentas por cobrar.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuál es el principal indicador del riesgo de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Los indicadores más utilizados son el porcentaje de cartera vencida, la antigüedad de cartera, el índice de morosidad y el DSO.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo identificar clientes con alto riesgo de incumplimiento?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Analizando su comportamiento de pago, capacidad financiera, historial crediticio, nivel de endeudamiento y frecuencia de retrasos.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <RiesgoCartera />
    </>
  );
}
