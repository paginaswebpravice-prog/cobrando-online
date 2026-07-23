import { Metadata } from "next";
import DocumentosNecesariosCobrarDeudaContent from "./DocumentosNecesariosCobrarDeudaContent";

export const metadata: Metadata = {
  title:
    "Documentos para cobrar una deuda en Colombia: guía completa para empresas (2026)",

  description:
    "Conozca cuáles son los documentos más importantes para cobrar una deuda en Colombia. Aprenda cuándo una factura, contrato, pagaré o título ejecutivo facilitan la recuperación de cartera y reducen el riesgo de perder su dinero.",

  keywords: [
    "documentos para cobrar una deuda",
    "documentos necesarios para cobrar una deuda",
    "cómo cobrar una deuda en Colombia",
    "recuperación de cartera empresas",
    "factura electrónica título ejecutivo",
    "pagaré Colombia",
    "contrato para cobrar deuda",
    "documentos recuperación de cartera",
    "cobro prejurídico",
    "cobro jurídico",
    "cartera empresarial",
    "título ejecutivo Colombia",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/documentos-necesarios-cobrar-deuda",
  },

  openGraph: {
    title:
      "¿Qué documentos necesita para cobrar una deuda en Colombia? Guía completa 2026",

    description:
      "Descubra qué documentos realmente aumentan las probabilidades de recuperar una deuda: contratos, facturas, pagarés, soportes de entrega y mucho más.",

    url: "https://cobrandoonline.com/blog/documentos-necesarios-cobrar-deuda",

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
                "Documentos para cobrar una deuda en Colombia: guía completa para empresas",

              description:
                "Conozca cuáles son los documentos necesarios para recuperar una deuda mediante cobro prejurídico o jurídico en Colombia.",

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
                  "https://cobrandoonline.com/blog/documentos-necesarios-cobrar-deuda",
              },

              datePublished: "2025-01-01",

              dateModified: "2026-07-23",

              inLanguage: "es",

              keywords:
                "documentos para cobrar deuda, factura electrónica, pagaré, recuperación de cartera, título ejecutivo",
            },

            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué documento tiene más fuerza para cobrar una deuda?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Depende de cada caso. Sin embargo, documentos como el pagaré, la factura electrónica con los requisitos legales o algunos títulos ejecutivos permiten iniciar procesos de cobro con mayores posibilidades de éxito.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Una factura electrónica sirve para cobrar una deuda judicialmente?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "En muchos casos sí. Siempre que cumpla los requisitos establecidos por la legislación colombiana puede constituir un título ejecutivo.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Es obligatorio tener un pagaré para recuperar una cartera?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "No. Existen diferentes documentos que pueden respaldar una obligación, aunque contar con un pagaré suele facilitar considerablemente el proceso de recuperación.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué pasa si solo tengo correos electrónicos o conversaciones de WhatsApp?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Dependiendo del caso, estos soportes pueden complementar otras pruebas y ayudar a demostrar la existencia de la obligación.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué documentos debería conservar una empresa para reducir el riesgo de cartera vencida?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Lo recomendable es conservar contratos, órdenes de compra, facturas, soportes de entrega, comprobantes de pago, correos electrónicos, acuerdos de pago y cualquier evidencia relacionada con la obligación.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <DocumentosNecesariosCobrarDeudaContent />
    </>
  );
}
