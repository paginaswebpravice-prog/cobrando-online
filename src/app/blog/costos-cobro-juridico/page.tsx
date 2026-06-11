import { Metadata } from "next";
import CostosCobroJuridico from "./CostosCobroJuridico";

export const metadata: Metadata = {
  title: "Costos de un proceso de cobro jurídico en Colombia: guía completa",
  description:
    "Conoce cuáles son los costos de un proceso de cobro jurídico en Colombia, incluyendo honorarios, gastos judiciales y factores que afectan el valor final.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/costos-cobro-juridico",
  },

  openGraph: {
    title: "Costos de un proceso de cobro jurídico en Colombia",
    description:
      "Aprende qué gastos puede generar un proceso de cobro jurídico y cuándo vale la pena iniciar una demanda para recuperar una deuda.",
    url: "https://cobrandoonline.com/blog/costos-cobro-juridico",
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
              headline: "Costos de un proceso de cobro jurídico en Colombia",
              description:
                "Guía sobre los costos asociados a procesos de cobro jurídico y recuperación de cartera.",
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
                "@id": "https://cobrandoonline.com/blog/costos-cobro-juridico",
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
                  name: "¿Qué costos tiene un proceso de cobro jurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Normalmente incluye honorarios profesionales, notificaciones, gastos procesales y costos relacionados con medidas cautelares.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Los honorarios de abogados son obligatorios?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, generalmente son necesarios para representar adecuadamente al acreedor durante el proceso judicial.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Vale la pena demandar cualquier deuda?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No siempre. Es importante evaluar el valor de la deuda, la capacidad de pago del deudor y los costos estimados del proceso.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CostosCobroJuridico />
    </>
  );
}
