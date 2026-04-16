import { Metadata } from "next";
import CalcularComisionRecuperacionCartera from "./CalcularComisionRecuperacionCartera";

export const metadata: Metadata = {
  title: "¿Cómo calcular la comisión por recuperación de cartera en Colombia?",
  description:
    "Aprende cómo se calcula la comisión por recuperación de cartera en Colombia. Factores, etapas y modelos de cobro explicados de forma clara.",

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/calcular-comision-recuperacion-cartera",
  },

  openGraph: {
    title: "¿Cómo calcular la comisión por recuperación de cartera?",
    description:
      "Guía completa para entender cómo se calcula la comisión en procesos de recuperación de cartera en Colombia.",
    url: "https://cobrandoonline.com/blog/calcular-comision-recuperacion-cartera",
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
      {/* SCHEMA SEO AVANZADO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline:
                "¿Cómo se calcula la comisión en la recuperación de cartera?",
              description:
                "Explicación de cómo se calcula la comisión en procesos de recuperación de cartera en Colombia.",
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
                  "https://cobrandoonline.com/blog/calcular-comision-recuperacion-cartera",
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
                  name: "¿Cómo se calcula la comisión por recuperación de cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Generalmente se calcula como un porcentaje sobre el valor efectivamente recuperado, dependiendo de la etapa del proceso y la complejidad del caso.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿La comisión es fija?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, la comisión puede variar según factores como la etapa del cobro, la antigüedad de la deuda y el nivel de dificultad del caso.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Se paga comisión si no se recupera la cartera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "En muchos modelos basados en resultados, solo se paga comisión sobre el dinero efectivamente recuperado.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CalcularComisionRecuperacionCartera />
    </>
  );
}
