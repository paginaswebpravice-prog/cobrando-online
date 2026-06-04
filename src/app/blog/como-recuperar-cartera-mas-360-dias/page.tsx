import { Metadata } from "next";
import RecuperarCartera360Dias from "./RecuperarCartera360Dias";

export const metadata: Metadata = {
  title: "¿Cómo recuperar cartera de más de 360 días en Colombia?",
  description:
    "Aprende estrategias efectivas para recuperar cartera vencida de más de un año y aumentar las probabilidades de cobro en Colombia.",

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/como-recuperar-cartera-mas-360-dias",
  },

  openGraph: {
    title: "Cómo recuperar cartera de más de 360 días",
    description:
      "Conoce qué hacer cuando una deuda supera un año de mora y cómo aumentar las probabilidades de recuperación.",
    url: "https://cobrandoonline.com/blog/como-recuperar-cartera-mas-360-dias",
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
              headline: "¿Cómo recuperar cartera de más de 360 días?",
              description:
                "Guía para recuperar cartera vencida antigua y aumentar las probabilidades de cobro en Colombia.",
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
                  "https://cobrandoonline.com/blog/como-recuperar-cartera-mas-360-dias",
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
                  name: "¿Se puede recuperar una deuda de más de 360 días?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, aunque es más complejo, todavía es posible recuperar cartera antigua mediante estrategias de cobranza y acciones legales oportunas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo iniciar un cobro jurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Se recomienda evaluar un proceso jurídico cuando la deuda lleva varios meses vencida y no existen resultados positivos en la cobranza amistosa.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué errores dificultan recuperar cartera antigua?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dejar de hacer seguimiento, perder soportes de la deuda y esperar demasiado tiempo para actuar son errores frecuentes.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <RecuperarCartera360Dias />
    </>
  );
}
