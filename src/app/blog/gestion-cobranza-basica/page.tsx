import { Metadata } from "next";
import GestionCobranzaBasica from "./GestionCobranzaBasica";

export const metadata: Metadata = {
  title:
    "Gestión de cobranza en Colombia: qué es, etapas, proceso y buenas prácticas para recuperar cartera",

  description:
    "Aprende qué es la gestión de cobranza, cuáles son sus etapas, cómo implementar un proceso eficiente y qué estrategias utilizan las empresas para reducir la cartera vencida y mejorar el flujo de caja.",

  keywords: [
    "gestión de cobranza",
    "gestión de cobranza en Colombia",
    "proceso de cobranza",
    "proceso de gestión de cobranza",
    "etapas de la cobranza",
    "administración de cartera",
    "gestión de cartera",
    "recuperación de cartera",
    "seguimiento de cartera",
    "cobranza preventiva",
    "cobranza administrativa",
    "cartera vencida",
    "indicadores de cartera",
    "software de cobranza",
    "cómo hacer una gestión de cobranza",
  ],

  alternates: {
    canonical: "https://cobrandoonline.com/blog/gestion-cobranza-basica",
  },

  openGraph: {
    title:
      "Gestión de cobranza en Colombia: guía completa para recuperar cartera de forma eficiente",

    description:
      "Descubre cómo funciona la gestión de cobranza, sus etapas, indicadores, herramientas y estrategias para recuperar cartera sin afectar la relación con tus clientes.",

    url: "https://cobrandoonline.com/blog/gestion-cobranza-basica",

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
                "Gestión de cobranza en Colombia: qué es, etapas, proceso y buenas prácticas para recuperar cartera",

              alternativeHeadline:
                "Guía completa para implementar una gestión de cobranza eficiente en empresas",

              description:
                "Aprende qué es la gestión de cobranza, cómo funciona el proceso de recuperación de cartera, cuáles son sus etapas y qué estrategias ayudan a reducir la morosidad sin afectar la relación con los clientes.",

              keywords:
                "gestión de cobranza, gestión de cartera, cobranza administrativa, cobranza preventiva, recuperación de cartera, proceso de cobranza",

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
                  "https://cobrandoonline.com/blog/gestion-cobranza-basica",
              },

              datePublished: "2026-01-01",

              dateModified: "2026-07-27",

              inLanguage: "es",

              articleSection: "Gestión de cartera",

              wordCount: 3400,
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es la gestión de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La gestión de cobranza es el conjunto de procesos que realizan las empresas para recuperar oportunamente el dinero correspondiente a facturas, créditos o servicios prestados, reduciendo la cartera vencida y mejorando el flujo de caja.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Por qué es importante la gestión de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque permite mantener liquidez, disminuir la morosidad, mejorar la rentabilidad y reducir el riesgo financiero derivado de pagos atrasados.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cuáles son las etapas de una gestión de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Generalmente comprende la cobranza preventiva, el seguimiento de pagos, la cobranza administrativa, la negociación, el cobro prejurídico y, cuando es necesario, el cobro jurídico.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué indicadores permiten evaluar la gestión de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Los principales indicadores son el porcentaje de recuperación, la cartera vencida, el DSO, la rotación de cartera, la antigüedad de saldos y el índice de morosidad.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué herramientas ayudan a mejorar la gestión de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Las empresas utilizan CRM, software especializado de cartera, automatización de correos, recordatorios por WhatsApp, indicadores financieros y reportes en tiempo real para optimizar la recuperación de cartera.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cuándo una empresa debería externalizar la gestión de cobranza?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cuando la cartera vencida aumenta, el equipo interno no alcanza a realizar seguimiento oportuno o se requiere experiencia especializada para recuperar obligaciones de difícil recaudo.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <GestionCobranzaBasica />
    </>
  );
}
