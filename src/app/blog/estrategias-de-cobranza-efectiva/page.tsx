import { Metadata } from "next";
import EstrategiasCobranzaContent from "./EstrategiasCobranzaContent";

export const metadata: Metadata = {
  title: "Estrategias de cobranza efectiva en Colombia para empresas",
  description:
    "Descubre las mejores estrategias de cobranza efectiva en Colombia para reducir la mora, recuperar cartera y mejorar el flujo de caja.",

  keywords: [
    "estrategias de cobranza",
    "cobro de cartera Colombia",
    "recuperación de cartera empresas",
    "cobranza efectiva",
    "cobro prejuridico",
    "cobro juridico",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/estrategias-de-cobranza-efectiva",
  },

  openGraph: {
    title: "Estrategias de cobranza efectiva para empresas",
    description:
      "Aprende cómo mejorar la recuperación de cartera con estrategias de cobranza efectivas.",
    url: "https://cobrandoonline.com/blog/estrategias-de-cobranza-efectiva",
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
      {/* SCHEMA SEO AVANZADO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: "Estrategias de cobranza efectiva para empresas",
              description:
                "Aplicar estrategias de cobranza adecuadas aumenta la recuperación de cartera y reduce la morosidad.",
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
                  "https://cobrandoonline.com/blog/estrategias-de-cobranza-efectiva",
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
                  name: "¿Por qué es importante una estrategia de cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Permite reducir la mora, mejorar la liquidez y aumentar la recuperación de cartera.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo iniciar cobro jurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cuando el deudor no responde en la etapa prejurídica o incumple acuerdos.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <EstrategiasCobranzaContent />
    </>
  );
}
