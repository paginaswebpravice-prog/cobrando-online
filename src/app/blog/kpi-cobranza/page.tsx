import { Metadata } from "next";
import KpiCobranza from "./KpiCobranza";

export const metadata: Metadata = {
  title:
    "KPIs de cobranza: 7 indicadores para mejorar la recuperación de cartera",

  description:
    "Conoce los principales KPIs de cobranza empresarial, cómo calcularlos y cómo usar indicadores como DSO, mora y recuperación para mejorar el recaudo.",

  keywords: [
    "KPIs de cobranza",
    "indicadores de cobranza",
    "métricas de recuperación de cartera",
    "indicadores de gestión de cartera",
    "DSO cobranza",
    "índice de recuperación de cartera",
    "control de cartera empresarial",
    "medir gestión de cobranza",
    "cartera vencida indicadores",
    "eficiencia del proceso de cobranza",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/kpi-cobranza",
  },

  openGraph: {
    title:
      "KPIs de cobranza: indicadores clave para controlar y recuperar cartera",

    description:
      "Aprende qué métricas debe medir una empresa para evaluar su proceso de cobranza y mejorar la recuperación de cuentas por cobrar.",

    url: "https://cobrandoonline.com/blog/kpi-cobranza",

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
                "KPIs de cobranza: 7 indicadores para mejorar la recuperación de cartera",

              description:
                "Guía práctica sobre los indicadores clave que permiten medir, analizar y optimizar la gestión de cobranza empresarial.",

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
                "@id": "https://cobrandoonline.com/blog/kpi-cobranza",
              },

              keywords:
                "KPIs de cobranza, indicadores de cartera, DSO, recuperación de cartera, métricas de cobranza",

              articleSection: "Gestión empresarial de cartera",

              datePublished: "2026-01-01",

              dateModified: "2026-07-21",

              inLanguage: "es-CO",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué son los KPIs de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Los KPIs de cobranza son indicadores que permiten medir el desempeño de un proceso de recuperación de cartera, analizar resultados y tomar decisiones basadas en datos.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cuáles son los indicadores más importantes en cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Entre los principales indicadores están el DSO, porcentaje de cartera vencida, índice de recuperación, rotación de cartera y cumplimiento de acuerdos de pago.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cómo ayudan los KPIs a mejorar la recuperación de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Permiten identificar problemas en el proceso de cobro, medir la productividad del equipo y ajustar estrategias para aumentar la recuperación.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué significa DSO en cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El DSO (Days Sales Outstanding) es un indicador que mide el número promedio de días que tarda una empresa en recuperar sus ventas realizadas a crédito.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <KpiCobranza />
    </>
  );
}
