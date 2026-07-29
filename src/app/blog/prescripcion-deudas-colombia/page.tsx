import { Metadata } from "next";
import PrescripcionDeudasContent from "./PrescripcionDeudasContent";

export const metadata: Metadata = {
  title:
    "¿Cuándo prescribe una deuda en Colombia? Plazos, tipos de obligaciones y cómo evitar perder el derecho a cobrar (Guía 2026)",

  description:
    "Conoce cuándo prescribe una deuda en Colombia, cuánto tiempo duran los pagarés, facturas y contratos, cómo interrumpir la prescripción y qué hacer para recuperar cartera antes de perder el derecho de cobro.",

  keywords: [
    "prescripción de deudas Colombia",
    "cuándo prescribe una deuda",
    "prescripción de cartera",
    "prescripción pagaré Colombia",
    "prescripción factura electrónica",
    "prescripción letra de cambio",
    "cuánto dura una deuda Colombia",
    "cobro de cartera Colombia",
    "recuperación de cartera",
    "cómo evitar la prescripción de una deuda",
    "cobranza prejurídica",
    "cartera vencida",
    "empresas de cobranza",
    "gestión de cartera",
    "interrupción de la prescripción",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/prescripcion-deudas-colombia",
  },

  openGraph: {
    title:
      "¿Cuándo prescribe una deuda en Colombia? Evita perder el derecho a cobrar",

    description:
      "Descubre cuánto tiempo tarda en prescribir una deuda en Colombia, qué obligaciones tienen plazos diferentes y cómo proteger la recuperación de cartera.",

    url: "https://cobrandoonline.com/blog/prescripcion-deudas-colombia",

    siteName: "Cobrando Online",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Prescripción de deudas en Colombia: plazos, ejemplos y cómo evitar perder el dinero",

    description:
      "Aprende cuándo prescribe una deuda y qué acciones permiten conservar el derecho a cobrar judicialmente.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  authors: [
    {
      name: "Cobrando Online",
    },
  ],

  category: "Finanzas",
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
                "¿Cuándo prescribe una deuda en Colombia? Plazos, tipos de obligaciones y cómo evitar perder el derecho a cobrar",

              alternativeHeadline:
                "Guía completa sobre la prescripción de deudas en Colombia para empresas y acreedores",

              description:
                "Aprende cuándo prescribe una deuda en Colombia, qué plazos aplican según el tipo de obligación y cómo evitar perder el derecho a cobrar.",

              keywords:
                "prescripción de deudas Colombia, cartera vencida, pagaré, factura, recuperación de cartera",

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
                  "https://cobrandoonline.com/blog/prescripcion-deudas-colombia",
              },

              datePublished: "2025-01-01",

              dateModified: "2026-07-29",

              inLanguage: "es-CO",
            },

            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Cuándo prescribe una deuda en Colombia?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "El plazo depende del tipo de obligación. En muchos títulos valores como pagarés, letras de cambio y facturas existen términos específicos establecidos por la legislación colombiana, mientras que otras obligaciones pueden tener plazos diferentes.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué ocurre cuando una deuda prescribe?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Cuando opera la prescripción, el acreedor puede perder la posibilidad de exigir judicialmente el pago si no realizó oportunamente las actuaciones legales correspondientes.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo evitar que una deuda prescriba?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La mejor estrategia consiste en realizar seguimiento permanente a la cartera, negociar acuerdos de pago cuando sea necesario e iniciar oportunamente las acciones judiciales antes del vencimiento del término legal.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Un pago parcial puede interrumpir la prescripción?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Dependiendo del caso concreto, un reconocimiento de la obligación o un abono realizado por el deudor puede producir efectos sobre el término de prescripción, por lo que es importante documentar adecuadamente estas actuaciones.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué las empresas deben controlar los tiempos de prescripción?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Porque una gestión tardía puede impedir la recuperación judicial de la cartera y generar pérdidas económicas importantes para la empresa.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <PrescripcionDeudasContent />
    </>
  );
}
