import { Metadata } from "next";
import ComoRecuperarCarteraContent from "./ComoRecuperarCarteraContent";

export const metadata: Metadata = {
  title: "¿Cómo recuperar cartera vencida en Colombia? Estrategias efectivas",
  description:
    "Aprende cómo recuperar cartera vencida en Colombia con estrategias prejurídicas y jurídicas. Mejora el flujo de caja de tu empresa.",

  keywords: [
    "recuperar cartera vencida",
    "cobro de cartera Colombia",
    "cobro prejuridico",
    "cobro juridico Colombia",
    "recuperacion de cartera empresas",
    "estrategias de cobranza",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/como-recuperar-cartera-vencida",
  },

  openGraph: {
    title: "¿Cómo recuperar cartera vencida de manera efectiva?",
    description:
      "Conoce estrategias efectivas para recuperar cartera vencida y mejorar la liquidez de tu empresa.",
    url: "https://cobrandoonline.com/blog/como-recuperar-cartera-vencida",
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
              headline: "¿Cómo recuperar cartera vencida de manera efectiva?",
              description:
                "Conoce las estrategias legales y administrativas más efectivas para recuperar cartera vencida y mejorar el flujo de caja.",
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
                  "https://cobrandoonline.com/blog/como-recuperar-cartera-vencida",
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
                  name: "¿Qué es la cartera vencida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es el conjunto de obligaciones que no han sido pagadas en la fecha acordada.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo iniciar cobro jurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cuando el deudor no responde ni paga en la etapa prejurídica.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ComoRecuperarCarteraContent />
    </>
  );
}
