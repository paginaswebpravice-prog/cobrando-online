import { Metadata } from "next";
import PlanCobranzaEmpresas from "./PlanCobranzaEmpresas";

export const metadata: Metadata = {
  title: "Plan de cobranza mensual: cómo estructurar una estrategia efectiva",

  description:
    "Aprende cómo crear un plan de cobranza mensual para reducir la morosidad, mejorar el flujo de caja y aumentar la recuperación de cartera.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/plan-cobranza-empresas",
  },

  openGraph: {
    title: "Plan de cobranza mensual para empresas",
    description:
      "Guía práctica para estructurar un plan de cobranza eficiente y mejorar la recuperación de cartera empresarial.",
    url: "https://cobrandoonline.com/blog/plan-cobranza-empresas",
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
                "Plan de cobranza mensual: cómo estructurarlo correctamente",
              description:
                "Guía para diseñar un plan de cobranza mensual eficiente que permita mejorar la recuperación de cartera.",
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
                "@id": "https://cobrandoonline.com/blog/plan-cobranza-empresas",
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
                  name: "¿Qué es un plan de cobranza mensual?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es una estrategia organizada que define las actividades de recuperación de cartera que una empresa realizará durante cada mes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué indicadores debe incluir un plan de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Indicadores como porcentaje de recuperación, días promedio de recaudo, cartera vencida y valor recuperado mensualmente.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es importante un plan de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque ayuda a reducir la morosidad, mejorar el flujo de caja y aumentar la recuperación de cartera de manera constante.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <PlanCobranzaEmpresas />
    </>
  );
}
