import { Metadata } from "next";
import EstrategiasCobranza2026 from "./EstrategiasCobranza2026";

export const metadata: Metadata = {
  title: "Mejores estrategias de cobranza efectiva en 2026",
  description:
    "Descubre las estrategias de cobranza más efectivas en 2026 para reducir la morosidad y mejorar la recuperación de cartera.",

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/mejores-estrategias-cobranza-2026",
  },

  openGraph: {
    title: "Mejores estrategias de cobranza efectiva en 2026",
    description:
      "Conoce cómo reducir la mora y mejorar el flujo de caja mediante estrategias modernas de cobranza.",
    url: "https://cobrandoonline.com/blog/mejores-estrategias-cobranza-2026",
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
              headline: "Mejores estrategias de cobranza efectiva en 2026",
              description:
                "Guía sobre estrategias modernas de cobranza para mejorar la recuperación de cartera en 2026.",
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
                  "https://cobrandoonline.com/blog/mejores-estrategias-cobranza-2026",
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
                  name: "¿Cuáles son las mejores estrategias de cobranza en 2026?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La automatización, segmentación de clientes y seguimiento constante son algunas de las estrategias más efectivas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es importante automatizar la cobranza?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque permite hacer seguimiento constante, reducir errores y mejorar la recuperación de cartera.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo iniciar cobro jurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cuando las gestiones administrativas no generan resultados y la deuda continúa aumentando.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <EstrategiasCobranza2026 />
    </>
  );
}
