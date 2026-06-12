import { Metadata } from "next";
import RiesgoCartera from "./RiesgoCartera";

export const metadata: Metadata = {
  title: "Riesgo de cartera: cómo evaluar el riesgo financiero de los clientes",
  description:
    "Aprende qué es el riesgo de cartera, cómo medirlo y qué estrategias implementar para reducir pérdidas por cartera vencida.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/riesgo-cartera",
  },

  openGraph: {
    title: "Riesgo de cartera: evaluación y control del riesgo financiero",
    description:
      "Guía completa para identificar, medir y reducir el riesgo asociado a las cuentas por cobrar.",
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
                "Riesgo de cartera: cómo evaluar el riesgo financiero de los clientes",
              description:
                "Guía para entender el riesgo de cartera y proteger la liquidez empresarial.",
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
              ],
            },
          ]),
        }}
      />

      <RiesgoCartera />
    </>
  );
}
