import { Metadata } from "next";
import CobranzaPorEtapas from "./CobranzaPorEtapas";

export const metadata: Metadata = {
  title:
    "Estrategia de cobranza por etapas | Modelo de recuperación de cartera",
  description:
    "Aprende cómo implementar una estrategia de cobranza por etapas según los niveles de mora para mejorar la recuperación de cartera.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cobranza-por-etapas",
  },

  openGraph: {
    title: "Estrategia de cobranza por etapas para recuperar cartera vencida",
    description:
      "Descubre cómo estructurar un proceso de cobranza por etapas y aumentar la efectividad de recuperación.",
    url: "https://cobrandoonline.com/blog/cobranza-por-etapas",
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
              headline: "Estrategia de cobranza por etapas",
              description:
                "Modelo estructurado para gestionar la cobranza según niveles de mora y mejorar la recuperación de cartera.",
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
                "@id": "https://cobrandoonline.com/blog/cobranza-por-etapas",
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
                  name: "¿Qué es una estrategia de cobranza por etapas?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es un modelo que divide la gestión de cobro según el tiempo de mora para aplicar acciones específicas en cada fase.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuáles son las etapas de la cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Generalmente incluyen cobranza preventiva, mora temprana, mora intermedia, mora avanzada y cobro jurídico.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es importante segmentar la cartera por mora?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque permite aplicar estrategias más efectivas y mejorar las probabilidades de recuperación.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CobranzaPorEtapas />
    </>
  );
}
