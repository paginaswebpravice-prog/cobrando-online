import { Metadata } from "next";
import CuandoIniciarProcesoDeCobroContent from "./CuandoIniciarProcesoDeCobroContent";

export const metadata: Metadata = {
  title: "¿Cuándo iniciar un proceso de cobro de cartera en Colombia?",
  description:
    "Descubre cuándo iniciar un proceso de cobro de cartera en Colombia y evita la prescripción de deudas. Mejora tu recuperación con estrategias efectivas.",

  keywords: [
    "cuando iniciar cobro de cartera",
    "cobro de cartera Colombia",
    "recuperacion de cartera empresas",
    "cobro prejuridico",
    "cobro juridico Colombia",
    "prescripcion de deudas Colombia",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/cuando-iniciar-proceso-de-cobro",
  },

  openGraph: {
    title: "¿Cuándo iniciar un proceso de cobro de cartera?",
    description:
      "Aprende cuándo iniciar un proceso de cobro y aumenta la probabilidad de recuperar tu cartera.",
    url: "https://cobrandoonline.com/blog/cuando-iniciar-proceso-de-cobro",
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
              headline: "¿Cuándo iniciar un proceso de cobro de cartera?",
              description:
                "Identifica el momento adecuado para iniciar un proceso de cobro de cartera y aumenta la probabilidad de recuperación.",
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
                  "https://cobrandoonline.com/blog/cuando-iniciar-proceso-de-cobro",
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
                  name: "¿Cuántos días de mora justifican iniciar un cobro formal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Generalmente a partir de 30 días de mora se recomienda intensificar la gestión de cobro.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Es recomendable esperar antes de cobrar?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, retrasar la gestión reduce la probabilidad de recuperación y aumenta el riesgo de pérdida.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CuandoIniciarProcesoDeCobroContent />
    </>
  );
}
