import { Metadata } from "next";
import DemandaEjecutivaDeuda from "./DemandaEjecutivaDeuda";

export const metadata: Metadata = {
  title:
    "Demanda ejecutiva por deuda en Colombia (Guía 2026): requisitos, proceso, embargos y tiempos",

  description:
    "Aprenda cómo funciona una demanda ejecutiva por deuda en Colombia, cuándo conviene iniciar el proceso, qué documentos sirven, qué bienes pueden embargarse y cómo aumentar la recuperación de cartera.",

  keywords: [
    "demanda ejecutiva por deuda Colombia",
    "proceso ejecutivo Colombia",
    "demanda ejecutiva factura electrónica",
    "demanda ejecutiva pagaré",
    "demanda ejecutiva letra de cambio",
    "cómo recuperar una deuda judicialmente",
    "cobro jurídico Colombia",
    "proceso ejecutivo por factura",
    "embargo de cuentas bancarias Colombia",
    "embargo de bienes deudor",
    "recuperación judicial de cartera",
    "demanda por incumplimiento de pago",
    "cómo demandar una deuda",
    "cobro ejecutivo empresas",
    "cobranza judicial Colombia",
    "recuperación de cartera empresarial",
    "demanda ejecutiva empresas",
    "cobro judicial facturas",
  ],

  alternates: {
    canonical:
      "https://cobrandoonline.com/blog/demanda-ejecutiva-por-deuda-colombia",
  },

  openGraph: {
    title:
      "Demanda ejecutiva por deuda en Colombia: requisitos, proceso, embargos y tiempos",

    description:
      "Descubra cuándo iniciar una demanda ejecutiva, qué documentos permiten demandar una deuda, cuánto tarda el proceso y qué bienes pueden embargarse en Colombia.",

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
                "Demanda ejecutiva por deuda en Colombia: guía completa para recuperar cartera empresarial",

              description:
                "Conozca cuándo iniciar una demanda ejecutiva por deuda en Colombia, los requisitos legales, los documentos necesarios, las etapas del proceso, las medidas cautelares y las estrategias para aumentar la recuperación de cartera.",

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

              dateModified: "2026-07-23",

              inLanguage: "es",

              keywords: [
                "demanda ejecutiva",
                "proceso ejecutivo",
                "cobro jurídico",
                "recuperación de cartera",
                "embargo de bienes",
                "factura electrónica",
                "pagaré",
                "empresas",
              ],
            },

            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué es una demanda ejecutiva por deuda en Colombia?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Es un proceso judicial mediante el cual un acreedor solicita a un juez ordenar el pago de una obligación respaldada por un título ejecutivo como un pagaré, una factura electrónica o una letra de cambio.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuándo conviene presentar una demanda ejecutiva?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Generalmente cuando el cobro preventivo y prejurídico no han generado resultados, existe una deuda exigible y se cuenta con documentos suficientes para iniciar el proceso.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué documentos sirven para demandar una deuda?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Dependiendo del caso pueden utilizarse pagarés, facturas electrónicas, letras de cambio, contratos, acuerdos de pago y otros documentos que constituyan un título ejecutivo.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué bienes pueden embargarse durante un proceso ejecutivo?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Pueden embargarse cuentas bancarias, vehículos, inmuebles, acciones, derechos económicos, salarios dentro de los límites legales y otros bienes autorizados por la legislación colombiana.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuánto tarda una demanda ejecutiva por deuda?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La duración depende de la complejidad del caso, la carga del juzgado, la ubicación del deudor, la existencia de bienes embargables y la oposición presentada dentro del proceso.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Puede embargarse una cuenta bancaria del deudor?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. Cuando el juez lo autoriza, el embargo de cuentas bancarias puede utilizarse como medida cautelar para garantizar el cumplimiento de la obligación.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué ocurre si el deudor no tiene bienes?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "En estos casos suele realizarse una investigación patrimonial para identificar activos presentes o futuros que permitan continuar la recuperación de la deuda.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Es obligatorio intentar un cobro prejurídico antes de demandar?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Aunque no siempre es un requisito legal, realizar una gestión prejurídica suele aumentar las probabilidades de recuperación y reducir costos para las empresas.",
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
