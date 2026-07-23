import { Metadata } from "next";
import DashboardCartera from "./DashboardCartera";

export const metadata: Metadata = {
  title:
    "Dashboard de cartera: KPIs, indicadores y métricas para mejorar la recuperación de cartera en Colombia (Guía 2026)",

  description:
    "Aprende cómo crear un dashboard de cartera con los principales KPIs de cobranza, indicadores financieros, métricas de recuperación y reportes para controlar las cuentas por cobrar y reducir la morosidad.",

  keywords: [
    "dashboard de cartera",
    "dashboard cobranza",
    "dashboard cuentas por cobrar",
    "dashboard financiero cartera",
    "indicadores cartera",
    "kpis cartera",
    "kpis cobranza",
    "metricas de cobranza",
    "control cartera",
    "tablero de cartera",
    "power bi cartera",
    "dashboard power bi cartera",
    "reportes cartera",
    "analisis cartera",
    "gestion de cartera",
    "software cartera",
    "indicadores financieros cartera",
    "dashboard cuentas por cobrar colombia",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/dashboard-cartera",
  },

  openGraph: {
    title:
      "Dashboard de cartera: los KPIs e indicadores que toda empresa debería controlar",

    description:
      "Descubre cómo construir un dashboard de cartera para monitorear la morosidad, los días de cobro, la recuperación y el desempeño de la gestión de cobranza.",

    url: "https://cobrandoonline.com/blog/dashboard-cartera",

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
                "Dashboard de cartera: cómo crear un tablero con KPIs para controlar la cobranza",

              description:
                "Guía completa para diseñar dashboards de cartera con indicadores financieros, métricas de recuperación y análisis de cuentas por cobrar.",

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
                "@id": "https://cobrandoonline.com/blog/dashboard-cartera",
              },

              datePublished: "2026-01-01",

              dateModified: "2026-07-23",

              inLanguage: "es",
            },

            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué es un dashboard de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es un panel que reúne los principales indicadores de cuentas por cobrar para monitorear la recuperación de cartera, identificar riesgos y facilitar la toma de decisiones.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué indicadores debe incluir un dashboard de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Debe incluir indicadores como cartera vencida, DSO, porcentaje de recuperación, índice de morosidad, rotación de cartera, cumplimiento de acuerdos y productividad de los gestores.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué beneficios ofrece un dashboard para cuentas por cobrar?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Permite visualizar la información en tiempo real, detectar clientes críticos, medir el desempeño del equipo de cobranza y mejorar la recuperación de cartera.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Power BI sirve para crear dashboards de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. Power BI es una de las herramientas más utilizadas para crear dashboards financieros con indicadores dinámicos y reportes interactivos de cuentas por cobrar.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cada cuánto debe actualizarse un dashboard de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Lo recomendable es actualizarlo diariamente o en tiempo real cuando exista integración con el ERP, CRM o software de cartera.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué empresas necesitan un dashboard de cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Cualquier empresa que otorgue crédito o facture a plazo puede beneficiarse de un dashboard para controlar la morosidad y optimizar la recuperación de cartera.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <DashboardCartera />
    </>
  );
}
