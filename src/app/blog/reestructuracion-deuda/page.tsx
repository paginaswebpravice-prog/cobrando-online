import { Metadata } from "next";
import ReestructuracionDeuda from "./ReestructuracionDeuda";

export const metadata: Metadata = {
  title:
    "Reestructuración de deudas: cómo renegociar obligaciones y recuperar cartera",
  description:
    "Conoce cómo funciona la reestructuración de deudas, cuándo aplicarla y cuáles son sus beneficios para recuperar cartera sin procesos judiciales.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/reestructuracion-deuda",
  },

  openGraph: {
    title: "Reestructuración de deudas para recuperar cartera en Colombia",
    description:
      "Aprende cómo renegociar deudas y mejorar las posibilidades de recuperación de cartera mediante acuerdos estructurados.",
    url: "https://cobrandoonline.com/blog/reestructuracion-deuda",
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
                "Reestructuración de deudas para recuperar cartera de manera efectiva",
              description:
                "Guía sobre reestructuración de deudas y renegociación de obligaciones empresariales.",
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
                "@id": "https://cobrandoonline.com/blog/reestructuracion-deuda",
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
                  name: "¿Qué es una reestructuración de deuda?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es la modificación de las condiciones originales de una deuda para facilitar su pago.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo conviene renegociar una deuda?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cuando existen dificultades de liquidez temporales pero voluntad y capacidad futura de pago.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿La reestructuración evita un proceso judicial?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "En muchos casos sí, porque permite llegar a acuerdos que facilitan la recuperación de cartera sin demandar.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ReestructuracionDeuda />
    </>
  );
}
