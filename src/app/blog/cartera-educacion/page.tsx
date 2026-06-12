import { Metadata } from "next";
import CarteraEducacion from "./CarteraEducacion";

export const metadata: Metadata = {
  title:
    "Cartera en educación: recuperación de cartera en colegios y universidades",
  description:
    "Aprende cómo gestionar la recuperación de cartera en instituciones educativas mediante estrategias de cobranza efectivas.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/cartera-educacion",
  },

  openGraph: {
    title:
      "Cartera en educación: estrategias de cobranza para instituciones educativas",
    description:
      "Conoce cómo reducir la morosidad y mejorar la recuperación de cartera en colegios, universidades e instituciones educativas.",
    url: "https://cobrandoonline.com/blog/cartera-educacion",
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
                "Cartera en educación: recuperación de cartera en instituciones educativas",
              description:
                "Guía sobre cobranza y recuperación de cartera en colegios, universidades e instituciones educativas.",
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
                "@id": "https://cobrandoonline.com/blog/cartera-educacion",
              },
              datePublished: "2025-01-01",
              dateModified: "2026-06-12",
              inLanguage: "es",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Por qué se genera cartera vencida en instituciones educativas?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Las principales causas son dificultades económicas de las familias, incumplimiento de acuerdos de pago y falta de seguimiento oportuno.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué estrategias ayudan a recuperar cartera educativa?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Los recordatorios automáticos, acuerdos de pago, seguimiento preventivo y políticas claras de recaudo suelen ser las más efectivas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿La cobranza preventiva reduce la morosidad?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. La cobranza preventiva permite actuar antes de que la deuda aumente y mejora significativamente las tasas de recuperación.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CarteraEducacion />
    </>
  );
}
