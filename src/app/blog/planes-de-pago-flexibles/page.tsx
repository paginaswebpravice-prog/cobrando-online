import { Metadata } from "next";
import PlanesPagoFlexibles from "./PlanesPagoFlexibles";

export const metadata: Metadata = {
  title:
    "Planes de pago flexibles: cómo recuperar cartera adaptándose al cliente",
  description:
    "Conoce cómo funcionan los planes de pago flexibles y cómo pueden ayudar a mejorar la recuperación de cartera empresarial.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/planes-de-pago-flexibles",
  },

  openGraph: {
    title: "Planes de pago flexibles para recuperar cartera en Colombia",
    description:
      "Aprende a diseñar planes de pago adaptados a la capacidad financiera de tus clientes para mejorar la recuperación de cartera.",
    url: "https://cobrandoonline.com/blog/planes-de-pago-flexibles",
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
                "Planes de pago flexibles para mejorar la recuperación de cartera",
              description:
                "Guía sobre modelos flexibles de pago y negociación de deudas empresariales.",
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
                  "https://cobrandoonline.com/blog/planes-de-pago-flexibles",
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
                  name: "¿Qué es un plan de pago flexible?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es un acuerdo que adapta las condiciones de pago de una deuda a la capacidad financiera del cliente.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué funcionan los planes de pago flexibles?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque facilitan el cumplimiento de la obligación y aumentan las probabilidades de recuperación de cartera.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Deben formalizarse por escrito?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, para garantizar claridad y respaldo jurídico ante posibles incumplimientos.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <PlanesPagoFlexibles />
    </>
  );
}
