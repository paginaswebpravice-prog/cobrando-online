import { Metadata } from "next";
import RecuperacionCarteraPymes from "./RecuperacionCarteraPymes";

export const metadata: Metadata = {
  title: "Recuperación de cartera para PYMES en Colombia: guía completa",
  description:
    "Aprende cómo las pequeñas y medianas empresas pueden recuperar cartera vencida, reducir la mora y mejorar su flujo de caja en Colombia.",

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/recuperacion-cartera-pymes-guia-colombia",
  },

  openGraph: {
    title: "Recuperación de cartera para PYMES: guía completa en Colombia",
    description:
      "Conoce estrategias efectivas para reducir la mora y recuperar cartera en pequeñas y medianas empresas.",
    url: "https://cobrandoonline.com/blog/recuperacion-cartera-pymes-guia-colombia",
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
                "Recuperación de cartera para PYMES: guía completa en Colombia",
              description:
                "Guía para que las pequeñas y medianas empresas mejoren su recuperación de cartera y reduzcan la mora.",
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
                  "https://cobrandoonline.com/blog/recuperacion-cartera-pymes-guia-colombia",
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
                  name: "¿Qué es la recuperación de cartera para PYMES?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es el proceso mediante el cual una pequeña o mediana empresa gestiona el cobro de deudas y facturas pendientes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo reducir la mora en una PYME?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Implementando seguimiento constante, políticas claras de pago y estrategias de cobranza oportunas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo iniciar un cobro jurídico en una PYME?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cuando el cliente incumple acuerdos, evita responder o la deuda permanece vencida durante largos periodos.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <RecuperacionCarteraPymes />
    </>
  );
}
