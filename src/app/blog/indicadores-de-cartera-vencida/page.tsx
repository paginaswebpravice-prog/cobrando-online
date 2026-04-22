import { Metadata } from "next";
import IndicadoresCarteraContent from "./IndicadoresCarteraContent";

export const metadata: Metadata = {
  title:
    "Indicadores de cartera vencida en Colombia: cómo medir y reducir la mora",
  description:
    "Aprende cuáles son los principales indicadores de cartera vencida en Colombia y cómo medir la mora, el riesgo y el recaudo.",

  keywords: [
    "indicadores de cartera vencida",
    "mora cartera Colombia",
    "rotación de cartera",
    "índice de recaudo",
    "gestión de cobranza indicadores",
    "riesgo financiero cartera",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/indicadores-de-cartera-vencida",
  },

  openGraph: {
    title: "Indicadores de cartera vencida: mide la mora y mejora tu recaudo",
    description:
      "Conoce las métricas clave para controlar la cartera, reducir el riesgo y mejorar la cobranza en tu empresa.",
    url: "https://cobrandoonline.com/blog/indicadores-de-cartera-vencida",
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
      {/* SCHEMA SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline:
                "Indicadores de cartera vencida en Colombia: cómo medir y reducir la mora",
              description:
                "Conoce los indicadores clave para medir la mora, el riesgo financiero y mejorar la recuperación de cartera.",
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
                  "https://cobrandoonline.com/blog/indicadores-de-cartera-vencida",
              },
              datePublished: "2025-01-01",
              dateModified: "2026-01-01",
              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es el índice de cartera vencida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es el porcentaje de la cartera total que se encuentra en mora.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué medir la rotación de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque permite conocer cuánto tiempo tardan los clientes en pagar y evaluar el flujo de caja.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <IndicadoresCarteraContent />
    </>
  );
}
