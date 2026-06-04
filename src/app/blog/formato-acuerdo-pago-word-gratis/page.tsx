import { Metadata } from "next";
import FormatoAcuerdoPagoWord from "./FormatoAcuerdoPagoWord";

export const metadata: Metadata = {
  title:
    "Formato de acuerdo de pago en Word [Gratis] | Modelo para cobrar deudas",
  description:
    "Descarga un formato de acuerdo de pago en Word y aprende cómo estructurarlo correctamente para recuperar cartera en Colombia.",

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/formato-acuerdo-pago-word-gratis",
  },

  openGraph: {
    title: "Formato de acuerdo de pago en Word [Gratis]",
    description:
      "Conoce cómo hacer un acuerdo de pago correctamente y descarga un modelo para recuperar cartera.",
    url: "https://cobrandoonline.com/blog/formato-acuerdo-pago-word-gratis",
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
              headline: "Formato de acuerdo de pago en Word [Gratis]",
              description:
                "Guía para crear acuerdos de pago efectivos y recuperar cartera en Colombia.",
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
                  "https://cobrandoonline.com/blog/formato-acuerdo-pago-word-gratis",
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
                  name: "¿Qué es un acuerdo de pago?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es un documento donde el deudor reconoce una deuda y se compromete a pagarla en determinadas fechas o cuotas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué debe incluir un acuerdo de pago?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Debe incluir datos de las partes, valor de la deuda, cuotas, fechas de pago y consecuencias por incumplimiento.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Un acuerdo de pago tiene validez legal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, siempre que esté correctamente documentado y firmado por las partes involucradas.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <FormatoAcuerdoPagoWord />
    </>
  );
}
