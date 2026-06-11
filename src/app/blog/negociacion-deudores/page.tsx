import { Metadata } from "next";
import NegociacionDeudores from "./NegociacionDeudores";

export const metadata: Metadata = {
  title: "Cómo negociar con deudores y recuperar cartera de manera efectiva",
  description:
    "Aprende técnicas de negociación con deudores para mejorar la recuperación de cartera, reducir la mora y alcanzar acuerdos efectivos.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/negociacion-deudores",
  },

  openGraph: {
    title: "Cómo negociar con deudores y aumentar la recuperación de cartera",
    description:
      "Conoce las mejores estrategias para negociar con deudores y lograr acuerdos de pago efectivos.",
    url: "https://cobrandoonline.com/blog/negociacion-deudores",
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
                "Cómo negociar con deudores y mejorar la recuperación de cartera",
              description:
                "Guía práctica sobre técnicas de negociación para recuperar deudas y fortalecer la gestión de cobranza.",
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
                "@id": "https://cobrandoonline.com/blog/negociacion-deudores",
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
                  name: "¿Por qué es importante negociar antes de demandar?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque permite alcanzar acuerdos de pago más rápidos y económicos que un proceso judicial.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué debe incluir un acuerdo con un deudor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Debe incluir valores adeudados, fechas de pago, condiciones acordadas y firmas de las partes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿La negociación mejora la recuperación de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Una negociación efectiva aumenta las probabilidades de recaudo y ayuda a conservar relaciones comerciales.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <NegociacionDeudores />
    </>
  );
}
