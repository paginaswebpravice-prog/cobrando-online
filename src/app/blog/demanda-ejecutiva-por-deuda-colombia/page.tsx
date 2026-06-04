import { Metadata } from "next";
import DemandaEjecutivaDeuda from "./DemandaEjecutivaDeuda";

export const metadata: Metadata = {
  title: "Demanda ejecutiva por deuda en Colombia: guía paso a paso",
  description:
    "Aprende cómo funciona una demanda ejecutiva por deuda en Colombia, cuáles son sus requisitos y qué bienes pueden ser embargados.",

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/demanda-ejecutiva-por-deuda-colombia",
  },

  openGraph: {
    title: "Demanda ejecutiva por deuda en Colombia",
    description:
      "Conoce cómo iniciar una demanda ejecutiva, qué requisitos exige y cómo funciona el embargo de bienes en Colombia.",
    url: "https://cobrandoonline.com/blog/demanda-ejecutiva-por-deuda-colombia",
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
                "Demanda ejecutiva por deuda en Colombia: guía paso a paso",
              description:
                "Guía sobre demandas ejecutivas para recuperar deudas y embargar bienes en Colombia.",
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
                  "https://cobrandoonline.com/blog/demanda-ejecutiva-por-deuda-colombia",
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
                  name: "¿Qué es una demanda ejecutiva?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es un proceso judicial utilizado para exigir el pago de una deuda respaldada por documentos válidos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué documentos sirven para una demanda ejecutiva?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Pagarés, facturas, contratos, letras de cambio y acuerdos firmados pueden servir como soporte de la deuda.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué bienes pueden ser embargados?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dependiendo del caso, pueden embargarse cuentas bancarias, vehículos, inmuebles y otros bienes autorizados por la ley.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <DemandaEjecutivaDeuda />
    </>
  );
}
