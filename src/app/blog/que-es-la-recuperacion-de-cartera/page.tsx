import { Metadata } from "next";
import QueEsLaRecuperacionDeCarteraContent from "./QueEsLaRecuperacionDeCarteraContent";

export const metadata: Metadata = {
  title:
    "¿Qué es la recuperación de cartera en Colombia? Cómo funciona y por qué es clave para tu empresa",
  description:
    "Aprende qué es la recuperación de cartera en Colombia, cómo funciona el proceso de cobro y por qué es clave para la liquidez empresarial.",

  keywords: [
    "recuperacion de cartera Colombia",
    "cobro de cartera empresas",
    "cartera vencida Colombia",
    "gestion de cobranza",
    "recuperar deudas empresas",
    "estrategias de cobranza Colombia",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/que-es-la-recuperacion-de-cartera",
  },

  openGraph: {
    title:
      "¿Qué es la recuperación de cartera en Colombia? Cómo funciona paso a paso",
    description:
      "Descubre cómo funciona la recuperación de cartera en Colombia y cómo mejorar el flujo de caja de tu empresa.",
    url: "https://cobrandoonline.com/blog/que-es-la-recuperacion-de-cartera",
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
      {/* ================= SCHEMA SEO ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline:
                "¿Qué es la recuperación de cartera en Colombia y cómo funciona?",
              description:
                "Conoce qué es la recuperación de cartera en Colombia, cómo funciona el proceso de cobro y por qué es clave para la liquidez empresarial.",
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
                  "https://cobrandoonline.com/blog/que-es-la-recuperacion-de-cartera",
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
                  name: "¿Qué es la recuperación de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es el proceso mediante el cual una empresa gestiona el cobro de deudas pendientes para mejorar su liquidez y reducir la morosidad.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué pasa si no se gestiona la cartera vencida?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Puede afectar el flujo de caja, aumentar la morosidad y generar riesgos financieros para la empresa.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <QueEsLaRecuperacionDeCarteraContent />
    </>
  );
}
