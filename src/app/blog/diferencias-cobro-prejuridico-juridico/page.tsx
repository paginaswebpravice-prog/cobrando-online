import { Metadata } from "next";
import DiferenciasCobroPrejuridicoJuridicoContent from "./DiferenciasCobroPrejuridicoJuridicoContent";

export const metadata: Metadata = {
  title:
    "Cobro prejurídico vs cobro jurídico en Colombia: diferencias clave y cuándo usar cada uno",
  description:
    "Conoce las diferencias entre cobro prejurídico y cobro jurídico en Colombia, cuándo aplicar cada uno y cómo mejorar la recuperación de cartera.",

  keywords: [
    "cobro prejuridico",
    "cobro juridico Colombia",
    "diferencias cobro prejuridico y juridico",
    "recuperacion de cartera",
    "cobranza empresas Colombia",
    "proceso ejecutivo Colombia",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/diferencias-cobro-prejuridico-juridico",
  },

  openGraph: {
    title:
      "Cobro prejurídico vs jurídico: diferencias clave y cuándo usar cada uno en Colombia",
    description:
      "Aprende cuándo usar cobro prejurídico o jurídico y mejora tu estrategia de recuperación de cartera.",
    url: "https://cobrandoonline.com/blog/diferencias-cobro-prejuridico-juridico",
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
              headline:
                "Cobro prejurídico vs cobro jurídico: diferencias clave y cuándo usar cada uno",
              description:
                "Conoce las diferencias entre cobro prejurídico y cobro jurídico, cuándo aplicar cada uno y cómo impactan en la recuperación de cartera.",
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
                  "https://cobrandoonline.com/blog/diferencias-cobro-prejuridico-juridico",
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
                  name: "¿Siempre se debe iniciar con cobro prejurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "En la mayoría de los casos sí, ya que permite intentar una solución amistosa antes de acudir a la vía judicial.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo conviene pasar a cobro jurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cuando el deudor no responde, incumple acuerdos o existe riesgo de prescripción de la deuda.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <DiferenciasCobroPrejuridicoJuridicoContent />
    </>
  );
}
