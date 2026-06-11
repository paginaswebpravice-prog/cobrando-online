import { Metadata } from "next";
import CicloRecuperacionCartera from "./CicloRecuperacionCartera";

export const metadata: Metadata = {
  title:
    "Ciclo completo de recuperación de cartera explicado | Guía paso a paso",

  description:
    "Conoce las etapas del ciclo de recuperación de cartera, desde la evaluación del cliente hasta la cobranza jurídica y recuperación efectiva de deudas.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/ciclo-recuperacion-cartera",
  },

  openGraph: {
    title: "Ciclo completo de recuperación de cartera explicado",
    description:
      "Aprende cómo funciona el proceso de recuperación de cartera desde la prevención hasta el cobro jurídico.",
    url: "https://cobrandoonline.com/blog/ciclo-recuperacion-cartera",
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
              headline: "Ciclo completo de recuperación de cartera explicado",
              description:
                "Guía detallada sobre las etapas de recuperación de cartera en empresas.",
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
                  "https://cobrandoonline.com/blog/ciclo-recuperacion-cartera",
              },
              datePublished: "2026-06-11",
              dateModified: "2026-06-11",
              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es el ciclo de recuperación de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es el conjunto de etapas y acciones que una empresa realiza para recuperar oportunamente sus cuentas por cobrar.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuál es la primera etapa del ciclo de recuperación?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La evaluación del cliente y el otorgamiento del crédito antes de realizar la venta.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo se inicia el cobro jurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cuando las acciones preventivas, administrativas y prejurídicas no logran recuperar la deuda.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CicloRecuperacionCartera />
    </>
  );
}
