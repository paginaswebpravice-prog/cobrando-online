import { Metadata } from "next";
import EmbargosEnColombia from "./EmbargosEnColombia";

export const metadata: Metadata = {
  title:
    "Embargos en Colombia: qué se puede embargar y cuáles son los límites legales",

  description:
    "Conoce qué bienes pueden ser embargados en Colombia, cómo funciona el embargo de cuentas bancarias, salarios e inmuebles dentro de un proceso judicial.",

  alternates: {
    canonical: "https://cobrandoonline.com/blog/embargos-en-colombia",
  },

  openGraph: {
    title: "Embargos en Colombia: qué se puede embargar",
    description:
      "Aprende cómo funcionan los embargos en Colombia y qué bienes pueden ser afectados en un proceso de cobro jurídico.",
    url: "https://cobrandoonline.com/blog/embargos-en-colombia",
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
              headline: "Embargos en Colombia: qué se puede embargar",
              description:
                "Guía sobre bienes embargables, límites legales y funcionamiento del embargo en Colombia.",
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
                "@id": "https://cobrandoonline.com/blog/embargos-en-colombia",
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
                  name: "¿Qué es un embargo?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es una medida cautelar decretada por un juez para asegurar bienes o recursos que garanticen el pago de una deuda.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Se pueden embargar cuentas bancarias?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Un juez puede ordenar el embargo de cuentas bancarias hasta por el monto autorizado dentro del proceso.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Todo el salario puede ser embargado?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. La legislación colombiana establece límites para proteger parte de los ingresos del trabajador.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <EmbargosEnColombia />
    </>
  );
}
