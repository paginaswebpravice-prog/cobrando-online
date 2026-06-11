import { Metadata } from "next";
import RequisitosCobroJuridico from "./RequisitosCobroJuridico";

export const metadata: Metadata = {
  title:
    "Requisitos para iniciar cobro jurídico en Colombia | Documentos y condiciones",

  description:
    "Conoce los requisitos para iniciar un cobro jurídico en Colombia, los documentos necesarios y las condiciones para demandar una deuda.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/requisitos-cobro-juridico",
  },

  openGraph: {
    title: "Requisitos para iniciar cobro jurídico en Colombia",
    description:
      "Aprende qué documentos necesitas para iniciar un proceso de cobro jurídico y recuperar una deuda legalmente.",
    url: "https://cobrandoonline.com/blog/requisitos-cobro-juridico",
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
              headline: "Requisitos para iniciar cobro jurídico en Colombia",
              description:
                "Guía sobre documentos, condiciones y requisitos para iniciar procesos de cobro jurídico.",
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
                  "https://cobrandoonline.com/blog/requisitos-cobro-juridico",
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
                  name: "¿Qué se necesita para iniciar un cobro jurídico?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Se requiere una deuda exigible y documentos que acrediten la obligación, como pagarés, facturas o contratos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Es obligatorio tener un pagaré?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No necesariamente. También pueden utilizarse otros documentos que acrediten la existencia de la deuda.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Se puede demandar sin intentar cobrar primero?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "En muchos casos sí, aunque suele recomendarse realizar gestiones previas de cobranza para intentar una solución amistosa.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <RequisitosCobroJuridico />
    </>
  );
}
