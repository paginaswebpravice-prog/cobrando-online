import { Metadata } from "next";
import ErroresRecuperacionCartera from "./ErroresRecuperacionCartera";

export const metadata: Metadata = {
  title:
    "Errores comunes en la recuperación de cartera: cómo evitarlos y mejorar el recaudo",
  description:
    "Descubre los errores más frecuentes en la recuperación de cartera y aprende cómo mejorar tus resultados de cobranza empresarial.",

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/errores-comunes-recuperacion-cartera",
  },

  openGraph: {
    title:
      "Errores comunes en la recuperación de cartera que afectan el flujo de caja",
    description:
      "Conoce los principales errores que reducen la efectividad de la cobranza y cómo evitarlos.",
    url: "https://cobrandoonline.com/blog/errores-comunes-recuperacion-cartera",
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
              headline: "Errores comunes en la recuperación de cartera",
              description:
                "Guía para identificar y evitar los errores más frecuentes en los procesos de cobranza empresarial.",
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
                  "https://cobrandoonline.com/blog/errores-comunes-recuperacion-cartera",
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
                  name: "¿Cuál es el error más común en la recuperación de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Uno de los errores más frecuentes es esperar demasiado tiempo para iniciar la gestión de cobro.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es importante documentar las deudas?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque los documentos sirven como soporte para reclamaciones y eventuales procesos jurídicos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo mejorar la recuperación de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Implementando procesos claros, seguimiento constante, segmentación de clientes y estrategias de cobranza adecuadas.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ErroresRecuperacionCartera />
    </>
  );
}
