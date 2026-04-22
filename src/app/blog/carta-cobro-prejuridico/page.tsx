import { Metadata } from "next";
import CartaCobroPrejuridicoContent from "./CartaCobroPrejuridicoContent";

export const metadata: Metadata = {
  title:
    "Carta de cobro prejurídico en Colombia (Ejemplo + Guía paso a paso 2026)",
  description:
    "Aprende cómo hacer una carta de cobro prejurídico en Colombia con ejemplo práctico. Recupera cartera antes de iniciar procesos legales y evita demandas.",

  keywords: [
    "carta de cobro prejuridico",
    "ejemplo carta de cobro",
    "cobro prejuridico Colombia",
    "modelo carta cobro deuda",
    "recuperacion de cartera Colombia",
    "cobranza prejuridica",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/carta-cobro-prejuridico",
  },

  openGraph: {
    title:
      "Carta de cobro prejurídico en Colombia (Ejemplo + Guía paso a paso)",
    description:
      "Descubre cómo redactar una carta de cobro prejurídico efectiva con ejemplo real y evita procesos judiciales innecesarios.",
    url: "https://cobrandoonline.com/blog/carta-cobro-prejuridico",
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
                "Carta de cobro prejurídico en Colombia: ejemplo práctico y guía paso a paso",
              description:
                "La carta de cobro prejurídico es una herramienta efectiva para recuperar cartera antes de iniciar acciones legales.",
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
                  "https://cobrandoonline.com/blog/carta-cobro-prejuridico",
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
                  name: "¿Qué es una carta de cobro prejurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es un documento formal que se envía al deudor antes de iniciar acciones legales para exigir el pago de una deuda.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo enviar una carta de cobro prejurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Se recomienda enviarla cuando la deuda ya presenta mora y no ha habido respuesta a recordatorios previos.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CartaCobroPrejuridicoContent />
    </>
  );
}
