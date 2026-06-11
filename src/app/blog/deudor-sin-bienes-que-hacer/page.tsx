import { Metadata } from "next";
import DeudorSinBienesQueHacer from "./DeudorSinBienesQueHacer";

export const metadata: Metadata = {
  title: "Qué hacer si el deudor no tiene bienes embargables en Colombia",
  description:
    "Conoce las alternativas legales y estrategias para recuperar una deuda cuando el deudor no posee bienes embargables.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/deudor-sin-bienes-que-hacer",
  },

  openGraph: {
    title: "Qué hacer si el deudor no tiene bienes embargables",
    description:
      "Aprende qué opciones existen para recuperar una deuda cuando el deudor aparentemente no tiene patrimonio.",
    url: "https://cobrandoonline.com/blog/deudor-sin-bienes-que-hacer",
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
              headline: "Qué hacer si el deudor no tiene bienes embargables",
              description:
                "Guía sobre las alternativas legales disponibles cuando un deudor no posee bienes para embargo.",
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
                  "https://cobrandoonline.com/blog/deudor-sin-bienes-que-hacer",
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
                  name: "¿Se puede cobrar una deuda si el deudor no tiene bienes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Existen alternativas como acuerdos de pago, investigación patrimonial y acciones judiciales que pueden facilitar la recuperación futura.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Vale la pena demandar a un deudor sin bienes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Depende del caso, pero muchas veces el proceso permite identificar activos futuros o evitar la prescripción de la deuda.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo saber si un deudor tiene patrimonio?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mediante investigaciones patrimoniales que permitan identificar inmuebles, vehículos, cuentas bancarias u otros activos.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <DeudorSinBienesQueHacer />
    </>
  );
}
