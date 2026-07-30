import { Metadata } from "next";
import ReportesCartera from "./ReportesCartera";

export const metadata: Metadata = {
  title:
    "Reportes de cartera: cómo elaborar informes efectivos para controlar la cartera vencida y mejorar el recaudo",

  description:
    "Aprende cómo elaborar reportes de cartera, informes de cuentas por cobrar e indicadores financieros para reducir la morosidad, priorizar la cobranza y mejorar el flujo de caja de tu empresa en Colombia.",

  keywords: [
    "reportes de cartera",
    "reporte de cartera vencida",
    "informe de cartera",
    "reporte cuentas por cobrar",
    "dashboard cartera",
    "indicadores de cartera",
    "KPIs de cartera",
    "antigüedad de cartera",
    "control de cartera",
    "análisis cartera vencida",
    "software cartera",
    "seguimiento cartera",
    "gestión cartera empresas",
    "recuperación cartera colombia",
    "cobranzas empresas",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/reportes-cartera",
  },

  openGraph: {
    title:
      "Reportes de cartera: guía para elaborar informes que mejoran la recuperación de cartera",

    description:
      "Descubre cómo crear reportes de cartera, indicadores de cobranza y análisis de cuentas por cobrar para tomar mejores decisiones financieras y reducir la morosidad.",

    url: "https://cobrandoonline.com/blog/reportes-cartera",
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
                "Reportes de cartera: cómo elaborar informes efectivos para controlar cuentas por cobrar y reducir la morosidad",

              description:
                "Guía completa sobre reportes de cartera, indicadores financieros, antigüedad de cartera, cuentas por cobrar y reportes de cobranza para empresas en Colombia.",

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
                "@id": "https://cobrandoonline.com/blog/reportes-cartera",
              },

              datePublished: "2026-01-01",
              dateModified: "2026-07-30",
              inLanguage: "es",
            },

            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué es un reporte de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es un informe que reúne la información de las cuentas por cobrar de una empresa, incluyendo saldos pendientes, días de mora, antigüedad de la cartera, estado de la gestión de cobranza e indicadores financieros para facilitar la toma de decisiones.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué información debe incluir un reporte de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Debe contener datos del cliente, valor adeudado, fecha de vencimiento, días de mora, clasificación por antigüedad, estado de la cobranza, acuerdos de pago, responsable de la gestión e indicadores de recuperación.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cada cuánto tiempo debe actualizarse un reporte de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Depende del volumen de operaciones, aunque muchas empresas actualizan sus reportes diariamente o semanalmente para identificar riesgos de mora y tomar decisiones oportunas.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué indicadores ayudan a evaluar una cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Algunos de los principales indicadores son la antigüedad de cartera, porcentaje de recuperación, índice de morosidad, cartera corriente, cartera vencida, rotación de cartera y días promedio de recaudo.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué los reportes de cartera ayudan a mejorar la recuperación de cuentas por cobrar?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Porque permiten identificar clientes críticos, priorizar gestiones de cobranza, controlar el comportamiento de pago y tomar decisiones basadas en información actualizada.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ReportesCartera />
    </>
  );
}
