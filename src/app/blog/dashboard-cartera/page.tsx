import { Metadata } from "next";
import DashboardCartera from "./DashboardCartera";

export const metadata: Metadata = {
  title: "Dashboard de cartera: KPIs e indicadores para controlar la cobranza",
  description:
    "Aprende cómo construir un dashboard de cartera con KPIs financieros e indicadores clave para mejorar la recuperación de cartera.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/dashboard-cartera",
  },

  openGraph: {
    title:
      "Dashboard de cartera: visualización y control de la gestión de cobranza",
    description:
      "Guía para diseñar dashboards de cartera con indicadores financieros y métricas de recuperación.",
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
                "Dashboard de cartera: cómo visualizar y controlar la gestión de cobranza",
              description:
                "Guía para crear dashboards financieros orientados al control y recuperación de cartera.",
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
              dateModified: "2026-01-01",
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
                    text: "Es un panel visual que reúne indicadores e información sobre cuentas por cobrar para facilitar el análisis y la toma de decisiones.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué KPIs debe incluir un dashboard de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Debe incluir indicadores como cartera vencida, DSO, rotación de cartera, porcentaje de recuperación e índice de morosidad.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es importante monitorear la cartera con dashboards?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque permite identificar riesgos, mejorar la gestión de cobranza y tomar decisiones basadas en datos actualizados.",
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
