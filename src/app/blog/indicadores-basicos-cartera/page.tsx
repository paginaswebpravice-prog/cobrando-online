import { Metadata } from "next";
import IndicadoresBasicosCartera from "./IndicadoresBasicosCartera";

export const metadata: Metadata = {
  title: "Indicadores básicos de cartera que debes conocer | Cobrando Online",

  description:
    "Conoce los principales indicadores de cartera, cómo medir la eficiencia de la cobranza y mejorar la recuperación de cuentas por cobrar.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/indicadores-basicos-cartera",
  },

  openGraph: {
    title: "Indicadores básicos de cartera para empresas",
    description:
      "Aprende cuáles son los principales indicadores de cartera y cómo utilizarlos para mejorar la gestión financiera.",
    url: "https://cobrandoonline.com/blog/indicadores-basicos-cartera",
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
              headline: "Indicadores básicos de cartera que debes conocer",
              description:
                "Guía completa sobre los indicadores más utilizados para medir la gestión de cartera y cobranza.",
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
                  "https://cobrandoonline.com/blog/indicadores-basicos-cartera",
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
                  name: "¿Qué son los indicadores de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Son métricas que permiten medir el comportamiento de las cuentas por cobrar y evaluar la eficiencia de la gestión de cobranza.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuál es el indicador más utilizado?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Uno de los más utilizados es el índice de cartera vencida, que muestra qué porcentaje de la cartera total se encuentra en mora.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es importante medir la cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque ayuda a identificar riesgos financieros, mejorar la liquidez y optimizar los procesos de recuperación de cartera.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <IndicadoresBasicosCartera />
    </>
  );
}
