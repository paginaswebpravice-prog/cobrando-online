import { Metadata } from "next";
import KpiCobranza from "./KpiCobranza";

export const metadata: Metadata = {
  title: "KPIs de cobranza: indicadores para medir la recuperación de cartera",
  description:
    "Conoce los principales KPIs de cobranza, cómo medirlos y cómo utilizarlos para mejorar la recuperación de cartera empresarial.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/kpi-cobranza",
  },

  openGraph: {
    title: "KPIs de cobranza: métricas clave para la gestión de cartera",
    description:
      "Aprende cuáles son los indicadores más importantes para medir la efectividad de la cobranza y reducir la morosidad.",
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
                "KPIs de cobranza: indicadores clave para medir la recuperación de cartera",
              description:
                "Guía sobre los principales indicadores utilizados para evaluar la gestión de cobranza.",
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
                  name: "¿Qué es un KPI de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es un indicador que permite medir la efectividad de la gestión de recuperación de cartera.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuál es el KPI más utilizado en cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Uno de los más utilizados es el DSO, que mide el tiempo promedio de recuperación de las ventas a crédito.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué son importantes los KPIs de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque permiten monitorear resultados, detectar problemas y optimizar la recuperación de cartera.",
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
