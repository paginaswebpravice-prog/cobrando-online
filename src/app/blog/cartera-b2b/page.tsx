import { Metadata } from "next";
import CarteraB2B from "./CarteraB2B";

export const metadata: Metadata = {
  title:
    "Cobranza B2B: gestión de cartera entre empresas y recuperación de pagos",
  description:
    "Aprende cómo gestionar la cartera B2B, reducir la morosidad y mejorar la recuperación de pagos entre empresas.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cartera-b2b",
  },

  openGraph: {
    title: "Cobranza B2B: estrategias para recuperar cartera entre empresas",
    description:
      "Conoce los desafíos de la cobranza B2B y las mejores prácticas para recuperar pagos sin afectar relaciones comerciales.",
    url: "https://cobrandoonline.com/blog/cartera-b2b",
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
                "Cobranza B2B: gestión de cartera entre empresas y recuperación de pagos",
              description:
                "Guía para gestionar cartera B2B y optimizar la recuperación de pagos empresariales.",
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
                "@id": "https://cobrandoonline.com/blog/cartera-b2b",
              },
              datePublished: "2026-01-01",
              dateModified: "2026-06-12",
              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué significa cobranza B2B?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es la gestión de recuperación de pagos pendientes entre empresas que mantienen relaciones comerciales.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuál es el principal reto de la cobranza B2B?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Recuperar la deuda sin afectar relaciones comerciales estratégicas de largo plazo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo mejorar la recuperación de cartera B2B?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mediante seguimiento preventivo, automatización, evaluación de riesgo y políticas claras de crédito.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CarteraB2B />
    </>
  );
}
